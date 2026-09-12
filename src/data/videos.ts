/**
 * Guide-Videos pro Fighter.
 *
 * Regeln wie bei den Combo-Quellen: Jede `id` stammt aus einem echten Suchtreffer,
 * nichts wird geraten – eine erfundene ID ergibt einen toten Player oder, schlimmer,
 * ein fremdes Video. `creator` und `title` stehen so da, wie der Treffer sie nennt,
 * damit sich jeder Eintrag nachprüfen lässt.
 *
 * Eingebettet wird erst beim Klick (siehe components/videoEmbed.ts): Die Seite lädt
 * dadurch weiterhin ohne einen einzigen Request an Dritte.
 */

export interface FighterVideo {
  /** YouTube-Video-ID, elf Zeichen. */
  id: string;
  title: string;
  creator: string;
}

export const VIDEOS: Record<string, FighterVideo> = {
  kazuya: { id: 'UMSXxFZNps0', title: 'How to Play Kazuya in Smash Ultimate (LIKE RIDDLES!)', creator: 'Riddles' },
  steve: { id: 'fKQ0sjvDQN0', title: 'Steve’s Beginner Guide', creator: 'ESAM' },
  sonic: { id: 'xrrfB-Sh9Y8', title: 'Smash Ultimate: Art of Sonic', creator: 'Izaw' },
  corrin: { id: 'M172F_U6DQk', title: 'Smash Ultimate: Art of Corrin', creator: 'Izaw' },
  sephiroth: { id: 'dndykqb1xVA', title: 'Smash Ultimate: How to Sephiroth', creator: 'Izaw' },
  byleth: { id: 'x36t8ddVixI', title: 'Smash Ultimate: How to Byleth', creator: 'Izaw' },
  'mr-game-and-watch': { id: 'KKdpNmT4v40', title: 'Smash Ultimate: Art of Mr. Game & Watch', creator: 'Izaw' },
  peach: { id: 'oUrertW84UI', title: 'How to Play PEACH in Smash Ultimate: The Basics!', creator: 'Beefy Smash Doods' },
  // Daisy spielt sich identisch zu Peach – dasselbe Video, wie schon bei den Combo-Routen über echoGuide.
  daisy: { id: 'oUrertW84UI', title: 'How to Play PEACH in Smash Ultimate: The Basics!', creator: 'Beefy Smash Doods' },
  snake: { id: 'MOSi3kG6H60', title: 'Smash Ultimate: Art of Snake', creator: 'Izaw' },
  bowser: { id: 'J7whNfvG5QE', title: 'Smash Ultimate: Art of Bowser', creator: 'Izaw' },
  kirby: { id: 'ZLNX2uLYX7M', title: 'Smash Ultimate: Art of Kirby', creator: 'Izaw' },
  incineroar: { id: '8msImwrdEnU', title: 'Smash Ultimate: Art of Incineroar', creator: 'Izaw' },
  'pyra-mythra': { id: 'z-USn9YQg7E', title: 'Smash Ultimate: How to Pyra & Mythra', creator: 'Izaw' },
  // Izaw behandelt nur Ivysaur – für den Trainer der beste verfügbare Treffer, aber eben nur ein Drittel.
  'pokemon-trainer': { id: 'ohYVPYbXP2E', title: 'Smash Ultimate: Art of Ivysaur', creator: 'Izaw' },
  mario: { id: 'vKBM9B8CEBw', title: 'Smash Ultimate: Art of Mario', creator: 'Izaw' },
  rob: { id: 'vPn1AcdmCJg', title: 'Smash Ultimate: Art of R.O.B.', creator: 'Izaw' },
  roy: { id: 'FPYpz1haD44', title: 'Smash Ultimate: Art of Roy', creator: 'Izaw' },
  ike: { id: 'c_p-aiD1gTw', title: 'Smash Ultimate: Art of Ike', creator: 'Izaw' },
  hero: { id: 'eL0knWidMgs', title: 'Smash Ultimate: Art of Hero', creator: 'Izaw' },
  wolf: { id: 'Km7MSZU4gTg', title: 'Smash Ultimate: Art of Wolf', creator: 'Izaw' },
  fox: { id: 'xVbrtGvncd8', title: 'Smash Ultimate: Art of Fox', creator: 'Izaw' },
  falco: { id: 'YsLJssA01b4', title: 'Smash Ultimate: Art of Falco', creator: 'Izaw' },
  cloud: { id: 'dc3w_8r0seI', title: 'Smash Ultimate: Art of Cloud', creator: 'Izaw' },
  link: { id: 'VlKkv5HSYVA', title: 'Smash Ultimate: Art of Link', creator: 'Izaw' },
  'young-link': { id: 'WSep92_Z4CU', title: 'Smash Ultimate: Art of Young Link', creator: 'Izaw' },
  zelda: { id: 'Ilb1Q_Cso8E', title: 'Smash Ultimate: Art of Zelda', creator: 'Izaw' },
  inkling: { id: 'rZjPU3FtRQU', title: 'Smash Ultimate: Art of Inkling', creator: 'Izaw' },
  pikachu: { id: '8TEYez3_OFk', title: 'Smash Ultimate: Art of Pikachu', creator: 'Izaw' },
  palutena: { id: '6w7N3Pn8wNU', title: 'Smash Ultimate: Art of Palutena', creator: 'Izaw' },
  'donkey-kong': { id: 'Rl2UEKlIQ2k', title: 'Smash Ultimate: Art of Donkey Kong', creator: 'Izaw' },
  'captain-falcon': { id: 'xzE8m7gAs7E', title: 'Smash Ultimate: Art of Falcon', creator: 'Izaw' },
  joker: { id: 'OcaLqUH3Nq4', title: 'Smash Ultimate: How to Joker', creator: 'Izaw' },
  greninja: { id: '_9LR4LzdAgE', title: 'Smash Ultimate: Art of Greninja', creator: 'Izaw' },
  'mega-man': { id: 'KHEm8OgGqX0', title: 'Smash Ultimate: Art of Mega Man', creator: 'Izaw' },
  samus: { id: 'nW9AedeMeFw', title: 'Smash Ultimate: Art of Samus', creator: 'Izaw' },
  'zero-suit-samus': { id: 'xs9dqqKJXio', title: 'Smash Ultimate: Art of Zero Suit Samus', creator: 'Izaw' },
  yoshi: { id: 'zbel6sAHzDM', title: 'Smash Ultimate: Art of Yoshi', creator: 'Izaw' },
  luigi: { id: 'E7e7fYu2pdM', title: 'Smash Ultimate: Art of Luigi', creator: 'Izaw' },
  ganondorf: { id: '6VslXPCG0gs', title: 'Fatality’s Ultimate Ganondorf Guide', creator: 'Fatality' },
  'diddy-kong': { id: '3oAbjiR-Bj0', title: 'Tweek Diddy Kong Guide', creator: 'Tweek' },
  // Ein Video für beide: Izaw behandelt Marth und Lucina gemeinsam.
  marth: { id: 'WBTHnHqh3qk', title: 'Smash Ultimate: Art of Marth & Lucina', creator: 'Izaw' },
  lucina: { id: 'WBTHnHqh3qk', title: 'Smash Ultimate: Art of Marth & Lucina', creator: 'Izaw' },
};

export const videoFor = (slug: string): FighterVideo | undefined => VIDEOS[slug];

export const VIDEO_COUNT = (): number => Object.keys(VIDEOS).length;
