// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "zelda",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaJab.gif"
          ],
          "startup": "4/7",
          "active": "4—5/7",
          "total": "24",
          "endlag": "17",
          "damage": "2.5/2.5",
          "advantage": "-13",
          "shieldLag": "5/5",
          "shieldStun": "-/4",
          "notes": "Transitions to rapid jab as early as frame 9."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaJabRapid.gif"
          ],
          "startup": "4/6/8/10...",
          "active": "4/6/8/10...",
          "damage": "0.4",
          "shieldLag": "4",
          "shieldStun": "2"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaJabRapidEnd.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "42",
          "endlag": "35",
          "damage": "3.0",
          "advantage": "-32",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaFTilt.gif",
            "hitboxes/zelda/ZeldaFTiltUp.gif",
            "hitboxes/zelda/ZeldaFTiltDown.gif"
          ],
          "startup": "12",
          "active": "12—13",
          "total": "36",
          "endlag": "23",
          "damage": "11.5/15.0",
          "advantage": "-13/-10",
          "shieldLag": "8/9",
          "shieldStun": "10/11"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaUTilt.gif"
          ],
          "startup": "7",
          "active": "7—19",
          "total": "29",
          "endlag": "10",
          "damage": "7.2",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaDTilt.gif"
          ],
          "startup": "5",
          "active": "5—11",
          "total": "21",
          "endlag": "10",
          "damage": "5.5",
          "advantage": "-10",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaDashAttack.gif"
          ],
          "startup": "6",
          "active": "6—7/8—12",
          "total": "35",
          "endlag": "23",
          "damage": "12.0/9.0/6.0",
          "advantage": "-18",
          "shieldLag": "11/6",
          "shieldStun": "11/6",
          "hitboxes": "Early inner/Early outer/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaFSmash.gif"
          ],
          "startup": "16/18/20/22/24",
          "active": "16/18/20/22/24",
          "total": "49",
          "endlag": "25",
          "damage": "1.0/13.0",
          "advantage": "-16",
          "shieldLag": "4/9",
          "shieldStun": "-/9",
          "notes": "Charge hold is frame 10"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaUSmash.gif"
          ],
          "startup": "9/13/17/21/25/29/34",
          "active": "9—23/25—32/34",
          "total": "63",
          "endlag": "29",
          "damage": "2.0/0.8/5.0",
          "advantage": "-25",
          "shieldLag": "4/4/12",
          "shieldStun": "3/2/4",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaDSmash.gif"
          ],
          "startup": "5/13",
          "active": "5—6/13—14",
          "total": "37",
          "endlag": "23",
          "damage": "12.0/10.0",
          "advantage": "-24/-17",
          "shieldLag": "9/8",
          "shieldStun": "8/7",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaNAir.gif"
          ],
          "startup": "6/10/14/18/22",
          "active": "6—7/10—11/14—15/18—19/22—23",
          "total": "50",
          "endlag": "27",
          "landingLag": "12",
          "damage": "2.5/1.5/5.0",
          "advantage": "-10/-9",
          "shieldLag": "5/12",
          "shieldStun": "2/3",
          "hitboxes": "Multi Front/Multi Back/Final",
          "notes": "Autocancels on frame 1-3 and 38 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaFAir.gif"
          ],
          "startup": "6",
          "active": "6/7—10",
          "total": "49",
          "endlag": "39",
          "landingLag": "15",
          "damage": "20.0/4.0",
          "advantage": "-8/-12",
          "shieldLag": "16/5",
          "shieldStun": "7/3",
          "hitboxes": "Sweet Spot/Late",
          "notes": "Autocancels on frame 1-2 and 43 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaBAir.gif"
          ],
          "startup": "6",
          "active": "6/7—10",
          "total": "49",
          "endlag": "39",
          "landingLag": "16",
          "damage": "20.0/4.0",
          "advantage": "-8/-12",
          "shieldLag": "16/5",
          "shieldStun": "7/3",
          "hitboxes": "Sweet Spot/Late",
          "notes": "Autocancels on frame 1-2 and 45 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaUAir.gif"
          ],
          "startup": "14",
          "active": "14—16/17—19",
          "total": "54",
          "endlag": "35",
          "landingLag": "12",
          "damage": "17.0/12.0",
          "advantage": "-6/-8",
          "shieldLag": "11",
          "shieldStun": "6",
          "notes": "Autocancels on frame 1-3 and 54 onward. Late hit added in 7.0.0 that does 12.0%."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaDAir.gif"
          ],
          "startup": "14",
          "active": "14/15—24",
          "total": "44",
          "endlag": "20",
          "landingLag": "12",
          "damage": "16.0/5.0/4.0",
          "advantage": "-6/-9",
          "shieldLag": "10/5",
          "shieldStun": "6/3",
          "hitboxes": "Early/Late Close/Late Far",
          "notes": "Autocancels on frame 1-3 and 40 onward"
        },
        {
          "name": "Neutral B (Nayru's Love)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaNayrusLove.gif"
          ],
          "startup": "11...",
          "active": "11-22 (Rehit Rate : 4) / 26",
          "total": "57",
          "endlag": "31",
          "damage": "2.0/1.0 (multi), 5.0/4.0 (final)",
          "advantage": "-25",
          "shieldLag": "0/0",
          "shieldStun": "3/6",
          "notes": "Intangible on frame 4-13. Reflects on 4-40."
        },
        {
          "name": "Side B (Din's Fire)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaDinsFireMin.gif",
            "hitboxes/zelda/ZeldaDinsFireMax.gif"
          ],
          "startup": "44—70",
          "active": "44—49/.../70—75",
          "total": "69—97",
          "endlag": "20-(22)",
          "damage": "3.5—14.0",
          "advantage": "-18 to -10",
          "shieldLag": "5—10",
          "shieldStun": "2—5",
          "notes": "On release/max charge startup is frame 14. Reaches max charge on frame 56. Total frames for release animation is 39 frames. Bug occurs which causes Zelda to start her release animation 1/2 frames after the explosion startup if she holds special up to frames 57/58, giving 22 frames of endlag instead of 20. Interaction with stage elements can detonate as early as frame 25. Springs/Hitstun can cancel the move and allow her to send a second projectile which can explode as early as frame 32."
        },
        {
          "name": "Up B (Farore's Wind)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaFaroresWindG.gif",
            "hitboxes/zelda/ZeldaFaroresWindA.gif"
          ],
          "startup": "6/35",
          "active": "6—7/35—36",
          "total": "75",
          "endlag": "39",
          "landingLag": "30",
          "damage": "6.0/10.0/7.0/12.0/8.0",
          "advantage": "-29 (ground) // -19 (air)",
          "shieldLag": "6/13",
          "shieldStun": "6/11",
          "hitboxes": "Hit 1/Inner Grounded Hit 2/Outer Grounded Hit 2/Inner Aerial Hit 2/Outer Aerial Hit 2",
          "notes": "Total frames is when landing on the ground. Intangible on frame 17-34. The move will normally be -29 as actually ending in the air is quite difficult/situational."
        },
        {
          "name": "Down B (Phantom Slash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zelda/PhantomKick.gif",
            "hitboxes/zelda/PhantomPunch.gif",
            "hitboxes/zelda/PhantomSwing1.gif",
            "hitboxes/zelda/PhantomSwing2.gif",
            "hitboxes/zelda/PhantomSwing2Shield.gif",
            "hitboxes/zelda/PhantomSwing3.gif"
          ],
          "startup": "26/32/38/46/59-127",
          "total": "66/39",
          "damage": "5.9—17.7",
          "advantage": "-19 to -15",
          "shieldLag": "6—10",
          "shieldStun": "3—5",
          "notes": "Startup values correspond to the first active frame possible for different stages of construction. Final charge enters standby mode frames 68-120 and begins automatic launch on frame 121. Each stage of construction becomes available for manual launch in order 15-19 (Stage 1), 20-27 (Stage 2), 28-37 (Stage 3), 38-44 (Stage 4 shieldless), 45-49, (Stage 4), 50-120 (Stage 5). Manual release lag is 39 frames. Once full charge is reached, Zelda can act as early as frame 67. Any attack/special input initiated on frame 66 results in a simultaneous launch of phantom along with said input."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "39",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaDashGrab.gif"
          ],
          "startup": "13",
          "active": "13—14",
          "total": "47",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaPivotGrab.gif"
          ],
          "startup": "14",
          "active": "14—15",
          "total": "42",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaPummel.gif"
          ],
          "startup": "2",
          "total": "20",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaFThrow.gif"
          ],
          "startup": "30",
          "total": "49",
          "damage": "10.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaBThrow.gif"
          ],
          "startup": "27",
          "total": "49",
          "damage": "12.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaUThrow.gif"
          ],
          "startup": "30",
          "total": "49",
          "damage": "11.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zelda/ZeldaDThrow.gif"
          ],
          "startup": "25/30/35/39/42",
          "total": "61",
          "damage": "1.5/2.0"
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
          "total": "56",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "77",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "114",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "129",
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
            "ledgehangs/Zelda Ledgehang.gif",
            "ledgerolls/Zelda.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/Zelda/ZeldaGetupAttackU.gif",
            "hitboxes/Zelda/ZeldaGetupAttackD.gif",
            "hitboxes/Zelda/ZeldaTripAttack.gif",
            "hitboxes/Zelda/ZeldaLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/zelda",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
