import { HttpError, ok } from '../../_lib/http.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { fetchGermanTournaments } from '../../_lib/startgg.js';

/**
 * GET /api/startgg/tournaments  kommende SSBU-Turniere in Deutschland
 *
 * Öffentlich: Die Liste hängt an keinem Konto und ist für alle gleich. Deshalb
 * liegt sie auch im Prozess zwischengespeichert (15 Minuten, startgg.ts), und
 * start.gg sieht höchstens vier Anfragen pro Stunde und Instanz.
 *
 * Der Token bleibt hier, der Browser bekommt nur die fertige Liste.
 */
export const GET = route(async () => {
  await enforce({ name: 'turniere-global', key: 'alle', max: 120, windowSec: 60 });
  try {
    return ok({ tournaments: await fetchGermanTournaments() });
  } catch (err) {
    if (err instanceof HttpError) throw err;
    throw new HttpError(503, 'startgg-unavailable', {
      de: 'start.gg ist gerade nicht erreichbar. Versuch es gleich noch einmal.',
      en: 'start.gg is not reachable right now. Try again in a moment.',
    });
  }
});
