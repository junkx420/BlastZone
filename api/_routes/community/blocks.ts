import { usernameOk } from '../../../src/shared/account-rules.js';
import { backend, toHttp, type Auth, type Backend, type ProfileRef } from '../../_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson, str } from '../../_lib/http.js';
import { blockedNames, ownRows } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET    /api/community/blocks              eigene Blockliste (nur Namen)
 * PUT    /api/community/blocks  { name }    blockieren
 * DELETE /api/community/blocks?name=<Name>  freigeben
 *
 * Blockieren wirkt in beide Richtungen auf Nachrichten (can_message) und blendet
 * die Unterhaltung im eigenen Postfach aus. Die blockierte Person erfährt davon
 * nichts, sie kann nur keine Nachricht mehr schicken.
 */

async function target(be: Backend, auth: Auth, name: string): Promise<ProfileRef> {
  if (!usernameOk(name)) throw new HttpError(400, 'invalid-username', { de: 'So kann kein Spielername aussehen.', en: 'That cannot be a player name.' });
  const p = await be.findProfile(auth, name);
  if (!p) {
    throw new HttpError(404, 'player-not-found', {
      de: 'Einen Spieler mit diesem Namen gibt es hier nicht.',
      en: 'There is no player with this name here.',
    });
  }
  if (p.userId === auth.userId) throw new HttpError(400, 'self', { de: 'Dich selbst kannst du nicht blockieren.', en: 'You cannot block yourself.' });
  return p;
}

const list = async (be: Backend, auth: Auth): Promise<string[]> =>
  blockedNames(auth, await be.listBlocks(auth))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  try {
    return ok({ blocked: await list(be, auth) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const PUT = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'blocks-write-user', key: auth.userId, max: 30, windowSec: 60 });
  const data = await readJson(request, 1024);
  try {
    const p = await target(be, auth, str(data.name));
    ownRows(auth, (await be.block(auth, p.userId)).map((r) => ({ userId: r.blockerId })), 'block');
    return ok({ blocked: await list(be, auth) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const DELETE = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'blocks-write-user', key: auth.userId, max: 30, windowSec: 60 });
  try {
    const p = await target(be, auth, new URL(request.url).searchParams.get('name') ?? '');
    ownRows(auth, (await be.unblock(auth, p.userId)).map((r) => ({ userId: r.blockerId })), 'unblock');
    return ok({ blocked: await list(be, auth) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
