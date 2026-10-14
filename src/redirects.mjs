// Eski WordPress URL'leri → yeni URL'ler (301). Build; _redirects, .htaccess ve README tablosu bunu kullanır.
// Not: '#' içeren hedefler Apache'de (.htaccess, NE bayrağı) çapa ile, _redirects'te çapasız yazılır.

export const REDIRECTS = [
  // Ana sayfalar
  { from: '/hakkimizda-bilisim-bilgisayar-firmasi-torbali/', to: '/hakkimizda/' },
  { from: '/guvenlik-sistemleri-3/', to: '/hizmetler/guvenlik-sistemleri/' },
  { from: '/network-ag-altyapisi-kurulumu/', to: '/hizmetler/network-kurulumu/' },
  { from: '/otopark-sistemleri/', to: '/hizmetler/otopark-sistemleri/' },
  { from: '/pdks-personel-devam-kontrol-sistemi/', to: '/hizmetler/pdks-personel-takip/' },
  { from: '/sistem-odasi-kurulumu/', to: '/hizmetler/sistem-odasi-kurulumu/' },
  { from: '/web-tasarim-seo-sosyal-medya-takibi/', to: '/hizmetler/web-tasarim-seo/' },
  // /iletisim/ ve /hizmet-talebi/ adresleri aynen korunuyor (yönlendirme gerekmez)

  // Ürün / filtre sayfaları
  { from: '/urun-filtre/ortam-denetleyiciler/', to: '/hizmetler/#ortam-denetleyiciler' },
  { from: '/urunler/ogs-hgs-otopark-arac-tanima-sistemi/', to: '/hizmetler/otopark-sistemleri/#ogs-hgs' },
  { from: '/urunler/otopark-bariyerleri/', to: '/hizmetler/otopark-sistemleri/#otopark-bariyerleri' },
  { from: '/urunler/road-blocker-bariyer-sistemi/', to: '/hizmetler/otopark-sistemleri/#road-blocker' },
  { from: '/urunler/yuz-tanima-terminalleri/', to: '/hizmetler/pdks-personel-takip/#yuz-tanima' },
  { from: '/urunler/parmak-izi-okuma-sistemleri/', to: '/hizmetler/pdks-personel-takip/#parmak-izi' },
  { from: '/urunler/kartli-personel-takip-sistemleri/', to: '/hizmetler/pdks-personel-takip/#kartli' },
  { from: '/urunler/bekci-tur-kontrol-sistemleri/', to: '/hizmetler/pdks-personel-takip/#bekci-tur' },

  // Web tasarım referans kategorisi ve yazıları
  { from: '/category/web-tasarim/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/34istanbul-com-tr-yayina-girdi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/kalenderoto-com-tr-yayina-girdi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/ozgeocal-com-tr-yeni-yuzuyle-yayina-girdi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/sancakahsapbodrum-com-websitesi-yenilendi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/bugsemsusbitkileri-com-websitesi-yayina-girdi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/segecelik-com-tr-websitesi-yayina-girdi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/petkoop-com-tr-websitesi-yayina-girdi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/bes-garden-evleri-websitesi-tamamlandi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/ege-safira-insaat-taahhut-firmasinin-websitesi/', to: '/hizmetler/web-tasarim-seo/#referanslar' },
  { from: '/parkfortuna-com-park-fortuna-evleri/', to: '/hizmetler/web-tasarim-seo/#referanslar' },

  // WordPress kalıntıları
  { from: '/feed/', to: '/' },
];
