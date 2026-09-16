/**
 * Übersetzte Inhalte (Etappe 4). Die deutschen Daten in src/data/ bleiben die
 * Quelle. Englisch liegt als Überlagerung daneben, geordnet nach Slug und
 * Combo-ID, und wird nur geladen, wenn die Seite englisch ist.
 *
 * Was fehlt, bleibt deutsch. Ob alles da und aktuell ist, prüft
 * `node scripts/i18n-content.mjs check` (Hashes der deutschen Fassung in lock.json).
 */

export interface StepText {
  label?: string;
  note?: string;
}

export interface ComboText {
  /** Nur setzen, wenn der Titel deutsche Wörter enthält. Move-Namen sind schon englisch. */
  title?: string;
  tip?: string;
  windowLabel?: string;
  /** Schlüssel ist der Index des Schritts in `steps`. */
  steps?: Record<number, StepText>;
}

export interface GuideText {
  meta?: string[];
  strengths?: string[];
  weaknesses?: string[];
  combos?: Record<string, ComboText>;
}

export type GuideTexts = Record<string, GuideText>;
