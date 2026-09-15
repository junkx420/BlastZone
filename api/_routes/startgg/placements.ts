import { startggProfileUrl } from '../../../src/shared/startgg.js';
import { backend, toHttp, type Auth, type Backend, type StartggLinkRow } from '../../_lib/backend.js';
import { HttpError, ok } from '../../_lib/http.js';
import { ownRows } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';
import { fetchStartggPlacements, resolveStartggUser } from '../../_lib/startgg.js';
import { ageMs, CACHE_VERSION, isFresh, REFRESH_COOLDOWN_MS, signPayload, verifiedPayload, type PlacementsPayload } from '../../_lib/startggCache.js';

/**
 * GET /api/startgg/placements[?refresh=1]
 *
 * Ablauf:
 * 1. Nicht verknüpft → 404 `startgg-not-linked`.
 * 2. Gültiger, frischer Cache (Signatur, Slug, 24 h) → sofort aus dem Cache.
 * 3. `refresh=1`, aber der letzte Abruf ist jünger als 15 min → Cache mit Hinweis, kein start.gg-Aufruf.
 * 4. Sonst start.gg fragen (höchstens 6 echte Abrufe pro Stunde pro Konto),
 *    Ergebnis signieren und speichern.
 * 5. start.gg nicht erreichbar oder gedrosselt → alter Cache mit Hinweis, falls vorhanden,
 *    sonst ein sauberer Fehler. Lieber gestrige Placements als eine leere Seite.
 *
 * Die Antwort enthält nur, was die Oberfläche braucht: keine Blastzone-Nutzer-ID,
 * keine start.gg-Nutzer-ID, keine Signatur.
 */

interface Notice {
  code: 'refresh-cooldown' | 'stale' | 'startgg-unavailable' | 'startgg-rate-limited';
  message: string;
}

function respond(payload: PlacementsPayload, cookies: string[], source: 'cache' | 'startgg', notice?: Notice): Response {
  const fetchedMs = Date.parse(payload.fetchedAt);
  return ok(
    {
      profile: { slug: payload.slug, gamerTag: payload.gamerTag, profileUrl: startggProfileUrl(payload.slug) },
      placements: payload.placements,
      fetchedAt: payload.fetchedAt,
      source,
      nextRefreshAt: new Date(fetchedMs + REFRESH_COOLDOWN_MS).toISOString(),
      notice: notice ?? null,
    },
    cookies,
  );
}

const minutesUntil = (iso: string, ms: number): number => Math.max(1, Math.ceil((Date.parse(iso) + ms - Date.now()) / 60_000));

async function loadCache(be: Backend, auth: Auth, slug: string): Promise<PlacementsPayload | null> {
  const rows = ownRows(auth, await be.getStartggCache(auth), 'startgg-cache');
  const row = rows[0];
  if (!row || row.slug !== slug) return null;
  return verifiedPayload(auth.userId, slug, row.payload, row.signature);
}

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'startgg-read-user', key: auth.userId, max: 60, windowSec: 60 });
  const refresh = new URL(request.url).searchParams.get('refresh') === '1';

  let link: StartggLinkRow | undefined;
  let cached: PlacementsPayload | null = null;
  try {
    link = ownRows(auth, await be.getStartggLink(auth), 'startgg-link')[0];
    if (!link) throw new HttpError(404, 'startgg-not-linked', 'Du hast noch kein start.gg-Profil verknüpft.');
    cached = await loadCache(be, auth, link.slug);
  } catch (err) {
    toHttp(err);
  }
  if (!link) throw new HttpError(404, 'startgg-not-linked', 'Du hast noch kein start.gg-Profil verknüpft.');

  if (cached && cached.notFound && isFresh(cached)) {
    throw new HttpError(404, 'startgg-player-not-found', 'Das verknüpfte start.gg-Profil gibt es nicht mehr. Verknüpfe dein aktuelles Profil neu.');
  }
  if (cached && !cached.notFound && isFresh(cached) && !refresh) return respond(cached, cookies, 'cache');
  if (cached && !cached.notFound && refresh && ageMs(cached) < REFRESH_COOLDOWN_MS) {
    const min = minutesUntil(cached.fetchedAt, REFRESH_COOLDOWN_MS);
    return respond(cached, cookies, 'cache', {
      code: 'refresh-cooldown',
      message: `Gerade erst aktualisiert. Neu laden geht wieder in ${min === 1 ? 'einer Minute' : `${min} Minuten`}.`,
    });
  }

  // Ab hier wird start.gg gefragt. Fällt das aus, ist ein alter, gültiger Cache besser als ein Fehler.
  const stale = cached && !cached.notFound ? cached : null;
  const fallback = (err: unknown): Response => {
    if (stale && err instanceof HttpError) {
      if (err.code === 'rate-limited') {
        // Unser eigenes Stundenlimit, nicht start.gg.
        return respond(stale, cookies, 'cache', { code: 'stale', message: 'Du hast in der letzten Stunde oft aktualisiert. Du siehst den letzten gespeicherten Stand.' });
      }
      if (err.code === 'startgg-unavailable' || err.code === 'startgg-rate-limited') {
        return respond(stale, cookies, 'cache', { code: err.code, message: 'start.gg antwortet gerade nicht. Du siehst den letzten gespeicherten Stand.' });
      }
    }
    throw err;
  };

  let payload: PlacementsPayload;
  try {
    await enforce({ name: 'startgg-fetch-user', key: auth.userId, max: 6, windowSec: 3600 });
    // Die start.gg-Nutzer-ID aus dem letzten gültigen Abruf spart Query A.
    let userId = stale?.userId ?? null;
    let gamerTag = stale?.gamerTag ?? link.gamerTag;
    if (!userId) {
      const player = await resolveStartggUser(link.slug);
      if (!player) {
        payload = { v: CACHE_VERSION, slug: link.slug, userId: null, gamerTag: link.gamerTag, notFound: true, placements: [], fetchedAt: new Date().toISOString() };
        await be.saveStartggCache(auth, link.slug, payload, await signPayload(auth.userId, payload));
        throw new HttpError(404, 'startgg-player-not-found', 'Das verknüpfte start.gg-Profil gibt es nicht mehr. Verknüpfe dein aktuelles Profil neu.');
      }
      userId = player.userId;
      gamerTag = player.gamerTag;
    }
    const placements = await fetchStartggPlacements(link.slug, userId);
    payload = { v: CACHE_VERSION, slug: link.slug, userId, gamerTag, notFound: false, placements, fetchedAt: new Date().toISOString() };
  } catch (err) {
    if (err instanceof HttpError && err.code === 'startgg-player-not-found') throw err;
    return fallback(err);
  }

  try {
    const signature = await signPayload(auth.userId, payload);
    ownRows(auth, await be.saveStartggCache(auth, link.slug, payload, signature), 'startgg-cache-save');
  } catch (err) {
    // Speichern fehlgeschlagen: Die frischen Daten trotzdem zeigen, nur ohne Cache.
    if (err instanceof HttpError && err.code === 'forbidden') throw err;
    console.warn(JSON.stringify({ t: 'startgg', hinweis: 'Cache nicht gespeichert', error: err instanceof Error ? err.message : String(err) }));
  }
  return respond(payload, cookies, 'startgg');
});
