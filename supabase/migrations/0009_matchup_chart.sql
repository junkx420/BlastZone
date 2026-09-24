-- =============================================================================
-- 0009: Alle Matchups eines Fighters auf einmal
--
-- 0008 beantwortet ein einzelnes Paar. Die Uebersichtsseite eines Fighters
-- braucht dagegen alle Gegner in einer Abfrage, sonst waeren es 85 Anfragen.
--
-- Gespeichert ist jedes Paar nur einmal, aus Sicht des alphabetisch ersten
-- Slugs. Diese Funktion dreht die Bewertung beim Lesen auf die Sicht des
-- gefragten Fighters: Steht er hinten, kehrt sich das Vorzeichen um.
--
-- Zurueck kommen nur Paare, zu denen es ueberhaupt Stimmen gibt. Die restlichen
-- Gegner traegt die Oberflaeche selbst als "noch nicht bewertet" nach.
-- =============================================================================

create or replace function public.matchup_chart(p_slug text)
returns table (gegner text, schnitt numeric, stimmen integer, meine smallint)
language sql
stable
security definer
set search_path = ''
as $$
  select
    case when v.low = p_slug then v.high else v.low end as gegner,
    -- Wie in 0008: unter drei Stimmen kein Durchschnitt, sonst waere die
    -- einzelne Stimme zuordenbar.
    case
      when count(*) >= 3
      then round(avg(case when v.low = p_slug then v.rating else -v.rating end)::numeric, 2)
    end as schnitt,
    count(*)::integer as stimmen,
    max(case when v.low = p_slug then v.rating else -v.rating end)
      filter (where v.user_id = auth.uid())::smallint as meine
  from public.matchup_votes v
  where v.low = p_slug or v.high = p_slug
  group by 1;
$$;

revoke all on function public.matchup_chart(text) from public, anon;
grant execute on function public.matchup_chart(text) to authenticated;

notify pgrst, 'reload schema';
