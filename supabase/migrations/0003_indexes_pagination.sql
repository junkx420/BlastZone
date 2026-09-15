-- Blastzone 0003: Indizes für die tatsächlichen Abfragen und Namensprüfung über den Index.
--
-- Ausführen im Supabase-Dashboard → SQL Editor, nach 0001 und 0002.
-- Idempotent: mehrfach ausführen schadet nicht.
-- Der Code funktioniert auch VOR dieser Migration (Fallbacks in api/_lib/supabase.ts),
-- nur langsamer, sobald die Tabellen wachsen.


-- ── Kommentare: Seiten per id ────────────────────────────────────────────────
-- Die API blättert mit `fighter_slug = … and id < cursor order by id desc limit n`.
-- Dieser Index deckt Filter und Sortierung in einem Schritt ab, auch tief im Verlauf.
create index if not exists comments_fighter_id_idx on public.comments (fighter_slug, id desc);

-- Der alte Index (fighter_slug, created_at desc) wird von keiner Abfrage mehr genutzt
-- und kostet nur Schreibzeit.
drop index if exists public.comments_fighter_created_idx;


-- ── Lesezeichen: eigene Liste, neueste zuerst ────────────────────────────────
-- Der Primärschlüssel (user_id, combo_id) filtert, sortiert aber nicht nach Datum.
create index if not exists bookmarks_user_created_idx on public.bookmarks (user_id, created_at desc);


-- ── Benutzername vergeben? ───────────────────────────────────────────────────
-- Vorher: `username ilike 'name'`. ILIKE kann den Unique-Index auf lower(username)
-- nicht nutzen und liest die ganze Tabelle. Diese Funktion vergleicht genau so,
-- wie der Index gebaut ist, und liefert nur true/false, keine Zeilen.
-- Der Name kommt als gebundener Parameter, nie als SQL-Text.
create or replace function public.username_taken(p_username text)
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select exists (select 1 from public.profiles where lower(username) = lower(p_username));
$$;

revoke all on function public.username_taken(text) from public;
grant execute on function public.username_taken(text) to anon, authenticated;
