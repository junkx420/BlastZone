import { backend } from '../../_lib/backend.js';
import { assertSameOrigin, ok, parseCookies } from '../../_lib/http.js';
import { route } from '../../_lib/route.js';
import { clearCookies } from '../../_lib/session.js';

/** POST /api/auth/logout. Beendet die Sitzung bei Supabase und löscht die Cookies, auch wenn Supabase gerade nicht antwortet. */
export const POST = route(async (request) => {
  assertSameOrigin(request);
  const token = parseCookies(request).bz_at;
  if (token) {
    try {
      await backend().signOut(token);
    } catch (err) {
      console.warn('[logout] Supabase-Abmeldung fehlgeschlagen, Cookies werden trotzdem gelöscht', err);
    }
  }
  return ok({}, clearCookies(request));
});
