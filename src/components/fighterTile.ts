import { faceArt, renderArt, skinFaceArt } from '../data/art';
import { TIER_BY_SLUG } from '../data/tiers';
import type { Fighter } from '../data/types';
import { accentVars } from '../lib/color';
import { html, type Markup } from '../lib/dom';
import { link } from '../lib/router';
import { franchiseGlyph } from './franchise';
import { sigil, sigilStage } from './sigil';
import { tierBadge } from './tierBadge';

/**
 * Fighter artwork: the official render over the generated stage.
 * `tile` uses the select-screen face crop, `hero` the full-body render.
 * If an image fails to load, main.ts flags the wrapper and the stage shows the fighter number.
 */
export function fighterArt(f: Fighter, variant: 'tile' | 'hero' = 'tile'): Markup {
  const image =
    variant === 'hero'
      ? html`<img class="art__img art__img--render" src="${renderArt(f)}" alt="" decoding="async" fetchpriority="high" referrerpolicy="no-referrer" data-art />`
      : html`<img class="art__img art__img--face" src="${faceArt(f)}" alt="" width="270" height="164" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-art />`;
  // Kacheln bekommen die Bühne als Bilder (sigilStage), der große Header behält das Inline-SVG.
  return html`<span class="art art--${variant}" data-art-wrap>${variant === 'tile' ? sigilStage(f) : sigil(f, variant)}${image}</span>`;
}

/**
 * Small face crop for chips and search results; the accent gradient shows if it fails.
 * With `skin` it is a player's avatar: the chosen alt instead of the roster image.
 */
export function faceThumb(f: Fighter, className: string, skin?: number): Markup {
  const src = skin === undefined ? faceArt(f) : skinFaceArt(f, skin);
  return html`<span class="${className}" data-art-wrap aria-hidden="true"><img class="art__img art__img--face" src="${src}" alt="" width="270" height="164" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-art /></span>`;
}

/** Character-select tile. Name comes first in the DOM so the link reads naturally. */
export function fighterTile(f: Fighter): Markup {
  return html`<li class="tile" data-slug="${f.slug}" style="${accentVars(f.colors)}">
    <a class="tile__link" href="${link(`/fighter/${f.slug}`)}">
      <span class="tile__art" data-vt="art">${fighterArt(f, 'tile')}</span>
      <span class="tile__plate"><span class="tile__name" data-vt="name">${f.name}</span></span>
      <span class="tile__top">
        ${tierBadge(TIER_BY_SLUG.get(f.slug))}
        <span class="tile__franchise" title="${f.series}">${franchiseGlyph(f.series)}<span class="vh">${f.series}</span></span>
      </span>
      <span class="tile__p1" aria-hidden="true">P1</span>
    </a>
  </li>`;
}
