// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "link",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkJab1.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "23",
          "endlag": "15",
          "damage": "3.0",
          "advantage": "-12",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 12"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkJab2.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "25",
          "endlag": "19",
          "damage": "3.0",
          "advantage": "-16",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Transitions to Jab 3 as early as frame 8."
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkJab3.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "34",
          "endlag": "27",
          "damage": "4.0",
          "advantage": "-23",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkFTilt.gif"
          ],
          "startup": "15",
          "active": "15(16—19)",
          "total": "39",
          "endlag": "20",
          "damage": "13.0",
          "advantage": "-12",
          "shieldLag": "9",
          "shieldStun": "12",
          "notes": "Hits targets above him on frame 15"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkUTilt.gif"
          ],
          "startup": "8",
          "active": "8—12",
          "total": "35",
          "endlag": "23",
          "damage": "11.0",
          "advantage": "-16",
          "shieldLag": "9",
          "shieldStun": "11"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkDTilt.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "30",
          "endlag": "19",
          "damage": "9.0",
          "advantage": "-11",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkDashAttack.gif"
          ],
          "startup": "20",
          "active": "20—23",
          "total": "56",
          "endlag": "33",
          "damage": "14.0/13.0/12.0",
          "advantage": "-19",
          "shieldLag": "9",
          "shieldStun": "17",
          "hitboxes": "Tip/Middle/Hilt"
        },
        {
          "name": "Forward Smash 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkFSmash1.gif"
          ],
          "startup": "17",
          "active": "17—18",
          "total": "50",
          "endlag": "32",
          "damage": "7.0/14.0",
          "advantage": "-27/-23/**",
          "shieldLag": "7/10/6",
          "shieldStun": "6/10/4",
          "hitboxes": "Blade or Hilt/Tip",
          "notes": "Transitions to second swing as early as frame 22. Sword Sword Beam is active 17-48 when at minimum charge and 17-56 when at maximum charge (only when Link is at 0%). Beam does 5.0%. Charge hold frame is 9."
        },
        {
          "name": "Forward Smash 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkFSmash2.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "60",
          "endlag": "49",
          "damage": "13.0/12.0",
          "advantage": "-41",
          "shieldLag": "14",
          "shieldStun": "9",
          "hitboxes": "Far/Close"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkUSmash.gif"
          ],
          "startup": "10/25/41",
          "active": "10—13(14—15) / 25—28(29—30) / 41—45",
          "total": "77",
          "endlag": "32",
          "damage": "4.0%/3.0%/(11.0%/10.0%/9.0%)",
          "advantage": "-28",
          "shieldLag": "5/5/8",
          "shieldStun": "4/3/8",
          "hitboxes": "(Hit 1/Hit 2/Hit 3(Sword/Arm/Body))",
          "notes": "Charge hold frame is 5."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/link/LinkDSmash.gif"
          ],
          "startup": "12/24",
          "active": "12—13/24—25",
          "total": "56",
          "endlag": "31",
          "damage": "(16.0%/17.0%/14.0%)/(12.0%/11.0%/10.0%)",
          "advantage": "(-31/-32/??)/(-23/-23/??)",
          "shieldLag": "(11/11/??)/(10/9/??)",
          "shieldStun": "(11/12/??)/(9/9/??)",
          "hitboxes": "(Front hit (Middle/Tip/Body)/Back hit (Sword/Arm/Body))",
          "notes": "Charge hold frame is 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/link/LinkNAir.gif"
          ],
          "startup": "7",
          "active": "7—8(9—31)",
          "total": "38",
          "endlag": "7",
          "landingLag": "6",
          "damage": "(11.0/9.0)/6.0",
          "advantage": "-1/-3",
          "shieldLag": "9/6",
          "shieldStun": "5/3",
          "hitboxes": "(Clean (Foot/Legs)/Late)",
          "notes": "Autocancels on frame 1-3 and 36 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/link/LinkFAir.gif"
          ],
          "startup": "16/24",
          "active": "16—17/24—25",
          "total": "51",
          "endlag": "26",
          "landingLag": "11",
          "damage": "8.0/10.0",
          "advantage": "-7/-7",
          "shieldLag": "7/10",
          "shieldStun": "4/4",
          "notes": "Autocancels on frame 53 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/link/LinkBAir.gif"
          ],
          "startup": "6/15",
          "active": "6—8/15—17",
          "total": "30",
          "endlag": "13",
          "landingLag": "6",
          "damage": "5.0/7.0",
          "advantage": "-3/-3",
          "shieldLag": "6/7",
          "shieldStun": "3/3",
          "hitboxes": "First/Second",
          "notes": "Autocancels on frame 29 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/link/LinkUAir.gif"
          ],
          "startup": "11",
          "active": "11—13(14—40)",
          "total": "59",
          "endlag": "19",
          "landingLag": "14",
          "damage": "15.0/13.0",
          "advantage": "-8/-9",
          "shieldLag": "13/11",
          "shieldStun": "6/5",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-10 and 43 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/link/LinkDAir.gif"
          ],
          "startup": "14",
          "active": "14—19(20—64)",
          "total": "79",
          "endlag": "15",
          "landingLag": "19",
          "damage": "18.0/15.0",
          "advantage": "Bounce: ** | Fast Fall: -13/-13",
          "shieldLag": "14/13",
          "shieldStun": "6/6",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-9 and 65 onward. Can hit same target once again after 30 frames due to pogo effect."
        },
        {
          "name": "Neutral B (Hero's Bow)",
          "section": "special",
          "startup": "16-52",
          "active": "16—61",
          "total": "44-80",
          "damage": "4.0—12.0",
          "advantage": "-21 to -15",
          "shieldLag": "5—9",
          "shieldStun": "2—4",
          "hitboxes": "Uncharged—Full Charge",
          "notes": "Reaches full charge on frame 52. Arrows travel for 46 frames after being fired. Arrows will stick into the ground for 3 seconds and can be picked up to either item-throw or fire two arrows. When firing two arrows at once, the second one generates three frames after the first."
        },
        {
          "name": "Side B (Boomerang)",
          "section": "special",
          "startup": "27",
          "active": "27—35(36—63/64—155)",
          "total": "45",
          "damage": "8.0/9.6",
          "advantage": "-7/-9",
          "shieldLag": "9/8",
          "shieldStun": "5/4",
          "hitboxes": "Clean/Late/Returning",
          "notes": "9 frame animation of catching boomerang if no other action is being performed."
        },
        {
          "name": "Up B (Spin Attack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/link/LinkSpinAttackG.gif"
          ],
          "startup": "7",
          "active": "7—8(9—13/14—23/24—39)",
          "total": "76",
          "endlag": "37",
          "damage": "(14.0%/11.2%)/(12.0%/9.6%)/(9.0%/7.2%)/(7.0%/5.6%)",
          "advantage": "-56",
          "shieldLag": "14",
          "shieldStun": "13",
          "hitboxes": "(Clean/Mid/Late/Latest with all of them split Blade/Tip)",
          "notes": "Can charge attack for an additional 60 frames. Startup is 4 from charge state. 7f startup is only the front hit. Damage drops from 14% down to 7% gradually as active frames progress."
        },
        {
          "name": "Up B, Air (Spin Attack, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/link/LinkSpinAttackA.gif"
          ],
          "startup": "8/16/22/31/47",
          "active": "8—9/12—13/16—17/19—20/22—23/26—27/31—32/38—39/47—49",
          "landingLag": "30",
          "damage": "4.0/2.0/4.0",
          "shieldLag": "5/4/11",
          "shieldStun": "5/3/5",
          "hitboxes": "First/multi/Final"
        },
        {
          "name": "Down B (Remote Bomb, Pull)",
          "section": "special",
          "total": "39"
        },
        {
          "name": "Down B (Remote Bomb, Detonate)",
          "section": "special",
          "startup": "12",
          "active": "12—13",
          "total": "39",
          "endlag": "26",
          "damage": "7.0",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Can self-damage"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/link/LinkGrab.gif"
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
            "hitboxes/link/LinkDashGrab.gif"
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
            "hitboxes/link/LinkPivotGrab.gif"
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
            "hitboxes/link/LinkPummel.gif"
          ],
          "startup": "1",
          "total": "18",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/link/LinkFThrow.gif"
          ],
          "startup": "12/13",
          "total": "37",
          "damage": "3.0/2.5"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/link/LinkBThrow.gif"
          ],
          "startup": "12/14",
          "total": "38",
          "damage": "3.0/2.5"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/link/LinkUThrow.gif"
          ],
          "startup": "26/28",
          "total": "49",
          "damage": "5.0/2.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/link/LinkDThrow.gif"
          ],
          "startup": "22/24",
          "total": "48",
          "damage": "3.0/3.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "21/26",
          "notes": "Intangible on frame 3-17"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "30",
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "49",
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
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "95",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "108",
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
            "ledgehangs/Link Ledgehang.gif",
            "ledgerolls/Link.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/link/linkGetupAttackU.gif",
            "hitboxes/link/linkGetupAttackD.gif",
            "hitboxes/link/linkTripAttack.gif",
            "hitboxes/link/linkLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/link",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
