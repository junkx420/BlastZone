type RGB = [number, number, number];

const BG = '#06070a';
/** --bg im Light-Mode (--void-950 in theme-light.css). Ändert sich der Grund, hier nachziehen, sonst stimmt der Kontrast der Akzenttexte nicht. */
const LIGHT_BG = '#d3d7de';
const INK = '#0b0d12';

export function hexToRgb(hex: string): RGB {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export const rgbToHex = ([r, g, b]: RGB): string =>
  '#' + [r, g, b].map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0')).join('');

const toLinear = (c: number): number => {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const fromLinear = (c: number): number => {
  const s = c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
  return s * 255;
};

export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(toLinear) as RGB;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

// OKLab conversions for perceptually even interpolation.
function rgbToOklab(rgb: RGB): RGB {
  const [r, g, b] = rgb.map(toLinear) as RGB;
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function oklabToRgb([L, A, B]: RGB): RGB {
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  return [
    fromLinear(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    fromLinear(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    fromLinear(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ];
}

export function mix(a: string, b: string, t: number): string {
  const la = rgbToOklab(hexToRgb(a));
  const lb = rgbToOklab(hexToRgb(b));
  return rgbToHex(oklabToRgb([la[0] + (lb[0] - la[0]) * t, la[1] + (lb[1] - la[1]) * t, la[2] + (lb[2] - la[2]) * t]));
}

/** Lightens a color until it reaches `min` contrast on the page ground. */
/**
 * Dunkelt eine Farbe ab, bis sie auf dem hellen Grund des Light-Modes lesbar ist.
 * Ziel 5 statt 4,5: Akzenttext steht oft auf akzentgetönten Flächen (--accent-soft),
 * die dunkler sind als der Grund. Mit 4,5 kam „+23 %“ in der Schrittliste auf 4,44.
 */
export function dropForLight(hex: string, min = 5): string {
  let out = hex;
  for (let t = 0.08; contrast(out, LIGHT_BG) < min && t <= 1; t += 0.08) out = mix(hex, '#000000', t);
  return out;
}

export function liftForDark(hex: string, min = 4.5): string {
  let out = hex;
  for (let t = 0.08; contrast(out, BG) < min && t <= 1; t += 0.08) out = mix(hex, '#ffffff', t);
  return out;
}

/** Dark or light text, whichever reads better on the fill. */
export const inkOn = (fill: string): string => (contrast(fill, INK) >= contrast(fill, '#ffffff') ? INK : '#ffffff');

/**
 * Fläche für Text auf der Akzentfarbe (primärer Knopf, Tab-Zähler, aktiver Schritt).
 * Bei den meisten Fightern ist das die Farbe selbst. Fünf mittlere Töne (Kazuya,
 * Richter, Roy, Diddy Kong, Piranha-Pflanze) erreichen aber weder mit Schwarz noch
 * mit Weiß 4,5:1. Dann wandert die Fläche in kleinen Schritten zu Schwarz (weiße
 * Schrift) oder zu Weiß (dunkle Schrift), je nachdem, was weniger Veränderung braucht.
 */
export function accentFill(hex: string, min = 4.5): { fill: string; ink: string } {
  const ink = inkOn(hex);
  if (contrast(hex, ink) >= min) return { fill: hex, ink };
  for (let t = 0.02; t <= 1; t += 0.02) {
    const darker = mix(hex, '#000000', t);
    if (contrast(darker, '#ffffff') >= min) return { fill: darker, ink: '#ffffff' };
    const lighter = mix(hex, '#ffffff', t);
    if (contrast(lighter, INK) >= min) return { fill: lighter, ink: INK };
  }
  return { fill: hex, ink };
}

/** In-game damage heat: white at 0 %, yellow, orange, red, deep red past 180 %. */
const RAMP: Array<[number, string]> = [
  [0, '#f5f6f8'],
  [35, '#ffe66b'],
  [70, '#ffb23a'],
  [105, '#ff6a2b'],
  [145, '#ec2a3b'],
  [190, '#b0122f'],
];

export function heatColor(percent: number): string {
  const p = Math.max(0, percent);
  for (let i = 1; i < RAMP.length; i++) {
    const [p1, c1] = RAMP[i]!;
    const [p0, c0] = RAMP[i - 1]!;
    if (p <= p1) return mix(c0, c1, (p - p0) / (p1 - p0));
  }
  return RAMP[RAMP.length - 1]![1];
}

/** Inline custom properties that theme any subtree to a fighter. */
export function accentVars([primary, secondary]: readonly [string, string]): string {
  const { fill, ink } = accentFill(primary);
  return [
    `--accent:${primary}`,
    `--accent-2:${secondary}`,
    // Zwei Lesarten statt --accent-text direkt: Ein Inline-Style ließe sich vom Light-Mode nicht mehr überschreiben.
    `--accent-text-dark:${liftForDark(primary)}`,
    `--accent-text-light:${dropForLight(primary)}`,
    `--accent-fill:${fill}`,
    `--accent-ink:${ink}`,
  ].join(';');
}
