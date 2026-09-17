import { safeSkin } from '../../../src/shared/account-rules.js';
import { backend, toHttp } from '../../_lib/backend.js';
import { ok } from '../../_lib/http.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET /api/community/inbox            Unterhaltungen, neueste zuerst, dazu `unread`
 * GET /api/community/inbox?count=1    nur `unread` (für das Symbol in der Leiste)
 *
 * Nur angemeldet. Die Datenbank rechnet beides aus den eigenen Nachrichten
 * (dm_conversations, dm_unread_count) und lässt blockierte Konten weg. Nutzer-IDs
 * kommen dabei gar nicht erst zurück.
 */

export const LIMIT = 50;

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  // Die Leiste fragt jede Minute, die Übersicht beim Öffnen und alle 20 Sekunden.
  await enforce({ name: 'inbox-read-user', key: auth.userId, max: 60, windowSec: 60 });
  const countOnly = new URL(request.url).searchParams.get('count') === '1';

  try {
    if (countOnly) return ok({ unread: await be.unreadCount(auth) }, cookies);
    const rows = await be.listConversations(auth, LIMIT);
    const conversations = rows.map((r) => ({
      username: r.username,
      mainFighter: r.mainFighter,
      mainSkin: safeSkin(r.mainFighter, r.mainSkin),
      lastBody: r.lastBody,
      lastAt: r.lastAt,
      lastMine: r.lastMine,
      unread: r.unread,
    }));
    return ok({ conversations, unread: conversations.reduce((n, c) => n + c.unread, 0) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
