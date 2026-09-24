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
import { getInbox, getThread, markDmRead, sendDm, type DmConversation, type DmMessage, type DmPartner } from '../services/db';
import { cleanComment, MESSAGE_MAX } from '../shared/account-rules';
import type { PageView } from './types';

/**
 * #/nachrichten und #/nachrichten/<name>: Direktnachrichten zwischen Mitgliedern.
 *
 * Nur angemeldet. Kein Push, der Browser hat keinen Supabase-Key: Die Übersicht
 * fragt alle 20 Sekunden nach, ein offener Chat alle 10, beides nur im sichtbaren
 * Tab. Als gelesen markiert wird erst, wenn der Verlauf im sichtbaren Tab steht.
 * Nachrichten sind Nutzertext und laufen nur über html``, das escaped.
 */

const INBOX_POLL_MS = 20_000;
const THREAD_POLL_MS = 10_000;
const fullFmt = dateFormat({ dateStyle: 'medium', timeStyle: 'short' });
const timeFmt = dateFormat({ hour: '2-digit', minute: '2-digit' });
const dayTimeFmt = dateFormat({ day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });

const stamp = (iso: string): string => {
  const d = new Date(iso);
  return d.toDateString() === new Date().toDateString() ? timeFmt.format(d) : dayTimeFmt.format(d);
};

function avatar(p: DmPartner, className: string): Markup {
  const f = p.mainFighter ? FIGHTER_BY_SLUG.get(p.mainFighter) : undefined;
  return html`<span class="${className}">${f ? faceThumb(f, 'dm-avatar__img', p.mainSkin) : ICONS.user}</span>`;
}

const accent = (p: DmPartner): Markup => {
  const f = p.mainFighter ? FIGHTER_BY_SLUG.get(p.mainFighter) : undefined;
  return f ? html`style="${accentVars(f.colors)}"` : html``;
};

function guestView(title: string): Markup {
  return html`<header class="container page-head">
      <h1>${title}</h1>
      <p>${t('dm.guestLead')}</p>
    </header>
    <div class="container profile-guest">
      <button class="btn btn--primary" type="button" data-open="login">${ICONS.lock}${t('account.login')}</button>
      <button class="btn" type="button" data-open="signup">${ICONS.user}${t('auth.titleSignup')}</button>
    </div>`;
}

const bindGuest = (host: HTMLElement): void =>
  qsa<HTMLButtonElement>('[data-open]', host).forEach((b) => b.addEventListener('click', () => openAuth(b.dataset.open as 'login' | 'signup')));

/** Nachfragen im Takt, nur bei sichtbarem Tab, und sofort beim Zurückkehren in den Tab. */
function poll(run: () => void, ms: number): () => void {
  const timer = window.setInterval(() => {
    if (document.visibilityState === 'visible') run();
  }, ms);
  const onVisible = (): void => {
    if (document.visibilityState === 'visible') run();
  };
  document.addEventListener('visibilitychange', onVisible);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener('visibilitychange', onVisible);
  };
}

/** Rahmen für beide Seiten: Anmeldestatus beobachten, bei Personenwechsel neu aufbauen. */
function authPage(host: HTMLElement, title: string, member: () => () => void): () => void {
  let shownFor = '';
  let cleanup: () => void = () => {};
  const stop = onAuth((state: AuthState) => {
    const key = state.status === 'user' ? `user:${state.user.id}` : state.status;
    if (key === shownFor) return;
    shownFor = key;
    cleanup();
    cleanup = () => {};
    if (state.status === 'unknown') {
      mount(host, html`<div class="container page-head"><p class="profile-status">${t('dm.loading')}</p></div>`);
      return;
    }
    if (state.status === 'guest') {
      mount(host, guestView(title));
      bindGuest(host);
      return;
    }
    cleanup = member();
  });
  return () => {
    stop();
    cleanup();
  };
}

/* ── Übersicht ─────────────────────────────────────────────────────────── */

