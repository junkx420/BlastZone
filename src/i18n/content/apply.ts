import type { Fighter, FighterGuide } from '../../data/types';
import type { ComboText, GuideTexts } from './types';

/**
 * Echo-Guides aus `echoGuide()` teilen Combos und Texte mit ihrem Original. Fehlt
 * für sie ein Eintrag, gilt der des Originals. Nur diese drei: Dark Pit hat zwar
 * `echoOf`, aber eigene Routen, ein Rückgriff auf Pit wäre dort falsch.
 */
export const ECHO_GUIDES: Readonly<Record<string, string>> = { daisy: 'peach', 'dark-samus': 'samus', richter: 'simon' };

const comboText = (texts: GuideTexts, slug: string, id: string): ComboText | undefined => {
  const own = texts[slug]?.combos?.[id];
  if (own) return own;
  const base = ECHO_GUIDES[slug];
  return base ? texts[base]?.combos?.[id.replace(slug, base)] : undefined;
};

/**
 * Schreibt die Übersetzung direkt in die Guide-Objekte. Die Daten sind pro
 * Seitenaufruf einsprachig, ein Sprachwechsel lädt neu. Schritte teilen sich
 * Echo und Original (flache Kopie in echoGuide), dieselbe Übersetzung landet
 * dann eben zweimal am selben Objekt.
 */
export function applyGuideTexts(guides: readonly FighterGuide[], texts: GuideTexts, tags: Readonly<Record<string, string>> = {}): void {
  for (const g of guides) {
    const t = texts[g.slug];
    const base = ECHO_GUIDES[g.slug] ? texts[ECHO_GUIDES[g.slug]!] : undefined;
    if (t?.meta && t.meta.length === g.meta.length) g.meta = t.meta;
    const strengths = t?.strengths ?? base?.strengths;
    if (strengths && strengths.length === g.strengths.length) g.strengths = strengths;
    const weaknesses = t?.weaknesses ?? base?.weaknesses;
    if (weaknesses && weaknesses.length === g.weaknesses.length) g.weaknesses = weaknesses;

    for (const c of g.combos) {
      // Neues Array statt Änderung am alten: Echo und Original teilen sich das Tag-Array.
      if (c.tags) c.tags = c.tags.map((tag) => tags[tag] ?? tag);
      const ct = comboText(texts, g.slug, c.id);
      if (!ct) continue;
      if (ct.title) c.title = ct.title;
      if (ct.tip) c.tip = ct.tip;
      if (ct.windowLabel && c.windowLabel) c.windowLabel = ct.windowLabel;
      for (const [index, st] of Object.entries(ct.steps ?? {})) {
        const step = c.steps[Number(index)];
        if (!step) continue;
        if (st.label) step.label = st.label;
        if (st.note && step.note) step.note = st.note;
      }
    }
  }
}

export function applyTaglines(fighters: readonly Fighter[], taglines: Readonly<Record<string, string>>): void {
  for (const f of fighters) {
    const text = taglines[f.slug];
    if (text) f.tagline = text;
  }
}
