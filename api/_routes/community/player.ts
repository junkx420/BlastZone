import { usernameOk } from '../../../src/shared/account-rules.js';
import { backend, toHttp } from '../../_lib/backend.js';
import { HttpError, ok } from '../../_lib/http.js';
import { publicPlayer } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET /api/community/player?name=<Benutzername>
 *
 * Spielerprofil für andere Mitglieder. Nur angemeldet: Gäste bekommen 401, die Seite
 * zeigt dann „Melde dich an“. Zurück geht nur `publicPlayer` (owner.ts), ohne IDs.
 * Das Limit bremst das Durchprobieren von Namen, ohne normales Stöbern zu stören.
 */
export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'community-player-user', key: auth.userId, max: 60, windowSec: 60 });

  const name = new URL(request.url).searchParams.get('name') ?? '';
  if (!usernameOk(name)) throw new HttpError(400, 'invalid-username', 'So kann kein Spielername aussehen.');

  try {
    const row = await be.getPlayer(auth, name);
    if (!row) throw new HttpError(404, 'player-not-found', 'Einen Spieler mit diesem Namen gibt es hier nicht.');
    return ok({ player: publicPlayer(row, auth.userId) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
