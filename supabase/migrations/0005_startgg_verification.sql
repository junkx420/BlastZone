-- =============================================================================
-- Blastzone 0005: Bestätigung der start.gg-Verknüpfung per OAuth
--
-- Im Supabase-Dashboard unter SQL Editor ausführen, nach 0004.
-- Idempotent: mehrfach ausführen schadet nicht.
--
-- „Mit start.gg bestätigen“ speichert, welches start.gg-Konto sich angemeldet
-- hat, wann, und eine HMAC-Signatur des Servers darüber. Die Zeile bleibt für
-- den Besitzer über die öffentliche API beschreibbar (RLS aus 0004). Er könnte
-- die Spalten also selbst füllen. Gültig ist eine Bestätigung deshalb nur, wenn
-- der Server die Signatur mit STARTGG_CACHE_KEY nachrechnen kann
-- (api/_lib/startggOauth.ts, `isVerified`). Die Datenbank prüft nur die Form.
--
-- Die OAuth-Tokens von start.gg werden nirgends gespeichert, auch hier nicht.
-- =============================================================================

alter table public.startgg_links
  add column if not exists startgg_user_id text,
  add column if not exists verified_at timestamptz,
  add column if not exists verification text;

alter table public.startgg_links drop constraint if exists startgg_links_startgg_user_id_form;
alter table public.startgg_links
  add constraint startgg_links_startgg_user_id_form
  check (startgg_user_id is null or startgg_user_id ~ '^[0-9]{1,20}$');

alter table public.startgg_links drop constraint if exists startgg_links_verification_form;
alter table public.startgg_links
  add constraint startgg_links_verification_form
  check (verification is null or verification ~ '^[0-9a-f]{64}$');

-- Entweder alle drei Felder oder keines. Eine halbe Bestätigung gibt es nicht.
alter table public.startgg_links drop constraint if exists startgg_links_verification_complete;
alter table public.startgg_links
  add constraint startgg_links_verification_complete
  check (
    (startgg_user_id is null and verified_at is null and verification is null)
    or (startgg_user_id is not null and verified_at is not null and verification is not null)
  );

-- PostgREST lädt das Schema neu, damit die neuen Spalten sofort über die API gehen.
notify pgrst, 'reload schema';
