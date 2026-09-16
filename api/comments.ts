import { cleanComment, COMMENT_MAX, FIGHTER_SLUG_PATTERN } from '../src/shared/account-rules.js';
import { backend, toHttp } from './_lib/backend.js';
import { assertSameOrigin, clientIp, HttpError, ok, readJson, str } from './_lib/http.js';
import { route } from './_lib/route.js';
import { ownComment, ownRows, publicComment } from './_lib/owner.js';
import { enforce } from './_lib/ratelimit.js';
import { authenticate, requireAuth } from './_lib/session.js';

/**
 * GET    /api/comments?fighter=<slug>[&before=<id>]   öffentlich, neueste 20, `nextCursor` für die nächste Seite
 * POST   /api/comments  { fighter, body }      nur angemeldet und bestätigt
 * DELETE /api/comments?id=<id>                 nur eigene
 *
 * Wer schreiben und löschen darf, entscheidet am Ende die Datenbank (RLS). Die
 * Prüfungen hier sind die erste Linie und liefern verständliche Fehlertexte.
 * Der Text wird roh gespeichert und im Frontend beim Rendern escaped, nie als HTML eingesetzt.
 */
const fighterSlug = (v: string): string => {
  if (!FIGHTER_SLUG_PATTERN.test(v)) throw new HttpError(400, 'invalid-fighter', { de: 'Unbekannter Fighter.', en: 'Unknown fighter.' });
  return v;
};

/** Kommentare pro Seite. Eine Seite mehr wird geladen, um zu wissen, ob es weitergeht. */
const COMMENTS_PAGE_SIZE = 20;

export const GET = route(async (request) => {
  const params = new URL(request.url).searchParams;
  const fighter = fighterSlug(params.get('fighter') ?? '');
  const beforeRaw = params.get('before');
  const before = beforeRaw === null ? undefined : Number(beforeRaw);
  if (before !== undefined && (!Number.isSafeInteger(before) || before <= 0)) {
    throw new HttpError(400, 'invalid-cursor', {
      de: 'Ungültige Seite.',
      en: 'Invalid page.',
    });
  }
  await enforce({ name: 'comments-read-ip', key: clientIp(request), max: 120, windowSec: 60 });
  const be = backend();
  // Lesen ist öffentlich. Angemeldet (geprüftes Token) erfährt man zusätzlich, welche Kommentare die eigenen sind.
  const { auth, cookies } = await authenticate(request, be);
  try {
    const rows = await be.listComments(fighter, COMMENTS_PAGE_SIZE + 1, before);
    const page = rows.slice(0, COMMENTS_PAGE_SIZE);
    const nextCursor = rows.length > COMMENTS_PAGE_SIZE ? (page.at(-1)?.id ?? null) : null;
    return ok({ comments: page.map((row) => publicComment(row, auth?.userId ?? null)), nextCursor }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const POST = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce(
    { name: 'comments-user', key: auth.userId, max: 5, windowSec: 60 },
    { name: 'comments-user-day', key: auth.userId, max: 100, windowSec: 24 * 3600 },
    { name: 'comments-ip', key: clientIp(request), max: 10, windowSec: 60 },
  );

  const data = await readJson(request, 8192);
  const fighter = fighterSlug(str(data.fighter));
  const text = cleanComment(str(data.body));
  if (!text) throw new HttpError(400, 'empty-comment', { de: 'Der Kommentar ist leer.', en: 'The comment is empty.' });
  if ([...text].length > COMMENT_MAX) {
    throw new HttpError(400, 'comment-too-long', {
      de: `Höchstens ${COMMENT_MAX} Zeichen.`,
      en: `${COMMENT_MAX} characters at most.`,
    });
  }

  try {
    return ok({ comment: ownComment(auth, await be.addComment(auth, fighter, text)) }, cookies, 201);
  } catch (err) {
    toHttp(err);
  }
});

export const DELETE = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  const id = Number(new URL(request.url).searchParams.get('id'));
  if (!Number.isSafeInteger(id) || id <= 0) throw new HttpError(400, 'invalid-id', { de: 'Unbekannter Kommentar.', en: 'Unknown comment.' });
  try {
    // Leer heißt: Den Kommentar gibt es nicht, oder er gehört jemand anderem. Beides beantwortet dieselbe 404.
    const removed = ownRows(auth, await be.deleteComment(auth, id), 'comment-delete');
    if (!removed.some((r) => r.id === id)) throw new HttpError(404, 'not-found', { de: 'Nicht gefunden.', en: 'Not found.' });
    return ok({ id }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
