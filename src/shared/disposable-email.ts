/**
 * Erkennung von Wegwerf-Adressen (Temp-Mails), geteilt von Browser und Server.
 * Keine Imports, siehe account-rules.ts.
 *
 * Drei Stufen, von billig nach teuer:
 *
 * 1. Bekannte Domains. Kuratierte Liste der verbreitetsten Anbieter und ihrer
 *    Alias-Domains. Auch Subdomains treffen (x.mailinator.com).
 * 2. Muster im Domainnamen. Viele Anbieter rotieren ihre Domains, behalten aber
 *    das Wort im Namen (tempmail-xyz.net, 10minutemail.co.uk). Geprüft wird nur
 *    auf ganze Namensteile, damit „contemporary.de“ nicht an „temp“ hängen bleibt.
 * 3. Nur auf dem Server: MX-Abfrage (api/_lib/mx.ts). Domains ohne Mailserver
 *    fliegen raus, und Mailserver bekannter Wegwerf-Dienste ebenso, auch wenn
 *    die Domain selbst neu ist.
 *
 * Bewusst KEINE externe API: Die Adresse würde sonst an einen Dritten gehen,
 * bevor der Nutzer überhaupt ein Konto hat. Die Liste pflegt man, wenn Trolle
 * durchrutschen, zusätzlich hält die Tabelle `blocked_email_domains` in der
 * Datenbank dieselbe Sperre (siehe supabase/migrations).
 */

export const DISPOSABLE_DOMAINS: ReadonlySet<string> = new Set([
  '10minutemail.com', '10minutemail.net', '10minutemail.co.uk', '10minutemail.de', '10minemail.com',
  '20minutemail.com', '30minutemail.com', '33mail.com',
  'anonbox.net', 'anonymbox.com', 'armyspy.com',
  'binkmail.com', 'bobmail.info', 'boximail.com', 'burnermail.io',
  'cuvox.de', 'dayrep.com', 'deadaddress.com', 'despam.it', 'discard.email', 'discardmail.com', 'discardmail.de',
  'dispostable.com', 'dropmail.me', 'dodgit.com', 'dudmail.com',
  'einrot.com', 'emailfake.com', 'emailondeck.com', 'emailtemporanea.net', 'emltmp.com', 'email-temp.com',
  'fakeinbox.com', 'fakemail.net', 'fakemailgenerator.com', 'fastacura.com', 'filzmail.com', 'fleckens.hu', 'flymail.tk',
  'getairmail.com', 'getnada.com', 'gishpuppy.com', 'grr.la', 'guerrillamail.biz', 'guerrillamail.com', 'guerrillamail.de',
  'guerrillamail.info', 'guerrillamail.net', 'guerrillamail.org', 'guerrillamailblock.com', 'gustr.com',
  'harakirimail.com', 'hmamail.com', 'hulapla.de',
  'inboxbear.com', 'incognitomail.org', 'instaddr.ch', 'jetable.org', 'jourrapide.com',
  'kasmail.com', 'klzlk.com', 'kurzepost.de',
  'mail-temp.com', 'mail.tm', 'mail7.io', 'maildrop.cc', 'mailcatch.com', 'maildax.com', 'mailde.de', 'mailde.info',
  'maileater.com', 'mailexpire.com', 'mailforspam.com', 'mailimate.com', 'mailinator.com', 'mailinator.net',
  'mailinator.org', 'mailinator2.com', 'mailmetrash.com', 'mailnesia.com', 'mailnull.com', 'mailpoof.com',
  'mailsac.com', 'mailtemp.info', 'mailtothis.com', 'mintemail.com', 'moakt.com', 'mohmal.com', 'mt2015.com',
  'mvrht.com', 'mytemp.email', 'mytrashmail.com',
  'nada.email', 'nospam.ze.tc', 'nwldx.com',
  'one-time.email', 'oneoffemail.com', 'owlymail.com',
  'pokemail.net', 'proxymail.eu',
  'rcpt.at', 'rhyta.com', 'rootfest.net',
  'sharklasers.com', 'shieldemail.com', 'sofort-mail.de', 'spam4.me', 'spamavert.com', 'spambog.com', 'spambog.de',
  'spambox.us', 'spamdecoy.net', 'spamex.com', 'spamfree24.org', 'spamgourmet.com', 'spamhole.com', 'spaml.de',
  'spammotel.com', 'spamspot.com', 'superrito.com',
  'teleworm.us', 'temp-mail.io', 'temp-mail.org', 'temp-mail.ru', 'tempail.com', 'tempemail.net', 'tempinbox.com',
  'tempmail.com', 'tempmail.de', 'tempmail.net', 'tempmail.plus', 'tempmailo.com', 'tempmailaddress.com',
  'tempr.email', 'temporary-mail.net', 'temporarymail.com', 'thrott.com', 'throwam.com', 'throwawaymail.com',
  'tmail.ws', 'tmailor.com', 'tmpmail.net', 'tmpmail.org', 'trash-mail.com', 'trash-mail.de', 'trashmail.at',
  'trashmail.com', 'trashmail.de', 'trashmail.io', 'trashmail.me', 'trashmail.net', 'trashmail.ws', 'trbvm.com',
  'wegwerfadresse.de', 'wegwerfemail.de', 'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org', 'wh4f.org',
  'yopmail.com', 'yopmail.fr', 'yopmail.net', 'cool.fr.nf', 'jetable.fr.nf', 'courriel.fr.nf', 'moncourrier.fr.nf',
  'zetmail.com', 'zippymail.info',
]);

