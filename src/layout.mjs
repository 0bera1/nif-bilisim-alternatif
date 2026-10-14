import { SITE } from './config.mjs';
import { icon } from './icons.mjs';
import { img } from './images.mjs';
import { SERVICES } from './content/services.mjs';

export const YEAR = new Date().getFullYear();

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const abs = (path) => SITE.url + path;
const ext = 'target="_blank" rel="noopener"';

/* ───────────────────────────── JSON-LD ───────────────────────────── */

export function localBusinessLd() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#firma`,
    name: SITE.name,
    url: SITE.url + '/',
    logo: abs('/assets/img/logo-250.webp'),
    image: abs('/assets/og-image.png'),
    description: SITE.description,
    slogan: 'Doğru çözümler – Mutlu müşteriler',
    telephone: SITE.phones[0].e164,
    faxNumber: SITE.phones[0].e164,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.district,
      addressRegion: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    contactPoint: SITE.phones.map((p) => ({
      '@type': 'ContactPoint',
      telephone: p.e164,
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    })),
    areaServed: SITE.areaServed.map((n) => ({ '@type': n === 'İzmir' ? 'City' : 'Place', name: n === 'İzmir' ? 'İzmir' : `${n}, İzmir` })),
    sameAs: SITE.social.map((s) => s.href),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hizmetler',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.longTitle || s.title, url: abs(`/hizmetler/${s.slug}/`) },
      })),
    },
  };
  if (SITE.hours) ld.openingHours = SITE.hours.map((h) => `${h.days} ${h.time}`);
  return ld;
}

export function breadcrumbLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.href) })),
  };
}

