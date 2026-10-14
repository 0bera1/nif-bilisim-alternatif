import {
  page, pageHero, sectionHead, serviceCard, processSteps, faqSection, ctaBand, breadcrumbLd, faqLd,
  contactList, socialLinks, icon, img, SITE, ext, esc,
} from './layout.mjs';
import { SERVICES, EXTRA_SERVICES, PROCESS, REQUEST_OPTIONS } from './content/services.mjs';
import { BRANDS } from './images.mjs';
import { PRODUCT_CATEGORIES, SHOP_BRANDS } from './content/products.mjs';

const HOME = { name: 'Anasayfa', href: '/' };
const btnKesif = (label = 'Ücretsiz Keşif Talep Et') => `<a class="btn btn-accent btn-lg" href="/hizmet-talebi/">${label} ${icon('arrow-right')}</a>`;
const btnCall = (cls = 'btn-on-dark') => `<a class="btn ${cls} btn-lg" href="${SITE.phones[0].href}">${icon('phone')} Hemen Arayın</a>`;

/* ═══════════════════════════════ ANASAYFA ═══════════════════════════════ */

function brandMarquee() {
  const list = (hidden) =>
    `<ul class="marquee-list"${hidden ? ' aria-hidden="true"' : ''}>${BRANDS.map(
      (b) => `<li><img src="/assets/img/brands/${b.slug}.webp" width="150" height="100" alt="${hidden ? '' : b.name}" loading="lazy" decoding="async"></li>`
    ).join('')}</ul>`;
  return `<div class="marquee" data-marquee>
    <div class="marquee-track">${list(false)}${list(true)}</div>
  </div>`;
}

