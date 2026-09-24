import { cleanComment, MESSAGE_MAX, safeSkin, usernameOk } from '../../../src/shared/account-rules.js';
import { backend, BackendError, toHttp, type Auth, type Backend, type ProfileRef } from '../../_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson, str } from '../../_lib/http.js';
import { publicMessage, threadRows } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET   /api/community/messages?with=<Name>[&before=<id>]   Verlauf, neueste zuerst
 * POST  /api/community/messages  { to, body }                senden
 * PATCH /api/community/messages  { with }                    als gelesen markieren
 *
 * Nur angemeldet. Das Gegenüber kommt als Name, die ID bleibt auf dem Server.
 * Ob geschrieben werden darf, entscheidet die Datenbank (can_message, RLS);
 * die Route fragt vorher nur, um einen verständlichen Fehler zu geben.
 * Lesen markiert nichts: Das macht der Browser ausdrücklich per PATCH, sobald
 * der Verlauf wirklich angezeigt wird.
 */

export const PAGE_SIZE = 30;

const DM_NOT_ALLOWED = {
  de: 'Diesem Mitglied kannst du gerade keine Nachricht schreiben.',
  en: 'You cannot message this member right now.',
};

async function partner(be: Backend, auth: Auth, name: string): Promise<ProfileRef> {
  if (!usernameOk(name)) throw new HttpError(400, 'invalid-username', { de: 'So kann kein Spielername aussehen.', en: 'That cannot be a player name.' });
  const p = await be.findProfile(auth, name);
  if (!p) {
    throw new HttpError(404, 'player-not-found', {
      de: 'Einen Spieler mit diesem Namen gibt es hier nicht.',
      en: 'There is no player with this name here.',
    });
  }
  if (p.userId === auth.userId) throw new HttpError(400, 'self', { de: 'Du kannst dir nicht selbst schreiben.', en: 'You cannot message yourself.' });
  return p;
}

const publicPartner = (p: ProfileRef): { username: string; mainFighter: string | null; mainSkin: number } => ({
  username: p.username,
  mainFighter: p.mainFighter,
  mainSkin: safeSkin(p.mainFighter, p.mainSkin),
});

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  // Der offene Verlauf fragt alle 10 Sekunden nach.
  await enforce({ name: 'messages-read-user', key: auth.userId, max: 120, windowSec: 60 });

  const params = new URL(request.url).searchParams;
  const beforeRaw = params.get('before');
  const before = beforeRaw === null ? undefined : Number(beforeRaw);
  if (before !== undefined && (!Number.isSafeInteger(before) || before <= 0)) {
    throw new HttpError(400, 'invalid-cursor', { de: 'Ungültige Seite.', en: 'Invalid page.' });
  }

  try {
    const p = await partner(be, auth, params.get('with') ?? '');
    const [rows, canMessage] = await Promise.all([be.listMessages(auth, p.userId, PAGE_SIZE, before), be.canMessage(auth, p.userId)]);
    const messages = threadRows(auth, p.userId, rows).map((r) => publicMessage(auth, r));
    return ok(
      {
        partner: publicPartner(p),
        messages,
        nextCursor: rows.length === PAGE_SIZE ? rows[rows.length - 1]!.id : null,
        canMessage,
      },
      cookies,
    );
  } catch (err) {
    toHttp(err);
  }
});

export const POST = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'messages-send-user', key: auth.userId, max: 20, windowSec: 60 });

  const data = await readJson(request, 12 * 1024);
  const text = cleanComment(str(data.body));
  if (!text) throw new HttpError(400, 'empty-message', { de: 'Die Nachricht ist leer.', en: 'The message is empty.' });
  if ([...text].length > MESSAGE_MAX) {
    throw new HttpError(400, 'message-too-long', {
      de: `Höchstens ${MESSAGE_MAX} Zeichen.`,
      en: `${MESSAGE_MAX} characters at most.`,
    });
  }

  try {
    const p = await partner(be, auth, str(data.to));
    if (!(await be.canMessage(auth, p.userId))) throw new HttpError(403, 'dm-not-allowed', DM_NOT_ALLOWED);
    let rows;
    try {
      rows = await be.sendMessage(auth, p.userId, text);
    } catch (err) {
      // RLS hat abgelehnt: blockiert, Nachrichten aus oder Mail unbestätigt. Den Grund verrät die Datenbank nicht.
      if (err instanceof BackendError && err.code === 'forbidden') throw new HttpError(403, 'dm-not-allowed', DM_NOT_ALLOWED);
      throw err;
    }
    const row = threadRows(auth, p.userId, rows)[0];
    if (!row || row.senderId !== auth.userId) throw new HttpError(403, 'dm-not-allowed', DM_NOT_ALLOWED);
    return ok({ message: publicMessage(auth, row) }, cookies, 201);
  } catch (err) {
    toHttp(err);
  }
});

export const PATCH = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'messages-mark-user', key: auth.userId, max: 120, windowSec: 60 });
  const data = await readJson(request, 1024);

  try {
    const p = await partner(be, auth, str(data.with));
    await be.markRead(auth, p.userId);
    return ok({}, cookies);
  } catch (err) {
    toHttp(err);
  }
});
