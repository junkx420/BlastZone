/**
 * Frame-Daten von ultimateframedata.com.
 *
 * Erzeugt von `scripts/build-frame-data.mjs` – die Dateien unter `src/data/frames/`
 * sind generiert und werden nicht von Hand bearbeitet. Wer einen Wert ändern will,
 * ändert das Skript oder die Quelle.
 *
 * **Warum alles Zeichenketten sind und keine Zahlen:** Ultimate Frame Data führt
 * für viele Moves mehrere Werte nebeneinander – `16/17—20/21` für drei Hitboxen,
 * `-12/-12/-13` für den Schildvorteil je Hitbox, `2—3` für aktive Frames. Ein
 * `number` könnte davon nur einen einzigen Wert halten und würde den Rest
 * stillschweigend wegwerfen. Die Anzeige zeigt deshalb genau das, was die Quelle
 * führt; welche Spalte wozu gehört, steht in `hitboxes`.
 */

/** Abschnitt der UFD-Seite. Die Beschriftung für die Anzeige liegt in der UI. */
export type FrameSection = 'ground' | 'aerial' | 'special' | 'throw' | 'dodge' | 'misc';

export interface FrameMove {
  /** Zeilenname wie bei UFD, z. B. „Forward Air" oder „Neutral B (Fireball)". */
  name: string;
  section: FrameSection;
  /** Erster Frame mit aktiver Hitbox. */
  startup?: string;
  /** Frames mit aktiver Hitbox, z. B. `2—3`. */
  active?: string;
  /** Gesamtdauer der Animation. */
  total?: string;
  /** Frames nach der letzten Hitbox. Bei Specials führt UFD oft keinen Wert. */
  endlag?: string;
  /** Nur bei Luftangriffen. */
  landingLag?: string;
  /** Basisschaden ohne 1v1-Faktor – anders als `dmg` in den Combo-Routen. */
  damage?: string;
  /** Vorteil am Schild. Negativ heißt: der Gegner kann zuerst handeln. */
  advantage?: string;
  shieldLag?: string;
  shieldStun?: string;
  /** Benennt die Spalten bei Mehrfachwerten, z. B. „Early/Clean/Late". */
  hitboxes?: string;
  /** Anmerkung von UFD, etwa Auto-Cancel-Fenster. */
  notes?: string;
}

/**
 * Ein Satz Moves. Die meisten Fighter haben genau einen; Pokémon-Trainer hat drei
 * (Squirtle, Ivysaur, Glurak) und Pyra/Mythra zwei, weil UFD sie getrennt führt.
 */
export interface FrameSet {
  /** Nur gesetzt, wenn ein Fighter mehrere Sätze hat. */
  label?: string;
  moves: FrameMove[];
}

export interface FighterFrames {
  slug: string;
  sets: FrameSet[];
  source: {
    /** Seite bei UFD, aus der die Werte stammen. */
    url: string;
    /** Datum des Abrufs, ISO-kurz. Frame-Daten ändern sich mit Spiel-Patches. */
    fetched: string;
  };
}
