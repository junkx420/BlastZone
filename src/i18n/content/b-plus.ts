import type { GuideTexts } from './types';

const FALLING_SH_NAIR = 'SH Nair, falling';
const NAIR1_FF = 'Nair, 1st hit with fast fall';
const TAPPED_UTILT = 'Up Tilt, tapped';
const TAPPED_DTILT = 'Down Tilt, tapped';
const ZAIR_HOOK = 'Zair (hookshot)';
const BELL = 'Bonus Fruit: Bell';
const BELL_STUN = 'The bell stuns the opponent.';
const FIRE_ARROW = 'Fire Arrow';
const DASH_LATE = 'Dash Attack, late hit';
const CARGO_PICKUP = 'Cargo Forward Throw (pick up)';

/** Englisch für src/data/guides-b-plus.ts. */
export const TEXT: GuideTexts = {
  terry: {
    meta: [
      'Terry’s normals cancel into his specials, turning jab, tilts and aerials into damage or a stock. From 100%, GO! kicks in: Power Geyser and Buster Wolf become available, and according to Game8 both can be set up.',
      'In exchange he has to wait for the opponent to come to him and struggles against ranged characters. His disadvantage state is below average because he lands poorly, and his recovery is exploitable.',
    ],
    strengths: ['Normals cancel into specials', 'Super specials that can be set up from 100%', 'High damage from short strings'],
    weaknesses: ['Has to wait for the opponent to approach', 'Poor disadvantage when landing', 'Exploitable recovery'],
    combos: {
      'terry-nair-jab-dunk': {
        tip: 'According to SmashWiki, Power Dunk can even be canceled out of jab. Terry’s standard punish.',
        steps: { 3: { note: 'Down special or as a command input →↓↘ + A/B.' } },
      },
      'terry-nair-dsmash': {
        tip: 'The simplest follow-up off nair when the command input does not come out.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'terry-nair-usmash': {
        tip: 'More damage than down smash, but the opponent has to stay in front of Terry.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'terry-dthrow-uair-tackle': {
        tip: 'The upward throw route; according to SmashWiki, neutral and up air offer plenty of combo opportunities.',
        steps: { 3: { note: 'Hold ↓, then ↑.' } },
      },
      'terry-ftilt-burning': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, a very easy and reliable confirm at low to mid percents.',
        steps: { 1: { note: 'Stronger with the command input than the regular side B.' } },
      },
      'terry-ftilt-buster': {
        windowLabel: 'from 100% (GO!)',
        tip: 'The same confirm, but with a super: according to Game8, the super specials are extremely strong, have very high knockback and can be set up.',
      },
      'terry-utilt-geyser': {
        windowLabel: 'from 100% (GO!)',
        tip: 'According to SmashWiki, up tilt is a very effective and reliable confirm into Power Geyser.',
      },
      'terry-utilt-crackshoot': {
        tip: 'The version without GO!: Crack Shoot takes Terry behind the opponent and stays safe.',
      },
    },
  },

  'pokemon-trainer': {
    meta: [
      'Three Pokémon, three playstyles: Squirtle combos hardest at low percents, Ivysaur controls space with range and projectiles, Charizard brings weight and kill power. According to SmashWiki this leaves hardly any clear losing matchups and a strong offstage game.',
      'Solo maining is discouraged, though: Squirtle struggles to close out stocks, Ivysaur has a poor disadvantage state and a weak recovery, Charizard the typical super heavyweight problems. Switching has a cooldown.',
    ],
    strengths: ['Three playstyles with their own win conditions', 'Hardly any clear losing matchups', 'Strong offstage presence'],
    weaknesses: ['Solo maining does not work', 'Ivysaur has a weak recovery', 'Switching only with a cooldown'],
    combos: {
      'squirtle-da-utilt-bair': {
        windowLabel: 'low percents only',
        tip: 'Game8 puts the route at around 48%. Squirtle’s damage machine at the start of a stock.',
      },
      'ivysaur-fair-utilt': { windowLabel: 'low percents only', tip: 'Around 20% according to Game8. Ivysaur’s simplest way in.' },
      'ivysaur-uthrow-utilt': { windowLabel: 'low percents only', tip: 'The standard follow-up after the grab at low percents.' },
      'zard-dthrow-fair': {
        windowLabel: 'across wide percent ranges',
        tip: 'According to Game8, at various percents, and the default route when it is unclear what should follow the grab.',
      },
      'zard-nair-jab': {
        title: 'Charizard: Nair (falling) → Jab',
        windowLabel: 'across wide percent ranges',
        tip: 'Land the nair while falling, then attach the full jab immediately.',
        steps: { 0: { label: 'Nair while falling' }, 1: { label: '3-hit Jab' } },
      },
      'squirtle-utilt-chain': { windowLabel: 'low percents only', tip: 'Around 48% according to Game8.' },
      'ivysaur-dthrow-vinewhip': {
        title: 'Ivysaur: Down Throw → Jump → Vine Whip',
        tip: 'According to SmashWiki, Vine Whip off down throw kills from around 83%.',
        steps: { 2: { label: 'Jump → Vine Whip' } },
      },
      'ivysaur-razorleaf-fair': {
        tip: 'According to Game8, works at various percents, but only from close range.',
      },
      'zard-utilt-fair': { windowLabel: 'mid percents', tip: 'Around 21% according to Game8. Charizard’s damage route from the ground.' },
      'squirtle-utilt-waterfall': {
        tip: 'According to SmashWiki, Waterfall off up tilt kills from around 130% on Final Destination.',
      },
      'squirtle-uthrow-uair': {
        tip: 'According to SmashWiki, up air off up throw works up to about 60%. At low damage, nair fits as well.',
      },
      'squirtle-dthrow-fair': {
        windowLabel: 'at various percents',
        tip: 'According to SmashWiki a good combo throw: forward air and up air follow down throw at various percents.',
      },
      'squirtle-dthrow-waterfall': {
        windowLabel: 'mid percents',
        tip: 'According to Game8, the safe pick after the grab when it is unclear what should follow.',
      },
      'squirtle-uthrow-uair-waterfall': {
        windowLabel: 'low percents only',
        tip: 'According to Game8, a simple route for around 40% damage.',
      },
      'squirtle-dthrow-dair-chain': {
        windowLabel: 'low percents, against big opponents',
        tip: 'According to Game8, tap the stick slightly toward the opponent during the up airs. The route is meant for big opponents.',
      },
      'ivysaur-uthrow-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up air off up throw links from low to mid percents, at 0% as well as around 30%.',
      },
      'ivysaur-uthrow-vinewhip': {
        windowLabel: 'from around 30% into high percents',
        tip: 'According to SmashWiki, Vine Whip off up throw holds up into high percents, up air only into mid percents.',
      },
      'ivysaur-dthrow-uair': {
        windowLabel: 'at 0%',
        tip: 'According to SmashWiki, down throw at 0% starts combos into up air or into a dash-canceled up tilt.',
      },
      'ivysaur-fair-vinewhip': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, a true combo into the diagonally angled Vine Whip at low percents.',
        steps: { 1: { label: 'Vine Whip, angled' } },
      },
      'ivysaur-nair-bair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, nair leads into a forward or back air from low to mid percents.',
      },
      'ivysaur-razorleaf-uair': { tip: 'According to Game8, like the forward air version, only from close range.' },
      'zard-bthrow-fair': {
        tip: 'According to SmashWiki, a true combo up to about 50%, and so is back air. The wiki considers back throw Charizard’s most versatile combo throw.',
      },
      'zard-bthrow-da': {
        windowLabel: 'very low percents',
        tip: 'According to SmashWiki, a true combo at very low percents. After that, forward and back air take over.',
      },
      'zard-dthrow-nair': {
        windowLabel: 'up to mid percents',
        tip: 'According to SmashWiki, down throw leads into nair or forward air up to mid percents. As a starter it remains much weaker than back throw.',
      },
    },
  },

  lucina: {
    meta: [
      'Lucina has no tipper: her attacks deal the same damage along the whole blade. According to SmashWiki that makes her more consistent than Marth, allows more aggressive play and gives her a stronger close-range game.',
      'In exchange she has a hard time escaping juggles, with mediocre air speed, low gravity and a big hurtbox. Her aerials start fast but have a lot of endlag, she lacks a projectile, and her grab game is weak.',
    ],
    strengths: ['Consistent damage without tippers', 'Fast startup and good range', 'Strong close-range game'],
    weaknesses: ['Hard to escape juggles', 'Aerials with high endlag', 'No projectile, weak grab game'],
    combos: {
      'lucina-dthrow-bair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down throw leads into up or back air depending on DI.',
      },
      'lucina-dthrow-uair': {
        windowLabel: 'from mid percents',
        tip: 'According to SmashWiki, DI decides: at low to mid percents up or back air follow, at higher percents only up air remains.',
      },
      'lucina-utilt-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'Around 30 damage according to Game8, best against opponents who are about to land.',
      },
      'lucina-uair-uair': {
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, up tilt starts the juggle and up air keeps it going.',
      },
      'lucina-fair-dancingblade': {
        title: 'Fast-Fall Fair → Dancing Blade (down)',
        tip: 'Out of the fast-fallen forward air, input the follow-up hits with the stick down.',
        steps: { 0: { label: 'Fair with fast fall' }, 1: { label: 'Dancing Blade, follow-up hits down' } },
      },
      'lucina-nair-fsmash': {
        title: 'Nair (1st hit) → Forward Smash',
        windowLabel: 'wide range, kills at higher percents',
        tip: 'The first nair hit has little knockback scaling; with a fast fall, according to Game8, it becomes the stock ender.',
        steps: { 0: { label: NAIR1_FF } },
      },
      'lucina-nair-tilts': {
        title: 'Nair (1st hit) → Tilts',
        tip: 'Same input, different follow-up: according to SmashWiki the first nair hit combos into many of her tilts.',
        steps: { 0: { label: NAIR1_FF } },
      },
      'lucina-nair-ftilt': {
        title: 'Nair (1st hit) → Forward Tilt',
        windowLabel: 'even at high percents',
        tip: 'According to SmashWiki, thanks to the fast fall and low landing lag the first nair hit links into many tilts, even at high percents.',
        steps: { 0: { label: NAIR1_FF } },
      },
      'lucina-nair-dtilt': {
        title: 'Nair (1st hit) → Down Tilt',
        windowLabel: 'even at high percents',
        tip: 'According to SmashWiki, the first nair hit links into many tilts, even at high percents.',
        steps: { 0: { label: NAIR1_FF } },
      },
    },
  },

  ken: {
    meta: [
      'According to SmashWiki, Ken is the more aggressive shoto: huge damage from combos and strings, finished with strong KO confirms into Shoryuken. His normals have extra hitlag, which gives his hits the weight of classic fighting games.',
      'He largely shares Ryu’s weaknesses: easy to combo, a straight recovery, and hard to bring back from below because of fast falling, low jumps and poor air acceleration. He can hardly force early KOs; they depend on execution.',
    ],
    strengths: ['Very high damage from combos', 'Strong KO confirms into Shoryuken', 'Extra hitlag for safe confirms'],
    weaknesses: ['Easy to combo', 'Straight, low recovery', 'Hardly any forced early KOs'],
    combos: {
      'ken-jab-jab-shoryuken': {
        windowLabel: 'even at mid percents',
        tip: 'Ken’s bread and butter: two light jabs, then the command input right away.',
      },
      'ken-ftilt-shoryuken': {
        title: 'Forward Tilt (close) → Shoryuken',
        tip: 'Only at point-blank range. Input the Shoryuken as fast as possible after the hit.',
        steps: { 0: { label: 'Forward Tilt at point-blank range' } },
      },
      'ken-utilt-shoryuken': {
        tip: 'Buffer the Shoryuken right after the hit. According to SmashWiki, the tapped up tilt also combos into itself.',
        steps: { 0: { label: TAPPED_UTILT } },
      },
      'ken-uair-shoryuken': { tip: 'The aerial version, according to Game8 with considerable damage.' },
      'ken-dair-shoryuken': {
        title: 'Down Air (falling) → Shoryuken',
        windowLabel: 'high percents',
        tip: 'According to Game8, high damage, and at high percents the route ends the stock.',
        steps: { 0: { label: 'Dair while falling' } },
      },
      'ken-utilt-dair-ledge': {
        title: 'Up Tilt → Down Air (at the ledge)',
        windowLabel: 'high percents near the ledge',
        tip: 'According to SmashWiki, the tapped up tilt even combos into down air at high percents near the ledge.',
        steps: { 0: { label: TAPPED_UTILT } },
      },
      'ken-nair-dtilt-tatsumaki': {
        tip: 'The ending of Game8’s long Focus Attack route. According to SmashWiki, down tilt is excellent for extending.',
        steps: { 0: { label: FALLING_SH_NAIR }, 1: { label: TAPPED_DTILT }, 2: { label: TAPPED_DTILT } },
      },
    },
  },

  'zero-suit-samus': {
    meta: [
      'According to SmashWiki, Zero Suit Samus has one of the best air games in the entire cast: nair combos into each of her aerials from 0% across a very wide range, up air juggles, and her grab has enormous range.',
      'Her weakness is endurance: low weight and a big hurtbox make her die early, even though her recovery is among the best. Her ground and out of shield games are problematic as well.',
    ],
    strengths: ['Outstanding air game', 'Nair combos into every aerial from 0%', 'Very long grab'],
    weaknesses: ['Dies early (light, big hurtbox)', 'Weak out of shield game', 'Ground game with gaps'],
    combos: {
      'zss-nair-fair': {
        windowLabel: 'across wide percent ranges',
        tip: 'Around 20% according to Game8. According to SmashWiki, nair combos into each of her aerials from 0%.',
      },
      'zss-nair-grab': {
        windowLabel: 'low percents',
        tip: 'At low percents the safest follow-up, leading into the throw routes from here.',
        steps: { 0: { label: FALLING_SH_NAIR }, 1: { note: 'The long grab also catches opponents who slide away.' } },
      },
      'zss-uair-fair': {
        windowLabel: 'across wide percent ranges',
        tip: 'According to SmashWiki, up air has excellent juggling potential.',
      },
      'zss-dtilt-fair': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down tilt also leads into up air and the dashing up smash at low percents.',
      },
      'zss-dsmash-boostkick': {
        windowLabel: 'higher percents',
        tip: 'Game8 calls this route an essential kill confirm for higher percents; down smash paralyzes.',
      },
      'zss-fair-bair': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, forward air has KO confirms into back air, Boost Kick and Flip Jump at high percents.',
      },
      'zss-dtilt-usmash': {
        windowLabel: 'low percents',
        tip: 'The ground version: according to SmashWiki, down tilt links into the dashing up smash at low percents.',
      },
    },
  },

  'pac-man': {
    meta: [
      'Pac-Man controls space with Bonus Fruit and the hydrant, eight projectiles with different flight behavior, plus one of the best recoveries in the game and normals with very good frame data.',
      'His problem is kills: he has hardly any reliable finishing options, and his own projectiles can be used against him. Even his strong recovery is predictable enough to exploit.',
    ],
    strengths: ['Zoning with eight Bonus Fruit projectiles', 'One of the best recoveries in the game', 'Very good frame data on his normals'],
    weaknesses: ['Few reliable kill options', 'His own projectiles can be used against him', 'Exploitable recovery'],
    combos: {
      'pacman-uthrow-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up throw combos into neutral and up air at low to mid percents.',
      },
      'pacman-dair-fair-fair': {
        tip: 'According to Game8 it takes some practice. According to SmashWiki, forward air chains into itself well.',
      },
      'pacman-fair-fair-dair': {
        tip: 'According to SmashWiki, down air after two forward airs kills early, Pac-Man’s strongest finisher offstage.',
      },
      'pacman-bell-hydrant-usmash': {
        title: 'Bell → Hydrant → Up Smash',
        tip: 'Game8’s advanced route: according to SmashWiki the bell confirms into KOs, and the hydrant buys time to charge.',
        steps: {
          0: { label: BELL, note: BELL_STUN },
          1: { label: 'Place the hydrant' },
          2: { label: 'Pick up the bell and throw it into the hydrant' },
        },
      },
      'pacman-galaxian-fair': {
        title: 'Galaxian → Forward Air → Throw Galaxian',
        windowLabel: 'mid percents',
        tip: 'The Galaxian stays on the ground after the hit; according to Game8, picking it up and throwing it again deals enormous damage.',
        steps: { 2: { label: 'Pick up and throw the Galaxian' } },
      },
      'pacman-dthrow-fair-nair': {
        windowLabel: 'tech chase, not a true combo',
        tip: 'According to SmashWiki, down throw sets up tech chases, and short hop forward air into nair is one of the listed follow-ups. None of them is guaranteed; you read the tech option.',
        steps: { 1: { note: 'The opponent lands on the ground and has to tech.' } },
      },
      'pacman-dthrow-key': {
        title: 'Down Throw → Key',
        windowLabel: 'tech chase at high percents',
        tip: 'According to SmashWiki, the strongest tech chase off down throw: the key has high KO power on its own.',
        steps: {
          2: { label: 'Bonus Fruit: Key', note: 'The key has to be cycled up beforehand; it is the eighth and final fruit.' },
        },
      },
      'pacman-bell-powerpellet': {
        title: 'Bell → Power Pellet',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki a KO confirm: the bell’s stun lasts long enough to follow up with Power Pellet.',
        steps: { 0: { label: BELL, note: BELL_STUN } },
      },
    },
  },

  'toon-link': {
    meta: [
      'According to SmashWiki, bow and boomerang are very strong in neutral, both B-reversible and fast, and the bomb opens up follow-ups across many percents. Little endlag on forward and back air plus a slow fall let him dominate the air.',
      'His floatiness, however, leaves him open to vertical attacks and makes his recovery predictable. His disjointed range offsets his small stature, and the defensive projectile plan only partly fits the pace of Ultimate.',
    ],
    strengths: ['B-reversible bow and boomerang in neutral', 'Bomb opens follow-ups across many percents', 'Dominant air game with little endlag'],
    weaknesses: ['Floaty: vulnerable to vertical attacks', 'Predictable recovery', 'Small stature despite disjoints'],
    combos: {
      'toonlink-utilt-spin': {
        tip: 'According to Game8, only below 20%; after that the opponent flies too far for Spin Attack.',
      },
      'toonlink-utilt-chain': {
        windowLabel: 'low percents only',
        tip: 'According to SmashWiki, up tilt chains into itself at low percents, later into nair, fair, bair and up air.',
      },
      'toonlink-zair-grab-bair': {
        tip: 'Only very early in the stock, according to Game8 up to 10%.',
        steps: { 0: { label: ZAIR_HOOK } },
      },
      'toonlink-boomerang-fair': {
        title: 'Boomerang → Forward Air',
        tip: 'Toon Link’s standard confirm off the projectile.',
        steps: { 0: { label: 'Boomerang', note: 'Much stronger when charged.' } },
      },
      'toonlink-zair-jab-fsmash': {
        tip: 'Game8 explicitly calls it a kill combo against a grounded opponent; it only works if they do not tech.',
        steps: { 0: { label: ZAIR_HOOK } },
      },
      'toonlink-bair-spin': {
        title: 'Back Air → Back Air → Spin Attack (aerial)',
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, back air combos into itself at low percents and from there into the aerial Spin Attack as a KO combo.',
        steps: { 2: { label: 'Aerial Spin Attack' } },
      },
      'toonlink-bomb-usmash': {
        title: 'Bomb → Up Smash',
        windowLabel: 'even at high percents',
        tip: 'According to SmashWiki, up smash or forward air follow bombs even at high percents, his best KO options. Down air kills extremely early from there.',
        steps: {
          0: {
            label: 'Pull and throw a bomb',
            note: 'Value from SmashWiki (5.4-7% base) because Ultimate Frame Data lists none. How hard the bomb hits depends on its speed on impact.',
          },
        },
      },
    },
  },

  'young-link': {
    meta: [
      'According to SmashWiki, Young Link has good frame data and a lot of combo potential: the low knockback of his attacks builds damage fast, his disjointed range keeps him safe, and thanks to its short startup lag the Fire Arrow starts combos.',
      'For a swordfighter his range is short, so he has to get close. His recovery follows predictable arcs, and without kill confirms he struggles to close out stocks at high percents.',
    ],
    strengths: ['Good frame data and a strong combo game', 'Disjointed range as a safety net', 'Fire Arrow as a combo starter'],
    weaknesses: ['Short range for a swordfighter', 'Predictable recovery', 'Kills only through confirms'],
    combos: {
      'younglink-upb-uair': {
        title: 'Spin Attack → Up Air (“Milkshake”)',
        windowLabel: '0% to upper mid percents',
        tip: 'Around 30% damage according to Game8 and the standard punish out of shield. Depending on the launch angle, the up air does not always connect.',
      },
      'younglink-dthrow-uair': {
        windowLabel: '0% to mid percents',
        tip: 'According to Game8, the most reliable and simplest grab route.',
      },
      'younglink-dtilt-fair': {
        windowLabel: 'at almost any percent',
        tip: 'According to Game8, at almost any percent, even straight out of the boomerang.',
      },
      'younglink-dtilt-upb': {
        title: 'Down Tilt → Spin Attack (aerial)',
        tip: 'According to the YL Combo Tracker, a true combo at any percent. At the ledge, Spin Attack kills from around 100%.',
        steps: { 1: { label: 'Aerial Spin Attack' } },
      },
      'younglink-arrow-nair': {
        title: 'Fire Arrow → Nair',
        tip: 'According to the YL Combo Tracker, a true combo from 75 to 175%, with the arrow fired from the ground. At the ledge, nair kills from around 120%.',
        steps: { 0: { label: FIRE_ARROW, note: 'Up to 14% when charged.' } },
      },
      'younglink-utilt-uair': {
        tip: 'According to the YL Combo Tracker, a true combo from 45 to 85%. Between 25 and 45%, back air goes after it instead.',
      },
      'younglink-weaknair-dtilt-uair': {
        title: 'Nair (late hit) → Down Tilt → Up Air',
        tip: 'According to the YL Combo Tracker, a true combo from 40 to 60%. In the same window, the aerial Spin Attack works instead of up air.',
        steps: { 0: { label: 'SH Nair, late hit' } },
      },
      'younglink-dthrow-nair': {
        tip: 'According to the YL Combo Tracker, a true combo up to 40%. Down throw → up air lasts much longer, up to about 90%.',
      },
      'younglink-uthrow-uair': { tip: 'According to the YL Combo Tracker, a true combo up to 60%.' },
      'younglink-utilt-bair': {
        tip: 'According to the YL Combo Tracker, a true combo from 25 to 45%. From 45%, up tilt → up air takes over.',
      },
      'younglink-dtilt-uair': {
        tip: 'According to the YL Combo Tracker, a true combo at any percent and a kill from around 130%, no matter where on the stage.',
      },
      'younglink-dtilt-arrow-dair': {
        title: 'Down Tilt → Fire Arrow → Down Air',
        tip: 'According to the YL Combo Tracker, the route kills whenever it is true. When that is depends on the opponent: against Lucina from 90 to 100%, and King Dedede has the highest minimum at 100%.',
        steps: { 1: { label: FIRE_ARROW } },
      },
      'younglink-arrow-uair': {
        title: 'Fire Arrow → Up Air',
        tip: 'According to the YL Combo Tracker, a true combo from 100% and a kill from around 150%. Young Link has to stand right next to the opponent.',
        steps: { 0: { label: 'Fire Arrow from the ground' } },
      },
      'younglink-zair-da': {
        tip: 'According to the YL Combo Tracker, a true combo up to about 180%, and a kill at the ledge from 130%. Only use it instead of the jab lock when the zair does not send the opponent into tumble or the route kills anyway.',
      },
      'younglink-fair1-usmash': {
        title: 'Forward Air (first hit) → Up Smash',
        windowLabel: 'upper mid percents',
        tip: 'According to Game8, throw out the fair at the peak of the jump, fast fall immediately and up smash right after landing.',
        steps: { 0: { label: 'Fair, first hit' } },
      },
    },
  },

  pit: {
    meta: [
      'For a weapon user Pit has very fast frame data, with most moves hitting before frame 10, plus a strong neutral and good edgeguarding. His ground game offers useful options throughout.',
      'According to SmashWiki, his combo potential is offset by inconsistent kill power. On top of that come short range for a weapon user with blind spots, and a weak disadvantage state because of his floatiness.',
    ],
    strengths: ['Very fast frame data', 'Strong neutral and edgeguarding', 'Down tilt as a broad combo starter'],
    weaknesses: ['Inconsistent kill power', 'Short range with blind spots', 'Floaty, weak disadvantage state'],
    combos: {
      'pit-dtilt-fair': {
        windowLabel: 'low to mid percents',
        tip: 'According to Game8 it also works at high percents, but gets harder and harder to land there.',
      },
      'pit-dtilt-usmash': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down tilt links into the dashing up smash at low percents.',
      },
      'pit-dthrow-fair': {
        tip: 'According to SmashWiki, forward and up air are the reliable follow-ups off down throw.',
      },
      'pit-dtilt-uair': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, down tilt becomes a KO confirm into up air at high percents, one of his few reliable kill options.',
      },
      'pit-utilt-uair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up tilt leads into nair at low percents and into up air at low to mid percents.',
      },
      'pit-dthrow-bair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, down throw is his broadest starter: dashing up smash early, nair, forward air, down air and the reverse back air at low to mid percents, up air almost throughout.',
      },
      'pit-fthrow-da': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, forward throw combos into dash attack early, and so does back throw.',
      },
      'pit-fthrow-ko': {
        title: 'Forward Throw at the Ledge',
        windowLabel: 'high percents',
        tip: 'Same throw, different purpose: according to SmashWiki, forward throw KOs directly near the ledge at high percents.',
      },
      'pit-dair-usmash': {
        windowLabel: 'higher percents',
        tip: 'According to SmashWiki a reliable KO combo: the meteor keeps the opponent grounded, and up smash finishes.',
      },
      'pit-dair-fsmash': {
        windowLabel: 'up to about 100%',
        tip: 'Game8 describes the meteor effect as a setup up to around 100%, after which forward smash takes the stock home.',
      },
    },
  },

  'dark-pit': {
    meta: [
      'Dark Pit shares Pit’s normals but plays differently: Silver Bow flies straight instead of being steerable, deals far more damage according to SmashWiki (5.5% instead of 3.2% uncharged, 14% instead of 8.6% fully charged) and launches at a flatter 45°, but it is barely useful for sniping offstage.',
      'Electroshock Arm replaces Upperdash Arm: more damage, an electric hitbox and a horizontal trajectory that kills near the stage edges from around 80%. The weaknesses stay Pit’s: little range, floaty, weak disadvantage state.',
    ],
    strengths: ['Silver Bow with more damage and a flatter angle', 'Electroshock Arm kills early at the ledge', 'Fast frame data like Pit'],
    weaknesses: ['Arrows are barely steerable', 'Short range', 'Floaty, weak disadvantage state'],
    combos: {
      'darkpit-dtilt-fair': {
        windowLabel: 'low to mid percents',
        tip: 'Like with Pit: it also works at high percents, but gets harder to land there.',
      },
      'darkpit-dthrow-nair': {
        tip: 'Down throw lifts the opponent slightly; according to Game8 the standard throw for building damage.',
      },
      'darkpit-dthrow-utilt-nair': {
        tip: 'According to Game8, only between 0 and 40%; after that the opponent flies too far for the up tilt.',
        steps: { 2: { label: 'Step → Up Tilt' } },
      },
      'darkpit-dthrow-fair-kill': {
        windowLabel: 'from around 120%',
        tip: 'Same throw, different finisher: according to Game8, forward air kills from around 120%.',
      },
      'darkpit-bthrow-silverbow': {
        windowLabel: 'mid to high percents',
        tip: 'According to SmashWiki a setup into Silver Bow, and thanks to the flat 45° angle a real kill option instead of just chip damage.',
        steps: { 2: { note: 'Up to 17% when fully charged.' } },
      },
      'darkpit-bthrow-da': { windowLabel: 'low percents', tip: 'The low percent version.' },
      'darkpit-utilt-uair': {
        windowLabel: 'into high percents',
        tip: 'According to SmashWiki, up tilt reliably combos into nair or up air, well into high percents.',
      },
      'darkpit-fthrow-da': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, forward throw combos into dash attack early and KOs middleweights near the ledge around 130%.',
      },
      'darkpit-dtilt-uair': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki a kill confirm at high percents; up air received much more knockback scaling in Ultimate.',
      },
    },
  },

  rosalina: {
    meta: [
      'Rosalina fights as a pair: Luma attacks on a delay, covers space and makes every hit twice as costly. Nair is fast and low commitment, fair holds opponents in place, and according to SmashWiki up throw is her main combo throw into nair, up tilt and up air.',
      'Without Luma she is much weaker, and her own attacks have little knockback. Luma cannot shield, cannot act out of tumble and reliably dies offstage; swordfighters outrange both.',
    ],
    strengths: ['Luma doubles pressure and space control', 'Up throw as the main combo throw', 'Up air with outstanding range'],
    weaknesses: ['Much weaker without Luma', 'Luma dies offstage and cannot shield', 'Outranged by swordfighters'],
    combos: {
      'rosalina-da-fair': {
        tip: 'Only very early in the stock. According to SmashWiki, forward air holds the opponent in place and hits multiple times.',
      },
      'rosalina-uthrow-uair': {
        tip: 'Her broadest throw route, according to Game8 between 20 and 90%, and it needs Luma.',
      },
      'rosalina-uthrow-utilt': { tip: 'The low percent version, also with Luma.' },
      'rosalina-dthrow-fair': {
        tip: 'According to SmashWiki, the holding forward air fits down throw especially well.',
      },
      'rosalina-uthrow-nair': {
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up throw reliably combos into nair, up tilt and up air; nair is the fastest and least committal of them.',
        steps: { 2: { note: 'Luma hits along on a delay.' } },
      },
      'rosalina-fthrow-ko': {
        title: 'Forward Throw at the Ledge',
        tip: 'According to SmashWiki, forward throw KOs middleweights at the ledge of Final Destination around 164%.',
      },
      'rosalina-bthrow-ko': {
        title: 'Back Throw as a Kill',
        tip: 'According to SmashWiki her strongest throw: it KOs middleweights around 176%. That it comes so late fits her weak raw kill power without Luma.',
      },
      'rosalina-nair-utilt': {
        tip: 'Game8’s broadest route: 0-90% with Luma, from 20% without Luma. Forward smash, up smash, nair, fair, bair and up air also follow from here.',
      },
      'rosalina-bair-da': {
        tip: 'An unusual direction: back air puts the opponent in front of her, and dash attack catches them.',
      },
    },
  },

  'ice-climbers': {
    meta: [
      'According to SmashWiki, as a pair the Ice Climbers reach one of the highest damage outputs in the whole cast, plus solid frame data for aggressive play. Their small size and slow fall make them hard to combo, and the partner disrupts opposing combos.',
      'Everything hinges on Nana, though: once she is gone, the decisive tools are missing, and without a partner their out of shield game is mediocre. Add little range and a slow approach; playing the duo at full strength is notoriously hard.',
    ],
    strengths: ['Highest damage output with clean execution', 'Nana disrupts opposing combos', 'Hard to combo'],
    weaknesses: ['Much weaker without Nana', 'Little range, slow approach', 'High practice requirement'],
    combos: {
      'iceclimbers-da-uair': {
        windowLabel: 'across wide percent ranges',
        tip: 'Game8 puts the route at around 30% damage with Nana.',
      },
      'iceclimbers-utilt-uair': {
        windowLabel: 'low percents',
        tip: 'Also around 30% according to Game8, the ground version.',
      },
      'iceclimbers-utilt-chain': {
        tip: 'According to SmashWiki, up tilt allows a direct chain of up airs up to about 115%.',
      },
      'iceclimbers-dthrow-dsmash': {
        windowLabel: 'low percents',
        tip: 'Game8 labels the route “Side Smash” but describes down smash right after the throw in the text; the described version is listed here.',
      },
      'iceclimbers-dthrow-uair': {
        tip: 'According to SmashWiki, up air off down throw kills most opponents between 110 and 125%.',
      },
      'iceclimbers-fsmash-ledge': {
        title: 'Forward Smash at the Ledge',
        tip: 'According to SmashWiki the duo’s strongest smash; at the ledge it reliably KOs from around 70%. With Nana, her hit comes on top.',
        steps: { 0: { note: 'Value for the leader; Nana hits in addition.' } },
      },
    },
  },

  'donkey-kong': {
    meta: [
      'According to SmashWiki, Donkey Kong sets up KOs directly: strong moves with decent range, plus a mobility that makes for an effective ground approach despite his size. Back air is his fastest aerial and, according to the wiki, a better spacing tool than forward tilt, and cargo throw is his most useful grab.',
      'His disadvantage state, on the other hand, is one of the worst in the game: a huge hurtbox, air dodge only on frame 4 and hardly any ways out of combos. His recovery is also easy to exploit.',
    ],
    strengths: ['Sets up KOs directly', 'Back air as a fast spacing tool', 'Cargo throw with lots of control'],
    weaknesses: ['One of the worst disadvantage states', 'Huge hurtbox, air dodge only on frame 4', 'Very exploitable recovery'],
    combos: {
      'dk-da-ftilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, the late hit of dash attack has combo potential. According to Game8, go for the forward tilt rather early.',
        steps: { 0: { label: DASH_LATE } },
      },
      'dk-da-utilt': {
        windowLabel: 'low percents',
        tip: 'According to Game8, go for the up tilt only at the end of the dash attack, the forward tilt earlier.',
        steps: { 0: { label: DASH_LATE } },
      },
      'dk-nair-dtilt': {
        windowLabel: 'low percents',
        tip: 'According to SmashWiki, down tilt trips 40% of the time, which makes it one of his best combo starters.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'dk-nair-ftilt': {
        windowLabel: 'low percents',
        tip: 'According to Game8, down, forward and up tilt all link after a nair against a grounded opponent.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'dk-nair-utilt': {
        windowLabel: 'low percents',
        tip: 'According to Game8, one of the three tilt follow-ups off nair against a grounded opponent.',
        steps: { 0: { label: FALLING_SH_NAIR } },
      },
      'dk-cargo-uair': {
        title: 'Cargo Throw → Up Throw → Up Air',
        tip: 'According to SmashWiki, cargo throw is his most useful grab. Spinning Kong works instead of up air.',
        steps: {
          1: { label: CARGO_PICKUP, note: 'The grab carries the opponent. Position freely.' },
          3: { label: 'Jump → Up Air' },
        },
      },
      'dk-fair-bair-bair': {
        windowLabel: 'around 30%',
        tip: 'Game8’s advanced route; back air is his fastest aerial.',
      },
      'dk-handslap-usmash': {
        title: 'Hand Slap (aerial) → Up Smash',
        tip: 'According to SmashWiki, a KO confirm between 60 and 80%. DK’s most reliable stock ender from a setup.',
        steps: { 0: { label: 'Aerial Hand Slap' } },
      },
      'dk-cargo-bthrow-ko': {
        title: 'Cargo Throw → Cargo Back Throw',
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, cargo back throw is a very solid kill throw. The cargo grab lets you pick your position first, so stage position decides here, not the percent alone.',
        steps: { 1: { label: CARGO_PICKUP, note: 'The grab carries the opponent; walk to the ledge.' } },
      },
      'dk-spinningkong-ledge': {
        title: 'Grounded Spinning Kong (at the ledge)',
        tip: 'According to SmashWiki a potent KO option, especially at the ledge: there it takes even heavyweights between 70 and 80%.',
        steps: { 0: { label: 'Spinning Kong (grounded)' } },
      },
      'dk-giantpunch-ko': {
        title: 'Giant Punch (fully charged)',
        windowLabel: 'as a read or punish',
        tip: 'According to SmashWiki, DK’s surprise and punish KO. Not a combo finisher but a read; in return, one hit ends the stock.',
        steps: {
          0: {
            label: 'Giant Punch (fully charged, grounded)',
            note: 'Much weaker uncharged; the charge can be stored.',
          },
        },
      },
      'dk-dair-usmash': {
        windowLabel: 'high percents',
        tip: 'Game8 recommends the route against opponents at high percents.',
      },
    },
  },
};
