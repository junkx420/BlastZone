-- =============================================================================
-- Blastzone 0007: Skins, geteilte start.gg-Ergebnisse, Nachrichten, Blockieren
--
-- Im Supabase-Dashboard unter SQL Editor ausführen, nach 0006.
-- Idempotent: mehrfach ausführen schadet nicht.
--
-- Grundsätze wie in 0006: Neues für die Community nur für `authenticated`.
-- Einzige Ausnahme ist `profiles.main_skin`: Der Skin gehört zum Main, und der
-- steht schon heute öffentlich an jedem Kommentar.
--
-- Nachrichten lesen nur die zwei Beteiligten. Wer blockiert ist oder wer
-- Nachrichten abgeschaltet hat, bekommt keine neuen. Ob der Empfänger jemanden
-- blockiert hat, erfährt der Absender nicht aus der Tabelle, sondern nur als
-- „nicht möglich“ aus `can_message`.
-- =============================================================================


-- ── Skins ────────────────────────────────────────────────────────────────────
-- 1 ist der Standard-Skin, 2 bis 8 die Alts aus dem Spiel.

alter table public.profiles
  add column if not exists main_skin smallint not null default 1;

alter table public.profiles drop constraint if exists profiles_main_skin_range;
alter table public.profiles
  add constraint profiles_main_skin_range check (main_skin between 1 and 8);

grant update (main_skin) on public.profiles to authenticated;

alter table public.community_profiles
  add column if not exists secondary_skins smallint[] not null default '{}',
  add column if not exists show_placements boolean not null default false,
  add column if not exists allow_dms boolean not null default true;

-- Gleiche Reihenfolge wie `secondaries`. Fehlt ein Eintrag, gilt Skin 1.
alter table public.community_profiles drop constraint if exists community_profiles_secondary_skins_form;
alter table public.community_profiles
  add constraint community_profiles_secondary_skins_form
  check (
    cardinality(secondary_skins) <= 2
    and array_position(secondary_skins, null) is null
    and 1 <= all (secondary_skins)
    and 8 >= all (secondary_skins)
  );


-- ── start.gg-Ergebnisse teilen ───────────────────────────────────────────────
-- Zusätzliche Leserechte für Mitglieder, wenn der Besitzer `show_placements`
-- eingeschaltet hat. Angezeigt wird trotzdem nur, was der Server als bestätigt
-- und unverändert erkennt (Signaturen in api/_lib/startggOauth.ts und
-- startggCache.ts). Policies derselben Art werden verodert.

drop policy if exists "start.gg-Verknüpfung geteilt lesen" on public.startgg_links;
create policy "start.gg-Verknüpfung geteilt lesen"
  on public.startgg_links for select
  to authenticated
  using (exists (
    select 1 from public.community_profiles c
    where c.user_id = startgg_links.user_id and c.show_placements
  ));

drop policy if exists "start.gg-Cache geteilt lesen" on public.startgg_cache;
create policy "start.gg-Cache geteilt lesen"
  on public.startgg_cache for select
  to authenticated
  using (exists (
    select 1 from public.community_profiles c
    where c.user_id = startgg_cache.user_id and c.show_placements
  ));


-- ── Blockieren ───────────────────────────────────────────────────────────────

create table if not exists public.user_blocks (
  blocker_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  blocked_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  constraint user_blocks_not_self check (blocker_id <> blocked_id)
);

alter table public.user_blocks enable row level security;

revoke all on public.user_blocks from anon, authenticated;
grant select, insert, delete on public.user_blocks to authenticated;

-- Nur die eigene Liste. Wer blockiert wurde, sieht das nirgends.
drop policy if exists "Eigene Blockierungen lesen" on public.user_blocks;
create policy "Eigene Blockierungen lesen"
  on public.user_blocks for select
  to authenticated
  using (blocker_id = (select auth.uid()));

drop policy if exists "Selbst blockieren" on public.user_blocks;
create policy "Selbst blockieren"
  on public.user_blocks for insert
  to authenticated
  with check (blocker_id = (select auth.uid()));

drop policy if exists "Blockierung aufheben" on public.user_blocks;
create policy "Blockierung aufheben"
  on public.user_blocks for delete
  to authenticated
  using (blocker_id = (select auth.uid()));

create or replace function public.user_blocks_before_insert()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.blocker_id := auth.uid();
  new.created_at := now();
  return new;
end;
$$;

revoke all on function public.user_blocks_before_insert() from public, anon, authenticated;

drop trigger if exists user_blocks_before_insert on public.user_blocks;
create trigger user_blocks_before_insert
  before insert on public.user_blocks
  for each row execute function public.user_blocks_before_insert();


-- ── Nachrichten ──────────────────────────────────────────────────────────────

