import { mockAllowed, readStartggConfig } from './env.js';
import { HttpError } from './http.js';
import type { Placement } from './startgg.js';

/**
 * Signierter Placement-Cache.
 *
 * Die Zeile in `startgg_cache` schreibt der Server mit dem Token des Nutzers.
 * Über die öffentliche API könnte derselbe Nutzer sie also auch selbst
 * beschreiben. Deshalb trägt jeder Eintrag eine HMAC-SHA256-Signatur mit
 * STARTGG_CACHE_KEY, den nur der Server kennt. Beim Lesen gilt eine Zeile nur,
 * wenn Signatur, Version und Slug passen; alles andere behandelt der Server wie
 * „kein Cache“ und fragt start.gg neu.
 *
 * Signiert wird eine kanonische Form des Payloads mit sortierten Schlüsseln.
 * Grund: Postgres speichert `jsonb` in eigener Schlüsselreihenfolge. Das
 * JSON, das zurückkommt, ist inhaltlich gleich, als Text aber ein anderes, und
 * eine Signatur über den Rohtext wäre nach dem ersten Lesen immer ungültig.
 */

export const CACHE_VERSION = 1;
/** Treffer gelten einen Tag. */
export const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
/** „Kein Profil gefunden“ gilt eine Stunde, damit ein gelöschtes Profil nicht bei jedem Aufruf start.gg fragt. */
export const NOT_FOUND_TTL_MS = 60 * 60 * 1000;
/** Manuelles Aktualisieren frühestens nach 15 Minuten. */
export const REFRESH_COOLDOWN_MS = 15 * 60 * 1000;

export interface PlacementsPayload {
  v: typeof CACHE_VERSION;
  slug: string;
  /** start.gg-Nutzer-ID aus Query A. Erspart beim nächsten Abruf eine Anfrage. */
  userId: string | null;
  gamerTag: string | null;
  notFound: boolean;
  placements: Placement[];
  /** ISO-Zeitpunkt des Abrufs. Steht im signierten Teil, damit ihn niemand zurückdatieren kann. */
  fetchedAt: string;
}

/** Zufälliger fester Schlüssel NUR für den lokalen Speicher-Mock ohne .env. Auf Vercel greift der Mock nie. */
const MOCK_KEY = 'nur-fuer-den-lokalen-speicher-mock-niemals-produktiv-0000';

function cacheKey(): string {
  const { cacheKey: key } = readStartggConfig();
  if (key) return key;
  if (mockAllowed()) return MOCK_KEY;
  throw new HttpError(503, 'startgg-not-configured', {
    de: 'Die start.gg-Anbindung ist noch nicht eingerichtet.',
    en: 'The start.gg connection is not set up yet.',
  });
}

export function canonicalJson(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${canonicalJson(v)}`).join(',')}}`;
}

async function hmacHex(key: string, message: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Vergleich in konstanter Zeit, damit die Antwortzeit nichts über die Signatur verrät. */
function equalHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const message = (ownerId: string, payload: PlacementsPayload): string => `blastzone-startgg-cache\n${ownerId}\n${canonicalJson(payload)}`;

/*
 * Weitere Signaturen mit demselben Schlüssel (Bestätigung, OAuth-Cookies).
 * Jede Verwendung hat ein eigenes Präfix, damit eine gültige Signatur aus der
 * einen Stelle nie an einer anderen passt. Teile dürfen keinen Zeilenumbruch
 * enthalten, sonst ließen sich zwei Teile zu einem anderen Paar verschieben.
 */
export function signParts(domain: string, parts: string[]): Promise<string> {
  if (parts.some((p) => p.includes('\n'))) throw new Error('signParts: Zeilenumbruch im signierten Teil');
  return hmacHex(cacheKey(), [domain, ...parts].join('\n'));
}

export async function checkParts(domain: string, parts: string[], signature: string): Promise<boolean> {
  if (!/^[0-9a-f]{64}$/.test(signature) || parts.some((p) => p.includes('\n'))) return false;
  return equalHex(await signParts(domain, parts), signature);
}

/** Konstantzeit-Vergleich für andere Geheimnisse gleicher Form, etwa den OAuth-State. */
export const sameSecret = equalHex;

/**
 * Signiert für genau einen Blastzone-Nutzer. Die Besitzer-ID steckt in der
 * Signatur: Eine gültige Zeile lässt sich nicht in ein anderes Konto kopieren.
 */
export const signPayload = (ownerId: string, payload: PlacementsPayload): Promise<string> => hmacHex(cacheKey(), message(ownerId, payload));

export async function verifiedPayload(ownerId: string, expectedSlug: string, raw: unknown, signature: string): Promise<PlacementsPayload | null> {
  if (!raw || typeof raw !== 'object' || !/^[0-9a-f]{64}$/.test(signature)) return null;
  const payload = raw as PlacementsPayload;
  if (payload.v !== CACHE_VERSION || payload.slug !== expectedSlug || !Array.isArray(payload.placements) || typeof payload.fetchedAt !== 'string') return null;
  const expected = await hmacHex(cacheKey(), message(ownerId, payload));
  return equalHex(expected, signature) ? payload : null;
}

export function ageMs(payload: PlacementsPayload, now = Date.now()): number {
  const t = Date.parse(payload.fetchedAt);
  // Zeitpunkt in der Zukunft oder unlesbar: als uralt behandeln, also neu holen.
  return Number.isFinite(t) && t <= now + 60_000 ? now - t : Number.POSITIVE_INFINITY;
}

export const isFresh = (payload: PlacementsPayload, now = Date.now()): boolean => ageMs(payload, now) < (payload.notFound ? NOT_FOUND_TTL_MS : CACHE_TTL_MS);
