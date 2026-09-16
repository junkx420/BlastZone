import type { GuideTexts } from './types';

/** Englisch für die Guides aus src/data/guides.ts (ohne S−). */
export const TEXT: GuideTexts = {
  steve: {
    meta: [
      'Steve plays unlike any other fighter: he mines materials, uses them to upgrade his tools and deploys blocks, Minecart and anvil. That gives him huge stage control, a strong defense and one of the best advantage states in the game.',
      'His weaknesses: low mobility on the ground and in the air, and without materials he loses moves like Minecart and TNT. Against range and disjoints he falls behind quickly.',
    ],
    strengths: ['Stage control and recovery help from blocks', 'One of the best advantage states in the game', 'Many unique techniques'],
    weaknesses: ['Low mobility on the ground and in the air', 'No Minecart or TNT options without materials', 'Vulnerable to range and disjoints'],
    combos: {
      'steve-jab-fair': { tip: 'A quick starter off jab. Damage listed with iron tools; wood does less, diamond more.' },
      'steve-dtilt-da': { tip: 'Down tilt keeps the opponent close to the ground, and dash attack catches them right away.' },
      'steve-jab-utilt-fair': { tip: 'Up air and up tilt are Steve’s juggle tools. Blocks below him extend the chain into more up airs.' },
      'steve-dthrow-fsmash': {
        title: 'Down Throw (Anvil) → Forward Smash',
        tip: 'The anvil launches the opponent upward and buys time for the forward smash. Mine iron first.',
        steps: { 1: { label: 'Down Throw (Anvil)', note: 'Costs one iron. Without iron the throw is much weaker.' } },
      },
      'steve-utilt-usmash': { tip: 'Keep the opponent above Steve with two up tilts and finish with up smash.' },
      'steve-utilt-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up tilt and up air have little upward knockback, which is exactly what makes them Steve’s starters and extenders.',
      },
      'steve-block-uair-usmash': {
        title: 'Blocks → Up Air ×2 → Up Smash',
        windowLabel: 'carries the opponent toward the top blast zone',
        tip: 'According to SmashWiki, Steve uses placed blocks and the looping hits of up air and up smash to carry the opponent step by step toward the top blast zone. How far the ladder goes depends on materials and platforms.',
        steps: { 0: { label: 'Place block', note: 'The block gives Steve the height for the next hit.' } },
      },
      'steve-dair-anvil-ko': {
        title: 'Down Air (Anvil)',
        tip: 'According to SmashWiki, one of the strongest down airs in the game: against grounded opponents the anvil KOs from around 88%.',
        steps: { 0: { label: 'Down Air with anvil', note: 'Costs iron; without the anvil only the weak kick remains.' } },
      },
      'steve-ztd-jab-fair': {
        title: 'Down Throw → Jab Chain → Forward Air',
        windowLabel: 'from 0%',
        tip: 'Gfinity describes the route with diamond tools; the golden sword does not work. It only works against characters with a teleport recovery such as Palutena or Inkling.',
        steps: {
          1: { note: 'Without the anvil.' },
          2: { label: 'Dash, release the stick, then jab', note: 'Jab starts on frame 4 and has 15 frames between hits.' },
          6: { label: 'Place block', note: 'Press B offstage to secure your own way back.' },
        },
      },
    },
  },

  sonic: {
    meta: [
      'Sonic lives on speed: hit and run, fast damage and pressure both on and off stage. Short hop fast fall aerials like nair and up air are safe combo starters, and up throw starts combos from 0%.',
      'The downside is kill power: many of his best kill moves need the right position or have noticeable lag, and his endurance dropped compared to Smash 4. Kills often come from forward smash and edgeguards.',
    ],
    strengths: ['Top speed for hit and run', 'Safe SHFF aerials as combo starters', 'Up throw starts combos from 0%'],
    weaknesses: ['Weak kill power', 'Kill moves need position or have lag', 'Less endurance than in Smash 4'],
    combos: {
      'sonic-uthrow-uair': { windowLabel: 'low percents', tip: 'The safe default after any grab when no better option is clear.' },
      'sonic-shff-uair': {
        tip: 'The short hop fast fall up air is a deceptively safe starter and leads straight into the next up air.',
        steps: { 0: { note: 'Thanks to auto-cancel, Sonic lands without lag.' } },
      },
      'sonic-spindash-uair': {
        title: 'Spin Dash (charged) → Jump → Up Air',
        windowLabel: 'mid percents and below',
        tip: 'Jump right after the hit. Nair or forward air work instead of up air too.',
        steps: { 0: { label: 'Spin Dash (charged)' }, 1: { label: 'Jump → Up Air' } },
      },
      'sonic-spincharge-nair': {
        title: 'Spin Charge (charged) → Jump → Nair',
        windowLabel: 'various percents',
        tip: 'Works across a wide percent range. Jump after the hit and pick nair, forward air or up air depending on the trajectory.',
        steps: { 0: { label: 'Spin Charge (charged)' }, 1: { label: 'Jump → Nair' } },
      },
      'sonic-uthrow-spring-uair': {
        windowLabel: 'from mid percents',
        tip: 'When the opponent flies too high for a normal jump, Spring Jump catches up.',
      },
      'sonic-dtilt-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down tilt starts combos at low percents; the most reliable follow-ups are forward air and up air.',
        steps: { 0: { note: 'Launches the opponent diagonally upward.' } },
      },
      'sonic-bthrow-ledge': {
        title: 'Back Throw at the Ledge',
        windowLabel: 'high percents',
        tip: 'Sonic’s only throw that KOs at reasonable percents, according to Game8 at the ledge when the opponent is high enough. Otherwise kills come from forward smash and edgeguards.',
      },
    },
  },

  snake: {
    meta: [
      'Snake controls the stage: grenades, C4 and Nikita lock down space, and many of his attacks start fast, reach far with disjoints and carry huge kill power. His dash attack is one of the best burst options in the game.',
      'His weak spots lie elsewhere: Cypher travels far but is predictable, easy to intercept and destructible. On top of that come a weak disadvantage state and easy-to-read kill options.',
    ],
    strengths: ['Fast attacks with big disjoints', 'Stage control, ledge trapping and edgeguards', 'Guaranteed kill off down throw from 160%'],
    weaknesses: ['Predictable, destructible recovery', 'Weak disadvantage state', 'Kill options are easy to read'],
    combos: {
      'snake-fair-utilt': {
        tip: 'Up tilt immediately after landing. Only works at low percents.',
        steps: { 0: { note: 'Jump all the way first, then forward air.' } },
      },
      'snake-uthrow-utilt': { tip: 'From around 30%, use up air after up throw instead.' },
      'snake-nair-da': { tip: 'The nair has to come from a short hop. Between 0 and 10%, use down tilt instead of dash attack.' },
      'snake-bthrow-da': { windowLabel: 'low percents', tip: 'A simple grab route for the first percents of a stock.' },
      'snake-bthrow-c4': {
        tip: 'According to SmashWiki, back throw leads into dash attack at low percents and into C4 from mid percents; as a kill confirm this works from around 90%.',
        steps: { 2: { label: 'Stick and detonate C4', note: 'The C4 has to be stuck to the opponent beforehand; a second input detonates it.' } },
      },
      'snake-dthrow-ftilt': {
        tip: 'Forward tilt starts on frame 4, so there is no escape from this frame advantage.',
        steps: { 1: { note: 'Knocks the opponent down; from 126%, Snake is +4 frames.' }, 2: { label: 'Forward Tilt (both hits)' } },
      },
      'snake-dthrow-utilt': {
        tip: 'Snake’s best known kill confirm: from 160%, up tilt after down throw is guaranteed.',
        steps: { 1: { note: 'From 160%, Snake is +6 frames.' } },
      },
    },
  },

  'mr-game-and-watch': {
    meta: [
      'Mr. Game & Watch arguably has the best out of shield game in Smash: Fire comes out on frame 3, hits on both sides and punishes every poorly spaced attack.',
      'In exchange he is one of the lightest fighters and dies early. His combos come from down throw, up throw and nair, his kills from nair confirms, Oil Panic or a Judge.',
    ],
    strengths: ['Fire is one of the best out of shield options', 'Nair chains with over 60% damage at low percents', 'Oil Panic kills around 95% at the ledge'],
    weaknesses: ['Third lightest fighter, tied with Squirtle', 'Strong kills often depend on Oil Panic or Judge'],
    combos: {
      'gw-dthrow-nair': { windowLabel: 'low to mid percents', tip: 'A reliable starter. Depending on trajectory, Judge, Fire or up air work too.' },
      'gw-utilt-bair': {
        title: 'Up Tilt → Jump → Back Air ×2',
        windowLabel: 'low percents',
        tip: 'Jump right after the up tilt and follow up backward.',
        steps: { 0: { note: 'The first hit pulls into the second.' }, 1: { label: 'Jump → Bair' } },
      },
      'gw-nair-nair-uair': {
        windowLabel: 'low percents',
        tip: 'Chain nair into itself and into up air; as a longer string, SmashWiki lists over 60% damage.',
      },
      'gw-uthrow-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up throw leads into up air or nair at low percents, and into Fire at high percents instead.',
      },
      'gw-fire-uair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, Fire can be extended into nair or up air at low percents, turning the best out of shield option into a juggle.',
      },
      'gw-dsmash-fsmash': {
        title: 'Down Smash (buries) → Forward Smash',
        windowLabel: 'once the opponent is buried',
        tip: 'According to SmashWiki, the sweetspotted down smash buries, opening up forward smash, down tilt, Oil Panic or Judge.',
        steps: { 0: { note: 'Only the sweetspot buries the opponent.' } },
      },
      'gw-nair-ftilt': {
        title: 'Nair (1st hit, landing) → Forward Tilt',
        windowLabel: 'kill percents',
        tip: 'Only the first nair hit on landing confirms into forward tilt. Down tilt works as well.',
        steps: { 0: { label: 'SH Nair, land with the 1st hit' } },
      },
      'gw-jab-oilpanic': {
        windowLabel: 'high percents',
        tip: 'Needs a filled bucket. Even the weakest Oil Panic kills middleweights around 95% at the ledge.',
        steps: { 0: { label: 'Jab (1st hit)' }, 1: { note: 'Damage of the weakest level; fully charged it does far more.' } },
      },
      'gw-uthrow-fire': {
        windowLabel: 'high percents',
        tip: 'At low percents up air or nair follow; at high percents Fire catches the opponent above.',
      },
      'gw-dthrow-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, a reliable starter at low to mid percents that leads into nair, Judge, Fire or up air. Game8 lists up air as the alternative to nair.',
      },
      'gw-dthrow-fire': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, one of the follow-ups off down throw. Fire shoots the opponent straight up, where up air or nair can continue.',
      },
      'gw-uthrow-nair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, up throw leads into up air or nair at low percents, and into Fire at high percents.',
      },
      'gw-fair-nair': {
        windowLabel: 'mid percents',
        tip: 'According to Game8, a basic route for mid percents.',
        steps: { 0: { note: 'Only the explosion is counted. If the bomb itself hits first, add 4%.' } },
      },
    },
  },

  rob: {
    meta: [
      'R.O.B. survives for an extremely long time: his long, non-linear recovery and high weight carry him to percents where others would have died long ago. Up tilt, down tilt and Gyro are his most important starters.',
      'The downside is his body: big, heavy and fast falling, which makes him easy to combo himself.',
    ],
    strengths: ['Long, non-linear recovery', 'High weight: survives very long', 'Up tilt confirms into up air between 80 and 110%'],
    weaknesses: ['Big hurtbox', 'Heavy and fast falling: easy to combo'],
    combos: {
      'rob-uthrow-uair': { tip: 'Alternatively forward air or an up smash out of a dash.' },
      'rob-dthrow-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'Up tilt chains into itself at low percents.',
        steps: { 4: { label: 'Jump → Up Air' } },
      },
      'rob-nair-rotor': { windowLabel: 'low percents', tip: 'Forward air or up air work out of the nair too.' },
      'rob-gyro-da-gyro': {
        title: 'Gyro (charged) → Dash Attack → Gyro',
        windowLabel: 'low percents',
        tip: 'Pick the Gyro back up after the combo so it is ready for the next setup.',
        steps: { 0: { label: 'Gyro (charged)' } },
      },
      'rob-utilt-uair': {
        tip: 'R.O.B.’s most reliable kill confirm. Below 80% the opponent does not fly far enough, above 110% too far.',
      },
      'rob-dthrow-usmash': {
        windowLabel: 'high percents',
        tip: 'Timing is everything: up smash exactly when the opponent bounces up.',
        steps: { 2: { note: 'Wait until the opponent comes up off the ground.' } },
      },
      'rob-ztd-gyro-rotor': {
        title: 'Gyro Loop → Arm Rotor',
        windowLabel: 'from 0%',
        tip: 'SmashWiki lists R.O.B.’s Gyro as a zero-to-death tool with Arm Rotor as the finisher. How often the loop repeats depends on getting the Gyro back in hand in time.',
        steps: {
          0: { label: 'Gyro (charged)' },
          1: { note: 'Pick the Gyro back up along the way.' },
          4: { note: 'The finisher. Mashing buttons increases the number of hits.' },
        },
      },
    },
  },

  'min-min': {
    meta: [
      'Min Min has outstanding melee range: her ARMS reach further than most swords, and she can move and jump while attacking. With ARMS Change she adapts her arms to neutral and advantage.',
      'In exchange she is extremely fragile offstage, many of her attacks are very committal despite fast startup, and she can hardly get out of disadvantage.',
    ],
    strengths: ['Outstanding melee range', 'Movement and jumps during ARMS attacks', 'ARMS Change for a flexible neutral'],
    weaknesses: ['Extremely vulnerable offstage', 'Many attacks are whiff punishable', 'Few options in disadvantage'],
    combos: {
      'minmin-dtilt-utilt': { tip: 'Down tilt starts combos. Depending on the situation, up tilt, up air or up smash follow.' },
      'minmin-arms-alternate': {
        title: 'Left ARM → Right ARM',
        tip: 'Min Min controls both arms separately: A for the left, B for the right. Alternating them creates pressure that is hard to deal with.',
        steps: { 0: { label: 'Forward Smash (left ARM, A)' }, 1: { label: 'Side B (right ARM, B)' } },
      },
      'minmin-uair-arm': {
        title: 'Up Air → Aerial ARM Attack',
        tip: 'Follow the up air with an aerial ARM attack right away while the opponent stays close.',
        steps: { 1: { label: 'Aerial ARM attack' } },
      },
      'minmin-fthrow-fsmash': {
        windowLabel: 'low to mid percents',
        tip: 'After a throw her main arm is briefly charged and hits harder.',
      },
      'minmin-nair-dtilt-usmash': {
        title: 'Nair (landing) → Down Tilt → Up Smash',
        tip: 'Nair is one of her most useful moves: on landing it opens follow-ups into down air, forward smash or this route.',
        steps: { 0: { label: 'SH Nair, land' } },
      },
      'minmin-dtilt-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down tilt starts combos at low to mid percents; besides up air, nair and up smash work too.',
      },
      'minmin-nair-fsmash': {
        title: 'Nair (landing) → Forward Smash',
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, nair leads into down tilt, the held neutral attack, dash attack and even forward smash at low percents.',
        steps: { 0: { label: 'SH Nair, land' }, 1: { note: 'Value for the Dragon ARM; Ramram hits weaker, Megawatt harder.' } },
      },
      'minmin-bthrow-ledge': {
        title: 'Back Throw at the Ledge',
        tip: 'According to SmashWiki, back throw near the ledge KOs from around 120%. After a throw her left ARM is also briefly powered up.',
      },
    },
  },

  kazuya: {
    meta: [
      'Kazuya’s biggest strength is his deadly combo game. Down-back tilt, Devil Fist and above all the Electric Wind God Fist start combos, and thanks to its long hitstun the EWGF is one of the best starters in the game while being safe on shield.',
      'On the other side stands a weak disadvantage: without aerials to break combos and with a predictable recovery, he loses many situations in the air.',
    ],
    strengths: ['Deadly combo game with many starters', 'EWGF: safe on shield, huge reward', 'Kill confirms into smash attacks and Devil Wings'],
    weaknesses: ['Weak disadvantage state', 'Hardly any aerials to break combos', 'Predictable recovery'],
    combos: {
      'kazuya-dthrow-ewgf': {
        tip: 'According to SmashWiki, Flash Tornado and Tsunami Kick also follow down throw. Drill the EWGF input until it is muscle memory.',
        steps: { 2: { note: 'Just frame: press A exactly with ↘, otherwise you get the regular Wind God Fist.' } },
      },
      'kazuya-nair-fair-dair': { tip: 'An alternative branch after nair: dash and up smash.' },
      'kazuya-ewgf-usmash': {
        windowLabel: 'kill percents',
        tip: 'EWGF leads into strong KO confirms: up smash, forward smash or Devil Wings.',
        steps: { 0: { note: 'The electric stun holds the opponent in place briefly.' } },
      },
      'kazuya-ewgf-devilwings': {
        windowLabel: 'kill percents',
        tip: 'A vertical kill option when the opponent is too far away for a smash attack.',
      },
      'kazuya-cjab-onikick': {
        tip: 'A fast route for high percents straight out of crouch.',
        steps: { 0: { note: 'A while crouching.' } },
      },
      'kazuya-cjab-usmash': { tip: 'Like the Oni Front Kick route, but with up smash as a vertical finisher.' },
      'kazuya-ztd-dthrow-ewgf': {
        windowLabel: 'from 0%',
        tip: 'SmashWiki names down throw into Electric Wind God Fist as Kazuya’s zero-to-death, extended with more input attacks and aerials. How many EWGFs fit in a row depends on weight and DI; three are listed here.',
        steps: { 2: { note: 'Just frame: press A exactly with ↘.' } },
      },
    },
  },

  'diddy-kong': {
    meta: [
      'Diddy’s strong neutral is built on the banana: it opens combos, KO setups and edgeguards. Forward, back and up air follow down throw very reliably, including the Hoo Hah KO confirm.',
      'He struggles to close out stocks safely at high percents. His recovery is vulnerable: if Rocketbarrel Boost gets hit, a long endlag follows that often costs the stock.',
    ],
    strengths: ['Banana Peel for combos, setups and edgeguards', 'Down throw as a reliable starter', 'Hoo Hah as a KO confirm'],
    weaknesses: ['Few reliable kills at high percents', 'Vulnerable recovery with long endlag'],
    combos: {
      'diddy-dthrow-fair': { tip: 'Down throw sets up forward, back and up air very reliably.' },
      'diddy-uthrow-uair': { tip: 'Every aerial except down air works out of up throw.' },
      'diddy-hoohah': {
        title: 'Down Throw → Up Air (“Hoo Hah”)',
        tip: 'The window shifts with the opponent’s weight, rage and DI.',
      },
      'diddy-dthrow-bair': {
        windowLabel: 'around 110% at the ledge',
        tip: 'Grab at the ledge with your back to the blast zone, then follow with back air.',
      },
      'diddy-banana-fsmash': {
        windowLabel: 'kill percents',
        tip: 'The banana enables KO confirms into smash attacks. A setup, not a guaranteed combo from neutral.',
        steps: { 0: { note: 'Pull a banana and place or throw it in front of the opponent.' }, 1: { note: 'The opponent trips.' } },
      },
      'diddy-da-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up, back or forward air follow dash attack, depending on where the opponent flies.',
        steps: { 0: { note: 'Sends the opponent upward.' } },
      },
      'diddy-dtilt-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down tilt combos into forward or back air.',
      },
      'diddy-nair-fair': {
        windowLabel: 'low to high percents',
        tip: 'According to SmashWiki, nair leads into another aerial from low to high percents.',
      },
      'diddy-dtilt-usmash': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, a KO confirm at high percents and the second reliable kill route besides the Hoo Hah.',
      },
    },
  },

  luigi: {
    meta: [
      'Luigi wins through the grab. His down throw is one of the best combo starters in the game and leads into zero-to-death routes or early KOs against most of the cast.',
      'On top of that he has a strong air game and one of the best jumps on the roster. The downside: sluggish mobility, one of the slowest air speeds and a very predictable recovery leave him open to juggles and edgeguards.',
    ],
    strengths: ['Down throw is one of the best combo starters', 'Strong air game with one of the best jumps', 'Super Jump Punch kills grounded opponents from 37%'],
    weaknesses: ['Sluggish mobility, very slow in the air', 'Vulnerable to juggles', 'Long but very predictable recovery'],
    combos: {
      'luigi-dthrow-utilt': {
        windowLabel: 'low percents',
        tip: 'At low percents the opponent stays close above Luigi. Up smash works here as well.',
      },
      'luigi-dthrow-uair': {
        windowLabel: 'low percents',
        tip: 'Down throw leads into every aerial; the clean up air hit extends the chain.',
      },
      'luigi-dthrow-upb': {
        title: 'Down Throw → Super Jump Punch (aerial)',
        windowLabel: 'depends on weight and DI',
        tip: 'One of the KO setups off down throw. Jump after the throw and up B straight into the opponent.',
        steps: { 2: { label: 'Jump → Super Jump Punch', note: 'Only the sweetspot on first contact kills.' } },
      },
      'luigi-dthrow-bair': {
        windowLabel: 'depends on weight and DI',
        tip: 'A horizontal KO setup off down throw when Super Jump Punch does not fit.',
      },
      'luigi-dthrow-cyclone': {
        title: 'Down Throw → Luigi Cyclone (aerial)',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, reliable on platforms or when the opponent DIs poorly.',
        steps: { 2: { label: 'Jump → Luigi Cyclone' } },
      },
      'luigi-ztd-dthrow-dair-loop': {
        title: 'Down Throw → Dair-Nair Chain → Super Jump Punch',
        tip: 'Game8 lists exactly this order as Luigi’s 0-to-death between 0 and 10%. Against smaller opponents a grab attack replaces the up air; against King K. Rool and Bowser another nair-dair loop goes in front.',
        steps: { 2: { label: 'SH Dair, fast-fallen' }, 4: { label: 'SH Dair, fast-fallen' }, 6: { note: 'Only first contact kills.' } },
      },
      'luigi-dthrow-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, one of the most reliable follow-ups off down throw; from forward air it continues into itself, into nair or into up air.',
      },
      'luigi-cyclone-ground-ko': {
        title: 'Grounded Luigi Cyclone',
        tip: 'According to SmashWiki, the grounded Cyclone KOs middleweights around 160%, while the aerial version is the kill confirm off down throw.',
        steps: { 0: { label: 'Luigi Cyclone (grounded)', note: 'The last hit carries the knockback.' } },
      },
      'luigi-utilt-utilt': { windowLabel: 'low percents', tip: 'According to SmashWiki, up tilt links into itself at low percents.' },
      'luigi-utilt-uair': {
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki, up tilt leads into any of Luigi’s aerials at mid to high percents.',
      },
      'luigi-utilt-fair': {
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki, up tilt leads into any of Luigi’s aerials at mid to high percents.',
      },
      'luigi-dtilt-fsmash': {
        windowLabel: 'very low percents',
        tip: 'According to SmashWiki, thanks to its minimal endlag down tilt links into forward smash at very low percents.',
      },
      'luigi-dtilt-da': {
        windowLabel: 'very low percents',
        tip: 'According to SmashWiki, one of the follow-ups off down tilt at very low percents, alongside forward tilt, forward smash and down tilt itself.',
        steps: { 1: { label: 'Dash Attack, all hits' } },
      },
      'luigi-dtilt-ftilt': {
        windowLabel: 'very low percents',
        tip: 'According to SmashWiki, one of the follow-ups off down tilt at very low percents.',
      },
      'luigi-uthrow-fair': {
        windowLabel: 'low to mid percents, depends on DI',
        tip: 'According to SmashWiki, up throw links into forward air or up air depending on the opponent’s DI.',
      },
      'luigi-uthrow-uair': {
        windowLabel: 'low to mid percents, depends on DI',
        tip: 'According to SmashWiki, up throw links into forward air or up air depending on the opponent’s DI.',
      },
      'luigi-dthrow-usmash': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw also leads into up smash at low percents, besides up tilt.',
        steps: { 2: { note: 'Close hit counted; further out it deals 17%.' } },
      },
      'luigi-ztd-dthrow-zair': {
        title: 'Down Throw → Dair-Nair Chain → Grab Attack → Super Jump Punch',
        tip: 'Game8’s variant against smaller opponents: the grab attack replaces the up air before the Super Jump Punch.',
        steps: {
          2: { label: 'SH Dair, fast-fallen' },
          4: { label: 'SH Dair, fast-fallen' },
          5: { label: 'Aerial grab attack' },
          6: { note: 'Only first contact kills.' },
        },
      },
      'luigi-ztd-dthrow-heavy': {
        title: 'Down Throw → Double Dair-Nair Chain → Super Jump Punch',
        tip: 'According to Game8, the normal chain is not enough against King K. Rool and Bowser; there, another dair-nair loop goes in front.',
        steps: { 2: { label: 'SH Dair, fast-fallen' }, 4: { label: 'SH Dair, fast-fallen' }, 8: { note: 'Only first contact kills.' } },
      },
    },
  },

  fox: {
    meta: [
      'Fox combines outstanding movement options, strong frame data and high damage. Up tilt is his most versatile starter, and fast smash attacks give him reliable kills.',
      'In exchange he is the fifth lightest fighter with the highest fall speed in the game. His recovery is linear and therefore easy to edgeguard.',
    ],
    strengths: ['Outstanding mobility and frame data', 'Up tilt leads into almost every move', 'Reliable kills from fast smash attacks'],
    weaknesses: ['Fifth lightest fighter', 'Highest fall speed in the game', 'Linear recovery'],
    combos: {
      'fox-utilt-uair': { tip: 'Up tilt chains into itself, jab, tilts, nair, up air and back air. Up air does the most damage.' },
      'fox-dtilt-nair': { tip: 'Down tilt also leads into up smash, down air, back air and forward air.' },
      'fox-nair-usmash': {
        title: 'Late Nair (falling) → Up Smash',
        windowLabel: 'kill percents',
        tip: 'According to SmashWiki, Fox’s most reliable way into up smash.',
        steps: { 0: { label: 'SH Nair late, fast fall', note: 'Only the late hit keeps the opponent close enough.' } },
      },
      'fox-utilt-usmash': { windowLabel: 'higher percents', tip: 'At higher percents up tilt goes straight into up smash.' },
      'fox-nair-rapidjab': {
        title: 'Nair (falling) → Multi-Hit Jab',
        windowLabel: 'various percents',
        tip: 'According to Game8, possible at various percents; the route requires the neutral air to hit while falling.',
        steps: {
          0: { label: 'SH Nair, falling', note: 'Only the late hit keeps the opponent close enough.' },
          1: { note: 'Each rapid jab hit deals 0.7%, the finisher 2%.' },
        },
      },
      'fox-da-nair': { windowLabel: 'various percents', tip: 'Dash attack pushes the opponent into the air, where neutral air picks them up.' },
      'fox-dtilt-uair-uair': {
        windowLabel: 'from mid percents',
        tip: 'According to Game8, from mid percents; Fox has to be right next to the opponent for the down tilt.',
      },
      'fox-fair-usmash': {
        title: 'Forward Air (without the last hit) → Up Smash',
        windowLabel: 'against airborne opponents',
        tip: 'According to Game8, against airborne opponents: cut the forward air short, let the opponent land and follow up with up smash immediately.',
        steps: { 0: { label: 'SH Fair, skip the last hit', note: 'Without the last hit the opponent drops to the ground in front of Fox.' } },
      },
      'fox-ftilt-ftilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, forward tilt links into itself once more at low percents.',
        steps: { 0: { note: 'Unangled value; angled it deals 8%.' } },
      },
      'fox-ftilt-da': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, forward tilt leads into dash attack at low to mid percents, and rather into tech chases at mid percents.',
        steps: { 0: { note: 'Unangled value; angled it deals 8%.' }, 1: { note: 'Early hit counted; the late hit deals 5%.' } },
      },
      'fox-utilt-nair': { tip: 'According to SmashWiki, one of the many follow-ups off up tilt.' },
      'fox-utilt-bair': { tip: 'According to SmashWiki, up tilt also links into back air.' },
      'fox-dtilt-usmash': {
        tip: 'According to SmashWiki, thanks to its launch angle down tilt is one of Fox’s best combo starters, and up smash is among its follow-ups.',
      },
      'fox-dtilt-bair': {
        tip: 'According to SmashWiki, one of the follow-ups off down tilt, alongside nair, down air, forward air and up smash.',
      },
      'fox-uair-usmash': {
        title: 'Up Air (first hit) → Up Smash',
        windowLabel: 'at any percent',
        tip: 'According to SmashWiki, only the first up air hit leads into other moves at any percent against a grounded opponent, up smash above all.',
        steps: { 0: { label: 'SH Uair, first hit only', note: 'Against a grounded opponent only the first kick connects.' } },
      },
      'fox-da-usmash-ko': {
        title: 'Dash Attack (late hit) → Up Smash',
        windowLabel: 'higher percents',
        tip: 'According to SmashWiki, the late hit of dash attack becomes a KO setup into up smash at higher percents; at mid percents it leads into forward air instead.',
        steps: { 0: { label: 'Dash Attack, late hit' } },
      },
      'fox-illusion-uair-ko': {
        title: 'Fox Illusion (grounded) → Up Air',
        windowLabel: 'around 100% against middleweights',
        tip: 'According to SmashWiki, the end of a grounded Fox Illusion works as a KO setup into up air against middleweights around 100%.',
        steps: { 0: { label: 'Grounded Fox Illusion', note: 'The end of the grounded version sets up the up air.' } },
      },
    },
  },

  mario: {
    meta: [
      'Mario’s biggest advantage is his fast frames. His combo game is flexible: up throw and up tilt lead into aerials at low percents, and Super Jump Punch finishes ladder combos.',
      'His weaknesses: short range and no reliable finishers, which makes kills harder for him than for many others.',
    ],
    strengths: ['Very fast frames', 'Flexible, high damage combo game', 'Up air kills vertically at high percents'],
    weaknesses: ['Short range', 'No reliable finishers'],
    combos: {
      'mario-uthrow-uair': {
        windowLabel: 'low to mid percents',
        tip: 'Up throw leads into every aerial except forward air; up air chains into itself up to higher percents.',
      },
      'mario-utilt-utilt': {
        windowLabel: 'low percents',
        tip: 'At low percents up tilt chains into itself.',
        steps: { 1: { note: 'Walk after the opponent underneath.' } },
      },
      'mario-utilt-uair': {
        windowLabel: 'mid to high percents',
        tip: 'From mid percents the opponent flies higher; then up tilt into aerials instead of into itself.',
      },
      'mario-uthrow-ladder': {
        windowLabel: 'from 0%',
        tip: 'SmashWiki lists Mario’s ladder combos as zero-to-death. According to the source, how high the ladder goes depends on the opponent, the stage and Mario’s own rage; Super Jump Punch kills near the top blast zone.',
      },
      'mario-dthrow-sjp': { windowLabel: 'mid percents', tip: 'Against most characters, jab and up air also work off down throw.' },
      'mario-usmash-utilt-ladder': {
        windowLabel: 'low percents',
        tip: 'According to Game8, around 52% damage at low percents. Mario’s longest ground route, flowing into the ladder.',
      },
      'mario-nair-usmash': {
        windowLabel: 'low percents',
        tip: 'According to Game8, meant for the moment the opponent turns their back to Mario.',
      },
      'mario-uair-uair-bair': {
        windowLabel: 'mid percents and below',
        tip: 'The juggle against opponents who are already airborne. According to Game8, nair works instead of back air too.',
      },
      'mario-uair-fair-ledge': {
        title: 'Up Air → Forward Air (meteor at the ledge)',
        windowLabel: 'high percents',
        tip: 'According to Game8, the stock-ending finisher at the ledge: the sweetspotted forward air spikes the opponent downward.',
        steps: { 1: { note: 'Only the sweetspot hits downward.' } },
      },
    },
  },

  ryu: {
    meta: [
      'Ryu has a strong combo game thanks to automatically facing the opponent and special cancels out of several moves. Light tilts flow directly into specials, stronger via command input than via button.',
      'His mobility is below average, his approach options are limited, and his recovery is linear and vulnerable.',
    ],
    strengths: ['Special cancels out of tilts', 'Automatically faces the opponent', 'High damage through command inputs'],
    weaknesses: ['Below average mobility', 'Limited approach options', 'Linear, vulnerable recovery'],
    combos: {
      'ryu-lftilt-tatsu': {
        tip: 'The close light forward tilt combos into every special. Tatsumaki brings damage and stage position.',
        steps: {
          0: { note: 'Tap it close to the opponent; they slide toward Ryu.' },
          1: { note: 'Command input, also possible with A or side taunt.' },
        },
      },
      'ryu-ldtilt-shakunetsu': {
        tip: 'Specials are the most effective follow-up out of the light down tilt.',
        steps: { 0: { note: 'Ryu cannot jump directly after the light down tilt.' } },
      },
      'ryu-lftilt-shoryu': {
        windowLabel: 'kill percents',
        tip: 'The input Shoryuken chains easily out of Ryu’s other moves. If the input comes too late, only the weaker button version is left.',
        steps: { 0: { note: 'Tap it close to the opponent.' }, 1: { note: 'Only the command input gives the strong version.' } },
      },
      'ryu-hdtilt-tatsu': {
        title: 'Down Tilt (held) → Tatsumaki',
        windowLabel: 'very high percents',
        tip: 'According to SmashWiki, an almost guaranteed KO at very high percents.',
        steps: { 0: { label: 'Down Tilt (A held)', note: 'Can be canceled immediately on hit or on shield.' } },
      },
      'ryu-jab-jab-shoryu': {
        windowLabel: 'high percents',
        tip: 'According to Game8, the classic one-two against opponents at high percents; it lives and dies with a fast command input.',
        steps: { 0: { label: 'Jab (light)' }, 1: { label: 'Jab (light)' }, 2: { note: 'The input has to come right after the second jab.' } },
      },
      'ryu-utilt-shoryu': {
        windowLabel: 'high percents',
        tip: 'According to Game8, the fastest kill route at high percents: the light up tilt starts early and flows straight into the Shoryuken.',
        steps: { 0: { label: 'Up Tilt (light tap)', note: 'Short startup, also good as a punish.' } },
      },
      'ryu-dtilt-shoryu': {
        windowLabel: 'high percents',
        tip: 'According to Game8, the low variant; down tilt also catches opponents who want to stay in shield.',
        steps: { 0: { label: 'Down Tilt (A held)' } },
      },
    },
  },

  'captain-falcon': {
    meta: [
      'Falcon lives on speed and mobility: he pushes opponents back, combos them or carries them to the blast zone. Down throw, Raptor Boost and the first nair hit are his most important starters, and the Knee Smash ends many routes.',
      'In exchange his size and high fall speed make him easy to combo, his linear recovery is easy to edgeguard, and in most matchups he has to be the one who approaches.',
    ],
    strengths: ['High speed and strong mobility', 'Many starters: down throw, Raptor Boost, nair', 'Lots of strong kill moves'],
    weaknesses: ['Big and fast falling: easy to combo', 'Linear, easy to intercept recovery', 'Has to approach in most matchups'],
    combos: {
      'falcon-dthrow-uair': {
        windowLabel: 'wide percent window',
        tip: 'Up air is Falcon’s most reliable follow-up off down throw and chains into itself.',
      },
      'falcon-dthrow-nair-nair': {
        windowLabel: 'low percents',
        tip: 'Dash after each nair. If the opponent ends up offstage, a down air spike can follow.',
      },
      'falcon-nair-fair': {
        title: 'Nair (1st hit) → Jump → Forward Air',
        windowLabel: 'mid percents and below',
        tip: 'The nair has to be canceled so that only the first hit connects before landing.',
        steps: {
          0: { label: 'SH Nair, land with the 1st hit' },
          1: { label: 'Jump → Forward Air', note: 'With the knee sweetspot it deals much more damage.' },
        },
      },
      'falcon-dthrow-uair-knee': {
        windowLabel: 'high percents',
        tip: 'Works as long as the opponent does not air dodge. Not a guaranteed combo, but a route with KO potential.',
        steps: { 3: { note: 'Only the sweetspot has full kill power.' } },
      },
      'falcon-dair-knee': {
        title: 'Down Air → Jump → Knee',
        windowLabel: 'high percents',
        tip: 'According to Game8, a route that can kill at high percents.',
        steps: { 1: { label: 'Jump → Knee Smash' } },
      },
      'falcon-dthrow-bair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw starts into nair and back air at low percents, and back air does the most damage.',
      },
      'falcon-raptor-utilt': {
        title: 'Raptor Boost → Up Tilt (at the ledge)',
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, the grounded Raptor Boost does not KO by itself but combos reliably, even into up tilt at the ledge at mid percents.',
        steps: { 0: { label: 'Raptor Boost (grounded)' } },
      },
      'falcon-raptor-knee': {
        windowLabel: 'certain percent ranges',
        tip: 'According to SmashWiki, Raptor Boost leads into Falcon’s aerials, and at the right percents straight into the Knee Smash.',
        steps: {
          0: { label: 'Raptor Boost (grounded)' },
          1: { label: 'Jump → Knee Smash', note: 'Only the knee sweetspot has full kill power.' },
        },
      },
      'falcon-uair-falcondive': {
        title: 'Up Air → Falcon Dive (near the blast zone)',
        windowLabel: 'near the top blast zone',
        tip: 'According to SmashWiki, up air chains into itself, into down air at low to mid percents, into the knee later, and into Falcon Dive near the top blast zone.',
        steps: { 1: { label: 'Falcon Dive, hit and throw' } },
      },
      'falcon-nair-knee': {
        title: 'Nair (1st hit) → Knee Smash',
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki, nair becomes a combo starter when only the first hit connects, and at mid to high percents it even leads into the Knee Smash.',
        steps: {
          0: { label: 'SH Nair, land with the 1st hit' },
          1: { label: 'Jump → Knee Smash', note: 'Only the knee sweetspot deals full damage.' },
        },
      },
      'falcon-uair-uair': { tip: 'According to SmashWiki, up air chains into itself.' },
      'falcon-uair-dair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up air leads into down air at low to mid percents.',
      },
      'falcon-uair-knee': {
        windowLabel: 'high percents',
        tip: 'Game8 lists this follow-up for opponents at high percents, and SmashWiki confirms the Knee Smash off up air at higher percents.',
        steps: { 1: { note: 'Only the knee sweetspot deals full damage.' } },
      },
      'falcon-raptor-uair': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, since update 8.0.0 Raptor Boost confirms into up air at high percents.',
        steps: { 0: { label: 'Raptor Boost (grounded)' }, 1: { label: 'Jump → Up Air' } },
      },
      'falcon-dthrow-knee': {
        windowLabel: 'certain percent ranges',
        tip: 'According to SmashWiki, down throw leads straight into forward air at certain percents and is then a KO setup.',
        steps: { 2: { label: 'Jump → Knee Smash', note: 'Only the knee sweetspot has full kill power.' } },
      },
    },
  },
};
