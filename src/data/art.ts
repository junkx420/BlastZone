import type { Fighter } from './types';

const BASE = 'https://www.smashbros.com/assets_v2/img/fighter';

/**
 * Asset names on smashbros.com (verified via HEAD requests). Most match the slug with
 * underscores; later fighters use their Japanese names, and the three Mii Fighters share one image.
 */
const ASSET_NAMES: Record<string, string> = {
  rosalina: 'rosalina_and_luma',
  'mii-brawler': 'mii_fighter',
  'mii-swordfighter': 'mii_fighter',
  'mii-gunner': 'mii_fighter',
  isabelle: 'shizue',
  incineroar: 'gaogaen',
  'piranha-plant': 'packun_flower',
  hero: 'dq_hero',
  'min-min': 'minmin',
  'pyra-mythra': 'homura',
};

const assetName = (slug: string): string => ASSET_NAMES[slug] ?? slug.replace(/-/g, '_');

/** Select-screen face crop: 270×164, about 70 KB. Safe for grids. */
export const faceArt = (f: Pick<Fighter, 'slug'>): string => `${BASE}/thumb_a/${assetName(f.slug)}.png`;

/** Full-body render: 0.2–4 MB, so only one per view. `Fighter.art` overrides it. */
export const renderArt = (f: Pick<Fighter, 'slug' | 'art'>): string => f.art ?? `${BASE}/${assetName(f.slug)}/main.png`;
