const KB_ORIGIN = 'https://bilgibankasi.akinsoft.net'
export const KB_HOME = KB_ORIGIN

export const kbCategories = [
  { id: 113, label: 'Yeni Nesil Yazar Kasa POS', pages: 3 },
  { id: 57, label: 'Yılsonu Devir İşlemleri', pages: 1 },
  { id: 449, label: 'Genel Bilgiler', pages: 2 },
  { id: 398, label: 'WOLVOX Web Entegrasyon', pages: 2 },
  { id: 78, label: 'Donanım Entegrasyonları', pages: 1 },
] as const

export type KbArticle = {
  id: string
  code: string
  title: string
  url: string
  category: string
}

const ITEM_PATTERN =
  /<div class="cate-single-item">[\s\S]*?<h4[^>]*>\s*<a href="(\/tr\/home\/makale\/(\d+)-[^"]+)">([\s\S]*?)<\/a>/g

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  quot: '"',
  apos: "'",
  lt: '<',
  gt: '>',
  nbsp: ' ',
}

function decodeEntities(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => NAMED_ENTITIES[name.toLowerCase()] ?? m)
    .replace(/\s+/g, ' ')
    .trim()
}

async function fetchCategoryPage(categoryId: number, page: number): Promise<string | null> {
  const url = `${KB_ORIGIN}/tr/home/makalelistesi?kat=${categoryId}${page > 1 ? `&page=${page}` : ''}`
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; OriBilisimBot/1.0)' },
      next: { revalidate: 60 * 60 * 12 },
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return null
    return await res.text()
  } catch {
    return null
  }
}

function parseArticles(html: string, category: string): KbArticle[] {
  const items: KbArticle[] = []
  for (const match of html.matchAll(ITEM_PATTERN)) {
    const [, path, id, rawTitle] = match
    items.push({
      id,
      code: `A${id}`,
      title: decodeEntities(rawTitle),
      url: `${KB_ORIGIN}${path}`,
      category,
    })
  }
  return items
}

export async function getKbArticles(): Promise<KbArticle[]> {
  const jobs = kbCategories.flatMap((cat) =>
    Array.from({ length: cat.pages }, (_, i) =>
      fetchCategoryPage(cat.id, i + 1).then((html) => (html ? parseArticles(html, cat.label) : [])),
    ),
  )
  const results = (await Promise.all(jobs)).flat()

  const seen = new Set<string>()
  const unique = results.filter((a) => (seen.has(a.id) ? false : (seen.add(a.id), true)))

  return unique.length > 0 ? unique : fallbackArticles
}

const fallbackArticles: KbArticle[] = [
  { id: '4073', title: 'Hugin S1 PC Link Entegrasyonu', category: 'Yeni Nesil Yazar Kasa POS' },
  {
    id: '4082',
    title: 'Hugin S1 PC Link ERR_UNAUTHORIZED-X-hardwareid Eşleşmiyor Hatası ve Çözümü',
    category: 'Yeni Nesil Yazar Kasa POS',
  },
  { id: '4011', title: 'Pos Ödeme başarısız X30TR', category: 'Yeni Nesil Yazar Kasa POS' },
  { id: '3845', title: 'WOLVOX ERP Programı 2026 Yılı Devir İşlemleri', category: 'Yılsonu Devir İşlemleri' },
  { id: '3718', title: 'WOLVOX 8 ERP Programı 2026 Yılsonu Devir İşlemleri', category: 'Yılsonu Devir İşlemleri' },
  {
    id: '3641',
    title: 'Katma Değer Vergisi (KDV) Oran Değişikliğinin Wolvox ERP Programında Uyarlanması',
    category: 'Genel Bilgiler',
  },
  { id: '1816', title: 'MSSQL Server 2012 kurulumunu nasıl yapabilirim?', category: 'Genel Bilgiler' },
  {
    id: '2207',
    title: 'Akınsoft Wolvox Web Entegrasyon Programı Genel Ayarlar (Wolvox ile e-Ticaret Bağlantısı)',
    category: 'WOLVOX Web Entegrasyon',
  },
].map((a) => ({ ...a, code: `A${a.id}`, url: `${KB_ORIGIN}/tr/home/makale/${a.id}` }))