export function home() {
  const tiles = SERVICES.map(
    (s, i) => `<li class="hv-tile" style="--i:${i}"><span>${icon(s.icon)}</span>${s.title.replace(' – Personel Takip', '')}</li>`
  ).join('');

  const body = `
<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div class="hero-text">
      <p class="eyebrow">${icon('map-pin')}İzmir · Torbalı — anahtar teslim BT çözümleri</p>
      <h1>Doğru çözümler, <span class="text-grad">mutlu müşteriler</span></h1>
      <p class="lead">Sistem odası ve network altyapısı, bilgisayar ve sunucu kurulumları, güvenlik sistemleri, personel ve otopark kontrol sistemleri, web ve grafik tasarım… İşletmeniz için gereken tüm çözümler tek çatı altında.</p>
      <div class="hero-actions">
        ${btnKesif()}
        <a class="btn btn-on-dark btn-lg" href="/hizmetler/">Hizmetlerimiz</a>
      </div>
      <p class="hero-note">${icon('phone')} Hemen bilgi almak için: <a href="${SITE.phones[0].href}">${SITE.phones[0].display}</a></p>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="hv-card">
        <p class="hv-title">Tek çatı altında</p>
        <ul class="hv-grid">${tiles}</ul>
      </div>
      <div class="hv-badge hv-badge-1">${icon('badge-check')}<span><strong>Ücretsiz keşif</strong>Yerinde ihtiyaç analizi</span></div>
      <div class="hv-badge hv-badge-2">${icon('headset')}<span><strong>7×24 BT desteği</strong>BT kadrosu olmayan işletmelere</span></div>
    </div>
  </div>
</section>

<section class="trust" aria-label="Neden NİF Bilişim">
  <div class="container">
    <ul class="trust-list">
      <li class="reveal">${icon('key-round')}<div><strong>Anahtar teslim</strong><span>Tedarikten kuruluma tek muhatap</span></div></li>
      <li class="reveal" style="--d:70ms">${icon('badge-check')}<div><strong>Ücretsiz keşif</strong><span>Yerinde, ücretsiz ihtiyaç tespiti</span></div></li>
      <li class="reveal" style="--d:140ms">${icon('headset')}<div><strong>7×24 BT desteği</strong><span>Masraflarınızı minimuma indiriyoruz</span></div></li>
      <li class="reveal" style="--d:210ms">${icon('layers')}<div><strong>Geniş marka yelpazesi</strong><span>Lider markaların bayiliği</span></div></li>
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="hizmetler-baslik">
  <div class="container">
    ${sectionHead({
      eyebrow: 'Hizmetlerimiz',
      title: 'İşletmenizin tüm BT ihtiyaçlarında anahtar teslim projeler',
      text: 'Keşiften kuruluma, kurulumdan desteğe kadar her adımda yanınızdayız.',
      id: 'hizmetler-baslik',
    })}
    <div class="grid grid-3">${SERVICES.map(serviceCard).join('')}</div>
    <p class="section-more"><a class="link-arrow" href="/hizmetler/">Ortam denetleyiciler, grafik tasarım ve digital signage dahil tüm hizmetler ${icon('arrow-right')}</a></p>
  </div>
</section>

<section class="section section-alt" aria-labelledby="neden-baslik">
  <div class="container split">
    <div class="split-text reveal">
      <p class="eyebrow">Neden NİF Bilişim?</p>
      <h2 id="neden-baslik">Teknoloji ortağınız olarak, işinize odaklanmanızı sağlıyoruz</h2>
      <p>Bilişim sektörünün lider ürün markalarıyla çözümler sunuyoruz. Geçici değil, sürekli kazanımı planlıyor ve bunun mutlu, memnun müşteriyle gerçekleşeceğine inanıyoruz.</p>
      <p>İhtiyaçlarınızı belirleyip size en uygun çözümlerimizi sunmamızı ister misiniz? Bunun için hizmet talep formunu doldurmanız yeterli.</p>
      <a class="btn btn-primary" href="/hizmet-talebi/">Hizmet Talep Formu ${icon('arrow-right')}</a>
    </div>
    <ul class="feature-list">
      <li class="feature reveal">
        <div class="feature-icon">${icon('headset')}</div>
        <div><h3>İşletmeler için BT çözümleri</h3><p>BT (bilgi teknolojileri) kadrosu bulunmayan işletmeler için 7×24 BT süreçleri desteği sağlıyor, masraflarınızı minimuma indiriyoruz.</p></div>
      </li>
      <li class="feature reveal" style="--d:80ms">
        <div class="feature-icon">${icon('boxes')}</div>
        <div><h3>Teknoloji ürünleri tedariki</h3><p>İhtiyacınız olan tüm teknoloji ürünlerini en uygun fiyatla, geniş ürün yelpazesi ve marka seçenekleriyle tedarik ediyoruz.</p></div>
      </li>
      <li class="feature reveal" style="--d:160ms">
        <div class="feature-icon">${icon('key-round')}</div>
        <div><h3>Anahtar teslim projeler</h3><p>Projeleriniz için yerinde ve ücretsiz keşif yapıyor, ürün tedarikinden kurulumuna kadar anahtar teslim çalışıyoruz.</p></div>
      </li>
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="vitrin-baslik">
  <div class="container">
    ${sectionHead({ eyebrow: 'Öne çıkanlar', title: 'Hangi çözüme ihtiyacınız var?', id: 'vitrin-baslik' })}
    <div class="grid grid-2">
      ${spotlight('guvenlik-sistemleri-180x180', 'Yeterince güvende misiniz?', 'AHD ve IP güvenlik kameraları, alarm sistemleri ve görüntülü diafon sistemlerimizle kendinizi güvene alın.', '/hizmetler/guvenlik-sistemleri/', 'Güvenlik sistemlerini inceleyin')}
      ${spotlight('web-dizayn-180x180', 'Milyonlara ulaşın', 'Kişisel ve kurumsal web sitelerinizi tasarlıyor, e-ticaret siteleriyle online satışlarınızı hayata geçiriyoruz. SEO ve sosyal medya takibinizi yapıyoruz.', '/hizmetler/web-tasarim-seo/', 'Web tasarım hizmetini inceleyin')}
      ${spotlight('termometre-180x180', 'Kontrolü elden bırakmayın', 'Aşı dolapları, soğuk hava depoları ve sistem odaları için; ısı, enerji, nem ve çiğ değerleri değiştiğinde uyaran sistemlerle kontrolü elinizde tutun.', '/hizmetler/#ortam-denetleyiciler', 'Ortam denetleyicileri inceleyin')}
      ${spotlight('takip-sistemi-180x180', 'Personeliniz takibinizde mi?', 'Personel giriş-çıkış saatlerini, izinlerini ve fazla mesailerini kontrol altında tutmak için PDKS çözümlerimizi inceleyin.', '/hizmetler/pdks-personel-takip/', 'PDKS çözümlerini inceleyin')}
    </div>
  </div>
</section>

${processSteps(PROCESS, { text: 'Her projede aynı özen: ihtiyacınızı doğru anlıyor, doğru çözümü kuruyor ve teslim ediyoruz.' })}

<section class="section brands-section" aria-labelledby="markalar-baslik">
  <div class="container">
    ${sectionHead({ eyebrow: 'Bayilikler', title: 'Lider markalarla çalışıyoruz', text: 'IT, otomasyon ve güvenlik sektörünün Türkiye’de hizmet veren lider markalarının bayiliğiyle size en avantajlı seçenekleri sunuyoruz.', center: true, id: 'markalar-baslik' })}
  </div>
  ${brandMarquee()}
</section>

${shopBand()}

${ctaBand({ title: 'İhtiyaçlarınızı belirleyelim, en uygun çözümü sunalım', text: 'Yerinde ve ücretsiz keşif için formu doldurun ya da bizi arayın.', primary: { href: '/hizmet-talebi/', label: 'Ücretsiz Keşif Talep Et' } })}
`;

  return page({
    path: '/',
    title: 'NİF Bilişim | İzmir Torbalı Bilişim Firması – Güvenlik, Network, Web Tasarım',
    description:
      'NİF Bilişim: Torbalı ve İzmir’de sistem odası ve network kurulumu, bilgisayar ve sunucu kurulumu, güvenlik kamerası ve alarm sistemleri, PDKS, otopark sistemleri ve web tasarım. Ücretsiz keşif.',
    keywords:
      'torbalı bilgisayar firması, torbalı bilişim firması, torbalı web tasarım, torbalı güvenlik kamerası kurulumu, alarm sistemleri, otopark sistemleri kurulumu, görüntülü diafon sistemleri, ayrancılar bilgisayar firması, yerinde servis veren bilgisayar firması, bilgisayarcı torbalı',
    bodyClass: 'is-home',
    body,
  });
}

function spotlight(image, title, text, href, linkLabel) {
  return `<article class="card spotlight reveal">
    <div class="spotlight-media">${img(image, '', { width: 112, height: 112 })}</div>
    <div>
      <h3>${title}</h3>
      <p>${text}</p>
      <a class="link-arrow stretched" href="${href}">${linkLabel} ${icon('arrow-right')}</a>
    </div>
  </article>`;
}

