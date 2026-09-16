import type { GuideTexts } from './types';

const FALLING_SH_NAIR = 'SH Nair, falling';
const NAIR1_FF = 'Nair, 1st hit with fast fall';
const UP_TO_175 = 'up to about 175%';
const DAIR_TIPPER = 'Blade counted; tip 17%, meteor 18%.';
const DAIR_TIPPER_TIP = 'According to SmashWiki, down air leads into a tippered up smash or forward smash.';
const MULTI_TOTAL = 'Multi-hit. Total value.';
const CLOSE_DTILT = 'Close hit counted; further out 7%.';
const SJP_EARLY = 'Super Jump Punch, early hit';
const BURY_DTHROW = 'Down Throw, buries the opponent';
const BURY_VALUE = 'Value from SmashWiki (5% base) because Ultimate Frame Data lists none.';
const FULL_JAB = 'Full jab';

/** Englisch für src/data/guides-d-minus.ts. */
export const TEXT: GuideTexts = {
  marth: {
    meta: [
      'Marth combines above average KO power with speed and agility: cleanly spaced hits deal lots of damage and send far, and his range makes him an excellent juggler. At the ledge, a single right move can end a stock instantly.',
      'Everything hinges on the tipper, though. Without clean spacing his attacks produce hardly any knockback, he is in a bad spot up close at high percents, and his KO potential stays inconsistent. Lucina trades exactly this tipper for even damage.',
    ],
    strengths: ['High KO power with clean spacing', 'Strong juggling thanks to his range', 'Can suddenly end stocks at the ledge'],
    weaknesses: ['Extremely dependent on tippers and spacing', 'Weak up close at high percents', 'Inconsistent KO potential'],
    combos: {
      'marth-dthrow-bair': {
        windowLabel: 'low percents',
        tip: 'Game8 calls it his fastest and simplest throw route; it only really pays off with the blade tip.',
      },
      'marth-utilt-uair': { windowLabel: 'low percents', tip: 'Around 25% according to Game8.' },
      'marth-fair-dance': {
        title: 'Forward Air → Dancing Blade (down)',
        windowLabel: 'low percents',
        tip: 'According to Game8, the downward input deals the most damage.',
        steps: {
          1: { label: 'Dancing Blade, follow-up hits down', note: 'Counted without tipper. With tipper 28%.' },
        },
      },
      'marth-uair-uair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, throw out each up air just before landing so the second one follows.',
      },
      'marth-nair-fsmash': {
        title: 'Nair (1st hit) → Forward Smash',
        windowLabel: UP_TO_175,
        tip: 'According to SmashWiki, thanks to its low knockback scaling the first nair hit combos with a fast fall into many tilts and even into forward smash, up to about 175%.',
        steps: { 0: { label: NAIR1_FF } },
      },
      'marth-nair-ftilt': {
        title: 'Nair (1st hit) → Forward Tilt',
        windowLabel: UP_TO_175,
        tip: 'The same opener as the forward smash route, just safer: according to SmashWiki, the first nair hit leads into many of Marth’s tilts.',
        steps: { 0: { label: NAIR1_FF } },
      },
      'marth-dthrow-uair': {
        windowLabel: 'from mid percents',
        tip: 'According to SmashWiki, the opponent’s DI decides: at low to mid percents up or back air follow, at higher percents only up air.',
      },
      'marth-dance-neutral-ko': {
        title: 'Dancing Blade, all hits neutral',
        windowLabel: 'at the ledge from as early as 40-60%',
        tip: 'According to SmashWiki, the fourth neutral hit KOs at higher percents; spaced at the ledge, according to the source, as early as 40 to 60%.',
        steps: {
          0: {
            label: 'Dancing Blade, four hits without a direction',
            note: 'Only with the tipper; without the blade tip hardly any knockback remains.',
          },
        },
      },
      'marth-dair-usmash': { tip: DAIR_TIPPER_TIP, steps: { 0: { note: DAIR_TIPPER } } },
      'marth-dair-fsmash': { tip: DAIR_TIPPER_TIP, steps: { 0: { note: DAIR_TIPPER } } },
      'marth-uair-fsmash-ko': {
        windowLabel: 'certain percent ranges',
        tip: 'According to SmashWiki, at certain percents forward smash can follow the up air sourspot as a kill.',
        steps: { 1: { note: 'Tipper counted; without it 16%.' } },
      },
      'marth-nair-utilt': {
        title: 'Nair (1st hit) → Up Tilt',
        windowLabel: UP_TO_175,
        tip: 'According to SmashWiki, the first nair hit links into many tilts and even into forward smash up to about 175%.',
        steps: { 0: { label: NAIR1_FF }, 1: { note: 'Tipper counted; without it 6 to 7%.' } },
      },
      'marth-nair-dtilt': {
        title: 'Nair (1st hit) → Down Tilt',
        windowLabel: UP_TO_175,
        tip: 'According to SmashWiki, the first nair hit links into many tilts up to about 175%.',
        steps: { 0: { label: NAIR1_FF }, 1: { note: 'Tipper counted; without it 8%.' } },
      },
    },
  },

  'dr-mario': {
    meta: [
      'Dr. Mario is Mario’s echo with the signs flipped: according to SmashWiki, his moveset deals about 1.18× more damage and therefore kills much earlier, but he only moves at about 0.79× of Mario’s speed.',
      'That puts his mobility among the worst in the cast, his range is short, and despite improvements his recovery is one of the weakest in the game. His combos are short but deal solid damage.',
    ],
    strengths: ['Around 18% more damage than Mario', 'Good frame data on the ground', 'Earlier KO potential'],
    weaknesses: ['One of the worst mobilities in the game', 'Short range', 'Very weak recovery'],
    combos: {
      'drmario-dthrow-usmash': {
        windowLabel: 'low percents',
        tip: 'According to Game8, down throw is his standard throw and leads into a whole range of moves.',
      },
      'drmario-dthrow-utilt': {
        windowLabel: 'low percents',
        tip: 'The safe version when up smash would be too far away.',
      },
      'drmario-nair-dtilt-upb': {
        tip: 'Around 32% according to Game8. According to SmashWiki, down tilt leads into almost half his moveset.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'drmario-da-uair': { tip: 'The simplest follow-up out of a run.' },
      'drmario-dtilt-uair': {
        windowLabel: 'higher percents',
        tip: 'According to SmashWiki, down tilt combos into up air, Super Jump Punch and Dr. Tornado, and all three are KO confirms at higher percents.',
      },
      'drmario-jab-upb': {
        title: 'Jab (close range) → Super Jump Punch',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, a guaranteed KO confirm at high percents: the close-range hitbox of the first jab hit can be canceled straight into Super Jump Punch.',
        steps: {
          0: { label: 'Jab, 1st hit at point-blank range', note: 'Only the close-range hitbox can be canceled.' },
        },
      },
      'drmario-bthrow-ko': {
        title: 'Back Throw at the Ledge',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, one of the strongest back throws in the game and his most important kill option near the ledge, fitting for someone who deals about 18% more damage than Mario.',
      },
      'drmario-dthrow-tornado': {
        windowLabel: 'kill percents at the ledge',
        tip: 'According to Game8, one of his strongest KO confirms at the ledge.',
        steps: { 2: { note: MULTI_TOTAL } },
      },
      'drmario-pill-fair': {
        tip: 'Game8 explicitly calls the route a “killer combo”; the pill holds the opponent just long enough.',
        steps: { 0: { label: 'Jump → Megavitamin' } },
      },
      'drmario-dtilt-upb-ko': {
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, down tilt is a strong combo starter and confirms up air, Super Jump Punch and Dr. Tornado as KOs.',
        steps: { 0: { note: CLOSE_DTILT }, 1: { label: SJP_EARLY } },
      },
      'drmario-dtilt-tornado-ko': {
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, one of the three KO confirms off down tilt.',
        steps: { 0: { note: CLOSE_DTILT }, 1: { note: MULTI_TOTAL } },
      },
      'drmario-utilt-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up tilt links into itself at low percents and into aerials at higher percents.',
      },
      'drmario-usmash-usmash': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, Dr. Mario’s up smash launches flat behind him, so it links into itself at low percents.',
      },
      'drmario-dthrow-upb': {
        windowLabel: 'wide percent window',
        tip: 'According to Game8, the down throw follow-ups work across many percents, including the up special.',
        steps: { 2: { label: SJP_EARLY } },
      },
      'drmario-da-tornado-ko': {
        title: 'Dash Attack → Dr. Tornado at the Ledge',
        windowLabel: 'kill percents, opponent at the ledge',
        tip: 'According to Game8, Dr. Tornado after dash attack only works when the opponent stands at the ledge, but then as a kill.',
        steps: { 1: { note: MULTI_TOTAL } },
      },
    },
  },

  ike: {
    meta: [
      'Power is Ike’s trademark: his moveset contains some of the strongest attacks in the game, and with rage his KO potential gets even scarier. On top of that come great disjointed range and, in neutral air, a really good combo starter.',
      'In exchange he moves slowly, especially on the ground, and has some of the worst frame data in the game: almost everything ends with a lot of lag. His weight lets him survive long but also makes him easy to combo and juggle.',
    ],
    strengths: ['Some of the strongest attacks in the game', 'Great disjointed range', 'Nair as his best combo starter'],
    weaknesses: ['Slow movement, especially on the ground', 'Some of the worst frame data in the game', 'Poor disadvantage state'],
    combos: {
      'ike-nair-fair': { tip: 'According to Game8, a quick 20% across many percent ranges.' },
      'ike-fair-ftilt': { tip: 'Up to 30% according to Game8, two heavy hits in a row.' },
      'ike-dthrow-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw also leads into up air and Aether.',
      },
      'ike-dtilt-uair': { windowLabel: 'low percents', tip: 'According to Game8, only works from close range.' },
      'ike-dthrow-aether': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw is an excellent starter from low to mid percents; besides up tilt and the aerials, Aether follows directly too.',
      },
      'ike-dtilt-fair-ko': {
        title: 'Down Tilt (late hit) → Forward Air',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, the late down tilt hit sets up combos at low to mid percents and becomes a reliable KO confirm into his aerials at high percents.',
        steps: { 0: { label: 'Down Tilt, late hit' } },
      },
      'ike-nair-aether': {
        title: 'Nair → Aether (at the ledge)',
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, since update 8.0.0 Aether’s landing hit has much more knockback, which created a new KO setup off nair near the ledge at mid percents.',
        steps: { 1: { note: 'The landing hit carries the knockback.' } },
      },
      'ike-nair-uair': {
        windowLabel: 'moderately high percents',
        tip: 'Game8 calls it one of Ike’s kill combos, SmashWiki a fairly reliable KO confirm at moderately high percents.',
      },
      'ike-nair-bair': {
        windowLabel: 'moderately high percents',
        tip: 'The horizontal version of the same confirm, the earlier KO toward the side.',
      },
    },
  },

  'king-k-rool': {
    meta: [
      'King K. Rool hits hard and far, is the second heaviest character after Bowser and has two projectiles in Blunderbuss and Crownerang, the former doubling as a command grab. His belly has super armor and absorbs hits completely.',
      'His hurtbox is one of the biggest in the game, though, practically everything ends with extreme lag, and hardly any move is safe on shield. Once in disadvantage he has a hard time getting out.',
    ],
    strengths: ['Very strong, far-reaching attacks', 'Second heaviest character in the game', 'Belly armor and two projectiles'],
    weaknesses: ['Huge hurtbox: easy to combo', 'Extreme endlag, hardly shield-safe', 'Poor disadvantage state'],
    combos: {
      'krool-nair-jab': {
        title: 'Nair (early hit) → Jab',
        windowLabel: 'at 0%',
        tip: 'According to Game8, only confirmed at the very start of a stock.',
        steps: { 0: { label: 'SH Nair, early hit' }, 1: { label: FULL_JAB } },
      },
      'krool-latenair-jab': {
        title: 'Nair (late hit) → Jab',
        tip: 'Same move, different window: with the late hit, jab links between 30 and 50% according to Game8.',
        steps: { 0: { label: 'SH Nair, late hit' }, 1: { label: FULL_JAB } },
      },
      'krool-fair-grab': {
        windowLabel: 'at 0%',
        tip: 'According to SmashWiki, forward air confirms into grab at 0% because the opponent does not enter tumble.',
      },
      'krool-fthrow-da': {
        windowLabel: 'at 0%',
        tip: 'According to SmashWiki, forward throw combos into dash attack or a dash-canceled jab at 0%, the earliest way in he has.',
        steps: { 1: { note: 'Value from SmashWiki (10% base) because Ultimate Frame Data lists none.' } },
      },
      'krool-nair-da': {
        windowLabel: 'only in certain percent ranges',
        tip: 'According to SmashWiki, nair leads into jab, up tilt, forward tilt and dash attack, the latter being a KO confirm in certain percent ranges.',
      },
      'krool-dthrow-utilt-ko': {
        title: 'Down Throw (buried) → Up Tilt',
        tip: 'The same input as the damage route, just later in the stock: according to SmashWiki, up tilt off down throw becomes a reliable KO confirm from around 130%.',
        steps: { 1: { label: BURY_DTHROW, note: BURY_VALUE } },
      },
      'krool-dthrow-utilt': {
        title: 'Down Throw (buried) → Up Tilt',
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw leads into jab, up tilt and up air at low to mid percents.',
        steps: { 1: { label: BURY_DTHROW, note: BURY_VALUE } },
      },
      'krool-dthrow-ftilt': {
        title: 'Down Throw (buried) → Forward Tilt',
        windowLabel: 'from 90% in the air, from 100% on the ground',
        tip: 'Game8: grabbed with your back to the ledge, this becomes an easy KO; the bury time is longest here.',
        steps: { 1: { label: BURY_DTHROW, note: BURY_VALUE } },
      },
      'krool-dtilt-fsmash': {
        title: 'Down Tilt (buried) → Forward Smash',
        windowLabel: 'around 70%',
        tip: 'According to SmashWiki, forward smash confirms off the down tilt bury at 70% and kills.',
        steps: { 0: { label: 'Down Tilt, buries the opponent' } },
      },
    },
  },

  'king-dedede': {
    meta: [
      'Together with Donkey Kong, King Dedede is the third heaviest character; he falls very fast and, with four midair jumps plus Super Dedede Jump, recovers excellently for a heavyweight. His hammer gives many attacks a long disjoint, and he has no shortage of finishers: according to SmashWiki, dash attack kills reliably below 100%.',
      'His biggest problem is approaching, which is among the worst in the game. Sluggish air speed, a big hurtbox and no fast escape options also make him vulnerable to combos and juggles.',
    ],
    strengths: ['Third heaviest character with a strong recovery', 'Hammer with a long disjoint', 'Dash attack kills below 100%'],
    weaknesses: ['One of the worst approaches in the game', 'Sluggish air speed', 'Very vulnerable to combos and juggles'],
    combos: {
      'dedede-nair-dtilt': {
        windowLabel: 'low percents',
        tip: 'The landing nair is his most reliable way in.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'dedede-nair-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, the late nair hit also sets up up tilt and up air.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'dedede-nair-fair': {
        windowLabel: 'mid percents',
        tip: 'Around 20% according to Game8, the mid percent version.',
      },
      'dedede-uthrow-uair': { windowLabel: 'low percents', tip: 'Around 25% according to Game8.' },
      'dedede-dthrow-nair': {
        windowLabel: 'very low percents',
        tip: 'According to SmashWiki, a true combo into nair or forward air at very low percents; after that the link breaks quickly.',
      },
      'dedede-utilt-utilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up tilt chains into itself at low percents and has its own KO potential at high percents: the same move, two jobs.',
      },
      'dedede-jethammer-ko': {
        title: 'Jet Hammer (fully charged)',
        tip: 'According to SmashWiki, a freshly fully charged Jet Hammer takes middleweights from center stage at around 40%. Not a combo finisher but a read, and the most expensive one in the game.',
        steps: {
          0: { label: 'Jet Hammer, fully charged', note: 'The charge can be held but slowly costs your own damage.' },
        },
      },
      'dedede-dthrow-fair': { tip: 'According to Game8, usable across various percent ranges.' },
      'dedede-dthrow-uair': {
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, down throw into up air is now a KO confirm.',
      },
    },
  },

  villager: {
    meta: [
      'Villager camps with several projectiles, has a very good recovery with Balloon Trip and Lloid Rocket, and blocks opposing projectiles with Pocket. Offstage he is a potent edgeguarder with many options against returning opponents.',
      'His grab is slow and his mobility poor, which leaves him thin on defense. He struggles especially against characters with reflectors and has little to offer up close.',
    ],
    strengths: ['Strong camping with several projectiles', 'Very good recovery', 'Potent edgeguarder'],
    weaknesses: ['Slow grab, sluggish mobility', 'Struggles against reflectors', 'Weak up close'],
    combos: {
      'villager-dthrow-fair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, the opponent stays in the air afterward, good for further follow-ups.',
      },
      'villager-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'With a three-turnip hit, according to Game8, up to 28% damage.',
      },
      'villager-nair-ftilt': {
        tip: 'According to Game8, dash attack, down tilt or jab also follow nair.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'villager-dthrow-ftilt': {
        windowLabel: 'very low percents',
        tip: 'According to SmashWiki, guaranteed against most characters at very low damage.',
      },
      'villager-dthrow-pocket': {
        title: 'Down Throw → Pocketed Projectile',
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, down throw is the best way to land a pocketed projectile. A strong enough projectile thrown back kills as early as mid percents, and how strong it is depends on the opponent’s own choice.',
        steps: {
          2: {
            label: 'Throw back the pocketed projectile',
            note: 'The damage depends on what Villager pocketed, which is why Ultimate Frame Data lists no value for Pocket.',
          },
        },
      },
      'villager-fsmash-ko': {
        tip: 'According to SmashWiki, thanks to surprisingly low endlag forward smash is safe on shield and still KOs reliably from around 95%, an unusually comfortable kill option for a zoner.',
        steps: { 0: { note: 'Fully charged, according to the source, it kills from around 60%.' } },
      },
      'villager-bthrow-ko': {
        title: 'Back Throw as a Kill',
        tip: 'According to SmashWiki, one of the strongest back throws in the game: it reliably takes even the heaviest characters around 153%.',
      },
      'villager-dair-jab': {
        title: 'Down Air (late hit) → Jab',
        tip: 'According to SmashWiki, the late down air hit starts combos, for example into jab or forward tilt.',
        steps: { 0: { label: 'SH Dair, late hit' } },
      },
      'villager-dsmash-fsmash': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, down smash leads into his strongest attacks at high percents.',
      },
    },
  },
};
