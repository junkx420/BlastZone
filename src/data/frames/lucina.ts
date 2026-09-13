// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "lucina",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaJab1.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "25",
          "endlag": "19",
          "damage": "3.3",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 11."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaJab2.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "28",
          "endlag": "23",
          "damage": "4.7",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaFTilt.gif"
          ],
          "startup": "8",
          "active": "8-11",
          "total": "33",
          "endlag": "22",
          "damage": "11.0",
          "advantage": "-15",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaUTilt.gif"
          ],
          "startup": "6",
          "active": "6-8/9-12",
          "total": "33",
          "endlag": "21",
          "damage": "7.6/8.0",
          "advantage": "-19",
          "shieldLag": "7/7",
          "shieldStun": "8/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDTilt.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "23",
          "endlag": "15",
          "damage": "8.5",
          "advantage": "-8",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDashAttack.gif"
          ],
          "startup": "13",
          "active": "13-16",
          "total": "49",
          "endlag": "33",
          "damage": "10.9",
          "advantage": "-21",
          "shieldLag": "8",
          "shieldStun": "15"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaFSmash.gif"
          ],
          "startup": "10",
          "active": "10-13",
          "total": "51",
          "endlag": "38",
          "damage": "15.0",
          "advantage": "-31",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Charge hold is frame 3."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaUSmash.gif"
          ],
          "startup": "13",
          "active": "13-14/13-17",
          "total": "58",
          "endlag": "41",
          "damage": "3.0/14.2",
          "advantage": "-41/-35",
          "shieldLag": "0/10",
          "shieldStun": "4/10",
          "hitboxes": "Body Launcher/Sword",
          "notes": "Launcher and sword hits generate on the same frame. Charge hold is frame 5"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDSmash.gif"
          ],
          "startup": "6/21",
          "active": "6-7/21-23",
          "total": "55",
          "endlag": "32",
          "damage": "9.5/14.0",
          "advantage": "-42/-24",
          "shieldLag": "8/10",
          "shieldStun": "7/10",
          "notes": "Charge hold is frame 4."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucina/LucinaNAir.gif"
          ],
          "startup": "6/15",
          "active": "6-7/15-21",
          "total": "49",
          "endlag": "28",
          "landingLag": "7",
          "damage": "4.2/8.5",
          "advantage": "-4/-3",
          "shieldLag": "5/7",
          "shieldStun": "3/4",
          "notes": "Autocancels on frame 47 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucina/LucinaFAir.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "37",
          "endlag": "29",
          "landingLag": "10",
          "damage": "10.5",
          "advantage": "-6",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 36 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucina/LucinaBAir.gif"
          ],
          "startup": "7",
          "active": "7-11",
          "total": "39",
          "endlag": "28",
          "landingLag": "10",
          "damage": "11.8",
          "advantage": "-5",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-2 and 32 onward. Turns the character around."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucina/LucinaUAir.gif"
          ],
          "startup": "5",
          "active": "5-9",
          "total": "45",
          "endlag": "36",
          "landingLag": "8",
          "damage": "11.4",
          "advantage": "-3",
          "shieldLag": "8",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDAir.gif"
          ],
          "startup": "9/11",
          "active": "9-13/11",
          "total": "59",
          "endlag": "46",
          "landingLag": "14",
          "damage": "12.3/14.2",
          "advantage": "-9/-9",
          "shieldLag": "9/12",
          "shieldStun": "5/5",
          "hitboxes": "Sour/Meteor",
          "notes": "Autocancels on frame 1-2 and 55 onward"
        },
        {
          "name": "Neutral B (Shieldbreaker)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaShieldbreaker.gif",
            "hitboxes/lucina/LucinaShieldbreakerUp.gif",
            "hitboxes/lucina/LucinaShieldbreakerDown.gif",
            "hitboxes/lucina/LucinaShieldbreakerMax.gif",
            "hitboxes/lucina/LucinaShieldbreakerUpMax.gif",
            "hitboxes/lucina/LucinaShieldbreakerDownMax.gif"
          ],
          "startup": "19-79",
          "active": "19-20 (or frames 8-9 after release)",
          "total": "50-110",
          "endlag": "31",
          "damage": "8.5-23",
          "advantage": "-23 to Shieldbreak",
          "shieldLag": "13-18",
          "shieldStun": "8-Shieldbreak",
          "notes": "On release, startup is 8 and total frames is 39"
        },
        {
          "name": "Side B (Dancing Blade)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade1.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "39/29",
          "endlag": "28",
          "damage": "2.8",
          "advantage": "-26/-16",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Second total frames is the air version. Can transition to next slash on frame 12-30"
        },
        {
          "name": "Dancing Blade 2 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade2.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "38",
          "endlag": "31",
          "damage": "2.8",
          "advantage": "-29",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Can transition to next slash on frame 8-29"
        },
        {
          "name": "Dancing Blade 3 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade3.gif"
          ],
          "startup": "4",
          "active": "4-6",
          "total": "43",
          "endlag": "37",
          "damage": "3.3",
          "advantage": "-35",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Can transition to next slash on frame 7-24"
        },
        {
          "name": "Dancing Blade 4 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade4.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "55",
          "endlag": "46",
          "damage": "4.7",
          "advantage": "-43",
          "shieldLag": "7",
          "shieldStun": "5"
        },
        {
          "name": "Dancing Blade 2 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade2Up.gif"
          ],
          "startup": "4",
          "active": "4-7",
          "total": "38",
          "endlag": "31",
          "damage": "2.8",
          "advantage": "-30",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Can transition to next slash on frame 8-29"
        },
        {
          "name": "Dancing Blade 3 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade3Up.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "43",
          "endlag": "36",
          "damage": "3.3",
          "advantage": "-34",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Can transition to next slash on frame 8-24"
        },
        {
          "name": "Dancing Blade 4 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade4Up.gif"
          ],
          "startup": "6",
          "active": "6-10",
          "total": "44",
          "endlag": "34",
          "damage": "5.6",
          "advantage": "-32",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dancing Blade 3 Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade3Down.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "43",
          "endlag": "36",
          "damage": "3.3",
          "advantage": "-34",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Can transition to next slash on frame 8-24"
        },
        {
          "name": "Dancing Blade 4 Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDancingBlade4Down.gif"
          ],
          "startup": "7",
          "active": "7/10/13/16/19-21",
          "total": "74",
          "endlag": "53",
          "damage": "2.0/4.2",
          "advantage": "-50",
          "shieldLag": "4/5",
          "shieldStun": "-/5",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Up B (Dolphin Slash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDolphinSlashG.gif",
            "hitboxes/lucina/LucinaDolphinSlashA.gif"
          ],
          "startup": "5",
          "active": "5-6/6-11",
          "landingLag": "24",
          "damage": "11.0/7.0",
          "shieldLag": "8/7",
          "shieldStun": "10/7",
          "hitboxes": "Early/Late",
          "notes": "Intangibile on frame 4-5. 1-5 in the air."
        },
        {
          "name": "Down B (Counter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaCounter.gif"
          ],
          "startup": "6 (Start of Counter)",
          "total": "64",
          "notes": "Intangibility on 5-6 when detecting. Counter window 6-27."
        },
        {
          "name": "Counter, Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucina/LucinaCounterHit.gif"
          ],
          "startup": "4",
          "active": "4-7",
          "total": "40",
          "endlag": "33",
          "notes": "Intangible on frame 1-8 in addition to counter freeze frames. 8% Minimum base damage, x1.2 enemy's attack."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucina/LucinaGrab.gif"
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
            "hitboxes/lucina/LucinaDashGrab.gif"
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
            "hitboxes/lucina/LucinaPivotGrab.gif"
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
            "hitboxes/lucina/LucinaPummel.gif"
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
            "hitboxes/lucina/LucinaFThrow.gif"
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
            "hitboxes/lucina/LucinaBThrow.gif"
          ],
          "startup": "19",
          "total": "44",
          "damage": "4.0",
          "notes": "Visualization does not linclude hitlag"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucina/LucinaUThrow.gif"
          ],
          "startup": "13",
          "total": "44",
          "damage": "5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucina/LucinaDThrow.gif"
          ],
          "startup": "20",
          "total": "46",
          "damage": "4.0",
          "notes": "Visualization does not linclude hitlag"
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
            "hitboxes/lucina/lucinaGetupAttackU.gif",
            "hitboxes/lucina/lucinaGetupAttackD.gif",
            "hitboxes/lucina/lucinaTripAttack.gif",
            "hitboxes/lucina/lucinaLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/lucina",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
