import { lang } from '../i18n';
import { applyGuideTexts, applyTaglines } from '../i18n/content/apply';
import type { GuideTexts } from '../i18n/content/types';
import { FIGHTERS } from './fighters';
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
  // C−
  'banjo-and-kazooie', 'bowser-jr', 'lucario', 'jigglypuff', 'chrom',
  'link', 'bowser', 'incineroar', 'kirby', 'piranha-plant',
  // D+
  'mii-swordfighter', 'mewtwo', 'zelda',
  // D−
  'marth', 'dr-mario', 'ike', 'king-k-rool', 'king-dedede', 'villager',
  // E
  'simon', 'richter', 'little-mac', 'ganondorf',
] as const;

export const GUIDE_SLUGS: ReadonlySet<string> = new Set<string>([...GUIDES.map((g) => g.slug), ...LATE_SLUGS]);

const lateBySlug = new Map<string, FighterGuide>();
let latePromise: Promise<FighterGuide[]> | null = null;

/*
 * Nachladen mit Wiederholung. Vorher blieb ein fehlgeschlagener Import für immer
 * im Promise hängen: Skelett auf Fighter-Seite und Startseite, bis jemand neu lud.
 * Jetzt: bis zu drei Versuche mit wachsender Pause, und scheitern alle, wird das
 * Promise verworfen, damit der nächste Aufruf (etwa „Erneut versuchen“) neu anfängt.
 */
async function importLate(): Promise<typeof import('./guides-late')> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await import('./guides-late');
    } catch (err) {
      if (attempt >= 2 || navigator.onLine === false) throw err;
      await new Promise((r) => setTimeout(r, 600 * 2 ** attempt));
    }
  }
}

/*
 * Englische Inhalte (src/i18n/content/). Nur bei englischer Seite geladen. Scheitert
 * der Abruf, bleibt es beim Deutschen, statt die Combos gar nicht zu zeigen.
 */
const importLateTexts = (): Promise<GuideTexts | null> =>
  lang === 'en' ? import('../i18n/content/late').then((m) => m.LATE_TEXTS, () => null) : Promise.resolve(null);

/**
 * Vor dem ersten Zeichnen: Taglines und die statischen Guides (S+, S−) übersetzen.
 * Höchstens `timeoutMs` warten, danach zeichnet die Seite deutsch und ein später
 * eintreffendes Ergebnis wird verworfen, damit sich nichts unter der Hand ändert.
 */
export async function prepareContent(timeoutMs = 4000): Promise<void> {
  if (lang !== 'en') return;
  let late = false;
  const work = import('../i18n/content/static').then(
    ({ STATIC_TEXTS, TAGLINES }) => {
      if (late) return;
      applyTaglines(FIGHTERS, TAGLINES);
      applyGuideTexts(GUIDES, STATIC_TEXTS);
    },
    () => {},
  );
  let timer = 0;
  const giveUp = new Promise<void>((resolve) => {
    timer = window.setTimeout(() => {
      late = true;
      resolve();
    }, timeoutMs);
  });
  await Promise.race([work, giveUp]);
  window.clearTimeout(timer);
}

/** Loads the A+ and lower tiers once; repeated calls share the same promise. */
export function loadLateGuides(): Promise<FighterGuide[]> {
  if (latePromise) return latePromise;
  const pending = Promise.all([importLate(), importLateTexts()]).then(([{ LATE_GUIDES }, texts]) => {
    if (texts) applyGuideTexts(LATE_GUIDES, texts);
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
  latePromise = pending;
  pending.catch(() => {
    if (latePromise === pending) latePromise = null;
  });
  return pending;
}

/** Static guides are available immediately; late ones only once loadLateGuides() resolved. */
export const guideFor = (slug: string): FighterGuide | undefined => GUIDE_BY_SLUG.get(slug) ?? lateBySlug.get(slug);

/** Total number of fighters with routes – used for the empty state on profile pages. */
export const GUIDE_COUNT = GUIDE_SLUGS.size;
