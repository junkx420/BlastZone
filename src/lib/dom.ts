const RAW = Symbol('raw');

/** Pre-escaped markup. Only `html` and `raw` create it. */
export interface Markup {
  readonly [RAW]: true;
  readonly value: string;
}

export const raw = (value: string): Markup => ({ [RAW]: true, value });

const ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export const esc = (value: unknown): string =>
  String(value).replace(/[&<>"']/g, (c) => ENTITIES[c] ?? c);

const isMarkup = (v: unknown): v is Markup => typeof v === 'object' && v !== null && RAW in v;

function serialize(v: unknown): string {
  if (v == null || v === false || v === true) return '';
  if (Array.isArray(v)) return v.map(serialize).join('');
  if (isMarkup(v)) return v.value;
  return esc(v);
}

/** Tagged template: interpolations are escaped unless they are Markup. */
export function html(strings: TemplateStringsArray, ...values: unknown[]): Markup {
  let out = strings[0] ?? '';
  for (let i = 0; i < values.length; i++) out += serialize(values[i]) + (strings[i + 1] ?? '');
  return raw(out);
}

export function mount(target: Element, markup: Markup): void {
  target.innerHTML = markup.value;
}

export function qs<T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T | null {
  return root.querySelector<T>(selector);
}

export function qsa<T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}

/** Normalizes text for search: lowercase, no diacritics, alphanumerics only. */
export const normalize = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');

export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const finePointer = (): boolean => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
