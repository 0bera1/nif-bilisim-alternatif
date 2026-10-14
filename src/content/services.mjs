// Hizmet içerikleri. Metinler 01-icerik.md'den alınmış, yazım hataları düzeltilmiş ve sadeleştirilmiştir.
// Yeni bilgi eklenmemiştir; SSS cevapları da yalnızca mevcut metinlerden türetilmiştir.

const SHOP = 'https://shop.nifbilisim.com';

/** Genel 5 adımlı çalışma süreci (anasayfa + hizmet sayfaları). */
export const PROCESS = [
  { icon: 'clipboard-list', title: 'İhtiyaç analizi', text: 'Yerinde ve ücretsiz keşifle mevcut altyapınızı ve ihtiyaçlarınızı belirliyoruz.' },
  { icon: 'pencil-ruler', title: 'Planlama', text: 'İş ve proje sürecini, ileride doğabilecek ihtiyaçları da hesaba katarak planlıyoruz.' },
  { icon: 'lightbulb', title: 'Çözüm sunumu', text: 'Uygun ve kaliteli ürün seçeneklerini, geniş marka yelpazemizden size sunuyoruz.' },
  { icon: 'wrench', title: 'Kurulum', text: 'Ürün tedariğinden kuruluma kadar tüm işi ekibimizle eksiksiz tamamlıyoruz.' },
  { icon: 'key-round', title: 'Teslim', text: 'Testleri yapılan sistemi anahtar teslim olarak size teslim ediyoruz.' },
];

