# PROMPT – NİF Bilişim Yeni Web Sitesi

Aşağıdaki promptu Claude'a (veya başka bir AI/kodlama aracına) ver. Yanında `01-icerik.md` ve `images/` klasörünü ekle.

---

## ROL
Sen kıdemli bir UI/UX tasarımcısı ve front-end geliştiricisisin. Görevin, İzmir Torbalı merkezli **NİF Bilişim** firması için eski, dağınık ve 2017'den kalma bir WordPress sitesinin yerine modern, profesyonel, hızlı ve mobil uyumlu yeni bir kurumsal web sitesi tasarlayıp kodlamak.

## GİRDİLER
- `01-icerik.md`: Eski sitedeki TÜM yazılı içerik (menü, sayfalar, hizmet metinleri, iletişim, SEO anahtar kelimeleri). Metinleri anlamını bozmadan kullan; yazım hatalarını düzelt, gereksiz tekrarları ve "SEO gizli metin" bloklarını sayfada görünür yapma (anahtar kelimeleri meta/başlıklara dağıt).
- `images/`: Eski sitedeki logo, hizmet görselleri ve marka logoları. Düşük çözünürlüklü (2017) olanları kırparak/maskeleyerek kullan; yetersiz kalan yerlerde temiz, tutarlı ikon seti (Lucide/Phosphor) ve soyut geometrik arka planlar kullan. Telifli stok fotoğraf uydurma.
- Logo: `logo21.png` – renk paletini logodan türet.

## SİTE YAPISI (sayfalar)
1. **Anasayfa**: Hero (güçlü başlık: "Doğru çözümler, mutlu müşteriler" + 2 CTA: "Ücretsiz Keşif Talep Et" ve "Hizmetlerimiz"), güven şeridi (Anahtar teslim / Ücretsiz keşif / 7×24 BT desteği / Geniş marka yelpazesi), hizmet kartları grid'i (6 ana hizmet), "Nasıl çalışıyoruz" 5 adımlı süreç (İhtiyaç analizi → Planlama → Çözüm sunumu → Kurulum → Teslim), marka/bayilik logoları (grayscale, hover'da renk, yatay kayan şerit), online mağaza bandı, son CTA ve footer.
2. **Hakkımızda (Firmamız)**
3. **Hizmetler** (her biri ayrı sayfa, ortak şablon: hero, açıklama, alt hizmet kartları, süreç, SSS, ücretsiz keşif CTA): Güvenlik Sistemleri, Network Kurulumu, Otopark Sistemleri, PDKS, Sistem Odası Kurulumu, Web Tasarım & SEO. Ek olarak kısa bölümler: Ortam Denetleyiciler, Grafik Tasarım, Tanıtım TV / Digital Signage.
4. **Ürünler / Mağaza**: Kategori kartları (PDKS, Güvenlik Kameraları, Alarm, Diafon…) → https://shop.nifbilisim.com ilgili kategori linkleri.
5. **İletişim**: Adres, telefonlar (tıklanabilir `tel:`), e-posta, çalışma saatleri alanı (placeholder), harita embed (Torbalı, İnönü Mah. Ahmet Özkan Bulvarı), iletişim formu.
6. **Hizmet Talep Formu**: ad, firma, telefon, e-posta, hizmet türü (çoklu seçim), mesaj, KVKK onay kutusu.

## TASARIM YÖNÜ
- Ton: güvenilir, teknolojik, sade. Hedef kitle: işletme sahipleri, site yöneticileri, apartman/fabrika/hastane yöneticileri.
- Renk: logodan türetilmiş ana renk + koyu lacivert/antrasit nötrler + tek vurgu rengi (CTA için). Yeterli kontrast (WCAG AA).
- Tipografi: 1 başlık fontu + 1 gövde fontu (ör. Inter / Plus Jakarta Sans / Manrope). Türkçe karakter desteği şart. Net hiyerarşi, geniş boşluklar.
- Bileşenler: yuvarlatılmış kartlar, ince gölgeler, ikon tabanlı hizmet kartları, yapışkan (sticky) şeffaf header, mobil hamburger menü, sabit "Ara / WhatsApp" butonu (mobilde).
- Hareket: scroll'da hafif fade/slide animasyonlar (prefers-reduced-motion'a saygılı), hover geçişleri. Ağır video arka plan KULLANMA.
- Dark mode opsiyonel.
- Eski sitedeki hataları tekrarlama: kalabalık üst bar, 6 sosyal ikonlu şerit, ölü Google+ linki, eski tweet/Instagram widget'ları, devasa slider, okunmayan uzun SEO metin blokları.

## TEKNİK ŞARTLAR
- Statik, hızlı: HTML + Tailwind CSS (veya saf CSS) + minimal vanilla JS. Alternatif: Astro/Next.js statik export. Tek komutla çalışsın, `README.md` ile kurulum anlat.
- Tam responsive (360px → 1920px), mobil öncelikli.
- Semantik HTML, erişilebilirlik (alt metinler, aria, klavye navigasyonu).
- SEO: sayfa başına özgün `<title>` ve `meta description`, Open Graph, `LocalBusiness` JSON-LD (ad, adres, telefon, e-posta, hizmet bölgesi: Torbalı/İzmir), sitemap.xml, robots.txt, temiz URL'ler. Eski URL'ler için 301 yönlendirme tablosu üret (eski slug → yeni slug).
- Performans: görselleri WebP'ye çevir, lazy-load, Lighthouse hedefi 90+.
- Form: backend yoksa Formspree/Web3Forms ile çalışacak şekilde hazırla; spam için honeypot.
- Google Plus ve eski Twitter widget'ı hariç sosyal linkleri koru (Facebook, X/Twitter, Instagram, LinkedIn, Flickr).

## ZORUNLU FOOTER İMZASI
Footer'ın en altında, telif satırının yanında küçük ve zarif şekilde şu yazı olacak:
**"Design by Bera"** (metin bağlantılı olabilir, sabit ve görünür kalsın).

## ÇIKTI FORMATI
1. Kısa tasarım kararı özeti (renk paleti, font, bileşen mantığı).
2. Tam proje dosya ağacı.
3. Tüm dosyaların eksiksiz kodu (placeholder bırakma; eksik görsel yerine ikon/gradient kullan).
4. Yönlendirme tablosu (301) ve yayına alma adımları.
5. İçerikte bulduğun tutarsızlıkları (ör. çalışma saatleri, hizmet talep formu içeriği, çekilemeyen sayfalar) ayrı bir "Açık noktalar" listesinde belirt; uydurma bilgi ekleme.

## KALİTE KONTROL (bitirmeden önce)
- Tüm telefon/e-posta/adres bilgileri `01-icerik.md` ile birebir aynı mı?
- Her sayfada tek bir H1, mantıklı H2/H3 sırası var mı?
- 375px'de yatay kaydırma yok mu, CTA'lar görünür mü?
- Footer'da "Design by Bera" var mı?
