import { backend, BackendError } from '../../_lib/backend.js';
import { assertSameOrigin, clientIp, HttpError, ok, readJson, str } from '../../_lib/http.js';
import { route } from '../../_lib/route.js';
import { ownProfile } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { publicUser, sessionCookies } from '../../_lib/session.js';

/**
 * POST /api/auth/confirm  { tokenHash }
 *
 * Zweiter Schritt des Double Opt-In. Der Link in der Mail führt auf die Seite
 * #/bestaetigen, und erst ein Klick auf den Button dort löst diese Anfrage aus.
 * Absicht: Mail-Scanner, die Links vorab aufrufen, würden sonst den einmaligen
 * Token verbrauchen, bevor der Mensch klickt.
 */
export const POST = route(async (request) => {
  assertSameOrigin(request);
  await enforce({ name: 'confirm-ip', key: clientIp(request), max: 10, windowSec: 10 * 60 });

  const body = await readJson(request);
  const tokenHash = str(body.tokenHash);
  if (!/^[A-Za-z0-9_-]{16,256}$/.test(tokenHash)) {
    throw new HttpError(400, 'invalid-link', {
      de: 'Der Bestätigungslink ist unvollständig.',
      en: 'The confirmation link is incomplete.',
    });
  }

  const be = backend();
  try {
    const session = await be.verifyEmail(tokenHash);
    const auth = { token: session.accessToken, userId: session.user.id };
    const profile = ownProfile(auth, await be.getProfile(auth));
    if (!profile) throw new BackendError('not-found');
    return ok({ user: publicUser(session.user.email, profile) }, sessionCookies(request, session));
  } catch (err) {
    if (err instanceof BackendError && (err.code === 'invalid-token' || err.code === 'not-found' || err.code === 'bad-request')) {
      throw new HttpError(400, 'invalid-link', {
        de: 'Der Link ist abgelaufen oder wurde schon benutzt. Fordere unten einen neuen an.',
        en: 'The link has expired or was already used. Request a new one below.',
      });
    }
    throw err;
  }
});