function shopBand() {
  const cats = PRODUCT_CATEGORIES.slice(0, 6)
    .map((c) => `<li><a href="${c.href}" ${ext}>${icon(c.icon)} ${c.title}</a></li>`)
    .join('');
  return `<section class="section shop-section" aria-labelledby="magaza-baslik">
  <div class="container">
    <div class="shop-band reveal">
      <div class="shop-band-text">
        <p class="eyebrow">${icon('store')} Online mağaza</p>
        <h2 id="magaza-baslik">Aradığınız ürün bir tık uzağınızda</h2>
        <p>Güvenlik kameralarından PDKS cihazlarına, network ürünlerinden kabinetlere kadar yüzlerce ürün online mağazamızda.</p>
        <a class="btn btn-accent btn-lg" href="${SITE.shop}" ${ext}>Mağazayı Ziyaret Et ${icon('external-link')}</a>
      </div>
      <ul class="shop-cats">${cats}</ul>
    </div>
  </div>
</section>`;
}

/* ═══════════════════════════════ HAKKIMIZDA ═══════════════════════════════ */

export function about() {
  const crumbs = [HOME, { name: 'Firmamız', href: '/hakkimizda/' }];
  const scope = [
    'Bilgisayar ve sunucu kurulumları',
    'Kablolu ağ altyapısı ve kablosuz ağ kurulumları (LAN, Wi-Fi)',
    'Anahtar teslim sistem odası kurulumları',
    'Alarm, güvenlik kameraları ve görüntülü diafon sistemleri',
    'Personel takip ve devriye takip sistemleri (PDKS)',
    'Otopark bariyer sistemleri ve OGS/HGS otomatik otopark geçiş sistemleri',
    'Web tasarım, sosyal medya takibi ve SEO (arama motoru optimizasyonu)',
    'Sistem odaları, soğuk hava depoları ve aşı dolapları için ısı, elektrik kesintisi, nem ve çiğ uyarı sistemleri',
  ];
  const cards = [
    ['monitor-code', 'Web Tasarım', 'Kurumsal ve kişisel web sitesi tasarımı, SEO, sosyal medya takibi.', '/hizmetler/web-tasarim-seo/'],
    ['network', 'Network Altyapısı', 'Ağ altyapısı ve wireless ağ kurulumu; modem, router, firewall kurulumları.', '/hizmetler/network-kurulumu/'],
    ['cpu', 'Bilgisayar ve Sunucu Kurulumu', 'Sistem odası kurulumu, sunucu ve bilgisayar ağı kurulumu, sunucu yedeklemeleri.', '/hizmetler/sistem-odasi-kurulumu/'],
    ['thermometer', 'Ortam Denetleyiciler', 'Elektrik kesintisi, ısı düşmesi ve yükselmesi, nem, çiğ ve su baskını uyarı sistemi.', '/hizmetler/#ortam-denetleyiciler'],
    ['shield-check', 'Güvenlik Sistemleri', 'AHD ve IP güvenlik kameraları, alarm sistemleri, görüntülü diafon sistemleri.', '/hizmetler/guvenlik-sistemleri/'],
    ['fingerprint', 'Personel Takip Sistemleri', 'Kartlı geçiş, devriye tur takip, parmak izi ve yüz tanıma sistemleri.', '/hizmetler/pdks-personel-takip/'],
    ['parking', 'Otopark Sistemleri', 'OGS/HGS geçiş sistemleri, otopark bariyerleri, kayar kapı sistemleri.', '/hizmetler/otopark-sistemleri/'],
    ['palette', 'Grafik Tasarım', 'Kurumsal kimlik çalışmaları, After Effects tasarımlar, responsive web tasarımları.', '/hizmetler/#grafik-tasarim'],
    ['tv', 'Tanıtım TV – Digital Signage', 'KOBİ’lerin hol ve lobi alanları için tanıtım TV kurulumları.', '/hizmetler/#digital-signage'],
  ];

  const body = `
${pageHero({
  crumbs,
  eyebrow: 'Firmamız',
  iconName: 'building-2',
  title: 'Torbalı’dan İzmir’e, uçtan uca bilişim çözümleri',
  lead: 'Ofisi İzmir Torbalı’da bulunan NİF Bilişim; güvenlik sistemleri ve bilgi teknolojileri sistemlerinin satış ve servisinin yanında web tasarım ve dijital pazarlama alanlarında hizmet vermektedir.',
  actions: btnKesif() + btnCall(),
})}

<section class="section">
  <div class="container split split-media">
    <div class="split-text reveal">
      <h2>Ücretsiz keşiften anahtar teslime</h2>
      <p>Aşağıdaki hizmetlerimizi ücretsiz keşif, cihazların tedariki ve kurulum şeklinde anahtar teslim olarak projelendirip sunuyoruz:</p>
      <ul class="checklist">${scope.map((s) => `<li>${icon('check')}<span>${s}</span></li>`).join('')}</ul>
    </div>
    <figure class="media-frame reveal">
      ${img('sistem-odasi', 'Yükseltilmiş tabanlı bir sistem odasında kabinetlerin kablolamasını yapan teknisyenler', { sizes: '(min-width: 960px) 45vw, 100vw' })}
    </figure>
  </div>
</section>

<section class="section section-alt" aria-labelledby="bayilik-baslik">
  <div class="container">
    ${sectionHead({ eyebrow: 'Bayilikler', title: 'Lider markaların yetkili bayisiyiz', text: 'Firmamız; IT (bilgi teknolojileri), otomasyon ve güvenlik sektörlerinin Türkiye’de hizmet veren lider markalarının bayiliğini bünyesinde barındırıyor. Birçok markanın bayiliğiyle size en avantajlı seçenekleri sunmaya çalışıyoruz.', id: 'bayilik-baslik' })}
    <ul class="brand-grid">${BRANDS.map(
      (b) => `<li><img src="/assets/img/brands/${b.slug}.webp" width="150" height="100" alt="${b.name}" loading="lazy" decoding="async"></li>`
    ).join('')}</ul>
  </div>
</section>

<section class="section" aria-labelledby="neler-baslik">
  <div class="container">
    ${sectionHead({ eyebrow: 'Neler yapıyoruz?', title: 'Hizmet alanlarımız', id: 'neler-baslik' })}
    <div class="grid grid-3">${cards
      .map(
        ([ic, t, d, href]) => `<article class="card mini-card reveal">
        <div class="card-icon">${icon(ic)}</div>
        <div><h3><a href="${href}" class="stretched">${t}</a></h3><p>${d}</p></div>
      </article>`
      )
      .join('')}</div>
  </div>
</section>

${processSteps(PROCESS)}

${ctaBand({ title: 'İhtiyaçlarınıza en uygun çözüm için', text: 'Hizmet talep formumuzu doldurun; yerinde ve ücretsiz keşif için sizinle iletişime geçelim.' })}
`;

  return page({
    path: '/hakkimizda/',
    title: 'Firmamız – Torbalı Bilgisayar ve Bilişim Firması',
    description:
      'NİF Bilişim, İzmir Torbalı’da güvenlik sistemleri, bilgi teknolojileri satış ve servisi, network, sistem odası, PDKS, otopark sistemleri ve web tasarım hizmeti veren bilişim firmasıdır.',
    keywords: 'torbalı bilgisayar firması, torbalı bilişim firması, bilgisayar malzemeleri satış ve servis, yerinde servis veren bilgisayar firması, ayrancılar bilgisayar firması, bilgisayarcı torbalı',
    jsonld: [breadcrumbLd(crumbs)],
    body,
  });
}