export const SERVICES = [
  // ───────────────────────────────── GÜVENLİK
  {
    slug: 'guvenlik-sistemleri',
    oldSlug: '/guvenlik-sistemleri-3/',
    title: 'Güvenlik Sistemleri',
    icon: 'shield-check',
    summary: 'AHD ve IP güvenlik kameraları, hırsız alarm sistemleri ve görüntülü diafon çözümleri.',
    chips: ['Güvenlik kameraları', 'Alarm', 'Görüntülü diafon'],
    metaTitle: 'Güvenlik Kamerası ve Alarm Sistemleri Kurulumu – Torbalı, İzmir',
    metaDescription:
      'Torbalı ve İzmir genelinde AHD ve IP güvenlik kamerası kurulumu, hırsız alarm sistemleri ve görüntülü diafon sistemleri. Yerinde ücretsiz keşif, anahtar teslim kurulum.',
    keywords: 'güvenlik kamerası kurulumu, AHD güvenlik kamerası, İzmir Torbalı güvenlik kamera montajı ve satışı, alarm sistemi, görüntülü diafon sistemi kurulumu',
    lead: 'AHD ve IP güvenlik kameraları, hırsız alarm sistemleri ve görüntülü diafon sistemleriyle eviniz ve işyeriniz için net çözümler.',
    image: { src: 'guvenlik-sistemleri2', alt: 'Bir evin çatısına monte edilmiş güvenlik kameraları', w: 1600, h: 1200 },
    intro: [
      'Güvenlik sistemleri hayatımızın en önemli ihtiyaçlarından biri haline geldi. Konut ve işyerlerinde kendinizi güvende hissettirecek, siz dışarıdayken aklınızı evinizde ve işyerinizde bırakmayacak güvenlik sistemleriyle çözümler sunuyoruz.',
      'İhtiyaçlarınızı yerinde tespit ediyor, geliştirilebilir ve son teknoloji ürün yelpazemizden seçenekleri sizinle paylaşıp projelendiriyoruz.',
      'Analog HD ve IP kamera modelleri, hırsız alarm sistemleri ve görüntülü diafon sistemlerimizle size net çözümler sunuyoruz.',
    ],
    offersTitle: 'Güvenlik çözümlerimiz',
    offers: [
      { id: 'guvenlik-kameralari', icon: 'cctv', title: 'Güvenlik Kameraları', text: 'AHD (analog HD), IP ve Turbo HD güvenlik kameraları ile kayıt cihazları.' },
      { id: 'alarm', icon: 'bell-ring', title: 'Hırsız Alarm Sistemleri', text: 'Kablolu ve kablosuz, akıllı alarm sistemleri ve hırsız ihbar sistemleri.' },
      { id: 'diafon', icon: 'video', title: 'Görüntülü Diafon Sistemleri', text: 'IP ve DT8 kablolu görüntülü diafon sistemleri.' },
    ],
    shopCta: {
      title: 'Güvenlik sistemi ürünlerimizi inceleyin',
      text: 'AHD ve IP güvenlik kameraları, hırsız alarm sistemleri ve görüntülü diafon modellerimiz online mağazamızda.',
      href: `${SHOP}/urun-kategori/guvenlik-kameralari/`,
    },
    faq: [
      { q: 'Keşif için ücret alıyor musunuz?', a: 'Hayır. Güvenlik sistemi ihtiyaçlarınızı yerinde ve ücretsiz keşifle belirliyor, size en uygun çözümü sunuyoruz.' },
      { q: 'Hangi kamera teknolojileriyle çalışıyorsunuz?', a: 'AHD (analog HD), IP ve Turbo HD güvenlik kameraları ile bunlara uygun kayıt cihazlarının satış ve kurulumunu yapıyoruz.' },
      { q: 'Kablosuz alarm sistemi kuruyor musunuz?', a: 'Evet. Kablolu ve kablosuz, akıllı alarm sistemleri ile hırsız ihbar sistemleri kuruyoruz.' },
      { q: 'Ürünleri doğrudan satın alabilir miyim?', a: 'Evet. Güvenlik kameraları, alarm ve diafon ürünlerini online mağazamız shop.nifbilisim.com üzerinden inceleyip satın alabilirsiniz.' },
    ],
    cta: { title: 'Ücretsiz keşif hizmetimizden yararlanın', text: 'Güvenlik sistemi ihtiyaçlarınızı yerinde keşifle belirleyip sizin için en uygun çözümleri sunuyoruz.' },
  },

  // ───────────────────────────────── NETWORK
  {
    slug: 'network-kurulumu',
    oldSlug: '/network-ag-altyapisi-kurulumu/',
    title: 'Network Kurulumu',
    icon: 'network',
    summary: 'Kablolu ve kablosuz ağ altyapısı; modem, router, firewall ve switch kurulumları.',
    chips: ['Kablolu ağ', 'Wi-Fi', 'Firewall & switch'],
    metaTitle: 'Network ve Kablosuz Ağ (Wi-Fi) Kurulumu – Torbalı, İzmir',
    metaDescription:
      'Torbalı, Ayrancılar, Gaziemir, Karabağlar ve İzmir genelinde kablolu ağ altyapısı, ağ kablosu çekimi, wireless (Wi-Fi) kurulumu ve network cihazı yükseltmeleri.',
    keywords: 'network kurulum, ağ kablosu kurulum, İzmir wireless kurulum, Torbalı ağ kablosu çeken firma, bilgisayar ağı kuran firma',
    lead: 'İhtiyaçlarınıza ve ileride doğabilecek gereksinimlere göre tasarlanan, geliştirilebilir kablolu ve kablosuz ağ altyapıları.',
    image: { src: 'network', alt: 'Merkezi bir ağa bağlı bilgisayarlar ve sunucuları gösteren çizim', w: 400, h: 300 },
    intro: [
      'Kablolu ve kablosuz network çözümlerimizi; müşterilerimizin ihtiyaçlarına yönelik ağ altyapısını, topolojisini ve ileride oluşabilecek ihtiyaçları göz önünde bulundurarak en kaliteli ve geliştirilebilir şekliyle sunuyoruz.',
      'Network sistemlerinde çıkabilecek problemleri önceden hesaplayıp donanım, yazılım ve destek alanlarında bütünleşik çözümler üretiyoruz.',
    ],
    offersTitle: 'Network hizmetlerimiz',
    offers: [
      { id: 'kablolu-ag', icon: 'cable', title: 'Kablolu Ağ Kurulumu', text: 'Kablolu ağ altyapısının hazırlanması, uç noktaların prizlerde sonlandırılması ve kabin patch panel sonlandırmaları. Altyapının hazırlanması ve sonlandırılması aşamalarındaki tüm ürünlerin tedariği de firmamızca yapılır.' },
      { id: 'kablosuz-ag', icon: 'wifi', title: 'Kablosuz Ağ Kurulumu', text: 'Büyük ve orta ölçekli işletmeler, fabrika, otel, hastane ve toplu konutlar için kablosuz ağ (Wi-Fi) gereksinimleri belirlenir; modem, router, access point ve hotspot konfigürasyonu çıkarılarak ürün tedariği ve kurulum yapılır.' },
      { id: 'network-cihazlari', icon: 'router', title: 'Network Cihazlarının Kurulumu', text: 'Mevcut altyapınızdaki yükseltmeler için destek veriyoruz. Modem, router, firewall ve switch ürünlerinin eksiklerini günümüz teknolojisine göre tespit edip model yükseltme ve iyileştirme işlemlerini gerçekleştiriyoruz.' },
    ],
    process: [
      { icon: 'clipboard-list', title: 'Analiz', text: 'Altyapınız ve ihtiyaçlarınız analiz edilir.' },
      { icon: 'pencil-ruler', title: 'Konfigürasyon', text: 'İleride doğabilecek ihtiyaçlar gözetilerek geliştirilebilir sistem konfigüre edilir.' },
      { icon: 'lightbulb', title: 'Ürün seçimi', text: 'Kullanılacak ürün seçenekleri size sunulur.' },
      { icon: 'key-round', title: 'Test ve teslim', text: 'Kurulumun ardından gerekli testler yapılarak sistem sorunsuz şekilde teslim edilir.' },
    ],
    shopCta: {
      title: 'Network ürünlerini inceleyin',
      text: 'Switch, access point, kabinet ve Cat kablo seçenekleri online mağazamızda.',
      href: `${SHOP}/urun-kategori/network-urunleri/`,
    },
    faq: [
      { q: 'Hangi alanlarda kablosuz ağ kuruyorsunuz?', a: 'Büyük ve orta ölçekli işletmeler, fabrikalar, oteller, hastaneler ve toplu konutlar başta olmak üzere ihtiyaç duyulan her alanda Wi-Fi altyapısı kuruyoruz.' },
      { q: 'Mevcut ağımızı yenilemeden iyileştirebilir misiniz?', a: 'Evet. Modem, router, firewall ve switch ürünlerinizin eksiklerini tespit edip model yükseltme ve iyileştirme işlemlerini yapıyoruz.' },
      { q: 'Kablo ve malzemeleri kim temin ediyor?', a: 'Altyapının hazırlanması ve sonlandırılması aşamalarında kullanılan tüm ürünlerin tedariği firmamız tarafından yapılır.' },
      { q: 'Hangi bölgelerde hizmet veriyorsunuz?', a: 'Torbalı, Ayrancılar, Gaziemir, Karabağlar başta olmak üzere İzmir genelinde hizmet veriyoruz.' },
    ],
    cta: { title: 'Ücretsiz keşif hizmetimizden yararlanın', text: 'Kablolu ya da kablosuz network kurulumlarınızı yerinde keşif yaparak projelendiriyor, size en uygun çözümleri sunuyoruz.' },
  },

  // ───────────────────────────────── OTOPARK
  {
    slug: 'otopark-sistemleri',
    oldSlug: '/otopark-sistemleri/',
    title: 'Otopark Sistemleri',
    icon: 'parking',
    summary: 'Otopark bariyerleri, OGS/HGS araç tanıma, biletli ve ücretli otopark sistemleri.',
    chips: ['Bariyer', 'OGS / HGS', 'Road blocker'],
    metaTitle: 'Otopark Sistemleri, Bariyer ve OGS/HGS Geçiş Sistemleri – İzmir',
    metaDescription:
      'Otopark bariyerleri, OGS/HGS otopark araç tanıma sistemi, biletli ve çıkışta ödemeli ücretli otopark sistemleri, road blocker ve kayar kapı sistemleri. İzmir Torbalı anahtar teslim kurulum.',
    keywords: 'otopark sistemleri kurulumu, İzmir otopark sistemi, otomatik geçiş, biletli geçiş otopark sistemleri, otopark bariyerleri, road blocker bariyer sistemi, kayar otopark kapısı motoru',
    lead: 'Otopark bariyerleri, OGS/HGS araç tanıma sistemi, biletli bariyerler ve çıkışta ödemeli ücretli otopark sistemleri.',
    image: { src: 'otopark', alt: 'Giriş ve çıkış bariyerleri, HGS antenleri ve loop dedektörlerini gösteren otopark sistemi şeması', w: 500, h: 382 },
    intro: [
      'Otopark sistemi ihtiyaçlarınızı yerinde keşif yaparak belirliyor, size en uygun paketlerimizi sunuyor ve anahtar teslim projelendiriyoruz.',
      'Otopark bariyer sistemleri, otoparklara giriş ve çıkış yapan araçların kontrollü ve güvenli geçişi için idealdir. 3, 4, 5, 6 metre ve ara uzunluklarda hazırlanabilen bariyer kollarıyla geçiş noktalarını tamamen kapatabilir, yalnızca onay verdiğiniz araçların geçişini sağlayabilirsiniz.',
    ],
    offersTitle: 'Otopark çözümlerimiz',
    offers: [
      { id: 'ogs-hgs', icon: 'scan-line', title: 'OGS / HGS Otopark Sistemleri', text: 'Apartman, site ve işyeri otoparklarında önceden onay verdiğiniz araçların hızlı, yabancı araçların ise kontrollü geçiş yapmasını sağlar.', img: 'otoparksm' },
      { id: 'otopark-bariyerleri', icon: 'barrier', title: 'Otopark Bariyerleri', text: 'Otoparklarda güvenliği sağlamak amacıyla kullanılan, farklı kol uzunluklarında hazırlanabilen bariyer sistemleri.', img: 'otopark-bariyerleri2sm' },
      { id: 'road-blocker', icon: 'octagon-x', title: 'Road Blocker Bariyer Sistemi', text: 'Üst düzey güvenlik gerektiren giriş ve çıkışlarda yol blokajı için en etkin ve güvenilir sistemlerden biri.', img: 'road-blocker-sm' },
    ],
    // Hizmete özel ek bölümler (layout tarafından render edilir)
    extra: [
      {
        type: 'feature',
        title: 'Araçlarınız için güvenlik paketi',
        paragraphs: [
          'Otopark sistemlerimiz; akıllı kol, emniyet fotoseli ve loop dedektörlerle, geçen araçların zarar görmemesi için güvenlik paketleriyle donatılmıştır.',
          'Emniyet fotoseli ve loop dedektör, bariyer kolunun altında bir araç varken kapat butonuna basılsa bile kolu hareket ettirmez. Fotosel ve loop dedektör arızalansa bile akıllı kol, altındaki bir cisme temas ettiğinde onu algılayıp hemen kalkar.',
          'Bariyerin özelliklerine ve otoparktaki araç geçiş yoğunluğuna göre açılma-kapanma süreleri 1 ile 6 saniye arasında değişir.',
        ],
        stats: [
          { value: '3–6 m', label: 'Bariyer kolu uzunluğu (ara ölçüler dahil)' },
          { value: '1–6 sn', label: 'Açılma / kapanma süresi' },
        ],
      },
      {
        type: 'list',
        title: 'Otopark sistemlerinde kullanılabilecek ekipmanlar',
        items: [
          'Otopark bariyerleri',
          'OGS ve HGS ile bariyerli otopark geçiş sistemleri',
          'Bilet alma-vermeli ücretli otopark bariyer sistemleri',
          'Mantar bariyer sistemleri',
          'Road blocker bariyer sistemleri',
          'Yana kayar bahçe kapıları',
        ],
      },
    ],
    shopCta: {
      title: 'Otopark sistemi ürünlerini inceleyin',
      text: 'Bariyer ve otopark geçiş ürünleri online mağazamızda.',
      href: `${SHOP}/urun-kategori/otopark-sistemleri/`,
    },
    faq: [
      { q: 'Bariyer kolları hangi uzunluklarda hazırlanabiliyor?', a: 'Bariyer kolları 3, 4, 5 ve 6 metre ile ara uzunluklarda hazırlanabilir.' },
      { q: 'Bariyer, altındaki bir araca zarar verir mi?', a: 'Emniyet fotoseli ve loop dedektör, kolun altında araç varken kapat butonuna basılsa bile kolu hareket ettirmez. Bunlar arızalansa bile akıllı kol bir cisme temas ettiğinde hemen kalkar.' },
      { q: 'Bariyerin açılma-kapanma süresi nedir?', a: 'Bariyerin özelliklerine ve otoparktaki geçiş yoğunluğuna göre 1 ile 6 saniye arasında değişir.' },
      { q: 'OGS / HGS otopark sistemi ne işe yarar?', a: 'Apartman, site ve işyeri otoparklarında önceden onay verdiğiniz araçların hızlı geçişini, yabancı araçların ise kontrollü geçişini sağlar.' },
    ],
    cta: { title: 'Yerinde ücretsiz keşif', text: 'Yerinde ücretsiz keşifle otopark sistemi ihtiyaçlarınıza çözüm sunalım.' },
  },

  // ───────────────────────────────── PDKS
  {
    slug: 'pdks-personel-takip',
    oldSlug: '/pdks-personel-devam-kontrol-sistemi/',
    title: 'PDKS – Personel Takip',
    longTitle: 'Personel Devam Kontrol Sistemleri (PDKS)',
    icon: 'fingerprint',
    summary: 'Yüz tanıma, parmak izi ve kartlı personel takip sistemleri; bekçi tur kontrol.',
    chips: ['Yüz tanıma', 'Parmak izi', 'Kartlı geçiş'],
    metaTitle: 'PDKS – Personel Devam Kontrol Sistemleri, Yüz Tanıma ve Parmak İzi – İzmir',
    metaDescription:
      'Yüz tanıma, parmak izi ve kartlı personel devam kontrol sistemleri (PDKS), bekçi tur kontrol sistemleri. Bordro programlarına aktarım, kurulum ve destek. İzmir Torbalı.',
    keywords: 'PDKS, personel devam kontrol sistemi, yüz tanıma terminali, parmak izi okuyucu, kartlı personel takip sistemi, bekçi tur kontrol sistemi, İzmir',
    lead: 'Çalışanların giriş-çıkış saatlerini tespit eden ve bu verilere göre ay sonu maaş hesaplamasını otomatik yapan sistemler.',
    image: { src: 'personel-devam-kontrol-sistemi', alt: 'Ekranında personel fotoğrafı görünen yüz tanıma terminali', w: 360, h: 360 },
    intro: [
      'Günümüzde personel mesai takibi için kart okuyucu, parmak izi okuyucu ve yüz tanıma cihazları kullanılır; hepsi aynı PDKS (personel devam kontrol sistemi) yazılımıyla çalışır.',
      'PDKS programı; giriş-çıkış, geç gelen, erken çıkan, mesaiye kalan ve devamsız personel raporları verir. Kesinti ve eklentileri de ilave ederek ay sonunda net hak edişi hesaplar. Eta, Logo, Mikro vb. bordro programlarına aktarım yaparak resmi tahakkukun çıkarılmasına yardımcı olur.',
      'İşletmenizin ihtiyacına ve personel sayısına göre uygun PDKS sistemini sunuyor, kurulum sonrasında personel tanımlamaları için destek veriyoruz. Kartlı sistemler için proximity kart temini de firmamız aracılığıyla yapılabilir.',
    ],
    offersTitle: 'PDKS çözümlerimiz',
    offers: [
      { id: 'yuz-tanima', icon: 'scan-face', title: 'Yüz Tanıma PDKS Sistemi', text: 'Cihaz duvara ya da turnike üzerine monte edilir; yetkili kişi personelin yüzünü cihaza tanıtır. Cihaz yüzleri farklı açı ve mesafelerden 2 boyutlu tarayıp kaydeder. Personel 30-60 cm mesafeden kameraya baktığında 1 saniyenin altında tanınarak geçiş yapar.', img: 'yuz-tanima' },
      { id: 'parmak-izi', icon: 'fingerprint', title: 'Parmak İzi PDKS Sistemi', text: 'Personelin istenen sayıda parmak izi, yedekleriyle birlikte cihaza tanıtılır. Geçiş sırasında okuyucu tanımlı izleri tarar, doğru sonucu bulduğunda Türkçe "teşekkürler" sesiyle personelin adını ekrana yazarak geçiş yetkisi verir.', img: 'parmak-izi' },
      { id: 'kartli', icon: 'id-card', title: 'Kartlı PDKS Sistemi', text: 'Personele verilen proximity kartlar okuyucuya yaklaştırılarak okutulur. Sistem verileri PDKS programına gönderir; ek kazanç, fazla mesai, avans, AGİ, geç kalma ve erken çıkmalara göre ay sonu net maaş hesaplanır.', img: 'kartli-gecis' },
      { id: 'bekci-tur', icon: 'route', title: 'Bekçi Tur Kontrol Sistemi', text: 'Bilgisayar bağlantılı bekçi tur kontrol sistemleri, güvenlik görevlilerinin bulunduğu her alanda görevlilerin devriyelerini takip etmek için kullanılır.', img: 'bekci-tur-takip-sistemism-2' },
    ],
    shopCta: {
      title: 'PDKS ürünlerini inceleyin',
      text: 'Yüz okuma, parmak izi, kartlı geçiş ve bekçi tur kontrol cihazları online mağazamızda.',
      href: `${SHOP}/urun-kategori/pdks-gecis-sistemleri/`,
    },
    faq: [
      { q: 'Hangi PDKS cihazlarını kuruyorsunuz?', a: 'Kart okuyucu, parmak izi okuyucu ve yüz tanıma cihazları kuruyoruz. Üç cihaz türü de aynı PDKS yazılımıyla çalışır.' },
      { q: 'PDKS verileri bordro programımıza aktarılabilir mi?', a: 'Evet. PDKS programı Eta, Logo, Mikro vb. bordro programlarına aktarım yaparak resmi tahakkukun çıkarılmasına yardımcı olur.' },
      { q: 'Kurulumdan sonra destek veriyor musunuz?', a: 'Evet. Kurulum sonrasında personel tanımlamaları için destek veriyoruz.' },
      { q: 'Proximity kartları sizden temin edebilir miyiz?', a: 'Evet. Kartlı geçiş personel takip sistemlerinde proximity kart temini firmamız aracılığıyla yapılabilir.' },
    ],
    cta: { title: 'Ücretsiz keşif', text: 'İşletmenizde kullanmayı düşündüğünüz PDKS için yerinde keşif yaparak size en uygun ürün ve çözümleri sunuyoruz.' },
  },

  // ───────────────────────────────── SİSTEM ODASI
  {
    slug: 'sistem-odasi-kurulumu',
    oldSlug: '/sistem-odasi-kurulumu/',
    title: 'Sistem Odası Kurulumu',
    longTitle: 'Sistem Odası (Data Center) Kurulumu',
    icon: 'server',
    summary: 'Anahtar teslim sistem odası (data center), sunucu ve bilgisayar kurulumları.',
    chips: ['Kabinet & kablolama', 'Sunucu', 'UPS & soğutma'],
    metaTitle: 'Sistem Odası (Data Center) Kurulumu – Torbalı, İzmir',
    metaDescription:
      'Anahtar teslim sistem odası ve veri merkezi kurulumu: yükseltilmiş taban, kabinet, topraklama, UPS, klima, UTP/fiber sonlandırma, sunucu ve firewall kurulumu, etiketleme ve dokümantasyon.',
    keywords: 'sistem odası kurulum, data center kurulumu, veri merkezi kurulumu, Torbalı sistem odası kurulum firması, sunucu kurulumu',
    lead: 'Mevcut altyapınıza ve gereksinimlerinize tam olarak cevap veren, geliştirilebilir ve güvenli sistem odaları.',
    image: { src: 'sistem-odasi', alt: 'Yükseltilmiş tabanlı bir sistem odasında kabinetlerin kablolamasını yapan teknisyenler', w: 920, h: 616 },
    intro: [
      'Sistem odası kurulum çözümlerimizde işletmenizin mevcut altyapısını ve gereksinimlerini tespit ederek en uygun ve ihtiyaçlarınıza tam anlamıyla cevap verecek çözümleri sunuyoruz.',
      'Yüksek kaliteli ve geliştirilebilir sistem odası tasarımlarımızda cihazların ve verilerin güvenliğini en üst seviyede tutuyoruz.',
    ],
    extra: [
      {
        type: 'checklist',
        title: 'Anahtar teslim projelendirdiğimiz aşamalar',
        text: 'Tüm çalışmaların sonunda kurulumların testleri yapılır ve proje "anahtar teslim" olarak teslim edilir.',
        items: [
          'Yükseltilmiş taban',
          'Kabinetlerin kurulması',
          'Topraklama',
          'Kesintisiz enerji için UPS ve jeneratör desteği',
          'Soğutma için klima sistemi',
          'Güç ve bağlantı kablolamaları',
          'UTP ve fiber sonlandırma',
          'Sistem standartlarınıza uygun patch cord bağlantıları',
          'IP ya da AHD güvenlik kameraları',
          'Giriş güvenliği için parmak izi, yüz tanıma ya da kartlı geçiş',
          'Yangın algılama ve ihbar sensörleri',
          'Yangın söndürme sistemleri (FM-200 vb.)',
          'Su baskını, nem, çiğ ve sıcaklık değişimine karşı ortam denetleyici',
          'Sunucu, firewall, router, modem ve switch kurulumları',
          'Etiketleme',
          'Dokümantasyon',
        ],
      },
    ],
    offersTitle: 'Kurulum kapsamı',
    offers: [
      { id: 'network-sonlandirma', icon: 'cable', title: 'Network Sonlandırmaları', text: 'Data kabinlerinde ve kullanıcı tarafında network hatları patch panel ve data prizlerine sonlandırılır, adreslemeleri ve testleri yapılarak teslim edilir.' },
      { id: 'sunucu', icon: 'server', title: 'Sunucu Kurulumları', text: 'Firewall, router, backbone, switch, sunucu, modem ya da ME switch kurulumlarını yapıyoruz. Tüm cihazların IP adreslemeleri ve arayüz şifreleri doküman halinde işletme yönetimine teslim edilir.' },
      { id: 'donanim', icon: 'boxes', title: 'Donanım ve Cihaz Temini', text: 'Sistem odası kurulumunda kullanılan tüm ürünlerin tedariği firmamız tarafından üstlenilir ve proje anahtar teslim olarak tamamlanır.' },
    ],
    shopCta: {
      title: 'Kabinet ve network ürünlerini inceleyin',
      text: 'Dikili ve duvar tipi kabinetler, aksesuarlar ve network ürünleri online mağazamızda.',
      href: `${SHOP}/urun-kategori/kabinetler/`,
    },
    faq: [
      { q: 'Sistem odası kurulumu neleri kapsıyor?', a: 'Yükseltilmiş taban, kabinet, topraklama, UPS ve jeneratör desteği, klima, kablolama, UTP/fiber sonlandırma, güvenlik kamerası, geçiş kontrol, yangın algılama ve söndürme, ortam denetleyici, aktif cihaz kurulumları, etiketleme ve dokümantasyon.' },
      { q: 'Kurulum sonrasında dokümantasyon veriyor musunuz?', a: 'Evet. Tüm sunucu ve aktif cihazların IP adreslemeleri ve arayüz şifreleri doküman halinde hazırlanıp işletme yönetimine teslim edilir.' },
      { q: 'Donanımı ayrıca temin etmemiz gerekir mi?', a: 'Hayır. Sistem odasında kullanılan tüm ürünlerin tedariğini firmamız üstlenir.' },
      { q: 'Teslim öncesi test yapılıyor mu?', a: 'Evet. Tüm çalışmaların sonunda kurulumların testleri yapılarak proje anahtar teslim olarak sonlandırılır.' },
    ],
    cta: { title: 'Ücretsiz keşif', text: 'Sistem odası kurulumunuz için ihtiyaçlarınızı belirleyip size uygun çözümler sunalım.' },
  },

  // ───────────────────────────────── WEB TASARIM
  {
    slug: 'web-tasarim-seo',
    oldSlug: '/web-tasarim-seo-sosyal-medya-takibi/',
    title: 'Web Tasarım & SEO',
    longTitle: 'Web Tasarım, SEO ve Sosyal Medya Takibi',
    icon: 'monitor-code',
    summary: 'Kurumsal ve kişisel web siteleri, e-ticaret, SEO ve sosyal medya takibi.',
    chips: ['Web tasarım', 'SEO', 'Sosyal medya'],
    metaTitle: 'Web Tasarım, SEO ve Sosyal Medya Yönetimi – Torbalı, İzmir',
    metaDescription:
      'Torbalı web tasarım: mobil uyumlu kurumsal ve kişisel web siteleri, e-ticaret, SEO (arama motoru optimizasyonu), Google reklamları, sosyal medya takibi ve site güncelleme hizmeti.',
    keywords: 'Torbalı web tasarım, İzmir web tasarım, SEO, arama motoru optimizasyonu, sosyal medya takibi, e-ticaret web sitesi',
    lead: 'Anahtar teslim dijital medya hizmetiyle web sitesi tasarımı, SEO ayarları ve sosyal medya takibi yapıyoruz.',
    image: { src: 'web-dizayn', alt: 'Web tasarım, responsive tasarım ve analitik kavramlarını anlatan illüstrasyon', w: 626, h: 417 },
    intro: [
      'Markanızı dijital platforma taşıyarak bilinirliğinizi artırıyoruz. Firmanızın kurumsal kimliğini oluşturuyor, markanıza özel tasarımlar yaratıyoruz. İnovatif fikirleri görsellikle birleştirerek web sitenizi bir bütün haline getiriyoruz.',
      'İlkemiz; geniş ekran, tablet ve mobil cihazları %100 destekleyen, kaliteli, teknik altyapısı güçlü ve hedeflenen amaca hizmet eden web siteleri yapmak. İhtiyaçlarınızı analiz ederek sizi rakiplerinizin önünde tutacak tasarımlar üretiyoruz.',
    ],
    offersTitle: 'Dijital hizmetlerimiz',
    offers: [
      { id: 'web-tasarim', icon: 'monitor-code', title: 'Web Tasarım', text: 'Kişisel ve kurumsal web sitelerinizi tasarlıyor, e-ticaret siteleriyle online satışlarınızı hayata geçiriyoruz. Tüm sitelerimiz mobil uyumludur.' },
      { id: 'seo', icon: 'search', title: 'SEO Optimizasyonu', text: 'Arama motoru optimizasyonuyla web sitenizi belirlenen anahtar kelimelerde üst sıralara taşıyor, daha fazla hedef kitleye ulaşmanızı sağlıyoruz. Google reklam (Adwords) çalışmalarıyla sponsorlu bağlantılarda en üst sıralarda yer almanızı sağlıyoruz.' },
      { id: 'sosyal-medya', icon: 'share-2', title: 'Sosyal Medya Takibi', text: 'Markanızı sosyal medyada öne çıkarıyor, ürün ve hizmetlerinizi binlerce kişiye ulaştırıyoruz. Facebook, Instagram ve X (Twitter) hesaplarınızı düzenli takip edip paylaşımlarınızı yürütüyoruz.' },
      { id: 'guncelleme', icon: 'refresh-cw', title: 'Güncelleme Hizmeti', text: 'Yayındaki web sitenizi isteğinize göre haftalık ve aylık güncellemelerle takip ediyoruz. Modül güncellemeleri, SEO ayarlarının takibi ve yeni sayfa ekleme konularında desteğimiz sürer.' },
    ],
    extra: [
      {
        type: 'references',
        id: 'referanslar',
        title: 'Tasarımını yaptığımız web sitelerinden bazıları',
        text: 'Tasarımını yaptığımız, SEO ayarlarını tamamlayıp yayına aldığımız kişisel ve kurumsal web sitelerinden bazıları:',
        items: [
          '34istanbul.com.tr',
          'Kalenderoto.com.tr',
          'Ozgeocal.com.tr',
          'SancakAhsapBodrum.com',
          'Bugsemsusbitkileri.com',
          'Segecelik.com.tr',
          'Petkoop.com.tr',
          'Bes Garden Evleri',
          'Ege Safira İnşaat ve Taahhüt',
          'Parkfortuna.com – Park Fortuna Evleri',
        ],
      },
    ],
    faq: [
      { q: 'Tasarladığınız siteler mobil uyumlu mu?', a: 'Evet. Geniş ekran, tablet ve mobil cihazları %100 destekleyen web siteleri tasarlıyoruz.' },
      { q: 'E-ticaret sitesi yapıyor musunuz?', a: 'Evet. Kişisel ve kurumsal sitelerin yanı sıra e-ticaret siteleriyle online satışlarınızı hayata geçiriyoruz.' },
      { q: 'Site yayına girdikten sonra destek veriyor musunuz?', a: 'Evet. İsteğinize göre haftalık ve aylık güncellemeler, modül güncellemeleri, SEO ayarlarının takibi ve yeni sayfa ekleme desteği veriyoruz.' },
      { q: 'Sosyal medya hesaplarımızı yönetebilir misiniz?', a: 'Evet. Facebook, Instagram ve X (Twitter) gibi hesaplarınızı düzenli olarak takip edip güncellemelerinizi ve paylaşımlarınızı yürütüyoruz.' },
    ],
    cta: { title: 'Projenizi konuşalım', text: 'Web sitesi, SEO ve sosyal medya ihtiyaçlarınızı analiz edip size özel bir yol haritası çıkaralım.' },
  },
];

