import { bindComboCards, comboCard, playFirstVisible } from '../components/comboPlayer';
import { commentsSection, mountComments } from '../components/comments';
import { fighterBackdrop } from '../components/fighterBackdrop';
import { franchiseGlyph } from '../components/franchise';
import { faceThumb, fighterArt } from '../components/fighterTile';
import { framesSection, wireFrames } from '../components/frameTable';
import { ICONS } from '../components/icons';
import { tierBadge } from '../components/tierBadge';
import { videoSection, wireVideo } from '../components/videoEmbed';
import { miniPyramid } from '../components/pyramid';
import { ARCHETYPE_INFO } from '../data/archetypes';
import { ARCHETYPES, FIGHTER_BY_SLUG, FIGHTERS, WEIGHT_CLASSES, WEIGHT_RANGE, weightClass } from '../data/fighters';
import { hasFrames } from '../data/frames-index';
import { bindErrorState, errorState, LOAD_FAILED_TEXT } from '../components/states';
import { GUIDE_COUNT, GUIDE_SLUGS, guideFor, loadLateGuides } from '../data/guide-index';
import { videoFor } from '../data/videos';
import { TIER_BY_SLUG, TIER_TOTAL } from '../data/tiers';
import type { Combo, Fighter, FighterGuide } from '../data/types';
import { formatNumber, t } from '../i18n';
import { accentVars } from '../lib/color';
import { html, mount, qs, qsa, raw, type Markup } from '../lib/dom';
import { gsap, motionOK, parallax, pointerDepth, reveals, scope, scrollToTarget } from '../lib/motion';
import { link, parse, replaceQuery, type Route } from '../lib/router';
import { notFoundPage } from './notFound';
import type { PageView } from './types';

const MOBILITY = ['', t('fighter.mob1'), t('fighter.mob2'), t('fighter.mob3'), t('fighter.mob4'), t('fighter.mob5')] as const;

