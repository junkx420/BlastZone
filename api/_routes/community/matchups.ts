import { matchupPaar, ratingOk, SLUG_PATTERN } from '../../../src/shared/account-rules.js';
import { backend, toHttp, type Auth, type Backend, type MatchupSummary } from '../../_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson, str } from '../../_lib/http.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET    /api/community/matchups?a=<slug>&b=<slug>   Aggregat des Paars
 * PUT    /api/community/matchups  { a, b, rating }   eigene Bewertung setzen
 * DELETE /api/community/matchups?a=<slug>&b=<slug>   eigene Bewertung löschen
 *
 * Gespeichert wird jedes Paar genau einmal, aus Sicht des alphabetisch ersten
 * Slugs (Migration 0008). Diese Route dreht die Werte auf die Richtung, nach
 * der gefragt wurde: `rating` und `average` gelten immer aus Sicht von `a`.
 *
 * Fremde Einzelstimmen verlassen die Datenbank nie, auch nicht hier: Die
 * SQL-Funktion liefert nur Durchschnitt, Anzahl und die eigene Stimme, und den
 * Durchschnitt erst ab drei Stimmen.
 */

interface Paar {
  low: string;
  high: string;
  gedreht: boolean;
}

function paarAus(a: string, b: string): Paar {
  if (!SLUG_PATTERN.test(a) || !SLUG_PATTERN.test(b)) {
    throw new HttpError(400, 'unknown-fighter', { de: 'Diesen Fighter gibt es nicht.', en: 'That fighter does not exist.' });
  }
  if (a === b) {
    throw new HttpError(400, 'same-fighter', { de: 'Ein Fighter gegen sich selbst ergibt kein Matchup.', en: 'A fighter against itself is not a matchup.' });
  }
  return matchupPaar(a, b);
}

/** Dreht das Ergebnis auf die gefragte Richtung. */
const ausSicht = (summary: MatchupSummary, gedreht: boolean): MatchupSummary =>
  gedreht
    ? { average: summary.average === null ? null : -summary.average, votes: summary.votes, mine: summary.mine === null ? null : -summary.mine }
    : summary;

const laden = async (be: Backend, auth: Auth, paar: Paar): Promise<MatchupSummary> => ausSicht(await be.matchupSummary(auth, paar.low, paar.high), paar.gedreht);

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'matchups-read-user', key: auth.userId, max: 120, windowSec: 60 });
  const query = new URL(request.url).searchParams;
  try {
    const paar = paarAus(query.get('a') ?? '', query.get('b') ?? '');
    return ok({ matchup: await laden(be, auth, paar) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const PUT = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'matchups-write-user', key: auth.userId, max: 40, windowSec: 60 });
  const data = await readJson(request, 1024);
  try {
    const paar = paarAus(str(data.a), str(data.b));
    if (!ratingOk(data.rating)) {
      throw new HttpError(400, 'bad-rating', { de: 'Diese Bewertung gibt es nicht.', en: 'That rating does not exist.' });
    }
    // Der Körper meint die Richtung a gegen b, gespeichert wird aus Sicht von low.
    const gespeichert = paar.gedreht ? -data.rating : data.rating;
    return ok({ matchup: ausSicht(await be.rateMatchup(auth, paar.low, paar.high, gespeichert), paar.gedreht) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const DELETE = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'matchups-write-user', key: auth.userId, max: 40, windowSec: 60 });
  const query = new URL(request.url).searchParams;
  try {
    const paar = paarAus(query.get('a') ?? '', query.get('b') ?? '');
    return ok({ matchup: ausSicht(await be.unrateMatchup(auth, paar.low, paar.high), paar.gedreht) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