/**
 * Wortteile, die in Domainnamen fast nur bei Wegwerf-Diensten vorkommen.
 * Verglichen wird mit den Namensteilen der Domain (an Punkt und Bindestrich
 * getrennt) und mit dem zusammengeschriebenen Namen ohne Endung, damit sowohl
 * „temp-mail.org“ als auch „tempmailo.com“ treffen.
 */
const MUSTER: readonly RegExp[] = [
  /^\d*minutes?mail/,
  /^temp(orary)?(e?mail|inbox|addr)/,
  /^trash(e?mail|box)/,
  /^throw(away|am)/,
  /^disposable/,
  /^(fake|burner|spam|junk)(e?mail|inbox|box)/,
  /^wegwerf/,
  /^guerrill?amail/,
  /^mailinator/,
  /^yopmail/,
  /^maildrop/,
  /^mailnesia/,
  /^sharklasers/,
];

/** Domain-Teil einer bereits normalisierten Adresse. */
export const domainOf = (email: string): string => email.slice(email.lastIndexOf('@') + 1).toLowerCase();

export function isDisposableDomain(domain: string): boolean {
  const d = domain.toLowerCase().replace(/\.$/, '');
  const teile = d.split('.');

  // Stufe 1: exakte Domain oder eine ihrer Elterndomains (a.b.mailinator.com).
  for (let i = 0; i < teile.length - 1; i++) {
    if (DISPOSABLE_DOMAINS.has(teile.slice(i).join('.'))) return true;
  }

  // Stufe 2: Namensmuster. Die Endung (letzter Teil) spielt keine Rolle.
  const ohneEndung = teile.slice(0, -1);
  const kandidaten = [...ohneEndung.flatMap((t) => t.split('-')), ohneEndung.join(''), ohneEndung.join('').replace(/-/g, '')];
  return kandidaten.some((k) => MUSTER.some((m) => m.test(k)));
}

export const isDisposableEmail = (email: string): boolean => isDisposableDomain(domainOf(email));

/**
 * Teile von MX-Hostnamen bekannter Wegwerf-Dienste. Trifft auch frische
 * Domains, die ein solcher Dienst gerade erst angelegt hat.
 */
export const DISPOSABLE_MX_HINTS: readonly string[] = [
  'mailinator', 'guerrillamail', 'yopmail', 'mail.tm', 'temp-mail', 'tempmail', 'trashmail', 'maildrop',
  'mailnesia', 'sharklasers', 'dropmail', 'emailfake', 'mohmal', 'mailsac', '10minutemail', 'getnada',
];
