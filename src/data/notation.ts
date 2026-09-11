/**
 * Input notation. Combo steps are written as space-separated tokens
 * ("sh nair", "grab dthrow", "623a"); each token maps to controller glyphs
 * in GameCube layout, the competitive standard.
 */

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
const AIR = mod('Luft');

export const TOKENS: Record<string, Token> = {
  // Movement
  sh: { short: 'SH', name: 'Short Hop: Sprungtaste nur antippen', group: 'movement', glyphs: [btn('X', { tap: true })] },
  fh: { short: 'FH', name: 'Full Hop: Sprungtaste halten', group: 'movement', glyphs: [btn('X', { hold: true })] },
  dj: { short: 'DJ', name: 'Doppelsprung in der Luft', group: 'movement', glyphs: [AIR, btn('X')] },
  dash: { short: 'Dash', name: 'Dash: Stick schnell zur Seite', group: 'movement', glyphs: [dir('f'), dir('f')] },
  ff: { short: 'FF', name: 'Fast Fall: in der Luft Stick nach unten', group: 'movement', glyphs: [AIR, dir('d')] },
  land: { short: 'Landen', name: 'Aerial vor der Landung beenden, dann direkt weiter', group: 'movement', glyphs: [mod('Landung')] },
  wait: { short: 'Timing', name: 'Kurz warten, bis der Gegner in Reichweite fällt', group: 'movement', glyphs: [mod('Timing')] },
  jump: { short: 'Sprung', name: 'Springen, auch direkt aus einem Special heraus', group: 'movement', glyphs: [btn('X')] },
  btilt: { short: 'Btilt', name: 'Back Tilt: Stick leicht nach hinten + A', group: 'ground', glyphs: [dir('b'), btn('A')] },
  sbh: { short: 'Side B (gehalten)', name: 'Side Special aufladen: Stick zur Seite + B halten', group: 'special', glyphs: [dir('f'), btn('B', { hold: true })] },
  dbh: { short: 'Down B (gehalten)', name: 'Down Special aufladen: Stick nach unten + B halten', group: 'special', glyphs: [dir('d'), btn('B', { hold: true })] },

  // Ground attacks
  jab: { short: 'Jab', name: 'Jab: Standangriff', group: 'ground', glyphs: [btn('A')] },
  ftilt: { short: 'Ftilt', name: 'Forward Tilt: Stick leicht zur Seite + A', group: 'ground', glyphs: [dir('f'), btn('A')] },
  utilt: { short: 'Utilt', name: 'Up Tilt: Stick leicht nach oben + A', group: 'ground', glyphs: [dir('u'), btn('A')] },
  dtilt: { short: 'Dtilt', name: 'Down Tilt: ducken + A', group: 'ground', glyphs: [dir('d'), btn('A')] },
  lftilt: { short: 'Light Ftilt', name: 'Light Forward Tilt: A nur antippen', group: 'ground', glyphs: [dir('f'), btn('A', { tap: true })] },
  ldtilt: { short: 'Light Dtilt', name: 'Light Down Tilt: A nur antippen', group: 'ground', glyphs: [dir('d'), btn('A', { tap: true })] },
  da: { short: 'Dash Attack', name: 'Dash Attack: Angriff aus dem Dash', group: 'ground', glyphs: [mod('Dash'), btn('A')] },

  // Smash attacks
  fsmash: { short: 'Fsmash', name: 'Forward Smash: Stick kräftig zur Seite + A oder C-Stick', group: 'smash', glyphs: [dir('f'), btn('A', { smash: true })] },
  usmash: { short: 'Usmash', name: 'Up Smash: Stick kräftig nach oben + A oder C-Stick', group: 'smash', glyphs: [dir('u'), btn('A', { smash: true })] },
  dsmash: { short: 'Dsmash', name: 'Down Smash: Stick kräftig nach unten + A oder C-Stick', group: 'smash', glyphs: [dir('d'), btn('A', { smash: true })] },

  // Aerials
  nair: { short: 'Nair', name: 'Neutral Air: A in der Luft ohne Richtung', group: 'air', glyphs: [AIR, btn('A')] },
  fair: { short: 'Fair', name: 'Forward Air: in der Luft Stick nach vorn + A', group: 'air', glyphs: [AIR, dir('f'), btn('A')] },
  bair: { short: 'Bair', name: 'Back Air: in der Luft Stick nach hinten + A', group: 'air', glyphs: [AIR, dir('b'), btn('A')] },
  uair: { short: 'Uair', name: 'Up Air: in der Luft Stick nach oben + A', group: 'air', glyphs: [AIR, dir('u'), btn('A')] },
  dair: { short: 'Dair', name: 'Down Air: in der Luft Stick nach unten + A', group: 'air', glyphs: [AIR, dir('d'), btn('A')] },
  zair: { short: 'Zair', name: 'Zair: Tether-Angriff mit der Greifen-Taste in der Luft', group: 'air', glyphs: [AIR, btn('Z')] },

  // Specials
  nb: { short: 'Neutral B', name: 'Neutral Special: B ohne Richtung', group: 'special', glyphs: [btn('B')] },
  sb: { short: 'Side B', name: 'Side Special: Stick zur Seite + B', group: 'special', glyphs: [dir('f'), btn('B')] },
  ub: { short: 'Up B', name: 'Up Special: Stick nach oben + B', group: 'special', glyphs: [dir('u'), btn('B')] },
  db: { short: 'Down B', name: 'Down Special: Stick nach unten + B', group: 'special', glyphs: [dir('d'), btn('B')] },

  // Grabs and throws
  grab: { short: 'Grab', name: 'Greifen: Z oder Schild + A', group: 'grab', glyphs: [btn('Z')] },
  dashgrab: { short: 'Dash Grab', name: 'Greifen aus dem Dash', group: 'grab', glyphs: [mod('Dash'), btn('Z')] },
  pummel: { short: 'Pummel', name: 'Pummel: A während des Griffs', group: 'grab', glyphs: [btn('A')] },
  fthrow: { short: 'Fthrow', name: 'Forward Throw: Stick nach vorn', group: 'grab', glyphs: [dir('f')] },
  bthrow: { short: 'Bthrow', name: 'Back Throw: Stick nach hinten', group: 'grab', glyphs: [dir('b')] },
  uthrow: { short: 'Uthrow', name: 'Up Throw: Stick nach oben', group: 'grab', glyphs: [dir('u')] },
  dthrow: { short: 'Dthrow', name: 'Down Throw: Stick nach unten', group: 'grab', glyphs: [dir('d')] },
};

