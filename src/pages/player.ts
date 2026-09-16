import { openAuth } from '../components/authDialog';
import { relative } from '../components/comments';
import { faceThumb } from '../components/fighterTile';
import { ICONS } from '../components/icons';
import { bindErrorState, errorState, LOAD_FAILED_TEXT } from '../components/states';
import { FIGHTER_BY_SLUG } from '../data/fighters';
import { dateFormat, formatNumber, t } from '../i18n';
import { accentVars } from '../lib/color';
import { html, mount, qs, qsa, type Markup } from '../lib/dom';
import { link, type Route } from '../lib/router';
import { ApiError } from '../services/api';
import { onAuth, type AuthState } from '../services/auth';
import { getPlayer, type Player } from '../services/db';
import type { PageView } from './types';

/**
 * #/spieler/<name>: Spielerprofil eines Mitglieds.
 *
 * Nur für angemeldete Nutzer (Server antwortet Gästen mit 401). Zu sehen ist nur,
 * was über Kommentare ohnehin öffentlich ist: Name, Main, Kommentare, dazu Monat
 * der Registrierung. Kommende Bausteine (bestätigte start.gg-Placements, Pinnwand)
 * hängen sich als weitere `profile-section` unter die Kommentare.
 */

const monthFmt = dateFormat({ month: 'long', year: 'numeric' });
const fullFmt = dateFormat({ dateStyle: 'medium', timeStyle: 'short' });
const pageTitle = (name: string): string => `${name} | ${t('player.pageTitle')} | Blastzone`;

const memberSince = (yyyyMm: string): string => {
  const d = new Date(`${yyyyMm}-01T12:00:00Z`);
  return Number.isNaN(d.getTime()) ? t('player.unknown') : monthFmt.format(d);
};

function loadingView(): Markup {
  return html`<header class="container profile-head" aria-busy="true">
      <span class="profile-head__avatar">${ICONS.user}</span>
      <div class="profile-head__text">
        <span class="skeleton__bar skeleton__bar--title"></span>
        <span class="skeleton__bar"></span>
      </div>
    </header>
    <p class="vh" role="status">${t('player.loading')}</p>`;
}

function guestView(name: string): Markup {
  return html`<header class="container page-head">
      <h1>${name}</h1>
      <p>${t('player.guestLead')}</p>
    </header>
    <div class="container profile-guest">
      <button class="btn btn--primary" type="button" data-open="login">${ICONS.lock}${t('account.login')}</button>
      <button class="btn" type="button" data-open="signup">${ICONS.user}${t('auth.titleSignup')}</button>
    </div>`;
}

function notFoundView(name: string): Markup {
  return html`<header class="container page-head">
      <h1>${t('player.notFound')}</h1>
      <p>${t('player.notFoundText', { name })}</p>
    </header>
    <div class="container profile-guest">
      <a class="btn" href="${link('/')}">${t('crash.home')}</a>
    </div>`;
}

function commentList(p: Player): Markup {
  if (!p.recentComments.length) {
    return html`<p class="profile-empty">${p.isSelf ? t('player.noCommentsSelf') : t('player.noComments', { name: p.username })}</p>`;
  }
  return html`<ol class="player-comments">
    ${p.recentComments.map((c) => {
      const f = FIGHTER_BY_SLUG.get(c.fighter);
      return html`<li class="player-comment" ${f ? html`style="${accentVars(f.colors)}"` : ''}>
        <div class="player-comment__head">
          ${f
            ? html`<a class="player-comment__fighter" href="${link(`/fighter/${f.slug}`)}">${faceThumb(f, 'player-comment__face')}<span>${f.name}</span></a>`
            : html`<span class="player-comment__fighter">${c.fighter}</span>`}
          <time class="player-comment__time" datetime="${c.createdAt}" title="${fullFmt.format(new Date(c.createdAt))}">${relative(c.createdAt)}</time>
        </div>
        <p class="player-comment__body">${c.body}</p>
      </li>`;
    })}
  </ol>`;
}

