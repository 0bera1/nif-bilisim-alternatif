// NİF Bilişim – statik site derleyici. Kullanım: npm run build  →  dist/
import { mkdir, rm, writeFile, cp, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

import { SITE } from '../src/config.mjs';
import { buildSprite } from '../src/icons.mjs';
import { IMAGES, BRANDS } from '../src/images.mjs';
import { SERVICES } from '../src/content/services.mjs';
import * as P from '../src/pages.mjs';
import { REDIRECTS } from '../src/redirects.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_IMG = join(ROOT, 'images');
const OUT = join(ROOT, 'dist');
const t0 = Date.now();

async function write(rel, content) {
  const file = join(OUT, rel);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
}

/* 1) Temizle + statik varlıklar */
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp(join(ROOT, 'src/assets'), join(OUT, 'assets'), { recursive: true });
await write('assets/icons.svg', buildSprite());

/* 2) Görseller → WebP */
if (!existsSync(SRC_IMG)) {
  console.error('HATA: images/ klasörü yok. Önce "bash indir-gorseller.sh" çalıştırın.');
  process.exit(1);
}
await mkdir(join(OUT, 'assets/img/brands'), { recursive: true });
const jobs = [];
for (const [name, def] of Object.entries(IMAGES)) {
  for (const w of def.widths) {
    jobs.push(
      sharp(join(SRC_IMG, def.file))
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 80, effort: 5 })
        .toFile(join(OUT, `assets/img/${name}-${w}.webp`))
    );
  }
}
for (const b of BRANDS) {
  jobs.push(
    sharp(join(SRC_IMG, b.file)).webp({ quality: 85, alphaQuality: 90 }).toFile(join(OUT, `assets/img/brands/${b.slug}.webp`))
  );
}
await Promise.all(jobs);

/* 3) Favicon + OG görseli (logo işaretinden türetilir) */
const logoPath = join(SRC_IMG, IMAGES.logo.file);
const markRaw = await sharp(logoPath).extract({ left: 0, top: 0, width: 61, height: 61 }).png().toBuffer();
const mark = await sharp(markRaw).trim({ threshold: 10 }).png().toBuffer();
const squareMark = async (size, pad, bg) =>
  sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: await sharp(mark).resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 }, kernel: 'lanczos3' }).toBuffer(), gravity: 'center' }])
    .png()
    .toBuffer();
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
const fav32 = await squareMark(32, 1, transparent);
const fav48 = await squareMark(48, 2, transparent);
await write('assets/favicon-192.png', await squareMark(192, 16, { r: 255, g: 255, b: 255, alpha: 1 }));
await write('assets/favicon-512.png', await squareMark(512, 48, { r: 255, g: 255, b: 255, alpha: 1 }));
await write('assets/apple-touch-icon.png', await squareMark(180, 22, { r: 255, g: 255, b: 255, alpha: 1 }));
await write('favicon.ico', ico([fav32, fav48], [32, 48]));

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="a" cx="90%" cy="0%" r="70%"><stop offset="0" stop-color="#0090d0" stop-opacity=".55"/><stop offset="1" stop-color="#0090d0" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="0%" cy="100%" r="60%"><stop offset="0" stop-color="#22a045" stop-opacity=".45"/><stop offset="1" stop-color="#22a045" stop-opacity="0"/></radialGradient>
    <linearGradient id="t" x1="0" x2="1"><stop offset="0" stop-color="#4fc3f7"/><stop offset="1" stop-color="#5fd47f"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b1b2e"/><rect width="1200" height="630" fill="url(#a)"/><rect width="1200" height="630" fill="url(#b)"/>
  <rect x="80" y="80" width="330" height="96" rx="20" fill="#fff"/>
  <text x="80" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="800" fill="#fff">Doğru çözümler,</text>
  <text x="80" y="410" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="800" fill="url(#t)">mutlu müşteriler</text>
  <text x="80" y="500" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#c5d3e2">Güvenlik · Network · Sistem Odası · PDKS · Otopark · Web Tasarım</text>
  <text x="80" y="550" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#7fd0f5">Torbalı – İzmir  ·  www.nifbilisim.com</text>
</svg>`;
const ogLogo = await sharp(logoPath).resize({ width: 290, kernel: 'lanczos3' }).toBuffer();
await write('assets/og-image.png', await sharp(Buffer.from(ogSvg)).composite([{ input: ogLogo, left: 100, top: 92 }]).png().toBuffer());

/* 4) Sayfalar */
const pages = [
  ['index.html', P.home()],
  ['hakkimizda/index.html', P.about()],
  ['hizmetler/index.html', P.servicesIndex()],
  ...SERVICES.map((s) => [`hizmetler/${s.slug}/index.html`, P.servicePage(s)]),
  ['urunler/index.html', P.products()],
  ['iletisim/index.html', P.contact()],
  ['hizmet-talebi/index.html', P.serviceRequest()],
  ['kvkk/index.html', P.kvkk()],
  ['tesekkurler/index.html', P.thanks()],
  ['404.html', P.notFound()],
];
for (const [file, html] of pages) await write(file, html);

/* 5) SEO dosyaları */
const today = new Date().toISOString().slice(0, 10);
const indexable = pages
  .map(([f]) => f)
  .filter((f) => !['404.html', 'tesekkurler/index.html'].includes(f))
  .map((f) => '/' + f.replace(/index\.html$/, ''));
await write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod><priority>${u === '/' ? '1.0' : u.startsWith('/hizmetler/') ? '0.9' : '0.7'}</priority></url>`)
  .join('\n')}
