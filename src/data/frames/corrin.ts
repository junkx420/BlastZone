// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "corrin",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinJab1.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "27",
          "endlag": "21",
          "damage": "2.0/2.5",
          "advantage": "-19/-18",
          "shieldLag": "7/8",
          "shieldStun": "3/4",
          "hitboxes": "Close/Far",
          "notes": "Transitions to jab 2 as early as frame 9"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinJab2.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "29",
          "endlag": "24",
          "damage": "2.0",
          "advantage": "-22",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 9 and rapid as early as 8."
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "30",
          "endlag": "23",
          "damage": "3.0/4.0",
          "advantage": "-20/-19",
          "shieldLag": "9/10",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinJabRapid.gif"
          ],
          "startup": "12/16/20...",
          "damage": "0.5",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinJabRapidEnd.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "39",
          "endlag": "35",
          "damage": "3.0",
          "advantage": "-32",
          "shieldLag": "14",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinFTilt.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "34",
          "endlag": "25",
          "damage": "10.5",
          "advantage": "-16",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinUTilt.gif"
          ],
          "startup": "7",
          "active": "7-8(9-16)",
          "total": "35",
          "endlag": "19",
          "damage": "9.0",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDTilt.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "30",
          "endlag": "23",
          "damage": "7.5",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDashAttack.gif"
          ],
          "startup": "12/14/16/18/20/23",
          "active": "12/14/16/18/20/23",
          "total": "49",
          "endlag": "26",
          "damage": "2.0/3.0",
          "advantage": "-22",
          "shieldLag": "4/9",
          "shieldStun": "--/4",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinFSmashCharge.gif"
          ],
          "startup": "12/17",
          "active": "12-**/17-18",
          "total": "56",
          "endlag": "38",
          "damage": "0.5/11.0/12.0/16.7",
          "advantage": "-26/-26/-22",
          "shieldLag": "4/9/9/16",
          "shieldStun": "2/13/13/17",
          "hitboxes": "Charging/Close/Far/Tipper",
          "notes": "Charging hold is frame 12 and includes a hitbox that hits every 5 frames"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinUSmash.gif"
          ],
          "startup": "13",
          "active": "13-17",
          "total": "51",
          "endlag": "34",
          "damage": "10.0/13.0/15.0",
          "advantage": "-31/-29/-28",
          "shieldLag": "8/9/14",
          "shieldStun": "7/9/10",
          "hitboxes": "Close/Far/Tipper",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDSmash.gif"
          ],
          "startup": "13",
          "active": "13-15",
          "total": "48",
          "endlag": "33",
          "damage": "11.0/9.0/14.0",
          "advantage": "-27/-28/-25",
          "shieldLag": "8/7/14",
          "shieldStun": "8/7/10",
          "hitboxes": "Front/Back/Tipper",
          "notes": "Charge hold is frame 8"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/corrin/CorrinNAir.gif"
          ],
          "startup": "6",
          "active": "6-7(8-19)",
          "total": "46",
          "endlag": "27",
          "landingLag": "10",
          "damage": "7.0/5.5",
          "advantage": "-7/-7",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-5 and 47 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/corrin/CorrinFAir.gif"
          ],
          "startup": "9",
          "active": "9-12",
          "total": "35",
          "endlag": "23",
          "landingLag": "8",
          "damage": "9.0",
          "advantage": "-4",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-8 and 30 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/corrin/CorrinBAir.gif"
          ],
          "startup": "13",
          "active": "13(14-16)",
          "total": "41",
          "endlag": "25",
          "landingLag": "13",
          "damage": "12.0/9.0",
          "advantage": "-8/-9",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-5 and 42 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/corrin/CorrinUAir.gif"
          ],
          "startup": "7",
          "active": "7-12",
          "total": "37",
          "endlag": "25",
          "landingLag": "9",
          "damage": "10.0",
          "advantage": "-5",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-3 and 38 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDAir.gif",
            "hitboxes/corrin/CorrinDAirLanding.gif"
          ],
          "startup": "12...",
          "active": "12-28(rehit: 2)/1-5",
          "total": "51",
          "endlag": "23",
          "landingLag": "26",
          "damage": "2.0/3.0",
          "advantage": "-21",
          "shieldLag": "4/5",
          "shieldStun": "2/4",
          "hitboxes": "Falling/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-11 and 41 onward"
        },
        {
          "name": "Neutral B (Dragon Fang Shot)",
          "section": "special",
          "startup": "17-47",
          "active": "17-71",
          "total": "61-95",
          "damage": "4.0-11.0",
          "shieldLag": "5-8",
          "shieldStun": "2-4"
        },
        {
          "name": "Dragon Fang Shot (chomp)",
          "section": "special",
          "startup": "24-54-85",
          "active": "24-25/**/85-86",
          "damage": "10.0-20.0",
          "advantage": "-31 to -19",
          "shieldLag": "8-20",
          "shieldStun": "10-18",
          "notes": "Chomp can be charged an additional 30 frames independently of shot for more damage."
        },
        {
          "name": "Side B (Dragon Lunge, Pin)",
          "section": "special",
          "startup": "4",
          "damage": "7.0",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "7",
          "notes": "After pinning the ground, 13 frame waiting period before you can select one of the options. Empty hop on the ground without Pin is 45 frames. Cannot pin a shielding target."
        },
        {
          "name": "Side B (Dragon Lunge, Air)",
          "section": "special",
          "startup": "10",
          "active": "10",
          "total": "37",
          "endlag": "27",
          "landingLag": "22",
          "damage": "8.0/15.0",
          "shieldLag": "7/10",
          "shieldStun": "8/14",
          "hitboxes": "Close/Tipper"
        },
        {
          "name": "Dragon Lunge, Pin Cancel",
          "section": "special",
          "total": "~35/19",
          "landingLag": "19",
          "notes": "Second total frames is if you don't land on the ground"
        },
        {
          "name": "Dragon Lunge, Pin Jump",
          "section": "special",
          "total": "29",
          "notes": "Invulnerable on frame 2-7"
        },
        {
          "name": "Dragon Lunge, Pin Kick",
          "section": "special",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDragonLungeKick.gif"
          ],
          "startup": "10",
          "active": "10-17(18-24)",
          "total": "56/45",
          "endlag": "32",
          "landingLag": "19",
          "damage": "12.0/7.0",
          "advantage": "-35",
          "shieldLag": "10/7",
          "shieldStun": "11/7",
          "hitboxes": "Early/Late",
          "notes": "Second total frames is if you go over an edge."
        },
        {
          "name": "Dragon Lunge, Back Kick",
          "section": "special",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDragonLungeKickBack.gif"
          ],
          "startup": "6",
          "active": "6/14-21(22-28)",
          "total": "60/45",
          "endlag": "32",
          "landingLag": "19",
          "damage": "5.0/7.0",
          "advantage": "-48",
          "shieldLag": "6/7",
          "shieldStun": "6/7",
          "hitboxes": "Early/Late",
          "notes": "Second total frames is if you go over an edge."
        },
        {
          "name": "Up B (Dragon Ascent)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDragonAscent.gif"
          ],
          "startup": "18...",
          "active": "18-19/20-28(rehit: 2)/29-30",
          "landingLag": "30",
          "damage": "4.5/1.2/3.0",
          "shieldLag": "8/4/10",
          "shieldStun": "-/2/4",
          "hitboxes": "First/Multi/Final",
          "notes": "Invulnerable on frame 7-17"
        },
        {
          "name": "Down B (Counter Surge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/corrin/CorrinCounterSurge.gif"
          ],
          "startup": "7 (Start of Counter)",
          "active": "7-26 (counter)",
          "total": "66",
          "notes": "Invulnerable on frame 6. Counters on 7-26"
        },
        {
          "name": "Counter Surge, Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/corrin/CorrinCounterSurgeHit.gif"
          ],
          "startup": "27",
          "active": "27-31",
          "total": "66",
          "endlag": "35",
          "notes": "Invulnerable on frame 1-51. Attacker frozen until frame 12"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinGrab.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "36",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDashGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "44",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinPivotGrab.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "39",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinPummel.gif"
          ],
          "damage": "1.3"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinFThrow.gif"
          ],
          "startup": "14/15",
          "total": "34",
          "damage": "5.0/2.0",
          "notes": "First hit can connect with nearby opponents, and can tipper for 10.0% damage."
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinBThrow.gif"
          ],
          "startup": "12/13",
          "total": "37",
          "damage": "6.5/2.0",
          "notes": "First hit can connect with nearby opponents and can tipper for 12.0% damage."
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinUThrow.gif"
          ],
          "startup": "12/13",
          "total": "51",
          "damage": "6.5/3.0",
          "notes": "Frames 1-4 Invincible, 5-42 Dragon intangible, 43-End Vulnerable. First hit can hit nearby opponents."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/corrin/CorrinDThrow.gif"
          ],
          "startup": "26/27",
          "total": "54",
          "damage": "6.5/3.0",
          "notes": "Frame 1-4 Invincible, 5-44 Dragon intangible, 44-End Vulnerable. First hit can hit nearby opponents."
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
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "67",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "75",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "81",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "97",
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
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/corrin/corrinGetupAttackU.gif",
            "hitboxes/corrin/corrinGetupAttackD.gif",
            "hitboxes/corrin/corrinTripAttack.gif",
            "hitboxes/corrin/corrinLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/corrin",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
