import type { Combo } from '../data/types';
import { heatColor } from '../lib/color';
import { html, qs, qsa, type Markup } from '../lib/dom';
import { gsap, motionOK } from '../lib/motion';
import { ICONS } from './icons';
import { inputDescription, inputKeys, inputLabel } from './notation';

const DIFFICULTY: Record<Combo['difficulty'], string> = { 1: 'Einsteiger', 2: 'Fortgeschritten', 3: 'Präzise' };

export const comboTotal = (combo: Combo): number => combo.steps.reduce((sum, s) => sum + s.dmg, 0);

function split(value: number): { int: string; dec: string } {
  const [int = '0', dec = '0'] = value.toFixed(1).split('.');
  return { int, dec };
}

export function meter(start: number, large = false): Markup {
  const { int, dec } = split(start);
  return html`<div class="meter${large ? ' meter--lg' : ''}" data-meter style="--heat:${heatColor(start)}">
    <span class="meter__value" aria-hidden="true"><span class="meter__int">${int}</span><span class="meter__dec">.${dec}</span><span class="meter__pct">%</span></span>
    <span class="meter__ko" aria-hidden="true">KO</span>
  </div>`;
}

export function comboSteps(combo: Combo): Markup {
  return html`<ol class="combo__steps" role="list">
    ${combo.steps.map(
      (step, i) => html`<li class="step" data-step="${i}">
        <span class="step__n" aria-hidden="true">${i + 1}</span>
        <span class="step__body">
          <span class="step__label">${inputLabel(step.input, step.label)}</span>
          ${inputKeys(step.input)}
          <span class="vh">${inputDescription(step.input)}.</span>
          ${step.note ? html`<span class="step__note">${step.note}</span>` : ''}
        </span>
        <span class="step__dmg">${step.dmg ? `+${step.dmg} %` : ''}</span>
      </li>`,
    )}
  </ol>`;
}

/** Percent window as the source states it: "0–30 %", "ab 160 %" or a qualitative label. */
export function windowText(combo: Combo): string {
  if (!combo.window) return combo.windowLabel ?? 'situativ';
  const [from, to] = combo.window;
  return to === null ? `ab ${from} %` : `${from} bis ${to} %`;
}

export function comboCard(combo: Combo): Markup {
  const total = Math.round(comboTotal(combo));
  return html`<article class="combo" data-combo="${combo.id}" aria-labelledby="${combo.id}-title">
    <header class="combo__head">
      <h3 class="combo__title" id="${combo.id}-title">${combo.title}</h3>
      <dl class="combo__facts">
        <div class="fact"><dt>Prozent</dt><dd>${windowText(combo)}</dd></div>
        <div class="fact"><dt>Quelle</dt><dd><a href="${combo.source.url}" target="_blank" rel="noopener">${combo.source.label}${ICONS.external}</a></dd></div>
        <div class="fact"><dt>Schaden</dt><dd>≈ ${total} %</dd></div>
        <div class="fact"><dt>Ausführung</dt><dd><span class="difficulty" data-level="${combo.difficulty}">${DIFFICULTY[combo.difficulty]}</span></dd></div>
      </dl>
      ${combo.ztd || combo.kills || combo.tags?.length
        ? html`<ul class="combo__tags" role="list">
            ${combo.ztd ? html`<li class="tag tag--ztd">0-to-Death</li>` : ''}
            ${combo.kills && !combo.ztd ? html`<li class="tag tag--ko">Kill-Confirm</li>` : ''}
            ${(combo.tags ?? []).map((t) => html`<li class="tag">${t}</li>`)}
          </ul>`
        : ''}
    </header>
    ${comboSteps(combo)}
    <div class="combo__hud">
      ${meter(combo.start)}
      <button class="btn btn--play" type="button" data-play aria-describedby="${combo.id}-title">
        ${ICONS.play}<span data-play-label>Abspielen</span>
      </button>
    </div>
    <p class="combo__tip">${combo.tip}</p>
  </article>`;
}

/**
 * Replays a combo like an in-game hit sequence: each step lights up, the damage
 * meter ticks with hitlag shake and heats along the percent ramp, a kill ends in KO.
 */
