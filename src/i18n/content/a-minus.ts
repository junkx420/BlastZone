import type { GuideTexts } from './types';

const FALLING_NAIR = 'Nair while falling';
const DTHROW_FOLLOWUP = 'According to SmashWiki, one of the follow-ups off down throw.';
const UTHROW_ANY_AERIAL = 'According to SmashWiki, up throw starts combos into any of Falco’s aerials at all percents.';

/** Englisch für src/data/guides-a-minus.ts. */
export const TEXT: GuideTexts = {
  corrin: {
    meta: [
      'Corrin combines sword range with a neutral air that leads into itself, forward air, up air and up tilt at low and mid percents. Forward smash reaches extremely far with the spear and, according to SmashWiki, kills middleweights from 80%.',
      'Against that stand slow ground speed and hardly any defensive options, so Corrin has a hard time in neutral. The strongest advantage tools have bad frame data, and the straight recovery is easy to intercept.',
    ],
    strengths: ['Neutral air as a versatile combo starter', 'Forward smash with huge range and early kills', 'Up air kills middleweights early'],
    weaknesses: ['Slow ground speed, weak neutral', 'Bad frame data on the strongest moves', 'Straight recovery, vulnerable to gimps'],
    combos: {
      'corrin-dtilt-utilt': {
        tip: 'Down tilt comes out fast and is hard to punish thanks to its range; according to SmashWiki it is the way into up tilt at mid percents.',
      },
      'corrin-nair-fair': {
        tip: 'Corrin’s widest route: a falling nair links across almost the entire percent range.',
        steps: { 0: { label: 'SH Nair while falling' } },
      },
      'corrin-nair-utilt': {
        tip: 'At low percents, the higher damage alternative to forward air.',
        steps: { 0: { label: 'SH Nair, falling' } },
      },
      'corrin-fair-fair': { tip: 'Follow with the double jump; it carries the opponent toward the ledge.' },
      'corrin-nair-lunge': {
        tip: 'Game8 gives no percent range; the route lives on the mixup after the pin.',
        steps: { 1: { note: 'After the pin, kick, jump or cancel remain as a mixup.' } },
      },
      'corrin-nair-fair-fair-uair': {
        tip: 'Corrin’s highest damage route, but only in a tight window between 20 and 30%.',
      },
      'corrin-nair-back-bair': {
        title: 'Nair (behind) → Back Air',
        tip: 'According to SmashWiki, back air is Corrin’s strongest aerial; when the nair hits behind him, it is the best follow-up.',
        steps: { 0: { label: 'SH Nair, opponent behind Corrin' } },
      },
      'corrin-nair-fsmash': {
        tip: 'Lots of damage early in the stock. Later on, the spear tip kills middleweights from around 80%.',
        steps: { 0: { label: 'SH Nair, falling' }, 1: { label: 'Forward Smash, spear tip' } },
      },
    },
  },

  falco: {
    meta: [
      'According to SmashWiki, Falco’s strengths are his combo, juggling and edgeguarding game, above all his aerials. Up tilt is the linchpin: very fast startup, big hitboxes, little endlag, and it chains into itself and into every aerial.',
      'His weaknesses are survivability and consistency. His recovery goes far but travels in a very straight line, and several moves do not work reliably.',
    ],
    strengths: ['Up tilt as a universal combo starter', 'Strong juggling and edgeguarding', 'Down air as a fast meteor'],
    weaknesses: ['Low survivability', 'Very straight recovery', 'Unreliable moves in his kit'],
    combos: {
      'falco-utilt-utilt-nair': {
        windowLabel: 'low percents',
        tip: 'Up tilt chains into itself; according to Game8 the basic route at low percents.',
      },
      'falco-utilt-usmash': {
        windowLabel: 'low percents',
        tip: 'Up smash starts on frame 7, which also makes it a good punish out of shield.',
      },
      'falco-uthrow-nair': {
        windowLabel: 'at all percents',
        tip: 'According to SmashWiki, up throw leads into every one of his aerials at all percents.',
      },
      'falco-dthrow-fair': { windowLabel: 'low percents', tip: 'The throw alternative at low percents.' },
      'falco-dair-ladder': {
        title: 'Down Air → Up Tilt → Jump → Nair → Forward Air',
        windowLabel: 'low percents',
        tip: 'Game8’s long route: when down air carries the opponent upward, attach the rest.',
        steps: { 2: { label: 'Jump → Nair' } },
      },
      'falco-utilt-bair': {
        tip: 'According to SmashWiki, a reliable KO confirm into back air, possible from around 80% and up to 120%.',
      },
      'falco-utilt-uair': {
        windowLabel: 'high percents',
        tip: 'The vertical version of the same KO setup, good on stages with a low top blast zone.',
      },
      'falco-dthrow-usmash': {
        tip: 'According to SmashWiki, down throw links into jab, dash attack, forward tilt, up smash, nair, forward air and Blaster.',
        steps: { 2: { label: 'Up Smash, both hits' } },
      },
      'falco-dthrow-da': {
        tip: DTHROW_FOLLOWUP,
        steps: { 2: { note: 'Early hit counted; the late hit deals 7%.' } },
      },
      'falco-dthrow-ftilt': { tip: DTHROW_FOLLOWUP },
      'falco-dthrow-nair': { tip: DTHROW_FOLLOWUP },
      'falco-dthrow-nair-fair': { windowLabel: 'low percents', tip: 'According to Game8, this sequence links at low percents.' },
      'falco-uthrow-uair': { windowLabel: 'at all percents', tip: UTHROW_ANY_AERIAL },
      'falco-uthrow-fair': { windowLabel: 'at all percents', tip: UTHROW_ANY_AERIAL },
      'falco-uthrow-dair': {
        windowLabel: 'high percents',
        tip: 'According to Game8, down air links off up throw at high percents.',
        steps: { 2: { label: 'FH Dair, early hit' } },
      },
      'falco-dair-dair-ko': {
        tip: 'According to SmashWiki, down air has combo potential across many percents, up to a second down air as a KO combo.',
        steps: { 0: { label: 'SH Dair, early hit' }, 1: { label: 'DJ Dair, early hit' } },
      },
    },
  },

  shulk: {
    meta: [
      'Shulk’s biggest asset is range: the Monado gives him some of the longest disjoints in the game, and his aerials combine big hitboxes with long duration and little landing lag. The Monado Arts (Buster, Smash, Shield, Speed, Jump) change his stats to fit the situation.',
      'In exchange his moveset is sluggish: apart from jab, standing grab and Vision, no attack hits before frame 10. He has no projectile, and he is the only character who cannot auto-cancel any of his aerials before the animation ends.',
    ],
    strengths: ['Some of the longest disjoints in the game', 'Aerials with big, long-lasting hitboxes', 'Monado Arts adapt his stats to any situation'],
    weaknesses: ['No attack before frame 10 (except jab, grab, Vision)', 'No projectile and no answer to projectiles', 'Cannot auto-cancel any aerial'],
    combos: {
      'shulk-nair-ftilt': {
        tip: 'Land the nair while falling. According to Game8, the Buster Art shifts the window to 20-90%.',
        steps: { 0: { label: FALLING_NAIR } },
      },
      'shulk-nair-utilt': {
        tip: 'Up tilt covers a lot of space above Shulk and catches landings. With Buster 10-70%.',
        steps: { 0: { label: FALLING_NAIR } },
      },
      'shulk-dthrow-dtilt': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw leads into down tilt or forward tilt at low to mid percents.',
      },
      'shulk-nair-grab': {
        title: 'Landing Nair → Grab',
        tip: 'According to SmashWiki, the landing nair is Shulk’s standard way in, either into grab or into a forward air chain.',
        steps: { 0: { label: 'SH Nair, land' }, 1: { note: 'From here into down throw and the ground route.' } },
      },
      'shulk-nair-backslash': {
        tip: 'Deals less damage than the tilt routes but pays off when the opponent faces away from Shulk. With Buster 80-110%.',
        steps: { 0: { label: FALLING_NAIR }, 1: { note: 'Hitting from behind, Back Slash deals much more damage.' } },
      },
      'shulk-uthrow-uair': {
        title: 'Up Throw → Up Air (“Monado Purge”)',
        tip: 'Nicknamed “Monado Purge” by players. Shulk’s best known upward throw route.',
      },
      'shulk-fair-airslash': {
        title: 'Forward Air → Air Slash (“Fair Slash”)',
        tip: 'According to SmashWiki, possible with the Jump, Speed or Buster Art.',
        steps: { 1: { label: 'Air Slash, both hits' } },
      },
      'shulk-fair-fsmash': {
        tip: 'Possible because the Monado Arts shorten the landing lag of forward air. With the Smash Art, forward smash ends stocks.',
      },
    },
  },

  greninja: {
    meta: [
      'Greninja’s biggest strength is mobility. Its ground and air speed are among the highest in the game. On top of that come a strong combo and rushdown game plus kill options like forward air and the smash attacks, which can be set up at the right percents.',
      'Its aerials start slowly, though, which clashes with its fast fall speed; together with the high jump and a mediocre grab, that makes for one of the weakest out of shield games. The multi-hits are notoriously unreliable.',
    ],
    strengths: ['Ground and air speed among the very best', 'Strong combo and rushdown game', 'Kill options can be set up'],
    weaknesses: ['Slow starting aerials despite fast falling', 'Very weak out of shield game', 'Unreliable multi-hits'],
    combos: {
      'greninja-da-utilt-usmash': {
        windowLabel: 'across wide percent ranges',
        tip: 'Game8 puts the route at around 28% damage and calls it usable across wide percent ranges.',
      },
      'greninja-uthrow-uair': {
        title: 'Up Throw → Jump → Up Air',
        windowLabel: 'across wide percent ranges',
        tip: 'The standard follow-up after the grab. Greninja’s jump height is enough even at higher percents.',
      },
      'greninja-dthrow-dtilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw also leads into forward tilt and dash attack at low percents.',
      },
      'greninja-dthrow-bair': { windowLabel: 'mid percents', tip: 'From mid percents, the higher damage throw route.' },
      'greninja-dtilt-usmash': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, down tilt confirms the KO into up smash fairly reliably. Game8 lists high percents and recommends practicing the timing.',
      },
      'greninja-uthrow-utilt': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up throw leads into up tilt or up air at low and mid percents; up tilt keeps the opponent closer to the ground.',
      },
      'greninja-dthrow-fair': {
        windowLabel: 'higher percents',
        tip: 'According to SmashWiki, forward air replaces back air as the throw follow-up at higher percents.',
      },
      'greninja-dtilt-nair-usmash': {
        title: 'Down Tilt → Nair (weak hit) → Up Smash',
        windowLabel: 'only in certain percent ranges',
        tip: 'According to SmashWiki, the weak nair hit can be set up off down tilt and then confirms the KO into up smash, but only in certain percent ranges.',
        steps: { 1: { label: 'SH Nair, weak hit' } },
      },
      'greninja-da-uair': { tip: 'According to SmashWiki, dash attack sets up up air chains and drag-down combos.' },
    },
  },
};
