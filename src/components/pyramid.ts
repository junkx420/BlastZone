import { ARCHETYPE_INFO, ARCHETYPE_ORDER, ERGAENZT, POLES } from '../data/archetypes';
import { faceArt } from '../data/art';
import { FIGHTERS } from '../data/fighters';
import type { Archetype, Fighter } from '../data/types';
import { mix } from '../lib/color';
import { html, type Markup } from '../lib/dom';
import { link } from '../lib/router';

/*
 * Geometrie in Einheiten der viewBox. Die Pyramide ist 4 Felder breit, jedes
 * Feld ein gleichseitiges Dreieck mit Seitenlänge S. Die Ränder oben und unten
 * tragen die Namen der drei Ecken.
 */
const W = 1000;
const S = 225;
const H = (S * Math.sqrt(3)) / 2;
const TOP = 76;
const LEFT = (W - 4 * S) / 2;
const BASE = TOP + 4 * H;
const VIEW_H = Math.ceil(BASE + 70);

/** Abstand zwischen den Feldern, als Einzug jeder Kante. */
const FUGE = 5;
/** Höhe des Namensstreifens an der breiten Seite eines Felds. */
const BAND = 36;

type Pt = readonly [number, number];

interface Cell {
  typ: Archetype;
  up: boolean;
  pts: [Pt, Pt, Pt];
  top: number;
  bottom: number;
  /** Waagerechte Mitte, auf der die Spitze und die Beschriftung liegen. */
  mid: number;
  color: string;
}

/**
 * Farbe eines Felds aus seiner Lage: Jede Ecke trägt ihre Farbe bei, gewichtet
 * mit der Nähe des Schwerpunkts. Die Pyramide ist ein Dreiecksdiagramm, die
 * Farbe sagt dasselbe wie die Position.
 */
function poleColor([x, y]: Pt): string {
  const v = (y - TOP) / (4 * H);
  const u = (x - LEFT) / (4 * S);
  const rush = 1 - v;
  const bait = Math.max(0, u - 0.5 * (1 - v));
  const zoner = Math.max(0, 1 - rush - bait);
  const lower = zoner + bait;
  const unten = lower > 0 ? mix(POLES.zoner.color, POLES.bait.color, bait / lower) : POLES.zoner.color;
  return mix(POLES.rushdown.color, unten, lower);
}

function geometry(typ: Archetype, size = S, top = TOP, left = LEFT): Cell {
  const { row, cell } = ARCHETYPE_INFO[typ];
  const h = (size * Math.sqrt(3)) / 2;
  const x0 = left + 2 * size - ((row + 1) * size) / 2;
  const yt = top + row * h;
  const yb = yt + h;
  const k = Math.floor(cell / 2);
  const up = cell % 2 === 0;
  const pts: [Pt, Pt, Pt] = up
    ? [
        [x0 + k * size, yb],
        [x0 + (k + 1) * size, yb],
        [x0 + k * size + size / 2, yt],
      ]
    : [
        [x0 + k * size + size / 2, yt],
        [x0 + (k + 1) * size + size / 2, yt],
        [x0 + (k + 1) * size, yb],
      ];
  const cx = (pts[0][0] + pts[1][0] + pts[2][0]) / 3;
  const cy = (pts[0][1] + pts[1][1] + pts[2][1]) / 3;
  return { typ, up, pts, top: yt, bottom: yb, mid: cx, color: poleColor([cx, cy]) };
}

/** Zieht das Dreieck um `fuge` Einheiten pro Kante zum Schwerpunkt hin. */
function inset(pts: readonly Pt[], fuge: number, size: number): string {
  const cx = (pts[0]![0] + pts[1]![0] + pts[2]![0]) / 3;
  const cy = (pts[0]![1] + pts[1]![1] + pts[2]![1]) / 3;
  const inradius = (size * Math.sqrt(3)) / 6;
  const f = 1 - fuge / inradius;
  return pts.map(([x, y]) => `${(cx + (x - cx) * f).toFixed(1)},${(cy + (y - cy) * f).toFixed(1)}`).join(' ');
}

export const membersOf = (typ: Archetype): Fighter[] => FIGHTERS.filter((f) => f.archetype === typ).sort((a, b) => a.order - b.order);