function conversation(c: DmConversation): Markup {
  return html`<li>
    <a class="dm-conv${c.unread ? ' is-unread' : ''}" href="${link(`/nachrichten/${c.username}`)}" ${accent(c)}>
      ${avatar(c, 'dm-avatar')}
      <span class="dm-conv__text">
        <span class="dm-conv__top">
          <strong class="dm-conv__name">${c.username}</strong>
          <time class="dm-conv__time" datetime="${c.lastAt}" title="${fullFmt.format(new Date(c.lastAt))}">${relative(c.lastAt)}</time>
        </span>
        <span class="dm-conv__last">${c.lastMine ? html`<span class="dm-conv__you">${t('dm.you')}</span> ` : ''}${c.lastBody}</span>
      </span>
      ${c.unread ? html`<span class="dm-conv__badge">${t('dm.unread', { n: formatNumber(c.unread) })}</span>` : ''}
    </a>
  </li>`;
}

const inboxSkeleton = (): Markup =>
  html`<ul class="dm-list" aria-hidden="true">
      ${[0, 1, 2].map(() => html`<li><span class="dm-conv dm-conv--skeleton"><span class="skeleton__bar skeleton__bar--title"></span><span class="skeleton__bar"></span></span></li>`)}
    </ul>
    <p class="vh" role="status">${t('dm.loading')}</p>`;

const inboxEmpty = (): Markup =>
  html`<div class="empty">
    <h3>${t('dm.empty')}</h3>
    <p>${t('dm.emptyText')}</p>
    <div class="empty__actions"><a class="btn btn--sm" href="${link('/community')}">${t('dm.toCommunity')}</a></div>
  </div>`;

export function inboxPage(): PageView {
  return {
    title: `${t('dm.title')} | Blastzone`,
    markup: html`<div class="page profile-page dm-page" data-dm></div>`,
    mount(root) {
      const host = qs<HTMLElement>('[data-dm]', root)!;
      return authPage(host, t('dm.title'), () => {
        mount(
          host,
          html`<header class="container page-head">
              <h1>${t('dm.title')}</h1>
              <p>${t('dm.lead')}</p>
            </header>
            <section class="container dm-inbox" aria-label="${t('dm.title')}"><div data-dm-list>${inboxSkeleton()}</div></section>`,
        );
        const list = qs<HTMLElement>('[data-dm-list]', host)!;
        let request = 0;
        let shown = false;

        const load = (): void => {
          const mine = ++request;
          getInbox().then(
            (conversations) => {
              if (mine !== request || !list.isConnected) return;
              shown = true;
              mount(list, conversations.length ? html`<ol class="dm-list">${conversations.map(conversation)}</ol>` : inboxEmpty());
            },
            (err: unknown) => {
              if (mine !== request || !list.isConnected) return;
              // 401 meldet guarded() ab. Beim Nachfragen bleibt eine sichtbare Liste stehen.
              if ((err instanceof ApiError && err.status === 401) || shown) return;
              mount(list, errorState(t('dm.loadError'), err instanceof ApiError ? err.message : LOAD_FAILED_TEXT));
              bindErrorState(list, load);
            },
          );
        };
        load();
        const stopPoll = poll(load, INBOX_POLL_MS);
        return () => {
          request++;
          stopPoll();
        };
      });
    },
  };
}

/* ── Verlauf ───────────────────────────────────────────────────────────── */

function messageItem(m: DmMessage, partner: string): Markup {
  return html`<li class="dm-msg${m.mine ? ' dm-msg--mine' : ''}" data-msg="${m.id}">
    <p class="dm-msg__body"><span class="vh">${m.mine ? t('dm.mine') : partner}: </span>${m.body}</p>
    <time class="dm-msg__time" datetime="${m.createdAt}" title="${fullFmt.format(new Date(m.createdAt))}">${stamp(m.createdAt)}</time>
  </li>`;
}

