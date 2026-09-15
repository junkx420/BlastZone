/**
 * Welche Sprache ein Seitenaufruf bekommt. Ohne Abhängigkeiten, damit es sich
 * auch ohne Browser testen lässt.
 *
 * Reihenfolge:
 * 1. `?lang=` in der Adresse (vor dem `#`). So merkt sich die Seite eine manuelle
 *    Wahl, ohne etwas im Browser zu speichern: Hash-Links (`#/…`) behalten den
 *    Query-Teil, die Wahl bleibt beim Navigieren und Neuladen erhalten.
 * 2. Die Sprachen des Geräts (`navigator.languages`), die erste unterstützte gewinnt.
 * 3. Sonst Englisch: Wer weder Deutsch noch Englisch eingestellt hat, versteht
 *    Englisch eher als Deutsch.
 */

export type Lang = 'de' | 'en';

/** Namen immer in der eigenen Sprache („English“, nicht „Englisch“). */
export const LANGUAGES: ReadonlyArray<{ code: Lang; name: string; locale: string }> = [
  { code: 'de', name: 'Deutsch', locale: 'de-DE' },
  { code: 'en', name: 'English', locale: 'en-US' },
];

const SUPPORTED = new Set<string>(LANGUAGES.map((l) => l.code));

const primary = (tag: string): string => tag.trim().toLowerCase().split(/[-_]/)[0] ?? '';

export function pickLang(param: string | null, preferred: readonly string[]): { lang: Lang; source: 'url' | 'device' | 'fallback' } {
  if (param && SUPPORTED.has(primary(param))) return { lang: primary(param) as Lang, source: 'url' };
  for (const tag of preferred) {
    const p = primary(tag);
    if (SUPPORTED.has(p)) return { lang: p as Lang, source: 'device' };
  }
  return { lang: 'en', source: 'fallback' };
}
