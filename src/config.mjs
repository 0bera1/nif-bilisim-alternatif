// Firma bilgileri – tek kaynak. Tüm sayfalar, JSON-LD ve footer buradan beslenir.
// Bilgiler 01-icerik.md ile birebir aynıdır; değiştirmeden önce kaynağı kontrol edin.

export const SITE = {
  name: 'NİF Bilişim',
  legalName: 'NİF Bilişim',
  url: process.env.SITE_URL || 'https://www.nifbilisim.com', // canonical alan adı (https + www)
  locale: 'tr_TR',
  slogan: 'Doğru çözümler, mutlu müşteriler',
  description:
    'İzmir Torbalı merkezli NİF Bilişim; sistem odası ve network kurulumu, bilgisayar ve sunucu kurulumu, güvenlik sistemleri, PDKS, otopark sistemleri ve web tasarım hizmetlerini anahtar teslim sunar.',

  address: {
    display: 'İnönü Mahallesi, Ahmet Özkan Bulvarı, C Blok No: 13/3 – 12 Torbalı – İzmir',
    street: 'İnönü Mahallesi, Ahmet Özkan Bulvarı, C Blok No: 13/3 – 12',
    district: 'Torbalı',
    city: 'İzmir',
    country: 'TR',
  },
  // Harita sorgusu (Google Maps embed, API anahtarı gerektirmez)
  mapQuery: 'İnönü Mahallesi Ahmet Özkan Bulvarı Torbalı İzmir',

  phones: [
    { label: 'Tel & Fax', display: '(+90) 232 570 0431', href: 'tel:+902325700431', e164: '+902325700431' },
    { label: 'Gsm', display: '(+90) 532 669 1789', href: 'tel:+905326691789', e164: '+905326691789' },
  ],
  // Mobil sabit butondaki WhatsApp numarası (Gsm hattı). Bkz. README > Açık noktalar.
  whatsapp: '905326691789',
  email: 'bilgi@nifbilisim.com',

  // Çalışma saatleri eski sitede yok. Doğrulanmış bilgi gelince doldurun, örn:
  // hours: [{ days: 'Pazartesi – Cuma', time: '09:00 – 18:00' }, { days: 'Cumartesi', time: '09:00 – 13:00' }]
  hours: null,

  areaServed: ['Torbalı', 'Ayrancılar', 'Gaziemir', 'Karabağlar', 'İzmir'],

  shop: 'https://shop.nifbilisim.com',

  social: [
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/Nif-Bili%C5%9Fim-410414712643643/' },
    { name: 'X (Twitter)', icon: 'x', href: 'https://twitter.com/nifbil' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/nifbil/' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/nifbilisim' },
    { name: 'Flickr', icon: 'flickr', href: 'https://www.flickr.com/photos/153503398@N06/' },
  ],

  // Form gönderimi: Web3Forms (varsayılan) veya Formspree.
  //  - Web3Forms: https://web3forms.com adresinden bilgi@nifbilisim.com için ücretsiz "access key" alın ve aşağıya yazın.
  //  - Formspree: endpoint'i 'https://formspree.io/f/XXXX' yapın, accessKey'i boş bırakın.
  form: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: process.env.WEB3FORMS_KEY || '',
  },

  // Footer imzası (zorunlu). İsterseniz href'e portfolyo adresinizi yazın; boşsa düz metin olarak görünür.
  credit: { text: 'Design by Bera', href: 'https://beraekimci.com.tr/' },
};
