import { BackendError } from './types.js';

/**
 * PostgREST-Pfade ohne String-Bau.
 *
 * SQL schreibt dieser Code nirgends. PostgREST übersetzt jede Anfrage in eine
 * Abfrage mit gebundenen Parametern, Körper gehen als JSON raus. Die eine Stelle,
 * an der Eingaben noch Syntax werden könnten, ist die Query-URL selbst: Ein Wert
 * mit `&` hängt einen zweiten Filter an, ein `*` in `ilike` wird zum Platzhalter.
 *
 * Deshalb gilt hier dasselbe Prinzip wie bei vorbereiteten Statements:
 * - Struktur (Tabelle, Spalten, Operator, Sortierung) kommt nur aus dem Code und
 *   wird gegen eine enge Grammatik geprüft. Ein Verstoß ist ein Programmierfehler.
 * - Werte gehen ausschließlich über `eq()` bzw. `ilikeExact()` hinein, werden
 *   vollständig kodiert und können nie etwas anderes sein als ein Literal.
 */

const IDENT = /^[a-z_][a-z0-9_]*$/;
// select mit Einbettung, z. B. id,body,author:profiles(id,username)
const SELECT = /^[a-z_][a-z0-9_]*(:[a-z_][a-z0-9_]*)?(\([a-z0-9_,:]+\))?(,[a-z_][a-z0-9_]*(:[a-z_][a-z0-9_]*)?(\([a-z0-9_,:]+\))?)*$/;
const ORDER = /^[a-z_][a-z0-9_]*\.(asc|desc)$/;
// Steuerzeichen haben in keinem unserer Werte etwas zu suchen.
const CONTROL = /[\x00-\x1f\x7f]/;

export interface Filter {
  readonly op: 'eq' | 'ilike';
  readonly literal: string;
}

function literal(value: string | number): string {
  if (typeof value === 'number') {
    if (!Number.isSafeInteger(value)) throw new BackendError('bad-request');
    return String(value);
  }
  if (CONTROL.test(value)) throw new BackendError('bad-request');
  return value;
}

/** Spalte = Wert, exakt. */
export const eq = (value: string | number): Filter => ({ op: 'eq', literal: literal(value) });

/**
 * Spalte = Wert ohne Rücksicht auf Groß- und Kleinschreibung, aber OHNE Muster.
 * `%`, `_` und `\` werden für LIKE maskiert. `*` wandelt PostgREST selbst in `%`
 * um, bevor LIKE es sieht; maskieren lässt es sich nicht, also wird es abgelehnt.
 */
export function ilikeExact(value: string): Filter {
  const v = literal(value);
  if (v.includes('*')) throw new BackendError('bad-request');
  return { op: 'ilike', literal: v.replace(/[\\%_]/g, (c) => `\\${c}`) };
}

function assertStructure(ok: boolean, what: string): void {
  if (!ok) throw new Error(`[postgrest] ungültige Struktur: ${what}`);
}

export interface RestQuery {
  select?: string;
  where?: Record<string, Filter>;
  order?: string;
  limit?: number;
  onConflict?: string[];
}

/** Baut `/rest/v1/<table>?…`. Jeder Schlüssel und jeder Wert läuft durch encodeURIComponent. */
export function restPath(table: string, query: RestQuery = {}): string {
  assertStructure(IDENT.test(table), 'table');
  const params: Array<[string, string]> = [];
  if (query.select !== undefined) {
    assertStructure(SELECT.test(query.select), 'select');
    params.push(['select', query.select]);
  }
  for (const [column, filter] of Object.entries(query.where ?? {})) {
    assertStructure(IDENT.test(column), 'column');
    params.push([column, `${filter.op}.${filter.literal}`]);
  }
  if (query.order !== undefined) {
    assertStructure(ORDER.test(query.order), 'order');
    params.push(['order', query.order]);
  }
  if (query.limit !== undefined) {
    assertStructure(Number.isSafeInteger(query.limit) && query.limit > 0 && query.limit <= 1000, 'limit');
    params.push(['limit', String(query.limit)]);
  }
  if (query.onConflict !== undefined) {
    assertStructure(query.onConflict.length > 0 && query.onConflict.every((c) => IDENT.test(c)), 'on_conflict');
    params.push(['on_conflict', query.onConflict.join(',')]);
  }
  const search = params.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  return `/rest/v1/${table}${search ? `?${search}` : ''}`;
}

/** `/rest/v1/rpc/<name>`. Argumente gehen als JSON-Körper, nie in die URL. */
export function rpcPath(name: string): string {
  assertStructure(IDENT.test(name), 'rpc');
  return `/rest/v1/rpc/${name}`;
}
