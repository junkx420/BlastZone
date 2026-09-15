import { classifySupabaseKey } from '../../src/shared/key-guard.js';

/**
 * Konfiguration aus Umgebungsvariablen. Alle Schlüssel bleiben auf dem Server:
 * Der Browser bekommt gar keinen Supabase-Key, er spricht nur mit /api. Vite
 * gibt ausschließlich Variablen mit dem Präfix BLASTZONE_PUBLIC_ ans Bundle
 * weiter (vite.config.ts, `envPrefix`), auch VITE_-Variablen bleiben also hier.
 *
 * Der Server arbeitet nur mit dem öffentlichen Key (Publishable bzw. anon).
 * Row Level Security gilt damit für jede Anfrage. Ein Secret Key wird nirgends
 * gelesen und, falls er versehentlich im Feld des öffentlichen Keys steht,
 * abgelehnt.
 *
 * Vorlage: .env.example. Auf Vercel unter Project Settings → Environment Variables.
 */
export interface Env {
  supabaseUrl: string;
  supabaseAnonKey: string;
  upstashUrl: string | null;
  upstashToken: string | null;
}

/** Erster gesetzter, nicht leerer Wert. Leerzeichen um den Wert herum stammen oft aus dem Kopieren. */
const first = (...names: string[]): string | undefined =>
  names.map((n) => process.env[n]?.trim()).find((v): v is string => Boolean(v));

let warned = false;
let keyWarned = false;

export function readEnv(): Env | null {
  /*
   * Mehrere Schreibweisen, weil Supabase und Vercel unterschiedliche vorschlagen:
   * - SUPABASE_PUBLISHABLE_KEY: neue Projekte (sb_publishable_…)
   * - SUPABASE_ANON_KEY: ältere Projekte und die Vercel-Integration
   * - VITE_…: so heißen sie in vielen Anleitungen für reine Frontend-Apps
   * Alle sind öffentliche Keys mit derselben Rolle. Gelesen werden sie hier nur
   * auf dem Server; ins Browser-Bundle kämen VITE_-Variablen nur, wenn Code in
   * src/ sie über import.meta.env anspräche, und das tut keiner.
   * Den Secret Key liest der Code nirgends.
   */
  const supabaseUrl = first('SUPABASE_URL', 'VITE_SUPABASE_URL')?.replace(/\/+$/, '');
  const supabaseAnonKey = first('SUPABASE_PUBLISHABLE_KEY', 'SUPABASE_ANON_KEY', 'VITE_SUPABASE_PUBLISHABLE_KEY', 'VITE_SUPABASE_ANON_KEY');
  if (!supabaseUrl || !supabaseAnonKey) {
    // Einmal pro Instanz ins Function-Log, nie in eine Antwort: Welche Variablen fehlen, geht Besucher nichts an.
    if (!warned && !mockAllowed()) {
      warned = true;
      console.warn(`[env] Supabase nicht konfiguriert: ${supabaseUrl ? '' : 'SUPABASE_URL '}${supabaseAnonKey ? '' : 'SUPABASE_PUBLISHABLE_KEY'}fehlt. Nach dem Eintragen bei Vercel neu deployen.`);
    }
    return null;
  }
  const kind = classifySupabaseKey(supabaseAnonKey);
  if (kind !== 'publishable') {
    // Lieber gar kein Backend als eines, das mit Admin-Rechten an RLS vorbeiläuft. Den Wert selbst nie loggen.
    if (!keyWarned) {
      keyWarned = true;
      console.error(
        kind === 'secret'
          ? '[env] SUPABASE_PUBLISHABLE_KEY enthält einen Secret Key (sb_secret_… bzw. service_role). Backend bleibt aus. Den öffentlichen Key eintragen und den Secret Key in Supabase neu erzeugen.'
          : '[env] SUPABASE_PUBLISHABLE_KEY ist kein öffentlicher Supabase-Key (erwartet sb_publishable_… oder anon-JWT). Backend bleibt aus.',
      );
    }
    return null;
  }
  return {
    supabaseUrl,
    supabaseAnonKey,
    upstashUrl: process.env.UPSTASH_REDIS_REST_URL?.replace(/\/+$/, '') ?? null,
    upstashToken: process.env.UPSTASH_REDIS_REST_TOKEN ?? null,
  };
}

/**
 * start.gg-Anbindung. Beides nur auf dem Server, nie mit Präfix für das Bundle:
 * - STARTGG_TOKEN: persönlicher API-Token von start.gg (Settings → Developer Settings)
 * - STARTGG_CACHE_KEY: Schlüssel für die HMAC-Signatur des Placement-Caches (Schritt 2)
 * Fehlt der Token, meldet die API „nicht eingerichtet“. Im lokalen Speicher-Mock
 * springt ein Test-Resolver ein (api/_lib/startgg.ts).
 */
export interface StartggConfig {
  token: string | null;
  cacheKey: string | null;
}

export function readStartggConfig(): StartggConfig {
  const token = process.env.STARTGG_TOKEN?.trim() || null;
  const cacheKey = process.env.STARTGG_CACHE_KEY?.trim() || null;
  return {
    // Ein Token mit Leerzeichen oder Zeilenumbruch stammt aus fehlerhaftem Kopieren und würde den Header zerlegen.
    token: token && /^[A-Za-z0-9._-]{16,256}$/.test(token) ? token : null,
    cacheKey: cacheKey && cacheKey.length >= 32 ? cacheKey : null,
  };
}

/**
 * OAuth-Anwendung auf start.gg (Settings → Developer Settings → OAuth), für
 * „Mit start.gg bestätigen“. Beides nur auf dem Server:
 * - STARTGG_OAUTH_CLIENT_ID: die ID der Anwendung, eine Zahl
 * - STARTGG_OAUTH_CLIENT_SECRET: geht nur im Körper des Token-Tauschs an start.gg, nie in eine URL
 */
export interface StartggOauthConfig {
  clientId: string;
  clientSecret: string;
}

export function readStartggOauthConfig(): StartggOauthConfig | null {
  const clientId = process.env.STARTGG_OAUTH_CLIENT_ID?.trim() ?? '';
  const clientSecret = process.env.STARTGG_OAUTH_CLIENT_SECRET?.trim() ?? '';
  if (!/^[0-9]{1,12}$/.test(clientId) || !/^[A-Za-z0-9._-]{16,256}$/.test(clientSecret)) return null;
  return { clientId, clientSecret };
}

/**
 * Speicher-Backend nur für den lokalen Dev-Server, wenn noch keine Keys da sind.
 * Der Vite-Dev-Server setzt BLASTZONE_BACKEND=mock. Auf Vercel ist VERCEL
 * immer gesetzt, dort greift der Mock nie, egal was sonst konfiguriert ist.
 */
export const mockAllowed = (): boolean => process.env.BLASTZONE_BACKEND === 'mock' && !process.env.VERCEL;
