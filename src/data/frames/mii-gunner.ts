// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "mii-gunner",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerJab1.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "25",
          "endlag": "19",
          "damage": "1.7",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 8"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerJab2.gif"
          ],
          "startup": "4",
          "active": "4—6",
          "total": "25",
          "endlag": "19",
          "damage": "1.8",
          "advantage": "-18",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 11"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerJab3.gif"
          ],
          "startup": "6/12",
          "active": "6—8, 12—13",
          "total": "37",
          "endlag": "24",
          "damage": "1.0/4.5",
          "advantage": "-20",
          "shieldLag": "3/6",
          "shieldStun": "0/5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerFTilt.gif"
          ],
          "startup": "7",
          "active": "7—8/9—10/11—12",
          "total": "33",
          "endlag": "21",
          "damage": "13.0/10.5/8.0",
          "advantage": "-14",
          "shieldLag": "9/8/7",
          "shieldStun": "12/10/8",
          "hitboxes": "Early/Late/Later"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerUTilt.gif"
          ],
          "startup": "5",
          "active": "5—7/8—9",
          "total": "37",
          "endlag": "28",
          "damage": "10.0/9.0/8.0",
          "advantage": "-22",
          "shieldLag": "8",
          "shieldStun": "10",
          "hitboxes": "Early Far/Close/Late Far (Close damage doesn't update on the late hit)"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerDTilt.gif"
          ],
          "startup": "8",
          "active": "8—10",
          "total": "40",
          "endlag": "30",
          "damage": "14.0",
          "advantage": "-19",
          "shieldLag": "10",
          "shieldStun": "13"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerDashAttack.gif"
          ],
          "startup": "10",
          "active": "10—14",
          "total": "45",
          "endlag": "31",
          "damage": "11.0",
          "advantage": "-20",
          "shieldLag": "8",
          "shieldStun": "15"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerFSmash.gif"
          ],
          "startup": "17...",
          "active": "17—38(rehit: 4)/40",
          "total": "77",
          "endlag": "37",
          "damage": "1.8/7.5",
          "advantage": "-31",
          "shieldLag": "4/16",
          "shieldStun": "3/6",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerUSmash.gif"
          ],
          "startup": "11/15/19/23/27",
          "active": "11—12/15—16/19—20/23—24/27—28",
          "total": "55",
          "endlag": "27",
          "damage": "3.0/2.5/7.0",
          "advantage": "-22",
          "shieldLag": "5/5/7",
          "shieldStun": "3/3/6",
          "hitboxes": "First/multi/final",
          "notes": "Charge hold is frame 7"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerDSmash.gif"
          ],
          "startup": "9/23",
          "active": "9/23—25",
          "total": "52",
          "endlag": "27",
          "damage": "11.5/14.0",
          "advantage": "-35/-19",
          "shieldLag": "9/10",
          "shieldStun": "8/10",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerNAir.gif"
          ],
          "startup": "8",
          "active": "8—21",
          "total": "41",
          "endlag": "20",
          "landingLag": "11",
          "damage": "10.0",
          "advantage": "-7",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-3 and 35 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerFAir.gif"
          ],
          "startup": "12",
          "active": "12—16/17—20",
          "total": "43",
          "endlag": "23",
          "landingLag": "12",
          "damage": "8.0/6.0",
          "advantage": "-1",
          "shieldLag": "7/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 44 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerBAir.gif"
          ],
          "startup": "9",
          "active": "9—10/11",
          "total": "47",
          "endlag": "36",
          "landingLag": "11",
          "damage": "13.0/11.0",
          "advantage": "-6",
          "shieldLag": "9",
          "shieldStun": "5",
          "hitboxes": "Normal/Late",
          "notes": "Autocancels on frame 1-3 and 32 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerUAir.gif"
          ],
          "startup": "17...",
          "active": "17/18—32(rehit: 3)/34",
          "total": "59",
          "endlag": "25",
          "landingLag": "13",
          "damage": "1.8/4.0",
          "advantage": "-11/-10",
          "shieldLag": "4/5",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-10 and 58 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerDAir.gif"
          ],
          "startup": "20",
          "active": "20—21/22—25",
          "total": "54",
          "endlag": "29",
          "landingLag": "17",
          "damage": "15.0/10.0/12.0/8.0",
          "advantage": "-12/-13/-12",
          "shieldLag": "10/8/9",
          "shieldStun": "5/4/5",
          "hitboxes": "Far/close/late",
          "notes": "Autocancels on frame 1-3 and 54 onward"
        },
        {
          "name": "Charge Blast",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerChargeBlastMin.gif",
            "hitboxes/mii_gunner/MiiGunnerChargeBlastMax.gif"
          ],
          "startup": "3(+12)",
          "active": "3—62",
          "total": "39",
          "damage": "4.0—26.0",
          "advantage": "-27 to -6",
          "shieldLag": "8—23",
          "shieldStun": "2—8",
          "notes": "Startup is 3 from charge state. 12 frames to enter charge state. 4 to cancel charge with shield. Takes 132 frames to reach full charge"
        },
        {
          "name": "Laser Blaze",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerLaserBlaze.gif"
          ],
          "startup": "10",
          "active": "10—33",
          "total": "42",
          "endlag": "9",
          "damage": "5.0",
          "advantage": "-24",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Fire rate is one shot per 22 frames"
        },
        {
          "name": "Grenade Launch",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerGrenadeLaunch.gif"
          ],
          "startup": "32",
          "active": "32—111",
          "total": "53",
          "damage": "1.3/6.5",
          "advantage": "+6",
          "shieldLag": "4/6",
          "shieldStun": "-/3",
          "hitboxes": "Multi/Final",
          "notes": "Explosion hits are: 1/6/11/16/18"
        },
        {
          "name": "Flame Pillar",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerFlamePillarG.gif",
            "hitboxes/mii_gunner/MiiGunnerFlamePillarA.gif",
            "hitboxes/mii_gunner/MiiGunnerFlamePillar.gif"
          ],
          "startup": "21",
          "active": "21—40",
          "total": "63",
          "endlag": "23",
          "damage": "2.2/2.7",
          "advantage": "-37",
          "shieldLag": "4",
          "shieldStun": "2",
          "hitboxes": "Multi/Final",
          "notes": "Eruption hits: 1/9/17/25/33. Will not erupt on shields"
        },
        {
          "name": "Stealth Burst",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerStealthBurstMin.gif",
            "hitboxes/mii_gunner/MiiGunnerStealthBurstMax.gif"
          ],
          "startup": "36—66",
          "active": "Min: 36—38 Max: 66—68",
          "total": "70—105",
          "endlag": "2",
          "damage": "12.1—18.0",
          "advantage": "-22/-17/-22",
          "shieldLag": "9—11",
          "shieldStun": "4—6",
          "notes": "Startup is 5 from release."
        },
        {
          "name": "Gunner Missile (Homing)",
          "section": "special",
          "startup": "27",
          "active": "27—121",
          "total": "46",
          "damage": "7.5",
          "advantage": "-10",
          "shieldLag": "7",
          "shieldStun": "3"
        },
        {
          "name": "Gunner Missle (Super)",
          "section": "special",
          "startup": "23",
          "active": "23—93",
          "total": "49",
          "damage": "14.5",
          "advantage": "-12",
          "shieldLag": "10",
          "shieldStun": "5"
        },
        {
          "name": "Lunar Launch",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerLunarLaunch.gif"
          ],
          "startup": "10",
          "active": "10—25",
          "landingLag": "18",
          "damage": "7.0",
          "shieldLag": "7",
          "shieldStun": "3"
        },
        {
          "name": "Cannon Jump Kick",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerCannonJumpKickG.gif",
            "hitboxes/mii_gunner/MiiGunnerCannonJumpKickA.gif"
          ],
          "startup": "6/10",
          "active": "6—7/(10—15/16—30)",
          "landingLag": "28",
          "damage": "9.0/8.0/6.0",
          "shieldLag": "16/15/13",
          "shieldStun": "9/8/6",
          "hitboxes": "first/second/late",
          "notes": "Invulnerable on frames 5—7 on the ground."
        },
        {
          "name": "Arm Rocket",
          "section": "special",
          "landingLag": "14"
        },
        {
          "name": "Echo Reflector",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerEchoReflectorStart.gif",
            "hitboxes/mii_gunner/MiiGunnerEchoReflector.gif"
          ],
          "startup": "3 (4 is Start of Reflector)",
          "total": "38",
          "damage": "2.0",
          "advantage": "-32",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Reflects on 4. Total frames is the minimum usage. Endlag is 15 frames otherwise."
        },
        {
          "name": "Bomb Drop",
          "section": "special",
          "startup": "18—133",
          "active": "18—133/1—4",
          "total": "53",
          "damage": "2.0/9.0",
          "advantage": "-14",
          "shieldLag": "4/7",
          "shieldStun": "-/4",
          "hitboxes": "contact/explosion",
          "notes": "Auto detonates on 134. Or six frames after contact"
        },
        {
          "name": "Absorbing Vortex",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerAbsorbingVortex.gif"
          ],
          "startup": "7",
          "active": "7—11",
          "total": "24",
          "endlag": "13",
          "damage": "4.0",
          "advantage": "-12",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Endlag from extended use is 6. Total frames is the minimum use. Absorbs on frame 7."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerGrab.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "34",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerDashGrab.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "42",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerFThrow.gif"
          ],
          "startup": "10/12",
          "total": "33",
          "damage": "4.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerBThrow.gif"
          ],
          "startup": "10",
          "total": "49",
          "damage": "7.0/3.0",
          "notes": "Shoots blaster on 20."
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerUThrow.gif"
          ],
          "startup": "7",
          "total": "51",
          "damage": "7.0/3.0",
          "notes": "Shoots blaster on 18 and 28"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerDThrow.gif"
          ],
          "startup": "16",
          "total": "40",
          "damage": "7.0"
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
          "total": "52",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "87",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "103",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "114",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/mii_gunner/MiiGunnerGetupAttackU.gif",
            "hitboxes/mii_gunner/MiiGunnerGetupAttackD.gif",
            "hitboxes/mii_gunner/MiiGunnerTripAttack.gif",
            "hitboxes/mii_gunner/MiiGunnerLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/mii_gunner",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