/* ═══════════════════════════════ HİZMETLER ═══════════════════════════════ */

export function servicesIndex() {
  const crumbs = [HOME, { name: 'Hizmetler', href: '/hizmetler/' }];
  const extras = EXTRA_SERVICES.map(
    (e, i) => `<article class="card extra-card reveal" id="${e.id}" style="--d:${(i % 2) * 80}ms">
      <div class="extra-head">
        ${e.img ? `<div class="extra-thumb">${img(e.img.src, e.img.alt, { width: 72, height: 72 })}</div>` : `<div class="card-icon">${icon(e.icon)}</div>`}
        <h3>${e.title}</h3>
      </div>
      <p>${e.text}</p>
      <ul class="chips">${e.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
      ${e.link ? `<a class="link-arrow" href="${e.link}">Detaylı bilgi ${icon('arrow-right')}</a>` : `<a class="link-arrow" href="/hizmet-talebi/">Bilgi alın ${icon('arrow-right')}</a>`}
    </article>`
  ).join('');

  const body = `
${pageHero({
  crumbs,
  eyebrow: 'Hizmetlerimiz',
  iconName: 'layers',
  title: 'BT, güvenlik ve otomasyon çözümleri tek çatı altında',
  lead: 'Sistem odası ve network altyapısından güvenlik sistemlerine, personel ve otopark kontrolünden web tasarıma kadar tüm hizmetlerimizi ücretsiz keşif, ürün tedariği ve kurulum ile anahtar teslim sunuyoruz.',
  actions: btnKesif() + btnCall(),
})}

<section class="section" aria-labelledby="ana-hizmetler">
  <div class="container">
    ${sectionHead({ eyebrow: 'Ana hizmetler', title: 'Uzmanlık alanlarımız', id: 'ana-hizmetler' })}
    <div class="grid grid-3">${SERVICES.map(serviceCard).join('')}</div>
  </div>
</section>

<section class="section section-alt" aria-labelledby="diger-hizmetler">
  <div class="container">
    ${sectionHead({ eyebrow: 'Diğer hizmetler', title: 'Tamamlayıcı çözümler', text: 'Ana hizmetlerimizi tamamlayan, işletmenizin günlük operasyonunu kolaylaştıran çözümler.', id: 'diger-hizmetler' })}
    <div class="grid grid-2">${extras}</div>
  </div>
</section>

${processSteps(PROCESS)}

${ctaBand({ title: 'Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?', text: 'Yerinde ücretsiz keşifle ihtiyacınızı birlikte belirleyelim.' })}
`;
  return page({
    path: '/hizmetler/',
    title: 'Hizmetlerimiz – BT, Güvenlik ve Otomasyon Çözümleri',
    description:
      'Güvenlik sistemleri, network kurulumu, otopark sistemleri, PDKS, sistem odası kurulumu, web tasarım ve SEO, ortam denetleyiciler, grafik tasarım ve digital signage hizmetleri. Torbalı, İzmir.',
    keywords: 'bilişim hizmetleri İzmir, torbalı bilişim firması, ortam denetleyici, digital signage, grafik tasarım, sunucu kurulumu',
    jsonld: [breadcrumbLd(crumbs)],
    body,
  });
}

