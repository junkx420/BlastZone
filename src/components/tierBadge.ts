import { TIER_TOTAL } from '../data/tiers';
import type { TierId, TierPlacement } from '../data/types';
import { html, type Markup } from '../lib/dom';

/** Heat group used for color: S+ is red-hot, E is cold grey. */
export function tierGroup(tier: TierId): string {
  return tier === 'S+' ? 's-plus' : tier.charAt(0).toLowerCase();
}

export function tierBadge(placement: TierPlacement | undefined, size: 'sm' | 'lg' = 'sm'): Markup {
  if (!placement) return html``;
  const { tier, rank } = placement;
  return html`<span class="tier tier--${size}" data-tier="${tierGroup(tier)}" role="img" aria-label="Tier ${tier}, Rang ${rank} von ${TIER_TOTAL}">
    <span class="tier__label">${tier}</span>
    <span class="tier__rank">${size === 'lg' ? `Rang ${rank}` : `#${rank}`}</span>
  </span>`;
}
