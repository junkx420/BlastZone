/**
 * Input notation. Combo steps are written as space-separated tokens
 * ("sh nair", "grab dthrow", "623a"); each token maps to controller glyphs
 * in GameCube layout, the competitive standard.
 */

import { t, type MessageKey } from '../i18n';

export type Dir = 'n' | 'u' | 'd' | 'f' | 'b' | 'uf' | 'df' | 'ub' | 'db';
export type Button = 'A' | 'B' | 'X' | 'Z' | 'R';

export type Glyph =
  | { t: 'dir'; d: Dir }
  | { t: 'btn'; b: Button; smash?: boolean; hold?: boolean; tap?: boolean }
  | { t: 'mod'; label: string };

export type TokenGroup = 'movement' | 'ground' | 'smash' | 'air' | 'special' | 'grab' | 'command';

export interface Token {
  short: string;
  name: string;
  group: TokenGroup;
  glyphs: Glyph[];
}

const dir = (d: Dir): Glyph => ({ t: 'dir', d });
const btn = (b: Button, opts: { smash?: boolean; hold?: boolean; tap?: boolean } = {}): Glyph => ({ t: 'btn', b, ...opts });
const mod = (label: string): Glyph => ({ t: 'mod', label });
const AIR = mod(t('mod.air'));
/** Erklärung eines Tokens in der Seitensprache (i18n/messages/notation.ts). */
const say = (key: string): string => t(`tok.${key}` as MessageKey);

export const TOKENS: Record<string, Token> = {
  // Movement
  sh: { short: 'SH', name: say('sh'), group: 'movement', glyphs: [btn('X', { tap: true })] },
  fh: { short: 'FH', name: say('fh'), group: 'movement', glyphs: [btn('X', { hold: true })] },
  dj: { short: 'DJ', name: say('dj'), group: 'movement', glyphs: [AIR, btn('X')] },
  dash: { short: 'Dash', name: say('dash'), group: 'movement', glyphs: [dir('f'), dir('f')] },
  ff: { short: 'FF', name: say('ff'), group: 'movement', glyphs: [AIR, dir('d')] },
  land: { short: t('short.land'), name: say('land'), group: 'movement', glyphs: [mod(t('mod.land'))] },
  wait: { short: 'Timing', name: say('wait'), group: 'movement', glyphs: [mod(t('mod.timing'))] },
  jump: { short: t('short.jump'), name: say('jump'), group: 'movement', glyphs: [btn('X')] },
  btilt: { short: 'Btilt', name: say('btilt'), group: 'ground', glyphs: [dir('b'), btn('A')] },
  sbh: { short: t('short.sbh'), name: say('sbh'), group: 'special', glyphs: [dir('f'), btn('B', { hold: true })] },
  dbh: { short: t('short.dbh'), name: say('dbh'), group: 'special', glyphs: [dir('d'), btn('B', { hold: true })] },

  // Ground attacks
  jab: { short: 'Jab', name: say('jab'), group: 'ground', glyphs: [btn('A')] },
  ftilt: { short: 'Ftilt', name: say('ftilt'), group: 'ground', glyphs: [dir('f'), btn('A')] },
  utilt: { short: 'Utilt', name: say('utilt'), group: 'ground', glyphs: [dir('u'), btn('A')] },
  dtilt: { short: 'Dtilt', name: say('dtilt'), group: 'ground', glyphs: [dir('d'), btn('A')] },
  lftilt: { short: 'Light Ftilt', name: say('lftilt'), group: 'ground', glyphs: [dir('f'), btn('A', { tap: true })] },
  ldtilt: { short: 'Light Dtilt', name: say('ldtilt'), group: 'ground', glyphs: [dir('d'), btn('A', { tap: true })] },
  da: { short: 'Dash Attack', name: say('da'), group: 'ground', glyphs: [mod(t('mod.dash')), btn('A')] },

  // Smash attacks
  fsmash: { short: 'Fsmash', name: say('fsmash'), group: 'smash', glyphs: [dir('f'), btn('A', { smash: true })] },
  usmash: { short: 'Usmash', name: say('usmash'), group: 'smash', glyphs: [dir('u'), btn('A', { smash: true })] },
  dsmash: { short: 'Dsmash', name: say('dsmash'), group: 'smash', glyphs: [dir('d'), btn('A', { smash: true })] },

  // Aerials
  nair: { short: 'Nair', name: say('nair'), group: 'air', glyphs: [AIR, btn('A')] },
  fair: { short: 'Fair', name: say('fair'), group: 'air', glyphs: [AIR, dir('f'), btn('A')] },
  bair: { short: 'Bair', name: say('bair'), group: 'air', glyphs: [AIR, dir('b'), btn('A')] },
  uair: { short: 'Uair', name: say('uair'), group: 'air', glyphs: [AIR, dir('u'), btn('A')] },
  dair: { short: 'Dair', name: say('dair'), group: 'air', glyphs: [AIR, dir('d'), btn('A')] },
  zair: { short: 'Zair', name: say('zair'), group: 'air', glyphs: [AIR, btn('Z')] },

  // Specials
  nb: { short: 'Neutral B', name: say('nb'), group: 'special', glyphs: [btn('B')] },
  sb: { short: 'Side B', name: say('sb'), group: 'special', glyphs: [dir('f'), btn('B')] },
  ub: { short: 'Up B', name: say('ub'), group: 'special', glyphs: [dir('u'), btn('B')] },
  db: { short: 'Down B', name: say('db'), group: 'special', glyphs: [dir('d'), btn('B')] },

  // Grabs and throws
  grab: { short: 'Grab', name: say('grab'), group: 'grab', glyphs: [btn('Z')] },
  dashgrab: { short: 'Dash Grab', name: say('dashgrab'), group: 'grab', glyphs: [mod(t('mod.dash')), btn('Z')] },
  pummel: { short: 'Pummel', name: say('pummel'), group: 'grab', glyphs: [btn('A')] },
  fthrow: { short: 'Fthrow', name: say('fthrow'), group: 'grab', glyphs: [dir('f')] },
  bthrow: { short: 'Bthrow', name: say('bthrow'), group: 'grab', glyphs: [dir('b')] },
  uthrow: { short: 'Uthrow', name: say('uthrow'), group: 'grab', glyphs: [dir('u')] },
  dthrow: { short: 'Dthrow', name: say('dthrow'), group: 'grab', glyphs: [dir('d')] },
};