function renderExtra(x) {
  if (x.type === 'feature') {
    return `<section class="section section-alt">
  <div class="container split">
    <div class="split-text reveal">
      <h2>${x.title}</h2>
      ${x.paragraphs.map((p) => `<p>${p}</p>`).join('')}
    </div>
    <ul class="stat-list">${x.stats
      .map((s) => `<li class="stat reveal"><strong>${s.value}</strong><span>${s.label}</span></li>`)
      .join('')}</ul>
  </div>
</section>`;
  }
  if (x.type === 'list' || x.type === 'checklist') {
    return `<section class="section${x.type === 'list' ? '' : ' section-alt'}">
  <div class="container">
    ${sectionHead({ title: x.title, text: x.text })}
    <ul class="checklist checklist-grid reveal">${x.items.map((i) => `<li>${icon('check')}<span>${i}</span></li>`).join('')}</ul>
  </div>
</section>`;
  }
  if (x.type === 'references') {
    return `<section class="section section-alt" id="${x.id}">
  <div class="container">
    ${sectionHead({ eyebrow: 'Referanslar', title: x.title, text: x.text })}
    <ul class="ref-list">${x.items.map((i) => `<li class="reveal">${icon('globe')}<span>${i}</span></li>`).join('')}</ul>
  </div>
</section>`;
  }
  return '';
}

export function servicePage(s) {
  const crumbs = [HOME, { name: 'Hizmetler', href: '/hizmetler/' }, { name: s.title, href: `/hizmetler/${s.slug}/` }];
  const offers = s.offers
    .map(
      (o, i) => `<article class="card offer-card reveal" id="${o.id}" style="--d:${i * 70}ms">
      <div class="offer-head">
        <div class="card-icon">${icon(o.icon)}</div>
        ${o.img ? `<div class="offer-thumb">${img(o.img, '', { width: 64, height: 64 })}</div>` : ''}
      </div>
      <h3>${o.title}</h3>
      <p>${o.text}</p>
    </article>`
    )
    .join('');
  const related = SERVICES.filter((r) => r.slug !== s.slug)
    .map((r) => `<li><a href="/hizmetler/${r.slug}/">${icon(r.icon)}<span>${r.title}</span>${icon('arrow-right', 'icon icon-end')}</a></li>`)
    .join('');
  const extras = (s.extra || []);
  const before = extras.filter((x) => x.type !== 'references').map(renderExtra).join('');
  const after = extras.filter((x) => x.type === 'references').map(renderExtra).join('');

  const body = `
${pageHero({
  crumbs,
  eyebrow: 'Hizmetlerimiz',
  iconName: s.icon,
  title: s.longTitle || s.title,
  lead: s.lead,
  actions: btnKesif() + btnCall(),
})}

<section class="section">
  <div class="container split split-media">
    <div class="split-text reveal">
      <h2>${s.longTitle ? s.title : 'Neler yapıyoruz?'}</h2>
      ${s.intro.map((p) => `<p>${p}</p>`).join('')}
    </div>
    <figure class="media-frame reveal">
      ${img(s.image.src, s.image.alt, { sizes: '(min-width: 960px) 45vw, 100vw' })}
    </figure>
  </div>
</section>

<section class="section${extras.some((x) => x.type === 'checklist') ? '' : ' section-alt'}" aria-labelledby="cozumler-baslik">
  <div class="container">
    ${sectionHead({ eyebrow: 'Çözümler', title: s.offersTitle, id: 'cozumler-baslik' })}
    <div class="grid grid-${s.offers.length === 4 ? '2' : '3'}">${offers}</div>
  </div>
</section>

${before}

${processSteps(s.process || PROCESS, { title: s.process ? 'Kurulum sürecimiz' : 'Nasıl çalışıyoruz?' })}

${after}

${s.shopCta ? `<section class="section section-tight">
  <div class="container">
    <div class="shop-strip reveal">
      <div class="shop-strip-icon">${icon('store')}</div>
      <div><h2>${s.shopCta.title}</h2><p>${s.shopCta.text}</p></div>
      <a class="btn btn-primary" href="${s.shopCta.href}" ${ext}>Mağazada İncele ${icon('external-link')}</a>
    </div>
  </div>
</section>` : ''}

${faqSection(s.faq)}

${ctaBand({ title: s.cta.title, text: s.cta.text })}

<section class="section section-tight" aria-labelledby="diger-baslik">
  <div class="container">
    <h2 class="h-small" id="diger-baslik">Diğer hizmetlerimiz</h2>
    <ul class="related">${related}</ul>
  </div>
</section>
`;
  return page({
    path: `/hizmetler/${s.slug}/`,
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    jsonld: [
      breadcrumbLd(crumbs),
      faqLd(s.faq),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: s.longTitle || s.title,
        description: s.metaDescription,
        provider: { '@id': `${SITE.url}/#firma` },
        areaServed: SITE.areaServed.map((a) => ({ '@type': 'Place', name: a })),
        url: `${SITE.url}/hizmetler/${s.slug}/`,
      },
    ],
    body,
  });
}

/* ═══════════════════════════════ ÜRÜNLER ═══════════════════════════════ */