export function faqLd(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/* ───────────────────────────── HEAD ───────────────────────────── */

function head({ title, description, path, keywords, jsonld = [], noindex = false }) {
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`;
  const ld = [localBusinessLd(), ...jsonld].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${keywords ? `<meta name="keywords" content="${esc(keywords)}">` : ''}
${noindex ? '<meta name="robots" content="noindex, follow">' : ''}
<link rel="canonical" href="${abs(path)}">
<meta name="theme-color" content="#0b1b2e">
<meta name="color-scheme" content="light dark">
<meta property="og:type" content="website">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(path)}">
<meta property="og:image" content="${abs('/assets/og-image.png')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="NİF Bilişim – Doğru çözümler, mutlu müşteriler">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@nifbil">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/assets/favicon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap">
<link rel="stylesheet" href="/assets/css/style.css?v=${BUILD_ID}">
<script>/* tema: FOUC önleme */try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js')</script>
<script src="/assets/js/main.js?v=${BUILD_ID}" defer></script>
${ld}
</head>`;
}

export const BUILD_ID = Date.now().toString(36);

/* ───────────────────────────── HEADER ───────────────────────────── */

const NAV = [
  { href: '/hakkimizda/', label: 'Firmamız' },
  { href: '/hizmetler/', label: 'Hizmetler', sub: true },
  { href: '/urunler/', label: 'Ürünler' },
  { href: '/iletisim/', label: 'İletişim' },
];

function header(path) {
  const cur = (href) => (path === href ? ' aria-current="page"' : path.startsWith(href) && href !== '/' ? ' class="is-active"' : '');
  const items = NAV.map((n) => {
    if (!n.sub) return `<li><a href="${n.href}"${cur(n.href)}>${n.label}</a></li>`;
    const sub = SERVICES.map(
      (s) => `<li><a href="/hizmetler/${s.slug}/"${cur(`/hizmetler/${s.slug}/`)}>
        <span class="submenu-icon">${icon(s.icon)}</span>
        <span><strong>${s.title}</strong><small>${s.summary}</small></span></a></li>`
    ).join('');
    return `<li class="has-sub">
      <div class="nav-row"><a href="${n.href}"${cur(n.href)}>${n.label}</a>
      <button type="button" class="sub-toggle" aria-expanded="false" aria-controls="sub-hizmetler"><span class="sr-only">Hizmetler alt menüsünü aç</span>${icon('chevron-down')}</button></div>
      <div class="submenu" id="sub-hizmetler"><ul>${sub}
        <li class="submenu-all"><a href="/hizmetler/">Tüm hizmetler ${icon('arrow-right')}</a></li></ul></div>
    </li>`;
  }).join('');

  return `<a class="skip-link" href="#icerik">İçeriğe geç</a>
<header class="site-header" data-header>
  <div class="container header-inner">
    <a class="brand" href="/" aria-label="${SITE.name} – Anasayfa">${img('logo', SITE.name, { eager: true, width: 180, height: 44, cls: 'brand-logo' })}</a>
    <nav class="main-nav" id="main-nav" aria-label="Ana menü">
      <ul class="nav-list">${items}
        <li class="nav-mobile-extra">
          <a class="btn btn-accent btn-block" href="/hizmet-talebi/">${icon('badge-check')} Ücretsiz Keşif Talep Et</a>
          <a class="btn btn-outline btn-block" href="${SITE.shop}" ${ext}>${icon('store')} Online Mağaza</a>
          <a class="nav-phone" href="${SITE.phones[1].href}">${icon('phone')} ${SITE.phones[1].display}</a>
        </li>
      </ul>
    </nav>
    <div class="header-actions">
      <a class="header-link header-phone" href="${SITE.phones[0].href}">${icon('phone')}<span>${SITE.phones[0].display}</span></a>
      <a class="header-link header-shop" href="${SITE.shop}" ${ext}>${icon('store')}<span>Mağaza</span></a>
      <button type="button" class="icon-btn theme-toggle" data-theme-toggle aria-label="Koyu / açık tema">${icon('moon', 'icon icon-moon')}${icon('sun', 'icon icon-sun')}</button>
      <a class="btn btn-accent btn-sm header-cta" href="/hizmet-talebi/">Ücretsiz Keşif</a>
      <button type="button" class="icon-btn nav-toggle" aria-controls="main-nav" aria-expanded="false" aria-label="Menüyü aç">${icon('menu', 'icon icon-menu')}${icon('x', 'icon icon-close')}</button>
    </div>
  </div>
</header>`;
}

/* ───────────────────────────── FOOTER ───────────────────────────── */

export function contactList({ withHours = true } = {}) {
  const hours = SITE.hours
    ? SITE.hours.map((h) => `${h.days}: ${h.time}`).join('<br>')
    : 'Çalışma saatlerimiz için lütfen arayın.';
  return `<ul class="contact-list">
    <li>${icon('map-pin')}<span>${SITE.address.display}</span></li>
    <li>${icon('phone')}<span><span class="contact-label">${SITE.phones[0].label}:</span> <a href="${SITE.phones[0].href}">${SITE.phones[0].display}</a></span></li>
    <li>${icon('smartphone')}<span><span class="contact-label">${SITE.phones[1].label}:</span> <a href="${SITE.phones[1].href}">${SITE.phones[1].display}</a></span></li>
    <li>${icon('mail')}<span><a href="mailto:${SITE.email}">${SITE.email}</a></span></li>
    ${withHours ? `<li>${icon('clock')}<span>${hours}</span></li>` : ''}
  </ul>`;
}

export function socialLinks(cls = 'social') {
  return `<ul class="${cls}">${SITE.social
    .map((s) => `<li><a href="${s.href}" ${ext} aria-label="${s.name}">${icon(s.icon)}</a></li>`)
    .join('')}</ul>`;
}

function footer() {
  const credit = SITE.credit.href
    ? `<a href="${SITE.credit.href}" ${ext}>${SITE.credit.text}</a>`
    : SITE.credit.text;
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a href="/" class="footer-logo" aria-label="${SITE.name} – Anasayfa">${img('logo-footer', SITE.name, { width: 176, height: 48 })}</a>
      <p>NİF Bilişim olarak taleplerinize en kaliteli çözümleri sunuyoruz. Bilişim sektörünün lider markalarıyla çalışan firmamız geçici değil, sürekli kazanımı planlıyor ve bunun mutlu, memnun müşteriyle gerçekleşeceğine inanıyor.</p>
      ${socialLinks()}
    </div>
    <nav aria-label="Kurumsal">
      <h2 class="footer-title">Kurumsal</h2>
      <ul class="footer-links">
        <li><a href="/hakkimizda/">Firmamız</a></li>
        <li><a href="/hizmetler/">Hizmetlerimiz</a></li>
        <li><a href="/urunler/">Ürünler</a></li>
        <li><a href="${SITE.shop}" ${ext}>Online Mağaza</a></li>
        <li><a href="/hizmet-talebi/">Hizmet Talebi</a></li>
        <li><a href="/iletisim/">İletişim</a></li>
      </ul>
    </nav>
    <nav aria-label="Hizmetler">
      <h2 class="footer-title">Hizmetler</h2>
      <ul class="footer-links">${SERVICES.map((s) => `<li><a href="/hizmetler/${s.slug}/">${s.title}</a></li>`).join('')}</ul>
    </nav>
    <div>
      <h2 class="footer-title">İletişim</h2>
      ${contactList()}
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p>© ${YEAR} ${SITE.name}. Tüm hakları saklıdır. <span class="dot" aria-hidden="true">·</span> <a href="/kvkk/">KVKK Aydınlatma Metni</a></p>
      <p class="credit">${credit}</p>
    </div>
  </div>
</footer>
<div class="mobile-cta" role="region" aria-label="Hızlı iletişim">
  <a href="${SITE.phones[1].href}" class="mobile-cta-call">${icon('phone')}<span>Ara</span></a>
  <a href="https://wa.me/${SITE.whatsapp}" class="mobile-cta-wa" ${ext}>${icon('whatsapp')}<span>WhatsApp</span></a>
  <a href="/hizmet-talebi/" class="mobile-cta-req">${icon('badge-check')}<span>Keşif İste</span></a>
</div>`;
}

/* ───────────────────────────── SAYFA ───────────────────────────── */

export function page(opts) {
  return `<!doctype html>
<html lang="tr">
${head(opts)}
<body${opts.bodyClass ? ` class="${opts.bodyClass}"` : ''}>
${header(opts.path)}
<main id="icerik" tabindex="-1">
${opts.body}
</main>
${footer()}
</body>
</html>
`;
}

/* ───────────────────────────── BİLEŞENLER ───────────────────────────── */

export function breadcrumbs(crumbs) {
  return `<nav class="breadcrumbs" aria-label="Sayfa yolu"><ol>${crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<li><span aria-current="page">${c.name}</span></li>`
        : `<li><a href="${c.href}">${c.name}</a>${icon('chevron-right')}</li>`
    )
    .join('')}</ol></nav>`;
}

export function pageHero({ crumbs, eyebrow, title, lead, actions = '', iconName, aside = '' }) {
  return `<section class="page-hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="container page-hero-inner${aside ? ' has-aside' : ''}">
    <div class="page-hero-text">
      ${crumbs ? breadcrumbs(crumbs) : ''}
      ${eyebrow ? `<p class="eyebrow">${iconName ? icon(iconName) : ''}${eyebrow}</p>` : ''}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
      ${actions ? `<div class="hero-actions">${actions}</div>` : ''}
    </div>
    ${aside}
  </div>
</section>`;
}

export function sectionHead({ eyebrow, title, text, center = false, id }) {
  return `<div class="section-head${center ? ' is-center' : ''}">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h2${id ? ` id="${id}"` : ''}>${title}</h2>
    ${text ? `<p>${text}</p>` : ''}
  </div>`;
}

export function serviceCard(s) {
  return `<article class="card service-card reveal">
    <div class="card-icon">${icon(s.icon)}</div>
    <h3><a href="/hizmetler/${s.slug}/" class="stretched">${s.title}</a></h3>
    <p>${s.summary}</p>
    <ul class="chips">${s.chips.map((c) => `<li>${c}</li>`).join('')}</ul>
    <span class="card-link" aria-hidden="true">İncele ${icon('arrow-right')}</span>
  </article>`;
}

export function processSteps(steps, { title = 'Nasıl çalışıyoruz?', eyebrow = 'Süreç', text } = {}) {
  return `<section class="section process-section" aria-labelledby="surec-baslik">
  <div class="container">
    ${sectionHead({ eyebrow, title, text, center: true, id: 'surec-baslik' })}
    <ol class="process steps-${steps.length}">${steps
      .map(
        (s, i) => `<li class="process-step reveal" style="--d:${i * 70}ms">
        <div class="process-num"><span>${String(i + 1).padStart(2, '0')}</span>${icon(s.icon)}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </li>`
      )
      .join('')}</ol>
  </div>
</section>`;
}

export function faqSection(faq) {
  return `<section class="section section-alt" aria-labelledby="sss-baslik">
  <div class="container container-narrow">
    ${sectionHead({ eyebrow: 'SSS', title: 'Sıkça sorulan sorular', center: true, id: 'sss-baslik' })}
    <div class="faq">${faq
      .map(
        (f) => `<details class="faq-item reveal">
        <summary><h3>${f.q}</h3><span class="faq-icon">${icon('plus')}</span></summary>
        <div class="faq-body"><p>${f.a}</p></div>
      </details>`
      )
      .join('')}</div>
  </div>
</section>`;
}

export function ctaBand({ title, text, primary = { href: '/hizmet-talebi/', label: 'Talepte Bulunun' } }) {
  return `<section class="section cta-section">
  <div class="container">
    <div class="cta-band reveal">
      <div class="cta-band-text">
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <div class="cta-band-actions">
        <a class="btn btn-accent btn-lg" href="${primary.href}">${primary.label} ${icon('arrow-right')}</a>
        <a class="btn btn-on-dark btn-lg" href="${SITE.phones[0].href}">${icon('phone')} ${SITE.phones[0].display}</a>
      </div>
    </div>
  </div>
</section>`;
}

export { icon, img, SITE, ext };