function secondaryChips(p: Player): Markup {
  const fighters = p.secondaries.map((s) => FIGHTER_BY_SLUG.get(s)).filter((f) => f !== undefined);
  if (!fighters.length) return html`${t('player.none')}`;
  return html`<span class="player-secs">
    ${fighters.map((f) => html`<a class="comment__flair" href="${link(`/fighter/${f.slug}`)}" style="${accentVars(f.colors)}">${faceThumb(f, 'comment__flair-face')}<span>${f.name}</span></a>`)}
  </span>`;
}

function playerView(p: Player): Markup {
  const main = p.mainFighter ? FIGHTER_BY_SLUG.get(p.mainFighter) : undefined;
  return html`<header class="container profile-head" ${main ? html`style="${accentVars(main.colors)}"` : ''}>
      <span class="profile-head__avatar">${main ? faceThumb(main, 'profile-head__face') : ICONS.user}</span>
      <div class="profile-head__text">
        <h1 class="profile-head__name">${p.username}</h1>
        <p class="profile-head__meta">
          ${p.isSelf ? t('player.self') : html`${t('player.fromCommunity')} <a class="link link--inline" href="${link('/community')}">${t('player.communityLink')}</a>`}
        </p>
      </div>
      ${p.isSelf ? html`<a class="btn btn--sm" href="${link('/profil')}">${ICONS.user}${t('player.edit')}</a>` : ''}
    </header>

    <section class="container profile-section" aria-label="${t('player.stats')}">
      <dl class="player-stats">
        <div class="player-stat">
          <dt>${t('player.main')}</dt>
          <dd>${main ? html`<a class="link" href="${link(`/fighter/${main.slug}`)}">${main.name}</a>` : t('community.noMain')}</dd>
        </div>
        <div class="player-stat">
          <dt>${t('player.secondaries')}</dt>
          <dd>${secondaryChips(p)}</dd>
        </div>
        <div class="player-stat">
          <dt>${t('player.comments')}</dt>
          <dd>${formatNumber(p.stats.comments)}</dd>
        </div>
        <div class="player-stat">
          <dt>${t('player.memberSince')}</dt>
          <dd>${memberSince(p.memberSince)}</dd>
        </div>
      </dl>
    </section>

    <section class="container profile-section" aria-labelledby="player-comments-title">
      <div class="profile-section__head">
        <h2 id="player-comments-title">${t('player.latestComments')}</h2>
      </div>
      ${commentList(p)}
    </section>`;
}

export function playerPage(route: Route): PageView {
  const name = route.params.name ?? '';
  return {
    title: pageTitle(name),
    markup: html`<div class="page profile-page player-page" data-player></div>`,
    mount(root) {
      const host = qs<HTMLElement>('[data-player]', root)!;
      let shownFor = '';
      let request = 0;

      const load = (): void => {
        const mine = ++request;
        mount(host, loadingView());
        getPlayer(name).then(
          (player) => {
            if (mine !== request || !host.isConnected) return;
            mount(host, playerView(player));
            document.title = pageTitle(player.username);
          },
          (err: unknown) => {
            if (mine !== request || !host.isConnected) return;
            // 401: Sitzung abgelaufen. guarded() meldet ab, onAuth zeichnet dann die Gast-Ansicht.
            if (err instanceof ApiError && err.status === 401) return;
            if (err instanceof ApiError && (err.status === 404 || err.status === 400)) {
              mount(host, notFoundView(name));
              return;
            }
            mount(host, html`<div class="container">${errorState(t('player.loadError'), err instanceof ApiError ? err.message : LOAD_FAILED_TEXT)}</div>`);
            bindErrorState(host, load);
          },
        );
      };

      const render = (state: AuthState): void => {
        const key = state.status === 'user' ? `user:${state.user.id}` : state.status;
        if (key === shownFor) return;
        shownFor = key;
        request++;
        if (state.status === 'unknown') {
          mount(host, loadingView());
          return;
        }
        if (state.status === 'guest') {
          mount(host, guestView(name));
          qsa<HTMLButtonElement>('[data-open]', host).forEach((b) => b.addEventListener('click', () => openAuth(b.dataset.open as 'login' | 'signup')));
          return;
        }
        load();
      };

      const stop = onAuth(render);
      return () => {
        stop();
        request++;
      };
    },
  };
}