export function products() {
  const crumbs = [HOME, { name: 'Ürünler', href: '/urunler/' }];
  const cards = PRODUCT_CATEGORIES.map(
    (c, i) => `<article class="card product-card reveal" style="--d:${(i % 3) * 70}ms">
      <div class="card-icon">${icon(c.icon)}</div>
      <h3><a href="${c.href}" ${ext}>${c.title}<span class="sr-only"> (online mağazada açılır)</span></a></h3>
      <p>${c.text}</p>
      ${c.sub?.length ? `<ul class="sub-links">${c.sub.map((s) => `<li><a href="${s.href}" ${ext}>${s.title}</a></li>`).join('')}</ul>` : ''}
      <a class="link-arrow" href="${c.href}" ${ext} aria-hidden="true" tabindex="-1">Mağazada incele ${icon('external-link')}</a>
    </article>`
  ).join('');

  const body = `
${pageHero({
  crumbs,
  eyebrow: 'Ürünler',
  iconName: 'shopping-bag',
  title: 'Ürünler ve online mağaza',
  lead: 'PDKS cihazları, güvenlik kameraları, alarm ve diafon sistemleri, network ürünleri ve daha fazlası. Güncel fiyat ve stok bilgisi için online mağazamızı ziyaret edin.',
  actions: `<a class="btn btn-accent btn-lg" href="${SITE.shop}" ${ext}>Online Mağaza ${icon('external-link')}</a>` + btnCall(),
})}

<section class="section" aria-labelledby="kategoriler">
  <div class="container">
    ${sectionHead({ eyebrow: 'Kategoriler', title: 'Ürün kategorileri', text: 'Kategori bağlantıları shop.nifbilisim.com adresindeki online mağazamızda yeni sekmede açılır.', id: 'kategoriler' })}
    <div class="grid grid-3">${cards}</div>
  </div>
</section>

<section class="section section-alt" aria-labelledby="markaya-gore">
  <div class="container">
    ${sectionHead({ eyebrow: 'Markalar', title: 'Markaya göre ürünler', id: 'markaya-gore' })}
    <ul class="pill-links">${SHOP_BRANDS.map((b) => `<li><a href="${b.href}" ${ext}>${b.name}</a></li>`).join('')}</ul>
  </div>
</section>

${ctaBand({ title: 'Hangi ürünün size uygun olduğundan emin değil misiniz?', text: 'Yerinde ücretsiz keşifle ihtiyacınızı belirleyip doğru ürünü birlikte seçelim.', primary: { href: '/hizmet-talebi/', label: 'Ücretsiz Keşif Talep Et' } })}
`;
  return page({
    path: '/urunler/',
    title: 'Ürünler ve Online Mağaza',
    description:
      'PDKS ve geçiş sistemleri, güvenlik kameraları, kayıt cihazları, alarm, görüntülü diafon, network ürünleri, kabinetler ve otopark sistemleri. NİF Bilişim online mağaza: shop.nifbilisim.com',
    keywords: 'güvenlik kamerası satışı İzmir, PDKS cihazı, yüz tanıma terminali, parmak izi okuyucu, görüntülü diafon, network ürünleri, kabinet',
    jsonld: [breadcrumbLd(crumbs)],
    body,
  });
}

/* ═══════════════════════════════ FORMLAR ═══════════════════════════════ */

function formHidden(subject) {
  return `${SITE.form.accessKey ? `<input type="hidden" name="access_key" value="${SITE.form.accessKey}">` : ''}
      <input type="hidden" name="subject" value="${esc(subject)}">
      <input type="hidden" name="from_name" value="nifbilisim.com">
      <input type="hidden" name="redirect" value="${SITE.url}/tesekkurler/">
      <div class="hp" aria-hidden="true">
        <label>Bu alanı boş bırakın <input type="text" name="botcheck" tabindex="-1" autocomplete="off"></label>
        <label>Bu alanı boş bırakın <input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label>
      </div>`;
}

function field({ id, label, type = 'text', required = false, autocomplete, textarea = false, placeholder = '' }) {
  const req = required ? ' required aria-required="true"' : '';
  const ac = autocomplete ? ` autocomplete="${autocomplete}"` : '';
  const ph = placeholder ? ` placeholder="${placeholder}"` : '';
  const control = textarea
    ? `<textarea id="${id}" name="${id}" rows="5"${req}${ph} aria-describedby="${id}-err"></textarea>`
    : `<input id="${id}" name="${id}" type="${type}"${req}${ac}${ph} aria-describedby="${id}-err">`;
  return `<div class="field">
        <label for="${id}">${label}${required ? ' <span class="req" aria-hidden="true">*</span>' : ' <span class="opt">(isteğe bağlı)</span>'}</label>
        ${control}
        <p class="field-error" id="${id}-err"></p>
      </div>`;
}

const kvkkField = `<div class="field field-check">
        <input id="kvkk" name="kvkk_onay" type="checkbox" value="Onaylandı" required aria-required="true" aria-describedby="kvkk-err">
        <label for="kvkk"><a href="/kvkk/" target="_blank">KVKK Aydınlatma Metni</a>’ni okudum; kişisel verilerimin talebimin yanıtlanması amacıyla işlenmesini kabul ediyorum. <span class="req" aria-hidden="true">*</span></label>
        <p class="field-error" id="kvkk-err"></p>
      </div>`;

const formFooter = (label) => `<div class="form-actions">
        <button type="submit" class="btn btn-accent btn-lg">${icon('send')} <span>${label}</span></button>
        <p class="form-note"><span class="req">*</span> işaretli alanlar zorunludur.</p>
      </div>
      <div class="form-status" role="status" aria-live="polite" tabindex="-1"></div>`;

/* ═══════════════════════════════ İLETİŞİM ═══════════════════════════════ */

