/**
 * Fehler aus dem Browser sichtbar machen, ohne Besucher zu belästigen.
 *
 * - `reportError` schickt einen Fehler an /api/log (Vercel-Function-Log). Nur im
 *   Produktions-Build, höchstens fünf verschiedene pro Seitenaufruf, gleiche nur
 *   einmal. Keine Nutzerdaten, der Pfad ohne Query (der Bestätigungslink trägt
 *   dort seinen Token). Der Server schwärzt zusätzlich.
 * - Nach einem Deploy sucht ein offener Tab Chunks mit alten Hashes, die es nicht
 *   mehr gibt. Dann hilft nur Neuladen. Das passiert einmal automatisch; scheitert
 *   es danach wieder, wird gemeldet statt erneut geladen (keine Schleife).
 * - Ein kleiner Hinweis erscheint, solange das Gerät offline ist.
 */

import { t } from '../i18n';

const MAX_REPORTS = 5;
const seen = new Set<string>();

/** Build-Kennung aus dem Dateinamen des Hauptbundles (index-<hash>.js). */
const release = (): string => {
  const src = document.querySelector<HTMLScriptElement>('script[type="module"][src]')?.src ?? '';
  return src.split('/').pop()?.replace(/^index-|[.]js$/g, '') ?? '';
};

const IGNORED = [/ResizeObserver loop/i, /Script error[.]?$/i, /extension:[/][/]/i];

export function reportError(kind: 'error' | 'unhandledrejection' | 'render' | 'chunk' | 'api', error: unknown): void {
  const err = error instanceof Error ? error : null;
  const message = err ? `${err.name}: ${err.message}` : String(error);
  const stack = err?.stack ?? '';
  if (IGNORED.some((re) => re.test(message) || re.test(stack))) return;
  // Netzprobleme meldet die Oberfläche selbst. Ins Log gehören sie nicht, sie sagen nichts über den Code.
  if (error && typeof error === 'object' && 'code' in error && ['offline', 'timeout'].includes(String((error as { code: unknown }).code))) return;

  if (!import.meta.env.PROD) {
    console.error(`[${kind}]`, error);
    return;
  }
  const key = `${kind}|${message}`;
  if (seen.has(key) || seen.size >= MAX_REPORTS) return;
  seen.add(key);

  const body = JSON.stringify({
    kind,
    message: message.slice(0, 500),
    stack: stack.slice(0, 1500),
    path: `${location.pathname}${location.hash.split('?')[0] ?? ''}`,
    release: release(),
  });
  // keepalive: Die Meldung geht auch dann raus, wenn die Seite gerade verlassen wird.
  void fetch('./api/log', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true, credentials: 'same-origin' }).catch(() => {});
}

export function initErrorHandling(): void {
  window.addEventListener('error', (e) => reportError('error', e.error ?? e.message));
  window.addEventListener('unhandledrejection', (e) => reportError('unhandledrejection', e.reason));

  /*
   * Merker ohne Browser-Speicher (die Datenschutzerklärung sagt zu Recht, dass die
   * Seite dort nichts ablegt): Das automatische Neuladen hängt `?neu=1` an. Steht
   * das schon in der Adresse, wird nicht noch einmal neu geladen, sondern gemeldet.
   * Nach einer Minute verschwindet der Parameter wieder aus der Adresse.
   */
  const RELOAD_PARAM = 'neu';
  const current = new URL(window.location.href);
  if (current.searchParams.has(RELOAD_PARAM)) {
    setTimeout(() => {
      const clean = new URL(window.location.href);
      clean.searchParams.delete(RELOAD_PARAM);
      history.replaceState(history.state, '', clean);
    }, 60_000);
  }
  window.addEventListener('vite:preloadError', (e) => {
    if (navigator.onLine === false) return;
    const url = new URL(window.location.href);
    if (url.searchParams.has(RELOAD_PARAM)) {
      reportError('chunk', (e as Event & { payload?: unknown }).payload ?? 'Chunk nicht ladbar');
      return;
    }
    e.preventDefault();
    url.searchParams.set(RELOAD_PARAM, '1');
    window.location.replace(url);
  });

  const note = document.createElement('p');
  note.className = 'netstatus';
  note.setAttribute('role', 'status');
  note.textContent = t('net.offline');
  const sync = (): void => {
    note.hidden = navigator.onLine !== false;
  };
  sync();
  document.body.append(note);
  window.addEventListener('online', sync);
  window.addEventListener('offline', sync);
}