/** Numpad notation, facing right: 2 = down, 6 = forward, 3 = down-forward. */
const NUMPAD: Record<string, Dir> = { '1': 'db', '2': 'd', '3': 'df', '4': 'b', '5': 'n', '6': 'f', '7': 'ub', '8': 'u', '9': 'uf' };

const MOTION_NAMES: Record<string, string> = {
  '236': 'Viertelkreis vorwärts',
  '214': 'Viertelkreis rückwärts',
  '623': 'Dragon-Punch-Motion',
  '41236': 'Halbkreis vorwärts',
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
      name: `${MOTION_NAMES[digits] ?? 'Command-Input'} (${digits}) + ${b}`,
      group: 'command',
      glyphs: [...[...digits].map((n) => dir(NUMPAD[n] ?? 'n')), btn(b)],
    };
  }

  return { short: raw, name: raw, group: 'movement', glyphs: [mod(raw)] };
}

export const parseInput = (input: string): Token[] => input.trim().split(/\s+/).map(resolveToken);

export const BUTTON_LEGEND: Array<{ b: Button; name: string }> = [
  { b: 'A', name: 'Angriff' },
  { b: 'B', name: 'Special' },
  { b: 'Z', name: 'Greifen' },
  { b: 'X', name: 'Sprung' },
  { b: 'R', name: 'Schild' },
];
