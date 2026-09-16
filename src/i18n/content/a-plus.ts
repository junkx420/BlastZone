import type { GuideTexts } from './types';

const FULL_CHARGE = 'Charge Shot (fully charged)';
const GROUND_METEOR_UTILT = 'Up Tilt, grounded meteor';
const FF_NAIR = 'SH Nair, fast-fallen';

/** Englisch für src/data/guides-a-plus.ts. Dark Samus nutzt die Combo-Texte von Samus (ECHO_GUIDES). */
export const TEXT: GuideTexts = {
  samus: {
    meta: [
      'Samus’ biggest strength is her neutral at range, backed up by a solid close-range game. Down throw leads into nair, forward and up air, and up air chains end in Screw Attack.',
      'Her clearest weaknesses are slow mobility and slow frame data: anyone who gets past her range puts her under pressure.',
    ],
    strengths: ['Strong neutral at range', 'Down throw leads into nair, forward and up air', 'Up air chains with Screw Attack as the finisher'],
    weaknesses: ['Slow mobility', 'Slow frame data'],
    combos: {
      'samus-dthrow-fair': {
        tip: 'The window depends on the opponent’s size. Alternatively nair: out of a short hop at low percents, out of a full hop from mid percents.',
      },
      'samus-uair-screw': {
        windowLabel: 'low percents',
        tip: 'Against light characters the chain works up to about 25%, against heavy ones up to about 50%.',
      },
      'samus-utilt-uair': {
        tip: 'At low percents grounded moves like up smash, forward tilt or down tilt connect more easily; from mid percents the aerials do.',
      },
      'samus-utilt-usmash': {
        tip: 'According to Game8, one of the follow-ups off up tilt between 5 and 80%. On the ground it connects most easily at low percents.',
      },
      'samus-utilt-fair': {
        tip: 'According to Game8, one of the follow-ups off up tilt between 5 and 80%. The aerials connect more easily from mid percents.',
      },
      'samus-utilt-chargeshot': {
        windowLabel: 'high percents',
        tip: 'The Charge Shot has to be fully charged beforehand. The up tilt’s meteor pins the opponent to the ground for it.',
        steps: { 0: { label: GROUND_METEOR_UTILT }, 1: { label: FULL_CHARGE } },
      },
      'samus-ftilt-chargeshot': {
        windowLabel: 'regardless of the tech',
        tip: 'Whatever tech option the opponent picks, the Charge Shot catches it in time.',
        steps: { 1: { label: 'Charge Shot (charged)', note: 'Strongest when fully charged.' } },
      },
      'samus-dthrow-nair': {
        windowLabel: 'various percents',
        tip: 'According to SmashWiki, down throw starts combos into nair, forward and up air; which one fits depends on the percent.',
        steps: { 2: { note: 'Out of a full hop from mid percents.' } },
      },
      'samus-da-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up air is the follow-up to dash attack, grounded up tilt, down air and down throw, and another up air still follows from it.',
      },
      'samus-uthrow-ko': {
        title: 'Up Throw on a Platform',
        windowLabel: 'very high percents',
        tip: 'According to SmashWiki, up throw is Samus’ strongest throw and KOs reliably, especially on platforms that shorten the way to the top blast zone.',
      },
      'samus-dair-chargeshot': {
        title: 'Down Air (grounded meteor) → Charge Shot',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, the grounded meteor sets up KO confirms into a fully charged Charge Shot at high percents.',
        steps: {
          0: { label: 'Down Air, grounded meteor', note: 'The meteor slams the opponent into the ground and makes them bounce.' },
          1: { label: FULL_CHARGE },
        },
      },
    },
  },

  'dark-samus': {
    meta: [
      'Dark Samus is Samus’ echo fighter. The gameplay differences are so small that both count as the same character competitively. Dark Samus has, for example, a marginally faster roll. Every Samus route applies.',
      'Her clearest weaknesses are slow mobility and slow frame data: anyone who gets past her range puts her under pressure.',
    ],
  },

  palutena: {
    meta: [
      'Palutena’s aerials are the core of her neutral: high air mobility, and her nair in particular counts as one of the best moves in the game. It starts combos, chains into itself, stays active for a long time and kills at very high percents.',
      'On the ground she is below average: slow, unsafe tilts and committal smash attacks. Closing out stocks is hard for her because Explosive Flame is predictable and back air quickly loses power through overuse.',
    ],
    strengths: ['Nair is one of the best moves in the game', 'High air mobility', 'Down throw starts nair chains and KO setups'],
    weaknesses: ['Slow, unsafe tilts', 'Committal smash attacks', 'Predictable kill options'],
    combos: {
      'palutena-nair-nair-uair': {
        windowLabel: 'low percents',
        tip: 'Easy against big hurtboxes. Small characters like Pikachu can escape with SDI; cut it off after two nairs then.',
      },
      'palutena-dthrow-fair': { tip: 'Buffer the forward air right after the throw.' },
      'palutena-dthrow-nair-uair': {
        windowLabel: 'low to mid percents',
        tip: 'One of her highest damage grab routes. A second nair works instead of up air.',
        steps: { 3: { label: 'Land → FH Uair', note: 'Land after the nair and jump again.' } },
      },
      'palutena-fair-grab': {
        tip: 'This is how forward air opens up her grab game, followed by one of the down throw routes.',
        steps: {
          0: { label: 'SH Fair right before landing' },
          1: { note: 'Grab right after landing, taking a step forward if needed.' },
        },
      },
      'palutena-dair-bair': {
        tip: 'Does not work at very low percents; middleweights need around 20 to 40%.',
        steps: { 0: { label: 'SH Dair on a grounded opponent' } },
      },
      'palutena-dthrow-bair': {
        windowLabel: 'high percents',
        tip: 'At high percents down throw sets up KO confirms into back air. Use back air sparingly so it does not get stale.',
      },
      'palutena-fthrow-flame': {
        windowLabel: 'high percents',
        tip: 'Out of forward throw, Explosive Flame becomes a KO confirm at high percents instead of a readable neutral move.',
      },
    },
  },

  pikachu: {
    meta: [
      'Pikachu’s biggest strengths are fast frame data and one of the most dominant edgeguard games in the cast. The grab offers a lot: down throw leads into every aerial at low to mid percents, and up throw into Thunder from 55%.',
      'In exchange Pikachu has short grab range, and almost all normal attacks have little reach. As a lightweight it dies early, and missed confirms make kills hard.',
    ],
    strengths: ['Fast frame data', 'One of the strongest edgeguard games', 'Strong grab and throw game'],
    weaknesses: ['Short grab range', 'Little range on almost all normals', 'Light and easy to kill early'],
    combos: {
      'pikachu-utilt-uair-bair': {
        windowLabel: 'low percents',
        tip: 'After two or three up tilts go into up air, and finish with back air or nair.',
      },
      'pikachu-dthrow-uair': {
        windowLabel: 'low to mid percents',
        tip: 'Down throw leads into every aerial. Up air keeps the opponent above Pikachu.',
      },
      'pikachu-dthrow-utilt': { windowLabel: 'low percents', tip: 'At low percents, the shortest path into an up tilt chain.' },
      'pikachu-nair-usmash': {
        title: 'Nair (landing) → Up Smash',
        windowLabel: 'kill percents',
        tip: 'Pikachu’s most reliable way to confirm KOs. Down smash works as well.',
        steps: { 0: { label: 'SH Nair, land' } },
      },
      'pikachu-uthrow-thunder': { tip: 'A KO confirm from 55%. As the damage keeps rising, the route gets less reliable.' },
      'pikachu-nair-dragdown-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, nair can be fast-fallen to drag the opponent down and extend the combo, alternating with up tilts depending on where the opponent DIs.',
        steps: { 0: { label: 'Nair, fast-fallen', note: 'The fast fall drags the opponent down with it.' } },
      },
      'pikachu-bair-bair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, back air chains into itself several times at low percents, enough for a pseudo Wall of Pain over the ledge.',
      },
      'pikachu-uair-bridge-fair': {
        title: 'Up Air Bridge → Forward Air',
        windowLabel: 'carries the opponent offstage',
        tip: 'According to SmashWiki, up air bridges carry the opponent offstage, where Pikachu picks them up with forward air. How many up airs connect depends on DI.',
        steps: { 3: { note: 'The finisher off the stage.' } },
      },
      'pikachu-dthrow-thunder': {
        windowLabel: 'high percents',
        tip: 'At high percents, the alternative to up throw when the opponent flies too high.',
      },
      'pikachu-utilt-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up tilt links into Pikachu’s aerials at low to mid percents.',
      },
      'pikachu-utilt-nair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up tilt links into Pikachu’s aerials at low to mid percents.',
      },
      'pikachu-nair-dsmash': {
        title: 'Nair (fast-fallen) → Down Smash',
        tip: 'According to SmashWiki, thanks to its low endlag the fast-fallen nair links into every tilt, grab and both smashes.',
        steps: { 0: { label: FF_NAIR }, 1: { label: 'Down Smash, all hits' } },
      },
      'pikachu-nair-ftilt': {
        title: 'Nair (fast-fallen) → Forward Tilt',
        tip: 'According to SmashWiki, the fast-fallen nair links into every tilt.',
        steps: { 0: { label: FF_NAIR }, 1: { note: 'Unangled value.' } },
      },
      'pikachu-fair-da-ko': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, thanks to its low endlag forward air links into dash attack at high percents and kills with it.',
        steps: { 1: { label: 'Dash Attack, clean hit' } },
      },
      'pikachu-dthrow-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw links into every aerial at low to mid percents.',
      },
      'pikachu-dthrow-bair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw links into every aerial at low to mid percents.',
      },
      'pikachu-dthrow-uair-chain': {
        windowLabel: 'low percents',
        tip: 'According to Game8, go for the up air as soon as the opponent bounces up from the down throw.',
        steps: { 4: { note: 'According to Game8, nair works instead of the third up air too.' } },
      },
      'pikachu-dthrow-utilt-uair-bair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, up tilt also links after down throw at low percents.',
        steps: { 5: { note: 'According to Game8, nair works as the finisher too.' } },
      },
      'pikachu-uthrow-uair-chain': {
        windowLabel: 'low percents',
        tip: 'According to Game8, the route does not work at higher percents because up throw launches harder; down throw is usually the better pick.',
        steps: { 4: { note: 'According to Game8, nair works instead of the third up air too.' } },
      },
    },
  },

  olimar: {
    meta: [
      'Olimar fights through his Pikmin: managing their order decides range, damage and kill power. His up smash is fast and strong, and depending on DI down tilt chains into itself, up tilt, smash attacks and aerials.',
      'Without Pikmin he has almost no defense, and he can only pluck new ones on the ground. With Pikmin his Winged Pikmin recovery gets noticeably worse, and as a lightweight he dies early.',
    ],
    strengths: ['Pikmin management for range and kill power', 'Fast, strong up smash', 'Down tilt as a versatile starter'],
    weaknesses: ['Hardly any defense without Pikmin', 'Pikmin can only be plucked on the ground', 'Light, with a mediocre recovery'],
    combos: {
      'olimar-dthrow-fair': {
        windowLabel: 'low percents',
        tip: 'With a Blue Pikmin the throw gets too strong and the route does not connect.',
      },
      'olimar-utilt-uair': { tip: 'A simple route for around 20% damage.' },
      'olimar-nair-utilt': {
        title: 'Nair (without the last hit) → Up Tilt',
        tip: 'After the up tilt, look for up smash or up air.',
        steps: { 0: { label: 'SH Nair, land before the last hit' } },
      },
      'olimar-usmash-fair': {
        title: 'Up Smash → Jump → Forward Air',
        windowLabel: 'low percents',
        tip: 'Around 32% damage and safer than a second up smash.',
        steps: { 1: { label: 'Jump → Forward Air' } },
      },
      'olimar-usmash-usmash': {
        windowLabel: 'low percents',
        tip: 'Around 37% damage, but the second up smash can be air dodged.',
      },
      'olimar-dtilt-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down tilt chains into itself, especially against fast fallers, into up tilt, into smash attacks and into aerials.',
      },
      'olimar-da-uair': {
        tip: 'According to SmashWiki, only very early in the stock: between 0 and 10%, dash attack links into up air.',
      },
      'olimar-uthrow-blue': {
        title: 'Up Throw with a Blue Pikmin',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, with three Pikmin and a Blue in front this is the strongest up throw in the whole game. Blue drastically raises the damage and knockback of throws; the Pikmin order is the real move here.',
        steps: { 1: { note: 'Value for Blue; the other colors throw much weaker.' } },
      },
      'olimar-dthrow-pikmin': {
        windowLabel: 'higher percents',
        tip: 'When forward air no longer reaches at higher percents, Pikmin Throw catches the opponent.',
        steps: { 2: { note: 'Damage depends on the Pikmin color.' } },
      },
    },
  },

  wario: {
    meta: [
      'Wario has one of the best air games in Smash: very high air acceleration and air speed, plus strong combo potential that builds damage quickly and leads into KO confirms, above all into Wario Waft.',
      'His short range and lack of projectiles leave him vulnerable, and forward tilt, back air and all of his smash attacks have high endlag or slow startup.',
    ],
    strengths: ['One of the best air mobilities in the game', 'Strong combo potential', 'Wario Waft as a kill off confirms'],
    weaknesses: ['Short range, no projectiles', 'Slow smash attacks with lots of endlag'],
    combos: {
      'wario-uthrow-uair': { windowLabel: 'low percents', tip: 'Around 25% damage, only while the opponent is at low percent.' },
      'wario-utilt-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'Strong against opponents approaching Wario. Up tilt has a lot of vertical range.',
      },
      'wario-nair-nair-uair': {
        windowLabel: 'low percents',
        tip: 'If only one nair hit connects, the chain breaks.',
        steps: { 0: { note: 'Both nair hits have to connect.' } },
      },
      'wario-uair-utilt-nair-uair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, over 50% damage: complex, but rewarding.',
      },
      'wario-uair-waft': {
        windowLabel: 'mid to high percents',
        tip: 'Only with a charged Waft. Then up air is one of the easiest kill confirms in the game.',
        steps: { 1: { label: 'Wario Waft (charged)', note: 'The longer the Waft has charged, the earlier it kills.' } },
      },
      'wario-utilt-waft': {
        windowLabel: 'mid to high percents',
        tip: 'Up tilt confirms into Waft at mid to high percents.',
        steps: { 1: { label: 'Wario Waft (charged)' } },
      },
      'wario-ztd-waft': {
        title: 'Up Tilt → Wario Waft (fully charged)',
        windowLabel: 'from 0%',
        tip: 'According to SmashWiki, Wario combos into Waft from 0% and, depending on charge and rage, takes the whole stock against most of the roster. From half charge it carries.',
        steps: {
          1: {
            label: 'Wario Waft (fully charged)',
            note: 'Fully charged it deals 27% base damage instead of the 20% from the other routes.',
          },
        },
      },
    },
  },
};
