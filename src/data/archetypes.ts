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
    hint: 'Pures Tempo, lässt den Gegner nie atmen',
    text: 'Die Spitze der Pyramide. Schnellste Frames, beste Mobilität und ein Spielplan, der fast nur aus Druck besteht.',
    row: 0,
    cell: 0,
    muster: 'rushdown',
  },
  mixup: {
    label: 'Mix-up',
    hint: 'Hat mehr Optionen, als man abdecken kann',
    text: 'Nah am Rushdown, aber mit Werkzeugen für die Distanz. Gewinnt, weil der Gegner nie alle Optionen gleichzeitig abdecken kann.',
    row: 1,
    cell: 0,
    muster: 'bait',
  },
  'zone-breaker': {
    label: 'Zone Breaker',
    hint: 'Kommt durch jede Projektilwand',
    text: 'Klein, schnell oder mit eigenen Projektilen. Genau die Fighter, gegen die Zoner am wenigsten Spaß haben.',
    row: 1,
    cell: 1,
    muster: 'rushdown',
  },
  footsies: {
    label: 'Footsies',
    hint: 'Gewinnt den Kampf um den halben Schritt',
    text: 'Bodenspiel an der Grenze der eigenen Reichweite. Walk, Dash Dance und Whiff Punishes entscheiden, wer den ersten Treffer landet.',
    row: 1,
    cell: 2,
    muster: 'bruiser',
  },
  spacing: {
    label: 'Spacing',
    hint: 'Trifft mit der Spitze, bleibt außer Reichweite',
    text: 'Lange Klingen, die auf maximaler Distanz am besten treffen. Richtig gespaced ist fast jeder Angriff auf Schild sicher.',
    row: 2,
    cell: 0,
    muster: 'swordie',
  },
  glasscannon: {
    label: 'Glass Cannon',
    hint: 'Teilt enorm aus, hält wenig aus',
    text: 'Viel Schaden und frühe Kills, dafür leicht oder mit großer Hurtbox. Ein guter Read killt, ein schlechter kostet die Stock.',
    row: 2,
    cell: 1,
    muster: 'allrounder',
  },
  variability: {
    label: 'Variability',
    hint: 'Wechselt Form oder Werkzeug je nach Lage',
    text: 'Monado Arts, Pokémon-Wechsel, Kommandomenü oder Klingenwechsel. Das Kit passt sich dem Match an, statt einen festen Plan zu haben.',
    row: 2,
    cell: 2,
    muster: 'allrounder',
  },
  'hit-and-run': {
    label: 'Hit & Run',
    hint: 'Rein, treffen, wieder raus',
    text: 'Kurz rein, ein Treffer, sofort wieder weg. Mobilität und sichere Aerials lassen dem Gegner kaum Zeit zum Zurückschlagen.',
    row: 2,
    cell: 3,
    muster: 'bait',
  },
  brawler: {
    label: 'Brawler',
    hint: 'Sucht den Schlagabtausch aus der Nähe',
    text: 'Solide Frames, gute Combos und keine Angst vor dem Nahkampf. Weniger Tempo als Rushdown, dafür mehr Substanz in jedem Treffer.',
    row: 2,
    cell: 4,
    muster: 'bruiser',
  },
  'pure-zoner': {
    label: 'Pure Zoner',
    hint: 'Hält den Gegner mit Projektilen fern',
    text: 'Die linke Ecke. Projektile decken die Stage ab, der Gegner muss sich nähern und zahlt für jeden Schritt.',
    row: 3,
    cell: 0,
    muster: 'zoner',
  },
  turtle: {
    label: 'Turtle',
    hint: 'Wartet hinter Projektilen und Schild',
    text: 'Projektile und viel Geduld. Lässt den Gegner kommen und bestraft den Ansatz, statt selbst anzugreifen.',
    row: 3,
    cell: 1,
    muster: 'zoner',
  },
  trapping: {
    label: 'Trapping',
    hint: 'Stellt die Stage mit Fallen zu',
    text: 'Fallen, Sprengsätze und Subweapons. Die Stage füllt sich mit Hitboxen, bis der Gegner keine sichere Option mehr hat.',
    row: 3,
    cell: 2,
    muster: 'setplay',
  },
  'neutral-beast': {
    label: 'Neutral Beast',
    hint: 'Gewinnt das Neutral aus jeder Distanz',
    text: 'Genau zwischen Zoner und Bait & Punish. Starke Werkzeuge auf jede Entfernung, und jeder gewonnene Schlagabtausch zahlt sich aus.',
    row: 3,
    cell: 3,
    muster: 'zoner',
  },
  trickster: {
    label: 'Trickster',
    hint: 'Verwirrt mit ungewöhnlichen Werkzeugen',
    text: 'Items, Float und Fruchtwürfe. Werkzeuge, die sonst kaum jemand hat und auf die man sich erst einstellen muss.',
    row: 3,
    cell: 4,
    muster: 'setplay',
  },
  setup: {
    label: 'Setup',
    hint: 'Baut Situationen, die sich später auszahlen',
    text: 'Luma, Tomes, Desyncs, Bucket. Der Spielplan braucht Vorbereitung, und wenn sie steht, wird jede Öffnung teuer.',
    row: 3,
    cell: 5,
    muster: 'setplay',
  },
  grappler: {
    label: 'Grappler',
    hint: 'Gewinnt über Grabs und Würfe',
    text: 'Die rechte Ecke. Wartet auf den Fehler und macht aus jedem Grab eine Kill-Drohung.',
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
