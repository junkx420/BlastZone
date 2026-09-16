import type { GuideTexts } from './types';

const FLOAT = 'Float (hold jump)';
const FLOAT_DAIR = 'Down Air out of float';
const LOW_FLOAT_NAIR = 'Low float → Nair';
const CROWN = 'Crown hit counted; with the arm it deals 17%.';

/** Englisch für src/data/guides-s-minus.ts. Daisy nutzt die Combo-Texte von Peach (ECHO_GUIDES). */
export const TEXT: GuideTexts = {
  'pyra-mythra': {
    meta: [
      'Pyra and Mythra share one slot and swap at any time with down B: Mythra brings speed, mobility and flexible combos, Pyra more range and far more kill power.',
      'Building damage with Mythra and switching to Pyra for the kill covers both of their weaknesses. Pyra is slow and has few combos, Mythra has less kill power.',
    ],
    strengths: ['Swapping with down B covers weaknesses', 'Mythra: speed and a flexible combo game', 'Pyra: range and high kill power'],
    weaknesses: ['Pyra: low mobility, little combo potential', 'Mythra: less kill power than Pyra'],
    combos: {
      'aegis-mythra-dthrow-uair': { tip: 'Mythra’s down throw leads into every aerial except down air, plus Ray of Punishment.' },
      'aegis-mythra-uair-chain': { tip: 'Mythra’s up air has very little lag and chains into itself several times.' },
      'aegis-mythra-dtilt-utilt': { tip: 'Down tilt leads into tilts at almost any percent; up tilt chains into itself and into most aerials.' },
      'aegis-pyra-dthrow-fair': { tip: 'Up air, nair or Prominence Revolt also follow Pyra’s down throw.' },
      'aegis-pyra-dtilt-uair': {
        tip: 'Between 80 and 110-120%, Pyra’s most reliable KO confirm. Below that, down tilt leads into nair, forward air or a reverse up tilt.',
      },
      'aegis-pyra-dair-usmash': {
        windowLabel: 'depends on weight and fall speed',
        tip: 'When down air hits a grounded opponent, it leads into kill moves like up smash or up air.',
        steps: { 0: { note: 'Hit the opponent on the ground.' } },
      },
      'aegis-pyra-dthrow-upb': { tip: 'Lots of damage off a grab when forward or up air do not fit.' },
      'aegis-mythra-dthrow-ray': { tip: 'Ray of Punishment is an excellent combo ender and also hits opponents offstage.' },
    },
  },

  peach: {
    meta: [
      'Peach’s float turns a fairly modest moveset into a major threat: floating aerials create pressure and long combos, and with float and turnips she becomes dangerous offstage.',
      'In exchange she combines a fairly big hurtbox with low weight and very slow fall speed. In disadvantage she gets juggled easily, and kills often only come at very high percents.',
    ],
    strengths: ['Float for pressure and aerial combos', 'Nair as an extremely effective combo tool', 'Down throw reliably leads into back air'],
    weaknesses: ['Big hurtbox and low weight', 'Very slow fall speed: easy to juggle', 'Kills often only at very high percents'],
    combos: {
      'peach-dthrow-bair': {
        tip: 'Peach’s most reliable follow-up off down throw. At low percents nair or forward tilt work too, at high percents up air.',
        steps: { 1: { note: 'The opponent floats briefly behind Peach.' }, 2: { label: 'SH or FH Bair' } },
      },
      'peach-dtilt-bomber': { tip: 'Only in the first few percents. After that, down tilt into aerials.' },
      'peach-dtilt-uair': { tip: 'From 15%, down tilt leads into aerials. Up air is the safest pick and sends the opponent into the air.' },
      'peach-dtilt-float-nair': {
        tip: 'Low floats let you string several nairs in a row.',
        steps: { 1: { label: LOW_FLOAT_NAIR, note: 'Float right above the ground: hold jump.' }, 2: { label: LOW_FLOAT_NAIR } },
      },
      'peach-dair-fsmash': {
        title: 'Down Air (4th hit) → Forward Smash',
        windowLabel: 'at 0%',
        tip: 'Maximum damage at the start of a stock. At low percents, forward, back or neutral air work instead of forward smash, depending on which side the hit lands.',
        steps: { 0: { label: 'SH Dair until the 4th hit' } },
      },
      'peach-dthrow-ftilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, one of the follow-ups off down throw: forward tilt is disjointed and covers a good amount of space both horizontally and vertically.',
      },
      'peach-dthrow-float-nair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, with enough technical skill several low float nairs can be attached to down throw. Peach’s most notorious source of damage.',
        steps: { 2: { label: LOW_FLOAT_NAIR, note: 'Hold jump and float right above the ground.' }, 3: { label: LOW_FLOAT_NAIR } },
      },
      'peach-bthrow-ko': {
        title: 'Back Throw as a Kill',
        windowLabel: 'only at very high percents',
        tip: 'According to SmashWiki, back throw works as a KO move at very high percents, which fits the fact that Peach’s kills come late anyway.',
      },
      'peach-float-dair': {
        windowLabel: 'low percents',
        tip: 'Out of float, down air racks up far more damage without having to jump again and again.',
        steps: { 0: { label: FLOAT }, 1: { label: FLOAT_DAIR } },
      },
      'peach-dtilt-ftilt': {
        tip: 'According to Game8, down tilt has so little endlag that several follow-ups connect, including forward tilt.',
        steps: { 1: { note: 'Early hit with the leg counted; with the foot it deals 10%.' } },
      },
      'peach-dtilt-fair': {
        tip: 'According to Game8, one of the follow-ups off down tilt.',
        steps: { 1: { note: CROWN } },
      },
      'peach-dtilt-parasol': {
        tip: 'According to Game8, walk forward briefly after the down tilt, then up special.',
        steps: { 1: { label: 'Walk forward → Peach Parasol' } },
      },
      'peach-dthrow-uair': {
        tip: 'According to Game8, one of the follow-ups off down throw, alongside forward tilt, nair and back air.',
      },
      'peach-dair-bomber': {
        windowLabel: 'low percents',
        tip: 'According to Game8, the fourth down air hit launches at an angle, and against opponents at low percents several moves connect afterward.',
        steps: { 0: { label: 'SH Dair until the 4th hit' } },
      },
      'peach-dair-fair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, forward air, back air and nair connect after the fourth down air hit against opponents at low percents.',
        steps: { 0: { label: 'SH Dair until the 4th hit' }, 1: { note: CROWN } },
      },
      'peach-float-dair-bair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, float down air works like the regular down air, just without having to jump again and again.',
        steps: { 0: { label: FLOAT }, 1: { label: FLOAT_DAIR } },
      },
      'peach-float-dair-float-dair': {
        windowLabel: 'low percents',
        tip: 'Game8’s longest float tree: two float down airs, then forward air or nair out of a short hop.',
        steps: { 0: { label: FLOAT }, 1: { label: FLOAT_DAIR }, 2: { label: 'Float Down Air again' }, 3: { note: CROWN } },
      },
    },
  },

  daisy: {
    meta: [
      'Daisy is Peach’s echo fighter and has played identically since version 3.0.0: same frames, same float, same turnips. Every Peach route applies unchanged.',
      'In exchange she combines a fairly big hurtbox with low weight and very slow fall speed. In disadvantage she gets juggled easily, and kills often only come at very high percents.',
    ],
  },

  yoshi: {
    meta: [
      'Yoshi combines high speed, especially in the air, with high damage and a solid combo game. His double jump armor lets him power through attacks that would cost others the stock.',
      'His short range often makes him lose out against disjoints, and he struggles against juggles. Egg Throw still helps him win neutral.',
    ],
    strengths: ['High mobility, especially in the air', 'Double jump armor', 'Strong, high damage combo game'],
    weaknesses: ['Short range against disjoints', 'Vulnerable to juggles'],
    combos: {
      'yoshi-utilt-uair': { tip: 'Yoshi’s easiest way to get opponents above him, where up air is his kill option.' },
      'yoshi-dthrow-uair': {
        windowLabel: 'low percents',
        tip: 'Down throw is Yoshi’s most useful throw because its low endlag leads into up air.',
      },
      'yoshi-ftilt-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, only at low percents. If only the tip of forward tilt connects, the opponent flies too far away.',
        steps: { 0: { note: 'Sends the opponent slightly upward.' } },
      },
      'yoshi-ftilt-walk-uair': {
        title: 'Forward Tilt → Step Forward → Up Air',
        windowLabel: 'low percents',
        tip: 'According to Game8, the variant without up tilt: after the forward tilt, walk forward briefly and go straight into up air.',
        steps: { 1: { label: 'Step forward, then Up Air' } },
      },
      'yoshi-nair-ftilt-utilt-nair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, around 40% damage off a single nair.',
        steps: { 0: { label: 'SH Nair, land' } },
      },
      'yoshi-utilt-utilt-uair': { tip: 'Works across a huge percent window and can kill at high percents.' },
      'yoshi-ftilt-usmash': {
        windowLabel: 'low to mid percents',
        tip: 'Forward tilt reliably starts combos into up smash, nair or up air.',
      },
      'yoshi-uair-juggle': {
        tip: 'Not always a true combo, but a reliable juggle that keeps up the pressure even without a perfect confirm.',
        steps: { 2: { label: 'Land → FH Uair' } },
      },
    },
  },

  joker: {
    meta: [
      'Joker brings mobility, fast frame data, safe moves, pressure and a solid combo game. Once he takes enough damage, Arsène appears and greatly boosts the damage and knockback of his attacks.',
      'Without Arsène he struggles to close out stocks at high percents and has to rely on edgeguards or raw kill moves.',
    ],
    strengths: ['Mobility and fast frame data', 'Safe moves and lots of pressure', 'Arsène greatly boosts damage and knockback'],
    weaknesses: ['Weak kill power at high percents without Arsène', 'Relies on edgeguards while Arsène is missing'],
    combos: {
      'joker-dtilt-utilt-uair': { tip: 'Down tilt does not lose strength in its late hitboxes.' },
      'joker-dthrow-fair': { tip: 'Down throw is Joker’s best throw starter and leads into aerials or Grappling Hook.' },
      'joker-fair-fair': {
        windowLabel: 'various percents',
        tip: 'Forward air is one of his most important combo moves; fast-fallen, it also leads into dash grab or dash attack at low percents.',
      },
      'joker-bair-da': { windowLabel: 'low percents', tip: 'A simple route while the opponent still has little damage.' },
      'joker-uthrow-uair-arsene': {
        title: 'Up Throw → Up Air (with Arsène)',
        windowLabel: 'high percents',
        tip: 'Without Arsène, a damage route at low to mid percents. With Arsène, according to SmashWiki, the full hop up air kills around 110%.',
        steps: { 2: { label: 'FH Uair with Arsène' } },
      },
      'joker-fair-usmash': {
        windowLabel: 'various percents',
        tip: 'Straight from forward air into his strongest ground move.',
        steps: { 1: { note: 'Around 20% with Arsène.' } },
      },
      'joker-fair-uair-hook-fair': {
        windowLabel: 'various percents',
        tip: 'Grappling Hook extends aerial combos when the opponent flies out of reach.',
        steps: { 2: { note: 'Pulls Joker toward the opponent.' } },
      },
      'joker-ztd-dragdown-uair': {
        title: 'Dragdown Up Air on a Platform',
        windowLabel: 'from 0%',
        tip: 'SmashWiki lists this as an infinite: the opponent has to stand on a platform, where the dragdown up air holds them while the damage climbs. The number of repetitions is open; only three are listed here.',
        steps: { 0: { note: 'Drag the opponent back onto the platform with the last hit.' }, 3: { note: 'Around 20% with Arsène.' } },
      },
    },
  },
};