// stepGap: Abstand zwischen zwei Schritten in Sekunden. Bewusst gemaechlich,
// damit man die Inputs mitlesen kann, statt sie nur aufblitzen zu sehen.
export function playCombo(root: HTMLElement, combo: Combo, stepGap = 0.85): gsap.core.Timeline {
  const steps = qsa<HTMLElement>('.step', root);
  const meterEl = qs<HTMLElement>('[data-meter]', root);
  const tl = gsap.timeline();
  if (!meterEl) return tl;

  const intEl = qs<HTMLElement>('.meter__int', meterEl)!;
  const decEl = qs<HTMLElement>('.meter__dec', meterEl)!;
  const valueEl = qs<HTMLElement>('.meter__value', meterEl)!;
  const koEl = qs<HTMLElement>('.meter__ko', meterEl)!;
  const state = { v: combo.start };

  const paint = (): void => {
    const { int, dec } = split(state.v);
    intEl.textContent = int;
    decEl.textContent = `.${dec}`;
    meterEl.style.setProperty('--heat', heatColor(state.v));
  };
  const markSteps = (active: number): void =>
    steps.forEach((s, i) => {
      s.classList.toggle('is-active', i === active);
      s.classList.toggle('is-done', i < active || active === -2);
    });

  root.classList.remove('is-ko', 'is-done');
  gsap.set([valueEl, koEl], { clearProps: 'all' });
  markSteps(-1);
  paint();

  const end = combo.start + comboTotal(combo);
  if (!motionOK()) {
    markSteps(-2);
    state.v = end;
    paint();
    root.classList.add('is-done');
    if (combo.kills) root.classList.add('is-ko');
    return tl;
  }

  let acc = combo.start;
  combo.steps.forEach((step, i) => {
    const at = 0.3 + i * stepGap;
    tl.call(() => markSteps(i), [], at);
    if (step.dmg > 0) {
      acc += step.dmg;
      tl.to(state, { v: acc, duration: 0.22, ease: 'power2.out', onUpdate: paint }, at + 0.05);
      /*
       * Der Impuls bleibt bewusst klein und ohne Versatz. Vorher stand hier
       * `scale: 1.18, x: -8` mit einer elastischen Kurve, die über das Ziel
       * hinausschwingt – bei der großen Anzeige im Hero (bis 96 px Ziffernhöhe)
       * schob das die Zahl sichtbar aus ihrem Kasten heraus, weil weder
       * `.combo__hud` noch `.hud` abschneiden. Im Ruhezustand war davon nichts
       * zu messen, der Überstand entsteht erst während der Wiedergabe.
       * `back.out` federt einmal nach und schwingt nicht nach links aus.
       */
      tl.fromTo(valueEl, { scale: 1.07 }, { scale: 1, duration: 0.45, ease: 'back.out(2)' }, at + 0.05);
    }
  });

  const finish = 0.3 + combo.steps.length * stepGap;
  tl.call(() => {
    markSteps(-2);
    root.classList.add('is-done');
    if (combo.kills) root.classList.add('is-ko');
  }, [], finish);
  if (combo.kills) {
    tl.fromTo(koEl, { scale: 2.6, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'expo.out' }, finish);
  }
  return tl;
}

/** Wires every [data-play] button inside `root` to its combo. */
export function bindComboCards(root: HTMLElement, combos: Combo[]): () => void {
  const running = new Map<HTMLElement, gsap.core.Timeline>();

  const start = (card: HTMLElement): void => {
    const combo = combos.find((c) => c.id === card.dataset.combo);
    if (!combo) return;
    running.get(card)?.kill();
    const label = qs<HTMLElement>('[data-play-label]', card);
    const tl = playCombo(card, combo);
    tl.eventCallback('onComplete', () => {
      if (label) label.textContent = 'Nochmal';
    });
    if (!motionOK() && label) label.textContent = 'Nochmal';
    running.set(card, tl);
  };

  const onClick = (e: Event): void => {
    const button = (e.target as Element).closest('[data-play]');
    const card = button?.closest<HTMLElement>('[data-combo]');
    if (card) start(card);
  };
  root.addEventListener('click', onClick);

  return () => {
    root.removeEventListener('click', onClick);
    running.forEach((tl) => tl.kill());
  };
}

export function playFirstVisible(root: HTMLElement, combos: Combo[]): () => void {
  if (!motionOK()) return () => {};
  const observer = new IntersectionObserver(
    (entries) => {
      const hit = entries.find((e) => e.isIntersecting);
      if (!hit) return;
      observer.disconnect();
      const card = hit.target as HTMLElement;
      const combo = combos.find((c) => c.id === card.dataset.combo);
      if (combo) playCombo(card, combo);
    },
    { threshold: 0.6 },
  );
  const first = qs<HTMLElement>('[data-combo]:not([hidden] *)', root);
  if (first) observer.observe(first);
  return () => observer.disconnect();
}
