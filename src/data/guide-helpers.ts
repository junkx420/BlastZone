import type { FighterGuide, Source } from './types';

export const wiki = (page: string, label = 'SmashWiki'): Source => ({ label, url: `https://www.ssbwiki.com/${page}` });

export const game8 = (id: string, label = 'Game8'): Source => ({
  label,
  url: `https://game8.co/games/Super-Smash-Bros-Ultimate/archives/${id}`,
});

export const ufd = (slug: string, label = 'Ultimate Frame Data'): Source => ({ label, url: `https://ultimateframedata.com/${slug}` });

/** Copies a guide for an echo fighter with identical gameplay; combo ids get the echo's slug. */
export function echoGuide(base: FighterGuide, slug: string, overrides: Pick<FighterGuide, 'meta' | 'sources'>): FighterGuide {
  return {
    ...base,
    ...overrides,
    slug,
    combos: base.combos.map((c) => ({ ...c, id: c.id.replace(base.slug, slug) })),
  };
}
