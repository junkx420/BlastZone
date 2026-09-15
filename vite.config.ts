import { defineConfig, loadEnv, type Plugin } from 'vite';
import { findSecretKeys } from './src/shared/key-guard';

/**
 * Führt die Vercel-Functions aus api/ im Dev-Server aus.
 *
 * Auf Vercel läuft jede Datei unter api/ als eigene Function. Lokal gibt es das
 * nicht, deshalb leitet dieses Plugin /api/<pfad> an api/<pfad>.ts weiter und
 * ruft dort die exportierte Methode (GET, POST, …) mit einem echten Web-Request
 * auf. Damit testet man lokal genau den Code, der später live läuft.
 *
 * Nur im Dev-Server aktiv (`apply: 'serve'`). Dateien mit Unterstrich (api/_lib)
 * sind wie auf Vercel keine Routen.
 */
function vercelApiDev(): Plugin {
  return {
    name: 'blastzone-api-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) return next();
        const url = new URL(req.url, `http://${req.headers.host ?? 'localhost'}`);
        const route = url.pathname.replace(/^\/api\//, '').replace(/\/+$/, '');
        const send = (status: number, message: string): void => {
          res.statusCode = status;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: false, error: { code: 'dev', message } }));
        };
        if (!/^[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(route) || route.split('/').some((p) => p.startsWith('_'))) return send(404, 'Unbekannte Route.');

        let mod: Record<string, unknown>;
        try {
          mod = await server.ssrLoadModule(`/api/${route}.ts`);
        } catch (err) {
          server.config.logger.error(`[api] ${route}: ${String(err)}`);
          return send(404, 'Unbekannte Route.');
        }
        const handler = mod[req.method ?? 'GET'];
        if (typeof handler !== 'function') return send(405, 'Methode nicht erlaubt.');

        const chunks: Uint8Array[] = [];
        for await (const chunk of req) chunks.push(chunk as Uint8Array);
        const headers = new Headers();
        for (const [key, value] of Object.entries(req.headers)) {
          if (Array.isArray(value)) value.forEach((v) => headers.append(key, v));
          else if (value !== undefined) headers.set(key, value);
        }
        const hasBody = req.method !== 'GET' && req.method !== 'HEAD';
        const request = new Request(url, { method: req.method, headers, body: hasBody ? Buffer.concat(chunks) : undefined });

        try {
          const response = (await (handler as (r: Request) => Promise<Response>)(request)) as Response;
          res.statusCode = response.status;
          response.headers.forEach((value, key) => {
            if (key !== 'set-cookie') res.setHeader(key, value);
          });
          const cookies = response.headers.getSetCookie();
          if (cookies.length) res.setHeader('Set-Cookie', cookies);
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (err) {
          server.config.logger.error(`[api] ${route}: ${String(err)}`);
          send(500, 'Fehler im Handler, siehe Terminal.');
        }
      });
    },
  };
}

/**
 * Bricht den Build ab, wenn im Browser-Bundle ein Supabase-Admin-Key steht
 * (sb_secret_… oder ein JWT mit service_role). Prüft jede ausgegebene Datei,
 * JavaScript, CSS und kopierte Assets. Die Meldung nennt nur Datei und Position,
 * nie den Key, damit er auch nicht im Vercel-Build-Log landet.
 */
function secretGuard(): Plugin {
  return {
    name: 'blastzone-secret-guard',
    apply: 'build',
    generateBundle(_options, bundle) {
      const leaks: string[] = [];
      for (const [file, output] of Object.entries(bundle)) {
        const text = output.type === 'chunk' ? output.code : typeof output.source === 'string' ? output.source : Buffer.from(output.source).toString('latin1');
        for (const hit of findSecretKeys(text)) leaks.push(`${file}: ${hit}`);
      }
      if (leaks.length) this.error(`Admin-Key im Browser-Bundle, Build abgebrochen:\n${leaks.join('\n')}`);
    },
  };
}

/**
 * Server-Variablen, die der Dev-Server aus .env an die lokalen Functions weitergibt.
 * Eine Whitelist: Was hier nicht steht, erreicht auch api/ lokal nicht.
 * Bewusst ohne SUPABASE_SECRET_KEY, der Code braucht ihn nicht.
 */
const SERVER_ENV_KEYS = [
  'SUPABASE_URL',
  'VITE_SUPABASE_URL',
  'SUPABASE_PUBLISHABLE_KEY',
  'SUPABASE_ANON_KEY',
  'VITE_SUPABASE_PUBLISHABLE_KEY',
  'VITE_SUPABASE_ANON_KEY',
  'UPSTASH_REDIS_REST_URL',
  'UPSTASH_REDIS_REST_TOKEN',
  'STARTGG_TOKEN',
  'STARTGG_CACHE_KEY',
];

export default defineConfig(({ mode, command }) => {
  if (command === 'serve' && process.env.BLASTZONE_FORCE_MOCK === '1') {
    // Lasttest (scripts/lasttest.mjs): nie gegen echte Dienste, weder Supabase noch start.gg, auch wenn .env Keys hat.
    for (const key of SERVER_ENV_KEYS) {
      delete process.env[key];
    }
    process.env.BLASTZONE_BACKEND = 'mock';
  } else if (command === 'serve') {
    // Server-Variablen aus .env für die lokalen Functions. Nur process.env, nie import.meta.env:
    // Ohne Präfix BLASTZONE_PUBLIC_ kommt davon nichts ins Browser-Bundle.
    const fileEnv = loadEnv(mode, process.cwd(), '');
    for (const key of SERVER_ENV_KEYS) {
      if (fileEnv[key]) process.env[key] = fileEnv[key];
    }
    // Ohne Keys: Speicher-Backend für lokale Tests. api/_lib/env.ts verweigert es auf Vercel.
    if (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL) delete process.env.BLASTZONE_BACKEND;
    else process.env.BLASTZONE_BACKEND = 'mock';
  }

  return {
    // Relative base + hash routing: the build runs from any static host or sub-path.
    base: './',
    /*
     * Nur Variablen mit diesem Präfix erreichen import.meta.env im Browser.
     * Der Vite-Standard VITE_ ist bewusst abgeschaltet: Supabase-Anleitungen
     * nennen ihre Keys oft VITE_…, und ein so benannter Secret Key bei Vercel
     * wäre sonst nur einen `import.meta.env`-Zugriff vom Bundle entfernt.
     * Der Browser braucht keinen einzigen Key, er spricht nur mit /api.
     */
    envPrefix: 'BLASTZONE_PUBLIC_',
    plugins: [vercelApiDev(), secretGuard()],
    // host: true bindet auf 0.0.0.0 – der Dev-Server ist damit aus dem ganzen LAN erreichbar.
    server: { port: 5173, strictPort: true, host: true },
    preview: { port: 4173, strictPort: true, host: true },
    build: { target: 'es2022', cssMinify: true },
  };
});
