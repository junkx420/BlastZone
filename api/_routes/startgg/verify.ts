import { backend, toHttp } from '../../_lib/backend.js';
import { assertSameOrigin, HttpError, ok } from '../../_lib/http.js';
import { ownRows } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';
import { clearResultCookie, createVerification, readResult } from '../../_lib/startggOauth.js';
import { publicLink } from './link.js';

/**
 * POST /api/startgg/verify
 *
 * Letzter Schritt von „Mit start.gg bestätigen“. Die Profilseite ruft das auf,
 * sobald sie mit `?startgg=confirm` zurückkommt. Liest das signierte Ergebnis aus
 * dem Callback, prüft, dass es für genau dieses Konto ausgestellt wurde, und
 * speichert Verknüpfung plus signierte Bestätigung. Das Cookie gilt einmal.
 */
export const POST = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'startgg-verify-user', key: auth.userId, max: 20, windowSec: 3600 });

  const result = await readResult(request);
  const done = [...cookies, clearResultCookie(request)];
  if (!result) {
    throw new HttpError(400, 'startgg-oauth-expired', {
      de: 'Die Anmeldung bei start.gg ist abgelaufen oder schon verwendet. Starte die Bestätigung noch einmal.',
      en: 'The start.gg login has expired or was already used. Start the verification again.',
    });
  }
  // Login in einem Konto begonnen, Rückkehr in einem anderen (etwa nach Ab- und Anmelden dazwischen).
  if (result.ownerId !== auth.userId) {
    throw new HttpError(403, 'startgg-oauth-other-account', {
      de: 'Die Bestätigung wurde in einem anderen Blastzone-Konto gestartet. Starte sie in diesem Konto noch einmal.',
      en: 'The verification was started in a different Blastzone account. Start it again in this account.',
    });
  }

  try {
    const current = ownRows(auth, await be.getStartggLink(auth), 'startgg-link')[0];
    const verification = await createVerification(auth.userId, result.slug, result.startggUserId);
    const rows = ownRows(
      auth,
      await be.saveStartggLink(auth, { slug: result.slug, gamerTag: result.gamerTag, verification }, current?.slug !== result.slug),
      'startgg-link-save',
    );
    if (!rows[0]) {
      throw new HttpError(403, 'forbidden', {
        de: 'Die Verknüpfung konnte nicht gespeichert werden. Ist deine E-Mail-Adresse bestätigt?',
        en: 'The link could not be saved. Is your email address confirmed?',
      });
    }
    return ok({ link: await publicLink(auth.userId, rows[0]), changed: Boolean(current && current.slug !== result.slug), previousSlug: current && current.slug !== result.slug ? current.slug : null }, done);
  } catch (err) {
    toHttp(err);
  }
});