function threadLoading(): Markup {
  return html`<div class="container dm-head" aria-busy="true">
      <span class="dm-avatar dm-avatar--lg">${ICONS.user}</span>
      <span class="skeleton__bar skeleton__bar--title"></span>
    </div>
    <p class="vh" role="status">${t('dm.loading')}</p>`;
}

function threadMissing(title: string, text: string): Markup {
  return html`<header class="container page-head">
      <h1>${title}</h1>
      <p>${text}</p>
    </header>
    <div class="container profile-guest">
      <a class="btn" href="${link('/nachrichten')}">${ICONS.chevronLeft}${t('dm.back')}</a>
    </div>`;
}

function blockedNotice(name: string): Markup {
  return html`<div class="dm-blocked" role="note">
    <p><strong>${t('dm.cannot', { name })}</strong></p>
    <p>${t('dm.cannotText', { name })}</p>
  </div>`;
}

function threadView(partner: DmPartner, canMessage: boolean): Markup {
  const name = partner.username;
  return html`<header class="container dm-head" ${accent(partner)}>
      <a class="btn btn--sm btn--ghost dm-head__back" href="${link('/nachrichten')}">${ICONS.chevronLeft}<span>${t('dm.back')}</span></a>
      <a class="dm-head__who" href="${link(`/spieler/${name}`)}">
        ${avatar(partner, 'dm-avatar dm-avatar--lg')}
        <span class="dm-head__text">
          <h1 class="dm-head__name">${name}</h1>
          <span class="dm-head__sub">${t('dm.profile')}</span>
        </span>
      </a>
    </header>

    <section class="container dm-thread" aria-label="${t('dm.threadTitle', { name })}">
      <div class="dm-scroll" tabindex="0" data-lenis-prevent data-dm-scroll>
        <div class="dm-older" data-dm-older></div>
        <p class="dm-start" data-dm-start hidden>${t('dm.start', { name })}</p>
        <ol class="dm-messages" data-dm-messages></ol>
        <p class="dm-seen" data-dm-seen hidden></p>
      </div>
      <p class="vh" role="status" aria-live="polite" data-dm-announce></p>
      <div data-dm-compose>
        ${canMessage
          ? html`<form class="dm-compose" novalidate data-dm-form>
              <label class="vh" for="dm-input">${t('dm.label', { name })}</label>
              <textarea id="dm-input" class="input dm-compose__input" rows="1" maxlength="${MESSAGE_MAX}" placeholder="${t('dm.placeholder')}"
                autocomplete="off" aria-describedby="dm-hint dm-error" data-dm-input></textarea>
              <button class="btn btn--primary dm-compose__send" type="submit" data-dm-send>${t('dm.send')}</button>
              <p id="dm-hint" class="dm-compose__hint"><span>${t('dm.hint')}</span><span class="dm-compose__count" data-dm-count></span></p>
              <p id="dm-error" class="fcomments__error" role="alert" data-dm-error hidden></p>
            </form>`
          : blockedNotice(name)}
      </div>
    </section>`;
}

