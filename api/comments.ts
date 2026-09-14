import { cleanComment, COMMENT_MAX, FIGHTER_SLUG_PATTERN } from '../src/shared/account-rules.js';
import { backend, toHttp } from './_lib/backend.js';
import { assertSameOrigin, clientIp, handle, HttpError, ok, readJson, str } from './_lib/http.js';
import { enforce } from './_lib/ratelimit.js';
import { requireAuth } from './_lib/session.js';

/**
 * GET    /api/comments?fighter=<slug>          öffentlich, neueste 50
 * POST   /api/comments  { fighter, body }      nur angemeldet und bestätigt
 * DELETE /api/comments?id=<id>                 nur eigene
 *
 * Wer schreiben und löschen darf, entscheidet am Ende die Datenbank (RLS). Die
 * Prüfungen hier sind die erste Linie und liefern verständliche Fehlertexte.
 * Der Text wird roh gespeichert und im Frontend beim Rendern escaped, nie als HTML eingesetzt.
 */
const fighterSlug = (v: string): string => {
  if (!FIGHTER_SLUG_PATTERN.test(v)) throw new HttpError(400, 'invalid-fighter', 'Unbekannter Fighter.');
  return v;
};

export const GET = handle(async (request) => {
  const fighter = fighterSlug(new URL(request.url).searchParams.get('fighter') ?? '');
  await enforce({ name: 'comments-read-ip', key: clientIp(request), max: 120, windowSec: 60 });
  try {
    return ok({ comments: await backend().listComments(fighter, 50) });
  } catch (err) {
    toHttp(err);
  }
});

export const POST = handle(async (request) => {
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
  if (!text) throw new HttpError(400, 'empty-comment', 'Der Kommentar ist leer.');
  if ([...text].length > COMMENT_MAX) throw new HttpError(400, 'comment-too-long', `Höchstens ${COMMENT_MAX} Zeichen.`);

  try {
    return ok({ comment: await be.addComment(auth.token, fighter, text) }, cookies, 201);
  } catch (err) {
    toHttp(err);
  }
});

export const DELETE = handle(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  const id = Number(new URL(request.url).searchParams.get('id'));
  if (!Number.isSafeInteger(id) || id <= 0) throw new HttpError(400, 'invalid-id', 'Unbekannter Kommentar.');
  try {
    await be.deleteComment(auth.token, id);
    return ok({ id }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
