import { promises as dns } from 'node:dns';
import { DISPOSABLE_MX_HINTS } from '../../src/shared/disposable-email.js';

export type MxVerdict = 'ok' | 'no-mail' | 'disposable' | 'unknown';

const withTimeout = <T>(p: Promise<T>, ms: number): Promise<T> =>
  Promise.race([p, new Promise<T>((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))]);

/**
 * Stufe 3 der Wegwerf-Erkennung: Kann die Domain überhaupt Mail empfangen, und
 * wenn ja, gehört ihr Mailserver einem bekannten Wegwerf-Dienst?
 *
 * Die Abfrage läuft über den DNS-Resolver der Laufzeit, es geht also keine
 * Adresse an einen Drittanbieter. Nur die Domain wird aufgelöst, nie die ganze
 * Adresse. Bei Zeitüberschreitung oder DNS-Störung heißt es „unknown“ und die
 * Registrierung geht weiter: Die Bestätigungsmail filtert dann ohnehin.
 */
export async function checkMx(domain: string): Promise<MxVerdict> {
  try {
    const records = await withTimeout(dns.resolveMx(domain), 2500);
    // „Null MX“ (RFC 7505): Die Domain erklärt ausdrücklich, keine Mail anzunehmen.
    const hosts = records.map((r) => r.exchange.toLowerCase()).filter((h) => h && h !== '.');
    if (!hosts.length) return 'no-mail';
    if (hosts.some((h) => DISPOSABLE_MX_HINTS.some((hint) => h.includes(hint)))) return 'disposable';
    return 'ok';
  } catch (err) {
    const code = (err as { code?: string }).code;
    if (code !== 'ENODATA' && code !== 'ENOTFOUND') return 'unknown';
    // Ohne MX-Eintrag gilt laut RFC 5321 der A-Eintrag als Mailserver.
    try {
      const a = await withTimeout(dns.resolve4(domain).catch(() => dns.resolve6(domain)), 2000);
      return a.length ? 'ok' : 'no-mail';
    } catch {
      return code === 'ENOTFOUND' ? 'no-mail' : 'unknown';
    }
  }
}
