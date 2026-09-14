-- =============================================================================
-- Blastzone: Konten, Profile, Kommentare, Lesezeichen
--
-- Im Supabase-Dashboard unter SQL Editor einmal komplett ausführen, danach
-- 0002_blocked_email_domains.sql. Details und Dashboard-Einstellungen:
-- supabase/SETUP.md.
--
-- Grundsatz: Die Rolle `anon` darf nur lesen, was öffentlich ist. Die Rolle
-- `authenticated` darf nur ihre eigenen Zeilen anlegen, ändern und löschen,
-- und schreiben nur mit bestätigter E-Mail-Adresse. Alles über Row Level
-- Security, damit es auch gilt, wenn jemand die API an unserem Server vorbei
-- anspricht.
-- =============================================================================


-- ── Hilfsfunktionen ──────────────────────────────────────────────────────────

-- Hat der aufrufende Nutzer seine E-Mail bestätigt? security definer, weil
-- auth.users für normale Rollen nicht lesbar ist. Liefert nur den eigenen Status.
create or replace function public.is_email_confirmed()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from auth.users
    where id = auth.uid() and email_confirmed_at is not null
  );
$$;

revoke all on function public.is_email_confirmed() from public;
grant execute on function public.is_email_confirmed() to anon, authenticated;


-- ── Gesperrte Mail-Domains (zweite Linie hinter dem Server-Check) ────────────

create table if not exists public.blocked_email_domains (
  domain text primary key check (domain = lower(domain))
);

alter table public.blocked_email_domains enable row level security;
-- Keine Policies: Weder anon noch authenticated sehen oder ändern die Liste.


-- ── Profile ──────────────────────────────────────────────────────────────────

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null check (username ~ '^[A-Za-z0-9_-]{3,20}$'),
  main_fighter text check (main_fighter is null or main_fighter ~ '^[a-z0-9-]{2,40}$'),
  theme text not null default 'dark' check (theme in ('dark', 'light')),
  created_at timestamptz not null default now()
);

-- „Fox“ und „fox“ sind derselbe Name.
create unique index if not exists profiles_username_lower_key on public.profiles (lower(username));

alter table public.profiles enable row level security;

drop policy if exists "Profile sind öffentlich lesbar" on public.profiles;
create policy "Profile sind öffentlich lesbar"
  on public.profiles for select
  to anon, authenticated
  using (true);

drop policy if exists "Eigenes Profil ändern" on public.profiles;
create policy "Eigenes Profil ändern"
  on public.profiles for update
  to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

-- Kein INSERT und DELETE für Clients: Anlegen macht der Trigger unten, Löschen
-- die Kaskade aus auth.users. Ändern nur main_fighter und theme, der
-- Benutzername bleibt fest (sonst könnte man sich als jemand anderes ausgeben).
revoke insert, update, delete on public.profiles from anon, authenticated;
grant update (main_fighter, theme) on public.profiles to authenticated;

-- Profil beim Registrieren anlegen. Scheitert der Name am CHECK oder am
-- Unique-Index, scheitert die ganze Registrierung, und GoTrue meldet einen
-- Datenbankfehler. Gleiches gilt für gesperrte Domains.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  mail_domain text := lower(split_part(new.email, '@', 2));
begin
  if exists (
    select 1 from public.blocked_email_domains b
    where mail_domain = b.domain or mail_domain like ('%.' || b.domain)
  ) then
    raise exception 'blocked_email_domain';
  end if;

  insert into public.profiles (id, username)
  values (new.id, new.raw_user_meta_data ->> 'username');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ── Kommentare ───────────────────────────────────────────────────────────────

create table if not exists public.comments (
  id bigint generated always as identity primary key,
  fighter_slug text not null check (fighter_slug ~ '^[a-z0-9-]{2,40}$'),
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  body text not null check (char_length(body) between 1 and 1000 and btrim(body) <> ''),
  created_at timestamptz not null default now()
);

