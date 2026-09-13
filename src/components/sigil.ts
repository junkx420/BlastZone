import type { Fighter } from '../data/types';
import { html, raw, type Markup } from '../lib/dom';

/**
 * Generated fighter artwork: a KO-spark burst, a franchise motif and the
 * fighter number, seeded by slug so every fighter always gets the same poster.
 * Drop a licensed render into `Fighter.art` to layer it on top.
 */

type Motif = 'rays' | 'rings' | 'orbit' | 'tri' | 'hex' | 'pixel' | 'slash' | 'star' | 'chevron' | 'wave' | 'bolt' | 'grid';

const SERIES_MOTIF: Record<string, Motif> = {
  'Super Mario': 'rings',
  'Donkey Kong': 'wave',
  'The Legend of Zelda': 'tri',
  Metroid: 'hex',
  Yoshi: 'orbit',
  Kirby: 'star',
  'Star Fox': 'chevron',
  Pokémon: 'orbit',
  EarthBound: 'wave',
  'F-Zero': 'chevron',
  'Ice Climber': 'tri',
  'Fire Emblem': 'slash',
  'Game & Watch': 'grid',
  'Kid Icarus': 'rays',
  Wario: 'bolt',
  'Metal Gear': 'grid',
  'Sonic the Hedgehog': 'chevron',
  Pikmin: 'orbit',
  'R.O.B.': 'pixel',
  'Animal Crossing': 'orbit',
  'Mega Man': 'pixel',
  'Wii Fit': 'rings',
  'Punch-Out!!': 'rays',
  Mii: 'grid',
  'Pac-Man': 'pixel',
  'Xenoblade Chronicles': 'hex',
  'Duck Hunt': 'pixel',
  'Street Fighter': 'rays',
  'Final Fantasy': 'slash',
  Bayonetta: 'star',
  Splatoon: 'wave',
  Castlevania: 'slash',
  Persona: 'tri',
  'Dragon Quest': 'slash',
  'Banjo-Kazooie': 'wave',
  'Fatal Fury': 'rays',
  ARMS: 'rings',
  Minecraft: 'pixel',
  Tekken: 'bolt',
  'Kingdom Hearts': 'star',
};

/*
 * Exported because the page backdrop seeds itself from the same sequence. One
 * fighter should have one handwriting across every generated surface, and two
 * generators side by side would be two truths.
 */
export function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function random(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const n = (v: number): string => v.toFixed(1);

function hexPath(x: number, y: number, r: number): string {
  let d = '';
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i + Math.PI / 6;
    d += `${i ? 'L' : 'M'}${n(x + Math.cos(a) * r)} ${n(y + Math.sin(a) * r)}`;
  }
  return d + 'Z';
}

function starPath(x: number, y: number, r: number): string {
  let d = '';
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.38 : r;
    d += `${i ? 'L' : 'M'}${n(x + Math.cos(a) * rr)} ${n(y + Math.sin(a) * rr)}`;
  }
  return d + 'Z';
}

function motif(kind: Motif, rnd: () => number, color: string, cx: number, cy: number): string {
  const stroke = `fill="none" stroke="${color}" vector-effect="non-scaling-stroke"`;
  switch (kind) {
    case 'rings':
      return [0, 1, 2, 3]
        .map((i) => `<circle cx="${n(cx)}" cy="${n(cy)}" r="${70 + i * 48}" ${stroke} stroke-opacity="${(0.55 - i * 0.12).toFixed(2)}" stroke-width="2"/>`)
        .join('');
    case 'orbit': {
      const R = 120 + rnd() * 40;
      const dots = Array.from({ length: 5 }, () => {
        const a = rnd() * Math.PI * 2;
        return `<circle cx="${n(cx + Math.cos(a) * R)}" cy="${n(cy + Math.sin(a) * R * 0.42)}" r="${n(5 + rnd() * 9)}" fill="${color}" fill-opacity=".75"/>`;
      }).join('');
      return `<g transform="rotate(-16 ${n(cx)} ${n(cy)})"><ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(R)}" ry="${n(R * 0.42)}" ${stroke} stroke-opacity=".5" stroke-width="2"/>${dots}</g>`;
    }
    case 'tri':
      return Array.from({ length: 6 }, () => {
        const x = rnd() * 400;
        const y = rnd() * 400;
        const z = 18 + rnd() * 56;
        return `<path d="M0 ${n(-z)}L${n(z * 0.87)} ${n(z * 0.5)}L${n(-z * 0.87)} ${n(z * 0.5)}Z" transform="translate(${n(x)} ${n(y)}) rotate(${Math.round(rnd() * 360)})" ${stroke} stroke-opacity="${(0.3 + rnd() * 0.4).toFixed(2)}" stroke-width="2"/>`;
      }).join('');
    case 'hex': {
      let out = '';
      const size = 26;
      for (let row = 0; row < 6; row++)
        for (let col = 0; col < 5; col++) {
          if (rnd() < 0.45) continue;
          const x = 34 + col * size * 1.74 + (row % 2) * size * 0.87;
          const y = 36 + row * size * 1.5;
          out += `<path d="${hexPath(x, y, size * 0.92)}" ${stroke} stroke-opacity="${(0.2 + rnd() * 0.4).toFixed(2)}" stroke-width="1.5"/>`;
        }
      return out;
    }
    case 'pixel': {
      let out = '';
      const p = 22;
      for (let row = 0; row < 8; row++)
        for (let col = 0; col < 6; col++) {
          if (rnd() < 0.55) continue;
          out += `<rect x="${250 + col * p - row * 5}" y="${28 + row * p}" width="${p - 3}" height="${p - 3}" fill="${color}" fill-opacity="${(0.14 + rnd() * 0.45).toFixed(2)}"/>`;
        }
      return out;
    }
    case 'slash':
      return [0, 1, 2]
        .map((i) => `<rect x="-120" y="${150 + i * 56}" width="720" height="${22 - i * 6}" fill="${color}" fill-opacity="${(0.5 - i * 0.14).toFixed(2)}" transform="rotate(-28 200 250)"/>`)
        .join('');
    case 'star':
      return Array.from({ length: 4 }, () => `<path d="${starPath(40 + rnd() * 320, 30 + rnd() * 280, 10 + rnd() * 32)}" fill="${color}" fill-opacity="${(0.35 + rnd() * 0.45).toFixed(2)}"/>`).join('');
    case 'chevron':
      return Array.from({ length: 5 }, (_, i) => `<path d="M${54 + i * 46} 110l42 62-42 62" ${stroke} stroke-opacity="${(0.14 + i * 0.13).toFixed(2)}" stroke-width="12" stroke-linecap="square"/>`).join('');
    case 'wave':
      return Array.from({ length: 4 }, (_, i) => {
        const y0 = 90 + i * 38;
        let d = `M-10 ${y0}`;
        for (let x = 10; x <= 410; x += 20) d += `L${x} ${n(y0 + Math.sin((x / 400) * Math.PI * 3 + i) * 14)}`;
        return `<path d="${d}" ${stroke} stroke-opacity="${(0.5 - i * 0.09).toFixed(2)}" stroke-width="3"/>`;
      }).join('');
    case 'bolt':
      return [0, 1]
        .map((i) => {
          const x0 = 110 + i * 170 + rnd() * 30;
          return `<path d="M${n(x0)} 20l-40 110h36l-46 130 100-150h-38l40-90z" fill="${color}" fill-opacity="${(0.42 - i * 0.16).toFixed(2)}"/>`;
        })
        .join('');
    case 'grid': {
      let out = '';
      for (let i = 0; i <= 10; i++) {
        const x = i * 40;
        out += `<line x1="${x}" y1="500" x2="${n(200 + (x - 200) * 0.2)}" y2="250" ${stroke} stroke-opacity=".28" stroke-width="1.5"/>`;
      }
      for (let j = 0; j < 6; j++) {
        const y = 500 - j * j * 8 - j * 10;
        out += `<line x1="0" y1="${y}" x2="400" y2="${y}" ${stroke} stroke-opacity="${(0.32 - j * 0.04).toFixed(2)}" stroke-width="1.5"/>`;
      }
      return out;
    }
    default:
      return '';
  }
}

