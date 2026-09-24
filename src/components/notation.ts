import { parseInput, type Glyph, type Token } from '../data/notation';
import { t } from '../i18n';
import { html, raw, type Markup } from '../lib/dom';

const ARROW = raw('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.2 19.2 11h-4.7v9.8H9.5V11H4.8z"/></svg>');

export function glyph(g: Glyph): Markup {
  if (g.t === 'dir') {
    return g.d === 'n'
      ? html`<span class="kc kc--dir" data-dir="n"><span class="kc__dot"></span></span>`
      : html`<span class="kc kc--dir" data-dir="${g.d}">${ARROW}</span>`;
  }
  if (g.t === 'btn') {
    const variant = g.smash ? 'smash' : g.hold ? 'hold' : g.tap ? 'tap' : '';
    return html`<span class="kc kc--btn" data-btn="${g.b}"${variant ? raw(` data-variant="${variant}"`) : ''}>${g.b}</span>`;
  }
  return html`<span class="kc kc--mod">${g.label}</span>`;
}

export const tokenKeys = (token: Token): Markup =>
  html`<span class="keys__token" title="${token.name}">${token.glyphs.map(glyph)}</span>`;

/** Controller glyphs for one combo step, e.g. "sh nair" → [X tap] [Air] [A]. */
export function inputKeys(input: string): Markup {
  const tokens = parseInput(input);
  return html`<span class="keys" aria-hidden="true">${tokens.map(
    (t, i) => html`${i ? raw('<span class="keys__then"></span>') : ''}${tokenKeys(t)}`,
  )}</span>`;
}

/** Community shorthand for a step, unless the step names its move. */
export const inputLabel = (input: string, label?: string): string =>
  label ?? parseInput(input).map((t) => t.short).join(' ');

/** Plain-language reading for screen readers. */
export const inputDescription = (input: string): string =>
  parseInput(input)
    .map((t) => t.name)
    .join(t('join.then'));