/**
 * Plätze für n Gesichter in einem Feld, Durchmesser d. Reihen laufen von der
 * breiten Seite zur Spitze, jede Reihe so voll, wie ihre Breite erlaubt, und
 * die Belegung wird nach Breite verteilt, damit das Feld pyramidenförmig
 * gefüllt aussieht statt als Strich über dem Namen. Wenige Gesichter rücken
 * danach Richtung Feldmitte, solange die Reihen dort noch breit genug sind.
 * Null, wenn nicht genug Platz.
 */
function faceSlots(c: Cell, n: number, d: number): Pt[] | null {
  const r = d / 2;
  const pitch = d * 1.1;
  // Ganz innen läge der Kreis bei r / sin(60°) Abstand zur Schräge, waagerecht
  // gemessen. Etwas weniger lässt ihn in die Fuge ragen, aber nie ins Nachbarfeld.
  const schraege = r * 1.05;
  const rowsFrom = (shift: number): Array<{ y: number; cap: number }> => {
    const rows: Array<{ y: number; cap: number }> = [];
    for (let i = 0; ; i++) {
      const y = c.up ? c.bottom - BAND - r - shift - i * pitch : c.top + BAND + r + shift + i * pitch;
      const depth = c.up ? y - c.top : c.bottom - y;
      const half = (depth / H) * (S / 2) - schraege;
      if (half < 0) break;
      rows.push({ y, cap: Math.floor((2 * half) / pitch) + 1 });
    }
    return rows;
  };
  const fits = (rows: Array<{ cap: number }>): boolean => rows.reduce((s, x) => s + x.cap, 0) >= n;

  const all = rowsFrom(0);
  let m = 0;
  for (let total = 0; m < all.length && total < n; m++) total += all[m]!.cap;
  let used = all.slice(0, m);
  if (!fits(used)) return null;
  for (let shift = ((all.length - m) * pitch) / 2; shift > 0; shift -= pitch / 4) {
    const moved = rowsFrom(shift).slice(0, m);
    if (moved.length === m && fits(moved)) {
      used = moved;
      break;
    }
  }

  const counts = used.map(() => 0);
  for (let i = 0; i < n; i++) {
    let best = -1;
    used.forEach((row, j) => {
      if (counts[j]! >= row.cap) return;
      if (best < 0 || counts[j]! / row.cap < counts[best]! / used[best]!.cap) best = j;
    });
    counts[best]!++;
  }
  // Die schmale Reihe zuerst, damit die Reihenfolge von oben nach unten liest.
  const order = c.up ? [...used.keys()].reverse() : [...used.keys()];
  return order.flatMap((j) => {
    const k = counts[j]!;
    return Array.from({ length: k }, (_, i): Pt => [c.mid + (i - (k - 1) / 2) * pitch, used[j]!.y]);
  });
}

/** Größter gemeinsamer Durchmesser, bei dem alle 16 Felder passen. */
function layout(cells: Cell[]): { d: number; slots: Map<Archetype, Pt[]> } {
  for (let d = 48; d >= 20; d--) {
    const slots = new Map<Archetype, Pt[]>();
    const ok = cells.every((c) => {
      const s = faceSlots(c, membersOf(c.typ).length, d);
      if (s) slots.set(c.typ, s);
      return s !== null;
    });
    if (ok) return { d, slots };
  }
  throw new Error('Pyramide: Gesichter passen nicht in die Felder');
}

/** Zweizeilige Beschriftung für schmale Bildschirme, lange Namen umbrechen. */
function narrowLines(label: string): string[] {
  const words = label.split(' ');
  if (words.length < 2 || label.length <= 9) return [label];
  return [words.slice(0, -1).join(' '), words[words.length - 1]!];
}

function cellLabels(c: Cell, label: string): Markup {
  const wideY = c.up ? c.bottom - 15 : c.top + 31;
  const lines = narrowLines(label);
  const step = 38;
  const firstY = c.up ? c.bottom - 0.16 * H - (lines.length - 1) * step : c.top + 0.28 * H;
  return html`<text class="pyr__label pyr__label--wide" x="${c.mid.toFixed(1)}" y="${wideY.toFixed(1)}">${label}</text>
    <text class="pyr__label pyr__label--narrow" x="${c.mid.toFixed(1)}" y="${firstY.toFixed(1)}">${lines.map(
      (line, i) => html`<tspan x="${c.mid.toFixed(1)}" dy="${i ? step : 0}">${line}</tspan>`,
    )}</text>`;
}

