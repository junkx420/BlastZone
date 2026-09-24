import { startggProfileUrl } from '../../../src/shared/startgg.js';
import { usernameOk } from '../../../src/shared/account-rules.js';
import { backend, toHttp, type Auth, type Backend, type PlayerRow } from '../../_lib/backend.js';
import { HttpError, ok } from '../../_lib/http.js';
import { blockedNames, publicPlayer, rowsOf } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';
import type { Placement } from '../../_lib/startgg.js';
import { verifiedPayload } from '../../_lib/startggCache.js';
import { isVerified } from '../../_lib/startggOauth.js';

/**
 * GET /api/community/player?name=<Benutzername>
 *
 * Spielerprofil für andere Mitglieder. Nur angemeldet: Gäste bekommen 401, die Seite
 * zeigt dann „Melde dich an“. Zurück geht nur `publicPlayer` (owner.ts), ohne IDs.
 * Das Limit bremst das Durchprobieren von Namen, ohne normales Stöbern zu stören.
 *
 * Dazu:
 * - `startgg`: Turnierergebnisse, nur wenn der Besitzer sie freigegeben hat, die
 *   Verknüpfung per start.gg-Login bestätigt ist und der Cache seine Signatur trägt.
 *   Gezeigt wird der Stand, den der Besitzer zuletzt geladen hat. Besucher lösen
 *   keinen Abruf bei start.gg aus.
 * - `canMessage`: ob eine Nachricht möglich ist (ohne Grund, falls nicht).
 * - `blocked`: ob der Betrachter dieses Konto blockiert hat.
 */

interface SharedPlacements {
  profile: { slug: string; gamerTag: string | null; profileUrl: string };
  placements: Placement[];
  fetchedAt: string;
}

async function sharedPlacements(be: Backend, auth: Auth, row: PlayerRow): Promise<SharedPlacements | null> {
  if (!row.showPlacements) return null;
  const { links, cache } = await be.getSharedStartgg(auth, row.userId);
  const link = rowsOf(row.userId, links, 'shared-startgg-link')[0];
  const cached = rowsOf(row.userId, cache, 'shared-startgg-cache')[0];
  if (!link || !cached || cached.slug !== link.slug) return null;
  // Öffentlich nur, was start.gg per Login bestätigt hat (CLAUDE.md). Signaturen rechnet der Server nach.
  if (!(await isVerified(row.userId, link))) return null;
  const payload = await verifiedPayload(row.userId, link.slug, cached.payload, cached.signature);
  if (!payload || payload.notFound) return null;
  return {
    profile: { slug: payload.slug, gamerTag: payload.gamerTag, profileUrl: startggProfileUrl(payload.slug) },
    placements: payload.placements,
    fetchedAt: payload.fetchedAt,
  };
}

/** Zusatzangaben dürfen das Profil nie verhindern: Fehlt etwas (Migration, Schlüssel, Netz), gilt der sichere Wert. Eine fremde Zeile (403) bricht dagegen ab. */
const quietly = <T>(what: string, fallback: T, run: () => Promise<T>): Promise<T> =>
  run().catch((err: unknown) => {
    if (err instanceof HttpError && err.code === 'forbidden') throw err;
    console.warn(JSON.stringify({ t: 'community-player', teil: what, error: err instanceof Error ? err.message : String(err) }));
    return fallback;
  });
export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'community-player-user', key: auth.userId, max: 60, windowSec: 60 });

  const name = new URL(request.url).searchParams.get('name') ?? '';
  if (!usernameOk(name)) throw new HttpError(400, 'invalid-username', { de: 'So kann kein Spielername aussehen.', en: 'That cannot be a player name.' });

  try {
    const row = await be.getPlayer(auth, name);
    if (!row) {
      throw new HttpError(404, 'player-not-found', {
        de: 'Einen Spieler mit diesem Namen gibt es hier nicht.',
        en: 'There is no player with this name here.',
      });
    }
    const isSelf = row.userId === auth.userId;
    const [startgg, canMessage, blocked] = await Promise.all([
      quietly('startgg', null, () => sharedPlacements(be, auth, row)),
      isSelf ? false : quietly('canMessage', false, () => be.canMessage(auth, row.userId)),
      isSelf ? false : quietly('blocked', false, async () => blockedNames(auth, await be.listBlocks(auth)).some((n) => n.toLowerCase() === row.username.toLowerCase())),
    ]);
    return ok({ player: { ...publicPlayer(row, auth.userId), startgg, canMessage, blocked } }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