/** Numpad notation, facing right: 2 = down, 6 = forward, 3 = down-forward. */
const NUMPAD: Record<string, Dir> = { '1': 'db', '2': 'd', '3': 'df', '4': 'b', '5': 'n', '6': 'f', '7': 'ub', '8': 'u', '9': 'uf' };

const MOTION_NAMES: Record<string, string> = {
  '236': t('motion.236'),
  '214': t('motion.214'),
  '623': t('motion.623'),
  '41236': t('motion.41236'),
};

export function resolveToken(raw: string): Token {
  const key = raw.toLowerCase();
  const known = TOKENS[key];
  if (known) return known;

  const motion = /^([1-9]{3,6})([ab])$/.exec(key);
  if (motion) {
    const [, digits = '', button = 'a'] = motion;
    const b = button.toUpperCase() as Button;
    return {
      short: `${digits}${b}`,
      name: `${MOTION_NAMES[digits] ?? t('motion.generic')} (${digits}) + ${b}`,
      group: 'command',
      glyphs: [...[...digits].map((n) => dir(NUMPAD[n] ?? 'n')), btn(b)],
    };
  }

  return { short: raw, name: raw, group: 'movement', glyphs: [mod(raw)] };
}

export const parseInput = (input: string): Token[] => input.trim().split(/\s+/).map(resolveToken);

export const BUTTON_LEGEND: Array<{ b: Button; name: string }> = [
  { b: 'A', name: t('btn.A') },
  { b: 'B', name: t('btn.B') },
  { b: 'Z', name: t('btn.Z') },
  { b: 'X', name: t('btn.X') },
  { b: 'R', name: t('btn.R') },
];
