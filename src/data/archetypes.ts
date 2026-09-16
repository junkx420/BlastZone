import { tr } from '../i18n';
import type { Archetype } from './types';

/**
 * Archetypen-Pyramide mit 16 Feldern.
 *
 * Grundlage ist die schwarz-weiße Pyramide aus der Vorlage des Nutzers
 * (Samsung-Notes-Datei „Archetypes“, Januar 2026). Die drei Ecken sind die
 * reinen Spielstile, jedes Feld dazwischen ist eine Mischung daraus: je näher
 * an einer Ecke, desto mehr davon. Vier Reihen mit 1, 3, 5 und 7 Dreiecken,
 * abwechselnd mit der Spitze nach oben und nach unten.
 *
 * `row` zählt von oben ab 0, `cell` innerhalb der Reihe von links ab 0. Gerade
 * Zellen zeigen nach oben, ungerade nach unten.
 */

/** Die acht Hintergrundmuster aus `fighter.css`. */
export type Muster = 'rushdown' | 'zoner' | 'swordie' | 'allrounder' | 'setplay' | 'grappler' | 'bruiser' | 'bait';

export interface ArchetypeInfo {
  label: string;
  /** Eine Zeile für die Stat-Karte im Profil. */
  hint: string;
  /** Zwei Sätze für die Pyramiden-Seite. */
  text: string;
  row: 0 | 1 | 2 | 3;
  cell: number;
  muster: Muster;
}

