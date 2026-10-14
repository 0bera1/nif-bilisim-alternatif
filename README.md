# NİF Bilişim – Yeni Kurumsal Web Sitesi

Statik, hızlı, mobil uyumlu kurumsal site. Saf HTML + CSS + minimal vanilla JS; sayfalar küçük bir Node derleyicisiyle (`scripts/build.mjs`) üretilir. Çalışma zamanında hiçbir framework yoktur.

## Hızlı başlangıç

```bash
npm install        # tek bağımlılık: sharp (görselleri WebP'ye çevirmek için)
npm run dev        # derler (dist/) ve http://localhost:4321 adresinde açar
```

- `npm run build` → yalnızca `dist/` klasörünü üretir (yayına alınacak klasör budur).
- `images/` klasörü yoksa önce `bash indir-gorseller.sh` çalıştırın. (Türkçe karakterli 4 dosya betikle inmez; bu pakette `termometre-180x180.jpg`, `yuz-tanima.jpg`, `bekci-tur-takip-sistemism-2.jpg`, `sistem-odasi.jpg` adlarıyla elle indirildi.)
- Node 18+ gerekir.

## Tasarım kararları

| | |
|---|---|
| **Ana renk** | `#0068A8` – logodaki "NİF" mavisi (beyaz üzerinde 6.1:1 kontrast) |
| **Vurgu (CTA)** | `#15803D` – logodaki yeşilin (`#22A045`) AA kontrastlı koyu tonu; yalnızca "Ücretsiz Keşif" gibi ana eylemlerde |
| **Nötrler** | Lacivert/antrasit `#0B1B2E` (hero, footer, CTA bantları), metin `#0F1B2D`, ikincil `#526073` |
| **Marka gradyanı** | Mavi → yeşil (logodaki geçiş); numaralarda, ince çizgilerde ve vurgulu başlık kelimesinde |
| **Fontlar** | Başlık: *Plus Jakarta Sans* 600–800 · Gövde: *Inter* 400–600 (ikisi de Türkçe karakter destekli) |
| **İkonlar** | Lucide tabanlı tek SVG sprite (`assets/icons.svg`), tüm sayfalarda önbelleklenir |
| **Görseller** | 2017 görselleri WebP'ye çevrildi; büyükler yuvarlatılmış çerçevede, küçükler (110–180px) yuvarlak/kare küçük resim olarak maskelenerek kullanıldı. Hero'larda fotoğraf yerine soyut gradyan + ızgara deseni. Video arka plan kullanılmadı. |
| **Bileşenler** | Yapışkan, yarı saydam (blur) header · masaüstü açılır hizmet menüsü · mobil hamburger panel · ikonlu kartlar · 5 adımlı süreç · SSS (`<details>`) · gri tonlu, üzerine gelince renklenen kayan marka şeridi · mobilde sabit **Ara / WhatsApp / Keşif İste** çubuğu |
| **Hareket** | Scroll'da hafif fade/slide (IntersectionObserver); `prefers-reduced-motion` açıkken tüm animasyonlar ve kayan şerit kapanır |
| **Koyu tema** | Sistem tercihini izler; header'daki düğmeyle elle değiştirilebilir (tercih `localStorage`'da) |

## Dosya ağacı

```
nif-bilisim-yeni-site/
├── images/                    # eski siteden indirilen orijinal görseller (build girdisi)
├── package.json
├── scripts/
│   ├── build.mjs              # derleyici: sayfalar, WebP, favicon, OG görseli, sitemap, robots, 301'ler
│   └── serve.mjs              # bağımlılıksız yerel sunucu
├── src/
│   ├── config.mjs             # ★ firma bilgileri, sosyal linkler, form ayarı, çalışma saatleri
│   ├── content/services.mjs   # hizmet metinleri, SSS, süreç, form seçenekleri
│   ├── content/products.mjs   # mağaza kategori linkleri
│   ├── redirects.mjs          # eski URL → yeni URL tablosu
│   ├── images.mjs             # görsel listesi + <img> yardımcı fonksiyonu
│   ├── icons.mjs              # ikon seti → SVG sprite
│   ├── layout.mjs             # <head>/SEO/JSON-LD, header, footer, ortak bileşenler
│   ├── pages.mjs              # tüm sayfa şablonları
│   └── assets/css/style.css, assets/js/main.js
└── dist/                      # ← YAYINA ALINACAK KLASÖR (npm run build ile oluşur)
    ├── index.html
    ├── hakkimizda/  hizmetler/  hizmetler/{6 hizmet}/  urunler/  iletisim/  hizmet-talebi/  kvkk/  tesekkurler/
    ├── 404.html  sitemap.xml  robots.txt  site.webmanifest  favicon.ico
    ├── _redirects  .htaccess
    └── assets/ (css, js, icons.svg, img/*.webp, img/brands/*.webp, og-image.png, favicon'lar)
```

