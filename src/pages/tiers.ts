import { faceThumb } from '../components/fighterTile';
import { ICONS } from '../components/icons';
import { tierGroup } from '../components/tierBadge';
import { FIGHTER_BY_SLUG } from '../data/fighters';
import { TIER_SOURCE, tierGroups } from '../data/tiers';
import type { TierId } from '../data/types';
import { accentVars } from '../lib/color';
import { html } from '../lib/dom';
import { reveals, scope } from '../lib/motion';
import { link } from '../lib/router';
import type { PageView } from './types';

const de = (n: number): string => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const tierId = (tier: TierId): string => `tier-${tier.toLowerCase().replace('-', '-minus').replace('+', '-plus')}`;

export function tiersPage(): PageView {
  return {
    title: 'Tier-Liste 2026 – Blastzone',
    markup: html`<div class="page tiers-page">
      <header class="container page-head">
        <h1 data-reveal="wipe">Tier-Liste 2026</h1>
        <p>${TIER_SOURCE.name}, veröffentlicht am ${TIER_SOURCE.published}. ${TIER_SOURCE.note}</p>
        <a class="link" href="${TIER_SOURCE.url}" target="_blank" rel="noopener">Tabelle auf SmashWiki${ICONS.external}</a>
      </header>
      <div class="container tierlist">
        ${tierGroups().map(
          ({ tier, placements }) => html`<section class="tierrow" data-tier="${tierGroup(tier)}" aria-labelledby="${tierId(tier)}">
            <h2 class="tierrow__label" id="${tierId(tier)}"><span class="vh">Tier </span>${tier}</h2>
            <ol class="tierrow__list" role="list">
              ${placements.map((p, i) => {
                const f = FIGHTER_BY_SLUG.get(p.slug);
                if (!f) return '';
                return html`<li class="tierchip" style="${accentVars(f.colors)}" data-reveal data-reveal-delay="${Math.min(i * 0.03, 0.3).toFixed(2)}">
                  <a class="tierchip__link" href="${link(`/fighter/${f.slug}`)}">
                    ${faceThumb(f, 'tierchip__art')}
                    <span class="tierchip__rank"><span aria-hidden="true">#</span><span class="vh">Rang </span>${p.rank}</span>
                    <span class="tierchip__name">${f.name}</span>
                    <span class="tierchip__score"><span class="vh">Panel-Wertung </span>${de(p.score)}</span>
                  </a>
                </li>`;
              })}
            </ol>
          </section>`,
        )}
      </div>
    </div>`,
    mount(root) {
      return scope(root, () => reveals(root));
    },
  };
}