export const ARCHETYPE_INFO: Record<Archetype, ArchetypeInfo> = {
  'pure-rushdown': {
    label: 'Pure Rushdown',
    hint: tr({ de: 'Pures Tempo, lässt den Gegner nie atmen', en: 'Pure speed, never lets the opponent breathe' }),
    text: tr({ de: 'Die Spitze der Pyramide. Schnellste Frames, beste Mobilität und ein Spielplan, der fast nur aus Druck besteht.', en: 'The top of the pyramid. Fastest frames, best mobility and a game plan made almost entirely of pressure.' }),
    row: 0,
    cell: 0,
    muster: 'rushdown',
  },
  mixup: {
    label: 'Mix-up',
    hint: tr({ de: 'Hat mehr Optionen, als man abdecken kann', en: 'Has more options than anyone can cover' }),
    text: tr({ de: 'Nah am Rushdown, aber mit Werkzeugen für die Distanz. Gewinnt, weil der Gegner nie alle Optionen gleichzeitig abdecken kann.', en: 'Close to rushdown, but with tools for range. Wins because the opponent can never cover every option at once.' }),
    row: 1,
    cell: 0,
    muster: 'bait',
  },
  'zone-breaker': {
    label: 'Zone Breaker',
    hint: tr({ de: 'Kommt durch jede Projektilwand', en: 'Gets through any projectile wall' }),
    text: tr({ de: 'Klein, schnell oder mit eigenen Projektilen. Genau die Fighter, gegen die Zoner am wenigsten Spaß haben.', en: 'Small, fast or armed with projectiles of their own. Exactly the fighters zoners least enjoy facing.' }),
    row: 1,
    cell: 1,
    muster: 'rushdown',
  },
  footsies: {
    label: 'Footsies',
    hint: tr({ de: 'Gewinnt den Kampf um den halben Schritt', en: 'Wins the fight over half a step' }),
    text: tr({ de: 'Bodenspiel an der Grenze der eigenen Reichweite. Walk, Dash Dance und Whiff Punishes entscheiden, wer den ersten Treffer landet.', en: 'Ground play at the edge of their own range. Walking, dash dancing and whiff punishes decide who lands the first hit.' }),
    row: 1,
    cell: 2,
    muster: 'bruiser',
  },
  spacing: {
    label: 'Spacing',
    hint: tr({ de: 'Trifft mit der Spitze, bleibt außer Reichweite', en: 'Hits with the tip, stays out of reach' }),
    text: tr({ de: 'Lange Klingen, die auf maximaler Distanz am besten treffen. Richtig gespaced ist fast jeder Angriff auf Schild sicher.', en: 'Long blades that hit best at max range. Spaced correctly, almost every attack is safe on shield.' }),
    row: 2,
    cell: 0,
    muster: 'swordie',
  },
  glasscannon: {
    label: 'Glass Cannon',
    hint: tr({ de: 'Teilt enorm aus, hält wenig aus', en: 'Hits hard, cannot take much' }),
    text: tr({ de: 'Viel Schaden und frühe Kills, dafür leicht oder mit großer Hurtbox. Ein guter Read killt, ein schlechter kostet die Stock.', en: 'Lots of damage and early kills, but light or with a big hurtbox. A good read kills, a bad one costs the stock.' }),
    row: 2,
    cell: 1,
    muster: 'allrounder',
  },
  variability: {
    label: 'Variability',
    hint: tr({ de: 'Wechselt Form oder Werkzeug je nach Lage', en: 'Switches form or tools as the situation demands' }),
    text: tr({ de: 'Monado Arts, Pokémon-Wechsel, Kommandomenü oder Klingenwechsel. Das Kit passt sich dem Match an, statt einen festen Plan zu haben.', en: 'Monado Arts, Pokémon switching, a command menu or blade swaps. The kit adapts to the match instead of following a fixed plan.' }),
    row: 2,
    cell: 2,
    muster: 'allrounder',
  },
  'hit-and-run': {
    label: 'Hit & Run',
    hint: tr({ de: 'Rein, treffen, wieder raus', en: 'Get in, hit, get out' }),
    text: tr({ de: 'Kurz rein, ein Treffer, sofort wieder weg. Mobilität und sichere Aerials lassen dem Gegner kaum Zeit zum Zurückschlagen.', en: 'In for a moment, one hit, gone again. Mobility and safe aerials leave the opponent almost no time to hit back.' }),
    row: 2,
    cell: 3,
    muster: 'bait',
  },
  brawler: {
    label: 'Brawler',
    hint: tr({ de: 'Sucht den Schlagabtausch aus der Nähe', en: 'Looks for close-range exchanges' }),
    text: tr({ de: 'Solide Frames, gute Combos und keine Angst vor dem Nahkampf. Weniger Tempo als Rushdown, dafür mehr Substanz in jedem Treffer.', en: 'Solid frames, good combos and no fear of close combat. Less speed than rushdown, but more substance in every hit.' }),
    row: 2,
    cell: 4,
    muster: 'bruiser',
  },
  'pure-zoner': {
    label: 'Pure Zoner',
    hint: tr({ de: 'Hält den Gegner mit Projektilen fern', en: 'Keeps the opponent out with projectiles' }),
    text: tr({ de: 'Die linke Ecke. Projektile decken die Stage ab, der Gegner muss sich nähern und zahlt für jeden Schritt.', en: 'The left corner. Projectiles cover the stage, so the opponent has to approach and pays for every step.' }),
    row: 3,
    cell: 0,
    muster: 'zoner',
  },
  turtle: {
    label: 'Turtle',
    hint: tr({ de: 'Wartet hinter Projektilen und Schild', en: 'Waits behind projectiles and shield' }),
    text: tr({ de: 'Projektile und viel Geduld. Lässt den Gegner kommen und bestraft den Ansatz, statt selbst anzugreifen.', en: 'Projectiles and a lot of patience. Lets the opponent come in and punishes the approach instead of attacking.' }),
    row: 3,
    cell: 1,
    muster: 'zoner',
  },
  trapping: {
    label: 'Trapping',
    hint: tr({ de: 'Stellt die Stage mit Fallen zu', en: 'Fills the stage with traps' }),
    text: tr({ de: 'Fallen, Sprengsätze und Subweapons. Die Stage füllt sich mit Hitboxen, bis der Gegner keine sichere Option mehr hat.', en: 'Traps, explosives and subweapons. The stage fills with hitboxes until the opponent has no safe option left.' }),
    row: 3,
    cell: 2,
    muster: 'setplay',
  },
  'neutral-beast': {
    label: 'Neutral Beast',
    hint: tr({ de: 'Gewinnt das Neutral aus jeder Distanz', en: 'Wins neutral from any distance' }),
    text: tr({ de: 'Genau zwischen Zoner und Bait & Punish. Starke Werkzeuge auf jede Entfernung, und jeder gewonnene Schlagabtausch zahlt sich aus.', en: 'Right between zoner and bait & punish. Strong tools at every range, and every exchange won pays off.' }),
    row: 3,
    cell: 3,
    muster: 'zoner',
  },
  trickster: {
    label: 'Trickster',
    hint: tr({ de: 'Verwirrt mit ungewöhnlichen Werkzeugen', en: 'Confuses with unusual tools' }),
    text: tr({ de: 'Items, Float und Fruchtwürfe. Werkzeuge, die sonst kaum jemand hat und auf die man sich erst einstellen muss.', en: 'Items, float and thrown fruit. Tools hardly anyone else has, and that take some getting used to.' }),
    row: 3,
    cell: 4,
    muster: 'setplay',
  },
  setup: {
    label: 'Setup',
    hint: tr({ de: 'Baut Situationen, die sich später auszahlen', en: 'Builds situations that pay off later' }),
    text: tr({ de: 'Luma, Tomes, Desyncs, Bucket. Der Spielplan braucht Vorbereitung, und wenn sie steht, wird jede Öffnung teuer.', en: 'Luma, tomes, desyncs, bucket. The game plan needs preparation, and once it is in place every opening gets expensive.' }),
    row: 3,
    cell: 5,
    muster: 'setplay',
  },
  grappler: {
    label: 'Grappler',
    hint: tr({ de: 'Gewinnt über Grabs und Würfe', en: 'Wins through grabs and throws' }),
    text: tr({ de: 'Die rechte Ecke. Wartet auf den Fehler und macht aus jedem Grab eine Kill-Drohung.', en: 'The right corner. Waits for the mistake and turns every grab into a kill threat.' }),
    row: 3,
    cell: 6,
    muster: 'grappler',
  },
};