export function contact() {
  const crumbs = [HOME, { name: 'İletişim', href: '/iletisim/' }];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;
  const dirs = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;

  const body = `
${pageHero({
  crumbs,
  eyebrow: 'İletişim',
  iconName: 'message-circle',
  title: 'Bize ulaşın',
  lead: 'Sorularınız, teklif talepleriniz ve ücretsiz keşif için telefon, e-posta ya da formla bize ulaşabilirsiniz.',
})}

<section class="section">
  <div class="container contact-grid">
    <aside class="contact-info reveal" aria-labelledby="iletisim-bilgileri">
      <h2 id="iletisim-bilgileri">İletişim bilgileri</h2>
      ${contactList()}
      <div class="contact-actions">
        <a class="btn btn-primary" href="${SITE.phones[0].href}">${icon('phone')} Arayın</a>
        <a class="btn btn-outline" href="https://wa.me/${SITE.whatsapp}" ${ext}>${icon('whatsapp')} WhatsApp</a>
      </div>
      <h3 class="h-small">Sosyal medya</h3>
      ${socialLinks('social social-light')}
    </aside>

    <div class="form-card reveal">
      <h2>Mesaj gönderin</h2>
      <p class="muted">Formu doldurun, en kısa sürede size dönüş yapalım.</p>
      <form class="form" action="${SITE.form.endpoint}" method="POST" data-form novalidate>
      ${formHidden('nifbilisim.com – İletişim formu')}
      <div class="form-row">
        ${field({ id: 'ad', label: 'Adınız Soyadınız', required: true, autocomplete: 'name' })}
        ${field({ id: 'email', label: 'E-posta adresiniz', type: 'email', required: true, autocomplete: 'email' })}
      </div>
      <div class="form-row">
        ${field({ id: 'telefon', label: 'Telefonunuz', type: 'tel', autocomplete: 'tel', placeholder: '05xx xxx xx xx' })}
        ${field({ id: 'konu', label: 'Konu' })}
      </div>
      ${field({ id: 'mesaj', label: 'Mesajınız', textarea: true, required: true })}
      ${kvkkField}
      ${formFooter('Mesajı Gönder')}
      </form>
    </div>
  </div>
</section>

<section class="section section-tight" aria-labelledby="harita-baslik">
  <div class="container">
    <div class="map-head">
      <h2 id="harita-baslik" class="h-small">Ofisimiz – Torbalı, İzmir</h2>
      <a class="link-arrow" href="${dirs}" ${ext}>Yol tarifi al ${icon('external-link')}</a>
    </div>
    <div class="map-frame">
      <iframe src="${mapSrc}" title="NİF Bilişim ofis konumu – İnönü Mahallesi, Ahmet Özkan Bulvarı, Torbalı / İzmir" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>
`;
  return page({
    path: '/iletisim/',
    title: 'İletişim – Torbalı, İzmir',
    description: `NİF Bilişim iletişim: ${SITE.address.display}. Tel & Fax: ${SITE.phones[0].display}, Gsm: ${SITE.phones[1].display}, ${SITE.email}`,
    jsonld: [breadcrumbLd(crumbs)],
    body,
  });
}

/* ═══════════════════════════════ HİZMET TALEBİ ═══════════════════════════════ */

export function serviceRequest() {
  const crumbs = [HOME, { name: 'Hizmet Talebi', href: '/hizmet-talebi/' }];
  const options = REQUEST_OPTIONS.map(
    (o, i) => `<label class="check-pill"><input type="checkbox" name="hizmet_turu" value="${o}"${i === 0 ? ' aria-describedby="hizmet-err"' : ''}><span>${icon('check')}${o}</span></label>`
  ).join('');

  const body = `
${pageHero({
  crumbs,
  eyebrow: 'Ücretsiz keşif',
  iconName: 'badge-check',
  title: 'Hizmet talep formu',
  lead: 'İhtiyaçlarınızı belirleyip size en uygun çözümlerimizi sunalım. Formu doldurun; yerinde ve ücretsiz keşif için sizinle iletişime geçelim.',
})}

<section class="section">
  <div class="container request-grid">
    <div class="form-card reveal">
      <h2>Talep bilgileri</h2>
      <form class="form" action="${SITE.form.endpoint}" method="POST" data-form novalidate>
      ${formHidden('nifbilisim.com – Hizmet talebi')}
      <div class="form-row">
        ${field({ id: 'ad', label: 'Adınız Soyadınız', required: true, autocomplete: 'name' })}
        ${field({ id: 'firma', label: 'Firmanızın adı', autocomplete: 'organization' })}
      </div>
      <div class="form-row">
        ${field({ id: 'telefon', label: 'Telefonunuz', type: 'tel', required: true, autocomplete: 'tel', placeholder: '05xx xxx xx xx' })}
        ${field({ id: 'email', label: 'E-posta adresiniz', type: 'email', required: true, autocomplete: 'email' })}
      </div>
      <fieldset class="field" data-group-required>
        <legend>Talep ettiğiniz hizmet(ler) <span class="req" aria-hidden="true">*</span> <span class="opt">birden fazla seçebilirsiniz</span></legend>
        <div class="check-pills">${options}</div>
        <p class="field-error" id="hizmet-err"></p>
      </fieldset>
      ${field({ id: 'mesaj', label: 'Mesajınız / ihtiyacınızın kısa açıklaması', textarea: true })}
      ${kvkkField}
      ${formFooter('Talebi Gönder')}
      </form>
    </div>

    <aside class="request-aside">
      <div class="card aside-card reveal">
        <h2 class="h-small">Sonrasında ne olacak?</h2>
        <ol class="mini-steps">
          <li><span>1</span><div><strong>Sizi arıyoruz</strong><p>Talebinizi inceleyip sizinle iletişime geçiyoruz.</p></div></li>
          <li><span>2</span><div><strong>Ücretsiz keşif</strong><p>İhtiyaçlarınızı yerinde tespit ediyoruz.</p></div></li>
          <li><span>3</span><div><strong>Çözüm önerisi</strong><p>Size en uygun ürün ve çözüm seçeneklerini sunuyoruz.</p></div></li>
          <li><span>4</span><div><strong>Anahtar teslim kurulum</strong><p>Tedarik, kurulum, test ve teslim.</p></div></li>
        </ol>
      </div>
      <div class="card aside-card reveal">
        <h2 class="h-small">Hemen konuşmak ister misiniz?</h2>
        ${contactList({ withHours: false })}
      </div>
    </aside>
  </div>
</section>
`;
  return page({
    path: '/hizmet-talebi/',
    title: 'Ücretsiz Keşif ve Hizmet Talep Formu',
    description:
      'Güvenlik sistemleri, network, sistem odası, PDKS, otopark sistemleri ve web tasarım için ücretsiz keşif talep edin. NİF Bilişim, Torbalı – İzmir.',
    jsonld: [breadcrumbLd(crumbs)],
    body,
  });
}

