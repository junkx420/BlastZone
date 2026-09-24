import { clientIp, HttpError, redirect } from '../../_lib/http.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { checkState, clearResultCookie, clearStateCookie, identityFromCode, profileReturn, resultCookie, returnCodeFor } from '../../_lib/startggOauth.js';

/**
 * GET /api/startgg/callback?code=…&state=…
 *
 * Hierhin schickt start.gg nach dem Login zurück. Die Adresse muss exakt so in der
 * OAuth-Anwendung auf start.gg stehen. Die Route schreibt nichts in die Datenbank:
 * Sie prüft `state`, holt die Identität und legt das Ergebnis signiert für den
 * Bestätigen-Schritt ab (warum getrennt: api/_lib/startggOauth.ts).
 *
 * Das State-Cookie wird in jedem Fall gelöscht. Ein Rücksprung gilt genau einmal.
 */
export const GET = route(async (request) => {
  const cookies = [clearStateCookie(request)];
  try {
    // Pro IP, weil hier noch keine Sitzung geprüft wird. Jeder Aufruf kann zwei Anfragen an start.gg auslösen.
    await enforce({ name: 'startgg-oauth-callback-ip', key: clientIp(request), max: 20, windowSec: 3600 });

    const params = new URL(request.url).searchParams;
    const checked = await checkState(request, params.get('state') ?? '');
    if (checked === 'missing') return redirect(profileReturn('expired'), cookies);
    if (checked === 'mismatch') return redirect(profileReturn('mismatch'), cookies);

    // Abgebrochen oder abgelehnt. start.gg schickt dann `error` statt `code`.
    if (params.get('error')) return redirect(profileReturn('denied'), cookies);
    const code = params.get('code');
    if (!code) return redirect(profileReturn('failed'), cookies);

    const user = await identityFromCode(request, code);
    cookies.push(await resultCookie(request, { ownerId: checked.ownerId, slug: user.slug, startggUserId: user.userId, gamerTag: user.gamerTag }));
    return redirect(profileReturn('confirm'), cookies);
  } catch (err) {
    if (err instanceof HttpError) return redirect(profileReturn(returnCodeFor(err)), [...cookies, clearResultCookie(request)]);
    throw err;
  }
});