create table if not exists public.messages (
  id bigint generated always as identity primary key,
  sender_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  recipient_id uuid not null references public.profiles (id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000 and btrim(body) <> ''),
  created_at timestamptz not null default now(),
  read_at timestamptz,
  constraint messages_not_self check (sender_id <> recipient_id)
);

create index if not exists messages_pair_idx on public.messages (sender_id, recipient_id, id desc);
create index if not exists messages_inbox_idx on public.messages (recipient_id, sender_id, id desc);
create index if not exists messages_unread_idx on public.messages (recipient_id) where read_at is null;

alter table public.messages enable row level security;

revoke all on public.messages from anon, authenticated;
grant select, insert on public.messages to authenticated;
-- Ändern lässt sich nur der Lesezeitpunkt, und das nur beim Empfänger (Policy unten).
grant update (read_at) on public.messages to authenticated;

/*
 * Darf der aufrufende Nutzer diesem Konto schreiben? security definer, weil die
 * Blockierliste des Empfängers für den Absender nicht lesbar ist. Liefert nur
 * true oder false, nie den Grund.
 */
create or replace function public.can_message(p_recipient uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select auth.uid() is not null
    and p_recipient is not null
    and p_recipient <> auth.uid()
    and exists (select 1 from public.profiles p where p.id = p_recipient)
    and coalesce((select c.allow_dms from public.community_profiles c where c.user_id = p_recipient), true)
    and not exists (
      select 1 from public.user_blocks b
      where (b.blocker_id = p_recipient and b.blocked_id = auth.uid())
         or (b.blocker_id = auth.uid() and b.blocked_id = p_recipient)
    );
$$;

revoke all on function public.can_message(uuid) from public, anon;
grant execute on function public.can_message(uuid) to authenticated;

drop policy if exists "Nachrichten lesen nur Beteiligte" on public.messages;
create policy "Nachrichten lesen nur Beteiligte"
  on public.messages for select
  to authenticated
  using (sender_id = (select auth.uid()) or recipient_id = (select auth.uid()));

drop policy if exists "Nachrichten schreiben" on public.messages;
create policy "Nachrichten schreiben"
  on public.messages for insert
  to authenticated
  with check (
    sender_id = (select auth.uid())
    and (select public.is_email_confirmed())
    and public.can_message(recipient_id)
  );

drop policy if exists "Nachrichten als gelesen markieren" on public.messages;
create policy "Nachrichten als gelesen markieren"
  on public.messages for update
  to authenticated
  using (recipient_id = (select auth.uid()))
  with check (recipient_id = (select auth.uid()));

-- Absender, Zeit und Lesestatus setzt die Datenbank. Dazu Limits gegen Spam:
-- 10 pro Minute, 500 pro Tag, und höchstens 30 verschiedene Empfänger pro Tag.
create or replace function public.messages_before_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.sender_id := auth.uid();
  new.created_at := now();
  new.read_at := null;

  if (select count(*) from public.messages
      where sender_id = new.sender_id and created_at > now() - interval '1 minute') >= 10
  or (select count(*) from public.messages
      where sender_id = new.sender_id and created_at > now() - interval '1 day') >= 500
  or (
    not exists (select 1 from public.messages
      where sender_id = new.sender_id and recipient_id = new.recipient_id and created_at > now() - interval '1 day')
    and (select count(distinct recipient_id) from public.messages
      where sender_id = new.sender_id and created_at > now() - interval '1 day') >= 30
  )
  then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;

  return new;
end;
$$;

revoke all on function public.messages_before_insert() from public, anon, authenticated;

drop trigger if exists messages_before_insert on public.messages;
create trigger messages_before_insert
  before insert on public.messages
  for each row execute function public.messages_before_insert();

-- Beim Markieren als gelesen zählt die Uhr der Datenbank, nicht der Client. Einmal gelesen bleibt gelesen.
create or replace function public.messages_before_update()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.read_at := case when old.read_at is not null then old.read_at when new.read_at is not null then now() end;
  return new;
end;
$$;

revoke all on function public.messages_before_update() from public, anon, authenticated;

drop trigger if exists messages_before_update on public.messages;
create trigger messages_before_update
  before update on public.messages
  for each row execute function public.messages_before_update();


-- ── Abfragen für die API ─────────────────────────────────────────────────────
-- Alle security invoker: RLS gilt. Nutzer-IDs gibt nur dm_thread zurück, für die
-- Prüfung auf dem Server. Der Browser bekommt keine.

-- Verzeichnis wie in 0006, jetzt mit Skins. Der Rückgabetyp ändert sich, deshalb erst löschen.
drop function if exists public.community_directory(text, text, text, integer);
create function public.community_directory(
  p_query text default null,
  p_fighter text default null,
  p_after text default null,
  p_limit integer default 24
)
returns table (username text, main_fighter text, main_skin smallint, secondaries text[], secondary_skins smallint[], member_since timestamptz)
language sql
stable
security invoker
set search_path = ''
as $$
  select p.username, p.main_fighter, p.main_skin, c.secondaries, c.secondary_skins, p.created_at
  from public.community_profiles c
  join public.profiles p on p.id = c.user_id
  where c.listed
    and (p_query is null or starts_with(lower(p.username), lower(p_query)))
    and (p_fighter is null or p.main_fighter = p_fighter or p_fighter = any (c.secondaries))
    and (p_after is null or lower(p.username) > lower(p_after))
  order by lower(p.username)
  limit least(greatest(coalesce(p_limit, 24), 1), 50);
$$;

revoke all on function public.community_directory(text, text, text, integer) from public, anon;
grant execute on function public.community_directory(text, text, text, integer) to authenticated;

-- Unterhaltungen des Aufrufers, neueste zuerst. Blockierte Konten fehlen.
-- ponytail: rechnet über alle eigenen Nachrichten; eine Tabelle `conversations`, wenn Postfächer groß werden.
create or replace function public.dm_conversations(p_limit integer default 50)
returns table (username text, main_fighter text, main_skin smallint, last_body text, last_at timestamptz, last_mine boolean, unread integer)
language sql
stable
security invoker
set search_path = ''
as $$
  with mine as (
    select m.id, m.body, m.created_at, m.read_at,
      m.sender_id = auth.uid() as from_me,
      case when m.sender_id = auth.uid() then m.recipient_id else m.sender_id end as other_id
    from public.messages m
    where m.sender_id = auth.uid() or m.recipient_id = auth.uid()
  ),
  latest as (
    select distinct on (other_id) other_id, left(body, 140) as body, created_at, from_me
    from mine
    order by other_id, id desc
  )
  select p.username, p.main_fighter, p.main_skin, l.body, l.created_at, l.from_me,
    (select count(*)::integer from mine u where u.other_id = l.other_id and not u.from_me and u.read_at is null)
  from latest l
  join public.profiles p on p.id = l.other_id
  where not exists (select 1 from public.user_blocks b where b.blocker_id = auth.uid() and b.blocked_id = l.other_id)
  order by l.created_at desc
  limit least(greatest(coalesce(p_limit, 50), 1), 100);
$$;

revoke all on function public.dm_conversations(integer) from public, anon;
grant execute on function public.dm_conversations(integer) to authenticated;

-- Verlauf mit einem Konto, neueste zuerst. `p_before`: ältere Seite.
-- Absender und Empfänger gehen mit, damit der Server jede Zeile prüfen kann (api/_lib/owner.ts).
create or replace function public.dm_thread(p_other uuid, p_before bigint default null, p_limit integer default 50)
returns table (id bigint, sender_id uuid, recipient_id uuid, body text, created_at timestamptz, read_at timestamptz)
language sql
stable
security invoker
set search_path = ''
as $$
  select m.id, m.sender_id, m.recipient_id, m.body, m.created_at, m.read_at
  from public.messages m
  where ((m.sender_id = auth.uid() and m.recipient_id = p_other)
      or (m.sender_id = p_other and m.recipient_id = auth.uid()))
    and (p_before is null or m.id < p_before)
  order by m.id desc
  limit least(greatest(coalesce(p_limit, 50), 1), 100);
$$;

revoke all on function public.dm_thread(uuid, bigint, integer) from public, anon;
grant execute on function public.dm_thread(uuid, bigint, integer) to authenticated;

-- Alles von diesem Konto als gelesen markieren. Liefert die Anzahl.
create or replace function public.dm_mark_read(p_other uuid)
returns integer
language sql
volatile
security invoker
set search_path = ''
as $$
  with done as (
    update public.messages set read_at = now()
    where recipient_id = auth.uid() and sender_id = p_other and read_at is null
    returning 1
  )
  select count(*)::integer from done;
$$;

revoke all on function public.dm_mark_read(uuid) from public, anon;
grant execute on function public.dm_mark_read(uuid) to authenticated;

-- Ungelesene Nachrichten für das Symbol in der Leiste. Blockierte zählen nicht.
create or replace function public.dm_unread_count()
returns integer
language sql
stable
security invoker
set search_path = ''
as $$
  select count(*)::integer
  from public.messages m
  where m.recipient_id = auth.uid()
    and m.read_at is null
    and not exists (select 1 from public.user_blocks b where b.blocker_id = auth.uid() and b.blocked_id = m.sender_id);
$$;

revoke all on function public.dm_unread_count() from public, anon;
grant execute on function public.dm_unread_count() to authenticated;

notify pgrst, 'reload schema';
