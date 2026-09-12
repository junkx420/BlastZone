import type { FighterVideo } from '../data/videos';
import { html, qs, type Markup } from '../lib/dom';
import { ICONS } from './icons';

/**
 * Guide-Video als Klick-zum-Laden-Fassade.
 *
 * Die Seite lädt seit dem Selbst-Hosten der Bilder ohne einen einzigen Request an
 * Dritte. Ein direkt eingebettetes iframe würde das pro Profilseite aufgeben – und
 * jeden Besucher ungefragt bei YouTube anmelden. Stattdessen steht hier zunächst nur
 * ein Button; das iframe entsteht erst beim Klick, dann mit `youtube-nocookie.com`.
 */
export function videoSection(video: FighterVideo, fighterName: string): Markup {
  return html`<section class="container fvideo" aria-labelledby="video-title">
    <div class="section-head">
      <h2 id="video-title" data-reveal="wipe">Guide-Video</h2>
      <p>
        ${video.creator ? `${fighterName} erklärt von ${video.creator}.` : `Ein Guide zu ${fighterName}.`}
        Der Player lädt erst beim Start – vorher geht keine Anfrage an YouTube.
      </p>
    </div>
    <div class="vplayer" data-video="${video.id}" data-video-title="${video.title}" data-reveal>
      <button class="vplayer__start" type="button" data-video-start>
        <span class="vplayer__play" aria-hidden="true">${ICONS.play}</span>
        <span class="vplayer__meta">
          <span class="vplayer__title">${video.title}</span>
          ${video.creator ? html`<span class="vplayer__creator">${video.creator}</span>` : ''}
        </span>
        <span class="vh">Video abspielen. Dabei wird YouTube geladen.</span>
      </button>
    </div>
    <p class="fvideo__link">
      <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">Stattdessen auf YouTube öffnen${ICONS.external}</a>
    </p>
  </section>`;
}

/** Tauscht die Fassade beim Klick gegen das echte iframe. */
export function wireVideo(root: HTMLElement): () => void {
  const host = qs<HTMLElement>('[data-video]', root);
  const button = host && qs<HTMLButtonElement>('[data-video-start]', host);
  if (!host || !button) return () => {};

  const start = (): void => {
    const { video: id, videoTitle } = host.dataset;
    if (!id) return;
    const frame = document.createElement('iframe');
    // nocookie + autoplay: Der Klick war die Zustimmung, also soll er auch starten.
    frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    frame.title = videoTitle ?? 'Guide-Video';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    frame.loading = 'lazy';
    frame.className = 'vplayer__frame';
    host.replaceChildren(frame);
    host.classList.add('is-playing');
  };

  button.addEventListener('click', start);
  return () => button.removeEventListener('click', start);
}