create index if not exists comments_fighter_created_idx on public.comments (fighter_slug, created_at desc);
create index if not exists comments_user_created_idx on public.comments (user_id, created_at desc);

alter table public.comments enable row level security;

drop policy if exists "Kommentare sind öffentlich lesbar" on public.comments;
create policy "Kommentare sind öffentlich lesbar"
  on public.comments for select
  to anon, authenticated
  using (true);

drop policy if exists "Bestätigte Nutzer kommentieren als sie selbst" on public.comments;
create policy "Bestätigte Nutzer kommentieren als sie selbst"
  on public.comments for insert
  to authenticated
  with check (user_id = (select auth.uid()) and (select public.is_email_confirmed()));

drop policy if exists "Eigene Kommentare löschen" on public.comments;
create policy "Eigene Kommentare löschen"
  on public.comments for delete
  to authenticated
  using (user_id = (select auth.uid()));

-- Kein Bearbeiten: Ein nachträglich geänderter Kommentar ließe Antworten darauf lügen.
revoke update on public.comments from anon, authenticated;

-- Autor und Zeitpunkt setzt die Datenbank, nicht der Client. Dazu ein Limit
-- gegen Spam: höchstens 5 Kommentare pro Minute und 100 pro Tag.
create or replace function public.comments_before_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.user_id := auth.uid();
  new.created_at := now();

  if (select count(*) from public.comments
      where user_id = new.user_id and created_at > now() - interval '1 minute') >= 5
  or (select count(*) from public.comments
      where user_id = new.user_id and created_at > now() - interval '1 day') >= 100
  then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;

  return new;
end;
$$;

drop trigger if exists comments_before_insert on public.comments;
create trigger comments_before_insert
  before insert on public.comments
  for each row execute function public.comments_before_insert();


-- ── Lesezeichen ──────────────────────────────────────────────────────────────

create table if not exists public.bookmarks (
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  combo_id text not null check (combo_id ~ '^[a-z0-9-]{3,80}$'),
  created_at timestamptz not null default now(),
  primary key (user_id, combo_id)
);

alter table public.bookmarks enable row level security;

drop policy if exists "Eigene Lesezeichen lesen" on public.bookmarks;
create policy "Eigene Lesezeichen lesen"
  on public.bookmarks for select
  to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Eigene Lesezeichen anlegen" on public.bookmarks;
create policy "Eigene Lesezeichen anlegen"
  on public.bookmarks for insert
  to authenticated
  with check (user_id = (select auth.uid()) and (select public.is_email_confirmed()));

drop policy if exists "Eigene Lesezeichen löschen" on public.bookmarks;
create policy "Eigene Lesezeichen löschen"
  on public.bookmarks for delete
  to authenticated
  using (user_id = (select auth.uid()));

revoke update on public.bookmarks from anon, authenticated;
revoke all on public.bookmarks from anon;

create or replace function public.bookmarks_before_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.user_id := auth.uid();
  new.created_at := now();
  if (select count(*) from public.bookmarks where user_id = new.user_id) >= 500 then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

drop trigger if exists bookmarks_before_insert on public.bookmarks;
create trigger bookmarks_before_insert
  before insert on public.bookmarks
  for each row execute function public.bookmarks_before_insert();


-- ── Konto löschen (Art. 17 DSGVO) ────────────────────────────────────────────

-- Löscht den aufrufenden Nutzer. Profil, Kommentare und Lesezeichen gehen per
-- Kaskade mit. Nur für angemeldete Nutzer, nur das eigene Konto.
create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not_authenticated' using errcode = '42501';
  end if;
  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_own_account() from public, anon;
grant execute on function public.delete_own_account() to authenticated;

-- Trigger-Funktionen sind keine API.
revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.comments_before_insert() from public, anon, authenticated;
revoke all on function public.bookmarks_before_insert() from public, anon, authenticated;
