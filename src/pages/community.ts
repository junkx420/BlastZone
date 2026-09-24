import { openAuth } from '../components/authDialog';
import { faceThumb } from '../components/fighterTile';
import { ICONS } from '../components/icons';
import { bindErrorState, errorState, LOAD_FAILED_TEXT } from '../components/states';
import { FIGHTER_BY_SLUG, FIGHTERS } from '../data/fighters';
import { dateFormat, locale, t, tn } from '../i18n';
import { accentVars } from '../lib/color';
import { html, mount, qs, qsa, type Markup } from '../lib/dom';
import { link, replaceQuery, type Route } from '../lib/router';
import { ApiError } from '../services/api';
import { onAuth, type AuthState } from '../services/auth';
import { getCommunitySettings, listDirectory, saveCommunitySettings, type DirectoryEntry } from '../services/db';
import { USERNAME_PREFIX_PATTERN } from '../shared/account-rules';
import type { PageView } from './types';

/**
 * #/community: Verzeichnis der Mitglieder.
 *
 * Nur angemeldet. Drin steht nur, wer sich eingetragen hat (Profil oder der Knopf
 * oben auf dieser Seite). Suche nach Namensanfang und Filter nach Fighter als Main
 * oder Secondary, beides in der Adresse (`?q=…&fighter=…`), damit Links und Zurück
 * funktionieren. Seiten per Cursor mit „Mehr laden“.
 */

const BY_NAME = [...FIGHTERS].sort((a, b) => a.name.localeCompare(b.name, locale));
const monthFmt = dateFormat({ month: 'short', year: 'numeric' });

function guestView(): Markup {
  return html`<header class="container page-head">
      <h1>${t('community.title')}</h1>
      <p>${t('community.guestLead')}</p>
    </header>
    <div class="container profile-guest">
      <button class="btn btn--primary" type="button" data-open="login">${ICONS.lock}${t('account.login')}</button>
      <button class="btn" type="button" data-open="signup">${ICONS.user}${t('auth.titleSignup')}</button>
    </div>`;
}

function memberView(q: string, fighter: string): Markup {
  return html`<header class="container page-head">
      <h1>${t('community.title')}</h1>
      <p>${t('community.lead')}</p>
    </header>

    <div class="container" data-self></div>

    <div class="container">
      <form class="community-filters glass" role="search" novalidate data-filters>
        <div class="field community-filters__search">
          ${ICONS.search}
          <label class="vh" for="community-q">${t('community.searchLabel')}</label>
          <input id="community-q" class="input" type="search" placeholder="${t('community.searchPlaceholder')}" maxlength="20" autocomplete="off" spellcheck="false" value="${q}" data-q />
        </div>
        <div class="select-wrap community-filters__fighter">
          <label class="control-label" for="community-fighter">${t('community.plays')}</label>
          <select id="community-fighter" class="select" data-fighter>
            <option value="">${t('community.allFighters')}</option>
            ${BY_NAME.map((f) => html`<option value="${f.slug}" ${f.slug === fighter ? 'selected' : ''}>${f.name}</option>`)}
          </select>
        </div>
        <p class="fcomments__error community-filters__error" role="alert" data-q-error hidden></p>
      </form>
    </div>

    <section class="container community-results" aria-labelledby="community-results-title">
      <h2 id="community-results-title" class="vh">${t('community.players')}</h2>
      <p class="profile-status community-count" role="status" aria-live="polite" data-count></p>
      <div data-results></div>
      <div class="community-more" data-more></div>
    </section>`;
}

