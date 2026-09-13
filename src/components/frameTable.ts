import type { FighterFrames, FrameMove, FrameSection } from '../data/frame-types';
import { loadFrames } from '../data/frames-index';
import { html, mount, qs, qsa, raw, type Markup } from '../lib/dom';

/**
 * Frame-Daten eines Fighters als Tabelle, nach Kategorie aufgeteilt.
 *
 * Zwei Dinge sind hier bewusst so gebaut:
 *
 * **Eigene Tab-Leiste, nicht die der Combo-Routen.** Die dortige Leiste schreibt
 * `?routen=` in die Adresse und startet die Combo-Wiedergabe – beides ergibt für
 * eine Frame-Tabelle keinen Sinn. Die Stile (`.tabs`, `.tab`, `.tabpanel`) teilen
 * sich beide, das Verhalten nicht.
 *
 * **Nachladen erst beim Heranscrollen.** Die 86 Datensätze sind zusammen 1,3 MB.
 * Wer eine Fighter-Seite nur wegen der Combos öffnet, soll dafür nichts laden.
 * Ein IntersectionObserver holt den Datensatz, sobald der Abschnitt in die Nähe
 * des Sichtfelds kommt – ohne dass jemand etwas anklicken muss.
 */

const LABELS: Record<FrameSection, string> = {
  ground: 'Boden',
  aerial: 'Luft',
  special: 'Spezial',
  throw: 'Würfe',
  dodge: 'Ausweichen',
  misc: 'Sonstiges',
};

/** Reihenfolge der Tabs – dieselbe wie auf der Quellseite. */
const REIHENFOLGE: FrameSection[] = ['ground', 'aerial', 'special', 'throw', 'dodge', 'misc'];

const zelle = (wert: string | undefined): Markup => html`<td>${wert ?? raw('<span class="frame__leer">–</span>')}</td>`;

function zeile(move: FrameMove): Markup {
  return html`<tr>
    <th scope="row">
      <span class="frame__name">${move.name}</span>
      ${move.hitboxes ? html`<span class="frame__spalten">${move.hitboxes}</span>` : ''}
      ${move.notes ? html`<span class="frame__notiz">${move.notes}</span>` : ''}
      ${move.hitboxImages?.length
        ? html`<button class="frame__hitbox" type="button" data-hitbox="${move.hitboxImages.join('|')}" data-hitbox-move="${move.name}">
            Hitbox ansehen
          </button>`
        : ''}
    </th>
    ${zelle(move.startup)} ${zelle(move.active)} ${zelle(move.total)} ${zelle(move.endlag)} ${zelle(move.landingLag)}
    ${zelle(move.damage)} ${zelle(move.advantage)}
  </tr>`;
}

function tabelle(moves: FrameMove[], titel: string): Markup {
  return html`<div class="frame__scroll">
    <table class="frame">
      <caption class="vh">${titel}</caption>
      <thead>
        <tr>
          <th scope="col">Move</th>
          <th scope="col" title="Erster Frame mit aktiver Hitbox">Start</th>
          <th scope="col" title="Frames mit aktiver Hitbox">Aktiv</th>
          <th scope="col" title="Gesamtdauer der Animation">Gesamt</th>
          <th scope="col" title="Frames nach der letzten Hitbox">Endlag</th>
          <th scope="col" title="Nur bei Luftangriffen">Landing</th>
          <th scope="col" title="Basisschaden ohne 1v1-Faktor">Schaden</th>
          <th scope="col" title="Vorteil am Schild; negativ heißt bestrafbar">Schild</th>
        </tr>
      </thead>
      <tbody>
        ${moves.map(zeile)}
      </tbody>
    </table>
  </div>`;
}

/** Baut die Tabs samt Tabellen für einen geladenen Datensatz. */
function inhalt(daten: FighterFrames): Markup {
  // Mehrere Sätze (Pokémon-Trainer, Pyra/Mythra) werden untereinander gezeigt,
  // jeder mit eigener Überschrift – Tabs über zwei Achsen wären unübersichtlich.
  return html`${daten.sets.map((satz) => {
    const vorhanden = REIHENFOLGE.filter((s) => satz.moves.some((m) => m.section === s));
    const id = satz.label ? satz.label.toLowerCase().replace(/[^a-z]/g, '') : 'alle';
    return html`<div class="fframes__satz">
      ${satz.label ? html`<h3 class="fframes__label">${satz.label}</h3>` : ''}
      <div class="tabs" role="tablist" aria-label="Move-Kategorie${satz.label ? `, ${satz.label}` : ''}">
        ${vorhanden.map(
          (s, i) => html`<button class="tab" type="button" role="tab" id="ftab-${id}-${s}" aria-controls="fpanel-${id}-${s}"
            aria-selected="${String(i === 0)}" tabindex="${i === 0 ? '0' : '-1'}">
            ${LABELS[s]}<span class="tab__count">${satz.moves.filter((m) => m.section === s).length}</span>
          </button>`,
        )}
        <span class="tabs__ink" aria-hidden="true"></span>
      </div>
      ${vorhanden.map(
        (s, i) => html`<div class="tabpanel" role="tabpanel" id="fpanel-${id}-${s}" aria-labelledby="ftab-${id}-${s}" tabindex="0" ${i === 0 ? '' : raw('hidden')}>
          ${tabelle(
            satz.moves.filter((m) => m.section === s),
            `${LABELS[s]}${satz.label ? ` – ${satz.label}` : ''}`,
          )}
        </div>`,
      )}
    </div>`;
  })}`;
}

