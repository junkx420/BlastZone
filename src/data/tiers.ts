import type { TierId, TierListSource, TierPlacement } from './types';

export const TIER_SOURCE: TierListSource = {
  name: 'UltRank-Tier-Liste #4',
  published: '6. Mai 2026',
  url: 'https://www.ssbwiki.com/Tier_list',
  note: 'Patch 13.0.4. Pokémon Trainer und Pyra/Mythra wurden als je ein Charakter bewertet. Peach und Daisy, Samus und Dark Samus, Pit und Dark Pit sowie Simon und Richter teilen sich jeweils einen Rang.',
};

/** [rank, tier, panel score, ...slugs] exactly as published. Echo pairs share a rank. */
const ROWS: Array<[number, TierId, number, ...string[]]> = [
  [1, 'S+', 10.426, 'steve'],
  [2, 'S+', 10.105, 'sonic'],
  [3, 'S+', 9.956, 'snake'],
  [4, 'S+', 9.883, 'mr-game-and-watch'],
  [5, 'S+', 9.809, 'rob'],
  [6, 'S+', 9.677, 'min-min'],
  [7, 'S+', 9.451, 'kazuya'],
  [8, 'S-', 8.997, 'diddy-kong'],
  [9, 'S-', 8.899, 'pyra-mythra'],
  [10, 'S-', 8.786, 'luigi'],
  [11, 'S-', 8.415, 'peach', 'daisy'],
  [12, 'S-', 8.39, 'yoshi'],
  [13, 'S-', 8.317, 'fox'],
  [14, 'S-', 8.299, 'joker'],
  [15, 'A+', 8.094, 'samus', 'dark-samus'],
  [16, 'A+', 8.032, 'palutena'],
  [17, 'A+', 7.98, 'pikachu'],
  [18, 'A+', 7.807, 'olimar'],
  [19, 'A+', 7.768, 'wario'],
  [20, 'A', 7.677, 'roy'],
  [21, 'A', 7.654, 'hero'],
  [22, 'A', 7.633, 'bayonetta'],
  [23, 'A', 7.589, 'mario'],
  [24, 'A', 7.567, 'wolf'],
  [25, 'A', 7.486, 'mii-brawler'],
  [26, 'A', 7.4857, 'mega-man'],
  [27, 'A', 7.459, 'sora'],
  [28, 'A', 7.362, 'cloud'],
  [29, 'A', 7.282, 'ryu'],
  [30, 'A-', 7.144, 'corrin'],
  [31, 'A-', 7.13, 'falco'],
  [32, 'A-', 6.882, 'shulk'],
  [33, 'A-', 6.821, 'captain-falcon'],
  [34, 'A-', 6.804, 'greninja'],
  [35, 'B+', 6.503, 'terry'],
  [36, 'B+', 6.457, 'pokemon-trainer'],
  [37, 'B+', 6.443, 'lucina'],
  [38, 'B+', 6.437, 'ken'],
  [39, 'B+', 6.42, 'zero-suit-samus'],
  [40, 'B+', 6.408, 'pac-man'],
  [41, 'B+', 6.29, 'toon-link'],
  [42, 'B+', 6.207, 'young-link'],
  [43, 'B+', 6.092, 'pit', 'dark-pit'],
  [44, 'B+', 6.08, 'rosalina'],
  [45, 'B+', 6.027, 'ice-climbers'],
  [46, 'B+', 5.99, 'donkey-kong'],
  [47, 'B-', 5.722, 'pichu'],
  [48, 'B-', 5.609, 'inkling'],
  [49, 'B-', 5.585, 'ness'],
  [50, 'B-', 5.4, 'sheik'],
  [51, 'B-', 5.374, 'byleth'],
  [52, 'B-', 5.366, 'meta-knight'],
  [53, 'B-', 5.298, 'sephiroth'],
  [54, 'B-', 5.148, 'duck-hunt'],
  [55, 'C+', 4.939, 'isabelle'],
  [56, 'C+', 4.9, 'mii-gunner'],
  [57, 'C+', 4.762, 'lucas'],
  [58, 'C+', 4.723, 'wii-fit-trainer'],
  [59, 'C+', 4.708, 'robin'],
  [60, 'C+', 4.628, 'ridley'],
  [61, 'C-', 4.466, 'banjo-and-kazooie'],
  [62, 'C-', 4.404, 'bowser-jr'],
  [63, 'C-', 4.401, 'lucario'],
  [64, 'C-', 4.355, 'jigglypuff'],
  [65, 'C-', 4.312, 'chrom'],
  [66, 'C-', 4.238, 'link'],
  [67, 'C-', 4.2, 'bowser'],
  [68, 'C-', 4.154, 'incineroar'],
  [69, 'C-', 4.137, 'kirby'],
  [70, 'C-', 4.015, 'piranha-plant'],
  [71, 'D+', 3.77, 'mii-swordfighter'],
  [72, 'D+', 3.564, 'mewtwo'],
  [73, 'D+', 3.474, 'zelda'],
  [74, 'D-', 3.168, 'marth'],
  [75, 'D-', 3.115, 'dr-mario'],
  [76, 'D-', 3.112, 'ike'],
  [77, 'D-', 3.069, 'king-k-rool'],
  [78, 'D-', 2.901, 'king-dedede'],
  [79, 'D-', 2.861, 'villager'],
  [80, 'E', 2.565, 'simon', 'richter'],
  [81, 'E', 2.288, 'little-mac'],
  [82, 'E', 1.768, 'ganondorf'],
];

export const TIER_PLACEMENTS: TierPlacement[] = ROWS.flatMap(([rank, tier, score, ...slugs]) =>
  slugs.map((slug) => ({ slug, rank, tier, score })),
);

export const TIER_BY_SLUG = new Map(TIER_PLACEMENTS.map((p) => [p.slug, p]));

/** Number of published ranks (echo pairs count once). */
export const TIER_TOTAL = ROWS.length;

/** Tiers in published order; only tiers that actually appear. */
export const TIER_ORDER: TierId[] = [...new Set(ROWS.map((r) => r[1]))];

export function tierGroups(): Array<{ tier: TierId; placements: TierPlacement[] }> {
  return TIER_ORDER.map((tier) => ({ tier, placements: TIER_PLACEMENTS.filter((p) => p.tier === tier) }));
}