## Sayfalar ve URL'ler

| Sayfa | URL |
|---|---|
| Anasayfa | `/` |
| Firmamız | `/hakkimizda/` |
| Hizmetler (genel + Ortam Denetleyiciler, Grafik Tasarım, Digital Signage, Bilgisayar/Sunucu) | `/hizmetler/` |
| Güvenlik Sistemleri | `/hizmetler/guvenlik-sistemleri/` |
| Network Kurulumu | `/hizmetler/network-kurulumu/` |
| Otopark Sistemleri | `/hizmetler/otopark-sistemleri/` |
| PDKS | `/hizmetler/pdks-personel-takip/` |
| Sistem Odası Kurulumu | `/hizmetler/sistem-odasi-kurulumu/` |
| Web Tasarım & SEO | `/hizmetler/web-tasarim-seo/` |
| Ürünler / Mağaza | `/urunler/` |
| İletişim | `/iletisim/` |
| Hizmet Talep Formu | `/hizmet-talebi/` |
| KVKK Aydınlatma Metni | `/kvkk/` |
| Teşekkürler (noindex, JS'siz form dönüşü) | `/tesekkurler/` |

## SEO

- Her sayfada özgün `<title>`, `meta description`, canonical, Open Graph + Twitter kartı (`assets/og-image.png`, 1200×630).
- Tüm sayfalarda `LocalBusiness` JSON-LD (ad, adres, iki telefon, faks, e-posta, hizmet bölgesi: Torbalı, Ayrancılar, Gaziemir, Karabağlar, İzmir; sosyal profiller; hizmet kataloğu). İç sayfalarda `BreadcrumbList`, hizmet sayfalarında `Service` + `FAQPage`.
- Eski sitedeki gizli "SEO metni" sayfada gösterilmedi; anahtar kelimeler başlık, açıklama ve `keywords` etiketlerine dağıtıldı.
- `sitemap.xml`, `robots.txt` otomatik üretilir.

## 301 yönlendirme tablosu

Build, aynı tabloyu iki formatta üretir: **`dist/.htaccess`** (Apache/LiteSpeed – paylaşımlı hosting) ve **`dist/_redirects`** (Netlify / Cloudflare Pages). Kaynak: `src/redirects.mjs`.

| Eski adres | Yeni adres |
|---|---|
| `/hakkimizda-bilisim-bilgisayar-firmasi-torbali/` | `/hakkimizda/` |
| `/guvenlik-sistemleri-3/` | `/hizmetler/guvenlik-sistemleri/` |
| `/network-ag-altyapisi-kurulumu/` | `/hizmetler/network-kurulumu/` |
| `/otopark-sistemleri/` | `/hizmetler/otopark-sistemleri/` |
| `/pdks-personel-devam-kontrol-sistemi/` | `/hizmetler/pdks-personel-takip/` |
| `/sistem-odasi-kurulumu/` | `/hizmetler/sistem-odasi-kurulumu/` |
| `/web-tasarim-seo-sosyal-medya-takibi/` | `/hizmetler/web-tasarim-seo/` |
| `/iletisim/` | `/iletisim/` (değişmedi) |
| `/hizmet-talebi/` | `/hizmet-talebi/` (değişmedi) |
| `/urun-filtre/ortam-denetleyiciler/` | `/hizmetler/#ortam-denetleyiciler` |
| `/urunler/ogs-hgs-otopark-arac-tanima-sistemi/` | `/hizmetler/otopark-sistemleri/#ogs-hgs` |
| `/urunler/otopark-bariyerleri/` | `/hizmetler/otopark-sistemleri/#otopark-bariyerleri` |
| `/urunler/road-blocker-bariyer-sistemi/` | `/hizmetler/otopark-sistemleri/#road-blocker` |
| `/urunler/yuz-tanima-terminalleri/` | `/hizmetler/pdks-personel-takip/#yuz-tanima` |
| `/urunler/parmak-izi-okuma-sistemleri/` | `/hizmetler/pdks-personel-takip/#parmak-izi` |
| `/urunler/kartli-personel-takip-sistemleri/` | `/hizmetler/pdks-personel-takip/#kartli` |
| `/urunler/bekci-tur-kontrol-sistemleri/` | `/hizmetler/pdks-personel-takip/#bekci-tur` |
| `/category/web-tasarim/` + 10 referans yazısı (`/34istanbul-com-tr-yayina-girdi/` vb.) | `/hizmetler/web-tasarim-seo/#referanslar` |
| `/feed/` | `/` |

> `#` çapalı hedefler `.htaccess`'te çapayla (NE bayrağı), `_redirects`'te çapasız yazılır. `.htaccess` ayrıca http→https ve www'ye yönlendirme, önbellek ve sıkıştırma kuralları içerir.

## Yayına alma

1. **Form anahtarı:** [web3forms.com](https://web3forms.com)'da `bilgi@nifbilisim.com` için ücretsiz access key alın ve `src/config.mjs` → `form.accessKey` alanına yazın (ya da build sırasında `WEB3FORMS_KEY` ortam değişkeni verin). Formspree tercih ederseniz `form.endpoint`'i `https://formspree.io/f/XXXX` yapın. Anahtar yoksa formlar kullanıcıya telefon/e-posta yönlendirmesi gösterir.
2. `npm run build`
3. **Paylaşımlı hosting (cPanel/Apache):** eski WordPress dosyalarını yedekleyin, `dist/` içindeki *her şeyi* (gizli `.htaccess` dahil) `public_html/` içine yükleyin.
   **Netlify / Cloudflare Pages:** build komutu `npm run build`, yayın klasörü `dist`.
4. Google Search Console'da yeni `sitemap.xml`'i gönderin; Kapsam raporunda eski URL'lerin 301 verdiğini kontrol edin.
5. Google İşletme Profili'ndeki web sitesi adresini ve bilgileri kontrol edin.

## Kalite kontrol (yapıldı)

- ✅ Telefon, e-posta ve adres `01-icerik.md` ile aynı (tek kaynak: `src/config.mjs`). Telefonlar `tel:` bağlantılı.
- ✅ 14 sayfanın hepsinde tek H1 ve atlamasız H1→H2→H3 sırası (otomatik test).
- ✅ 375px genişlikte hiçbir sayfada yatay kaydırma yok; mobil CTA çubuğu görünür (otomatik test).
- ✅ Her sayfanın footer'ında **"Design by Bera"** var.
- ✅ Google+ linki, eski tweet/Instagram widget'ları, bülten formu, üst bar, slider ve video kaldırıldı. Facebook, X, Instagram, LinkedIn, Flickr korundu.
- ⚠️ Lighthouse skoru ölçülmedi; yapı (WebP, lazy-load, sabit görsel ölçüleri, tek CSS dosyası ~46 KB (sıkıştırmasız), ~8.5 KB JS, framework yok) 90+ hedefine uygun. Yayından sonra PageSpeed Insights ile doğrulayın.

## Açık noktalar (karar/bilgi gerekiyor)

1. **Çalışma saatleri** eski sitede yok. İletişim sayfasında ve footer'da "Çalışma saatlerimiz için lütfen arayın." yazıyor. Doğru saatleri `src/config.mjs` → `hours` alanına girince her yerde (JSON-LD `openingHours` dahil) görünür.
2. **WhatsApp:** Mobil çubuktaki WhatsApp butonu Gsm hattına (`+90 532 669 1789`) bağlı. Bu numaranın WhatsApp kullandığı doğrulanmalı; kullanmıyorsa `config.mjs` → `whatsapp` değiştirilmeli ya da buton kaldırılmalı.
3. **Adres formatı:** Kaynakta "C Blok No: 13/3 – 12" yazıyor; "13/3-12" gibi bir kapı numarası mı yoksa farklı bir şey mi, netleştirilmeli. Posta kodu ve harita koordinatı bilinmediği için eklenmedi; harita adres metniyle aranıyor, pin konumu kontrol edilmeli.
4. **Hizmet talep formu:** Eski sayfa bu ortamdan çekilebildi. Alanlar (Ad, Firma, Hizmet, E-posta, Telefon, Konu, İleti) ve hizmet listesi (Bakım Anlaşması dahil) yeni forma taşındı; tekli seçim çoklu seçime çevrildi, Grafik Tasarım ve Digital Signage eklendi.
5. **Web tasarım referansları:** `/category/web-tasarim/` sayfasından 10 site adı alındı ve yalnızca isim olarak listelendi (siteler hâlâ yayında mı bilinmediği için link verilmedi).
6. **Mağaza kategori linkleri** shop.nifbilisim.com ana sayfasından alındı (14.10.2026). Mağaza yapısı değişirse `src/content/products.mjs` güncellenmeli.
7. **KVKK metni** genel bir aydınlatma metni şablonudur (veri sorumlusu, amaç, haklar). Şirketin tam ticari unvanı bilinmiyor; yayından önce bir hukukçuya kontrol ettirilmesi önerilir.
8. **"7×24 BT desteği"** ifadesi eski sitede yalnızca "BT kadrosu bulunmayan işletmeler için" olarak geçiyor; güven şeridinde de bu bağlamla kullanıldı. Hizmetin kapsamı hâlâ geçerli mi teyit edilmeli.
9. **Marka logoları** 2013 tarihli; bayiliklerin hâlâ geçerli olup olmadığı kontrol edilmeli (`src/images.mjs` → `BRANDS`). Listede dosya adı `bera-93.png` olan logo "Bera" olarak etiketlendi, doğruluğu kontrol edilmeli.
10. **Logo** yalnızca 250×61 PNG olarak mevcut; retina ekranlarda hafif yumuşak görünebilir. SVG/vektör logo varsa `images/` içine konup `src/images.mjs` güncellenmeli. Favicon logodaki işaretten üretildi.
11. **Alan adı:** canonical adres `https://www.nifbilisim.com` olarak ayarlandı (eski site http idi). Hosting'de SSL sertifikası aktif olmalı.
12. Eski sitedeki slider metinlerinden "Yemekhane takip ve turnike sistemi" ile "araç altı arama aynası satışı" (SEO anahtar kelimesi) için ayrıntılı içerik olmadığından ayrı bölüm açılmadı.
13. "Design by Bera" şu an düz metin; bağlantı istenirse `src/config.mjs` → `credit.href` alanına adres yazılabilir.

## Sunucusuz yayın (Cloudflare Pages + GitHub Pages)

Site tamamen statiktir; sunucu gerekmez. Build çıktısı `dist/` (içinde `_redirects`, `_headers`, `404.html`).

### Cloudflare Pages (ana hedef)
1. Cloudflare paneli → **Workers & Pages → Create → Pages → Connect to Git** → bu repoyu seçin.
2. Build command: `npm run build` · Output directory: `dist` · Ortam değişkenleri: `NODE_VERSION=20`, `WEB3FORMS_KEY=<anahtar>`.
3. İlk yayından sonra **Custom domains → Set up a custom domain** ile `www.nifbilisim.com` ekleyin.
4. Alan adı Cloudflare'de değilse (DNS başka yerde): alan adının nameserver'larını Cloudflare'e çevirin ya da DNS'te `www` için `CNAME → <proje>.pages.dev` kaydı açın. Kök alan (`nifbilisim.com`) için Cloudflare DNS gerekir; Redirect Rule ile `nifbilisim.com/*` → `https://www.nifbilisim.com/$1` (301) yönlendirin.
5. `_redirects` (eski WordPress adresleri → 301) ve `_headers` Cloudflare'de otomatik uygulanır.

### GitHub Pages (ikincil)
- `.github/workflows/pages.yml`, `main`'e her push'ta build alıp yayınlar. Repo → **Settings → Pages → Source: GitHub Actions**.
- Özel alan adı için repo değişkeni `PAGES_CNAME=www.nifbilisim.com` tanımlayın (build `CNAME` dosyasını üretir) ve DNS'te `www` → `0bera1.github.io` CNAME açın.
- ⚠️ GitHub Pages `_redirects`/`_headers` dosyalarını **uygulamaz** (eski URL 301'leri ve başlıklar yalnızca Cloudflare'de çalışır). Alan adı yoksa site `/nif-bilisim-alternatif/` alt yolunda açılır ve mutlak (`/...`) bağlantılar bozulur; bu yüzden GitHub Pages yalnızca özel alan adıyla kullanılmalıdır.
- Aynı alan adı aynı anda hem Cloudflare hem GitHub Pages'e bağlanamaz; canlı DNS tek hedefi göstermelidir.
