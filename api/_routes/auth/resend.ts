import { normalizeEmail } from '../../../src/shared/account-rules.js';
import { backend, BackendError } from '../../_lib/backend.js';
import { assertSameOrigin, clientIp, ok, readJson, str } from '../../_lib/http.js';
import { route } from '../../_lib/route.js';
import { enforce } from '../../_lib/ratelimit.js';

/**
 * POST /api/auth/resend  { email }
 *
 * Schickt die Bestätigungsmail erneut. Antwortet immer gleich, damit sich
 * darüber nicht herausfinden lässt, welche Adressen ein Konto haben.
 */
export const POST = route(async (request) => {
  assertSameOrigin(request);
  const body = await readJson(request);
  const email = normalizeEmail(str(body.email));
  const ip = clientIp(request);

  await enforce(
    { name: 'resend-ip', key: ip, max: 5, windowSec: 3600 },
    { name: 'resend-mail', key: email ?? 'ungueltig', max: 1, windowSec: 5 * 60 },
  );

  if (email) {
    try {
      await backend().resendConfirmation(email);
    } catch (err) {
      if (err instanceof BackendError && err.code === 'rate-limited') throw err;
      console.warn('[resend] ignoriert', err);
    }
  }
  return ok({ message: 'Falls es zu dieser Adresse ein unbestätigtes Konto gibt, ist eine neue Mail unterwegs.' });
});
