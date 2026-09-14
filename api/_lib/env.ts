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

/** Erster gesetzter, nicht leerer Wert. Leerzeichen um den Wert herum stammen oft aus dem Kopieren. */
const first = (...names: string[]): string | undefined =>
  names.map((n) => process.env[n]?.trim()).find((v): v is string => Boolean(v));

let warned = false;

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
