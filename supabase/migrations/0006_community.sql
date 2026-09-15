-- =============================================================================
-- Blastzone 0006: Community (Verzeichnis und Secondaries)
--
-- Im Supabase-Dashboard unter SQL Editor ausführen, nach 0005.
-- Idempotent: mehrfach ausführen schadet nicht.
--
-- Grundsatz: Community-Daten sehen nur angemeldete Nutzer. Deshalb eine eigene
-- Tabelle statt neuer Spalten in `profiles`, denn `profiles` ist für `anon`
-- lesbar (Kommentar-Autoren).
--
-- `listed` ist freiwillig und steht anfangs auf false. Es entscheidet nur, ob
-- jemand im Verzeichnis auftaucht. Das Spielerprofil selbst ist für Mitglieder
-- über den Namen erreichbar, so steht es auch in der Datenschutzerklärung.
-- =============================================================================

create table if not exists public.community_profiles (
  user_id uuid primary key default auth.uid() references public.profiles (id) on delete cascade,
  listed boolean not null default false,
  -- Höchstens zwei Secondaries, Fighter-Slugs wie main_fighter, keine Dopplung, kein NULL-Eintrag.
  secondaries text[] not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.community_profiles drop constraint if exists community_profiles_secondaries_form;
alter table public.community_profiles
  add constraint community_profiles_secondaries_form
  check (
    cardinality(secondaries) <= 2
    and array_position(secondaries, null) is null
    and (cardinality(secondaries) = 0 or array_to_string(secondaries, ',') ~ '^[a-z0-9-]{2,40}(,[a-z0-9-]{2,40})?$')
    and (cardinality(secondaries) < 2 or secondaries[1] <> secondaries[2])
  );

-- Das Verzeichnis liest nur eingetragene Konten.
create index if not exists community_profiles_listed_idx on public.community_profiles (user_id) where listed;

alter table public.community_profiles enable row level security;

revoke all on public.community_profiles from anon, authenticated;
grant select, insert, update, delete on public.community_profiles to authenticated;

drop policy if exists "Community-Profile lesen nur Mitglieder" on public.community_profiles;
create policy "Community-Profile lesen nur Mitglieder"
  on public.community_profiles for select
  to authenticated
  using (true);

drop policy if exists "Community-Profil selbst anlegen" on public.community_profiles;
create policy "Community-Profil selbst anlegen"
  on public.community_profiles for insert
  to authenticated
  with check (user_id = (select auth.uid()) and (select public.is_email_confirmed()));

drop policy if exists "Community-Profil selbst ändern" on public.community_profiles;
create policy "Community-Profil selbst ändern"
  on public.community_profiles for update
  to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "Community-Profil selbst löschen" on public.community_profiles;
create policy "Community-Profil selbst löschen"
  on public.community_profiles for delete
  to authenticated
  using (user_id = (select auth.uid()));

-- Besitzer und Zeitstempel setzt die Datenbank, egal was der Client schickt.
create or replace function public.community_touch()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.user_id := auth.uid();
  new.updated_at := now();
  return new;
end;
$$;

revoke all on function public.community_touch() from public, anon, authenticated;

drop trigger if exists community_profiles_touch on public.community_profiles;
create trigger community_profiles_touch
  before insert or update on public.community_profiles
  for each row execute function public.community_touch();


-- ── Verzeichnis ──────────────────────────────────────────────────────────────
--
-- security invoker: Die Abfrage läuft mit den Rechten des Aufrufers, RLS gilt.
-- Alle Eingaben sind Parameter, kein dynamisches SQL. Die Namenssuche nutzt
-- starts_with statt LIKE, damit `_` und `%` nie Platzhalter werden.
-- Zurück kommen keine Nutzer-IDs.

create or replace function public.community_directory(
  p_query text default null,
  p_fighter text default null,
  p_after text default null,
  p_limit integer default 24
)
returns table (username text, main_fighter text, secondaries text[], member_since timestamptz)
language sql
stable
security invoker
set search_path = ''
as $$
  select p.username, p.main_fighter, c.secondaries, p.created_at
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

notify pgrst, 'reload schema';