/* ═══════════════════════════════ KVKK / TEŞEKKÜRLER / 404 ═══════════════════════════════ */

export function kvkk() {
  const crumbs = [HOME, { name: 'KVKK Aydınlatma Metni', href: '/kvkk/' }];
  const body = `
${pageHero({ crumbs, title: 'KVKK Aydınlatma Metni', lead: 'İletişim ve hizmet talep formları aracılığıyla paylaştığınız kişisel verilerin işlenmesine ilişkin bilgilendirme.' })}
<section class="section">
  <div class="container container-narrow prose">
    <h2>Veri sorumlusu</h2>
    <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla ${SITE.name} (${SITE.address.display}) tarafından aşağıda açıklanan kapsamda işlenmektedir.</p>
    <h2>İşlenen kişisel veriler</h2>
    <p>Web sitemizdeki formlar aracılığıyla bizimle paylaştığınız ad-soyad, firma adı, telefon numarası, e-posta adresi, talep ettiğiniz hizmet bilgisi ve mesaj içeriği.</p>
    <h2>İşleme amaçları</h2>
    <ul>
      <li>Talep, soru ve başvurularınızın alınması ve yanıtlanması,</li>
      <li>Keşif, teklif ve hizmet süreçlerinin planlanması ve yürütülmesi,</li>
      <li>Sizinle iletişim kurulması.</li>
    </ul>
    <h2>Hukuki sebep ve toplama yöntemi</h2>
    <p>Kişisel verileriniz, web sitemizdeki formlar aracılığıyla elektronik ortamda; KVKK’nın 5. maddesinde yer alan bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması ve açık rızanız hukuki sebeplerine dayanılarak toplanmaktadır.</p>
    <h2>Aktarım</h2>
    <p>Form içerikleri, e-posta olarak iletilmesi amacıyla form altyapı hizmeti sağlayıcısı üzerinden tarafımıza ulaştırılır. Verileriniz bunun dışında üçüncü kişilerle paylaşılmaz; yalnızca yasal bir zorunluluk halinde yetkili kurumlara aktarılabilir.</p>
    <h2>Haklarınız</h2>
    <p>KVKK’nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltilmesini veya silinmesini isteme ve diğer haklarınızı kullanmak için <a href="mailto:${SITE.email}">${SITE.email}</a> adresine yazılı olarak başvurabilirsiniz.</p>
  </div>
</section>`;
  return page({
    path: '/kvkk/',
    title: 'KVKK Aydınlatma Metni',
    description: 'NİF Bilişim web sitesi formları aracılığıyla toplanan kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metni.',
    jsonld: [breadcrumbLd(crumbs)],
    body,
  });
}

export function thanks() {
  const body = `
${pageHero({
  title: 'Teşekkürler, mesajınız bize ulaştı',
  lead: 'En kısa sürede sizinle iletişime geçeceğiz. Acil durumlar için bizi telefonla arayabilirsiniz.',
  actions: `<a class="btn btn-accent btn-lg" href="/">Anasayfaya dön ${icon('arrow-right')}</a>` + btnCall(),
})}`;
  return page({ path: '/tesekkurler/', title: 'Teşekkürler', description: 'Mesajınız NİF Bilişim’e ulaştı.', noindex: true, body });
}

export function notFound() {
  const body = `
${pageHero({
  eyebrow: 'Hata 404',
  title: 'Aradığınız sayfa bulunamadı',
  lead: 'Sayfa taşınmış ya da kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.',
  actions: `<a class="btn btn-accent btn-lg" href="/">Anasayfa ${icon('arrow-right')}</a><a class="btn btn-on-dark btn-lg" href="/hizmetler/">Hizmetlerimiz</a>`,
})}
<section class="section">
  <div class="container">${sectionHead({ title: 'Hizmetlerimiz' })}<div class="grid grid-3">${SERVICES.map(serviceCard).join('')}</div></div>
</section>`;
  return page({ path: '/404.html', title: 'Sayfa bulunamadı', description: 'Aradığınız sayfa bulunamadı.', noindex: true, body });
}
