import { api, ApiError } from './api';
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

export const listComments = async (fighter: string): Promise<Comment[]> =>
  (await api<{ comments: Comment[] }>(`comments?fighter=${encodeURIComponent(fighter)}`)).comments;

export const postComment = (fighter: string, body: string): Promise<Comment> =>
  guarded(async () => (await api<{ comment: Comment }>('comments', { method: 'POST', body: { fighter, body } })).comment);

export const deleteComment = (id: number): Promise<void> =>
  guarded(async () => {
    await api(`comments?id=${id}`, { method: 'DELETE' });
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
