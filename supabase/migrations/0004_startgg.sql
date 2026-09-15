-- =============================================================================
-- Blastzone 0004: start.gg-Verknüpfung und Placement-Cache
--
-- Im Supabase-Dashboard unter SQL Editor ausführen, nach 0001 bis 0003.
-- Idempotent: mehrfach ausführen schadet nicht.
--
-- Grundsatz: Beide Tabellen sind PRIVAT. Anders als `profiles` darf sie niemand
-- außer dem Besitzer lesen, auch nicht `anon`. Sonst ließe sich über die
-- öffentliche API herausfinden, welches Blastzone-Konto zu welchem start.gg-Spieler
-- gehört.
--
-- Der Cache wird mit dem Token des Nutzers geschrieben (kein Secret Key auf dem
-- Server). Ein Nutzer könnte seine eigene Cache-Zeile also an unserem Server
-- vorbei beschreiben. Deshalb signiert der Server jeden Eintrag per HMAC
-- (STARTGG_CACHE_KEY, nur in Vercel) und verwirft beim Lesen jede Zeile ohne
-- gültige Signatur. Die Datenbank prüft hier nur Form und Größe.
-- =============================================================================


-- ── Verknüpfung ──────────────────────────────────────────────────────────────

create table if not exists public.startgg_links (
  user_id uuid primary key default auth.uid() references public.profiles (id) on delete cascade,
  -- start.gg-Nutzer-Slugs sind immer „user/“ plus 8 Zeichen (Discriminator).
  slug text not null check (slug ~ '^user/[0-9a-z]{8}$'),
  -- Nur zur Anzeige, stammt aus der start.gg-Antwort beim Verknüpfen.
  gamer_tag text check (gamer_tag is null or char_length(gamer_tag) between 1 and 80),
  updated_at timestamptz not null default now()
);

alter table public.startgg_links enable row level security;

revoke all on public.startgg_links from anon, authenticated;
grant select, insert, update, delete on public.startgg_links to authenticated;

drop policy if exists "start.gg-Verknüpfung nur selbst lesen" on public.startgg_links;
create policy "start.gg-Verknüpfung nur selbst lesen"
  on public.startgg_links for select
  to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "start.gg-Verknüpfung selbst anlegen" on public.startgg_links;
create policy "start.gg-Verknüpfung selbst anlegen"
  on public.startgg_links for insert
  to authenticated
  with check (user_id = (select auth.uid()) and (select public.is_email_confirmed()));

drop policy if exists "start.gg-Verknüpfung selbst ändern" on public.startgg_links;
create policy "start.gg-Verknüpfung selbst ändern"
  on public.startgg_links for update
  to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "start.gg-Verknüpfung selbst lösen" on public.startgg_links;
create policy "start.gg-Verknüpfung selbst lösen"
  on public.startgg_links for delete
  to authenticated
  using (user_id = (select auth.uid()));


-- ── Placement-Cache ──────────────────────────────────────────────────────────

create table if not exists public.startgg_cache (
  user_id uuid primary key default auth.uid() references public.profiles (id) on delete cascade,
  slug text not null check (slug ~ '^user/[0-9a-z]{8}$'),
  payload jsonb not null,
  -- HMAC-SHA256 als Hex. Geprüft wird sie auf dem Server, hier nur die Form.
  signature text not null check (signature ~ '^[0-9a-f]{64}$'),
  fetched_at timestamptz not null default now(),
  -- Rund 15 Turniere mit je bis zu drei Events bleiben weit darunter.
  constraint startgg_cache_payload_size check (pg_column_size(payload) < 262144)
);

alter table public.startgg_cache enable row level security;

revoke all on public.startgg_cache from anon, authenticated;
grant select, insert, update, delete on public.startgg_cache to authenticated;

drop policy if exists "start.gg-Cache nur selbst lesen" on public.startgg_cache;
create policy "start.gg-Cache nur selbst lesen"
  on public.startgg_cache for select
  to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "start.gg-Cache selbst schreiben" on public.startgg_cache;
create policy "start.gg-Cache selbst schreiben"
  on public.startgg_cache for insert
  to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "start.gg-Cache selbst erneuern" on public.startgg_cache;
create policy "start.gg-Cache selbst erneuern"
  on public.startgg_cache for update
  to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "start.gg-Cache selbst löschen" on public.startgg_cache;
create policy "start.gg-Cache selbst löschen"
  on public.startgg_cache for delete
  to authenticated
  using (user_id = (select auth.uid()));


-- ── Zeitstempel und Besitzer setzt die Datenbank ─────────────────────────────

create or replace function public.startgg_touch()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.user_id := auth.uid();
  if tg_table_name = 'startgg_links' then
    new.updated_at := now();
  end if;
  return new;
end;
$$;

revoke all on function public.startgg_touch() from public, anon, authenticated;

drop trigger if exists startgg_links_touch on public.startgg_links;
create trigger startgg_links_touch
  before insert or update on public.startgg_links
  for each row execute function public.startgg_touch();

drop trigger if exists startgg_cache_touch on public.startgg_cache;
create trigger startgg_cache_touch
  before insert or update on public.startgg_cache
  for each row execute function public.startgg_touch();