/** Reihenfolge der Pyramide, Reihe für Reihe von links nach rechts. */
export const ARCHETYPE_ORDER = Object.keys(ARCHETYPE_INFO) as Archetype[];

/** Nur die Namen, für Filter und Tags. */
export const ARCHETYPES = Object.fromEntries(ARCHETYPE_ORDER.map((a) => [a, ARCHETYPE_INFO[a].label])) as Record<Archetype, string>;

/** Die drei Ecken der Pyramide. */
export const POLES = {
  rushdown: { label: 'Rushdown', color: '#ff4b2e' },
  zoner: { label: 'Zoner', color: '#3d8bff' },
  bait: { label: 'Bait & Punish', color: '#2fcf7f' },
} as const;

/**
 * Fighter, die auf der Vorlage fehlen, weil sie später erschienen sind.
 * Ihr Feld ist von uns gesetzt. Die Seite markiert sie sichtbar.
 *
 * - Mii Brawler, Mii Swordfighter, Mii Gunner, Joker, Banjo & Kazooie, Terry
 *   und Byleth stehen auf der farbigen Pyramide derselben Vorlage (9 Felder).
 *   Übertragen in das Feld, in dem die Mehrheit ihrer dortigen Nachbarn auf der
 *   schwarz-weißen Pyramide steht.
 * - Min Min, Steve, Sephiroth, Pyra/Mythra, Kazuya und Sora stehen auf keiner
 *   der beiden. Hier ist die Einordnung rein redaktionell.
 */
export const ERGAENZT: ReadonlySet<string> = new Set([
  'mii-brawler',
  'mii-swordfighter',
  'mii-gunner',
  'joker',
  'banjo-and-kazooie',
  'terry',
  'byleth',
  'min-min',
  'steve',
  'sephiroth',
  'pyra-mythra',
  'kazuya',
  'sora',
]);
