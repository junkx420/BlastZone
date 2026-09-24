// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "hero",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroJab1.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "25",
          "endlag": "18",
          "damage": "3.0",
          "advantage": "-15",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 as early as frame 9"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroJab2.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "25",
          "endlag": "18",
          "damage": "3.0",
          "advantage": "-15",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to jab 3 as early as frame 9"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroJab3.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "37",
          "endlag": "28",
          "damage": "4.0",
          "advantage": "-25",
          "shieldLag": "10",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroFTilt1.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "36",
          "endlag": "25",
          "damage": "5.0",
          "advantage": "-21",
          "shieldLag": "8",
          "shieldStun": "6",
          "notes": "Transitions to next attack as early as frame 18. Arm, head, leg invincibility on frame 9. Arm invincibility on frame 10-11."
        },
        {
          "name": "Forward Tilt 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroFTilt2.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "47",
          "endlag": "38",
          "damage": "8.0",
          "advantage": "-31",
          "shieldLag": "8",
          "shieldStun": "8"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroUTilt.gif"
          ],
          "startup": "8",
          "active": "8-9/10-11",
          "total": "41",
          "endlag": "30",
          "damage": "9.0/11.0/11.0",
          "advantage": "-23",
          "shieldLag": "8",
          "shieldStun": "10",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroDTilt.gif"
          ],
          "startup": "6",
          "active": "6-10",
          "total": "32",
          "endlag": "22",
          "damage": "7.0",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroDashAttack.gif"
          ],
          "startup": "21",
          "active": "21/22-23",
          "total": "51",
          "endlag": "28",
          "damage": "13.0/15.0",
          "advantage": "-16",
          "shieldLag": "9/11",
          "shieldStun": "12/14",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroFSmash.gif"
          ],
          "startup": "17",
          "active": "17-19",
          "total": "65",
          "endlag": "46",
          "damage": "18.0/36.0 (Sour: 16.0/32.0)",
          "advantage": "-36 (-26)",
          "shieldLag": "14/27",
          "shieldStun": "12/22",
          "hitboxes": "Normal/Crit"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroUSmash.gif"
          ],
          "startup": "13",
          "active": "13-17",
          "total": "53",
          "endlag": "36",
          "damage": "16.0/32.0 (Sour: 14.0/28.0)",
          "advantage": "-29 (-19)",
          "shieldLag": "13/27",
          "shieldStun": "11/20",
          "hitboxes": "Normal/Crit",
          "notes": "Normal/Crit"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/hero/HeroDSmash.gif"
          ],
          "startup": "9/20",
          "active": "9-10/20-21",
          "total": "55",
          "endlag": "34",
          "damage": "Normal: 13.0/26.0 (Sour: 11.0/22.0)",
          "advantage": "-37/-26 (-29/-18)",
          "shieldLag": "8/9 / 25/27",
          "shieldStun": "8/9 / 14/17",
          "hitboxes": "Normal/Crit",
          "notes": "Damage listed is the same for both the first and second hit."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/hero/HeroNAir.gif"
          ],
          "startup": "8",
          "active": "8-16",
          "total": "45",
          "endlag": "29",
          "landingLag": "10",
          "damage": "9.0",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "4"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/hero/HeroFAir.gif"
          ],
          "startup": "14",
          "active": "14-17",
          "total": "42",
          "endlag": "25",
          "landingLag": "12",
          "damage": "10.0/12.0",
          "advantage": "-7",
          "shieldLag": "10/9",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/hero/HeroBAir.gif"
          ],
          "startup": "18",
          "active": "18-20",
          "total": "47",
          "endlag": "27",
          "landingLag": "14",
          "damage": "12.0/14.0",
          "advantage": "-9",
          "shieldLag": "10/9",
          "shieldStun": "5/5",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/hero/HeroUAir.gif"
          ],
          "startup": "6",
          "active": "6-10",
          "total": "32",
          "endlag": "22",
          "landingLag": "8",
          "damage": "7.0",
          "advantage": "-5",
          "shieldLag": "7",
          "shieldStun": "3"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/hero/HeroDAir.gif"
          ],
          "startup": "16",
          "active": "16-18/19-24",
          "total": "62",
          "endlag": "38",
          "landingLag": "18",
          "damage": "16.0/10.0",
          "advantage": "-12",
          "shieldLag": "12/8",
          "shieldStun": "6/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 46 onward"
        },
        {
          "name": "Neutral B (Frizz/Frizzle/Kafrizz)",
          "section": "special",
          "startup": "[10(+7)] [11(+25)] [16(2/8/14/20)]",
          "active": "[10-65] [11-56] [16-73]",
          "total": "43/51/67",
          "damage": "9.0/18.0/19.0(3.0)",
          "advantage": "-22/-28/-24",
          "shieldLag": "7/8/25",
          "shieldStun": "4/4/2",
          "hitboxes": "-- / -- / projectile/eruption",
          "notes": "Frizz: Takes 7 frames to enter charge state and 5 frames to exit charge state. Cost: 6MP Frizzle: Takes 25 frames to reach this level of charge. Cost: 16MP Kafrizz: Eruption upon reaching a target hits on frame (2/8/14/20). Cost: 36 MP"
        },
        {
          "name": "Side B, (Zap/Zapple/Kazap)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/HeroZapNoMana.gif",
            "hitboxes/hero/HeroZap.gif",
            "hitboxes/hero/HeroZapple.gif",
            "hitboxes/hero/HeroKazap.gif"
          ],
          "startup": "[9/13(+7)] [10/15(+16)] [43/50/72/75/81]",
          "active": "[9-13/1-8] [10-15/1-8] [43-49/50/72/75/81-83/1-8]",
          "total": "30/50/126",
          "damage": "4.0",
          "advantage": "-12/-25/-29",
          "shieldLag": "11/17 / 9 / 14/9/12",
          "shieldStun": "6/4 / 6 / 4/?/4",
          "hitboxes": "close/far/bolt / first/second bolt / \"first/second/ third/bolt\"",
          "notes": "Zap: 7 frames to enter charge state. Bolt does not occur on block. Cost: 8MP Zapple: Takes 16 frames to reach this level of charge. Second hit does not occur on block. Cost: 18 MP Kazap: Final hit does not occur on a blocking opponent. Cost: 42MP. Bolt generated on frame 37 (+7 charge). 15% heavy armor on frames 43-78. Psych Up only affects first hit (another 0.8%). Oomph affects all but the last hit (another 14%)."
        },
        {
          "name": "Up B (Woosh/Swoosh/Kaswoosh)",
          "section": "special",
          "startup": "[4(+3)] [6/13/20/27(+13)] [39/49/59/69/79/89]",
          "landingLag": "12/23/29",
          "damage": "7.0 / 3.0/4.0 / 3.0/4.0",
          "shieldLag": "7 / 5/5 / 5/5",
          "shieldStun": "3 / 2/2 / 2/2",
          "hitboxes": "Multi/Final",
          "notes": "Woosh: Takes 3 frames to enter charge state. Cost: 5MP Swoosh: Takes 13 frames to reach this level of charge. Cost: 9MP Kaswoosh: Cost: 18 MP. Failing to cast any level of charge results in 12 landing lag."
        },
        {
          "name": "Down B (Menu/Select)",
          "section": "special",
          "total": "19"
        },
        {
          "name": "Bang",
          "section": "special",
          "startup": "5",
          "active": "5-39/1-21",
          "total": "38",
          "damage": "1.5/14.0",
          "advantage": "-16",
          "shieldLag": "--/11",
          "shieldStun": "--/5",
          "hitboxes": "Projectile/Explosion",
          "notes": "Cost: 9MP"
        },
        {
          "name": "Kaboom",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/Kaboom.gif"
          ],
          "startup": "6",
          "active": "6-27/1-16/17-40",
          "total": "43",
          "endlag": "3",
          "damage": "2.0/26.0",
          "advantage": "+2",
          "shieldLag": "4/15",
          "shieldStun": "2/8",
          "hitboxes": "Projectile/Explosion",
          "notes": "Cost: 37MP. Explosion frames 17-40. Windbox frames 1-16."
        },
        {
          "name": "Sizz",
          "section": "special",
          "startup": "6",
          "active": "6-19/1-24",
          "total": "39",
          "endlag": "15",
          "damage": "1.5/12.0",
          "advantage": "-26",
          "shieldLag": "5",
          "shieldStun": "2",
          "hitboxes": "Projectile/Explosion",
          "notes": "Cost: 8MP (doesn't erupt on shields)"
        },
        {
          "name": "Sizzle",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/Sizzle.gif"
          ],
          "startup": "6",
          "active": "6-17/1-24",
          "total": "43",
          "endlag": "19",
          "damage": "3.0/22.0",
          "advantage": "-30",
          "shieldLag": "5",
          "shieldStun": "2",
          "hitboxes": "Projectile/Explosion",
          "notes": "Cost: 20MP (doesn't erupt on shields)"
        },
        {
          "name": "Whack",
          "section": "special",
          "startup": "6",
          "active": "6-125",
          "total": "41",
          "damage": "1.0",
          "advantage": "-29",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Cost: 10MP (chance to instantly obliterate opponent, higher chance with higher opponent %)"
        },
        {
          "name": "Thwack",
          "section": "special",
          "startup": "23",
          "active": "22-33",
          "total": "58",
          "endlag": "25",
          "damage": "3.0",
          "advantage": "-28",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Cost: 30MP (chance to instantly obliterate opponent, higher chance with higher opponent %)"
        },
        {
          "name": "Kamikazee",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/Kamikazee.gif"
          ],
          "startup": "44/50",
          "active": "44-49/50",
          "total": "??",
          "damage": "0.1 / 50.0 (35.0)",
          "shieldLag": "Unblockable",
          "shieldStun": "Unblockable",
          "notes": "Invulnerable for entire duration. Unblockable. Cost: 1MP. Time slows after frame 41, giving victims about two frames to act. Hit 2 does 50.0 damage in the center or 35.0 damage on the outer hitbox."
        },
        {
          "name": "Magic Burst",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/Magic Burst.gif"
          ],
          "startup": "23/33/43/53/63/73/83/93/101",
          "active": "23/33/43/53/63/73/83/93/101",
          "total": "151",
          "endlag": "50",
          "damage": "1.0-4.2/2.7-11.0",
          "advantage": "-36 - -24",
          "shieldLag": "4-5/7-13",
          "shieldStun": "2-4/4-10",
          "hitboxes": "Multi/Final",
          "notes": "Cost: All MP. Hitbox size and damage increases based on how much MP you have. Hero does not suffer hitlag from this attack."
        },
        {
          "name": "Snooze",
          "section": "special",
          "startup": "6",
          "total": "47",
          "notes": "Cost: 16MP. Can put airborne opponents to sleep"
        },
        {
          "name": "Heal",
          "section": "special",
          "total": "39",
          "damage": "Heals 11.0",
          "notes": "Cost: 7MP. Heals 11.0 damage on frame 6. Amount not affected by 1v1 multiplier."
        },
        {
          "name": "Oomph",
          "section": "special",
          "total": "42",
          "notes": "Cost: 16MP. Damage of (only) melee attacks multiplied by 1.6. Damage received multiplied by 1.2. Lasts 10 seconds."
        },
        {
          "name": "Acceleratle",
          "section": "special",
          "total": "34",
          "notes": "Cost: 13MP. Zoom-zoom!"
        },
        {
          "name": "Bounce",
          "section": "special",
          "total": "34",
          "notes": "Cost: 14MP. Begins reflecting on frame 6"
        },
        {
          "name": "Kaclang",
          "section": "special",
          "total": "344",
          "notes": "Cost: 6MP. Invincible on frame 15-315"
        },
        {
          "name": "Zoom",
          "section": "special",
          "notes": "Cost: 8MP. Can act before landing back onstage"
        },
        {
          "name": "Hocus Pocus",
          "section": "special",
          "notes": "Cost: 4MP. Casts a random spell. Can also put Hero to sleep, turn Hero invisible, shrink Hero, or mushroom grow Hero."
        },
        {
          "name": "Flame Slash",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/HeroFlameSlash.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "38",
          "endlag": "30",
          "damage": "22.0",
          "advantage": "-13",
          "shieldLag": "12",
          "shieldStun": "19",
          "notes": "Cost: 12MP"
        },
        {
          "name": "Kacrackle Slash",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/HeroKacrackleSlash.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "35",
          "endlag": "27",
          "damage": "17.0",
          "advantage": "-12",
          "shieldLag": "10",
          "shieldStun": "15",
          "notes": "Cost: 11MP"
        },
        {
          "name": "Hatchet Man",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/HeroHatchetMan.gif"
          ],
          "startup": "37",
          "active": "37-40",
          "total": "88",
          "endlag": "48",
          "damage": "35.0",
          "advantage": "Shield Breaks",
          "shieldLag": "Shield Breaks",
          "shieldStun": "Shield Breaks (-24, sour spot)",
          "notes": "Cost: 15MP. Shield Breaks (except sour spot)."
        },
        {
          "name": "Metal Slash",
          "section": "special",
          "hitboxImages": [
            "hitboxes/hero/HeroMetalSlash.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "39",
          "endlag": "27",
          "damage": "1.0",
          "advantage": "-26",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Cost: 6MP"
        },
        {
          "name": "Psych Up",
          "section": "special",
          "total": "45",
          "notes": "Cost: 14MP. Raises the damage and knockback of Hero’s next attack, will last until a move fully connects or is blocked by an opponent’s shield."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "34",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "42",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroPummel.gif"
          ]
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroFThrow.gif"
          ],
          "startup": "16",
          "total": "44",
          "damage": "7.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroBThrow.gif"
          ],
          "startup": "18",
          "total": "43",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroUThrow.gif"
          ],
          "startup": "17",
          "total": "35",
          "damage": "7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/hero/HeroDThrow.gif"
          ],
          "startup": "19",
          "total": "38",
          "damage": "6.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "20/25",
          "notes": "Intangible on frame 3-17"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "29",
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "34",
          "notes": "Intangible on frame 5-16"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "50",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "69",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "83",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "109",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/hero/heroGetupAttackU.gif",
            "hitboxes/hero/heroGetupAttackD.gif",
            "hitboxes/hero/heroTripAttack.gif",
            "hitboxes/hero/heroLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/hero",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
