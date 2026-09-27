export const siteConfig = {
  name: 'Ori Bilişim',
  domain: 'oribilisim.com.tr',
  phone: '+90 (539) 210 04 95',
  phoneHref: 'tel:+904663510000',
  whatsappHref: 'https://wa.me/905392100495',
  email: 'info@oribilisim.com.tr',
  address: 'Merkez Mah., Hopa / Artvin',
  mapQuery: 'Hopa, Artvin',
  hours: [
    { day: 'Pazartesi – Cuma', time: '08:30 – 19:00' },
    { day: 'Cumartesi', time: '09:00 – 17:00' },
    { day: 'Pazar', time: 'Acil Servis Hattı' },
  ],
  regions: ['Artvin', 'Hopa', 'Kemalpaşa', 'Arhavi', 'Borçka'],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/oribilisim' },
    { label: 'Facebook', href: 'https://facebook.com/oribilisim' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/oribilisim' },
    { label: 'YouTube', href: 'https://youtube.com/@oribilisim' },
  ],
  anydeskHref: 'https://anydesk.com/tr/downloads',
  teamviewerHref: 'https://www.teamviewer.com/tr/indir/',
}

export type SectorId = 'restoran' | 'market' | 'otel' | 'saha'

export type Sector = {
  id: SectorId
  label: string
  headline: string
  description: string
  software: { name: string; detail: string }[]
  hardware: { name: string; detail: string }[]
  gains: { label: string; value: string }[]
}

export const sectors: Sector[] = [
  {
    id: 'restoran',
    label: 'Restoran & Kafe',
    headline: 'Masadan mutfağa tek akış',
    description:
      'Garson el terminalinden alınan sipariş anında mutfak yazıcısına düşer, hesap tek dokunuşla Hugin S1 üzerinden masada kapanır.',
    software: [
      { name: 'Wolvox Restoran', detail: 'Masa, adisyon ve mutfak ekranı yönetimi' },
      { name: 'Wolvox El Terminali', detail: 'Garsondan anlık mobil sipariş' },
      { name: 'Wolvox ERP', detail: 'Reçete bazlı stok ve maliyet takibi' },
    ],
    hardware: [
      { name: 'Hugin S1', detail: 'Masada ödeme, PC Link ile Wolvox bağlantısı' },
      { name: 'Hugin Tiger T300', detail: 'Paket servis ve kapıda tahsilat' },
    ],
    gains: [
      { label: 'Sipariş süresi', value: '-%35' },
      { label: 'Masa devir hızı', value: '+%22' },
    ],
  },
  {
    id: 'market',
    label: 'Süpermarket & Perakende',
    headline: 'Kasada saniyeler, rafta doğruluk',
    description:
      'Barkodlu hızlı satış, terazi entegrasyonu ve şubeler arası anlık stok görünürlüğü ile kuyruğu eritin.',
    software: [
      { name: 'Wolvox Hızlı Satış', detail: 'Barkodlu, çoklu kasa satış ekranı' },
      { name: 'Wolvox ERP', detail: 'Cari, stok, fatura ve muhasebe' },
      { name: 'Akınsoft Bonus', detail: 'Sadakat puanı ve kampanya yönetimi' },
    ],
    hardware: [
      { name: 'Hugin S1', detail: 'Wolvox Hızlı Satış ile entegre ana kasa' },
      { name: 'Hugin Tiger T300', detail: 'Ekspres kasa ve yoğun saat desteği' },
    ],
    gains: [
      { label: 'Kasa işlem hızı', value: '+%40' },
      { label: 'Stok sayım hatası', value: '-%90' },
    ],
  },
  {
    id: 'otel',
    label: 'Otel & Konaklama',
    headline: 'Rezervasyondan check-out’a kusursuz misafir deneyimi',
    description: 'Oda durumu, rezervasyon kanalları, restoran ve minibar harcamaları tek ekranda birleşir.',
    software: [
      { name: 'Wolvox Otel', detail: 'Ön büro, rezervasyon ve kat hizmetleri' },
      { name: 'Wolvox Restoran', detail: 'Otel restoranı ve bar entegrasyonu' },
      { name: 'Wolvox ERP', detail: 'Tedarik, personel ve muhasebe' },
    ],
    hardware: [
      { name: 'Hugin S1', detail: 'Resepsiyon, restoran ve bar ödemeleri' },
      { name: 'Hugin Tiger T300', detail: 'Oda servisi ve havuz barı' },
    ],
    gains: [
      { label: 'Check-in süresi', value: '-%50' },
      { label: 'Ek harcama geliri', value: '+%18' },
    ],
  },
  {
    id: 'saha',
    label: 'Saha Satış & Lojistik',
    headline: 'Sahadaki ekibiniz, merkezle aynı anda',
    description:
      'Plasiyerler rotada sipariş alır, faturasını keser, tahsilatı yapar; tüm veriler merkeze anında akar.',
    software: [
      { name: 'Wolvox Mobil Satış', detail: 'Plasiyer sipariş ve tahsilat uygulaması' },
      { name: 'Wolvox ERP', detail: 'Depo, sevkiyat ve cari hesap' },
      { name: 'Wolvox E-Dönüşüm', detail: 'Sahada e-Fatura / e-İrsaliye' },
    ],
    hardware: [
      { name: 'Hugin Tiger T300', detail: 'Hafif, tuşlu, gün boyu sahada' },
      { name: 'Hugin S1', detail: '5000 mAh batarya ile yoğun teslimat günleri' },
    ],
    gains: [
      { label: 'Tahsilat süresi', value: '-%45' },
      { label: 'Günlük ziyaret', value: '+%30' },
    ],
  },
]

