import { LANGUAGES, pickLang, type Lang } from './lang';
import { account } from './messages/account';
import { auth } from './messages/auth';
import { chat } from './messages/chat';
import { combo } from './messages/combo';
import { comments } from './messages/comments';
import { common } from './messages/common';
import { matchup } from './messages/matchup';
import { notation } from './messages/notation';
import { pages } from './messages/pages';
import { skins } from './messages/skins';
import { social } from './messages/social';

/**
 * Sprache der Seite, einmal pro Seitenaufruf bestimmt (siehe lang.ts).
 *
 * Ein Wechsel lädt die Seite mit neuem `?lang=` neu, statt alles live umzubauen.
 * Dadurch dürfen Module ihre Texte beim Laden festlegen (Tabellenköpfe, Leiste),
 * und keine Komponente muss auf einen Sprachwechsel hören.
 *
 * Neue Bereiche: Datei unter messages/ mit defineMessages anlegen und unten in
 * DE und EN aufnehmen.
 */

export type { Lang } from './lang';
export { LANGUAGES } from './lang';

function detect(): { lang: Lang; source: 'url' | 'device' | 'fallback' } {
  // Ohne Browser (Tests, Server-Import): Deutsch, wie die Seite gebaut wurde.
  if (typeof location === 'undefined' || typeof navigator === 'undefined') return { lang: 'de', source: 'fallback' };
  try {
    const param = new URLSearchParams(location.search).get('lang');
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
    return pickLang(param, preferred);
  } catch {
    return { lang: 'de', source: 'fallback' };
  }
}

const detected = detect();
export const lang: Lang = detected.lang;
export const langSource = detected.source;
export const locale = LANGUAGES.find((l) => l.code === lang)?.locale ?? 'de-DE';

const DE = { ...common.de, ...combo.de, ...notation.de, ...auth.de, ...social.de, ...comments.de, ...account.de, ...pages.de, ...skins.de, ...chat.de, ...matchup.de };
const EN: { [K in keyof typeof DE]: string } = {
  ...common.en,
  ...combo.en,
  ...notation.en,
  ...auth.en,
  ...social.en,
  ...comments.en,
  ...account.en,
  ...pages.en,
  ...skins.en,
  ...chat.en,
  ...matchup.en,
};

export type MessageKey = keyof typeof DE;

const dict: { [K in MessageKey]: string } = lang === 'en' ? EN : DE;

/** Text in der Seitensprache. `{name}` im Text wird durch vars.name ersetzt. */
export function t(key: MessageKey, vars?: Record<string, string | number>): string {
  const text = dict[key] ?? DE[key] ?? key;
  if (!vars) return text;
  return text.replace(/[{]([A-Za-z0-9_]+)[}]/g, (match, name: string) => (name in vars ? String(vars[name]) : match));
}

const plurals = new Intl.PluralRules(locale);

/**
 * Zähltext mit Einzahl: `one` bei genau einem („1 player“), sonst `other`.
 * `{n}` wird im Format der Seitensprache eingesetzt. Im Deutschen sind beide
 * Schlüssel oft gleich („1 Fighter“), angelegt werden trotzdem beide.
 */
export function tn(one: MessageKey, other: MessageKey, n: number, vars?: Record<string, string | number>): string {
  return t(plurals.select(n) === 'one' ? one : other, { ...vars, n: formatNumber(n) });
}

/** Für Datendateien: Wert in der Seitensprache aus einem Paar, etwa tr({ de: 'Tier-Liste', en: 'Tier List' }). */
export const tr = <T>(values: { de: T; en: T }): T => values[lang];

/** Zahl im Format der Seitensprache (Komma im Deutschen, Punkt im Englischen). */
export const formatNumber = (n: number, options?: Intl.NumberFormatOptions): string => new Intl.NumberFormat(locale, options).format(n);

/** Datum im Format der Seitensprache. */
export const dateFormat = (options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat => new Intl.DateTimeFormat(locale, options);

/** Dieselbe Adresse mit anderer Sprache. Hash (Route) und übrige Parameter bleiben. */
export function languageUrl(next: Lang, href = location.href): string {
  const url = new URL(href);
  url.searchParams.set('lang', next);
  return url.toString();
}

export function switchLanguage(next: Lang): void {
  if (next === lang) return;
  location.assign(languageUrl(next));
}