export interface PyramidOptions {
  active?: Archetype | null;
  /** Hebt einen Fighter hervor, wenn man aus seinem Profil kommt. */
  me?: string | null;
}

export function pyramidGraphic({ active, me }: PyramidOptions = {}): Markup {
  const cells = ARCHETYPE_ORDER.map((typ) => geometry(typ));
  const { d, slots } = layout(cells);
  const r = d / 2;
  const pole = (x: number, y: number, color: string): Markup =>
    html`<circle class="pyr__pole" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="${color}" />`;

  return html`<svg class="pyr" viewBox="0 0 ${W} ${VIEW_H}" role="group" aria-label="Archetypen-Pyramide mit 16 Feldern">
    <defs>
      <clipPath id="pyr-rund" clipPathUnits="objectBoundingBox"><circle cx="0.5" cy="0.5" r="0.5" /></clipPath>
    </defs>
    <g class="pyr__poles">
      ${pole(W / 2, TOP, POLES.rushdown.color)}
      ${pole(LEFT, BASE, POLES.zoner.color)}
      ${pole(LEFT + 4 * S, BASE, POLES.bait.color)}
      <text class="pyr__corner" x="${W / 2}" y="${TOP - 26}" text-anchor="middle">${POLES.rushdown.label}</text>
      <text class="pyr__corner" x="${LEFT - 12}" y="${(BASE + 50).toFixed(1)}" text-anchor="start">${POLES.zoner.label}</text>
      <text class="pyr__corner" x="${LEFT + 4 * S + 12}" y="${(BASE + 50).toFixed(1)}" text-anchor="end">${POLES.bait.label}</text>
    </g>
    ${cells.map((c) => {
      const info = ARCHETYPE_INFO[c.typ];
      const members = membersOf(c.typ);
      return html`<g class="pyr__cell${c.typ === active ? ' is-active' : ''}" data-cell="${c.typ}" style="--typ:${c.color};--typ-ink:${mix(c.color, '#ffffff', 0.62)}">
        <a class="pyr__area" href="${link('/archetypen', { typ: c.typ })}" data-cell-link="${c.typ}" aria-label="${info.label}, ${members.length} Fighter">
          <polygon class="pyr__tri" points="${inset(c.pts, FUGE, S)}" />
          ${cellLabels(c, info.label)}
        </a>
        <g class="pyr__faces">
          ${members.map((f, i) => {
            const [x, y] = slots.get(c.typ)![i]!;
            const cls = `pyr__face${ERGAENZT.has(f.slug) ? ' is-added' : ''}${f.slug === me ? ' is-me' : ''}`;
            return html`<a class="${cls}" href="${link(`/fighter/${f.slug}`)}" aria-label="${f.name}" style="--face-x:${x.toFixed(1)}px;--face-y:${y.toFixed(1)}px">
              <title>${f.name}</title>
              <circle class="pyr__ring" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r + 2.5).toFixed(1)}" />
              <image href="${faceArt(f)}" x="${(x - r).toFixed(1)}" y="${(y - r).toFixed(1)}" width="${d}" height="${d}" preserveAspectRatio="xMidYMid slice" clip-path="url(#pyr-rund)" />
            </a>`;
          })}
        </g>
      </g>`;
    })}
  </svg>`;
}

/** Kleine Pyramide ohne Beschriftung, die nur das eigene Feld füllt. */
export function miniPyramid(typ: Archetype, className: string): Markup {
  const size = 50;
  const h = (size * Math.sqrt(3)) / 2;
  return html`<svg class="${className}" viewBox="-2 -2 ${4 * size + 4} ${(4 * h + 4).toFixed(1)}" aria-hidden="true">
    ${ARCHETYPE_ORDER.map((t) => {
      const c = geometry(t, size, 0, 0);
      const on = t === typ;
      return html`<polygon points="${inset(c.pts, 2.5, size)}" fill="${on ? geometry(t).color : 'currentColor'}" fill-opacity="${on ? 1 : 0.16}" />`;
    })}
  </svg>`;
}

/** Farbe eines Felds für Karten und Tags außerhalb der großen Grafik. */
export const archetypeColor = (typ: Archetype): string => geometry(typ).color;
