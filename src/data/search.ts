import { normalize } from '../lib/dom';
import { FIGHTERS } from './fighters';
import { TIER_BY_SLUG } from './tiers';
import type { Fighter } from './types';

interface Entry {
  fighter: Fighter;
  name: string;
  aliases: string[];
  series: string;
  number: number;
}

const INDEX = new Map<string, Entry>(
  FIGHTERS.map((f) => [
    f.slug,
    { fighter: f, name: normalize(f.name), aliases: f.aliases.map(normalize), series: normalize(f.series), number: parseInt(f.no, 10) },
  ]),
);

/** 0 means no match; higher is a better match. */
export function matchScore(fighter: Fighter, query: string): number {
  const q = normalize(query);
  if (!q) return 1;
  const e = INDEX.get(fighter.slug);
  if (!e) return 0;
  if (e.name === q) return 100;
  if (/^\d+$/.test(q) && e.number === parseInt(q, 10)) return 90;
  if (e.name.startsWith(q)) return 80;
  if (e.aliases.includes(q)) return 75;
  if (e.name.includes(q)) return 60;
  if (e.aliases.some((a) => a.startsWith(q))) return 50;
  if (e.aliases.some((a) => a.includes(q))) return 35;
  if (e.series.includes(q)) return 20;
  return 0;
}

const rankOf = (f: Fighter): number => TIER_BY_SLUG.get(f.slug)?.rank ?? 999;

export function searchFighters(query: string, pool: Fighter[] = FIGHTERS): Fighter[] {
  return pool
    .map((f) => ({ f, s: matchScore(f, query) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s || rankOf(a.f) - rankOf(b.f))
    .map((r) => r.f);
}
