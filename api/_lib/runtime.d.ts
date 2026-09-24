/*
 * Minimale Typen für die Node-Laufzeit der Vercel-Functions.
 *
 * Das Projekt hat bewusst kein @types/node: Das Frontend soll gar nicht erst
 * gegen Node-APIs kompilieren können. Hier steht nur, was `api/` wirklich nutzt.
 * Kommt @types/node doch einmal dazu, diese Datei löschen.
 */

declare const process: { env: Record<string, string | undefined> };

declare module 'node:dns' {
  export const promises: {
    resolveMx(hostname: string): Promise<Array<{ exchange: string; priority: number }>>;
    resolve4(hostname: string): Promise<string[]>;
    resolve6(hostname: string): Promise<string[]>;
  };
}