/** Der Abschnitt, wie er zunächst im Markup steht – noch ohne Daten. */
export function framesSection(fighterName: string): Markup {
  return html`<section class="container fframes" id="frames" aria-labelledby="frames-title" data-frames>
    <div class="section-head">
      <h2 id="frames-title" data-reveal="wipe">Frame Data</h2>
      <p>
        Startup, aktive Frames, Endlag und Schildvorteil für jeden Move von ${fighterName}. Mehrere Werte durch
        Schrägstrich getrennt gehören zu verschiedenen Hitboxen; die Spaltennamen stehen am Move.
      </p>
    </div>
    <div class="fframes__body" data-frames-body>
      <p class="fframes__laden" role="status">Frame-Daten werden geladen …</p>
    </div>
  </section>`;
}

/** Verdrahtet Nachladen und Tabs. Gibt die Aufräumfunktion zurück. */
export function wireFrames(root: HTMLElement, slug: string): () => void {
  const host = qs<HTMLElement>('[data-frames]', root);
  const body = host && qs<HTMLElement>('[data-frames-body]', host);
  if (!host || !body) return () => {};

  let abgebrochen = false;
  const aufraeumen: Array<() => void> = [];

  const tabsVerdrahten = (): void => {
    // Bewusst auf diesen Abschnitt eingeschränkt: Die Combo-Routen haben eine
    // eigene Leiste auf derselben Seite, die hier nichts zu suchen hat.
    for (const leiste of qsa<HTMLElement>('.tabs', host)) {
      const tabs = qsa<HTMLButtonElement>('[role="tab"]', leiste);
      const panels = tabs
        .map((t) => qs<HTMLElement>(`#${CSS.escape(t.getAttribute('aria-controls') ?? '')}`, host))
        .filter((p): p is HTMLElement => p !== null);
      const ink = qs<HTMLElement>('.tabs__ink', leiste);

      const waehlen = (tab: HTMLButtonElement, fokus = false): void => {
        tabs.forEach((t) => {
          const an = t === tab;
          t.setAttribute('aria-selected', String(an));
          t.tabIndex = an ? 0 : -1;
        });
        panels.forEach((p) => (p.hidden = p.id !== tab.getAttribute('aria-controls')));
        if (ink) {
          ink.style.transform = `translateX(${tab.offsetLeft}px)`;
          ink.style.width = `${tab.offsetWidth}px`;
        }
        if (fokus) tab.focus();
      };

      tabs.forEach((tab, i) => {
        const klick = (): void => waehlen(tab);
        const taste = (e: KeyboardEvent): void => {
          const ziel =
            e.key === 'ArrowRight' ? (i + 1) % tabs.length
            : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length
            : e.key === 'Home' ? 0
            : e.key === 'End' ? tabs.length - 1
            : -1;
          const naechster = tabs[ziel];
          if (!naechster) return;
          e.preventDefault();
          waehlen(naechster, true);
        };
        tab.addEventListener('click', klick);
        tab.addEventListener('keydown', taste);
        aufraeumen.push(() => {
          tab.removeEventListener('click', klick);
          tab.removeEventListener('keydown', taste);
        });
      });

      const erster = tabs[0];
      if (erster) waehlen(erster);
    }
  };

  const laden = async (): Promise<void> => {
    const daten = await loadFrames(slug);
    if (abgebrochen) return;
    if (!daten) {
      mount(body, html`<p class="fframes__laden">Für diesen Fighter liegen keine Frame-Daten vor.</p>`);
      return;
    }
    mount(
      body,
      html`${inhalt(daten)}
        <p class="fframes__quelle">
          Quelle: <a href="${daten.source.url}" target="_blank" rel="noopener">Ultimate Frame Data</a>, abgerufen am
          ${daten.source.fetched.split('-').reverse().join('.')}. Frame-Daten ändern sich mit Spiel-Patches.
        </p>`,
    );
    tabsVerdrahten();
  };

  /*
   * Klick auf „Hitbox ansehen" – erst hier entsteht überhaupt eine Anfrage an
   * ultimateframedata.com. Delegiert am Abschnitt, weil die Tabellen zum
   * Zeitpunkt des Verdrahtens noch gar nicht im DOM stehen; ein Listener je
   * Knopf müsste nach jedem Nachladen erneut gesetzt werden.
   *
   * Der Knopf wird durch das Bild ersetzt: einmal geholt, bleibt es stehen.
   */
  const hitboxKlick = (e: Event): void => {
    const knopf = (e.target as Element | null)?.closest<HTMLButtonElement>('[data-hitbox]');
    if (!knopf || !host.contains(knopf)) return;
    const pfade = (knopf.dataset.hitbox ?? '').split('|').filter(Boolean);
    if (!pfade.length) return;
    const name = knopf.dataset.hitboxMove ?? 'Move';

    const figur = document.createElement('figure');
    figur.className = 'frame__figur';
    for (const pfad of pfade) {
      const bild = document.createElement('img');
      bild.src = `https://ultimateframedata.com/${pfad}`;
      bild.alt = `Hitbox-Darstellung von ${name}`;
      bild.loading = 'lazy';
      figur.append(bild);
    }
    const beschriftung = document.createElement('figcaption');
    beschriftung.textContent = 'Darstellung von ultimateframedata.com';
    figur.append(beschriftung);
    knopf.replaceWith(figur);
  };
  host.addEventListener('click', hitboxKlick);
  aufraeumen.push(() => host.removeEventListener('click', hitboxKlick));

  // 400 px Vorlauf: Die Daten stehen bereit, bevor der Abschnitt sichtbar wird.
  const beobachter = new IntersectionObserver(
    (eintraege) => {
      if (!eintraege.some((e) => e.isIntersecting)) return;
      beobachter.disconnect();
      void laden();
    },
    { rootMargin: '400px' },
  );
  beobachter.observe(host);

  return () => {
    abgebrochen = true;
    beobachter.disconnect();
    aufraeumen.forEach((fn) => fn());
  };
}
