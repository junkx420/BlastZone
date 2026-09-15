import { json } from './http.js';

/**
 * Bündelt mehrere Routen in EINER Vercel Function.
 *
 * Grund: Im Hobby-Plan erlaubt Vercel ohne Framework höchstens 12 Functions pro
 * Deployment, jede Datei unter api/ zählt als eine. Mit dem 13. Endpunkt schlug
 * das Deployment am 15.09.2026 fehl („Build Completed“, danach Fehler beim
 * Ausliefern). Deshalb liegen die Handler jetzt unter api/_routes/ (Unterstrich:
 * keine eigene Function) und eine Datei pro Bereich (api/auth.ts, api/startgg.ts)
 * verteilt die Anfragen.
 *
 * Die URLs bleiben dieselben (/api/auth/login, /api/startgg/link …). Auf Vercel
 * leitet eine Rewrite-Regel in vercel.json `/api/auth/:action` auf
 * `/api/auth?action=:action`. Welche Form der Request danach trägt (ursprünglicher
 * Pfad oder Ziel mit Query), ist nicht dokumentiert. Deshalb liest der Dispatcher
 * zuerst `action` aus der Query und sonst das letzte Pfadsegment. Lokal löst der
 * Dev-Server den Pfad direkt auf (vite.config.ts). Jeder Handler
 * ist weiterhin mit route() umwickelt, Logging, Deadline und Limits gelten also
 * unverändert pro Endpunkt.
 */

type Handler = (request: Request) => Promise<Response>;
type RouteModule = Partial<Record<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', Handler>>;

const notFound = (): Response => json({ ok: false, error: { code: 'not-found', message: 'Unbekannte Route.' } }, 404);

export function dispatcher(routes: Record<string, RouteModule>): Required<RouteModule> {
  const run = (method: keyof RouteModule): Handler => async (request) => {
    // `action` aus der Rewrite-Query, sonst letztes Pfadsegment: /api/auth/login → login
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || (url.pathname.replace(/[/]+$/, '').split('/').pop() ?? '');
    const mod = Object.hasOwn(routes, action) ? routes[action] : undefined;
    if (!mod) return notFound();
    const handler = mod[method];
    if (!handler) {
      const allow = (['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] as const).filter((m) => mod[m]).join(', ');
      return json({ ok: false, error: { code: 'method-not-allowed', message: 'Methode nicht erlaubt.' } }, 405, [], { Allow: allow });
    }
    return handler(request);
  };
  return { GET: run('GET'), POST: run('POST'), PUT: run('PUT'), PATCH: run('PATCH'), DELETE: run('DELETE') };
}
