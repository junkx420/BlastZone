import type { FrameMove, FrameSet } from './frame-types';

/**
 * Kennzahlen für den Matchup-Vergleich, gerechnet aus den Frame-Daten.
 *
 * Hier entsteht keine neue Wahrheit: Jede Zahl steht so bei Ultimate Frame Data
 * und wird nur ausgewählt und gegenübergestellt. Wer sagt, wer das Matchup
 * gewinnt, ist die Community – dieses Modul sagt nur, wer im Nahkampf zuerst
 * trifft, wer aus dem Schild schneller antwortet und wer am Schild weniger
 * bestraft wird.
 */

/**
 * Sprungansatz, in Ultimate für jeden Fighter drei Frames. Deshalb kostet ein
 * Aerial aus dem Schild immer drei Frames mehr als sein eigener Startup,
 * während Grab und Up B direkt aus dem Schild starten.
 */
export const SPRUNGANSATZ = 3;

/**
 * Alle Zahlen eines UFD-Werts. `16/17—20/21` sind vier, `-12/-13` sind zwei.
 *
 * Klammern fliegen vorher raus: Dort steht bei UFD die Bedingung, nicht der
 * Wert. `4 (Gold: 3)` ist Steves Nair mit vier Frames, die drei gelten nur mit
 * Goldwerkzeug; `2 (+19)` ist Marios F.L.U.D.D. mit zwei Frames.
 */
function zahlen(wert: string | undefined): number[] {
  if (!wert) return [];
  const ohneKlammern = wert.replace(/\([^)]*\)/g, ' ');
  return (ohneKlammern.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number).filter((n) => Number.isFinite(n));
}

/**
 * Frühester Frame eines Werts. UFD führt für Mehrfach-Hitboxen mehrere Zahlen
 * nebeneinander (`16/17—20/21`), gemeint ist dann der erste aktive Frame.
 * Null und negative Werte kommen in Startup-Spalten nicht vor und werden
 * verworfen, damit Anmerkungen wie `2 (+19)` nicht stören.
 */
export function frueheste(wert: string | undefined): number | null {
  // Summen wie `5+15` (Kazuyas Dragon Uppercut) oder `16-30 + 4` (Mii-Brawler)
  // lassen sich nicht eindeutig lesen: Die erste Zahl ist nicht der erste aktive
  // Frame. Vier Moves im ganzen Datensatz sind so notiert, die bleiben draußen.
  // Klammerzusätze wie `2 (+19)` sind davon nicht betroffen.
  if (/\d\s*\+\s*\d/.test((wert ?? '').replace(/\([^)]*\)/g, ''))) return null;
  const positive = zahlen(wert).filter((n) => n > 0);
  return positive.length ? Math.min(...positive) : null;
}

/**
 * Bester Wert am Schild. Negativ heißt: Der Gegner darf zuerst handeln, also
 * ist die größte Zahl die sicherste. Bei `-12/-12/-13` zählt die Hitbox, die am
 * wenigsten bestraft wird.
 */
export function beste(wert: string | undefined): number | null {
  const alle = zahlen(wert);
  return alle.length ? Math.max(...alle) : null;
}

export interface Kennzahl {
  /** Frames, bei `schild` der Vorteil in Frames. */
  wert: number;
  /** Move, aus dem der Wert stammt, in UFD-Schreibweise. */
  move: string;
}

export interface SetProfil {
  /** Nur bei Fightern mit mehreren Sätzen gesetzt (Pokémon-Trainer, Pyra/Mythra). */
  label?: string;
  /** Schnellster Bodenangriff ohne Grabs. */
  boden: Kennzahl | null;
  /** Schnellster Aerial. */
  aerial: Kennzahl | null;
  /** Landing Lag genau dieses Aerials. */
  landing: Kennzahl | null;
  /** Schnellste Antwort aus dem Schild: Grab, Up B oder Aerial plus Sprungansatz. */
  oos: Kennzahl | null;
  /** Bodenangriff mit dem besten Wert am Schild. */
  schild: Kennzahl | null;
}

const istGrab = (m: FrameMove): boolean => /grab/i.test(m.name);

/**
 * Bodenangriffe. Normalerweise steht das in der Sektion `ground`, nur bei
 * Kazuya nicht: Ultimate Frame Data führt sein ganzes Kit als Kommandoliste,
 * das Skript legt sie deshalb unter `misc` ab. Dort stehen sonst ausschließlich
 * Getup Attacks, Ledge Grab und Ledge Hang – die gehören nicht in den Vergleich,
 * ein Taunt (Kazuyas Demon's Wrath) ebenso wenig.
 */
