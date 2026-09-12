import { GUIDE_BY_SLUG, GUIDES } from './guides';
import type { FighterGuide } from './types';

/**
 * Which fighters have combo routes, and how to get them.
 *
 * Everything from tier A+ downwards lives in guides-late.ts and loads on demand, so the
 * roster tiles and the "nur mit Combo-Routen" filter need the slugs before that import
 * resolves. LATE_SLUGS is therefore maintained by hand; loadLateGuides() compares it
 * against the real data and warns during development if the two drift apart.
 */
const LATE_SLUGS = [
  // A+
  'samus', 'dark-samus', 'palutena', 'pikachu', 'olimar', 'wario',
  // A
  'roy', 'hero', 'bayonetta', 'wolf', 'mii-brawler', 'mega-man', 'sora', 'cloud',
  // A−
  'corrin', 'falco', 'shulk', 'greninja',
  // B+
  'terry', 'pokemon-trainer', 'lucina', 'ken', 'zero-suit-samus', 'pac-man',
  'toon-link', 'young-link', 'pit', 'dark-pit', 'rosalina', 'ice-climbers', 'donkey-kong',
  // B−
  'pichu', 'inkling', 'ness', 'sheik', 'byleth', 'meta-knight', 'sephiroth', 'duck-hunt',
  // C+
  'isabelle', 'mii-gunner', 'lucas', 'wii-fit-trainer', 'robin', 'ridley',
] as const;

export const GUIDE_SLUGS: ReadonlySet<string> = new Set<string>([...GUIDES.map((g) => g.slug), ...LATE_SLUGS]);

const lateBySlug = new Map<string, FighterGuide>();
let latePromise: Promise<FighterGuide[]> | null = null;

/** Loads the A+ and lower tiers once; repeated calls share the same promise. */
export function loadLateGuides(): Promise<FighterGuide[]> {
  latePromise ??= import('./guides-late').then(({ LATE_GUIDES }) => {
    LATE_GUIDES.forEach((g) => lateBySlug.set(g.slug, g));
    if (import.meta.env.DEV) {
      const listed = new Set<string>(LATE_SLUGS);
      const loaded = new Set(LATE_GUIDES.map((g) => g.slug));
      const missing = [...loaded].filter((s) => !listed.has(s));
      const stale = [...listed].filter((s) => !loaded.has(s));
      if (missing.length || stale.length) {
        console.warn('[guide-index] LATE_SLUGS weicht ab.', { fehlt: missing, veraltet: stale });
      }
    }
    return LATE_GUIDES;
  });
  return latePromise;
}

/** Static guides are available immediately; late ones only once loadLateGuides() resolved. */
export const guideFor = (slug: string): FighterGuide | undefined => GUIDE_BY_SLUG.get(slug) ?? lateBySlug.get(slug);

/** Total number of fighters with routes – used for the empty state on profile pages. */
export const GUIDE_COUNT = GUIDE_SLUGS.size;
