import type { GuideTexts } from './types';

const FALLING_SH_NAIR = 'SH Nair, falling';
const SH_NAIR_LAND = 'SH Nair, land';
const JAB3 = '3-hit Jab';
const FF_NAIR = 'Nair with fast fall';
const JAB_BOTH = 'Jab (both hits)';
const JUMP_REST = 'Jump → Rest';
const DANCE_DOWN = 'Double-Edge Dance, follow-up hits down';
const CLOSE_EGG = 'Breegull Blaster, point-blank egg';
const BAIR_FIRST = 'Bair, first hit';
const GAME8_NAIR_HIT = 'Game8 does not say which nair hit. The first one is counted.';
const UTHROW_BOWSER = 'According to SmashWiki, up throw links into forward, neutral and up air at low percents.';
const UTILT_BOWSER = 'According to SmashWiki, up tilt leads into forward, neutral and up air at low percents.';
const OUTER_HITBOX = 'Outer hitbox counted; up close 13%.';
const LANDED_NAIR_KO = 'According to SmashWiki, the landed nair opens up KO confirms into forward, back and up air.';

/** Englisch für src/data/guides-c-minus.ts. */
export const TEXT: GuideTexts = {
  'banjo-and-kazooie': {
    meta: [
      'The duo’s projectiles, Egg Firing, Breegull Blaster and Rear Egg, build setups, and Wonderwing makes Banjo invincible for a short time. Down tilt for edgeguarding plus up tilt and forward air are the most reliable tools.',
      'The moveset stays inconsistent, though: problematic hitboxes, lots of landing lag, and frame data, damage and knockback that are unremarkable for their weight class. The hardest routes demand a lot of technique for little damage, and their weight makes the duo easy to combo.',
    ],
    strengths: ['Projectiles for setups', 'Wonderwing with invincibility', 'Up tilt and forward air as a solid base'],
    weaknesses: ['Inconsistent hitboxes, lots of landing lag', 'Unremarkable stats for their weight class', 'Easy to combo'],
    combos: {
      'banjo-uair-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'The third hit of the claw combination launches upward, and the juggle takes over from there.',
      },
      'banjo-utilt-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'The ground version of the same idea. Up tilt is their most reliable starter.',
      },
      'banjo-nair-grab-dthrow': {
        tip: 'According to Game8, down smash, jab or forward tilt also work after the down throw.',
        steps: { 0: { label: SH_NAIR_LAND } },
      },
      'banjo-dthrow-utilt': {
        windowLabel: 'the other half of the 50/50',
        tip: 'According to SmashWiki, down throw sets up a guaranteed 50/50 in most matchups: the opponent has to guess between up tilt and up smash; this is the up tilt side.',
      },
      'banjo-dthrow-nair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, nair drags the opponent down and opens up almost all of the duo’s ground moves, a reliable follow-up off down throw.',
        steps: { 2: { note: 'Drags the opponent down.' } },
      },
      'banjo-blaster-ladder': {
        title: 'Breegull Blaster: Point-Blank Eggs in a Row',
        windowLabel: 'across wide percent ranges',
        tip: 'According to SmashWiki, Breegull Blaster’s point-blank eggs chain into each other and form a ladder. How many shots connect is open; three are listed here, and up tilt or nair can finish it.',
        steps: { 0: { label: CLOSE_EGG }, 1: { label: CLOSE_EGG }, 2: { label: CLOSE_EGG } },
      },
      'banjo-dthrow-usmash': {
        tip: 'According to SmashWiki, a guaranteed 50/50: the opponent has to guess between up tilt and up smash.',
      },
      'banjo-rearegg-wonderwing': {
        windowLabel: 'from around 80%',
        tip: 'Game8 lists the route for higher percents; forward air works instead of Wonderwing too.',
        steps: { 0: { label: 'Lay and throw Rear Egg' }, 1: { note: 'Only five uses per stock.' } },
      },
      'banjo-blaster-utilt': {
        title: 'Breegull Blaster (close) → Up Tilt',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, a single close-range shot combos into up tilt at high percents, a true KO confirm.',
        steps: { 0: { label: 'Point-blank Breegull Blaster shot' } },
      },
    },
  },

  'bowser-jr': {
    meta: [
      'Bowser Jr. sits in the Clown Car: his entire moveset is disjointed, and the car takes hits instead of him. Clown Cannon and Mechakoopa give him two projectiles, and Clown Kart Dash’s speed makes up for his weak approach.',
      'His recovery is very easy to gimp, he has hardly any out of shield options, and his grab is one of the slowest without a tether. On top of that come few reliable kill options.',
    ],
    strengths: ['Completely disjointed moveset', 'Two projectiles plus Clown Kart Dash', 'Up air for juggling'],
    weaknesses: ['Recovery is easy to gimp', 'Hardly any out of shield options', 'Few reliable kill options'],
    combos: {
      'bowserjr-utilt-uair': {
        tip: 'Two up tilts until the opponent lifts off, then jump after them. According to SmashWiki, up tilt combos into itself from around 10%.',
      },
      'bowserjr-dair-da': { tip: 'Early in the stock, the simplest follow-up from the air.' },
      'bowserjr-kart-dair-fair': {
        tip: 'According to Game8, back air works instead of forward air and carries further.',
      },
      'bowserjr-kart-uair': {
        tip: 'With an input, according to Game8 from 10 to 40%; without one only from 20 to 60%.',
        steps: { 0: { label: 'Clown Kart Dash with input' } },
      },
      'bowserjr-uthrow-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up throw leads into up air at low percents.',
      },
      'bowserjr-uair-chain': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up air chains into itself up to five times; three hits are listed here, and how many connect depends on weight and DI.',
      },
      'bowserjr-dthrow-kart': {
        windowLabel: 'tech chase at mid percents',
        tip: 'According to SmashWiki, down throw sets up tech chases into Clown Kart Dash at mid percents. It is not guaranteed; you read the tech option.',
        steps: { 1: { note: 'The opponent lands on the ground and has to tech.' } },
      },
      'bowserjr-jab-ledge': {
        title: 'Jab Chain to the Finisher (at the ledge)',
        tip: 'According to SmashWiki, the jab finisher has remarkable knockback and KOs at the ledge from around 100%, one of his few reliable kill options.',
        steps: {
          0: { label: 'Jab chain to the finisher', note: 'Each rapid jab hit deals 0.6%, the finisher 3.6%.' },
        },
      },
      'bowserjr-fthrow-ko': {
        title: 'Forward Throw as a Kill',
        tip: 'According to SmashWiki, forward throw KOs most middleweights from around 150% without rage; back throw needs about 160%.',
      },
    },
  },

  lucario: {
    meta: [
      'Lucario’s aura makes him unique: the damage and knockback of all his attacks scale with his own percent, and at maximum aura his smashes are among the strongest in the game. Force Palm is a ranged tool from afar and a command grab up close.',
      'That is exactly what makes comebacks hard, though: combos and kill options only open up once he has taken a lot of damage. On top of that come sluggish frame data, smashes starting on frame 15 at the earliest, and a recovery whose Extreme Speed has 46 frames of startup.',
    ],
    strengths: ['Aura scales every attack', 'Smashes extremely strong at max aura', 'Force Palm as a ranged and grab tool'],
    weaknesses: ['Comebacks are hard: aura needs his own damage', 'Sluggish frame data', 'Extreme Speed with 46 frames of startup'],
    combos: {
      'lucario-dtilt-fair-uair': {
        tip: 'Game8’s percent windows apply to Lucario at 0%. With more aura they shift, and every hit deals much more damage.',
      },
      'lucario-utilt-fair-uair': {
        tip: 'According to SmashWiki, up tilt combos into itself at low percents and into nair, fair and up air at mid percents.',
      },
      'lucario-nair-jab': {
        tip: 'The easiest way in: nair while falling, then let the jab run through.',
        steps: { 0: { label: FF_NAIR }, 1: { label: JAB3 } },
      },
      'lucario-uthrow-uair': {
        tip: 'His widest throw window; according to SmashWiki, up and down throw are both good starters.',
      },
      'lucario-dthrow-fair-uair': {
        tip: 'According to SmashWiki, his highest damage route at low percents.',
      },
      'lucario-utilt-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up tilt combos into itself at low percents and into nair, forward air and up air from mid percents.',
      },
      'lucario-forcepalm-ko': {
        title: 'Point-Blank Force Palm',
        windowLabel: 'below 40% with max aura',
        tip: 'From a distance Force Palm is a projectile, up close a command grab. According to SmashWiki, at max aura it throws the entire cast off the stage below 40%. Lucario’s most brutal comeback option.',
        steps: {
          0: { label: 'Force Palm as a command grab', note: 'Value without the aura bonus. At max aura it is around 25%.' },
        },
      },
    },
  },

  jigglypuff: {
    meta: [
      'Jigglypuff’s strength is her air game: apart from back air, all her aerials have lingering hitboxes, and a well spaced back air is even safe on shield. She is notorious at edgeguarding; with clean timing she gimps even the longest recoveries without putting herself at risk.',
      'In exchange she can take practically nothing: her stats add up to the worst endurance in the entire game. Her ground game is also very problematic, with too little range and too little speed to build damage there.',
    ],
    strengths: ['Outstanding air game with lingering hitboxes', 'Notorious edgeguarding', 'Rest as the reward for any hit'],
    weaknesses: ['Worst endurance in the game', 'Very weak ground game', 'Short range'],
    combos: {
      'jiggly-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, the damage builder before the actual Rest combo comes.',
      },
      'jiggly-fair-fair': {
        windowLabel: 'mid percents or lower',
        tip: 'Forward air has a lingering hitbox, ideal for pushing the opponent toward the ledge.',
      },
      'jiggly-pound-rest': {
        windowLabel: 'mid percents or lower',
        tip: 'Game8’s Rest route: Pound puts the opponent in position, and Rest ends the stock.',
        steps: { 0: { label: 'Jump → Pound' }, 1: { label: JUMP_REST } },
      },
      'jiggly-uair-rest': {
        windowLabel: 'mid percents or lower',
        tip: 'According to SmashWiki, Rest is guaranteed when Jigglypuff lands right after the up air hit.',
        steps: { 1: { label: JUMP_REST } },
      },
      'jiggly-fair-rest': {
        title: 'Forward Air (late frames) → Rest',
        tip: 'According to SmashWiki, a hit with the last frames of forward air leads into an inescapable Rest, even stronger in the air or with lots of rage.',
        steps: { 0: { label: 'Fair, last frames' } },
      },
      'jiggly-jab-bair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, jab is remarkably fast and combos into back air, one of the few ways to get something out of her ground game.',
        steps: { 0: { label: JAB_BOTH } },
      },
      'jiggly-utilt-rest': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, the Rest confirm for low percents, especially on platforms where the opponent does not fly far enough away.',
      },
      'jiggly-dair-rest': {
        title: 'Down Air → Rest (“Drill Rest”)',
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down air combos into grab and Rest; as the “Drill Rest” it is one of the character’s best known confirms.',
        steps: { 0: { label: 'SH Dair (drill)', note: 'The multi-hits hold the opponent in place; the value is per hit.' } },
      },
      'jiggly-wall-of-pain': {
        windowLabel: 'offstage, depends on the distance to the blast zone',
        tip: 'According to SmashWiki, offstage Jigglypuff strings forward airs together until the opponent reaches the blast zone. The distance decides how many; three are listed here.',
      },
      'jiggly-jab-da-ko': {
        windowLabel: 'unusually low kill percents',
        tip: 'According to SmashWiki, jab links into dash attack, which kills at unusually low percents.',
        steps: { 0: { label: JAB_BOTH }, 1: { label: 'Dash Attack, early hit' } },
      },
      'jiggly-ftilt-jab': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, forward tilt links into grab and jab and can jab lock at low percents.',
        steps: { 1: { label: JAB_BOTH } },
      },
      'jiggly-rising-dair-rest': {
        title: 'Rising Down Air → Rest (“Rising Dair Rest”)',
        windowLabel: 'tight window, depends on the opponent',
        tip: 'According to SmashWiki, the second big Rest confirm off down air next to the Drill Rest: down air while rising, then buffer a jump and Rest. The percent window is tight and differs from opponent to opponent.',
        steps: {
          0: { label: 'Dair while rising', note: 'Per hit. How many connect depends on timing.' },
          1: { label: 'Buffered jump → Rest' },
        },
      },
    },
  },

  chrom: {
    meta: [
      'Chrom is Roy’s echo but plays differently: his Sealed Falchion has no sweetspot or sourspot and deals even damage along the whole blade, like Lucina’s Parallel Falchion. On top of that come great range, high mobility and fast startup frames.',
      'His up special is a completely different move: Soaring Slash resembles Ike’s Aether, offers almost no horizontal distance and only grabs the ledge once Chrom is falling again. That makes his recovery much worse than Roy’s Blazer.',
    ],
    strengths: ['Even damage along the whole blade', 'Great range and high mobility', 'Fast startup frames for pressure'],
    weaknesses: ['Soaring Slash without horizontal distance', 'Only grabs the ledge while falling', 'No sweetspot to reward spacing'],
    combos: {
      'chrom-fair-dance': {
        windowLabel: 'up to mid percents',
        tip: 'According to Game8, up to mid percents. Steer the follow-up hits down or up depending on the opponent’s DI.',
        steps: { 1: { label: DANCE_DOWN } },
      },
      'chrom-dthrow-soaring': {
        windowLabel: 'low percents',
        tip: 'According to Game8, around 30% damage off a grab. Chrom’s strongest punish early in the stock.',
      },
      'chrom-dthrow-nair-fair': {
        windowLabel: 'low percents',
        tip: 'At least 25% according to Game8, the safer version when the up special is too risky.',
      },
      'chrom-jab-rar-bair': {
        windowLabel: 'kill percents',
        tip: 'Like with Roy: according to SmashWiki, jab combos into a reverse back air, a very strong KO confirm.',
      },
      'chrom-nair-dance': {
        title: 'Nair (1st hit) → Double-Edge Dance',
        tip: 'According to SmashWiki, the first nair hit starts guaranteed combos; it just ends so quickly that the timing has to be right.',
        steps: { 0: { label: 'SH Nair, 1st hit' } },
      },
      'chrom-soaring-ledge': {
        title: 'Soaring Slash against Opponents on the Ledge',
        windowLabel: 'from 0%, while the opponent hangs on the ledge',
        tip: 'According to SmashWiki, Soaring Slash’s meteor is notorious: against opponents hanging on the ledge it KOs from 0%. The same property makes Chrom’s own recovery vulnerable, though.',
        steps: { 0: { note: 'The meteor hits downward. Chrom has to plan his own way back.' } },
      },
      'chrom-jab-dance': {
        tip: 'According to SmashWiki, Chrom’s jab effortlessly starts combos into grab, tilts, aerials or Double-Edge Dance.',
        steps: { 1: { label: DANCE_DOWN } },
      },
      'chrom-nair-fair-fair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, against opponents with little damage, but it takes some practice.',
        steps: { 0: { note: GAME8_NAIR_HIT } },
      },
      'chrom-nair-soaring': {
        windowLabel: 'mid to high percents',
        tip: 'According to Game8, from mid to high percents. SmashWiki lists follow-ups from nair or forward air into Soaring Slash under the name “Chrombo”.',
        steps: { 0: { note: GAME8_NAIR_HIT } },
      },
      'chrom-nair-fsmash': {
        windowLabel: 'mid to high percents',
        tip: 'According to Game8, the sequence works because Chrom’s forward smash comes out fast, and it can kill.',
        steps: { 0: { note: GAME8_NAIR_HIT } },
      },
    },
  },

  link: {
    meta: [
      'The Master Sword gives Link disjointed range and several strong kill moves, but his non-sword moves matter just as much: neutral air counts as a pillar of his neutral, and Remote Bomb is a tool for mind games, item combos, edgeguards, recovery and ledge trapping all at once.',
      'He belongs to the slower half of the cast, though, and struggles to keep up with fast characters. His sword moves have sluggish frame data, and Spin Attack travels such a predictable path that his recovery stays exploitable.',
    ],
    strengths: ['Disjointed range with strong kill moves', 'Remote Bomb as an all-purpose tool', 'Nair as a pillar of his neutral'],
    weaknesses: ['Slow against fast characters', 'Sluggish frame data on sword moves', 'Predictable recovery'],
    combos: {
      'link-dthrow-usmash': {
        windowLabel: 'low percents',
        tip: 'According to Game8, around 29% damage; thanks to Link’s fast grab, his strongest punish early in the stock.',
      },
      'link-dthrow-utilt': {
        windowLabel: 'low percents',
        tip: 'Less damage, but less risk: someone who SDIs out can punish the up tilt less than the up smash.',
      },
      'link-dtilt-fair': { tip: 'According to SmashWiki, a reliable combo starter into his aerials.' },
      'link-dthrow-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw leads into up tilt, up smash, nair and up air; up air does the most damage.',
      },
      'link-bair-bair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, back air combos into itself at low percents, the fastest way to turn one hit into two.',
      },
      'link-bair-triple': {
        windowLabel: 'low percents',
        tip: 'According to Game8, fast fall immediately after each back air. At the end, even the aerial Spin Attack fits.',
        steps: { 0: { label: 'SH Bair, first hit' }, 1: { label: BAIR_FIRST }, 2: { label: BAIR_FIRST } },
      },
      'link-nair-jab': {
        tip: 'According to Game8, good on your own approach and just as good when the opponent comes at Link.',
        steps: { 0: { label: FALLING_SH_NAIR }, 1: { label: JAB3 } },
      },
      'link-dtilt-spin': {
        windowLabel: 'higher percents',
        tip: 'According to SmashWiki, down tilt becomes a KO confirm into Spin Attack at higher percents: the same opener as the forward air route, just with a kill finisher.',
      },
      'link-nair-da': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, nair is the pillar of his neutral, and at high percents it sets up dash attack as a KO setup.',
      },
      'link-boomerang-fair': {
        title: 'Boomerang → Forward Air',
        windowLabel: 'wide range, ends stocks at high percents',
        tip: 'Game8 calls the route essential for every Link: it works across a wide range and ends the stock at high percents.',
        steps: { 0: { label: 'Boomerang' } },
      },
      'link-bair-spin': {
        title: 'Back Air (1st hit) → Spin Attack',
        tip: 'According to SmashWiki, the first back air hit on landing sets up up tilt, up smash or, strongest of all, Spin Attack.',
        steps: { 0: { label: 'Back Air, 1st hit, then land' } },
      },
    },
  },

  bowser: {
    meta: [
      'Bowser is the heaviest character in the game, has armor on several moves and therefore survives longer than anyone else. Unusually for a heavyweight, his mobility is above average with a fast dash and fast air speed, and several of his moves are among the most damaging of their kind.',
      'His frame data remains sluggish overall, though: he is vulnerable to pressure and especially to combos. He lacks fast landing options, and without a classic projectile he struggles against strong zoners.',
    ],
    strengths: ['Heaviest character, with armor', 'Above average mobility', 'Extremely damaging moves'],
    weaknesses: ['Sluggish frame data, very combo-prone', 'Hardly any safe landing options', 'No projectile against zoners'],
    combos: {
      'bowser-uthrow-fortress': {
        title: 'Up Throw → Jump → Whirling Fortress',
        windowLabel: 'low percents',
        tip: 'According to Game8, up to 36% damage, and according to SmashWiki, up throw combos into all his aerials at low percents.',
        steps: { 2: { label: 'Jump → Whirling Fortress' } },
      },
      'bowser-nair-utilt': {
        windowLabel: 'low percents',
        tip: 'The fast fall is mandatory; without it Bowser lands too late for the up tilt.',
        steps: { 0: { label: FF_NAIR } },
      },
      'bowser-fair-ftilt': {
        windowLabel: 'low percents',
        tip: 'Two heavy hits in a row, over 30% from two inputs.',
      },
      'bowser-utilt-bair': {
        tip: 'According to SmashWiki, up tilt leads into nair and back air; back air is by far the stronger finisher.',
      },
      'bowser-nair-fair': {
        title: 'Landing Nair → Forward Air',
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, the landing nair opens up KO confirms into forward, back and up air.',
        steps: { 0: { label: SH_NAIR_LAND } },
      },
      'bowser-nair-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, neutral air combos into forward, neutral and up air at low percents; thanks to low landing lag and a fast jumpsquat it is also Bowser’s best landing option.',
      },
      'bowser-usmash-ko': {
        tip: 'According to SmashWiki, the strongest up smash in the whole game: uncharged, the sweetspot KOs from around 80%.',
        steps: { 0: { note: 'The sweetspot is on the horns.' } },
      },
      'bowser-bomb-ko': {
        windowLabel: 'possible below 100%',
        tip: 'According to SmashWiki, Bowser Bomb KOs below 100%. Situational, but when it lands the stock is gone.',
      },
      'bowser-flyingslam-ko': {
        tip: 'According to SmashWiki, Flying Slam starts on frame 6 and throws with strong vertical knockback, a KO from around 130%. Bowser can steer the throw direction.',
        steps: {
          0: {
            label: 'Flying Slam (command grab)',
            note: 'Value from SmashWiki (18% base) because Ultimate Frame Data lists none. From a greater drop height it rises to up to 23.4% base.',
          },
        },
      },
      'bowser-utilt-fair': {
        windowLabel: 'low percents',
        tip: UTILT_BOWSER,
        steps: { 1: { note: OUTER_HITBOX } },
      },
      'bowser-utilt-uair': { windowLabel: 'low percents', tip: UTILT_BOWSER },
      'bowser-nair-usmash': {
        title: 'Nair (landing) → Up Smash',
        windowLabel: 'already at low percents',
        tip: 'According to SmashWiki, the landed nair is Bowser’s best combo starter and links into up tilt and up smash already at low percents.',
        steps: { 0: { label: SH_NAIR_LAND } },
      },
      'bowser-nair-bair-ko': {
        title: 'Nair (landing) → Back Air',
        windowLabel: 'kill percents',
        tip: LANDED_NAIR_KO,
        steps: { 0: { label: SH_NAIR_LAND } },
      },
      'bowser-uthrow-fair': {
        windowLabel: 'low percents',
        tip: `${UTHROW_BOWSER} Down throw, by contrast, has no follow-ups.`,
        steps: { 2: { note: OUTER_HITBOX } },
      },
      'bowser-uthrow-uair': { windowLabel: 'low percents', tip: UTHROW_BOWSER },
      'bowser-usmash-landing-bair-ko': {
        title: 'Up Smash (landing hit) → Back Air',
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, up smash’s weaker landing hit improves its combo potential and makes for a KO setup into back air.',
        steps: { 0: { label: 'Up Smash, landing hit only' } },
      },
    },
  },

  incineroar: {
    meta: [
      'Incineroar hits harder up close than almost anyone, and Revenge boosts every attack further after taking a hit. True to its wrestling roots, its biggest asset is the grab game.',
      'In exchange it moves the slowest in the whole game, on the ground and in the air, and can barely get in against campers and long-range opponents. Many kill moves have sourspots or poor knockback scaling, and its recovery barely travels horizontally.',
    ],
    strengths: ['Highest close-range damage', 'Revenge boosts every attack', 'Excellent grab game'],
    weaknesses: ['Slowest movement in the game', 'Inconsistent kill moves', 'Weak recovery'],
    combos: {
      'incineroar-dtilt-fair': { tip: 'According to Game8, Darkest Lariat works instead of forward air too.' },
      'incineroar-dtilt-utilt-uair': {
        windowLabel: 'around 20%',
        tip: 'Tighter range than the fair route, but more damage.',
      },
      'incineroar-dthrow-lariat': {
        title: 'Down Throw → Step In → Darkest Lariat',
        tip: 'Its widest throw window, according to Game8 from 0 to 70%.',
        steps: { 2: { label: 'Step in → Darkest Lariat' } },
      },
      'incineroar-dtilt-bair': {
        tip: 'According to SmashWiki, the widest window down tilt opens: from 40 to 170%. So it still carries when nothing else connects.',
      },
      'incineroar-dtilt-usmash': {
        tip: 'According to SmashWiki, only in a tight window between 50 and 69%: below that the opponent does not fly high enough, above it too far.',
      },
      'incineroar-bthrow-ko': {
        title: 'Back Throw as a Kill',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, depending on the situation its forward, back and up throw are among the strongest of their kind in the whole game, and back throw is the strongest of them.',
      },
      'incineroar-dtilt-chain': {
        windowLabel: 'from 0%, depends on weight',
        tip: 'According to Game8, the hardest but highest damage route. According to SmashWiki, down tilt chains into itself at low percents.',
      },
      'incineroar-dthrow-usmash': {
        title: 'Down Throw → Step In → Up Smash',
        tip: 'Only very early in the stock; beyond that, the step in has to be adjusted.',
        steps: { 2: { label: 'Step in → Up Smash' } },
      },
      'incineroar-dthrow-fsmash': {
        windowLabel: 'only at 0%',
        tip: 'According to Game8, only at 0% and only with a short delay, but over 35% off a single grab.',
        steps: { 2: { label: 'Wait briefly → Forward Smash' } },
      },
    },
  },

  kirby: {
    meta: [
      'Kirby’s strengths are fast frame data, high combo potential and a versatile moveset; his tilts are among the fastest in the game. Back air and dash attack give him real kill options, his small size and low crouch make him hard to hit, and Inhale steals the opponent’s neutral special.',
      'His low weight leads to early KOs, though, and with weak air speed and average ground mobility he has trouble getting in. Without reliable projectiles, mobile or camping opponents can wall him out.',
    ],
    strengths: ['Very fast tilts', 'High combo potential', 'Inhale steals the neutral special'],
    weaknesses: ['Light: dies early', 'Weak air speed', 'Short range, no projectiles'],
    combos: {
      'kirby-fair-fair': {
        windowLabel: 'low percents',
        tip: 'Let both forward airs run all the way; the third hit pushes the opponent further.',
      },
      'kirby-utilt-chain': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up tilt combos into itself, into aerials and even into Inhale.',
      },
      'kirby-dair-utilt': {
        windowLabel: 'low percents',
        tip: 'Down air drags the opponent down, and the tilt chain holds them in place.',
      },
      'kirby-nair-fsmash': {
        windowLabel: 'low percents',
        tip: 'Lots of damage early in the stock.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'kirby-fthrow-nair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, neutral, forward and down air are the most reliable follow-ups off forward throw at low percents; from mid percents, Final Cutter takes over.',
      },
      'kirby-da-ko': {
        title: 'Dash Attack (clean hit) at the Ledge',
        tip: 'According to SmashWiki, the clean dash attack hit KOs middleweights from around 100% from the ledge of Final Destination, one of his two real kill options.',
        steps: { 0: { label: 'Dash Attack (clean hit)' } },
      },
      'kirby-bthrow-ko': {
        title: 'Back Throw at the Ledge',
        tip: 'According to SmashWiki, back throw takes middleweights at the ledge from around 140%; up throw needs about 160% but works the same anywhere on the stage.',
      },
      'kirby-fthrow-cutter': {
        windowLabel: 'mid percents and higher',
        tip: 'According to Game8, only from mid percents; before that the opponent does not fly far enough.',
      },
      'kirby-dtilt-fsmash': {
        title: 'Down Tilt (trip) → Forward Smash',
        tip: 'According to SmashWiki, a trip off down tilt leads into dash attack, grab or forward smash.',
        steps: { 0: { label: 'Down Tilt, trips' } },
      },
      'kirby-fthrow-fair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, forward air is among the most reliable follow-ups off forward throw at low percents.',
      },
      'kirby-fthrow-uair': {
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, up air and Final Cutter are the most reliable follow-ups off forward throw at mid percents.',
      },
    },
  },

  'piranha-plant': {
    meta: [
      'Piranha Plant brings three unusual specials: Ptooie as an anti-air projectile, Poison Breath with massive damage and no flinch, and Piranhacopter with far-reaching hitboxes. Its tilts start juggles and combos, space and kill alike.',
      'Its mobility is unremarkable, its air acceleration is poor, and despite being a heavyweight its tall hurtbox makes it combo-prone. Its approach is predictable, and both projectiles are vulnerable to reflectors.',
    ],
    strengths: ['Three unusual, strong specials', 'Tilts as combo starters and kill options', 'Piranhacopter with great range'],
    weaknesses: ['Sluggish mobility and air acceleration', 'Tall hurtbox, combo-prone', 'Projectiles vulnerable to reflectors'],
    combos: {
      'plant-utilt-jab': {
        tip: 'Very early in the stock, the highest damage follow-up.',
        steps: { 1: { label: 'Full jab' } },
      },
      'plant-utilt-ftilt': {
        tip: 'The link window is tight. Game8 staggers the follow-ups in 10% steps.',
        steps: { 1: { label: 'Forward Tilt, both hits' } },
      },
      'plant-utilt-nair': { tip: 'From 20%, nair takes over because the opponent flies higher.' },
      'plant-utilt-fair': { tip: 'According to Game8, forward air deals the most damage in these routes.' },
      'plant-utilt-uair': { tip: 'The vertical version, good against opponents who try to escape upward.' },
      'plant-dtilt-fair': { tip: 'The widest route in the whole profile: according to Game8 from 10 to 100%.' },
      'plant-dtilt-nair': {
        tip: 'According to SmashWiki, down tilt is a versatile starter, also into forward tilt and forward air.',
      },
    },
  },
};
