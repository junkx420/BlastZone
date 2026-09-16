import { COMBO_ID_PATTERN } from '../src/shared/account-rules.js';
import { backend, toHttp } from './_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson, str } from './_lib/http.js';
import { route } from './_lib/route.js';
import { bookmarkIds, ownRows } from './_lib/owner.js';
import { enforce } from './_lib/ratelimit.js';
import { requireAuth } from './_lib/session.js';

/**
 * GET    /api/bookmarks               gespeicherte Combo-IDs, neueste zuerst
 * POST   /api/bookmarks  { comboId }
 * DELETE /api/bookmarks?combo=<id>
 *
 * Gespeichert werden nur IDs. Welche Route dahintersteht, löst das Frontend aus
 * den Guide-Daten auf, damit Korrekturen an einer Route sofort auch in den
 * Lesezeichen stehen.
 */
const comboId = (v: string): string => {
  if (!COMBO_ID_PATTERN.test(v)) throw new HttpError(400, 'invalid-combo', { de: 'Unbekannte Combo.', en: 'Unknown combo.' });
  return v;
};

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  try {
    return ok({ ids: bookmarkIds(auth, await be.listBookmarks(auth)) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const POST = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'bookmark-user', key: auth.userId, max: 60, windowSec: 60 });
  const id = comboId(str((await readJson(request)).comboId));
  try {
    ownRows(auth, await be.addBookmark(auth, id), 'bookmark-add');
    return ok({ comboId: id }, cookies, 201);
  } catch (err) {
    toHttp(err);
  }
});

export const DELETE = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'bookmark-user', key: auth.userId, max: 60, windowSec: 60 });
  const id = comboId(new URL(request.url).searchParams.get('combo') ?? '');
  try {
    ownRows(auth, await be.removeBookmark(auth, id), 'bookmark-remove');
    return ok({ comboId: id }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