let uid = 0;

export function sigil(fighter: Fighter, variant: 'tile' | 'hero' = 'tile'): Markup {
  const rnd = random(hash(fighter.slug));
  const id = `sg${++uid}`;
  const [c1, c2] = fighter.colors;
  const cx = 200 + (rnd() - 0.5) * 90;
  const cy = 200 + (rnd() - 0.5) * 70;

  const rayCount = 14 + Math.floor(rnd() * 8);
  let rays = '';
  for (let i = 0; i < rayCount; i++) {
    const a = (i / rayCount) * Math.PI * 2 + rnd() * 0.25;
    const w = 0.025 + rnd() * 0.06;
    const R = 760;
    rays += `<path d="M${n(cx)} ${n(cy)}L${n(cx + Math.cos(a - w) * R)} ${n(cy + Math.sin(a - w) * R)}L${n(cx + Math.cos(a + w) * R)} ${n(cy + Math.sin(a + w) * R)}Z" fill="${i % 2 ? c2 : c1}" fill-opacity="${(0.07 + rnd() * 0.17).toFixed(2)}"/>`;
  }

  const kind = SERIES_MOTIF[fighter.series] ?? 'rays';
  const numberSize = fighter.no.length <= 2 ? 300 : fighter.no.length === 3 ? 238 : 150;

  return html`<svg class="sigil sigil--${variant}" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="${id}-bg" cx="${(cx / 400).toFixed(3)}" cy="${(cy / 500).toFixed(3)}" r="0.95">
        <stop offset="0" stop-color="${c1}" stop-opacity=".95" />
        <stop offset=".42" stop-color="${c1}" stop-opacity=".32" />
        <stop offset="1" stop-color="#06070a" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="${id}-core" cx="${(cx / 400).toFixed(3)}" cy="${(cy / 500).toFixed(3)}" r="0.22">
        <stop offset="0" stop-color="#fff" stop-opacity=".55" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="${id}-no" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0" stop-color="${c2}" />
        <stop offset="1" stop-color="${c1}" />
      </linearGradient>
      <linearGradient id="${id}-shade" x1="0" y1="0" x2="0" y2="1">
        <stop offset=".45" stop-color="#06070a" stop-opacity="0" />
        <stop offset="1" stop-color="#06070a" stop-opacity=".92" />
      </linearGradient>
    </defs>
    <rect width="400" height="500" fill="#0b0d12" />
    <rect width="400" height="500" fill="url(#${id}-bg)" />
    <g class="sigil__rays" style="transform-origin:${n(cx)}px ${n(cy)}px">${raw(rays)}</g>
    <rect class="sigil__core" width="400" height="500" fill="url(#${id}-core)" />
    <g class="sigil__motif">${raw(motif(kind, rnd, c2, cx, cy))}</g>
    <text class="sigil__no" x="408" y="486" text-anchor="end" font-size="${numberSize}" fill="url(#${id}-no)">${fighter.no}</text>
    <rect class="sigil__shade" width="400" height="500" fill="url(#${id}-shade)" />
  </svg>`;
}
