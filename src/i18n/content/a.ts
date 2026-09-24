import type { GuideTexts } from './types';

const DANCE_DOWN = 'Double-Edge Dance, follow-up hits down';
const ABK_AIR = 'After Burner Kick (aerial)';
const ABK_REVERSED = 'After Burner Kick, reversed';
const FAIR_ALL = 'Forward Air, all 3 hits';
const SH_NAIR_LAND = 'SH Nair, land';
const UAIR_LATE = 'Up Air, late hit';
const FF_NAIR = 'Nair with fast fall';

/** Englisch für src/data/guides-a.ts. */
export const TEXT: GuideTexts = {
  roy: {
    meta: [
      'Roy combines high air and dash speed with very good frame data on his aerials and tilts, which gives him a strong combo game and lots of mixups. The middle of the blade and the hilt hit hardest.',
      'His recovery is weak: he falls fast and Blazer gains little height. On top of that, the weak sourspot at the tip of his blade punishes clean spacing instead of rewarding it.',
    ],
    strengths: ['High air and dash speed', 'Very good frame data on aerials and tilts', 'Nair starts combos at almost any percent'],
    weaknesses: ['Weak recovery with little height', 'Weak sourspot at the tip of the blade'],
    combos: {
      'roy-fair-dance': {
        windowLabel: 'low percents',
        tip: 'After the jump, forward air only on the way down, then straight into Double-Edge Dance.',
        steps: {
          0: { label: 'Forward Air while falling' },
          1: { label: DANCE_DOWN, note: 'For maximum damage, input the follow-up hits with the stick down; the fourth hit is a multi-hit.' },
        },
      },
      'roy-dthrow-nair': {
        windowLabel: 'low percents',
        tip: 'Nair is easier out of a short hop. According to SmashWiki it depends on the opponent’s DI.',
      },
      'roy-dthrow-uair': {
        windowLabel: 'low percents',
        tip: 'Up air is Roy’s fastest aerial and covers a lot of space above him, ideal for continuing the juggle.',
      },
      'roy-nair-blazer': {
        title: 'Nair (1st hit) → Blazer',
        windowLabel: 'high percents',
        tip: 'Roy’s kill route off nair: only the first hit may connect, then Blazer immediately.',
        steps: { 0: { label: 'SH Nair, 1st hit only' }, 1: { note: 'Input it right after the first hit.' } },
      },
      'roy-jab-rar-bair': {
        windowLabel: 'around 60%',
        tip: 'According to SmashWiki a very strong KO confirm, and according to Game8 one of the most important routes Roy has to master.',
        steps: { 1: { note: 'Reverse aerial rush: jump away from the opponent, turn around in the air, back air.' } },
      },
      'roy-dance-forward-ko': {
        title: 'Double-Edge Dance, follow-up hits forward',
        tip: 'According to SmashWiki, the last hit held forward has surprisingly high KO power, stronger than Cloud’s Cross Slash, and kills near the ledge below 80%.',
        steps: {
          0: {
            label: 'Double-Edge Dance, all four hits forward',
            note: 'Do not move the stick for the follow-up hits; only the spaced last hit has the kill power.',
          },
        },
      },
      'roy-jab-blazer': {
        tip: 'According to SmashWiki, Roy’s jab effortlessly starts combos into grab, tilts, aerials, Double-Edge Dance or Blazer.',
      },
      'roy-jab-dance': {
        tip: 'According to SmashWiki, one of the follow-ups off jab. According to Game8, Double-Edge Dance deals the most damage with the follow-up hits down.',
        steps: { 1: { label: DANCE_DOWN } },
      },
    },
  },

  hero: {
    meta: [
      'Hero has a lot of disjointed range on forward, neutral and back air, and his specials are his biggest trump card: Frizz, Zap and the random Command Selection can swing matches. Smash attacks crit with a 1 in 8 chance.',
      'His spells cost MP, which only refills reliably by landing normal attacks. On top of that come below average frame data and weak out of shield options.',
    ],
    strengths: ['Disjointed range on his aerials', 'Strong, versatile specials', 'Critical hits can kill extremely early'],
    weaknesses: ['MP only refills through normal hits', 'Below average frame data', 'Weak out of shield game'],
    combos: {
      'hero-fair-jab': { tip: 'Only works right next to the opponent. Down tilt or up tilt work instead of jab.' },
      'hero-uair-utilt': {
        tip: 'Land the up air while falling and go straight into the next move. According to SmashWiki, up air also chains into itself.',
        steps: { 0: { label: 'Up Air while falling' } },
      },
      'hero-dthrow-fair': {
        windowLabel: 'mid percents',
        tip: 'A true combo, good when MP is low or damage has to come quickly.',
      },
      'hero-uair-kafrizz': {
        tip: 'After the up air, short hop immediately and fire the charged spell.',
        steps: { 0: { label: 'Up Air while falling' }, 1: { note: 'Charge Frizz to level 3 beforehand.' } },
      },
      'hero-dair-usmash': {
        tip: 'Only kills if the up smash crits or Oomph is active; with Oomph at 50-60%. Values for middleweights.',
        steps: { 0: { label: 'SH Dair, meteor on a grounded opponent' }, 1: { note: 'A critical hit doubles the damage.' } },
      },
      'hero-nair-fair-acceleratle': {
        title: 'Nair → Forward Air (with Acceleratle)',
        windowLabel: 'high percents',
        tip: 'Only with Acceleratle active does the nair’s combo potential really show, and then it is a KO confirm at high percents.',
      },
      'hero-snooze-fsmash': {
        title: 'Snooze → Forward Smash (charged)',
        windowLabel: 'mid percents',
        tip: 'Notorious: if Snooze lands at mid percents, you get a free, fully charged forward smash.',
        steps: {
          0: { label: 'Snooze from Command Selection', note: 'Has to hit a grounded opponent.' },
          1: { label: 'Forward Smash, fully charged' },
        },
      },
    },
  },

  bayonetta: {
    meta: [
      'Witch Twist and After Burner Kick let Bayonetta combo reliably, Witch Time and Bat Within give her defensive options, and her flexible air game makes her overwhelming offstage.',
      'In exchange her raw kill power is low, her ground game is weak and her combos are vulnerable to SDI. Ladder combos only kill if they start very close to the top blast zone.',
    ],
    strengths: ['Reliable combos with Witch Twist and After Burner Kick', 'Witch Time and Bat Within', 'Overwhelming offstage game'],
    weaknesses: ['Low raw kill power', 'Weak ground game', 'Combos vulnerable to SDI'],
    combos: {
      'bayo-heelslide-ladder': {
        windowLabel: 'low percents',
        tip: 'The basic ladder: every move carries the opponent further up.',
        steps: {
          0: { note: 'Hold the button until the opponent goes airborne.' },
          2: { label: ABK_AIR },
          3: { label: ABK_REVERSED, note: 'Stick to the other side.' },
        },
      },
      'bayo-utilt-ladder': {
        windowLabel: 'low percents',
        tip: 'After the last After Burner Kick, read with back air or up air where the opponent escapes to.',
        steps: { 2: { label: ABK_AIR }, 3: { label: ABK_REVERSED } },
      },
      'bayo-heelslide-utilt': { tip: 'Up tilt pops the opponent into the air and starts the ladder from there.' },
      'bayo-utilt-bair': {
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, a fairly reliable kill confirm and one of her few direct kill options.',
      },
      'bayo-heelslide-nair-long': {
        windowLabel: 'low percents',
        tip: 'The long route: according to Game8 it carries the opponent past the ledge.',
        steps: { 2: { label: ABK_AIR }, 3: { label: 'Witch Twist (aerial)' }, 4: { label: FAIR_ALL } },
      },
      'bayo-dtilt-witchtwist': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down tilt is a good out of shield option with combo potential similar to up tilt, and from here the same path leads upward.',
      },
      'bayo-nair-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, nair leads into forward air and After Burner Kick; forward air is also the usual finisher after the second Witch Twist.',
        steps: { 1: { label: FAIR_ALL } },
      },
    },
  },

  wolf: {
    meta: [
      'Wolf has a solid combo foundation: up throw and down throw start combos, forward air leads into almost anything, and his sweetspotted back air is one of the strongest in the game, confirmable off forward air.',
      'As a fast falling middleweight he gets comboed easily himself, his recovery does not go far, and at high percents he sometimes struggles to close out stocks.',
    ],
    strengths: ['Up and down throw as combo starters', 'Back air is one of the strongest in the game', 'Forward air leads into almost any move'],
    weaknesses: ['Fast falling: easy to combo', 'Short recovery', 'Kills at high percents can be hard'],
    combos: {
      'wolf-uthrow-uair': {
        tip: 'According to SmashWiki it links up to about 10-20% (forward air too); Game8 says up to 70%, beyond that it is more of a juggle than a true combo.',
      },
      'wolf-dthrow-da': { tip: 'Links up to about 15-20%.' },
      'wolf-fair-fair': { tip: 'According to Game8 from 0 to 80%, the most reliable extension out of neutral.' },
      'wolf-nair-utilt-fair': {
        title: 'Nair (falling) → Up Tilt → Forward Air',
        tip: 'According to Game8, Wolf’s strongest combo, but only in a tight window.',
        steps: { 0: { label: 'SH Nair, falling' } },
      },
      'wolf-dair-bair': {
        tip: 'According to SmashWiki, back air kills from around 110% from center stage and around 65% at the ledge.',
        steps: { 0: { label: 'SH Dair on a grounded opponent' } },
      },
      'wolf-fair-flash': {
        tip: 'A risky kill route: check your position first so Wolf does not fly off the ledge.',
        steps: { 1: { note: 'Close to the ledge you risk a self-destruct.' } },
      },
      'wolf-fair-bair': {
        windowLabel: 'kill percents',
        tip: 'The sweetspot back air is confirmable off forward air and kills around 110% from center stage, from around 65% at the ledge.',
      },
    },
  },

  'mii-brawler': {
    meta: [
      'Mii Brawler combines high mobility with fast frame data, which makes for a strong combo game. Competitively a custom special set is played, including Feint Jump, Helicopter Kick and Thrust Uppercut.',
      'Range is exceptionally short, and reliable kill confirms at high percents are missing. Kills tend to come from ledge situations and platforms.',
    ],
    strengths: ['High mobility', 'Fast frame data', 'Strong combo game off down throw'],
    weaknesses: ['Very short range', 'Hardly any reliable kill confirms at high percents'],
    combos: {
      'brawler-dthrow-fair': {
        tip: 'According to SmashWiki, down throw also leads into up specials and several landing up airs.',
        steps: { 2: { note: 'Jump first at higher percents.' } },
      },
      'brawler-nair-ftilt': {
        tip: 'Down tilt, up tilt, jab and Suplex also work off nair up to mid percents.',
        steps: { 0: { label: SH_NAIR_LAND } },
      },
      'brawler-dtilt-fair': { tip: 'A wide window and one of the most reliable routes from the ground.' },
      'brawler-dthrow-uppercut': {
        tip: 'According to SmashWiki, this route kills early on platforms; Game8 lists it from 0 to 90%.',
      },
      'brawler-dthrow-helikick': {
        windowLabel: 'around 60% at the ledge',
        tip: 'The alternative up special: steered forward at the ledge, it kills around 60%.',
        steps: { 2: { label: 'Helicopter Kick forward (Up Special 2)' } },
      },
      'brawler-utilt-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up tilt juggles into itself at low percents and sets up aerial combos from mid percents.',
      },
      'brawler-nair-weak-uppercut': {
        title: 'Nair (weak hit) → Thrust Uppercut',
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, the weak nair hit is a true combo into jab, Thrust Uppercut and Head-On Assault at low percents.',
        steps: { 0: { label: 'SH Nair, weak hit' }, 1: { note: 'Starts on frame 3.' } },
      },
      'brawler-nair-ko': {
        title: 'Nair (clean hit) at the Ledge',
        tip: 'According to SmashWiki a niche kill option: near the sides of the stage the clean nair hit takes stocks from around 130%. It fits his problem of having hardly any confirms at high percents.',
        steps: { 0: { label: 'SH Nair (clean hit)' } },
      },
      'brawler-nair-fsmash': {
        title: 'Nair (landing) → Forward Smash',
        windowLabel: 'mid percents',
        tip: 'At mid percents, forward smash is confirmable off the landing nair.',
        steps: { 0: { label: SH_NAIR_LAND } },
      },
    },
  },

  'mega-man': {
    meta: [
      'Mega Man has outstanding zoning and can play very defensively: lemons, Metal Blade and Crash Bomber keep opponents at a distance, and forward air chains into itself and kills reliably.',
      'He struggles against small hitboxes, rushdown and above all reflectors. As a fast faller with his weight he is one of the easiest characters to combo and juggle.',
    ],
    strengths: ['Outstanding zoning', 'Forward air chains into itself', 'Up tilt kills early'],
    weaknesses: ['Weak against reflectors and rushdown', 'Very easy to combo and juggle'],
    combos: {
      'megaman-fair-fair': { tip: 'Takes some timing practice, then it is one of the most reliable routes.' },
      'megaman-dthrow-bair': {
        windowLabel: 'low percents',
        tip: 'A clean back air deals slightly more damage; forward air is sometimes easier.',
      },
      'megaman-latefair-dtilt': {
        title: 'Forward Air (late) → Down Tilt',
        tip: 'Only with the forward air sourspot. Up tilt works instead of down tilt too.',
        steps: { 0: { label: 'SH Fair, late hit' } },
      },
      'megaman-blade-grab': { tip: 'According to Game8, a quick, simple way to build damage.' },
      'megaman-blade-bair': {
        title: 'Metal Blade (angled down) → Back Air',
        tip: 'The back air connects while the opponent is still in hitstun from the blade.',
        steps: { 0: { label: 'Aerial Metal Blade, angled down' }, 1: { label: 'Back Air during hitstun' } },
      },
      'megaman-ftilt-nair': {
        title: 'Lemons → Jump → Nair',
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, after two shots Mega Man jumps straight into neutral air, and it connects reliably.',
        steps: {
          0: { label: 'Forward Tilt: two lemons' },
          1: { label: 'Jump → Nair', note: 'The jump flows directly from the second shot into neutral air.' },
        },
      },
      'megaman-bthrow-ko': {
        title: 'Back Throw at the Ledge',
        tip: 'According to SmashWiki, a very solid kill throw: at the ledge it takes middleweights from around 110%.',
      },
      'megaman-blade-utilt': {
        windowLabel: 'high percents',
        tip: 'Takes practice, but it ends stocks: according to SmashWiki, up tilt kills light to medium characters below 80%.',
        steps: { 0: { label: 'Pick up Metal Blade and throw it point-blank' }, 2: { label: 'Up Tilt at point-blank range' } },
      },
    },
  },

  sora: {
    meta: [
      'Sora has a dominant air game: his extremely long double jump chases opponents above him, his three-hit aerials build damage quickly, and his magic cycle provides projectiles for neutral.',
      'His range is below average, he is floaty with slow air speed and a slow double jump, and his low weight leaves him open to early KOs.',
    ],
    strengths: ['Dominant air game with a long double jump', 'Three-hit aerials for fast damage', 'Magic cycle for pressure in neutral'],
    weaknesses: ['Below average range', 'Floaty and slow in the air', 'Light: easy to kill early'],
    combos: {
      'sora-dthrow-fair': {
        tip: 'According to SmashWiki, neutral and up air are reliable follow-ups too.',
        steps: { 2: { label: FAIR_ALL } },
      },
      'sora-dtilt-utilt': { tip: 'The last up tilt hit reliably starts more combos at low percents.' },
      'sora-uair-bair': { tip: 'The long double jump still catches opponents after the up air.' },
      'sora-ffnair-ftilt': {
        tip: 'Up smash, Aerial Sweep or the three-hit forward air also work off the fast-fall nair.',
        steps: { 0: { label: FF_NAIR } },
      },
      'sora-fair-fsmash': {
        title: 'Forward Air (1st hit, fast fall) → Forward Smash',
        windowLabel: 'around 100%',
        tip: 'The fast fall cancels the rising motion, and on landing it turns into a KO confirm.',
        steps: { 0: { label: 'Fair, cancel the 1st hit with a fast fall' } },
      },
      'sora-nair-fsmash': {
        title: 'Nair (falling) → Forward Smash',
        windowLabel: 'around 100%',
        tip: 'Falling during the first two nair hits lets you extend into other moves, with forward smash as the KO combo.',
        steps: { 0: { label: 'Nair, fall during hit 1 or 2' } },
      },
      'sora-ffnair-usmash': {
        tip: 'The vertical alternative to forward smash when the opponent stays above Sora.',
        steps: { 0: { label: FF_NAIR } },
      },
    },
  },

  cloud: {
    meta: [
      'With Climhazzard, Cloud has one of the best out of shield options in the game, and once Limit is charged all his stats improve, opening up combos and kills that are otherwise impossible.',
      'His biggest weakness is his recovery, since Climhazzard gains little height. On top of that come a short grab and weak throws with hardly any combo potential.',
    ],
    strengths: ['Climhazzard as a strong out of shield option', 'Limit improves all stats', 'Up tilt and up air as reliable starters'],
    weaknesses: ['Recovery with little height', 'Short grab, weak throws'],
    combos: {
      'cloud-utilt-nair': { tip: 'Nair does less damage than up air but links across a wider percent window.' },
      'cloud-utilt-uair': { tip: 'More damage than the nair variant, but a tighter window.' },
      'cloud-dtilt-uair': {
        tip: 'Only the early hit of down tilt links.',
        steps: { 0: { label: 'Down Tilt, early hit' } },
      },
      'cloud-nair-da': { tip: 'A simple follow-up off the landing nair.', steps: { 0: { label: SH_NAIR_LAND } } },
      'cloud-nair-crossslash': {
        tip: 'With the hit behind Cloud, only up to about 30%.',
        steps: { 0: { label: SH_NAIR_LAND } },
      },
      'cloud-nair-dsmash': {
        tip: 'Lots of damage in the first percents of a stock.',
        steps: { 0: { label: SH_NAIR_LAND } },
      },
      'cloud-uair-limitcross': {
        title: 'Late Up Air → Limit Cross Slash',
        windowLabel: 'kill percents',
        tip: 'The late up air hit sets up KO confirms into Limit Cross Slash, only with Limit charged.',
        steps: { 0: { label: UAIR_LATE } },
      },
      'cloud-uair-finishingtouch': {
        title: 'Late Up Air → Finishing Touch',
        windowLabel: 'kill percents',
        tip: 'The second Limit option from the same setup: hardly any damage, but knockback that ends stocks.',
        steps: { 0: { label: UAIR_LATE }, 1: { note: 'Hardly any damage, but enormous knockback.' } },
      },
    },
  },
};
