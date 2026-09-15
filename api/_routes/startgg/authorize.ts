import { backend } from '../../_lib/backend.js';
import { HttpError, redirect } from '../../_lib/http.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { authenticate } from '../../_lib/session.js';
import { authorizeLocation, createState, oauthMode, profileReturn, returnCodeFor } from '../../_lib/startggOauth.js';

/**
 * GET /api/startgg/authorize
 *
 * Startet „Mit start.gg bestätigen“. Der Browser ruft das als Seite auf (Link im
 * Profil), deshalb antwortet die Route mit Weiterleitungen statt JSON. Fehler
 * landen als Code in `#/profil?startgg=…`, die Profilseite zeigt den Text dazu.
 * Ablauf und Sicherheitsüberlegungen: api/_lib/startggOauth.ts.
 */
export const GET = route(async (request) => {
  let cookies: string[] = [];
  try {
    const be = backend();
    const session = await authenticate(request, be);
    cookies = session.cookies;
    if (!session.auth) return redirect(profileReturn('login'), cookies);
    if (!oauthMode()) return redirect(profileReturn('not-configured'), cookies);
    // Jeder Start setzt ein Cookie und schickt zu start.gg. Zehn pro Stunde reichen für Abbrüche und zweite Versuche.
    await enforce({ name: 'startgg-oauth-user', key: session.auth.userId, max: 10, windowSec: 3600 });

    const { state, setCookie } = await createState(request, session.auth.userId);
    // `as` gibt es nur im lokalen Mock (Test-Account wählen). Live wird der Parameter ignoriert.
    const mockAs = oauthMode() === 'mock' ? new URL(request.url).searchParams.get('as') : null;
    return redirect(authorizeLocation(request, state, mockAs), [...cookies, setCookie]);
  } catch (err) {
    if (err instanceof HttpError) return redirect(profileReturn(returnCodeFor(err)), cookies);
    throw err;
  }
});
