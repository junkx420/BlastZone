import { api, ApiError, invalidate } from './api';
import { markSignedOut, patchUser, type User } from './auth';

/**
 * Datenzugriffe: Kommentare, Lesezeichen, Profil, Konto.
 *
 * Läuft eine Sitzung unterwegs ab, antwortet der Server mit 401. Dann gilt der
 * Nutzer im Browser sofort als abgemeldet, statt mit einer Oberfläche
 * weiterzumachen, deren Aktionen alle scheitern.
 */

async function guarded<T>(run: () => Promise<T>): Promise<T> {
  try {
    return await run();
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) markSignedOut();
    throw err;
  }
}

/* ── Kommentare ─────────────────────────────────────────────────────────── */

export interface Comment {
  id: number;
  fighter: string;
  body: string;
  createdAt: string;
  /** Vom Server bestimmt. Fremde Nutzer-IDs bekommt der Browser nicht zu sehen. */
  mine: boolean;
  author: { username: string; mainFighter: string | null };
}

export interface CommentPage {
  comments: Comment[];
  /** id für die nächste Seite, `null` wenn es keine ältere mehr gibt. */
  nextCursor: number | null;
}

const commentsPath = (fighter: string): string => `comments?fighter=${encodeURIComponent(fighter)}`;

/**
 * Eine Seite Kommentare, neueste zuerst. 30 Sekunden zwischengespeichert: Wer
 * zwischen zwei Fightern hin- und herwechselt, lädt nicht jedes Mal neu. Eigene
 * Änderungen und An-/Abmelden leeren den Cache (`invalidateComments`).
 */
export async function listComments(fighter: string, before?: number): Promise<CommentPage> {
  const data = await api<{ comments: Comment[]; nextCursor?: number | null }>(`${commentsPath(fighter)}${before ? `&before=${before}` : ''}`, { ttl: 30_000 });
  return { comments: data.comments, nextCursor: data.nextCursor ?? null };
}

/** `mine` hängt an der Sitzung, also nach jedem An- oder Abmelden verwerfen. */
export const invalidateComments = (fighter?: string): void => invalidate(fighter ? commentsPath(fighter) : 'comments?');

export const postComment = (fighter: string, body: string): Promise<Comment> =>
  guarded(async () => {
    const { comment } = await api<{ comment: Comment }>('comments', { method: 'POST', body: { fighter, body } });
    invalidateComments(fighter);
    return comment;
  });

export const deleteComment = (id: number, fighter: string): Promise<void> =>
  guarded(async () => {
    await api(`comments?id=${id}`, { method: 'DELETE' });
    invalidateComments(fighter);
  });

/* ── Lesezeichen ────────────────────────────────────────────────────────── */

let bookmarkCache: Set<string> | null = null;
const bookmarkListeners = new Set<(ids: ReadonlySet<string>) => void>();
const emitBookmarks = (): void => bookmarkListeners.forEach((l) => l(bookmarkCache ?? new Set()));

export function onBookmarks(listener: (ids: ReadonlySet<string>) => void): () => void {
  bookmarkListeners.add(listener);
  if (bookmarkCache) listener(bookmarkCache);
  return () => bookmarkListeners.delete(listener);
}

/** Neueste zuerst. Wird pro Sitzung einmal geladen und danach lokal mitgeführt. */
export async function loadBookmarks(force = false): Promise<string[]> {
  if (bookmarkCache && !force) return [...bookmarkCache];
  const { ids } = await guarded(() => api<{ ids: string[] }>('bookmarks'));
  bookmarkCache = new Set(ids);
  emitBookmarks();
  return ids;
}

export function clearBookmarkCache(): void {
  bookmarkCache = null;
  emitBookmarks();
}

export const isBookmarked = (comboId: string): boolean => bookmarkCache?.has(comboId) ?? false;

/** Schaltet um. Die Oberfläche wechselt sofort und springt bei einem Fehler zurück. */
export async function toggleBookmark(comboId: string): Promise<boolean> {
  const cache = (bookmarkCache ??= new Set());
  const was = cache.has(comboId);
  if (was) cache.delete(comboId);
  else cache.add(comboId);
  emitBookmarks();
  try {
    await guarded(() =>
      was ? api(`bookmarks?combo=${encodeURIComponent(comboId)}`, { method: 'DELETE' }) : api('bookmarks', { method: 'POST', body: { comboId } }),
    );
    return !was;
  } catch (err) {
    if (was) cache.add(comboId);
    else cache.delete(comboId);
    emitBookmarks();
    throw err;
  }
}

/* ── start.gg ───────────────────────────────────────────────────────────── */

export interface StartggLink {
  slug: string;
  gamerTag: string | null;
  profileUrl: string;
  updatedAt: string;
}

/** Eigene Verknüpfung oder `null`. Privat, deshalb ohne Cache. */
export const getStartggLink = (): Promise<StartggLink | null> =>
  guarded(async () => (await api<{ link: StartggLink | null }>('startgg/link')).link);

/** Prüft das Profil bei start.gg und speichert es. Wirft ApiError mit deutscher Meldung, etwa „kein Profil unter dieser Adresse“. */
export const linkStartgg = (profile: string): Promise<StartggLink> =>
  guarded(async () => {
    const { link } = await api<{ link: StartggLink }>('startgg/link', { method: 'PUT', body: { profile } });
    invalidate('startgg/');
    return link;
  });

export const unlinkStartgg = (): Promise<void> =>
  guarded(async () => {
    await api('startgg/link', { method: 'DELETE' });
    invalidate('startgg/');
  });

/* ── Profil und Konto ───────────────────────────────────────────────────── */

export async function updateProfile(patch: { mainFighter?: string | null; theme?: 'dark' | 'light' }): Promise<User['mainFighter']> {
  const { profile } = await guarded(() =>
    api<{ profile: { mainFighter: string | null; theme: 'dark' | 'light' } }>('profile', { method: 'PATCH', body: patch }),
  );
  patchUser({ mainFighter: profile.mainFighter, theme: profile.theme });
  return profile.mainFighter;
}

export async function deleteAccount(confirm: string): Promise<void> {
  await guarded(() => api('account', { method: 'DELETE', body: { confirm } }));
  clearBookmarkCache();
  markSignedOut();
}
