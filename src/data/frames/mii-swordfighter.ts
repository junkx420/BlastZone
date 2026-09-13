// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "mii-swordfighter",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterJab1.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "19",
          "endlag": "12",
          "damage": "3.0",
          "advantage": "-9",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 as early as frame 9"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterJab2.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "22",
          "endlag": "15",
          "damage": "3.0",
          "advantage": "-12",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Transitions to jab 3 as early as frame 9"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterJab3.gif"
          ],
          "startup": "6",
          "active": "6—8",
          "total": "38",
          "endlag": "30",
          "damage": "5.0",
          "advantage": "-26",
          "shieldLag": "12",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterFTilt.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "34",
          "endlag": "23",
          "damage": "12.0",
          "advantage": "-16",
          "shieldLag": "9",
          "shieldStun": "8"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterUTilt.gif"
          ],
          "startup": "8",
          "active": "8—12",
          "total": "32",
          "endlag": "20",
          "damage": "7.0",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterDTilt.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "19",
          "endlag": "13",
          "damage": "8.0",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterDashAttack.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "41",
          "endlag": "31",
          "damage": "10.0",
          "advantage": "-18",
          "shieldLag": "10",
          "shieldStun": "14"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterFSmash.gif"
          ],
          "startup": "15",
          "active": "15—17",
          "total": "59",
          "endlag": "42",
          "damage": "14.0/15.0/16.0",
          "advantage": "-34/-34/-33",
          "shieldLag": "10/10/10",
          "shieldStun": "10/10/11",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterUSmash.gif"
          ],
          "startup": "11/14/21",
          "active": "11—12/14—15/21—22",
          "total": "59",
          "endlag": "37",
          "damage": "4.0/3.0/7.0",
          "advantage": "-32",
          "shieldLag": "5/7/14",
          "shieldStun": "-/3/6",
          "notes": "Charge hold is frame 9. Front/low hit is the 11f startup hit."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterDSmash.gif"
          ],
          "startup": "7/15",
          "active": "7—8/15—16",
          "total": "53",
          "endlag": "37",
          "damage": "12.0/15.0",
          "advantage": "-38/-28",
          "shieldLag": "9/10",
          "shieldStun": "8/10",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterNAir.gif"
          ],
          "startup": "10",
          "active": "10—23",
          "total": "48",
          "endlag": "25",
          "landingLag": "9",
          "damage": "8.0",
          "advantage": "-5",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-5 and 32 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterFAir.gif"
          ],
          "startup": "12/16/21",
          "active": "12—13/16—17/21—22",
          "total": "49",
          "endlag": "27",
          "landingLag": "12",
          "damage": "3.0/5.0",
          "advantage": "-10/-9",
          "shieldLag": "5/12",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 48 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterBAir.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "37",
          "endlag": "26",
          "landingLag": "9",
          "damage": "14.0",
          "advantage": "-4",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 29 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterUAir.gif"
          ],
          "startup": "11",
          "active": "11—13(14—23)",
          "total": "44",
          "endlag": "21",
          "landingLag": "10",
          "damage": "16.0/10.0",
          "advantage": "-4/-6",
          "shieldLag": "10/8",
          "shieldStun": "6/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-10 and 30 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterDAir.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterDAirLanding.gif"
          ],
          "startup": "14...",
          "active": "14—37(rehit: 5)/1—3",
          "total": "58",
          "endlag": "21",
          "landingLag": "18",
          "damage": "1.5/5.0",
          "advantage": "-11",
          "shieldLag": "4/6",
          "shieldStun": "2/6",
          "hitboxes": "Multi/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 50 onward"
        },
        {
          "name": "Gale Strike",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordFighterGaleStrike.gif"
          ],
          "startup": "20",
          "active": "20—37(38—55/56—71)",
          "total": "67",
          "damage": "13.0/11.0/10.0",
          "advantage": "-33",
          "shieldLag": "9/8/8",
          "shieldStun": "5/4/4",
          "hitboxes": "Early/Late/Later"
        },
        {
          "name": "Shuriken of Light",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordFighterShurikenofLight.gif"
          ],
          "startup": "13",
          "active": "13—20(21—28/29—36/37—50)",
          "total": "37",
          "damage": "2.0/3.5/5.0/6.5",
          "advantage": "-18",
          "shieldLag": "4/5/6/6",
          "shieldStun": "2/2/3/3",
          "hitboxes": "Early/late/later/latest"
        },
        {
          "name": "Blurring Blade",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterBlurringBladeG.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterBlurringBladeA.gif"
          ],
          "startup": "17/21/25/29/33/44",
          "active": "17—18/21—22/25—26/29—30/33—34/44—45",
          "total": "84",
          "endlag": "39",
          "damage": "0.8—1.9/8.0—19.2",
          "advantage": "-32 to -23",
          "shieldLag": "4—4/11—15",
          "shieldStun": "2—3/8—17",
          "hitboxes": "Multi/Final",
          "notes": "Startup is 6 from charge release. Can be charged for 50 addittional frames for more damage"
        },
        {
          "name": "Airborne Assault",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterAirborneAssault.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterAirborneAssaultHit.gif"
          ],
          "startup": "Ground: 25, Air: 30",
          "active": "Ground: 25—60 Air: 30—65 Hit: 2—5",
          "total": "104/109",
          "endlag": "44",
          "landingLag": "29",
          "damage": "14.0",
          "advantage": "-28/-35",
          "shieldLag": "14",
          "shieldStun": "13",
          "notes": "Startup is 2 upon reaching a target. Endlag on hit is 48 if you don't land after hitting. Lands on 36 plus 5 frame landing animation on ground level. Stops at an edge with 44 frame endlag animation."
        },
        {
          "name": "Gale Stab (Charge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterGaleStabG.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterGaleStabA.gif"
          ],
          "startup": "8/11",
          "active": "8—21/11—24",
          "total": "72/--",
          "endlag": "51/35",
          "landingLag": "29 (Freefall)",
          "hitboxes": "Ground/Air",
          "notes": "Charges between 7-8/10-11. Activates through invulnerability."
        },
        {
          "name": "Gale Stab (Hit)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterGaleStabGHit.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterGaleStabAHit.gif"
          ],
          "startup": "2",
          "active": "2—5",
          "total": "34/--",
          "endlag": "28/52",
          "landingLag": "29 (Freefall)",
          "damage": "8.0—18.5",
          "advantage": "-24 to -16",
          "shieldLag": "7—12",
          "shieldStun": "8—16",
          "hitboxes": "Ground/Air",
          "notes": "Ledge grabs enabled starting on frame 7."
        },
        {
          "name": "Chakram",
          "section": "special",
          "startup": "18",
          "active": "18—89/18—40",
          "total": "52",
          "damage": "1.1/8.0",
          "advantage": "-27/-20",
          "shieldLag": "5/9",
          "shieldStun": "2/3",
          "hitboxes": "Weak Throw/Strong Throw",
          "notes": "Weak throw has rehit rate of 9 but will bounce off shields. Strong throw hits just once."
        },
        {
          "name": "Stone Scabbard",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterStoneScabbard.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterStoneScabbardLanding.gif"
          ],
          "startup": "13/42",
          "landingLag": "44",
          "damage": "4.0/3.0/5.0",
          "advantage": "-37",
          "shieldLag": "7/5/13",
          "shieldStun": "5/4/6",
          "hitboxes": "Rising/Falling/landing",
          "notes": "Invulnerable on frame 5-12. Landing hit on frame 1"
        },
        {
          "name": "Skyward Slash Dash",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterSkywardSlashDash.gif"
          ],
          "startup": "15/19/22/25/28/31/34",
          "active": "15/19—20/22—23/25—26/28—29/31—32/34—35",
          "total": "77",
          "endlag": "42",
          "landingLag": "20",
          "damage": "2.2/3.0/4.0",
          "advantage": "-38",
          "shieldLag": "4/5/5",
          "shieldStun": "3/4/5",
          "hitboxes": "First/multi/final",
          "notes": "Total frames assumes you end on the ground."
        },
        {
          "name": "Hero's Spin",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterHerosSpinG.gif"
          ],
          "startup": "8",
          "active": "8—9(10—14/15—24/25—40)",
          "total": "78",
          "endlag": "38",
          "damage": "14.0—19.6",
          "advantage": "-57 to -53",
          "shieldLag": "10—12",
          "shieldStun": "13—17",
          "hitboxes": "Early/Lates",
          "notes": "Can be charged for an additional 60 frames. 8f startup is only the front hit."
        },
        {
          "name": "Hero's Spin (Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterHerosSpinA.gif"
          ],
          "startup": "8/16/22/26/31/38/47",
          "active": "8/11/16/19/22/26/31/38/47—48",
          "landingLag": "30",
          "damage": "3.0/2.0/5.0",
          "shieldLag": "5/4/12",
          "shieldStun": "4/3/6",
          "hitboxes": "First/multi/final"
        },
        {
          "name": "Blade Counter",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterBladeCounter.gif"
          ],
          "startup": "5 (Start of Counter)",
          "active": "5—26 (counter)",
          "total": "59",
          "notes": "Intangible on frame 4-5. Counters on frame 5-26."
        },
        {
          "name": "Blade Counter, Activated",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterBladeCounterHit.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterBladeCounterHitAerial.gif"
          ],
          "startup": "21",
          "active": "21—22",
          "total": "Ground 38/ Air 41",
          "endlag": "16",
          "notes": "Intangible frames 1-23."
        },
        {
          "name": "Reversal Slash",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterReversalSlash.gif"
          ],
          "startup": "16 (Can reflect as fast as frame 5)",
          "active": "16—17",
          "total": "36",
          "endlag": "19",
          "damage": "6.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "0",
          "notes": "Reflects on frame 8-24, search box on frames 4-7. Invulnerable on frame 17-26 if you hit somebody or reflect something. While the move's reflector normally comes out on frame 8, it has a preemptive projectile detector starting on frame 4. If a projectile comes in contact with this detector, the move skips to frame 8 on the next frame, effectively cutting up to three frames of startup (and therefor reflecting on frame 5)."
        },
        {
          "name": "Power Thrust",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterPowerThrustG.gif"
          ],
          "startup": "12",
          "active": "12—14(15—22/23—30)",
          "total": "59",
          "endlag": "29",
          "damage": "15.0/13.0/10.0",
          "advantage": "-33",
          "shieldLag": "10/9/8",
          "shieldStun": "14/12/10",
          "hitboxes": "Early/Late/Later"
        },
        {
          "name": "Power Thrust (Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterPowerThrustA.gif",
            "hitboxes/mii_swordfighter/MiiSwordfighterPowerThrustALanding.gif"
          ],
          "startup": "14",
          "active": "14—16/17—24/25—29",
          "total": "58",
          "endlag": "29",
          "landingLag": "39",
          "damage": "13.0/7.0",
          "advantage": "-31",
          "shieldLag": "9/10",
          "shieldStun": "12/7",
          "hitboxes": "falling/landing",
          "notes": "Landing hit on frame 1—2"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterGrab.gif"
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
            "hitboxes/mii_swordfighter/MiiSwordfighterDashGrab.gif"
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
            "hitboxes/mii_swordfighter/MiiSwordfighterPivotGrab.gif"
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
            "hitboxes/mii_swordfighter/MiiSwordfighterPummel.gif"
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
            "hitboxes/mii_swordfighter/MiiSwordfighterFThrow.gif"
          ],
          "startup": "11/13",
          "total": "40",
          "damage": "3.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterBThrow.gif"
          ],
          "startup": "15/16",
          "total": "46",
          "damage": "3.0/3.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterUThrow.gif"
          ],
          "startup": "21/23",
          "total": "49",
          "damage": "2.0/3.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/MiiSwordfighterDThrow.gif"
          ],
          "startup": "15/16",
          "total": "32",
          "damage": "2.0/2.0"
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
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "69",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "77",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "84",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "99",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "107",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Mii Swordfighter Ledgehang.gif",
            "ledgerolls/MiiSwordfighter.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/mii_swordfighter/miiswordfighterGetupAttackU.gif",
            "hitboxes/mii_swordfighter/miiswordfighterGetupAttackD.gif",
            "hitboxes/mii_swordfighter/miiswordfighterTripAttack.gif",
            "hitboxes/mii_swordfighter/miiswordfighterLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/mii_swordfighter",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
