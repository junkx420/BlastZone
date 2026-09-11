import { bindComboCards, comboCard, meter } from '../components/comboPlayer';
import { ICONS } from '../components/icons';
import { inputKeys } from '../components/notation';
import { tierBadge, tierGroup } from '../components/tierBadge';
import { FIGHTER_BY_SLUG } from '../data/fighters';
import { GUIDE_BY_SLUG } from '../data/guides';
import { TIER_BY_SLUG, TIER_ORDER } from '../data/tiers';
import { accentVars, heatColor } from '../lib/color';
import { html, qs, qsa, type Markup } from '../lib/dom';
import { reveals, scope } from '../lib/motion';
import type { PageView } from './types';

const RAMP: Array<[number, string, string]> = [
  [0, '--dmg-0', '#f5f6f8'],
  [35, '--dmg-40', '#ffe66b'],
  [70, '--dmg-80', '#ffb23a'],
  [105, '--dmg-120', '#ff6a2b'],
  [145, '--dmg-160', '#ec2a3b'],
  [190, '--dmg-200', '#b0122f'],
];

const GROUND: Array<[string, string, string]> = [
  ['--void-950', '#06070a', 'Seitengrund'],
  ['--void-900', '#0b0d12', 'Fläche 1'],
  ['--void-850', '#10131a', 'Fläche 2'],
  ['--void-800', '#161a23', 'Fläche 3'],
  ['--void-700', '#20252f', 'Fläche 4'],
  ['--mist-400', '#858b99', 'Text dezent'],
  ['--mist-300', '#aab0bd', 'Text sekundär'],
  ['--mist-100', '#eceef2', 'Text'],
];

const WIDTHS: Array<[string, string, string]> = [
  ['62 %', '--stretch-compressed', 'Dichte Labels'],
  ['74 %', '--stretch-condensed', 'Fighter-Namen, Headlines'],
  ['88 %', '--stretch-semi', 'Interface'],
  ['100 %', '--stretch-normal', 'Fließtext'],
  ['118 %', '--stretch-wide', 'Werte'],
  ['125 %', '--stretch-extended', 'Prozent, Ränge, Tiers'],
];

const SCALE: Array<[string, string]> = [
  ['--fs-900', 'Fighter-Name'],
  ['--fs-800', 'Seitentitel'],
  ['--fs-700', 'Abschnitt'],
  ['--fs-600', 'Unterabschnitt'],
  ['--fs-500', 'Kartentitel'],
  ['--fs-400', 'Einleitung'],
  ['--fs-300', 'Fließtext'],
  ['--fs-200', 'Interface'],
  ['--fs-100', 'Metadaten'],
];

const MOTION: Array<[string, string, string]> = [
  ['--ease-out', 'cubic-bezier(.16, 1, .3, 1)', 'Ankommen: Reveals, Panels, Tabs'],
  ['--ease-in', 'cubic-bezier(.7, 0, .84, 0)', 'Verlassen: alte Seite beim Wechsel'],
  ['--ease-spring', 'linear() Feder', 'Druck-Feedback auf Tiles und Buttons'],
  ['--t-fast', '160 ms', 'Hover, Farbwechsel'],
  ['--t-base', '260 ms', 'Zustandswechsel'],
  ['--t-slow', '520 ms', 'Bildbewegung, Shine auf Buttons'],
  ['--t-scene', '720 ms', 'Seitenübergänge'],
];

const ACCENT_SAMPLES = ['mario', 'link', 'pikachu', 'kazuya', 'steve', 'sonic'];

function block(title: string, body: Markup, wide = false): Markup {
  return html`<div class="sys__block${wide ? ' sys__block--wide' : ''}" data-reveal><h3>${title}</h3>${body}</div>`;
}

