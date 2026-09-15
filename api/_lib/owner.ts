import { HttpError } from './http.js';
import type { Auth, BookmarkRow, CommentRow, DirectoryRow, PlayerRow, Profile } from './types.js';

/**
 * Letzte Prüfung vor der Antwort: Gehört das, was zurückgeht, dem angemeldeten Nutzer?
 *
 * Drei Schichten sichern Nutzerdaten, jede für sich reicht:
 * 1. Row Level Security in Postgres (supabase/migrations).
 * 2. Jede Abfrage filtert zusätzlich ausdrücklich auf `auth.userId` (supabase.ts).
 * 3. Diese Datei: Die Routen prüfen jede zurückgegebene Zeile gegen
 *    `auth.userId`, und `auth.userId` stammt aus einem Token mit geprüfter
 *    Signatur (session.ts). Passt eine Zeile nicht, geht gar nichts zurück,
 *    auch nicht die passenden Zeilen daneben. Das ist Absicht: Eine fremde Zeile
 *    heißt, dass Schicht 1 und 2 versagt haben, und dann ist keiner Antwort
 *    dieser Abfrage mehr zu trauen.
 *
 * Dazu die öffentliche Form: Besitzer-IDs verlassen den Server nicht. Ob ein
 * Kommentar der eigene ist, sagt `mine`.
 */

function refuse(what: string): never {
  // Ins Function-Log ohne Inhalte: keine IDs, keine Texte.
  console.error(`[owner] ${what}: Zeile gehört nicht dem angemeldeten Nutzer. Antwort verworfen.`);
  throw new HttpError(403, 'forbidden', 'Dafür fehlt dir die Berechtigung.');
}

export function ownProfile(auth: Auth, profile: Profile | null): Profile | null {
  if (profile && profile.id !== auth.userId) refuse('profile');
  return profile;
}

export function ownRows<T extends { userId: string }>(auth: Auth, rows: T[], what: string): T[] {
  for (const row of rows) if (row.userId !== auth.userId) refuse(what);
  return rows;
}

export const bookmarkIds = (auth: Auth, rows: BookmarkRow[]): string[] => ownRows(auth, rows, 'bookmarks').map((r) => r.comboId);

export interface PublicComment {
  id: number;
  fighter: string;
  body: string;
  createdAt: string;
  mine: boolean;
  author: { username: string; mainFighter: string | null };
}

/** Kommentare sind öffentlich. Zurück geht nur, was die Seite anzeigt, ohne Nutzer-ID. */
export const publicComment = (row: CommentRow, viewerId: string | null): PublicComment => ({
  id: row.id,
  fighter: row.fighter,
  body: row.body,
  createdAt: row.createdAt,
  mine: viewerId !== null && row.userId === viewerId,
  author: { username: row.author.username, mainFighter: row.author.mainFighter },
});

export interface PublicPlayer {
  username: string;
  mainFighter: string | null;
  /** Nur Jahr und Monat („2026-09“). Der genaue Tag wird nicht gebraucht. */
  memberSince: string;
  secondaries: string[];
  isSelf: boolean;
  stats: { comments: number };
  recentComments: Array<{ id: number; fighter: string; body: string; createdAt: string }>;
}

/** Secondaries ohne den Main: Wechselt jemand den Main auf einen Secondary, steht er nicht doppelt da. */
const secondariesWithout = (secondaries: string[], main: string | null): string[] => secondaries.filter((s) => s !== main).slice(0, 2);

/** Spielerprofil für andere Mitglieder. Keine Nutzer-ID, keine E-Mail, nichts Privates. */
export const publicPlayer = (row: PlayerRow, viewerId: string): PublicPlayer => ({
  username: row.username,
  mainFighter: row.mainFighter,
  secondaries: secondariesWithout(row.secondaries, row.mainFighter),
  memberSince: row.createdAt.slice(0, 7),
  isSelf: row.userId === viewerId,
  stats: { comments: row.commentCount },
  recentComments: row.recentComments.map((c) => ({ id: c.id, fighter: c.fighter, body: c.body, createdAt: c.createdAt })),
});

export interface PublicDirectoryEntry {
  username: string;
  mainFighter: string | null;
  secondaries: string[];
  memberSince: string;
}

export const publicDirectoryEntry = (row: DirectoryRow): PublicDirectoryEntry => ({
  username: row.username,
  mainFighter: row.mainFighter,
  secondaries: secondariesWithout(row.secondaries, row.mainFighter),
  memberSince: row.createdAt.slice(0, 7),
});

/** Ein gerade geschriebener Kommentar muss vom Schreibenden stammen. */
export function ownComment(auth: Auth, row: CommentRow): PublicComment {
  ownRows(auth, [row], 'comment');
  return publicComment(row, auth.userId);
}
