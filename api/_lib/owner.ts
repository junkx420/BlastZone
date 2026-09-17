import { safeSkin } from '../../src/shared/account-rules.js';
import { HttpError } from './http.js';
import type { Auth, BlockRow, BookmarkRow, CommentRow, DirectoryRow, MessageRow, PlayerRow, Profile } from './types.js';

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
  throw new HttpError(403, 'forbidden', { de: 'Dafür fehlt dir die Berechtigung.', en: 'You do not have permission to do that.' });
}

export function ownProfile(auth: Auth, profile: Profile | null): Profile | null {
  if (profile && profile.id !== auth.userId) refuse('profile');
  return profile;
}

export function ownRows<T extends { userId: string }>(auth: Auth, rows: T[], what: string): T[] {
  for (const row of rows) if (row.userId !== auth.userId) refuse(what);
  return rows;
}

/** Zeilen eines anderen, ausdrücklich angefragten Kontos (geteilte start.gg-Daten). Gleiche Regel wie ownRows. */
export function rowsOf<T extends { userId: string }>(ownerId: string, rows: T[], what: string): T[] {
  for (const row of rows) if (row.userId !== ownerId) refuse(what);
  return rows;
}

export const bookmarkIds = (auth: Auth, rows: BookmarkRow[]): string[] => ownRows(auth, rows, 'bookmarks').map((r) => r.comboId);

/** Jede Nachricht muss zwischen dem angemeldeten Nutzer und genau diesem Gegenüber laufen. */
export function threadRows(auth: Auth, otherId: string, rows: MessageRow[]): MessageRow[] {
  for (const r of rows) {
    const ok = (r.senderId === auth.userId && r.recipientId === otherId) || (r.senderId === otherId && r.recipientId === auth.userId);
    if (!ok) refuse('messages');
  }
  return rows;
}

export interface PublicMessage {
  id: number;
  mine: boolean;
  body: string;
  createdAt: string;
  /** Nur bei eigenen Nachrichten: hat das Gegenüber sie gelesen? */
  read: boolean;
}

export const publicMessage = (auth: Auth, r: MessageRow): PublicMessage => ({
  id: r.id,
  mine: r.senderId === auth.userId,
  body: r.body,
  createdAt: r.createdAt,
  read: r.senderId === auth.userId && r.readAt !== null,
});

export const blockedNames = (auth: Auth, rows: BlockRow[]): string[] => ownRows(auth, rows.map((r) => ({ ...r, userId: r.blockerId })), 'blocks').map((r) => r.username);

export interface PublicComment {
  id: number;
  fighter: string;
  body: string;
  createdAt: string;
  mine: boolean;
  author: { username: string; mainFighter: string | null; mainSkin: number };
}

/** Kommentare sind öffentlich. Zurück geht nur, was die Seite anzeigt, ohne Nutzer-ID. */
export const publicComment = (row: CommentRow, viewerId: string | null): PublicComment => ({
  id: row.id,
  fighter: row.fighter,
  body: row.body,
  createdAt: row.createdAt,
  mine: viewerId !== null && row.userId === viewerId,
  author: { username: row.author.username, mainFighter: row.author.mainFighter, mainSkin: safeSkin(row.author.mainFighter, row.author.mainSkin) },
});

export interface PublicFighterPick {
  fighter: string;
  skin: number;
}

export interface PublicPlayer {
  username: string;
  mainFighter: string | null;
  mainSkin: number;
  /** Nur Jahr und Monat („2026-09“). Der genaue Tag wird nicht gebraucht. */
  memberSince: string;
  secondaries: PublicFighterPick[];
  isSelf: boolean;
  stats: { comments: number };
  recentComments: Array<{ id: number; fighter: string; body: string; createdAt: string }>;
}

/**
 * Secondaries mit Skin, ohne den Main: Wechselt jemand den Main auf einen Secondary,
 * steht er nicht doppelt da. Skins, die nicht (mehr) zum Fighter passen, werden 1.
 */
const secondaryPicks = (secondaries: string[], skins: number[], main: string | null): PublicFighterPick[] =>
  secondaries
    .map((fighter, i) => ({ fighter, skin: safeSkin(fighter, skins[i]) }))
    .filter((p) => p.fighter !== main)
    .slice(0, 2);

/** Spielerprofil für andere Mitglieder. Keine Nutzer-ID, keine E-Mail, nichts Privates. */
export const publicPlayer = (row: PlayerRow, viewerId: string): PublicPlayer => ({
  username: row.username,
  mainFighter: row.mainFighter,
  mainSkin: safeSkin(row.mainFighter, row.mainSkin),
  secondaries: secondaryPicks(row.secondaries, row.secondarySkins, row.mainFighter),
  memberSince: row.createdAt.slice(0, 7),
  isSelf: row.userId === viewerId,
  stats: { comments: row.commentCount },
  recentComments: row.recentComments.map((c) => ({ id: c.id, fighter: c.fighter, body: c.body, createdAt: c.createdAt })),
});

export interface PublicDirectoryEntry {
  username: string;
  mainFighter: string | null;
  mainSkin: number;
  secondaries: PublicFighterPick[];
  memberSince: string;
}

export const publicDirectoryEntry = (row: DirectoryRow): PublicDirectoryEntry => ({
  username: row.username,
  mainFighter: row.mainFighter,
  mainSkin: safeSkin(row.mainFighter, row.mainSkin),
  secondaries: secondaryPicks(row.secondaries, row.secondarySkins, row.mainFighter),
  memberSince: row.createdAt.slice(0, 7),
});

/** Ein gerade geschriebener Kommentar muss vom Schreibenden stammen. */
export function ownComment(auth: Auth, row: CommentRow): PublicComment {
  ownRows(auth, [row], 'comment');
  return publicComment(row, auth.userId);
}
