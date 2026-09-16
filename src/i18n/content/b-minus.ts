import type { GuideTexts } from './types';

const FALLING_SH_NAIR = 'SH Nair, falling';
const FF_BAIR = 'SH Bair, fast-fallen';
const DAIR_GROUNDED = 'SH Dair on a grounded opponent';
const DAIR_EARLY = 'Early hit counted; the late hit deals 14%.';
const WALK_UP = (move: string): string => `Walk up → ${move}`;
const AERIAL_SHUTTLE = 'Aerial Shuttle Loop';
const CLAY = 'Clay Shooting (clay pigeon)';

/** Englisch für src/data/guides-b-minus.ts. */
export const TEXT: GuideTexts = {
  pichu: {
    meta: [
      'Pichu combos hard and kills early: its fast fall carries the combo game, its tiny hurtbox makes it hard to hit at all, and almost every aerial works for edgeguarding. According to SmashWiki, up tilt chains into itself for so long that entire zero-to-death combos are possible.',
      'In exchange Pichu is the lightest character in the game, takes recoil damage on every electric attack and has much shorter range than Pikachu. In disadvantage that quickly becomes deadly.',
    ],
    strengths: ['Up tilt chains all the way to zero-to-death', 'Tiny hurtbox, high mobility', 'Every aerial edgeguards'],
    weaknesses: ['Lightest character in the game', 'Recoil damage on electric attacks', 'Very short range'],
    combos: {
      'pichu-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'Pichu’s core route: start with up tilt at point-blank range and keep the chain going as long as the opponent does not fall out.',
      },
      'pichu-utilt-bair': { windowLabel: 'low percents', tip: 'The version for when the opponent lands behind Pichu.' },
      'pichu-nair-chain': {
        windowLabel: 'low percents',
        tip: 'The long route when the approach comes through neutral air.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'pichu-uthrow-thunder': {
        tip: 'According to SmashWiki, Pichu’s notorious KO setup: up throw reliably combos into Thunder.',
        steps: { 2: { note: 'The lightning bolt itself hits hardest.' } },
      },
      'pichu-dtilt-dair': {
        windowLabel: 'mid percents, near the ledge',
        tip: 'According to SmashWiki, the route works at mid percents near the ledge, and down air sends the opponent downward.',
      },
      'pichu-dtilt-uair': {
        windowLabel: 'into very high percents',
        tip: 'According to SmashWiki, up and down tilt are Pichu’s best starters; down tilt still combos into aerials at very high percents where nothing else connects.',
      },
      'pichu-ztd-lightning-loops': {
        windowLabel: 'from 0%',
        tip: 'SmashWiki lists Pichu as a zero-to-death character: string lightning loops, up tilts and up airs together, then finish with the down air spike. How many repetitions fit depends on weight and DI; only the core is listed here.',
        steps: {
          2: { label: FF_BAIR, note: 'The looping hits of back air while falling, the “lightning loops”.' },
          3: { label: FF_BAIR },
          5: { note: 'The spike ends the stock off the stage.' },
        },
      },
    },
  },

  inkling: {
    meta: [
      'Inkling moves and attacks fast, has strong offense on the ground and in the air, and strings hits together especially off up throw. The ink mechanic raises the damage output further, and Inkling is strong offstage too.',
      'Its strongest kill moves are unsafe, though, and without a reliable ground starter almost everything revolves around grabs. On top of that come questionable hitboxes on up tilt and neutral air.',
    ],
    strengths: ['Very fast movement and attacks', 'Up throw as the combo engine', 'Ink mechanic raises damage'],
    weaknesses: ['Kill moves are unsafe', 'No reliable ground starter', 'Questionable hitboxes on utilt and nair'],
    combos: {
      'inkling-utilt-utilt-nair': {
        tip: 'According to Game8, if the second up tilt follows immediately, the route even works against opponents at high percents. At 0%, up tilt combos into itself up to three times.',
      },
      'inkling-uthrow-nair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, the reliable follow-up off up throw. Inkling’s most important combo throw.',
      },
      'inkling-uthrow-uair': {
        windowLabel: 'high percents',
        tip: 'Same throw, different finisher: according to SmashWiki, the up air version kills at high percents.',
      },
      'inkling-bomb-bthrow': {
        tip: 'Opponents like to shield the bomb; according to Game8, run after them and throw, then both land and the opponent is inked.',
      },
      'inkling-roller-usmash': {
        tip: 'According to Game8, a deadly route once the opponent is buried. At low percents they mash out too quickly.',
        steps: { 0: { label: 'Splat Roller (buries)', note: 'Cancel the side special right after.' } },
      },
      'inkling-dthrow-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw has a wider choice of follow-ups than up throw. Jab, tilts, nair, forward and back air are all available.',
      },
      'inkling-bair-bair': {
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, back air chains into itself at mid percents, and over the ledge that turns into a Wall of Pain.',
      },
    },
  },

  ness: {
    meta: [
      'Ness’ aerials auto-cancel out of a short hop, have little landing lag and are fast, strong and disjointed; they build damage and kill. According to SmashWiki his grab game is among the best in the cast: down throw as a combo starter, forward and up throw for juggles, back throw as one of the strongest kill throws in the game.',
      'On the ground, however, he is slow, his normals have little range, and against big or disjointed hitboxes he has to play defensively. His recovery remains exploitable despite improvements.',
    ],
    strengths: ['Aerials auto-cancel out of a short hop', 'One of the best grab games in the cast', 'Back throw as an extremely strong kill throw'],
    weaknesses: ['Slow on the ground, little range', 'Limited approach options', 'Exploitable recovery'],
    combos: {
      'ness-pkfire-chain': {
        windowLabel: 'low percents',
        tip: 'According to Game8, the opponent has a harder time escaping when Ness follows up after every hit.',
        steps: { 1: { label: 'Follow → PK Fire' } },
      },
      'ness-pkfire-dthrow': {
        windowLabel: 'low percents',
        tip: 'The standard way from the flame into Ness’ throw game.',
        steps: { 1: { note: 'Grab while the opponent is stuck in the flame.' } },
      },
      'ness-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, a good answer to opponents who come down on you with lots of down airs.',
      },
      'ness-dthrow-fair': {
        tip: 'According to SmashWiki, down throw has guaranteed follow-ups into nair, fair and up air.',
      },
      'ness-magnet-bair': {
        title: 'PSI Magnet (aerial) → Back Air',
        tip: 'Game8’s advanced route: the magnet slows Ness’ fall and sets up the back air.',
        steps: { 0: { label: 'Aerial PSI Magnet', note: 'The magnet itself hits when it closes.' } },
      },
      'ness-magnet-fsmash': {
        title: 'PSI Magnet (grounded) → Forward Smash',
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki, the magnet’s grounded hitbox puts the opponent at exactly the distance where the sweetspotted forward smash hits.',
        steps: { 0: { label: 'Grounded PSI Magnet' } },
      },
      'ness-uair-ko': {
        title: 'Up Air near the Top Blast Zone',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, the last hit of up air has extremely high knockback scaling, and near the top blast zone it kills reliably at high percents.',
        steps: { 0: { note: 'Only the last hit carries the knockback.' } },
      },
      'ness-bthrow-ko': {
        title: 'Back Throw as a Kill',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, one of the strongest back throws in the game and overall the most versatile kill throw, the reason Ness’ grab game is rated so highly.',
      },
      'ness-dthrow-nair': { tip: 'According to SmashWiki, one of the three guaranteed follow-ups off down throw.' },
      'ness-dthrow-uair': {
        tip: 'According to SmashWiki, the third guaranteed follow-up off down throw, alongside nair and forward air.',
      },
      'ness-dair-utilt-uair': {
        tip: 'SmashWiki calls down air a reliable combo starter against grounded opponents, and GamersDecide lists this follow-up through up tilt into up air.',
        steps: { 0: { label: DAIR_GROUNDED, note: DAIR_EARLY } },
      },
      'ness-uair-chain': {
        windowLabel: 'low to mid percents',
        tip: 'According to GamersDecide, at low to mid percents. Each count is the full up air with all five hits.',
      },
      'ness-bair-utilt-uair': {
        tip: 'A route from the GamersDecide list. According to Game8, up tilt is also a good answer to opponents who come from above a lot.',
        steps: { 0: { note: 'Late hit counted; the early hit deals 18%.' } },
      },
      'ness-dair-uair-ko': {
        windowLabel: 'high percents, even against heavyweights',
        tip: 'According to GamersDecide, the route kills at high percents even against heavyweights. SmashWiki confirms that up air keeps its KO power despite the drag-down.',
        steps: { 0: { label: DAIR_GROUNDED, note: DAIR_EARLY } },
      },
    },
  },

  sheik: {
    meta: [
      'Sheik’s mobility and frame data are among the best in the game: apart from down air and the smashes, every move hits before frame 6. Together with needles that have transcendent priority, that makes for an outstanding neutral and, according to SmashWiki, one of the best combo games of all.',
      'Her problem is closing out: her moves deal little damage, she needs extremely long strings, and her few kill options are hard to land. On top of that she is very light and, because of her size and fast fall, easy to combo herself.',
    ],
    strengths: ['Top-tier mobility and frame data', 'Needles with transcendent priority', 'One of the best combo games'],
    weaknesses: ['Very little damage per hit', 'Hardly any reliable kill options', 'Light and easy to combo herself'],
    combos: {
      'sheik-dtilt-uair': { tip: 'Down tilt is her standard ground starter.' },
      'sheik-dthrow-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw leads into nair and fair at low percents and into up air at low to mid percents.',
      },
      'sheik-nair-ftilt': {
        tip: 'Typical Sheik: lots of small hits instead of one big one. According to Game8, jab, down smash and forward smash also follow nair.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'sheik-dtilt-usmash': {
        windowLabel: 'around 90%',
        tip: 'According to SmashWiki, a KO confirm around 90%, though it demands strict timing.',
      },
      'sheik-fthrow-fish': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, forward throw combos into aerials and Bouncing Fish at low percents.',
      },
      'sheik-ftilt-uair': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, forward tilt has combo potential from low to high percents, and at high percents it becomes a KO confirm into up air.',
      },
      'sheik-needles-fish': {
        title: 'Needles → Bouncing Fish (offstage)',
        windowLabel: 'against opponents off the stage',
        tip: 'According to SmashWiki, needles are not just for zoning: offstage they confirm into Bouncing Fish and with it into KOs. For a character with so little kill power, this is one of the most important options.',
        steps: { 0: { label: 'Aerial Needle Storm', note: 'Per needle; fully charged there are six.' } },
      },
      'sheik-nair-fish': {
        title: 'Late Nair → Bouncing Fish',
        windowLabel: 'around 100%',
        tip: 'According to SmashWiki her most reliable KO confirm: the late nair hit on landing sets up Bouncing Fish.',
        steps: { 0: { label: 'Late nair hit on landing' } },
      },
      'sheik-fair-fish': {
        tip: 'According to SmashWiki, forward air combos excellently into itself and into Bouncing Fish, which can lead to a KO.',
      },
      'sheik-dtilt-ftilt': {
        tip: 'According to SmashWiki, the down tilt sweetspot links into forward tilt, every aerial except down air, and up smash.',
      },
      'sheik-dtilt-bair': {
        tip: 'According to SmashWiki, one of the follow-ups off the down tilt sweetspot.',
        steps: { 1: { note: 'Clean sweetspot counted; sourspot 9%.' } },
      },
      'sheik-dthrow-fair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw links into nair and forward air at low percents, and into up air up to mid percents.',
      },
      'sheik-dthrow-nair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw links into nair and forward air at low percents.',
      },
      'sheik-bthrow-fair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, back throw can link into nair, forward and back air at low percents.',
      },
      'sheik-bthrow-fish-ko': {
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki, back throw links into Bouncing Fish at mid to high percents, which has solid KO potential near the ledge.',
      },
      'sheik-nair-dsmash': {
        title: 'Nair (fast-fallen) → Down Smash',
        tip: 'According to Game8, one of the follow-ups off a fast-fallen nair, alongside jab, a forward tilt chain and forward smash.',
        steps: { 0: { label: FALLING_SH_NAIR }, 1: { label: 'Down Smash, both hits' } },
      },
      'sheik-nair-fsmash': {
        title: 'Nair (fast-fallen) → Forward Smash',
        tip: 'According to Game8, one of the follow-ups off a fast-fallen nair.',
        steps: { 0: { label: FALLING_SH_NAIR }, 1: { label: 'Forward Smash, both hits' } },
      },
      'sheik-fair-fthrow-fish': {
        windowLabel: 'low percents',
        tip: 'According to Game8, the forward air follow-ups work best at low percents, and this is the one to go for most of the time.',
      },
      'sheik-fair-usmash': {
        windowLabel: 'low percents',
        tip: 'According to Game8, one of the forward air follow-ups, best at low percents.',
      },
    },
  },

  byleth: {
    meta: [
      'Byleth’s biggest strength is range: sword, bow, lance and axe give him long, disjointed hitboxes on many moves, and each weapon has its own purpose. According to SmashWiki, down throw is the best part of his grab game and a reliable combo starter below 80%.',
      'Up close, however, things get tight, and his mobility is among the slowest in the whole game. The Areadbhar moves live on their sweetspot; without it, damage and knockback stay much weaker.',
    ],
    strengths: ['Long, disjointed range', 'Each weapon with its own purpose', 'Down throw as a reliable starter below 80%'],
    weaknesses: ['Weak up close', 'One of the slowest mobilities in the game', 'Areadbhar is only strong with the sweetspot'],
    combos: {
      'byleth-dtilt-ftilt': { tip: 'Byleth’s standard ground starter.' },
      'byleth-dtilt-utilt': { tip: 'According to Game8: the higher the percent, the closer Byleth has to stand.' },
      'byleth-nair-da': {
        tip: 'His broadest route, and the same rule applies: the higher, the closer.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'byleth-nair-ftilt': {
        tip: 'The higher damage version at low percents.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'byleth-dthrow-fair': {
        windowLabel: 'short hop at 20%, full hop at 60%',
        tip: 'According to SmashWiki, down throw is a reliable starter below 80%. Nair, fair and bair all follow.',
      },
      'byleth-nair-usmash': {
        title: 'Nair (weak hit) → Up Smash',
        tip: 'Only with the weak nair hit, according to Game8 between 70 and 120%.',
        steps: { 0: { label: 'Nair, weak hit' } },
      },
      'byleth-dtilt-areadbhar': {
        tip: 'According to Game8, the side special links off down tilt between 100 and 120%. Without the sweetspot, much less is left.',
      },
      'byleth-uair-upb': {
        title: 'Up Air (hit behind) → Sword of the Creator',
        tip: 'According to SmashWiki, the tip of the up special can lead into an aerial and take a stock early.',
        steps: { 0: { label: 'Up Air, hit behind Byleth' } },
      },
      'byleth-ztd-creator-nair': {
        title: 'Sword of the Creator → Nair, twice',
        windowLabel: 'from 0%',
        tip: 'According to SmashWiki, a guaranteed true combo since update 11.0.0, but exclusively against Donkey Kong.',
        steps: { 1: { note: 'Immediately after, without a pause.' } },
      },
    },
  },

  'meta-knight': {
    meta: [
      'Meta Knight keeps up constant pressure with a low, fast short hop and aerials with hardly any lag. Dash attack and down throw combo into up smash and aerials at low percents, and according to SmashWiki his recovery is probably the best in the whole game, which makes his edgeguarding overwhelming.',
      'His attacks, however, have very few active frames and demand precision. His fall speed, round hurtbox and low weight make him extremely combo-prone, and without a projectile he struggles against zoners.',
    ],
    strengths: ['Constant pressure from fast aerials', 'Probably the best recovery in the game', 'Overwhelming edgeguarding'],
    weaknesses: ['Very few active frames', 'Extremely combo-prone', 'No projectile against zoners'],
    combos: {
      'mk-dthrow-utilt': {
        windowLabel: 'low percents',
        tip: 'According to Game8, use up tilt instead of the up special at low percents.',
        steps: { 2: { label: WALK_UP('Up Tilt') } },
      },
      'mk-dthrow-shuttle': {
        tip: 'From mid percents, Shuttle Loop carries the opponent high up.',
        steps: { 2: { label: WALK_UP('Shuttle Loop') } },
      },
      'mk-dthrow-fair': {
        tip: 'Sends the opponent sideways, straight off the ledge depending on position. The reverse back air version has its own card.',
      },
      'mk-da-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, dash attack also combos into up smash and the other aerials at low percents.',
      },
      'mk-fthrow-chain': {
        tip: 'Game8’s long route: according to SmashWiki, up air links directly into the up special.',
        steps: { 4: { label: AERIAL_SHUTTLE } },
      },
      'mk-dthrow-tornado': {
        windowLabel: 'at 0%',
        tip: 'According to SmashWiki, only at the very start of a stock, but it deals double-digit damage right away.',
      },
      'mk-dtilt-shuttle': {
        windowLabel: 'high percents',
        tip: 'According to Game8, the kill route when the opponent is knocked down after the down tilt. If they tech, it does not go through.',
      },
      'mk-dthrow-bair': {
        title: 'Down Throw → Reverse Back Air',
        windowLabel: '0% to mid percents',
        tip: 'According to SmashWiki, down throw links into back air from 0% to mid percents when Meta Knight turns around with a reverse aerial rush. Game8 lists the same sequence.',
        steps: { 2: { label: 'Reverse Back Air (RAR)' } },
      },
      'mk-dthrow-usmash': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw combos into a dashing up smash at low percents.',
      },
      'mk-da-usmash': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, dash attack goes straight into up smash at low percents.',
      },
      'mk-da-utilt': {
        tip: 'One of the three follow-ups Game8 lists after dash attack.',
        steps: { 1: { note: 'Sword tip counted; up close 7%.' } },
      },
      'mk-da-shuttle': { tip: 'According to Game8, dash attack also goes straight into the up special.' },
      'mk-uair-shuttle': {
        tip: 'According to SmashWiki, up air links into more aerials or straight into the up special.',
        steps: { 1: { label: AERIAL_SHUTTLE } },
      },
      'mk-dthrow-nair-da-uair': {
        tip: 'Game8 lists this sequence as a high damage route. The nair has to connect with the late hit, otherwise the opponent flies too far for the dash attack.',
        steps: { 2: { label: 'Nair, late hit' } },
      },
      'mk-fair-shuttle': {
        title: 'Forward Air → Jump → Shuttle Loop',
        tip: 'According to Game8, a kill combo. It also works when the first hit is a back air.',
        steps: { 1: { label: 'Walk up → Jump → Shuttle Loop' } },
      },
      'mk-uair-dair-bair': {
        title: 'Up Air (behind) → Dair → Dair → Back Air',
        tip: 'According to Game8, only against big opponents, but with a KO at the end when the up air hits from behind.',
        steps: { 0: { label: 'Up Air, rear hit' }, 1: { label: 'Jump → Dair' } },
      },
    },
  },

  sephiroth: {
    meta: [
      'The Masamune gives Sephiroth range that hardly any other character can match, and his sweetspots turn that into high damage with enormous kill power. Unlike most swordfighters he also has a solid grab game that leads into true combos.',
      'In exchange he is hard to learn and slow: apart from jab, almost everything starts on frame 14 or later. As a lightweight with a tall hurtbox he dies early, and his Winged Form only arrives once he is already behind and at high percents.',
    ],
    strengths: ['Unmatched range with the Masamune', 'Sweetspots with enormous kill power', 'Solid grab game for a swordfighter'],
    weaknesses: ['Slow frame data (mostly frame 14 or later)', 'Light with a tall hurtbox', 'Winged Form only when behind'],
    combos: {
      'sephiroth-bthrow-bair': {
        tip: 'According to SmashWiki, back throw links into forward and back air up to about 70%.',
      },
      'sephiroth-fthrow-fair': {
        tip: 'The simplest throw route; with the Masamune, forward air covers an enormous amount of space.',
      },
      'sephiroth-uthrow-nair': { tip: 'According to Game8, up tilt works instead of nair too.' },
      'sephiroth-nair-fair': {
        tip: 'Nair is his combo engine: according to SmashWiki it leads into forward air, up air, back air and Shadow Flare.',
      },
      'sephiroth-nair-bair': {
        tip: 'According to SmashWiki, a reliable KO confirm between 40 and 80%. Sephiroth’s most important kill route.',
      },
      'sephiroth-dthrow-flare': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw combos into Shadow Flare and the aerials at low percents.',
        steps: { 2: { note: 'Several orbs stack and detonate together.' } },
      },
      'sephiroth-dthrow-rar-bair': {
        title: 'Down Throw → RAR Back Air (at the ledge)',
        tip: 'According to SmashWiki, a KO confirm near the ledge, but only against incorrect DI.',
      },
    },
  },

  'duck-hunt': {
    meta: [
      'Duck Hunt lives on zoning and stage control with setups: can, clay pigeon and Wild Gunman together cover half the stage. On top of that come fast aerials; back air starts on frame 7 and, according to SmashWiki, kills middleweights from 120%.',
      'Everything outside the projectiles is unremarkable, though: the ground attacks are mediocre at best, forward air only kills around 180%, and down air does not connect its two hits reliably. With low weight and an exploitable recovery, Duck Hunt cannot take much.',
    ],
    strengths: ['Three projectiles for stage control', 'Back air kills middleweights from 120%', 'Fast aerials for edgeguarding'],
    weaknesses: ['Mediocre ground attacks', 'Forward air only kills late', 'Low weight, exploitable recovery'],
    combos: {
      'duckhunt-utilt-uair': {
        tip: 'According to Game8, confirmed from 0 to 70%. Duck Hunt’s most reliable ground route.',
      },
      'duckhunt-nair-jab': {
        tip: 'Land the nair while falling, then let the jab run all the way through.',
        steps: { 0: { label: FALLING_SH_NAIR }, 1: { label: 'Full jab' } },
      },
      'duckhunt-fthrow-fair': {
        tip: 'Only very early in the stock: jump after the throw and attach the forward air.',
      },
      'duckhunt-dthrow-fair': {
        windowLabel: 'even past 100%',
        tip: 'According to Game8, down throw keeps working past 100% because its launch angle barely changes.',
      },
      'duckhunt-clay-da': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, a setup into dash attack from 0% to mid percents.',
        steps: { 0: { label: CLAY, note: 'Detonate the pigeon with more hits.' } },
      },
      'duckhunt-clay-fair': {
        windowLabel: 'high percents',
        tip: 'Same pigeon, different finisher: according to SmashWiki, the way into forward air at high percents.',
        steps: { 0: { label: CLAY } },
      },
      'duckhunt-dthrow-bair': {
        windowLabel: 'from around 120%',
        tip: 'According to SmashWiki, down throw sets up every aerial at mid to high percents, and back air kills middleweights from 120%.',
      },
    },
  },
};
