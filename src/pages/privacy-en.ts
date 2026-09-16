import { languageUrl } from '../i18n';
import { html, type Markup } from '../lib/dom';
import { link } from '../lib/router';
import { OPERATOR, operatorAddress } from './imprint';

/**
 * Englische Übersetzung der Datenschutzerklärung. Maßgeblich ist die deutsche
 * Fassung (germanMarkup in privacy.ts). Nur bei englischer Seite nachgeladen,
 * damit deutsche Besucher die 12 KB nicht mitladen. Inhaltliche Änderungen
 * immer in beiden Fassungen.
 */
export function englishSections(): Markup {
  return html`<section class="container page-head">
        <h1>Privacy Policy</h1>
        <p>
          Blastzone is a private fan project without any analytics or tracking services. If you only read the site,
          you get no cookies. If you create an account, you share a few details for it. This page explains exactly what
          is processed.
        </p>
        <p class="legal__lang">
          This is a translation. The <a href="${languageUrl('de')}" hreflang="de">German version</a> is legally
          binding.
        </p>
      </section>

      <section class="container legal__body">
        <h2>Controller</h2>
        <p>Responsible for processing personal data on this site (Art. 4(7) GDPR):</p>
        ${operatorAddress()}
        <p>
          Email: <a href="mailto:${OPERATOR.email}">${OPERATOR.email}</a>. An email to this address is all it takes to
          request access to, correction of or deletion of your data.
        </p>

        <h2>Hosting and server logs</h2>
        <p>
          The site is hosted by Vercel Inc. (USA). When the site is accessed, Vercel processes technically necessary
          connection data in server logs: IP address, time of the request, requested address, amount of data
          transferred, browser and operating system identifiers and the previously visited page. A website cannot be
          delivered without this processing.
        </p>
        <p>
          The legal basis is Art. 6(1)(f) GDPR, the legitimate interest in operating the service securely and reliably.
          Vercel acts as a processor under Art. 28 GDPR. For transfers to the USA, Vercel relies on standard
          contractual clauses. Details and retention periods follow Vercel’s own privacy information.
        </p>
        <p>
          If something crashes in the browser, the site sends a short error report to its own server: the error
          message, the visited page without parameters, the browser identifier and the version of the site. Email
          addresses and strings that look like access keys are redacted. The report contains no user ID and only ends
          up in the server logs mentioned above. The purpose is to find errors that only occur on other people’s
          devices. The legal basis is also Art. 6(1)(f) GDPR.
        </p>

        <h2>No tracking, cookies only with an account</h2>
        <p>
          There is no audience measurement, no analytics tooling and no advertising network. The site stores nothing in
          the browser’s local storage.
        </p>
        <p>
          Cookies are only set once you log in: two session cookies (<code>bz_at</code> and <code>bz_rt</code>) that
          keep you logged in. They cannot be read by JavaScript, are only sent to this site’s own API and never to third
          parties. <code>bz_at</code> expires after about one hour, <code>bz_rt</code> after 30 days. Both are deleted
          when you log out. Only during a verification through start.gg are two short-lived cookies added; see the
          start.gg section below. Because logging in cannot work without them, no consent is required for them
          (Section 25(2) no. 2 TDDDG, the German Telecommunications Digital Services Data Protection Act) and there is
          no cookie banner.
        </p>

        <h2>Accounts, comments and saved combos</h2>
        <p>
          For an account we store your email address, a username and your password, the latter only as a hash and
          never in plain text. On top of that comes what you create yourself: your main fighter, your color scheme,
          saved combos and comments, each with a timestamp. The legal basis is Art. 6(1)(b) GDPR, providing the
          account you create.
        </p>
        <p>
          <strong>Comments are public.</strong> Every visitor sees them together with your username, your main fighter
          and the time. Nobody but you sees your email address and saved combos.
        </p>
        <p>
          <strong>Player profiles are only visible to logged-in members.</strong> Logged-in members can click your name
          and see a profile page with your username, main fighter, your secondaries (if chosen), the month you signed
          up, the number of your comments and your latest comments. Your email address, saved combos and your start.gg
          link do not appear there.
        </p>
        <p>
          <strong>You only appear in the community directory if you turn it on yourself.</strong> You are then listed
          under <code>#/community</code> with your username, main, secondaries and the month you signed up, again only
          for logged-in members. You can turn it off in your profile at any time and disappear from the list
          immediately. Secondaries and the directory setting are stored at Supabase and deleted together with the
          account. The legal basis for the player profile and the directory is Art. 6(1)(b) GDPR, the community
          features of the account.
        </p>
        <p>
          The data is stored by Supabase Inc. as a processor under Art. 28 GDPR in a data center in the EU (Frankfurt am
          Main). Supabase also sends the email you use to confirm your address. The account can only be used after this
          confirmation (double opt-in).
        </p>
        <p>
          To prevent abuse, we check at sign-up whether your address’s domain can receive email and does not belong to a
          disposable email service. Only the domain (for example <code>gmail.com</code>) is looked up via DNS, not the
          full address. To prevent password guessing, we count login attempts per IP address. A hash is stored for this
          instead of the address itself, and the counter is gone after 24 hours at the latest. The legal basis is
          Art. 6(1)(f) GDPR, the legitimate interest in secure operation. If this counter runs on the Upstash service
          (Upstash Inc.), Upstash acts as a processor for it.
        </p>
        <p>
          You can delete your account yourself in your profile at any time. Account, profile, comments and saved combos
          are removed immediately and completely.
        </p>

        <h2>Linking start.gg</h2>
        <p>
          In your profile you can optionally link your profile on the tournament platform start.gg. We then store the
          address of that profile (for example <code>user/1a2b3c4d</code>), the player name shown there and the time.
          When linking, our server asks start.gg whether the profile exists. This request is made by the server, not by
          your browser; start.gg only learns the profile address, neither your IP address nor your Blastzone account.
        </p>
        <p>
          If you choose “Log in with start.gg” or “Verify with start.gg”, the site redirects you to start.gg. There you
          log in to start.gg yourself; we never see your start.gg password. start.gg sends you back with a one-time code,
          which our server exchanges for an access token. With this token the server asks exactly once which start.gg
          account is logged in (scope <code>user.identity</code>: account ID, profile address, player name). We do not
          store the token; it is discarded immediately. In addition, we only store the start.gg account ID, the time of
          verification and a checksum created by our server. For the duration of the login, the site sets two
          technically necessary cookies (<code>bz_sg_state</code> and <code>bz_sg_result</code>), which are valid for
          at most ten minutes and are deleted afterward or once the process completes. How start.gg handles your data
          during the login is governed by its own privacy policy.
        </p>
        <p>
          For the “My tournaments” list, our server asks start.gg for your public results in Super Smash Bros. Ultimate
          tournaments: tournament name, event, date, location or online, your placement and the number of entrants. So
          that start.gg is not asked on every visit, we cache this result at Supabase for up to 24 hours. Your browser
          loads the tournament logo directly from start.gg (<code>images.start.gg</code>) when displaying it; like any
          visited site, start.gg sees your IP address in the process.
        </p>
        <p>
          Only you can see the link and the cached results. They are not part of your public profile and do not appear
          next to your comments. The legal basis is Art. 6(1)(b) GDPR, a feature you turn on yourself. You can remove
          the link in your profile at any time; the link and the cached results are then deleted immediately, as they
          are when you delete your account.
        </p>

        <h2>Fonts</h2>
        <p>
          The Archivo typeface used here is hosted on the same server as the site and loaded from there. There is
          <strong>no</strong> connection to Google Fonts or any other font service; opening the site sends no request
          to third parties.
        </p>

        <h2>Guide videos from YouTube</h2>
        <p>
          Each fighter page embeds a guide video. Until you click it, only a preview from our own data is shown, and
          <strong>no</strong> connection to YouTube is made.
        </p>
        <p>
          Only when you click the video does the player load from <code>youtube-nocookie.com</code>. From that moment
          on, Google Ireland Limited processes your IP address and device information; for logged-in users, Google may
          link the request to their account. The click is your consent within the meaning of Art. 6(1)(a) GDPR, and you
          can withdraw it at any time by not starting the video. A notice right at the player explains what the consent
          covers.
        </p>

        <h2>Hitbox visualizations</h2>
        <p>
          Many moves have a hitbox visualization from Ultimate Frame Data. It is <strong>not</strong> loaded when the
          page opens: at first only a notice from our own data is shown.
        </p>
        <p>
          Only when you click it is the image requested from <code>ultimateframedata.com</code>. The server there
          learns your IP address and device information. The click is your consent under Art. 6(1)(a) GDPR; if you do
          not click, no connection is made.
        </p>

        <h2>Links to other sites</h2>
        <p>
          Every combo links its source (including SmashWiki, Game8, Ultimate Frame Data and EventHubs). These links are
          only opened when you click them. The operators of the target sites are responsible for any data processing
          there.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of
          processing (Art. 18), data portability (Art. 20) and objection (Art. 21) toward the controller. Regardless of
          this, you have the right to lodge a complaint with a data protection supervisory authority, Art. 77 GDPR.
        </p>
        <p>
          With an account, you can see your stored data in your profile and delete it yourself there. Without an
          account, no data is processed apart from the server logs, which as a rule cannot be attributed to a person.
        </p>

        <h2>Effective date</h2>
        <p>This policy applies as of September 15, 2026.</p>

        <p><a href="${link('/impressum')}">Legal notice</a></p>

        <p><a class="btn btn--ghost" href="${link('/')}">Back to home</a></p>
      </section>`;
}