export function threadPage(route: Route): PageView {
  const name = route.params.name ?? '';
  const pageTitle = (n: string): string => `${t('dm.threadTitle', { name: n })} | Blastzone`;
  return {
    title: pageTitle(name),
    markup: html`<div class="page profile-page dm-page dm-page--thread" data-dm></div>`,
    mount(root) {
      const host = qs<HTMLElement>('[data-dm]', root)!;
      return authPage(host, t('dm.threadTitle', { name }), () => {
        let alive = true;
        let partner: DmPartner | null = null;
        /** Aufsteigend nach id, so wie angezeigt. */
        let messages: DmMessage[] = [];
        let cursor: number | null = null;
        let stopPoll: () => void = () => {};
        let pollBusy = false;

        const scroller = (): HTMLElement | null => qs<HTMLElement>('[data-dm-scroll]', host);
        const nearEnd = (): boolean => {
          const el = scroller();
          return !el || el.scrollHeight - el.scrollTop - el.clientHeight < 80;
        };
        const scrollToEnd = (): void => {
          const el = scroller();
          if (el) el.scrollTop = el.scrollHeight;
        };

        /** Nur neue Nachrichten einfügen: Ein kompletter Neuaufbau würde Markierung und Scrollstand zerstören. */
        const renderMessages = (): void => {
          const list = qs<HTMLOListElement>('[data-dm-messages]', host);
          if (!list || !partner) return;
          const who = partner.username;
          const shown = new Set(qsa<HTMLElement>('[data-msg]', list).map((li) => Number(li.dataset.msg)));
          const fresh = messages.filter((m) => !shown.has(m.id));
          if (fresh.length) {
            const tpl = document.createElement('template');
            mount(tpl, html`${fresh.map((m) => messageItem(m, who))}`);
            // Ältere Seiten stehen vor, neue hinter dem bisherigen Inhalt.
            const firstShown = Number(list.firstElementChild?.getAttribute('data-msg') ?? Infinity);
            const items = [...tpl.content.children] as HTMLElement[];
            list.prepend(...items.filter((li) => Number(li.dataset.msg) < firstShown));
            list.append(...items.filter((li) => Number(li.dataset.msg) >= firstShown));
          }
          qs<HTMLElement>('[data-dm-start]', host)!.hidden = messages.length > 0;
          const last = messages[messages.length - 1];
          const seen = qs<HTMLElement>('[data-dm-seen]', host)!;
          seen.hidden = !last?.mine;
          seen.textContent = last?.mine ? (last.read ? t('dm.read') : t('dm.sent')) : '';
        };

        /*
          * Gelesen heisst: Der Verlauf steht im sichtbaren Tab. Nicht nur die letzte
          * Nachricht zaehlt: Wer antwortet und dann neu laedt, haette sonst aeltere
          * Nachrichten fuer immer als ungelesen im Zaehler.
          */
        const markRead = (): void => {
          if (document.visibilityState !== 'visible') return;
          if (messages.some((m) => !m.mine)) void markDmRead(name).catch(() => {});
        };

        const renderOlder = (): void => {
          const slot = qs<HTMLElement>('[data-dm-older]', host);
          if (!slot) return;
          if (!cursor) {
            mount(slot, html``);
            return;
          }
          mount(slot, html`<button class="btn btn--sm btn--ghost" type="button" data-dm-more>${t('dm.older')}</button>`);
          const button = qs<HTMLButtonElement>('[data-dm-more]', slot)!;
          button.addEventListener('click', () => {
            if (!cursor) return;
            button.disabled = true;
            button.setAttribute('aria-busy', 'true');
            const el = scroller()!;
            const fromBottom = el.scrollHeight - el.scrollTop;
            getThread(name, cursor).then(
              (page) => {
                if (!alive || !el.isConnected) return;
                const known = new Set(messages.map((m) => m.id));
                messages = [...[...page.messages].reverse().filter((m) => !known.has(m.id)), ...messages];
                cursor = page.nextCursor;
                renderMessages();
                renderOlder();
                // Beim Vorne-Einfügen bleibt die gelesene Stelle stehen.
                el.scrollTop = el.scrollHeight - fromBottom;
              },
              () => {
                button.disabled = false;
                button.removeAttribute('aria-busy');
              },
            );
          });
        };

        /** Neueste Seite holen und zusammenführen: neue Nachrichten und den Lesestatus eigener. */
        const refresh = (): void => {
          if (pollBusy || !partner) return;
          pollBusy = true;
          getThread(name)
            .then(
              (thread) => {
                if (!alive || !host.isConnected) return;
                const stick = nearEnd();
                const byId = new Map(thread.messages.map((m) => [m.id, m]));
                messages = messages.map((m) => byId.get(m.id) ?? m);
                const lastId = messages[messages.length - 1]?.id ?? 0;
                const incoming = [...thread.messages].reverse().filter((m) => m.id > lastId);
                messages = [...messages, ...incoming];
                renderMessages();
                if (stick) scrollToEnd();
                if (incoming.some((m) => !m.mine)) {
                  qs<HTMLElement>('[data-dm-announce]', host)!.textContent = t('dm.newMessage', { name: thread.partner.username });
                  markRead();
                }
                if (!thread.canMessage && qs('[data-dm-form]', host)) {
                  mount(qs<HTMLElement>('[data-dm-compose]', host)!, blockedNotice(thread.partner.username));
                }
              },
              () => {
                /* Beim Nachfragen still bleiben, der nächste Takt versucht es wieder. */
              },
            )
            .finally(() => {
              pollBusy = false;
            });
        };

        const bindComposer = (): void => {
          const form = qs<HTMLFormElement>('[data-dm-form]', host);
          if (!form) return;
          const input = qs<HTMLTextAreaElement>('[data-dm-input]', form)!;
          const send = qs<HTMLButtonElement>('[data-dm-send]', form)!;
          const error = qs<HTMLElement>('[data-dm-error]', form)!;
          const count = qs<HTMLElement>('[data-dm-count]', form)!;

          const grow = (): void => {
            input.style.height = 'auto';
            input.style.height = `${Math.min(input.scrollHeight, 180)}px`;
            const n = [...input.value].length;
            count.textContent = n > MESSAGE_MAX * 0.8 ? t('dm.counter', { n: formatNumber(n), max: formatNumber(MESSAGE_MAX) }) : '';
          };
          input.addEventListener('input', () => {
            grow();
            error.hidden = true;
          });
          // Auf Touch-Geraeten gibt es kein Umschalt und Enter, dort bleibt Enter die neue Zeile, gesendet wird per Knopf.
          const enterSends = !matchMedia('(hover: none)').matches;
          input.addEventListener('keydown', (e) => {
            if (enterSends && e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
              e.preventDefault();
              form.requestSubmit();
            }
          });

          form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const text = cleanComment(input.value);
            if (!text || send.disabled) return;
            send.disabled = true;
            send.setAttribute('aria-busy', 'true');
            error.hidden = true;
            try {
              const message = await sendDm(name, text);
              if (!alive) return;
              if (!messages.some((m) => m.id === message.id)) messages = [...messages, message];
              input.value = '';
              grow();
              renderMessages();
              scrollToEnd();
              input.focus();
            } catch (err) {
              if (!alive) return;
              if (err instanceof ApiError && err.code === 'dm-not-allowed' && partner) {
                mount(qs<HTMLElement>('[data-dm-compose]', host)!, blockedNotice(partner.username));
                return;
              }
              error.hidden = false;
              error.textContent = err instanceof ApiError ? err.message : t('dm.notSent');
            } finally {
              send.disabled = false;
              send.removeAttribute('aria-busy');
            }
          });
        };

        const load = (): void => {
          mount(host, threadLoading());
          getThread(name).then(
            (thread) => {
              if (!alive || !host.isConnected) return;
              partner = thread.partner;
              messages = [...thread.messages].reverse();
              cursor = thread.nextCursor;
              document.title = pageTitle(thread.partner.username);
              mount(host, threadView(thread.partner, thread.canMessage));
              renderMessages();
              renderOlder();
              scrollToEnd();
              bindComposer();
              markRead();
              stopPoll = poll(refresh, THREAD_POLL_MS);
            },
            (err: unknown) => {
              if (!alive || !host.isConnected) return;
              if (err instanceof ApiError && err.status === 401) return;
              if (err instanceof ApiError && err.code === 'self') {
                mount(host, threadMissing(t('dm.title'), t('dm.self')));
                return;
              }
              if (err instanceof ApiError && (err.status === 404 || err.status === 400)) {
                mount(host, threadMissing(t('player.notFound'), t('player.notFoundText', { name })));
                return;
              }
              mount(host, html`<div class="container">${errorState(t('dm.threadError'), err instanceof ApiError ? err.message : LOAD_FAILED_TEXT)}</div>`);
              bindErrorState(host, load);
            },
          );
        };

        load();
        return () => {
          alive = false;
          stopPoll();
        };
      });
    },
  };
}
