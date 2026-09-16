import type { GuideTexts } from './types';

const FULL_BALL = 'Shadow Ball, fully charged';
const CONFUSION_VALUE = 'Value from SmashWiki (7 × 1.15% plus 1%) because Ultimate Frame Data lists none for Confusion.';
const TOE_ONLY = 'Only the tip of the foot deals full damage.';
const FRONT_HIT = 'Front hit counted; from behind 13%.';

/** Englisch für src/data/guides-d-plus.ts. */
export const TEXT: GuideTexts = {
  'mii-swordfighter': {
    meta: [
      'Mii Swordfighter’s biggest strength is its freely chosen specials: Gale Strike counts as its best move, and according to SmashWiki almost any aerial can be set up off down throw. Back and up air are fast and strong.',
      'For a swordfighter, though, it has the worst disjoints in the game, its mobility lags behind other ranged characters, and its grab game is below average.',
    ],
    strengths: ['Very flexible choice of specials', 'Gale Strike as a confirm tool', 'Down throw sets up almost any aerial'],
    weaknesses: ['Worst disjoints among swordfighters', 'Sluggish mobility', 'Below average grab game'],
    combos: {
      'swordfighter-nair-dtilt-da': {
        tip: 'The landing nair is its most reliable way in on the ground.',
        steps: { 0: { label: 'SH Nair, falling' } },
      },
      'swordfighter-fair-utilt': {
        title: 'Forward Air (2 hits) → Up Tilt',
        tip: 'According to Game8, with the right angle an up air can still be added.',
        steps: { 0: { label: 'SH Fair, first two hits' } },
      },
      'swordfighter-dthrow-uair': { tip: 'Its widest window, according to Game8 from 0 to 90%.' },
      'swordfighter-dtilt-fair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, a reliable follow-up off down tilt at low percents, pure damage building.',
      },
      'swordfighter-galestrike-herospin': {
        title: 'Gale Strike → Hero’s Spin (at the ledge)',
        tip: 'According to SmashWiki, a landed Gale Strike confirms into back, forward and up air, Chakram and Hero’s Spin; at the ledge, Hero’s Spin takes stocks from around 40% this way. Its strongest tool of all.',
      },
      'swordfighter-stonescabbard-ko': {
        title: 'Stone Scabbard out of Shield',
        tip: 'According to SmashWiki, the landing hit KOs near the sides of the stage from around 110%, and since it comes out of shield it is the punish of choice there.',
        steps: { 0: { note: 'The landing hit carries the knockback, not the rise.' } },
      },
      'swordfighter-fair-fsmash': {
        title: 'Forward Air (1st hit) → Forward Smash',
        tip: 'Game8 explicitly lists the route as a kill combo. If both fair hits land, the smash no longer connects; up smash works instead of forward smash too.',
        steps: { 0: { label: 'Fair, 1st hit only' } },
      },
      'swordfighter-dthrow-herospin': {
        tip: 'According to SmashWiki, down throw confirms into up air and Hero’s Spin at high percents, its strongest KO confirm.',
      },
      'swordfighter-bair-herospin': {
        windowLabel: 'tight percent windows',
        tip: 'According to SmashWiki, a kill confirm within certain percent windows. Find the windows in training first.',
        steps: { 1: { label: 'Aerial Hero’s Spin' } },
      },
    },
  },

  mewtwo: {
    meta: [
      'Mewtwo’s damage output is very high, especially on the ground, and according to SmashWiki his aerials are among the best in the game: fast startup, little landing lag, great range and lots of power. His up and back throw are among the strongest in the cast, and his recovery counts as the best of all.',
      'In exchange he is very light and has a big hurtbox thanks to his tail; he gets hit easily and dies early. He can hardly escape combos, and despite many kill options he struggles to land them.',
    ],
    strengths: ['Very high damage', 'Aerials among the best in the game', 'Best recovery in the game'],
    weaknesses: ['Very light, big hurtbox', 'Can hardly escape combos', 'Kill options are hard to land'],
    combos: {
      'mewtwo-dtilt-fair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, around 19% from two inputs. Mewtwo’s simplest way in.',
      },
      'mewtwo-dtilt-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, only works from close range, ideal against incoming dash attacks.',
      },
      'mewtwo-da-fair': {
        windowLabel: 'low percents',
        tip: 'Around 27% according to Game8, the highest damage of the three basic routes.',
      },
      'mewtwo-dthrow-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw also combos into the upward-angled forward tilt at low percents.',
      },
      'mewtwo-dthrow-fair': {
        windowLabel: 'mid to high percents',
        tip: 'Same throw, different window: according to SmashWiki and Game8, forward air ends the stock from mid percents.',
      },
      'mewtwo-shadowball-usmash': {
        windowLabel: 'depends on charge and percent',
        tip: 'According to SmashWiki, depending on charge and percent, Shadow Ball combos into practically any of his faster moves: down tilt, up tilt, grab, dash attack, forward air and up smash.',
        steps: { 0: { label: FULL_BALL } },
      },
      'mewtwo-confusion-fair': {
        title: 'Confusion (aerial) → Forward Air',
        tip: 'According to SmashWiki, aerial Confusion combos into forward air at 140% and secures the KO, unless the opponent has a combo breaker.',
        steps: { 0: { label: 'Aerial Confusion', note: CONFUSION_VALUE } },
      },
      'mewtwo-bthrow-ko': {
        title: 'Back Throw at the Ledge',
        tip: 'According to SmashWiki, one of the strongest back throws in the game and one of his most useful kill options: near the ledge it takes middleweights from around 100%.',
      },
      'mewtwo-shadowball-da': {
        tip: 'According to SmashWiki, Shadow Ball combos into almost any move: down tilt, up tilt, grab, dash attack, forward air and up smash.',
        steps: { 0: { label: FULL_BALL } },
      },
      'mewtwo-utilt-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, one of Mewtwo’s best starters: at low percents its hitboxes send the opponent at an angle that leads into the next up tilt.',
      },
      'mewtwo-utilt-usmash': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up tilt combos into up smash, into itself, into aerials and into Confusion at low percents.',
      },
      'mewtwo-utilt-confusion': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, one of the follow-ups off up tilt at low percents.',
        steps: { 1: { note: CONFUSION_VALUE } },
      },
      'mewtwo-dair-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, the down air sourspot combos into the tilts at low percents.',
      },
      'mewtwo-dair-fair': {
        windowLabel: 'mid percents',
        tip: 'At mid percents, according to SmashWiki, the sourspot leads into the aerials instead of the tilts.',
      },
      'mewtwo-fair-dtilt': {
        tip: 'According to SmashWiki, forward air combos into down tilt and Shadow Ball, among others.',
        steps: { 1: { label: 'Land → Down Tilt' } },
      },
      'mewtwo-uair-shadowball': {
        title: 'Up Air on Landing → Shadow Ball',
        tip: 'According to SmashWiki, up air placed just before landing combos into every aerial and into Shadow Ball.',
        steps: { 0: { label: 'Up Air just before landing' }, 1: { label: 'Shadow Ball, uncharged' } },
      },
      'mewtwo-nair-usmash': {
        title: 'Fast-Fall Nair → Up Smash',
        tip: 'According to SmashWiki, the multi-hits drag the opponent down during the fast fall; the most reliable KO confirm from there is up smash, which according to SmashWiki takes middleweights around 90% when all hits connect.',
      },
      'mewtwo-uair-fair': {
        title: 'Double Jump Up Air → Forward Air',
        windowLabel: 'situational',
        tip: 'According to SmashWiki, a situational KO confirm: up air during a rising double jump links into forward air.',
        steps: { 0: { label: 'Double jump → rising Up Air' } },
      },
      'mewtwo-shadowball-fair': {
        windowLabel: 'depends on charge and percent',
        tip: 'According to SmashWiki, depending on charge, Shadow Ball can lead into forward air and carry all the way to the KO.',
        steps: { 0: { label: FULL_BALL } },
      },
    },
  },

  zelda: {
    meta: [
      'Zelda is a zoning glass cannon: she has an unusual number of kill options with heavyweight-level power, many of which start surprisingly fast and have transcendent priority. Farore’s Wind is one of the best recovery moves in the game.',
      'Her finishers demand precise sweetspots, though; the Lightning Kicks only connect properly at the tip of the foot. Her mobility is among the worst in the game, she lacks fast projectiles of her own, and her disadvantage state is one of the weakest of all.',
    ],
    strengths: ['Many kill options with enormous power', 'Fast attacks with transcendent priority', 'Farore’s Wind as a top recovery'],
    weaknesses: ['Finishers need precise sweetspots', 'Mobility among the worst in the game', 'Very weak disadvantage state'],
    combos: {
      'zelda-uthrow-uair': {
        windowLabel: 'low percents',
        tip: 'Around 30% off a grab according to Game8. Zelda’s most reliable punish.',
      },
      'zelda-utilt-usmash': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up tilt combos into itself, jab and up smash at low percents.',
      },
      'zelda-dtilt-fair': {
        windowLabel: 'from around 30%',
        tip: 'From around 30%, down tilt sends the opponent high enough for the Lightning Kick.',
        steps: { 1: { note: TOE_ONLY } },
      },
      'zelda-nair-utilt': {
        tip: 'According to SmashWiki, nair starts combos when used out of a short hop with a fast fall.',
        steps: { 0: { label: 'Nair with fast fall', note: FRONT_HIT } },
      },
      'zelda-utilt-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up tilt combos into nair and the Lightning Kick from low to mid percents, her second opener besides down tilt.',
        steps: { 1: { note: TOE_ONLY } },
      },
      'zelda-dthrow-nair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw is a reliable starter into nair at low percents, the safe version when the Lightning Kick is too risky.',
        steps: { 2: { note: FRONT_HIT } },
      },
      'zelda-fthrow-phantom': {
        title: 'Forward Throw → Prepared Phantom',
        windowLabel: 'with a Phantom prepared beforehand',
        tip: 'According to SmashWiki, with the right timing all her throws lead into a prepared Phantom, for damage or as a KO confirm. Zelda depends on exactly that: without the Phantom she lacks a reliable finisher.',
        steps: {
          2: { label: 'Release the Phantom', note: 'The Phantom has to be prepared beforehand; the throw only provides the timing.' },
        },
      },
      'zelda-dthrow-bair': {
        title: 'Down Throw → Lightning Kick (backward)',
        windowLabel: 'low to mid percents',
        tip: 'According to Game8, the route kills near the ledge depending on the percent, but only with a clean sweetspot.',
      },
      'zelda-phantom-dair': {
        tip: 'Game8 calls the route extremely hard to execute: the Phantom holds the opponent in place, and the down air spikes them offstage.',
        steps: { 0: { label: 'Build up and release the Phantom' }, 1: { label: 'Dash → Jump' } },
      },
      'zelda-utilt-nair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up tilt links into nair and the Lightning Kick from low to mid percents.',
        steps: { 1: { note: FRONT_HIT } },
      },
      'zelda-utilt-uair': {
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, up tilt links into up air at mid percents.',
        steps: { 1: { label: 'FH Uair, clean hit' } },
      },
      'zelda-dtilt-da': {
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, down tilt links into dash attack and the Lightning Kick at mid percents.',
        steps: { 1: { note: 'Early inner hit counted; outer 11%.' } },
      },
      'zelda-dtilt-bair-ko': {
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, down tilt can lead into forward or back air as a KO combo.',
        steps: { 1: { note: TOE_ONLY } },
      },
      'zelda-dthrow-fair-ko': {
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, down throw is even a third kill throw at mid percents because it leads into the Lightning Kick.',
        steps: { 2: { note: TOE_ONLY } },
      },
    },
  },
};
