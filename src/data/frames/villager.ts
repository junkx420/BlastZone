// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "villager",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerJab1.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "21",
          "endlag": "17",
          "damage": "1.0",
          "advantage": "-16",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Transitions to jab 2 as early as frame 6."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "23",
          "endlag": "19",
          "damage": "1.0",
          "advantage": "-18",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Transitions to rapid jab as early as frame 5"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "startup": "3/8/12...",
          "damage": "1.0",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Alternates between four and five frames between punches."
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerJab1End.gif",
            "hitboxes/villager/VillagerJab2End.gif"
          ],
          "startup": "4/5",
          "total": "38",
          "damage": "2.0",
          "advantage": "-28",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerFTilt.gif"
          ],
          "startup": "8",
          "active": "8-11",
          "total": "33",
          "endlag": "22",
          "damage": "9.0",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerUTilt.gif"
          ],
          "startup": "7/22",
          "active": "7-18/22-25",
          "total": "47",
          "endlag": "22",
          "damage": "5.0/6.0",
          "advantage": "-34/-19",
          "shieldLag": "6/7",
          "shieldStun": "6/6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerDTilt.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "37",
          "endlag": "26",
          "damage": "12.0/10.0",
          "advantage": "-17/-18",
          "shieldLag": "9/8",
          "shieldStun": "11/10",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerDashAttack.gif",
            "hitboxes/villager/VillagerDashAttackOffLedge.gif"
          ],
          "startup": "9...",
          "active": "9-14/15-22 (Normal) 9-14/15-68 (Off-Ledge)",
          "total": "42",
          "damage": "10.0/6.0",
          "advantage": "-22",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerFSmash.gif"
          ],
          "startup": "25",
          "active": "25-30(31-144)",
          "total": "49",
          "damage": "15.0/17.0",
          "advantage": "-4",
          "shieldLag": "10/11",
          "shieldStun": "10/11",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 16"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerUSmash.gif"
          ],
          "startup": "12...",
          "active": "12-13/17-18/21-22/25-26/29-30/33-34",
          "total": "53",
          "endlag": "19",
          "damage": "3.0/1.0/4.0",
          "advantage": "-8",
          "shieldLag": "5/-/9",
          "shieldStun": "3/-/4",
          "notes": "Charge hold is frame 7"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/villager/VillagerDSmash.gif"
          ],
          "startup": "9/29",
          "active": "9(10-11)/29(30-31)",
          "total": "49",
          "endlag": "18",
          "damage": "6.0/3.0",
          "advantage": "-35/-15",
          "shieldLag": "6/4",
          "shieldStun": "5/0",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/villager/VillagerNAir.gif"
          ],
          "startup": "3",
          "active": "3-10(11-23)",
          "total": "35",
          "endlag": "12",
          "landingLag": "8",
          "damage": "9.0/5.0",
          "advantage": "-4/-5",
          "shieldLag": "7/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 27 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/villager/VillagerFAir.gif"
          ],
          "startup": "10",
          "active": "10-12(13-18/19-23)",
          "total": "39",
          "endlag": "16",
          "landingLag": "14",
          "damage": "7.0/4.0/2.5",
          "advantage": "-4",
          "shieldLag": "7/5/5",
          "shieldStun": "3/3/2",
          "hitboxes": "Early/Late/Later",
          "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/villager/VillagerBAir.gif"
          ],
          "startup": "13",
          "active": "13-15(16-21/22-26)",
          "total": "35",
          "endlag": "9",
          "landingLag": "14",
          "damage": "9.0/5.0/3.0",
          "advantage": "-3",
          "shieldLag": "7/6/5",
          "shieldStun": "4/3/2",
          "hitboxes": "Early/Late/Later",
          "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/villager/VillagerUAir1.gif",
            "hitboxes/villager/VillagerUAir2.gif",
            "hitboxes/villager/VillagerUAir3.gif"
          ],
          "startup": "6",
          "active": "6-7(8-21)",
          "total": "42",
          "endlag": "21",
          "landingLag": "12",
          "damage": "13.0/10.0/8.0",
          "advantage": "-7/-8/-8",
          "shieldLag": "9/8/7",
          "shieldStun": "5/4/4",
          "hitboxes": "3/2/1 turnips",
          "notes": "Autocancels on frame 1-5 and 39 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/villager/VillagerDAir1.gif",
            "hitboxes/villager/VillagerDAir2.gif",
            "hitboxes/villager/VillagerDAir3.gif"
          ],
          "startup": "11",
          "active": "11-12(13-26)",
          "total": "42",
          "endlag": "16",
          "landingLag": "12",
          "damage": "13.0/10.0/8.0",
          "advantage": "-7/-8/-8",
          "shieldLag": "9/8/7",
          "shieldStun": "5/4/4",
          "hitboxes": "3/2/1 turnips",
          "notes": "Autocancels on frame 1-13 and 39 onward"
        },
        {
          "name": "Neutral B (Pocket)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/villager/VillagerPocket.gif"
          ],
          "startup": "8 (Start of projectile pocket)",
          "active": "8-23 (pocket)",
          "total": "50",
          "notes": "Invulnerable on frame 5-23. Pockets projectiles on frame 8-23."
        },
        {
          "name": "Pocket, Throw",
          "section": "special",
          "startup": "9",
          "total": "30",
          "notes": "This is not the same throw as with a holdable item"
        },
        {
          "name": "Side B (Lloid Rocket)",
          "section": "special",
          "startup": "52",
          "active": "52-116(117-176)",
          "total": "35",
          "damage": "7.0/5.0",
          "advantage": "+27",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Up B (Balloon Trip)",
          "section": "special",
          "landingLag": "30/20",
          "notes": "First landing lag is from free fall. Second is with balloons still attached"
        },
        {
          "name": "Down B (Timber Plant, Timber Water)",
          "section": "special",
          "startup": "--, 5",
          "active": "--, 5-20",
          "total": "38, 49",
          "endlag": "18"
        },
        {
          "name": "Timber Tree Grow/Fall",
          "section": "special",
          "hitboxImages": [
            "hitboxes/villager/VillagerTimberGrowth.gif",
            "hitboxes/villager/VillagerTimberFall.gif"
          ],
          "startup": "46/16",
          "damage": "18.0/25.0",
          "advantage": "+14 / -11",
          "shieldLag": "11/14",
          "shieldStun": "6/7",
          "notes": "Refers to how long after water touches sprout/Tree is chopped a second time"
        },
        {
          "name": "Timber Axe",
          "section": "special",
          "hitboxImages": [
            "hitboxes/villager/VillagerTimberAxe.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "47/54",
          "endlag": "39",
          "damage": "14.0",
          "advantage": "-28/-35",
          "shieldLag": "10",
          "shieldStun": "13",
          "notes": "Second total frames is hitting a tree, and includes 13 frames of hitlag for Villager"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerGrab.gif"
          ],
          "startup": "14",
          "active": "14-16",
          "total": "43",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerDashGrab.gif"
          ],
          "startup": "16",
          "active": "16-18",
          "total": "47",
          "endlag": "29"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerPivotGrab.gif"
          ],
          "startup": "17",
          "active": "17-19",
          "total": "44",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerPummel.gif"
          ],
          "startup": "3",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerFThrow.gif"
          ],
          "startup": "15",
          "total": "45",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerBThrow.gif"
          ],
          "startup": "11",
          "total": "45",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerUThrow.gif"
          ],
          "startup": "13",
          "total": "45",
          "damage": "10.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/villager/VillagerDThrow.gif"
          ],
          "startup": "18",
          "total": "35",
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
          "notes": "Intangible on frame 4-15."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "34",
          "notes": "Intangible on frame 5-16."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "57",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "87",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "111",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "128",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Villager Ledgehang.gif",
            "ledgerolls/Villager.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/villager/villagerGetupAttackU.gif",
            "hitboxes/villager/villagerGetupAttackD.gif",
            "hitboxes/villager/villagerTripAttack.gif",
            "hitboxes/villager/villagerLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/villager",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
