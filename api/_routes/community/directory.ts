import { FIGHTER_SLUG_PATTERN, USERNAME_PATTERN, USERNAME_PREFIX_PATTERN } from '../../../src/shared/account-rules.js';
import { backend, toHttp } from '../../_lib/backend.js';
import { HttpError, ok } from '../../_lib/http.js';
import { publicDirectoryEntry } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET /api/community/directory?q=<Namensanfang>&fighter=<slug>&after=<Name>
 *
 * Verzeichnis der Mitglieder, die sich im Profil eingetragen haben. Nur angemeldet.
 * Sortiert nach Name, Seiten per Cursor (`nextCursor` ist der letzte Name der Seite).
 */

export const PAGE_SIZE = 24;

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'community-directory-user', key: auth.userId, max: 60, windowSec: 60 });

  const params = new URL(request.url).searchParams;
  const q = params.get('q')?.trim() || null;
  const fighter = params.get('fighter') || null;
  const after = params.get('after') || null;
  if (q && !USERNAME_PREFIX_PATTERN.test(q)) {
    throw new HttpError(400, 'invalid-query', {
      de: 'Namen bestehen nur aus Buchstaben, Zahlen, _ und -.',
      en: 'Names only contain letters, digits, _ and -.',
    });
  }
  if (fighter && !FIGHTER_SLUG_PATTERN.test(fighter)) throw new HttpError(400, 'invalid-fighter', { de: 'Unbekannter Fighter.', en: 'Unknown fighter.' });
  if (after && !USERNAME_PATTERN.test(after)) throw new HttpError(400, 'invalid-cursor', { de: 'Ungültige Seite.', en: 'Invalid page.' });

  try {
    const rows = await be.listDirectory(auth, { query: q, fighter, after, limit: PAGE_SIZE });
    const players = rows.map(publicDirectoryEntry);
    return ok({ players, nextCursor: rows.length === PAGE_SIZE ? rows[rows.length - 1]!.username : null }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
