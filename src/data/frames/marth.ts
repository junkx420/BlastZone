// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "marth",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthJab1.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "25",
          "endlag": "19",
          "damage": "3.0/5.0",
          "advantage": "-16/-14",
          "shieldLag": "6/10",
          "shieldStun": "4/6",
          "hitboxes": "Close/tipper",
          "notes": "Transitions to Jab 2 as early as frame 11."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthJab2.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "28",
          "endlag": "23",
          "damage": "4.0/6.0",
          "advantage": "-19/-18",
          "shieldLag": "7/11",
          "shieldStun": "5/6",
          "hitboxes": "Close/tipper"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthFTilt.gif"
          ],
          "startup": "8",
          "active": "8—11",
          "total": "33",
          "endlag": "22",
          "damage": "9.0/12.0",
          "advantage": "-16/-14",
          "shieldLag": "7/11",
          "shieldStun": "9/11",
          "hitboxes": "Close/tipper"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthUTilt.gif"
          ],
          "startup": "6",
          "active": "6—8/9—12",
          "total": "33",
          "endlag": "21",
          "damage": "5.0/6.0/10.0/",
          "advantage": "-21/-18",
          "shieldLag": "6/9",
          "shieldStun": "6/9",
          "hitboxes": "Closest/Close/Tipper"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthDTilt.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "23",
          "endlag": "15",
          "damage": "7.0/10.0",
          "advantage": "-9/-6",
          "shieldLag": "7/10",
          "shieldStun": "7/10",
          "hitboxes": "Close/tipper"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthDashAttack.gif"
          ],
          "startup": "13",
          "active": "13—16",
          "total": "49",
          "endlag": "33",
          "damage": "9.0/10.0/13.0",
          "advantage": "-22/-20",
          "shieldLag": "8/14",
          "shieldStun": "14/16",
          "hitboxes": "Closest/Close/Tipper"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthFSmash.gif",
            "hitboxes/marth/MarthFSmashInterpolated.gif"
          ],
          "startup": "10",
          "active": "10—13",
          "total": "51",
          "endlag": "38",
          "damage": "13.0/18.0",
          "advantage": "-32/-29",
          "shieldLag": "9/15",
          "shieldStun": "9/12",
          "hitboxes": "Close/tipper",
          "notes": "Charge hold is frame 3."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthUSmash.gif"
          ],
          "startup": "13",
          "active": "13—14/13—17",
          "total": "58",
          "endlag": "41",
          "damage": "3.0/13.0/17.0",
          "advantage": "-41/-36",
          "shieldLag": "0/9/?",
          "shieldStun": "4/9/?",
          "hitboxes": "Body Launcher/Close/Tipper",
          "notes": "Launcher and sword hits generate on the same frame. Charge hold is frame 5"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/marth/MarthDSmash.gif"
          ],
          "startup": "6/21",
          "active": "6—7/21—23",
          "total": "55",
          "endlag": "32",
          "damage": "8.0/12.0/12.0/17.0",
          "advantage": "-43/-41/-26/-23",
          "shieldLag": "7/13/9/15",
          "shieldStun": "6/8/8/11",
          "hitboxes": "Close/tipper, close/tipper",
          "notes": "Charge hold is frame 4."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/marth/MarthNAir.gif"
          ],
          "startup": "6/15",
          "active": "6—7/15—21",
          "total": "49",
          "endlag": "28",
          "landingLag": "7",
          "damage": "3.5/5.0/7.0/9.5",
          "advantage": "-5/-4/-4/-3",
          "shieldLag": "5/7/7/10",
          "shieldStun": "2/3/3/4",
          "hitboxes": "close/tipper/close/tipper",
          "notes": "Autocancels on frame 47 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/marth/MarthFAir.gif"
          ],
          "startup": "6",
          "active": "6—8",
          "total": "37",
          "endlag": "29",
          "landingLag": "10",
          "damage": "8.0/11.5",
          "advantage": "-6/-5",
          "shieldLag": "7/11",
          "shieldStun": "4/5",
          "hitboxes": "Close/tipper",
          "notes": "Autocancels on frame 36 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/marth/MarthBAir.gif"
          ],
          "startup": "7",
          "active": "7—11",
          "total": "39",
          "endlag": "28",
          "landingLag": "10",
          "damage": "9.0/12.5",
          "advantage": "-6/-5",
          "shieldLag": "7/11",
          "shieldStun": "4/5",
          "hitboxes": "Close/tipper",
          "notes": "Autocancels on frame 1-2 and 32 onward. Turns the character around."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/marth/MarthUAir.gif"
          ],
          "startup": "5",
          "active": "5—9",
          "total": "45",
          "endlag": "36",
          "landingLag": "8",
          "damage": "9.5/13.0",
          "advantage": "-4/-3",
          "shieldLag": "8/12",
          "shieldStun": "4/5",
          "hitboxes": "Close/tipper",
          "notes": "Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/marth/MarthDAir.gif"
          ],
          "startup": "9/11",
          "active": "9—13/11",
          "total": "59",
          "endlag": "46",
          "landingLag": "14",
          "damage": "12.0/15.0/14.0",
          "advantage": "-9/-9/-9",
          "shieldLag": "9/13/12",
          "shieldStun": "5/5/5",
          "hitboxes": "Close/meteor/tipper",
          "notes": "Autocancels on frame 1-2 and 55 onward"
        },
        {
          "name": "Neutral B (Shield Breaker)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthShieldbreaker.gif",
            "hitboxes/marth/MarthShieldbreakerUp.gif",
            "hitboxes/marth/MarthShieldbreakerDown.gif",
            "hitboxes/marth/MarthShieldbreakerMax.gif",
            "hitboxes/marth/MarthShieldbreakerUpMax.gif",
            "hitboxes/marth/MarthShieldbreakerDownMax.gif"
          ],
          "startup": "19—79",
          "active": "19—20 (or frames 8-9 after release)",
          "total": "50—110",
          "endlag": "31",
          "damage": "8.0—24.0",
          "advantage": "-23 to Shieldbreak",
          "shieldLag": "10—18",
          "shieldStun": "8—Shieldbreak",
          "notes": "On release, startup is 8 and total frames is 39"
        },
        {
          "name": "Side B (Dancing Blade)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade1.gif"
          ],
          "startup": "9",
          "active": "9—11",
          "total": "39/29",
          "endlag": "28",
          "damage": "2.5/3.0",
          "advantage": "-26/-16",
          "shieldLag": "5/5",
          "shieldStun": "4/4",
          "hitboxes": "Close/Tipper",
          "notes": "Second total frames is the air version. Can transition to next slash on frame 12-30"
        },
        {
          "name": "Dancing Blade 2 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade2.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "38",
          "endlag": "31",
          "damage": "2.5/3.0",
          "advantage": "-29/-29",
          "shieldLag": "5/5",
          "shieldStun": "4/4",
          "hitboxes": "Close/Tipper",
          "notes": "Can transition to next slash on frame 8-29"
        },
        {
          "name": "Dancing Blade 3 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade3.gif"
          ],
          "startup": "4",
          "active": "4—6",
          "total": "43",
          "endlag": "37",
          "damage": "3.0/4.0",
          "advantage": "-35/-34",
          "shieldLag": "5/5",
          "shieldStun": "4/5",
          "hitboxes": "Close/Tipper",
          "notes": "Can transition to next slash on frame 7-24"
        },
        {
          "name": "Dancing Blade 4 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade4.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "55",
          "endlag": "46",
          "damage": "4.0/6.0",
          "advantage": "-43/-42",
          "shieldLag": "5/9",
          "shieldStun": "5/6",
          "hitboxes": "Close/Tipper"
        },
        {
          "name": "Dancing Blade 2 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade2Up.gif"
          ],
          "startup": "4",
          "active": "4—7",
          "total": "38",
          "endlag": "31",
          "damage": "2.5/3.0",
          "advantage": "-30/-30",
          "shieldLag": "5/5",
          "shieldStun": "4/4",
          "hitboxes": "Close/Tipper",
          "notes": "Can transition to next slash on frame 8-29"
        },
        {
          "name": "Dancing Blade 3 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade3Up.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "43",
          "endlag": "36",
          "damage": "3.0/4.0",
          "advantage": "-34/-33",
          "shieldLag": "5/5",
          "shieldStun": "4/5",
          "hitboxes": "Close/Tipper",
          "notes": "Can transition to next slash on frame 8-24"
        },
        {
          "name": "Dancing Blade 4 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade4Up.gif"
          ],
          "startup": "6",
          "active": "6—10",
          "total": "44",
          "endlag": "34",
          "damage": "5.0/7.0",
          "advantage": "-32/-31",
          "shieldLag": "6/7",
          "shieldStun": "6/7",
          "hitboxes": "Close/Tipper"
        },
        {
          "name": "Dancing Blade 3 Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade3Down.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "43",
          "endlag": "36",
          "damage": "3.0/4.0",
          "advantage": "-34/-32",
          "shieldLag": "5/",
          "shieldStun": "4/5",
          "hitboxes": "Close/Tipper",
          "notes": "Can transition to next slash on frame 8-24"
        },
        {
          "name": "Dancing Blade 4 Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDancingBlade4Down.gif"
          ],
          "startup": "7",
          "active": "7/10/13/16/19—21",
          "total": "74",
          "endlag": "53",
          "damage": "2.0/4.0/5.0",
          "advantage": "-50/-49",
          "shieldLag": "4/5/6",
          "shieldStun": "-/5/6",
          "hitboxes": "Multi/Final/Final Tipper"
        },
        {
          "name": "Up B (Dolphin Slash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthDolphinSlashG.gif",
            "hitboxes/marth/MarthDolphinSlashA.gif"
          ],
          "startup": "5",
          "active": "5—6/6—11",
          "landingLag": "24",
          "damage": "11.0/7.0",
          "shieldLag": "8/7",
          "shieldStun": "10/7",
          "hitboxes": "Early/Late",
          "notes": "Intangible on frame 4-5. 1-5 in the air."
        },
        {
          "name": "Down B (Counter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthCounter.gif"
          ],
          "startup": "6 (Start of Counter)",
          "total": "64",
          "notes": "Intangibility on 5-6 when detecting. Counter window 6-27."
        },
        {
          "name": "Counter, Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/marth/MarthCounterHit.gif"
          ],
          "startup": "4",
          "active": "4—6",
          "total": "40",
          "endlag": "34",
          "notes": "Intangible on frame 1-7 in addition to counter freeze frames. 8% Minimum base damage, x1.2 enemy's attack."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/marth/MarthGrab.gif"
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
            "hitboxes/marth/MarthDashGrab.gif"
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
            "hitboxes/marth/MarthPivotGrab.gif"
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
            "hitboxes/marth/MarthPummel.gif"
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
            "hitboxes/marth/MarthFThrow.gif"
          ],
          "startup": "18",
          "total": "34",
          "damage": "4.0",
          "notes": "Visualization does not linclude hitlag"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/marth/MarthBThrow.gif"
          ],
          "startup": "19",
          "total": "44",
          "damage": "4.0",
          "notes": "Visualization does not include hitlag"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/marth/MarthUThrow.gif"
          ],
          "startup": "13",
          "total": "44",
          "damage": "5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/marth/MarthDThrow.gif"
          ],
          "startup": "20",
          "total": "46",
          "damage": "4.0",
          "notes": "Visualization does not include hitlag"
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
          "total": "69",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "79",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "85",
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
          "total": "116",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/marth/marthGetupAttackU.gif",
            "hitboxes/marth/marthGetupAttackD.gif",
            "hitboxes/marth/marthTripAttack.gif",
            "hitboxes/marth/marthLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/marth",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