export function systemPage(): PageView {
  const luigi = FIGHTER_BY_SLUG.get('luigi');
  const demo = GUIDE_BY_SLUG.get('luigi')?.combos.find((c) => c.kills);
  const demoAccent = luigi ? accentVars(luigi.colors) : '';

  return {
    title: 'Design-System – Blastzone',
    markup: html`<div class="page system">
      <header class="container page-head">
        <h1 data-reveal="wipe">Design-System</h1>
        <p>
          Tokens, Typografie und Komponenten von Blastzone. Das Leitmotiv ist die Schadensanzeige aus dem Spiel: Ihre Skala
          von Weiß bis Rot färbt Prozentwerte, Tier-Stufen und die Headline der Startseite.
        </p>
      </header>

      <section class="container sys" aria-labelledby="sys-color">
        <h2 class="sys__title" id="sys-color">Farbe</h2>
        <div class="sys__grid">
          ${block(
            'Schadensskala',
            html`<p>Die Werte folgen der Prozentanzeige: Weiß bei 0 %, Rot kurz vor dem KO.</p>
              <ol class="ramp" role="list">
                ${RAMP.map(([pct, token, hex]) => html`<li class="ramp__stop" style="--c:var(${token})"><span class="ramp__pct">ab ${pct} %</span><code>${token}</code><code>${hex}</code></li>`)}
              </ol>
              <div class="heat-demo">
                <div class="heat-demo__control">
                  <label class="control-label" for="heat-range">Schaden ausprobieren: <output data-heat-out for="heat-range">87 %</output></label>
                  <input id="heat-range" class="range" type="range" min="0" max="220" step="1" value="87" data-heat-range />
                </div>
                <div data-heat-meter>${meter(87, true)}</div>
              </div>`,
            true,
          )}
          ${block(
            'Tier-Hitze',
            html`<p>S+ glüht rot, E ist kalt. Dieselbe Skala, auf Ränge übertragen.</p>
              <div class="sys__row">${TIER_ORDER.map((t) => html`<span class="chip is-on" data-tier="${tierGroup(t)}">${t}</span>`)}</div>
              <div class="sys__row">${tierBadge(TIER_BY_SLUG.get('steve'))} ${tierBadge(TIER_BY_SLUG.get('luigi'), 'lg')}</div>`,
          )}
          ${block(
            'Fighter-Akzent',
            html`<p>Jede Fighter-Seite setzt --accent und --accent-2 aus den Franchise-Farben. Die Textvariante wird automatisch auf mindestens 4,5:1 Kontrast angehoben.</p>
              <ul class="accents" role="list">
                ${ACCENT_SAMPLES.map((slug) => {
                  const f = FIGHTER_BY_SLUG.get(slug);
                  return f
                    ? html`<li class="accent-sample" style="${accentVars(f.colors)}"><span class="accent-sample__bar"></span><span class="accent-sample__name">${f.name}</span></li>`
                    : '';
                })}
              </ul>`,
          )}
          ${block(
            'Untergrund und Text',
            html`<ul class="swatches" role="list">
              ${GROUND.map(([token, hex, use]) => html`<li class="swatch" style="--c:var(${token})"><span class="swatch__chip"></span><strong>${use}</strong><code>${token}</code><code>${hex}</code></li>`)}
            </ul>`,
            true,
          )}
        </div>
      </section>

      <section class="container sys" aria-labelledby="sys-type">
        <h2 class="sys__title" id="sys-type">Typografie</h2>
        <div class="sys__grid">
          ${block(
            'Archivo mit Breitenachse',
            html`<p>Eine Familie, deren Breite die Rolle bestimmt: komprimiert für Namen, extended für Zahlen, normal für Text. Auf Tiles wird die Breite beim Hover animiert.</p>
              <ul class="widths" role="list">
                ${WIDTHS.map(([label, token, use]) => html`<li class="widths__item"><span class="widths__sample" style="font-stretch:var(${token})">Blastzone</span><span class="widths__label">${label}, ${use}</span></li>`)}
              </ul>`,
            true,
          )}
          ${block(
            'Größenskala',
            html`<ul class="scale" role="list">
              ${SCALE.map(([token, use]) => html`<li class="scale__item"><code>${token}</code><span class="scale__sample" style="font-size:var(${token})">${use}</span></li>`)}
            </ul>`,
            true,
          )}
        </div>
      </section>

      <section class="container sys" aria-labelledby="sys-components">
        <h2 class="sys__title" id="sys-components">Komponenten</h2>
        <div class="sys__grid">
          ${block(
            'Buttons',
            html`<div class="sys__row" style="${demoAccent}">
              <button class="btn btn--primary" type="button">Fighter finden</button>
              <button class="btn btn--ghost" type="button">Tier-Liste ansehen</button>
              <button class="btn btn--icon" type="button" aria-label="Replay pausieren">${ICONS.pause}</button>
            </div>`,
          )}
          ${block(
            'Filter-Chips',
            html`<div class="sys__row">
              <button class="chip" type="button" aria-pressed="false" data-demo-chip>${ICONS.combo}Mit Combo-Routen</button>
              <button class="chip" type="button" data-tier="s-plus" aria-pressed="true" data-demo-chip>S+</button>
              <button class="chip" type="button" data-tier="b" aria-pressed="false" data-demo-chip>B+</button>
            </div>`,
          )}
          ${block(
            'Input-Notation',
            html`<ul class="sys__keys" role="list">
              ${['sh nair', 'grab dthrow', 'fh fair', 'usmash', '623b'].map((k) => html`<li><code>${k}</code>${inputKeys(k)}</li>`)}
            </ul>`,
            true,
          )}
          ${demo ? block('Combo-Player', html`<div style="${demoAccent}">${comboCard(demo)}</div>`, true) : ''}
        </div>
      </section>

      <section class="container sys" aria-labelledby="sys-motion">
        <h2 class="sys__title" id="sys-motion">Bewegung</h2>
        <div class="table-wrap">
          <table class="sys-table">
            <thead><tr><th scope="col">Token</th><th scope="col">Wert</th><th scope="col">Einsatz</th></tr></thead>
            <tbody>${MOTION.map(([token, value, use]) => html`<tr><td><code>${token}</code></td><td>${value}</td><td>${use}</td></tr>`)}</tbody>
          </table>
        </div>
        <p class="sys__note">Animiert werden nur transform und opacity. Bei reduzierter Bewegung entfallen Smooth Scroll, Parallax und Replays; Inhalte stehen sofort im Endzustand.</p>
      </section>
    </div>`,
    mount(root) {
      const range = qs<HTMLInputElement>('[data-heat-range]', root);
      const out = qs<HTMLElement>('[data-heat-out]', root);
      const meterEl = qs<HTMLElement>('[data-heat-meter] [data-meter]', root);
      range?.addEventListener('input', () => {
        const v = Number(range.value);
        if (out) out.textContent = `${v} %`;
        if (!meterEl) return;
        const int = qs('.meter__int', meterEl);
        const dec = qs('.meter__dec', meterEl);
        if (int) int.textContent = String(v);
        if (dec) dec.textContent = '.0';
        meterEl.style.setProperty('--heat', heatColor(v));
      });

      qsa<HTMLButtonElement>('[data-demo-chip]', root).forEach((chip) =>
        chip.addEventListener('click', () => chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true'))),
      );

      const unbind = demo ? bindComboCards(root, [demo]) : () => {};
      const revert = scope(root, () => reveals(root));
      return () => {
        unbind();
        revert();
      };
    },
  };
}
