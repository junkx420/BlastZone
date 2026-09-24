/**
 * Wörterbuch eines Bereichs: Deutsch und Englisch nebeneinander in einer Datei.
 * TypeScript erzwingt, dass `en` genau die Schlüssel von `de` hat, kein fehlender,
 * kein zusätzlicher. Platzhalter schreiben sich `{name}`.
 */
export function defineMessages<T extends Record<string, string>>(messages: { de: T; en: { [K in keyof T]: string } }): { de: T; en: { [K in keyof T]: string } } {
  return messages;
}