/** Hizmetler sayfasındaki kısa bölümler (ayrı sayfası olmayan hizmetler). */
export const EXTRA_SERVICES = [
  {
    id: 'ortam-denetleyiciler',
    icon: 'thermometer',
    title: 'Ortam Denetleyiciler',
    text: 'Aşı dolapları, soğuk hava depoları ve sistem odaları için geliştirilen sistemler; elektrik kesintisi, ısı düşmesi ve yükselmesi, nem, çiğ ve su baskını gibi değişimlerde sizi uyarır. Kontrol her zaman elinizde kalır.',
    bullets: ['Elektrik kesintisi uyarısı', 'Isı düşmesi / yükselmesi', 'Nem ve çiğ takibi', 'Su baskını uyarısı'],
    img: { src: 'termometre-180x180', alt: 'Kırmızı göstergeli bir termometrenin yakın çekimi' },
  },
  {
    id: 'grafik-tasarim',
    icon: 'palette',
    title: 'Grafik Tasarım',
    text: 'Kurumsal kimlik çalışmaları, After Effects tasarımlar ve web siteleri için responsive arayüz tasarımları hazırlıyoruz.',
    bullets: ['Kurumsal kimlik', 'After Effects tasarımlar', 'Responsive web arayüzleri'],
  },
  {
    id: 'digital-signage',
    icon: 'tv',
    title: 'Tanıtım TV – Digital Signage',
    text: 'Küçük ve orta ölçekli işletmeler için hol ve lobi alanlarında kullanılmak üzere tanıtım TV kurulumları yapıyoruz.',
    bullets: ['Hol ve lobi ekranları', 'KOBİ’lere uygun kurulum'],
  },
  {
    id: 'bilgisayar-sunucu',
    icon: 'cpu',
    title: 'Bilgisayar ve Sunucu Kurulumu',
    text: 'Bilgisayar ve sunucu ağı kurulumu, sunucu yedeklemeleri ve BT kadrosu bulunmayan işletmeler için 7×24 BT süreçleri desteği sağlıyoruz.',
    bullets: ['Sunucu ve bilgisayar ağı kurulumu', 'Sunucu yedeklemeleri', '7×24 BT desteği'],
    link: '/hizmetler/sistem-odasi-kurulumu/',
  },
];

/** Hizmet talep formundaki seçenekler (eski formdaki liste + ek hizmetler). */
export const REQUEST_OPTIONS = [
  'Güvenlik Sistemleri Kurulumu',
  'Network Altyapısı ve Wi-Fi Kurulumu',
  'Otopark Sistemleri',
  'Personel Takip Sistemleri (PDKS)',
  'Sistem Odası Kurulumu',
  'Bilgisayar, Sunucu Kurulumu',
  'Ortam Denetleyiciler',
  'Web Tasarım / SEO',
  'Grafik Tasarım',
  'Tanıtım TV – Digital Signage',
  'Bakım Anlaşması',
];
