/**
 * Konfiguration aus Umgebungsvariablen. Alle Schlüssel bleiben auf dem Server:
 * Vite gibt nur Variablen mit dem Präfix VITE_ an den Browser weiter, und keiner
 * der Namen hier trägt es. Deshalb erscheint auch der Anon-Key nie im Bundle.
 *
 * Vorlage: .env.example. Auf Vercel unter Project Settings → Environment Variables.
 */
export interface Env {
  supabaseUrl: string;
  supabaseAnonKey: string;
  upstashUrl: string | null;
  upstashToken: string | null;
}

export function readEnv(): Env | null {
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/+$/, '');
  // Neue Supabase-Projekte geben einen Publishable Key (sb_publishable_…), ältere einen Anon-Key (JWT).
  // Beide dürfen öffentlich sein und haben dieselbe Rolle. Den Secret Key liest der Code nirgends.
  const supabaseAnonKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return {
    supabaseUrl,
    supabaseAnonKey,
    upstashUrl: process.env.UPSTASH_REDIS_REST_URL?.replace(/\/+$/, '') ?? null,
    upstashToken: process.env.UPSTASH_REDIS_REST_TOKEN ?? null,
  };
}

/**
 * Speicher-Backend nur für den lokalen Dev-Server, wenn noch keine Keys da sind.
 * Der Vite-Dev-Server setzt BLASTZONE_BACKEND=mock. Auf Vercel ist VERCEL
 * immer gesetzt, dort greift der Mock nie, egal was sonst konfiguriert ist.
 */
export const mockAllowed = (): boolean => process.env.BLASTZONE_BACKEND === 'mock' && !process.env.VERCEL;
