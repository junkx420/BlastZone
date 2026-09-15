/**
 * Fehler aus dem Browser sichtbar machen, ohne Besucher zu belästigen.
 *
 * - `reportError` schickt einen Fehler an /api/log (Vercel-Function-Log). Nur im
 *   Produktions-Build, höchstens fünf verschiedene pro Seitenaufruf, gleiche nur
 *   einmal. Keine Nutzerdaten, der Pfad ohne Query (der Bestätigungslink trägt
 *   dort seinen Token). Der Server schwärzt zusätzlich.
 * - Nach einem Deploy sucht ein offener Tab Chunks mit alten Hashes, die es nicht
 *   mehr gibt. Dann hilft nur Neuladen. Das passiert einmal automatisch, aber
 *   höchstens einmal pro Minute, damit ein echter Ausfall keine Schleife auslöst.
 * - Ein kleiner Hinweis erscheint, solange das Gerät offline ist.
 */

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

  window.addEventListener('vite:preloadError', (e) => {
    if (navigator.onLine === false) return;
    const KEY = 'bz-chunk-reload';
    let last = 0;
    try {
      last = Number(sessionStorage.getItem(KEY) ?? 0);
    } catch {
      /* Speicher gesperrt: dann nie automatisch neu laden */
      return;
    }
    if (Date.now() - last < 60_000) {
      reportError('chunk', (e as Event & { payload?: unknown }).payload ?? 'Chunk nicht ladbar');
      return;
    }
    try {
      sessionStorage.setItem(KEY, String(Date.now()));
    } catch {
      return;
    }
    e.preventDefault();
    window.location.reload();
  });

  const note = document.createElement('p');
  note.className = 'netstatus';
  note.setAttribute('role', 'status');
  note.textContent = 'Keine Verbindung. Kommentare und Lesezeichen gehen erst wieder, wenn du online bist.';
  const sync = (): void => {
    note.hidden = navigator.onLine !== false;
  };
  sync();
  document.body.append(note);
  window.addEventListener('online', sync);
  window.addEventListener('offline', sync);
}