const score = (n: number): string => formatNumber(n, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const rankOf = (f: Fighter): number => TIER_BY_SLUG.get(f.slug)?.rank ?? 999;
const BY_RANK = [...FIGHTERS].sort((a, b) => rankOf(a) - rankOf(b) || a.order - b.order);

function heroSection(f: Fighter): Markup {
  return html`<header class="fhero" data-parallax-scope data-parallax-top>
    <div class="fhero__stage" aria-hidden="true">
      <div class="fhero__art" data-parallax="0.16"><div class="fhero__art-inner" data-depth>${fighterArt(f, 'hero')}</div></div>
    </div>
    <div class="container fhero__content">
      <nav class="crumbs" aria-label="${t('fighter.crumbs')}">
        <ol role="list">
          <li><a href="${link('/roster')}">${t('nav.roster')}</a></li>
          <li aria-current="page">${f.name}</li>
        </ol>
      </nav>
      <h1 class="fhero__name" id="fighter-name"><span class="fhero__name-text">${f.name}</span></h1>
      <div class="fhero__badges" data-hero-in>
        ${tierBadge(TIER_BY_SLUG.get(f.slug), 'lg')}
        <span class="tag">${ARCHETYPES[f.archetype]}</span>
        <span class="tag tag--series">${franchiseGlyph(f.series)}${f.series}</span>
        <span class="tag">${t('fighter.number', { no: f.no })}</span>
      </div>
      <p class="fhero__tagline" data-hero-in>${f.tagline}</p>
      <p class="fhero__jump" data-hero-in>
        <button class="btn btn--primary" type="button" data-jump>${ICONS.combo}${t('fighter.jump')}</button>
      </p>
    </div>
  </header>`;
}

function statsSection(f: Fighter): Markup {
  const placement = TIER_BY_SLUG.get(f.slug);
  const weightPct = Math.round(((f.weight - WEIGHT_RANGE.min) / (WEIGHT_RANGE.max - WEIGHT_RANGE.min)) * 100);
  const heatPct = placement ? Math.round(((TIER_TOTAL - placement.rank + 1) / TIER_TOTAL) * 100) : 0;
  return html`<section class="container fstats" aria-labelledby="stats-title">
    <h2 class="vh" id="stats-title">${t('fighter.attributes')}</h2>
    <dl class="stats">
      <div class="stat" data-reveal>
        <dt>${t('roster.weight')}</dt>
        <dd>
          <span class="stat__value">${f.weight}</span>
          <span class="stat__meta">${WEIGHT_CLASSES[weightClass(f.weight)].label}${f.weightNote ? `: ${f.weightNote}` : ''}</span>
          <span class="bar" style="--fill:${Math.max(weightPct, 4)}" aria-hidden="true"><span class="bar__fill"></span></span>
        </dd>
      </div>
      <div class="stat" data-reveal data-reveal-delay="0.06">
        <dt>${t('fighter.mobility')}</dt>
        <dd>
          <span class="stat__value">${f.mobility}<span class="stat__unit"> ${t('fighter.outOf', { n: 5 })}</span></span>
          <span class="stat__meta">${MOBILITY[f.mobility]}</span>
          <span class="pips" aria-hidden="true">${[1, 2, 3, 4, 5].map((n) => html`<span class="pip${n <= f.mobility ? ' is-on' : ''}"></span>`)}</span>
        </dd>
      </div>
      <div class="stat" data-reveal data-reveal-delay="0.12">
        <dt>${t('roster.archetype')}</dt>
        <dd>
          <a class="stat__arch" href="${link('/archetypen', { typ: f.archetype, fighter: f.slug })}">
            ${miniPyramid(f.archetype, 'stat__arch-mini')}
            <span class="stat__value stat__value--word">${ARCHETYPES[f.archetype]}</span>
          </a>
          <span class="stat__meta">${ARCHETYPE_INFO[f.archetype].hint}</span>
        </dd>
      </div>
      <div class="stat" data-reveal data-reveal-delay="0.18">
        <dt>${t('fighter.placement')}</dt>
        <dd>
          ${placement
            ? html`<span class="stat__value">${placement.tier}</span>
                <span class="stat__meta">${t('fighter.rankMeta', { rank: placement.rank, total: TIER_TOTAL, score: score(placement.score) })}</span>
                <span class="bar bar--heat" style="--fill:${heatPct}" aria-hidden="true"><span class="bar__fill"></span></span>`
            : html`<span class="stat__value stat__value--word">${t('fighter.notListed')}</span>`}
        </dd>
      </div>
    </dl>
  </section>`;
}

function metaSection(f: Fighter, guide: FighterGuide | undefined): Markup {
  const parent = f.echoOf ? FIGHTER_BY_SLUG.get(f.echoOf) : undefined;
  const related = parent ? [parent] : FIGHTERS.filter((x) => x.echoOf === f.slug);
  const sharesRank = (other: Fighter): boolean => TIER_BY_SLUG.get(other.slug)?.rank === TIER_BY_SLUG.get(f.slug)?.rank;

  return html`<section class="container fmeta" aria-labelledby="meta-title">
    <div class="fmeta__text">
      <h2 id="meta-title" data-reveal="wipe">${t('fighter.metaTitle')}</h2>
      ${(guide?.meta ?? [f.tagline]).map((p) => html`<p data-reveal>${p}</p>`)}
      ${related.map(
        (r) => html`<p class="fmeta__echo">
          ${parent ? t('fighter.echoOf') : t('fighter.hasEcho')}
          <a class="link" href="${link(`/fighter/${r.slug}`)}">${r.name}</a>.
          ${sharesRank(r) ? t('fighter.sharedRank') : t('fighter.separateRank')}
        </p>`,
      )}
      ${guide?.sources.length
        ? html`<p class="fmeta__sources">
            ${t('fighter.sources')} ${guide.sources.map((s, i) => html`${i ? ', ' : ''}<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)}
          </p>`
        : ''}
    </div>
    ${guide
      ? html`<div class="fmeta__lists">
          <div class="plusminus" data-reveal>
            <h3>${t('fighter.strengths')}</h3>
            <ul role="list">${guide.strengths.map((s) => html`<li>${s}</li>`)}</ul>
          </div>
          <div class="plusminus plusminus--minus" data-reveal>
            <h3>${t('fighter.weaknesses')}</h3>
            <ul role="list">${guide.weaknesses.map((s) => html`<li>${s}</li>`)}</ul>
          </div>
        </div>`
      : ''}
  </section>`;
}

type TabId = 'bnb' | 'meta';

function combosSection(f: Fighter, guide: FighterGuide | undefined, active: TabId, pending = false): Markup {
  const head = html`<div class="section-head">
    <h2 id="combos-title" data-reveal="wipe">Combos</h2>
    <p>${t('fighter.combosLead')}</p>
  </div>`;

  if (!guide) {
    return html`<section class="container fcombos" id="combos" aria-labelledby="combos-title">
      ${head}
      ${pending
        ? html`<div class="skeleton" role="status" aria-live="polite">
            <span class="vh">${t('fighter.combosLoading')}</span>
            ${[0, 1].map(
              () => html`<div class="skeleton__card" aria-hidden="true">
                <span class="skeleton__bar skeleton__bar--title"></span>
                <span class="skeleton__bar"></span>
                <span class="skeleton__bar skeleton__bar--step"></span>
                <span class="skeleton__bar skeleton__bar--step"></span>
                <span class="skeleton__bar skeleton__bar--step"></span>
              </div>`,
            )}
          </div>`
        : html`<div class="empty">
            <h3>${t('fighter.noCombos', { name: f.name })}</h3>
            <p>${t('fighter.noCombosText', { n: GUIDE_COUNT })}</p>
            <a class="btn btn--sm" href="${link('/roster')}">${t('notFound.cta')}</a>
          </div>`}
    </section>`;
  }

  const groups: Array<{ id: TabId; label: string; intro: string; combos: Combo[] }> = [
    {
      id: 'bnb',
      label: 'Bread & Butter',
      intro: t('fighter.bnbIntro'),
      combos: guide.combos.filter((c) => c.kind === 'bnb'),
    },
    {
      id: 'meta',
      label: 'Meta',
      intro: t('fighter.metaIntro'),
      combos: guide.combos.filter((c) => c.kind === 'meta'),
    },
  ];

  return html`<section class="container fcombos" id="combos" aria-labelledby="combos-title">
    ${head}
    <div class="tabs" role="tablist" aria-label="${t('fighter.tabs')}">
      ${groups.map(
        (g) => html`<button class="tab" type="button" role="tab" id="tab-${g.id}" aria-controls="panel-${g.id}"
          aria-selected="${String(g.id === active)}" tabindex="${g.id === active ? '0' : '-1'}" data-tab="${g.id}">
          ${g.label}<span class="tab__count">${g.combos.length}</span>
        </button>`,
      )}
      <span class="tabs__ink" aria-hidden="true"></span>
    </div>
    ${groups.map(
      (g) => html`<div class="tabpanel" role="tabpanel" id="panel-${g.id}" aria-labelledby="tab-${g.id}" tabindex="0" ${g.id === active ? '' : raw('hidden')}>
        <p class="tabpanel__intro">${g.intro}</p>
        <div class="combo-grid">${g.combos.map(comboCard)}</div>
      </div>`,
    )}
  </section>`;
}

/**
 * Geteilter Link `?combo=<id>` (components/shareButtons.ts): Karte in den Blick holen,
 * kurz hervorheben und den Fokus darauf setzen, damit auch Tastatur und Screenreader
 * dort landen. Danach verschwindet der Parameter aus der Adresse, sonst hinge er an
 * jedem späteren Tab-Wechsel.
 */
function focusCombo(root: HTMLElement, id: string): void {
  const card = qsa<HTMLElement>('[data-combo]', root).find((c) => c.dataset.combo === id);
  const query = parse(location.hash).query;
  query.delete('combo');
  replaceQuery(query);
  if (!card) return;
  card.classList.add('is-target');
  card.tabIndex = -1;
  // setTimeout statt requestAnimationFrame: Der Tab ist gerade erst sichtbar geworden, und rAF steht in Hintergrund-Tabs still.
  window.setTimeout(() => {
    scrollToTarget(card);
    card.focus({ preventScroll: true });
  }, 80);
  window.setTimeout(() => card.classList.remove('is-target'), 2800);
}

/** Tab, in dem eine Combo steht. Ohne Treffer der aus der Adresse. */
const tabFor = (guide: FighterGuide | undefined, comboId: string | null, fallback: TabId): TabId => {
  const hit = comboId ? guide?.combos.find((c) => c.id === comboId) : undefined;
  return hit ? (hit.kind === 'meta' ? 'meta' : 'bnb') : fallback;
};

function navSection(prev: Fighter, next: Fighter): Markup {
  const item = (f: Fighter, dir: 'prev' | 'next'): Markup => {
    const p = TIER_BY_SLUG.get(f.slug);
    const face = faceThumb(f, 'fnav__face');
    return html`<a class="fnav__link fnav__link--${dir}" href="${link(`/fighter/${f.slug}`)}" style="${accentVars(f.colors)}">
      ${dir === 'prev' ? html`${ICONS.chevronLeft}${face}` : ''}
      <span>
        <span class="fnav__label">${dir === 'prev' ? t('fighter.prevRank') : t('fighter.nextRank')}${p ? `, #${p.rank}` : ''}</span>
        <span class="fnav__name">${f.name}</span>
      </span>
      ${dir === 'next' ? html`${face}${ICONS.chevronRight}` : ''}
    </a>`;
  };
  return html`<nav class="container fnav" aria-label="${t('fighter.nav')}">${item(prev, 'prev')}${item(next, 'next')}</nav>`;
}

/**
 * Platzhalter für die Kommentare, noch ohne Funktion. Das Formular ist
 * deaktiviert statt versteckt, damit sichtbar ist, was hier hinkommt.
 *
 * Bewusst keine Beispielkommentare: Erfundene Stimmen unter belegten
 * Combo-Routen würden genau die Glaubwürdigkeit kosten, auf der die Seite
 * steht. Kein inline `onsubmit` am Formular, die CSP verbietet Inline-Skripte;
 * mit deaktiviertem Feld und Knopf lässt es sich ohnehin nicht absenden.
 */
function mountTabs(root: HTMLElement, combos: Combo[]): () => void {
  /*
   * Auf den Combo-Abschnitt eingeschränkt. Seit die Frame-Daten eine zweite
   * Tab-Leiste auf derselben Seite haben, würde ein Suchlauf über die ganze
   * Seite deren Tabs mit einsammeln – beide Leisten würden sich gegenseitig
   * umschalten, und `select()` würde `?routen=` schreiben, sobald jemand auf
   * „Luft" klickt.
   */
  const bereich = qs<HTMLElement>('.fcombos', root) ?? root;
  const tabs = qsa<HTMLButtonElement>('[role="tab"]', bereich);
  const panels = qsa<HTMLElement>('[role="tabpanel"]', bereich);
  const ink = qs<HTMLElement>('.tabs__ink', bereich);
  let stopAutoplay: () => void = () => {};

  const moveInk = (tab: HTMLElement, animate: boolean): void => {
    if (!ink) return;
    const vars = { x: tab.offsetLeft, width: tab.offsetWidth };
    if (animate && motionOK()) gsap.to(ink, { ...vars, duration: 0.45, ease: 'expo.out' });
    else gsap.set(ink, vars);
  };

  const select = (tab: HTMLButtonElement, opts: { focus?: boolean; animate?: boolean } = {}): void => {
    const { focus = false, animate = true } = opts;
    tabs.forEach((other) => {
      const on = other === tab;
      other.setAttribute('aria-selected', String(on));
      other.tabIndex = on ? 0 : -1;
    });
    panels.forEach((p) => {
      const on = p.id === tab.getAttribute('aria-controls');
      p.hidden = !on;
      if (on && animate && motionOK()) {
        gsap.fromTo(qsa('.combo', p), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'expo.out' });
      }
    });
    moveInk(tab, animate);
    if (focus) tab.focus();

    const query = parse(location.hash).query;
    if (tab.dataset.tab === 'meta') query.set('routen', 'meta');
    else query.delete('routen');
    replaceQuery(query);

    stopAutoplay();
    const panel = panels.find((p) => !p.hidden);
    stopAutoplay = panel ? playFirstVisible(panel, combos) : () => {};
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const target =
        e.key === 'ArrowRight' ? (i + 1) % tabs.length
        : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length
        : e.key === 'Home' ? 0
        : e.key === 'End' ? tabs.length - 1
        : -1;
      const next = tabs[target];
      if (!next) return;
      e.preventDefault();
      select(next, { focus: true });
    });
  });

  const current = (): HTMLButtonElement | undefined => tabs.find((tab) => tab.getAttribute('aria-selected') === 'true');
  const initial = current() ?? tabs[0];
  if (initial) select(initial, { animate: false });

  const realign = (): void => {
    const tab = current();
    if (tab) moveInk(tab, false);
  };
  window.addEventListener('resize', realign);
  void document.fonts?.ready.then(realign);

  return () => {
    stopAutoplay();
    window.removeEventListener('resize', realign);
  };
}

export function fighterPage(route: Route): PageView {
  const f = FIGHTER_BY_SLUG.get(route.params.slug ?? '');
  if (!f) return notFoundPage('fighter');

  // Tiers from A+ downwards load on demand; until then the sections render as pending.
  const hasGuide = GUIDE_SLUGS.has(f.slug);
  const guide = guideFor(f.slug);
  const video = videoFor(f.slug);
  const fromUrl: TabId = route.query.get('routen') === 'meta' ? 'meta' : 'bnb';
  const targetCombo = route.query.get('combo');
  const active = tabFor(guide, targetCombo, fromUrl);
  const i = BY_RANK.indexOf(f);
  const prev = BY_RANK[(i - 1 + BY_RANK.length) % BY_RANK.length] ?? f;
  const next = BY_RANK[(i + 1) % BY_RANK.length] ?? f;

  return {
    title: t('fighter.pageTitle', { name: f.name }),
    anchor: route.query.has('routen') || targetCombo ? '#combos' : undefined,
    markup: html`<article class="page page--flush fighter" style="${accentVars(f.colors)}" aria-labelledby="fighter-name">
      ${fighterBackdrop(f)} ${heroSection(f)} ${statsSection(f)}
      <div data-meta>${metaSection(f, guide)}</div>
      ${video ? videoSection(video, f.name) : ''}
      <div data-combos>${combosSection(f, guide, active, hasGuide && !guide)}</div>
      ${hasFrames(f.slug) ? framesSection(f.name) : ''}
      ${navSection(prev, next)} ${commentsSection(f)}
    </article>`,
    mount(root) {
      const cleanups: Array<() => void> = [];
      let stopReveals = (): void => {};
      cleanups.push(() => stopReveals());
      cleanups.push(
        scope(root, () => {
          stopReveals = reveals(root);
          parallax(root);
          if (!motionOK()) return;
          // Früher font-stretch 125 → 74 %: neues Text-Layout in jedem Frame. scaleX sieht fast gleich aus und läuft im Compositor.
          gsap.fromTo(
            '.fhero__name-text',
            { autoAlpha: 0, x: -24, scaleX: 1.28, transformOrigin: '0% 60%' },
            { autoAlpha: 1, x: 0, scaleX: 1, duration: 1.2, ease: 'expo.out', clearProps: 'transform' },
          );
          gsap.fromTo('[data-hero-in]', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08, delay: 0.25, ease: 'expo.out' });
          gsap.from('.bar__fill', { scaleX: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.stats', start: 'top 90%', once: true } });
        }),
      );

      qs('[data-jump]', root)?.addEventListener('click', () => {
        const target = qs<HTMLElement>('#combos', root);
        if (target) scrollToTarget(target);
      });

      const hero = qs<HTMLElement>('.fhero', root);
      const art = qs<HTMLElement>('[data-depth]', root);
      if (hero && art) cleanups.push(pointerDepth(hero, [[art, 28]]));

      // Der Seitenhintergrund blendet erst ab der Header-Unterkante ein, siehe `.fbg` in fighter.css.
      const backdrop = qs<HTMLElement>('.fbg', root);
      if (hero && backdrop) {
        const syncBackdrop = (): void => backdrop.style.setProperty('--fbg-start', `${hero.offsetHeight}px`);
        syncBackdrop();
        const observer = new ResizeObserver(syncBackdrop);
        observer.observe(hero);
        cleanups.push(() => observer.disconnect());
      }

      cleanups.push(wireVideo(root));
      cleanups.push(mountComments(root, f));
      cleanups.push(wireFrames(root, f.slug));

      let comboCleanups: Array<() => void> = [];
      const wireCombos = (g: FighterGuide): void => {
        comboCleanups.forEach((fn) => fn());
        comboCleanups = [bindComboCards(root, g.combos), mountTabs(root, g.combos)];
      };

      if (guide) {
        wireCombos(guide);
        if (targetCombo) focusCombo(root, targetCombo);
      }
      else if (hasGuide) {
        // Skelett, bis die Daten da sind. Scheitert das Laden, ersetzt ein Fehler mit Ausweg das Skelett.
        const loadCombos = (): void => {
          loadLateGuides().then(
            () => {
              const loaded = guideFor(f.slug);
              const host = qs<HTMLElement>('[data-combos]', root);
              if (!loaded || !host?.isConnected) return;
              const metaHost = qs<HTMLElement>('[data-meta]', root);
              if (metaHost) mount(metaHost, metaSection(f, loaded));
              mount(host, combosSection(f, loaded, tabFor(loaded, targetCombo, fromUrl)));
              wireCombos(loaded);
              if (targetCombo) focusCombo(root, targetCombo);
            },
            () => {
              const slot = qs<HTMLElement>('[data-combos] .skeleton, [data-combos] [data-load-error]', root);
              if (!slot?.isConnected) return;
              const box = document.createElement('div');
              box.dataset.loadError = '';
              slot.replaceWith(box);
              mount(box, errorState(t('fighter.combosError', { name: f.name }), LOAD_FAILED_TEXT));
              bindErrorState(box, loadCombos);
            },
          );
        };
        loadCombos();
      }

      cleanups.push(() => comboCleanups.forEach((fn) => fn()));
      return () => cleanups.forEach((fn) => fn());
    },
  };
}
