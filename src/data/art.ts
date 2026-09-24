import { skinCount } from '../shared/account-rules';
import type { Fighter } from './types';

/** Served from public/fighters. BASE_URL keeps the paths correct in subfolder deployments. */
const BASE = `${import.meta.env.BASE_URL}fighters`;

/**
 * Asset names as published by smashbros.com, kept for the downloaded files. Most match the
 * slug with underscores; later fighters use their Japanese names, and the three Mii Fighters
 * share one image. See scripts/build-fighter-images.mjs for how the files were produced.
 */
const ASSET_NAMES: Record<string, string> = {
  rosalina: 'rosalina_and_luma',
  // Die drei Miis teilten sich frueher das gemeinsame Artwork von smashbros.com,
  // weil Nintendo dort nur ein Bild fuer alle veroeffentlicht. Jetzt hat jeder
  // sein eigenes Portraet, die Dateinamen folgen der Standardregel.
  isabelle: 'shizue',
  incineroar: 'gaogaen',
  'piranha-plant': 'packun_flower',
  hero: 'dq_hero',
  'min-min': 'minmin',
  'pyra-mythra': 'homura',
};

const assetName = (slug: string): string => ASSET_NAMES[slug] ?? slug.replace(/-/g, '_');

/** Select-screen face crop: 270×164 WebP, 11 KB on average. Safe for grids. */
export const faceArt = (f: Pick<Fighter, 'slug'>): string => `${BASE}/face/${assetName(f.slug)}.webp`;

/**
 * Avatar mit Skin, 270×164 wie der Standard-Ausschnitt (scripts/build-skin-faces.mjs).
 * Alle acht Skins eines Fighters liegen dort gleich gerahmt, auch Skin 1. Unbekannte
 * Skins werden 1.
 */
export const skinFaceArt = (f: Pick<Fighter, 'slug'>, skin: number): string => {
  const n = Number.isInteger(skin) && skin >= 1 && skin <= skinCount(f.slug) ? skin : 1;
  return `${BASE}/skins/${assetName(f.slug)}_${n}.webp`;
};

/** Full-body render, scaled to 1000 px: 30–203 KB WebP. `Fighter.art` overrides it. */
export const renderArt = (f: Pick<Fighter, 'slug' | 'art'>): string => f.art ?? `${BASE}/render/${assetName(f.slug)}.webp`;
