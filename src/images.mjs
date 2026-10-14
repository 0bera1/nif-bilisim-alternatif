// Görsel kaynakları. Build, images/ klasöründeki orijinalleri WebP'ye çevirip dist/assets/img/ altına yazar.
// widths: üretilecek genişlikler (orijinalden büyük olanlar atlanır). w/h: orijinal ölçü (CLS önlemek için).

export const IMAGES = {
  'logo': { file: 'logo21.png', w: 250, h: 61, widths: [250] },
  'logo-footer': { file: 'logo-footer2.png', w: 220, h: 60, widths: [220] },

  'guvenlik-sistemleri2': { file: 'guvenlik-sistemleri2.jpg', w: 1600, h: 1200, widths: [640, 1024, 1600] },
  'network': { file: 'network.jpg', w: 400, h: 300, widths: [400] },
  'otopark': { file: 'otopark.jpg', w: 500, h: 382, widths: [500] },
  'personel-devam-kontrol-sistemi': { file: 'personel-devam-kontrol-sistemi.jpg', w: 360, h: 360, widths: [360] },
  'sistem-odasi': { file: 'sistem-odasi.jpg', w: 920, h: 616, widths: [640, 920] },
  'web-dizayn': { file: 'web-dizayn.jpg', w: 626, h: 417, widths: [626] },

  // Küçük (2017) görseller: yalnızca küçük, maskelenmiş küçük resim olarak kullanılır
  'guvenlik-sistemleri-180x180': { file: 'guvenlik-sistemleri-180x180.jpg', w: 180, h: 180, widths: [180] },
  'web-dizayn-180x180': { file: 'web-dizayn-180x180.jpg', w: 180, h: 180, widths: [180] },
  'termometre-180x180': { file: 'termometre-180x180.jpg', w: 180, h: 180, widths: [180] },
  'takip-sistemi-180x180': { file: 'takip-sistemi-180x180.png', w: 180, h: 180, widths: [180] },
  'otoparksm': { file: 'otoparksm.jpg', w: 110, h: 84, widths: [110] },
  'otopark-bariyerleri2sm': { file: 'otopark-bariyerleri2sm.jpg', w: 110, h: 106, widths: [110] },
  'road-blocker-sm': { file: 'road-blocker-sm.jpg', w: 110, h: 97, widths: [110] },
  'yuz-tanima': { file: 'yuz-tanima.jpg', w: 110, h: 85, widths: [110] },
  'parmak-izi': { file: 'parmak-izi.jpg', w: 110, h: 103, widths: [110] },
  'kartli-gecis': { file: 'kartli-gecis.jpg', w: 110, h: 88, widths: [110] },
  'bekci-tur-takip-sistemism-2': { file: 'bekci-tur-takip-sistemism-2.jpg', w: 130, h: 73, widths: [130] },
};

// Marka / bayilik logoları (150x100 şeffaf PNG; birkaçı JPG)
export const BRANDS = [
  ['acer-94.png', 'Acer'], ['adobe-91.png', 'Adobe'], ['arcserve-2232.png', 'Arcserve'], ['asus-90.png', 'ASUS'],
  ['autodesk-92.png', 'Autodesk'], ['bera-93.png', 'Bera'], ['canon-95.png', 'Canon'], ['casio-96.png', 'Casio'],
  ['dell-99.png', 'Dell'], ['d-link-100.png', 'D-Link'], ['exper-102.png', 'Exper'], ['epson-101.png', 'Epson'],
  ['hp-103.png', 'HP'], ['hpe-104.png', 'Hewlett Packard Enterprise'], ['huawei-105.png', 'Huawei'], ['ibm-106.png', 'IBM'],
  ['inform-107.png', 'Inform'], ['intel-108.png', 'Intel'], ['kaspersky-109.png', 'Kaspersky'], ['lacie-110.png', 'LaCie'],
  ['logitech-113.png', 'Logitech'], ['lenovo-112.png', 'Lenovo'], ['maxell-114.png', 'Maxell'], ['mobile-iron-116.png', 'MobileIron'],
  ['microsoft-115.png', 'Microsoft'], ['msi-117.png', 'MSI'], ['oki-118.png', 'OKI'], ['neutron.jpg', 'Neutron'],
  ['perkotek-1.jpg', 'Perkotek'], ['sandisk-120.png', 'SanDisk'], ['samsung-119.png', 'Samsung'], ['softlayer-2231.png', 'SoftLayer'],
  ['seagate-121.png', 'Seagate'], ['sony-122.png', 'Sony'], ['targus-123.png', 'Targus'], ['tplink-125.png', 'TP-Link'],
  ['trust-126.png', 'Trust'], ['tsens.jpg', 'Tsens'], ['viewsonic-129.png', 'ViewSonic'], ['unify-127.png', 'Unify'],
  ['xerox-132.png', 'Xerox'], ['wacom1-131.png', 'Wacom'], ['yealink-134.png', 'Yealink'], ['zyxel-135-135.png', 'Zyxel'],
].map(([file, name]) => ({ file, name, slug: file.replace(/\.(png|jpg)$/, '') }));

const base = (name, w) => `/assets/img/${name}-${w}.webp`;

/** <img> etiketi üretir (WebP, srcset, lazy-load, sabit ölçü). */
export function img(name, alt, { cls = '', sizes = '100vw', eager = false, width, height } = {}) {
  const def = IMAGES[name];
  if (!def) throw new Error(`Bilinmeyen görsel: ${name}`);
  const widths = def.widths.filter((w) => w <= def.w);
  const largest = widths[widths.length - 1];
  const srcset = widths.length > 1 ? ` srcset="${widths.map((w) => `${base(name, w)} ${w}w`).join(', ')}" sizes="${sizes}"` : '';
  const w = width || def.w;
  const h = height || Math.round((def.h / def.w) * w);
  return `<img src="${base(name, largest)}"${srcset} width="${w}" height="${h}" alt="${alt}"${cls ? ` class="${cls}"` : ''} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}
