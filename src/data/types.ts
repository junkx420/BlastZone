export type TierId = 'S+' | 'S' | 'S-' | 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'E';

export type Archetype = 'rushdown' | 'zoner' | 'swordie' | 'allrounder' | 'setplay' | 'grappler' | 'bruiser' | 'bait';

export type WeightClass = 'feather' | 'light' | 'middle' | 'heavy' | 'super';

export interface Fighter {
  slug: string;
  name: string;
  /** Official fighter number as printed in-game, e.g. "04ε" or "33–35". */
  no: string;
  /** Numeric sort key for `no` (echoes sit at .5). */
  order: number;
  series: string;
  /** German names, nicknames and abbreviations. Search only, never displayed. */
  aliases: string[];
  /** In-game weight units. */
  weight: number;
  /** Shown instead of a single value when a slot has several bodies. */
  weightNote?: string;
  /** Editorial mobility rating, 1 (slow) to 5 (fastest). */
  mobility: 1 | 2 | 3 | 4 | 5;
  archetype: Archetype;
  /** Primary and secondary franchise colors. */
  colors: readonly [string, string];
  /** One sentence: what defines this fighter in the current meta. */
  tagline: string;
  echoOf?: string;
  /** Optional licensed render. The generated sigil is used otherwise. */
  art?: string;
}

export interface TierPlacement {
  slug: string;
  rank: number;
  tier: TierId;
  /** Panel rating, 1–10 (top-5 votes score above 10). */
  score: number;
}

export interface TierListSource {
  name: string;
  published: string;
  url: string;
  note: string;
}

export interface ComboStep {
  /** Space-separated notation tokens, e.g. "sh nair" or "623a". */
  input: string;
  /** Character-specific move name that replaces the generic label. */
  label?: string;
  /** Approximate damage of this step including the 1v1 multiplier. */
  dmg: number;
  note?: string;
}

export interface Combo {
  id: string;
  kind: 'bnb' | 'meta';
  title: string;
  /** Opponent percent where the meter starts during playback (illustrative). */
  start: number;
  /** Percent window as stated by the source; a `null` upper bound means "and above". */
  window?: readonly [number, number | null];
  /** Qualitative window when the source gives no numbers, e.g. "niedrige Prozente". */
  windowLabel?: string;
  kills?: boolean;
  difficulty: 1 | 2 | 3;
  steps: ComboStep[];
  tip: string;
  tags?: string[];
  /** Where the route is documented. */
  source: Source;
}

export interface Source {
  label: string;
  url: string;
}

export interface FighterGuide {
  slug: string;
  /** Short paragraphs on the fighter's role in the meta. */
  meta: string[];
  strengths: string[];
  weaknesses: string[];
  combos: Combo[];
  /** Pages the profile text and damage values are based on. */
  sources: Source[];
}