const istBodenangriff = (m: FrameMove): boolean =>
  (m.section === 'ground' || m.section === 'misc') && !istGrab(m) && !/getup|ledge|taunt/i.test(m.name) && !istFolgeMove(m.name);

/**
 * Folgeschläge einer Reihe: Jab 2 bis Jab 10, Rapid Jab, Forward Tilt 2 und so
 * weiter. Ihr Startup zählt ab dem vorherigen Treffer, aus dem Stand kommt man
 * damit nicht an. Ohne diese Regel stand bei Pit „Jab 3, 3 Frames“ als
 * schnellster Bodenangriff, obwohl sein Jab 1 vier Frames braucht.
 *
 * Die Prüfung auf eine freistehende Zahl ab 2 reicht: Im ganzen Datensatz trägt
 * kein eigenständiger Bodenangriff eine Zahl im Namen.
 */
const istFolgeMove = (name: string): boolean => /\b(?:[2-9]|10)\b/.test(name) || /rapid|final hit|>/i.test(name);

/** Kleinster Startup einer Auswahl, samt Move. */
function schnellster(moves: FrameMove[]): Kennzahl | null {
  let treffer: Kennzahl | null = null;
  for (const m of moves) {
    const wert = frueheste(m.startup);
    if (wert === null) continue;
    if (!treffer || wert < treffer.wert) treffer = { wert, move: m.name };
  }
  return treffer;
}

/** Out of Shield: Grab und Up B starten sofort, ein Aerial kostet den Sprungansatz. */
function ausDemSchild(moves: FrameMove[]): Kennzahl | null {
  const kandidaten: Kennzahl[] = [];

  const grab = moves.find((m) => m.section === 'throw' && m.name === 'Grab');
  const grabWert = frueheste(grab?.startup);
  if (grab && grabWert !== null) kandidaten.push({ wert: grabWert, move: grab.name });

  const upB = moves.find((m) => m.section === 'special' && /^Up B\b/.test(m.name));
  const upBWert = frueheste(upB?.startup);
  if (upB && upBWert !== null) kandidaten.push({ wert: upBWert, move: upB.name });

  const aerial = schnellster(moves.filter((m) => m.section === 'aerial'));
  if (aerial) kandidaten.push({ wert: aerial.wert + SPRUNGANSATZ, move: aerial.move });

  if (!kandidaten.length) return null;
  return kandidaten.reduce((a, b) => (b.wert < a.wert ? b : a));
}

/** Bodenangriff mit dem besten Wert am Schild. */
function amSchild(moves: FrameMove[]): Kennzahl | null {
  let treffer: Kennzahl | null = null;
  for (const m of moves) {
    if (!istBodenangriff(m)) continue;
    const wert = beste(m.advantage);
    if (wert === null) continue;
    if (!treffer || wert > treffer.wert) treffer = { wert, move: m.name };
  }
  return treffer;
}

/** Kennzahlen eines Move-Satzes. */
export function setProfil(satz: FrameSet): SetProfil {
  const boden = schnellster(satz.moves.filter(istBodenangriff));
  const aerialMove = schnellster(satz.moves.filter((m) => m.section === 'aerial'));
  const landingQuelle = aerialMove ? satz.moves.find((m) => m.section === 'aerial' && m.name === aerialMove.move) : undefined;
  const landingWert = frueheste(landingQuelle?.landingLag);

  return {
    label: satz.label,
    boden,
    aerial: aerialMove,
    landing: landingWert === null || !aerialMove ? null : { wert: landingWert, move: aerialMove.move },
    oos: ausDemSchild(satz.moves),
    schild: amSchild(satz.moves),
  };
}

/** Die Zeilen des Vergleichs. `besserGross` heißt: je größer, desto besser. */
export const ZEILEN = [
  { id: 'boden', besserGross: false },
  { id: 'aerial', besserGross: false },
  { id: 'oos', besserGross: false },
  { id: 'schild', besserGross: true },
  { id: 'landing', besserGross: false },
] as const;

export type ZeilenId = (typeof ZEILEN)[number]['id'];

/**
 * Wer steht in dieser Zeile besser da? `null` heißt gleichauf oder nicht
 * vergleichbar, weil einer Seite der Wert fehlt.
 */
export function vorteil(a: Kennzahl | null, b: Kennzahl | null, besserGross: boolean): 'a' | 'b' | null {
  if (!a || !b || a.wert === b.wert) return null;
  const aBesser = besserGross ? a.wert > b.wert : a.wert < b.wert;
  return aBesser ? 'a' : 'b';
}
