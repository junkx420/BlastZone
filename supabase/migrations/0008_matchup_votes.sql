-- =============================================================================
-- 0008: Community-Matchup-Chart
--
-- Mitglieder bewerten ein Matchup von -2 (stark benachteiligt) bis +2 (stark
-- bevorteilt). Gespeichert wird jedes Paar genau einmal, in alphabetischer
-- Reihenfolge der Slugs (low < high), bewertet aus Sicht von `low`. Die
-- Gegenrichtung ist damit dasselbe Ergebnis mit umgekehrtem Vorzeichen, und es
-- kann keine zwei widersprechenden Zeilen fuer dasselbe Matchup geben.
--
-- Die einzelne Stimme gehoert nur der Person, die sie abgegeben hat (RLS).
-- Nach aussen geht ausschliesslich der Durchschnitt, und den auch erst ab drei
-- Stimmen: Bei einer einzigen waere sofort klar, wer sie abgegeben hat.
-- =============================================================================

create table if not exists public.matchup_votes (
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  low text not null,
  high text not null,
  rating smallint not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, low, high)
);

alter table public.matchup_votes drop constraint if exists matchup_votes_rating_range;
alter table public.matchup_votes
  add constraint matchup_votes_rating_range check (rating between -2 and 2);

-- Slugs wie in src/data/fighters.ts: Kleinbuchstaben, Ziffern, Bindestrich.
alter table public.matchup_votes drop constraint if exists matchup_votes_slug_form;
alter table public.matchup_votes
  add constraint matchup_votes_slug_form check (
    low ~ '^[a-z0-9-]{2,40}$' and high ~ '^[a-z0-9-]{2,40}$' and low < high
  );

-- Fuer das Aggregat je Paar.
create index if not exists matchup_votes_pair_idx on public.matchup_votes (low, high);

alter table public.matchup_votes enable row level security;

revoke all on public.matchup_votes from anon, authenticated;
grant select, insert, delete on public.matchup_votes to authenticated;
-- Aendern laesst sich nur die Bewertung selbst, nicht das Paar und nicht der Besitzer.
grant update (rating, updated_at) on public.matchup_votes to authenticated;

drop policy if exists "Eigene Matchup-Stimmen lesen" on public.matchup_votes;
create policy "Eigene Matchup-Stimmen lesen" on public.matchup_votes
  for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "Matchup bewerten" on public.matchup_votes;
create policy "Matchup bewerten" on public.matchup_votes
  for insert to authenticated
  with check (user_id = auth.uid() and public.is_email_confirmed());

drop policy if exists "Eigene Matchup-Stimme aendern" on public.matchup_votes;
create policy "Eigene Matchup-Stimme aendern" on public.matchup_votes
  for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "Eigene Matchup-Stimme zuruecknehmen" on public.matchup_votes;
create policy "Eigene Matchup-Stimme zuruecknehmen" on public.matchup_votes
  for delete to authenticated
  using (user_id = auth.uid());

-- -----------------------------------------------------------------------------
-- Aggregat eines Paars. security definer, weil die Policy oben nur die eigene
-- Zeile lesen laesst: Den Durchschnitt darf jedes angemeldete Mitglied sehen,
-- die fremden Einzelstimmen nicht.
--
-- `meine` kommt aus derselben Abfrage mit, damit die Oberflaeche nicht zweimal
-- fragen muss. Unter drei Stimmen bleibt `schnitt` leer.
-- -----------------------------------------------------------------------------
create or replace function public.matchup_summary(p_low text, p_high text)
returns table (schnitt numeric, stimmen integer, meine smallint)
language sql
stable
security definer
set search_path = ''
as $$
  select
    case when count(*) >= 3 then round(avg(rating)::numeric, 2) end,
    count(*)::integer,
    max(rating) filter (where user_id = auth.uid())::smallint
  from public.matchup_votes
  where low = p_low and high = p_high;
$$;

revoke all on function public.matchup_summary(text, text) from public, anon;
grant execute on function public.matchup_summary(text, text) to authenticated;

notify pgrst, 'reload schema';
