import type { GuideTexts } from './types';

const BOTH_KICKS = 'Both kicks counted: 7% plus 12%; according to SmashWiki the first kick links into the second.';
const FLAME_CHOKE_TIP = 'According to SmashWiki, the grounded Flame Choke opens up dozens of follow-ups and reads';

/** Englisch für src/data/guides-e.ts. Richter nutzt die Combo-Texte von Simon (ECHO_GUIDES). */
export const TEXT: GuideTexts = {
  simon: {
    meta: [
      'According to SmashWiki, the Vampire Killer gives Simon the second longest disjointed range on the whole roster, and his aerials cover an enormous amount of space. Down air is his notorious combo tool: it bounces off diagonally and opens up many KO confirms, above all into Uppercut.',
      'In exchange he has one of the worst recoveries in the game and is very easy to gimp. As a heavyweight with weak air stats he is combo-prone, and outside of Uppercut he lacks a usable out of shield game.',
    ],
    strengths: ['Second longest disjointed range in the game', 'Down air opens many KO confirms', 'Three projectiles for space control'],
    weaknesses: ['One of the worst recoveries in the game', 'Very easy to gimp', 'Weak out of shield game apart from Uppercut'],
    combos: {
      'simon-dthrow-fair': { tip: 'According to Game8, adjust the timing of the forward air as the damage rises.' },
      'simon-nair-uppercut': {
        title: 'Falling Nair → Uppercut',
        tip: 'According to Game8, the last nair hit must not connect, otherwise the opponent flies too far.',
        steps: { 0: { label: 'Nair while falling, first hits only' } },
      },
      'simon-uthrow-usmash': {
        windowLabel: 'at 0%',
        tip: 'According to SmashWiki, up throw starts combos at 0%, for example into up smash or an aerial chase.',
      },
      'simon-fthrow-fsmash': {
        windowLabel: 'at 0%',
        tip: 'According to SmashWiki, forward and back throw lead into forward smash or forward tilt at 0%.',
      },
      'simon-holywater-dair-uppercut': {
        tip: 'According to Game8, from 20 to 130%. From 100%, Uppercut has to be linked with the double jump.',
      },
      'simon-holywater-chain': {
        windowLabel: 'only at 0%',
        tip: 'Game8’s advanced route: hard to land, but 47% damage from a single situation.',
        steps: { 1: { label: 'Nair while falling' } },
      },
      'simon-dair-uppercut': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, down air bounces off diagonally and opens up KO confirms, above all into Uppercut.',
        steps: { 0: { label: 'SH Dair, early meteor' } },
      },
    },
  },

  richter: {
    meta: [
      'Richter shares Simon’s frame data down to the last line: same range, same values, same routes. For him too, down air is the combo tool that bounces off diagonally and confirms into Uppercut.',
      'The only gameplay-relevant difference is in the down special: Richter’s Holy Water deals aura damage instead of fire damage. That lets it hit Olimar’s red Pikmin, but in return it cannot detonate Steve’s TNT or the explosives of the Link variants.',
    ],
  },

  'little-mac': {
    meta: [
      'According to SmashWiki, Little Mac has the strongest ground game in the entire game: forward tilt, dash attack and the smashes deal lots of damage with high knockback scaling, his tilts do not rebound off opposing ground attacks, and his smashes have super armor. His power meter fills after dealing 333% or taking 100% damage, and the KO Uppercut then kills most characters before 40%.',
      'In the air everything flips: weak air mobility, high fall speed, the shortest air dodge in the game, and specials that are nearly useless in the air. Once offstage he is practically done.',
    ],
    strengths: ['Strongest ground game in the game', 'Tilts that do not rebound, smashes with super armor', 'KO Uppercut kills before 40%'],
    weaknesses: ['Miserable air mobility', 'Shortest air dodge in the game', 'Practically hopeless offstage'],
    combos: {
      'littlemac-dtilt-haymaker': {
        tip: 'According to SmashWiki, down tilt combos into Jolt Haymaker at mid percents and even reaches opponents at the ledge.',
      },
      'littlemac-utilt-uppercut': {
        tip: 'A tight window, but according to Game8 especially strong. Up tilt also combos into itself at low percents.',
      },
      'littlemac-dtilt-utilt-uppercut': {
        tip: 'According to Game8 it does not lead to a kill, but it links reliably up to 100%.',
      },
      'littlemac-dthrow-uppercut': { tip: 'According to Game8, usable across various percent ranges.' },
      'littlemac-fthrow-haymaker': {
        tip: 'According to SmashWiki, Jolt Haymaker can be attached to forward throw from 0%, the earliest damage building Mac has.',
      },
      'littlemac-fair-haymaker': {
        windowLabel: 'mid percents',
        tip: 'According to SmashWiki, with precise execution forward air combos into Jolt Haymaker; at mid percents the opponent ends up in a bad spot, and offstage that kills early. For Mac, though, it also means going far out himself.',
      },
      'littlemac-utilt-kouppercut': {
        title: 'Up Tilt → KO Uppercut',
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, up tilt combos into both Rising Uppercut and KO Uppercut at low to mid percents. With a full meter, that ends the stock before 40%.',
        steps: { 1: { note: 'Only with a full power meter.' } },
      },
      'littlemac-jab-uppercut': {
        windowLabel: 'high percents',
        tip: 'According to SmashWiki, a KO confirm at high percents. With a full power meter it becomes the KO Uppercut.',
      },
      'littlemac-uair-uppercut': {
        windowLabel: 'high percents',
        tip: 'The aerial version of the same confirm, according to SmashWiki also only at high percents.',
      },
    },
  },

  ganondorf: {
    meta: [
      'Ganondorf’s defining trait is raw kill power: most of his moves deal over 10% damage and kill below 100%. Forward tilt and down smash are strong semi-spikes, forward and up smash huge disjoints, and his aerials are fast despite their force.',
      'In exchange he is extremely vulnerable to combos and juggles, has no projectile and hardly any defensive options. His frame data is among the worst in the game, his grab is short, and his recovery is straight and predictable.',
    ],
    strengths: ['Highest KO potential in the game', 'Fast aerials despite enormous power', 'Flame Choke opens dozens of follow-ups'],
    weaknesses: ['Extremely vulnerable to combos and juggles', 'No projectile, hardly any defense', 'Some of the worst frame data in the game'],
    combos: {
      'ganon-da-uair': {
        windowLabel: 'mid percents or lower',
        tip: 'Around 30% according to Game8, his simplest and highest damage basic route.',
      },
      'ganon-flamechoke-dtilt': {
        tip: `${FLAME_CHOKE_TIP}; down tilt is the safest.`,
        steps: { 0: { note: 'Also grabs through shields.' } },
      },
      'ganon-dair-usmash': {
        windowLabel: 'mid percents',
        tip: 'According to Game8, follow up with up smash immediately after the down air hit is confirmed.',
      },
      'ganon-dthrow-nair': {
        windowLabel: 'up to mid percents',
        tip: 'According to SmashWiki, down throw combos into every aerial except down air up to mid percents.',
        steps: { 2: { note: BOTH_KICKS } },
      },
      'ganon-dthrow-fair': {
        windowLabel: 'up to mid percents',
        tip: 'Same throw, heavier finisher: forward air is one of his strongest moves of all.',
      },
      'ganon-nair-ftilt': {
        title: 'Nair (late hit) → Forward Tilt',
        windowLabel: 'low to mid percents',
        tip: 'According to SmashWiki, the late hit of the second nair kick opens up jab, grab, forward tilt, down tilt and dash attack, and forward tilt deals the most damage of them.',
        steps: { 0: { label: 'SH Nair, late hit of the second kick' } },
      },
      'ganon-flamechoke-fsmash': {
        windowLabel: 'as a read, not guaranteed',
        tip: `${FLAME_CHOKE_TIP}, including every smash attack. None of them is guaranteed; you read the getup option.`,
        steps: { 0: { note: 'Slams the opponent into the ground.' } },
      },
      'ganon-dthrow-bair': {
        windowLabel: 'higher percents',
        tip: 'According to SmashWiki, the back air route becomes a KO setup at higher percents, the strongest finisher his down throw offers.',
      },
      'ganon-da-darkdive': {
        title: 'Dash Attack (early hit) → Dark Dive',
        tip: 'According to SmashWiki, the early dash attack hit leads into nair, up air or Dark Dive.',
        steps: { 0: { label: 'Dash Attack, early hit' } },
      },
      'ganon-dthrow-da': {
        windowLabel: 'low percents',
        tip: 'According to Game8, one of the three simple routes for low percents. SmashWiki also counts dash attack among the down throw follow-ups.',
      },
      'ganon-da-nair': {
        windowLabel: 'low percents',
        tip: 'According to Game8, a simple route for low percents.',
        steps: { 1: { note: BOTH_KICKS } },
      },
      'ganon-dthrow-uair': {
        windowLabel: '0% to mid percents',
        tip: 'According to SmashWiki, from 0% to mid percents down throw leads into dash attack, nair, forward air, reverse back air, up air and Wizard’s Foot.',
      },
      'ganon-dthrow-wizardsfoot': {
        windowLabel: '0% to mid percents',
        tip: 'According to SmashWiki, one of the follow-ups off down throw up to mid percents.',
        steps: { 2: { note: 'Leg hit counted; if the foot connects, it is 19%.' } },
      },
    },
  },
};
