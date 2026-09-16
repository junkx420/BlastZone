/**
 * Regeln für Konten, die Browser UND Server prüfen.
 *
 * Diese Datei darf nichts importieren: Die Vercel-Functions unter `api/` binden
 * sie direkt ein, und jeder Import zöge Frontend-Code mit auf den Server.
 *
 * Der Browser prüft für die Rückmeldung beim Tippen, der Server prüft verbindlich.
 * Zusätzlich setzt Supabase die Passwort-Richtlinie selbst durch (siehe
 * supabase/SETUP.md), und die Datenbank prüft Benutzernamen und Längen per CHECK.
 */

export interface PasswordCheck {
  id: 'length' | 'case' | 'digit' | 'special' | 'max';
  label: string;
  ok: boolean;
}

/** bcrypt, das Supabase intern nutzt, liest nur die ersten 72 Bytes. */
export const PASSWORD_MAX_BYTES = 72;

export function checkPassword(password: string): PasswordCheck[] {
  const bytes = new TextEncoder().encode(password).length;
  return [
    { id: 'length', label: 'Mindestens 8 Zeichen', ok: password.length >= 8 },
    // Supabase ist im Projekt auf „Klein- und Großbuchstaben und Ziffern“ gestellt und zählt dabei nur a-z und A-Z.
    { id: 'case', label: 'Groß- und Kleinbuchstaben', ok: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { id: 'digit', label: 'Mindestens eine Zahl', ok: /\d/.test(password) },
    { id: 'special', label: 'Mindestens ein Sonderzeichen', ok: /[^\p{L}\p{N}\s]/u.test(password) },
    { id: 'max', label: 'Höchstens 72 Byte', ok: bytes <= PASSWORD_MAX_BYTES },
  ];
}

export const passwordOk = (password: string): boolean => checkPassword(password).every((c) => c.ok);

/** 3 bis 20 Zeichen: Buchstaben ohne Umlaute, Ziffern, Unterstrich, Bindestrich. Gleiche Regel wie der CHECK in der Datenbank. */
export const USERNAME_PATTERN = /^[A-Za-z0-9_-]{3,20}$/;

export const usernameOk = (name: string): boolean => USERNAME_PATTERN.test(name);

/** Grobe Formprüfung und Normalisierung. Ob die Adresse existiert, klärt erst die Bestätigungsmail. */
export function normalizeEmail(input: string): string | null {
  const email = input.trim().toLowerCase();
  if (email.length > 254) return null;
  const pattern = /^[^\s@"'<>()\\,;:]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;
  return pattern.test(email) ? email : null;
}

export const COMMENT_MAX = 1000;

/**
 * Steuerzeichen außer Zeilenumbruch und Tab, unsichtbare Zeichen und
 * Richtungs-Overrides (damit niemand Text rückwärts einschmuggelt).
 * Als Zahlenbereiche statt als Regex, weil unsichtbare Zeichen im Quelltext
 * beim Bearbeiten unbemerkt verrutschen.
 */
const UNSICHTBAR: ReadonlyArray<readonly [number, number]> = [
  [0x00, 0x08],
  [0x0b, 0x1f],
  [0x7f, 0x9f],
  [0x200b, 0x200f],
  [0x202a, 0x202e],
  [0x2066, 0x2069],
  [0xfeff, 0xfeff],
];

const sichtbar = (ch: string): boolean => {
  const c = ch.codePointAt(0) ?? 0;
  return !UNSICHTBAR.some(([von, bis]) => c >= von && c <= bis);
};

/** Entfernt unsichtbare Zeichen, kappt Leerzeilen-Wände und trimmt. */
export function cleanComment(input: string): string {
  return [...input.replace(/\r\n?/g, '\n')]
    .filter(sichtbar)
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export const FIGHTER_SLUG_PATTERN = /^[a-z0-9-]{2,40}$/;
export const COMBO_ID_PATTERN = /^[a-z0-9-]{3,80}$/;

/** Höchstens so viele Secondaries neben dem Main. Die Datenbank prüft dieselbe Grenze (Migration 0006). */
export const MAX_SECONDARIES = 2;

/**
 * Prüft eine Secondary-Auswahl. Liefert die bereinigte Liste oder einen Fehlertext.
 * Doppelte Einträge fallen still weg, der Main darf nicht gleichzeitig Secondary sein.
 */
export function checkSecondaries(
  input: unknown,
  main: string | null,
): { ok: true; value: string[] } | { ok: false; message: { de: string; en: string } } {
  if (!Array.isArray(input)) return { ok: false, message: { de: 'Secondaries müssen eine Liste sein.', en: 'Secondaries must be a list.' } };
  const value = [...new Set(input)];
  if (value.some((s) => typeof s !== 'string' || !FIGHTER_SLUG_PATTERN.test(s))) return { ok: false, message: {
    de: 'Unbekannter Fighter.',
    en: 'Unknown fighter.',
  } };
  if (value.length > MAX_SECONDARIES) return { ok: false, message: {
    de: `Höchstens ${MAX_SECONDARIES} Secondaries.`,
    en: `${MAX_SECONDARIES} secondaries at most.`,
  } };
  if (main && value.includes(main)) return { ok: false, message: {
    de: 'Dein Main kann nicht gleichzeitig Secondary sein.',
    en: 'Your main cannot also be a secondary.',
  } };
  return { ok: true, value: value as string[] };
}

/** Anfang eines Benutzernamens für die Suche im Verzeichnis. */
export const USERNAME_PREFIX_PATTERN = /^[A-Za-z0-9_-]{1,20}$/;

/** Einheitlicher Text, wenn eine Adresse als Wegwerf-Mail erkannt wird. Vorgabe des Betreibers. */
export const DISPOSABLE_MESSAGE = { de: 'Bitte nutze eine echte E-Mail-Adresse.', en: 'Please use a real email address.' };
