/**
 * start.gg-Profil aus dem, was Nutzer typischerweise einfügen.
 *
 * Angenommen werden:
 * - die Profil-URL: https://www.start.gg/user/1a2b3c4d (auch mit /details, ?… oder #…)
 * - alte smash.gg-Links derselben Form
 * - der Slug: user/1a2b3c4d
 * - nur der Discriminator: 1a2b3c4d
 *
 * Ergebnis ist immer `user/<8 Zeichen>` in Kleinbuchstaben, sonst `null`.
 * Die Datenbank prüft dieselbe Form (Migration 0004). Keine Imports, weil
 * `src/shared` auch in `api/` eingebunden wird.
 */

const DISCRIMINATOR = /^[0-9a-z]{8}$/;
// Ohne Backslashes: [/] statt Schrägstrich-Escape, [.] statt Punkt-Escape.
const IN_URL = /(?:^|[/])user[/]([0-9a-z]{8})(?:[/?#]|$)/;

export function normalizeStartggSlug(input: string): string | null {
  const value = input.trim().toLowerCase();
  if (!value || value.length > 200) return null;
  if (DISCRIMINATOR.test(value)) return `user/${value}`;
  const match = IN_URL.exec(value);
  return match?.[1] ? `user/${match[1]}` : null;
}

export const STARTGG_SLUG_PATTERN = /^user[/][0-9a-z]{8}$/;

/** Öffentliche Profil-URL zu einem Slug, für Links in der Oberfläche. */
export const startggProfileUrl = (slug: string): string => `https://www.start.gg/${slug}`;

export const STARTGG_HINT = 'Deine Profil-URL von start.gg, zum Beispiel start.gg/user/1a2b3c4d. Du findest sie, wenn du auf start.gg dein Profil öffnest.';