export const faqs = [
  {
    q: 'Akınsoft lisansımı yeni bilgisayara nasıl taşırım?',
    a: 'Lisans taşıma işlemi için mevcut bilgisayarda lisansı serbest bırakmanız ve yeni cihazda aktivasyon kodu ile tanımlamanız gerekir. Ekibimiz bu işlemi uzaktan bağlantı ile birkaç dakika içinde tamamlar.',
  },
  {
    q: 'Hugin POS cihazım banka bağlantısı hatası veriyor, ne yapmalıyım?',
    a: 'Öncelikle cihazın internet (4G, Wi-Fi veya Ethernet) bağlantısını kontrol edin. Sorun devam ederse cihazı yeniden başlatın ve banka uygulamasında parametre yüklemesi yapın. Hâlâ çözülmezse yetkili servisimizi arayın.',
  },
  {
    q: 'Gün sonu almayı unuttum, ne olur?',
    a: 'Yeni nesil yazar kasalar 24 saat içinde Z raporu alınmazsa satış yapmayı durdurur. Cihaz açılışında gün sonu işlemini tamamlayarak satışa devam edebilirsiniz; ERP aktarımı otomatik yapılır.',
  },
  {
    q: 'Yazılım güncellemeleri ücretli mi?',
    a: 'Aktif destek paketiniz kapsamındaki tüm sürüm güncellemeleri ve mevzuat uyumluluk güncellemeleri ücretsizdir. Destek paketi olmayan müşterilerimiz için güncelleme hizmeti ayrıca fiyatlandırılır.',
  },
  {
    q: 'Saha desteği hangi bölgelerde veriliyor?',
    a: 'Artvin merkez, Hopa, Kemalpaşa, Arhavi ve Borçka başta olmak üzere bölgedeki tüm işletmelere yerinde kurulum, eğitim ve arıza desteği sağlıyoruz.',
  },
]

export type HuginModel = {
  id: 't300' | 's1'
  name: string
  tagline: string
  image: string
  summary: string
  idealFor: string[]
  specs: { label: string; value: string }[]
  highlights: string[]
}

export const huginModels: HuginModel[] = [
  {
    id: 't300',
    name: 'Hugin Tiger T300',
    tagline: 'Hafif, tuşlu, sahada güvenilir',
    image: '/images/pos-t300.png',
    summary:
      'Fiziksel tuş takımı ve kompakt gövdesiyle hızlı işlem isteyen esnaf, paket servis ve plasiyerler için ideal yeni nesil yazar kasa POS.',
    idealFor: ['Küçük esnaf', 'Paket servis', 'Saha satış'],
    specs: [
      { label: 'Ekran', value: '2,8" renkli dokunmatik' },
      { label: 'Batarya', value: '2600 mAh' },
      { label: 'Ağırlık', value: '360 g' },
      { label: 'Bağlantı', value: '4G, Wi-Fi' },
      { label: 'Ödeme', value: 'Temassız, çipli, manyetik' },
    ],
    highlights: ['Tek elle kullanım', 'Tuşlarla hızlı satış', 'Uygun maliyetli giriş'],
  },
  {
    id: 's1',
    name: 'Hugin S1',
    tagline: 'Android akıllı POS, Wolvox ile tam uyum',
    image: '/images/pos-s1.png',
    summary:
      'Geniş dokunmatik ekranı ve Android 12 altyapısıyla restoran, market ve mağaza kasalarında Akınsoft Wolvox ile PC Link üzerinden entegre çalışır.',
    idealFor: ['Restoran & kafe', 'Market', 'Mağaza'],
    specs: [
      { label: 'Ekran', value: '5,5" kapasitif dokunmatik' },
      { label: 'İşletim Sistemi', value: 'Android 12' },
      { label: 'Batarya', value: '5000 mAh' },
      { label: 'Bağlantı', value: '4G, Wi-Fi, Bluetooth' },
      { label: 'Ödeme', value: 'Temassız, çipli, manyetik' },
    ],
    highlights: ['Wolvox PC Link entegrasyonu', 'Uygulama desteği', 'Gün boyu batarya'],
  },
]