function card(p: DirectoryEntry): Markup {
  const main = p.mainFighter ? FIGHTER_BY_SLUG.get(p.mainFighter) : undefined;
  const secondaries = p.secondaries.flatMap((s) => {
    const fighter = FIGHTER_BY_SLUG.get(s.fighter);
    return fighter ? [{ fighter, skin: s.skin }] : [];
  });
  const since = new Date(`${p.memberSince}-01T12:00:00Z`);
  return html`<li>
    <a class="player-card" href="${link(`/spieler/${p.username}`)}" ${main ? html`style="${accentVars(main.colors)}"` : ''}>
      <span class="player-card__face">${main ? faceThumb(main, 'player-card__img', p.mainSkin) : ICONS.user}</span>
      <span class="player-card__text">
        <strong class="player-card__name">${p.username}</strong>
        <span class="player-card__main">${main ? main.name : t('community.noMain')}</span>
        ${Number.isNaN(since.getTime()) ? '' : html`<span class="player-card__since">${t('community.memberSince', { date: monthFmt.format(since) })}</span>`}
      </span>
      ${secondaries.length
        ? html`<span class="player-card__secondaries">
            ${secondaries.map(
              ({ fighter, skin }) =>
                html`<span class="player-card__sec" style="${accentVars(fighter.colors)}" title="${t('community.secondary', { name: fighter.name })}">${faceThumb(fighter, 'player-card__img', skin)}</span>`,
            )}
            <span class="vh">${t('community.secondaries', { names: secondaries.map((s) => s.fighter.name).join(', ') })}</span>
          </span>`
        : ''}
    </a>
  </li>`;
}

const skeleton = (): Markup =>
  html`<ul class="player-grid" aria-hidden="true">
    ${Array.from({ length: 6 }, () => html`<li><span class="player-card player-card--skeleton"><span class="skeleton__bar skeleton__bar--title"></span><span class="skeleton__bar"></span></span></li>`)}
  </ul>`;