</urlset>
`
);
await write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /tesekkurler/\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
await write(
  'site.webmanifest',
  JSON.stringify(
    {
      name: SITE.name,
      short_name: 'NİF Bilişim',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#0b1b2e',
      lang: 'tr',
      icons: [
        { src: '/assets/favicon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/assets/favicon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    null,
    2
  )
);

/* 6) 301 yönlendirmeleri: Netlify/Cloudflare (_redirects) + Apache (.htaccess) */
await write(
  '_redirects',
  `# Eski WordPress adresleri → yeni adresler (301)\n` +
    REDIRECTS.map((r) => `${r.from.padEnd(58)} ${r.to.split('#')[0].padEnd(40)} 301`).join('\n') +
    '\n'
);
await write(
  '.htaccess',
  `# NİF Bilişim – Apache yapılandırması
Options -Indexes
ErrorDocument 404 /404.html
DirectoryIndex index.html

<IfModule mod_rewrite.c>
RewriteEngine On

# http → https ve www'ye zorla
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\\. [NC]
RewriteRule ^(.*)$ https://www.nifbilisim.com/$1 [R=301,L,NE]

# Eski WordPress adresleri → yeni adresler (301)
${REDIRECTS.map((r) => `RewriteRule ^${r.from.replace(/^\//, '').replace(/\/$/, '')}/?$ ${r.to} [R=301,L,NE]`).join('\n')}
</IfModule>

<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
ExpiresByType text/css "access plus 1 year"
ExpiresByType application/javascript "access plus 1 year"
ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/json text/xml application/xml
</IfModule>

<IfModule mod_headers.c>
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set X-Frame-Options "SAMEORIGIN"
</IfModule>
`
);

/* 7) Cloudflare Pages başlıkları (_headers) + GitHub Pages özel alan adı (CNAME) */
await write(
  '_headers',
  `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/favicon.ico
  Cache-Control: public, max-age=86400
`
);
if (process.env.PAGES_CNAME) await write('CNAME', process.env.PAGES_CNAME.trim() + '\n');
await write('.nojekyll', '');

/* Yardımcı: PNG'lerden ICO üretir (PNG gömülü ICO, tüm modern tarayıcılar destekler) */
function ico(pngs, sizes) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const dir = Buffer.alloc(16 * pngs.length);
  let offset = 6 + dir.length;
  pngs.forEach((png, i) => {
    const o = i * 16;
    dir.writeUInt8(sizes[i] % 256, o);
    dir.writeUInt8(sizes[i] % 256, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(png.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += png.length;
  });
  return Buffer.concat([header, dir, ...pngs]);
}

if (!SITE.form.accessKey && SITE.form.endpoint.includes('web3forms')) {
  console.warn('UYARI: Web3Forms access key tanımlı değil (src/config.mjs → form.accessKey). Formlar gönderim yapmaz.');
}
console.log(`✓ ${pages.length} sayfa, ${jobs.length} görsel → dist/  (${((Date.now() - t0) / 1000).toFixed(1)} sn)`);
