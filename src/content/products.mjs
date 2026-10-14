// Ürün kategorileri → shop.nifbilisim.com kategori bağlantıları
// (bağlantılar 14.10.2026 tarihinde mağazanın ana sayfasından alınmıştır).

const S = 'https://shop.nifbilisim.com/urun-kategori';

export const PRODUCT_CATEGORIES = [
  {
    icon: 'fingerprint',
    title: 'PDKS ve Geçiş Sistemleri',
    text: 'Personel devam kontrolü ve geçiş güvenliği için terminaller, okuyucular ve yazılımlar.',
    href: `${S}/pdks-gecis-sistemleri/`,
    sub: [
      { title: 'Yüz okuma cihazları', href: `${S}/pdks-gecis-sistemleri/yuz-okuma-cihazlari/` },
      { title: 'Parmak izi okuma cihazları', href: `${S}/pdks-gecis-sistemleri/parmak-izi-okuma-cihazlari/` },
      { title: 'Kartlı ve şifreli geçiş', href: `${S}/pdks-gecis-sistemleri/kartli-ve-sifreli-gecis-cihazlari/` },
      { title: 'Bekçi tur kontrol cihazları', href: `${S}/pdks-gecis-sistemleri/bekci-tur-kontrol-cihazlari/` },
      { title: 'Turnike sistemleri', href: `${S}/pdks-gecis-sistemleri/turnike-sistemleri/` },
    ],
  },
  {
    icon: 'cctv',
    title: 'Güvenlik Kameraları',
    text: 'AHD ve IP güvenlik kameraları, hazır kamera setleri.',
    href: `${S}/guvenlik-kameralari/`,
    sub: [
      { title: 'AHD güvenlik kameraları', href: `${S}/guvenlik-kameralari/ahd-guvenlik-kameralari/` },
      { title: 'IP güvenlik kameraları', href: `${S}/guvenlik-kameralari/ip-guvenlik-kameralari/` },
      { title: 'AHD kamera setleri', href: `${S}/guvenlik-kameralari/ahd-kamera-setleri/` },
    ],
  },
  {
    icon: 'bell-ring',
    title: 'Alarm ve Akıllı Ev',
    text: 'Kablolu ve kablosuz hırsız alarm sistemleri ve smart home çözümleri.',
    href: `${S}/hirsiz-alarm-ve-smart-home-sistemleri/`,
  },
  {
    icon: 'video',
    title: 'Görüntülü Diafon',
    text: 'IP görüntülü diafon sistemleri; apartman, site ve işyerleri için.',
    href: `${S}/ip-goruntulu-diafon-sistemleri/`,
  },
  {
    icon: 'hdd',
    title: 'Kayıt Cihazları',
    text: 'AHD ve NVR kayıt cihazları, HDD üniteleri.',
    href: `${S}/kayit-cihazlari/`,
    sub: [
      { title: 'AHD kayıt cihazları', href: `${S}/kayit-cihazlari/ahd-kayit-cihazlari/` },
      { title: 'NVR kayıt cihazları', href: `${S}/kayit-cihazlari/nvr-kayit-cihazlari/` },
      { title: 'HDD üniteleri', href: `${S}/kayit-cihazlari/hdd-uniteleri/` },
    ],
  },
  {
    icon: 'router',
    title: 'Network Ürünleri',
    text: 'Switch, access point, SFP modüller ve Cat kablolar.',
    href: `${S}/network-urunleri/`,
    sub: [
      { title: 'Switchler', href: `${S}/network-urunleri/switchler/` },
      { title: 'Access point modelleri', href: `${S}/network-urunleri/access-point-modelleri/` },
      { title: 'Cat kablolar', href: `${S}/network-urunleri/cat-kablolar/` },
      { title: 'SFP modüller', href: `${S}/network-urunleri/sfp-moduller/` },
    ],
  },
  {
    icon: 'server',
    title: 'Kabinetler',
    text: 'Dikili ve duvar tipi kabinetler, outdoor kabinetler ve aksesuarları.',
    href: `${S}/kabinetler/`,
  },
  {
    icon: 'parking',
    title: 'Otopark Sistemleri',
    text: 'Bariyer ve otopark geçiş sistemleri.',
    href: `${S}/otopark-sistemleri/`,
  },
  {
    icon: 'cpu',
    title: 'Bilgisayar Bileşenleri',
    text: 'Bilgisayar donanımı ve bileşenleri.',
    href: `${S}/bilgisayar-bilesenleri/`,
  },
  {
    icon: 'scan-line',
    title: 'X-Ray, Metal ve Araç Tarayıcılar',
    text: 'Üst düzey güvenlik gerektiren alanlar için tarama sistemleri.',
    href: `${S}/x-ray-metal-ve-arac-tarayicilar/`,
  },
];

const q = (s) => `https://shop.nifbilisim.com/?s=${encodeURIComponent(s)}&post_type=product`;
export const SHOP_BRANDS = ['Hikvision', 'Dahua', 'ZKTeco', 'Ajax', 'Ruijie', 'Neutron', 'TTEC'].map((name) => ({ name, href: q(name) }));
