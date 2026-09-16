import type { GuideTexts } from './types';

const FALLING_SH_NAIR = 'SH Nair, falling';
const JAB3 = '3-hit Jab';
const CLOSE_HIT = 'Close hit counted. With the outer sweetspot 20%.';
const FULL_BLAST = 'Charge Blast, fully charged';

/** Englisch für src/data/guides-c-plus.ts. */
export const TEXT: GuideTexts = {
  isabelle: {
    meta: [
      'Isabelle’s ground attacks all start under 10 frames and have disjoints, and her aerials auto-cancel out of a short hop. Combined with her floaty nature, that makes edgeguarding a focus: fast, far-reaching aerials far off the stage.',
      'In exchange she has trouble getting back down; light and floaty, she gets juggled and thrown early. Her movement mixups are limited, and several specials have clear flaws. Compared to Villager she is the lower-risk pick with weaker zoning but better punishes.',
    ],
    strengths: ['Every ground attack under 10 frames', 'Aerials auto-cancel out of a short hop', 'Strong edgeguarding'],
    weaknesses: ['Floaty and light: gets juggled', 'Limited movement mixups', 'Weaker zoning than Villager'],
    combos: {
      'isabelle-utilt-utilt': { tip: 'According to SmashWiki, up tilt reliably combos into itself at low percents.' },
      'isabelle-utilt-uair': {
        tip: 'Only a true combo from about 10%; at 0% the up air does not connect according to Game8.',
      },
      'isabelle-rod-uair': {
        title: 'Fishing Rod (throw up) → Up Air',
        tip: 'The throw direction decides the follow-up; thrown upward, up air follows.',
        steps: { 0: { label: 'Fishing Rod: hook and throw upward' } },
      },
      'isabelle-dair-usmash': {
        tip: 'According to Game8 from 40%, meant for opponents at high percents on platforms or on stages with a low ceiling.',
      },
      'isabelle-lloid-uair': {
        windowLabel: 'higher percents',
        tip: 'According to SmashWiki, the trap combos into up air from close range and becomes a KO confirm at higher percents.',
        steps: {
          0: {
            label: 'Detonate Lloid Trap',
            note: 'Value from SmashWiki because Ultimate Frame Data lists none: 1.6% for the first two hits, 0.9% for hits three to five, 12% for the last.',
          },
        },
      },
      'isabelle-utilt-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, since update 8.0.0 up tilt reliably combos into itself and into neutral, up and forward air at low to mid percents.',
      },
      'isabelle-jab-dsmash': {
        title: 'Jab Chain → Down Smash (“Wobbelle”)',
        windowLabel: 'mid to high percents',
        tip: 'The “Wobbelle”: according to SmashWiki, jab reliably combos into her tilts, down smash and Pocket, and the down smash version is a potent KO confirm.',
        steps: { 0: { note: 'At low percents, jab combos into itself several times.' } },
      },
      'isabelle-bthrow-ko': {
        title: 'Back Throw as a Kill',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, one of the strongest back throws in the game: it reliably takes even the heaviest characters. For a fighter with otherwise late kill power, her most important finisher.',
        steps: { 1: { note: 'Value from SmashWiki (11% base) because Ultimate Frame Data lists none for Isabelle’s throws.' } },
      },
      'isabelle-ztd-jab-lock': {
        title: 'Jab Infinite at the Ledge → Forward Smash',
        windowLabel: 'from 0%',
        tip: 'SmashWiki lists Isabelle’s jab at the ledge as an infinite that can be ended with almost her entire moveset, including several KO moves. The number of jabs is open; only three are listed here.',
        steps: { 0: { note: 'At the ledge, the jab holds the opponent in place instead of knocking them away.' } },
      },
    },
  },

  'mii-gunner': {
    meta: [
      'As the projectile Mii, Gunner controls distance: its specials stop approaches, build damage, edgeguard and pressure shields, all from a safe distance.',
      'In exchange it is one of the least mobile characters and, as a heavyweight, combo-prone once someone gets through the projectile wall. Its recovery is only average, and its frame data is slow across the board.',
    ],
    strengths: ['Projectiles for every distance', 'Strong edgeguarding and shield pressure', 'Flame Pillar as a trap'],
    weaknesses: ['Very immobile, combo-prone', 'Only average recovery', 'Slow frame data'],
    combos: {
      'gunner-nair-da': {
        tip: 'According to Game8, easier to land when nair or forward air hit at point-blank range.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'gunner-nair-fsmash': {
        tip: 'A small window, but according to Game8 a lot of damage.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'gunner-dthrow-bair': {
        tip: 'Down throw launches flatter than it used to, which according to SmashWiki is what gives it follow-ups at all.',
      },
      'gunner-dthrow-nair': { tip: 'The wider window of the same throw route.' },
      'gunner-nair-ftilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, against grounded opponents nair leads into jab, forward tilt, dash attack, forward smash and up smash at low percents, especially reliably against super heavyweights.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'gunner-uair-utilt': {
        title: 'Up Air (landing) → Up Tilt',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, the looping hits of up air can be extended into more moves on landing, and into up tilt that becomes a KO combo.',
        steps: { 0: { label: 'FH Uair, on landing', note: 'The looping hits hold the opponent in place.' } },
      },
      'gunner-chargeblast-ko': {
        title: 'Charge Blast (fully charged)',
        tip: 'According to SmashWiki, Gunner’s strongest projectile special: fully charged it KOs from center stage from around 105%.',
        steps: { 0: { label: FULL_BLAST, note: 'The charge can be stored.' } },
      },
      'gunner-bomb-bair': {
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki, the bomb reliably confirms into back air at mid to high percents.',
      },
      'gunner-pillar-blast': {
        windowLabel: 'at the ledge from 80%',
        tip: 'According to SmashWiki, a confirm into the fully charged Charge Blast, which kills reliably at the ledge from 80%.',
        steps: { 0: { note: 'The opponent gets stuck in the pillar.' }, 1: { label: FULL_BLAST } },
      },
    },
  },

  lucas: {
    meta: [
      'Lucas’ most dangerous tool is his edgeguarding, according to SmashWiki one of the best in Ultimate. On top of that comes an excellent combo game: down tilt loops into itself, jab, forward tilt, forward air, grab and even forward smash, and his tether grab pulls him in from across the stage.',
      'Defensively things look grim: he has practically no answer to pressure, struggles against rushdown and can hardly get out of juggles.',
    ],
    strengths: ['One of the best edgeguard games in Ultimate', 'Down tilt as a universal combo starter', 'Tether grab across half the stage'],
    weaknesses: ['Practically no anti-pressure options', 'Struggles against rushdown', 'Can hardly escape juggles'],
    combos: {
      'lucas-fair-jab': {
        title: 'Forward Air (falling) → Jab',
        windowLabel: 'low percents',
        tip: 'Land the forward air while falling, then attach the full jab.',
        steps: { 0: { label: 'Fair while falling' }, 1: { label: JAB3 } },
      },
      'lucas-dthrow-fair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, the standard route for a solid 28% damage.',
      },
      'lucas-dtilt-dtilt-jab': {
        windowLabel: 'low percents',
        tip: 'Down tilt is fast enough to loop into itself; according to SmashWiki, ftilt, fair, grab or forward smash also follow.',
        steps: { 2: { label: JAB3 } },
      },
      'lucas-uair-chain': {
        tip: 'According to SmashWiki, up air combos into itself several times, and with platforms up to 70% damage is possible.',
      },
      'lucas-dair-fsmash': {
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki, down air loops at mid to high percents and sets up kill confirms, above all forward smash, down smash and forward air.',
      },
      'lucas-nair-nair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, neutral air combos into itself; the loop became famous through the player Remi.',
      },
      'lucas-zair-loop': {
        title: 'Zair → Zair (tether loop)',
        windowLabel: 'across wide percent ranges',
        tip: 'According to SmashWiki, the tether grab combos into itself across the whole stage and leads to inescapable, high damage chains.',
        steps: { 0: { note: 'Rope Snake reaches across half the stage.' } },
      },
      'lucas-bair-bair': {
        windowLabel: 'around 60%',
        tip: 'According to SmashWiki, from around 60% back air loops into itself and into Lucas’ other aerials; over the ledge it ends in a meteor KO.',
      },
      'lucas-pkfreeze-offstage': {
        title: 'PK Freeze against Offstage Opponents',
        windowLabel: 'offstage even at very low percents',
        tip: 'According to SmashWiki, PK Freeze freezes the opponent and, since Ultimate, launches them horizontally; offstage that KOs at absurdly low percents. The backbone of Lucas’ edgeguarding.',
        steps: {
          0: { label: 'PK Freeze (fully charged)', note: 'Much weaker uncharged; steering the projectile takes practice.' },
        },
      },
    },
  },

  'wii-fit-trainer': {
    meta: [
      'Wii Fit Trainer deals unusually high damage with many attacks, and several hitboxes hit regardless of which way she faces. Sun Salutation and Header are two high damage projectiles, and Deep Breathing boosts damage, ground, air and fall speed as well as defense.',
      'Many attacks lack disjoints, though, and have odd blind spots; against small hurtboxes and at mid range she has few answers. Her slow fall makes her easy to juggle.',
    ],
    strengths: ['Unusually high damage', 'Two strong projectiles', 'Deep Breathing improves every stat'],
    weaknesses: ['Few disjoints, blind spots', 'Weak at mid range', 'Easy to juggle'],
    combos: {
      'wft-nair-uair': {
        tip: 'Her widest window: according to SmashWiki, nair launches straight up at 90°, allowing 70% combos or very early KOs.',
      },
      'wft-nair-usmash': { tip: 'The higher damage version in the mid window.' },
      'wft-fair-ftilt': { tip: 'According to Game8, forward smash and dash attack also follow forward air.' },
      'wft-dthrow-bair': { tip: 'At higher percents, up air takes over instead (20-80%).' },
      'wft-fair-fsmash': {
        tip: 'According to SmashWiki, forward air is her KO setup across a very wide window.',
      },
      'wft-uthrow-uair': { tip: 'According to SmashWiki, up throw has combo potential above all with up air.' },
      'wft-ftilt-bair': {
        title: 'Forward Tilt (backward) → Back Air',
        tip: 'According to SmashWiki, some of her hitboxes hit regardless of facing direction, which gives rise to this unusual route.',
        steps: { 0: { label: 'Ftilt, aimed away from the opponent' } },
      },
    },
  },

  robin: {
    meta: [
      'Robin’s tomes provide spacing, pressure and extra damage, and the Levin Sword is a weapon in its own right: high pressure, lots of combo potential and real KO power. Once tomes and sword are used up, they can be thrown as items for enormous damage.',
      'In exchange Robin is the second slowest runner in the game, has hardly any defensive options and is especially vulnerable from below. The durability mechanic weakens him over time, and without Elwind his recovery is practically helpless.',
    ],
    strengths: ['Tomes for spacing and pressure', 'Levin Sword with combo and KO power', 'Used-up weapons as throwing items'],
    weaknesses: ['Second slowest runner in the game', 'Hardly any defensive options', 'Durability weakens him over time'],
    combos: {
      'robin-utilt-utilt': { tip: 'The entry point to Robin’s ground game.' },
      'robin-utilt-usmash': { tip: 'A wide window and much more damage than the tilt chain.' },
      'robin-fair-da': {
        tip: 'With the Levin Sword, forward air deals much more damage, but the route still works without it.',
      },
      'robin-uair-nair': {
        tip: 'With the Levin Sword, according to Game8 only up to 50%, but with much more damage.',
      },
      'robin-uair-uair': { tip: 'Robin’s longest window in the air. With the Levin Sword up to 50%.' },
      'robin-arcfire-fair': {
        tip: 'Only very early in the stock; according to Game8, Arcfire otherwise leads into up smash instead.',
        steps: { 0: { note: 'The pillar holds the opponent in place.' } },
      },
      'robin-dthrow-uair': {
        tip: 'According to SmashWiki, down throw is a reliable combo starter; at 0-10%, up tilt works instead.',
      },
    },
  },

  ridley: {
    meta: [
      'Ridley lives on his punish game and air pressure: fast, strong, far-reaching aerials with decent air mobility. His disjoints punish opponents with short range, his command grab cracks defensive players, and his projectile helps against everyone without one.',
      'His hurtbox is one of the biggest and clunkiest in the cast; together with high weight and a fast fall, he gets comboed and juggled extremely easily. He has hardly any answers to zoners, and the widely varying quality of his moves makes him predictable.',
    ],
    strengths: ['Strong punish game and air pressure', 'Far-reaching, powerful aerials', 'Command grab against defensive opponents'],
    weaknesses: ['Huge hurtbox: easy to combo', 'Slow to start, laggy to end', 'Hardly any answers to zoners'],
    combos: {
      'ridley-utilt-fair': {
        tip: 'Forward air at lower percents; higher up, according to Game8, up air is the better pick.',
        steps: { 1: { note: CLOSE_HIT } },
      },
      'ridley-utilt-uair': { tip: 'The widest window off up tilt, and the highest damage finisher.' },
      'ridley-nair-dtilt-fair': {
        tip: 'According to SmashWiki, the landing nair combos into jab, ftilt, dtilt or grab at low percents, here into the down tilt route.',
        steps: { 0: { label: 'SH Nair, land' }, 2: { note: CLOSE_HIT } },
      },
      'ridley-dtilt-fair': {
        tip: 'Down tilt launches upward and, according to SmashWiki, combos into aerials across wide percent ranges.',
        steps: { 1: { note: CLOSE_HIT } },
      },
      'ridley-utilt-usmash': { tip: 'A tight window, but Ridley’s highest damage ground route.' },
      'ridley-nair-da': {
        title: 'Nair (1st hit) → Dash Attack',
        tip: 'Only the first nair hit may connect, otherwise the opponent flies too far for the dash attack.',
        steps: { 0: { label: 'SH Nair, 1st hit only' } },
      },
      'ridley-dtilt-usmash': { tip: 'Early in the stock, the same starter fits the up smash.' },
    },
  },
};