export function communityPage(route: Route): PageView {
  return {
    title: `${t('community.title')} | Blastzone`,
    markup: html`<div class="page community-page" data-community></div>`,
    mount(root) {
      const host = qs<HTMLElement>('[data-community]', root)!;
      let shownFor = '';
      let alive = true;
      let request = 0;
      let debounce = 0;

      const renderSelf = (self: HTMLElement): void => {
        getCommunitySettings().then(
          (settings) => {
            if (!alive || !self.isConnected) return;
            if (settings.listed) {
              mount(self, html``);
              return;
            }
            mount(
              self,
              html`<div class="community-self">
                <p class="community-self__text"><strong>${t('community.notListed')}</strong> ${t('community.notListedText')}</p>
                <button class="btn btn--primary btn--sm" type="button" data-join>${ICONS.check}${t('community.join')}</button>
                <p class="fcomments__error" role="alert" data-join-error hidden></p>
              </div>`,
            );
            const join = qs<HTMLButtonElement>('[data-join]', self)!;
            const error = qs<HTMLElement>('[data-join-error]', self)!;
            join.addEventListener('click', async () => {
              join.disabled = true;
              join.setAttribute('aria-busy', 'true');
              error.hidden = true;
              try {
                await saveCommunitySettings({ listed: true });
                if (!alive) return;
                mount(self, html`<p class="community-self community-self--done" role="status">${ICONS.check}${t('community.joined')}</p>`);
                reload();
              } catch (err) {
                if (!alive) return;
                join.disabled = false;
                join.removeAttribute('aria-busy');
                error.hidden = false;
                error.textContent = err instanceof ApiError ? err.message : t('api.failed');
              }
            });
          },
          () => {
            // Ohne Einstellungen fehlt nur der Hinweis. Das Verzeichnis darunter lädt trotzdem.
            if (self.isConnected) mount(self, html``);
          },
        );
      };

      let reload = (): void => {};

      const wireMember = (): void => {
        const params = route.query;
        mount(host, memberView(params.get('q') ?? '', params.get('fighter') ?? ''));
        renderSelf(qs<HTMLElement>('[data-self]', host)!);

        const form = qs<HTMLFormElement>('[data-filters]', host)!;
        const qInput = qs<HTMLInputElement>('[data-q]', form)!;
        const fighterSelect = qs<HTMLSelectElement>('[data-fighter]', form)!;
        const qError = qs<HTMLElement>('[data-q-error]', form)!;
        const results = qs<HTMLElement>('[data-results]', host)!;
        const more = qs<HTMLElement>('[data-more]', host)!;
        const count = qs<HTMLElement>('[data-count]', host)!;
        let shown: DirectoryEntry[] = [];

        const filters = (): { q: string; fighter: string } => ({ q: qInput.value.trim(), fighter: fighterSelect.value });

        const renderList = (nextCursor: string | null): void => {
          const { q, fighter } = filters();
          const filtered = Boolean(q || fighter);
          if (!shown.length) {
            count.textContent = t('community.countNone');
            const fighterName = fighter ? (FIGHTER_BY_SLUG.get(fighter)?.name ?? fighter) : '';
            mount(
              results,
              filtered
                ? html`<div class="profile-empty"><p>${t('community.noneFound')}${q ? t('community.noneForQuery', { q }) : ''}${fighter ? t('community.noneWithFighter', { fighter: fighterName }) : ''}.</p>
                    <button class="btn btn--sm community-reset" type="button" data-reset>${ICONS.reset}${t('community.resetFilters')}</button></div>`
                : html`<p class="profile-empty">${t('community.empty')}</p>`,
            );
            qs('[data-reset]', results)?.addEventListener('click', () => {
              qInput.value = '';
              fighterSelect.value = '';
              apply();
            });
            mount(more, html``);
            return;
          }
          // Mit Cursor gibt es noch mehr Treffer, die genaue Zahl kennt erst die letzte Seite.
          count.textContent = nextCursor ? tn('community.countMore', 'community.countMore', shown.length) : tn('community.countOne', 'community.count', shown.length);
          mount(results, html`<ul class="player-grid">${shown.map(card)}</ul>`);
          mount(more, nextCursor ? html`<button class="btn btn--ghost" type="button" data-load-more>${t('community.loadMore')}</button>` : html``);
          qs<HTMLButtonElement>('[data-load-more]', more)?.addEventListener('click', (e) => {
            const button = e.currentTarget as HTMLButtonElement;
            button.disabled = true;
            button.setAttribute('aria-busy', 'true');
            mount(button, html`${t('state.loading')}`);
            void load(nextCursor ?? undefined);
          });
        };

        const load = async (after?: string): Promise<void> => {
          const mine = ++request;
          const { q, fighter } = filters();
          if (!after) {
            results.setAttribute('aria-busy', 'true');
            mount(results, skeleton());
            mount(more, html``);
          }
          try {
            const page = await listDirectory({ q: q || undefined, fighter: fighter || undefined, after });
            if (!alive || mine !== request) return;
            shown = after ? [...shown, ...page.players] : page.players;
            results.removeAttribute('aria-busy');
            renderList(page.nextCursor);
          } catch (err) {
            if (!alive || mine !== request) return;
            if (err instanceof ApiError && err.status === 401) return;
            results.removeAttribute('aria-busy');
            mount(results, errorState(t('community.loadError'), err instanceof ApiError ? err.message : LOAD_FAILED_TEXT));
            bindErrorState(results, () => void load(after));
          }
        };

        const apply = (): void => {
          const { q, fighter } = filters();
          if (q && !USERNAME_PREFIX_PATTERN.test(q)) {
            qError.hidden = false;
            qError.textContent = t('community.invalidQuery');
            return;
          }
          qError.hidden = true;
          const next = new URLSearchParams();
          if (q) next.set('q', q);
          if (fighter) next.set('fighter', fighter);
          replaceQuery(next);
          void load();
        };
        reload = () => void load();

        qInput.addEventListener('input', () => {
          window.clearTimeout(debounce);
          debounce = window.setTimeout(apply, 250);
        });
        fighterSelect.addEventListener('change', apply);
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          window.clearTimeout(debounce);
          apply();
        });
        apply();
      };

      const render = (state: AuthState): void => {
        const key = state.status === 'user' ? `user:${state.user.id}` : state.status;
        if (key === shownFor) return;
        shownFor = key;
        request++;
        if (state.status === 'unknown') {
          mount(host, html`<div class="container page-head"><h1>${t('community.title')}</h1><p class="profile-status">${t('state.loading')}</p></div>`);
          return;
        }
        if (state.status === 'guest') {
          mount(host, guestView());
          qsa<HTMLButtonElement>('[data-open]', host).forEach((b) => b.addEventListener('click', () => openAuth(b.dataset.open as 'login' | 'signup')));
          return;
        }
        wireMember();
      };

      const stop = onAuth(render);
      return () => {
        alive = false;
        stop();
        window.clearTimeout(debounce);
      };
    },
  };
}
