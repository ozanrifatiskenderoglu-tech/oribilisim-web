'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronDown, Search, SearchX } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { KbArticle } from '@/lib/akinsoft-kb'

const ALL = 'Tümü'
const PAGE_SIZE = 12

function normalize(text: string) {
  return text.toLocaleLowerCase('tr-TR')
}

export function KnowledgeBaseBrowser({ articles }: { articles: KbArticle[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(ALL)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const categories = useMemo(() => [ALL, ...new Set(articles.map((a) => a.category))], [articles])

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return articles.filter((a) => {
      const inCategory = category === ALL || a.category === category
      const inQuery = !q || normalize(`${a.title} ${a.category} ${a.code}`).includes(q)
      return inCategory && inQuery
    })
  }, [articles, query, category])

  const shown = filtered.slice(0, visible)

  return (
    <>
      <div className="mx-auto mt-10 max-w-2xl">
        <label htmlFor="kb-arama" className="sr-only">
          Bilgi bankasında ara
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="kb-arama"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setVisible(PAGE_SIZE)
            }}
            placeholder="Örn. Hugin S1, devir, KDV, MSSQL..."
            className="glass h-14 rounded-xl pl-12 text-base"
          />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Kategori filtreleri">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => {
                setCategory(c)
                setVisible(PAGE_SIZE)
              }}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                category === c
                  ? 'border-brand-cyan bg-brand-cyan/15 text-foreground'
                  : 'border-border text-muted-foreground hover:border-brand-cyan/50 hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {filtered.length} makale bulundu
      </p>

      {shown.length > 0 ? (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <li key={a.id}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex h-full flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-brand-cyan/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="secondary" className="w-fit">
                    {a.category}
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">{a.code}</span>
                </div>
                <h3 className="mt-4 text-pretty font-medium leading-snug">{a.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm text-brand-cyan">
                  Makaleyi oku
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(Akınsoft Bilgi Bankası, yeni sekmede açılır)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="glass mx-auto mt-10 flex max-w-md flex-col items-center rounded-2xl p-8 text-center">
          <SearchX className="size-8 text-muted-foreground" aria-hidden="true" />
          <p className="mt-3 font-medium">Aradığınız makale bulunamadı</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Farklı bir kelime deneyin ya da uzman ekibimizden uzaktan destek alın.
          </p>
          <a href="#uzaktan-destek" className={cn(buttonVariants(), 'mt-5 h-10 px-4')}>
            Uzaktan Destek Al
          </a>
        </div>
      )}

      {filtered.length > visible && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="h-10 px-5" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Daha fazla göster ({filtered.length - visible})
            <ChevronDown aria-hidden="true" />
          </Button>
        </div>
      )}
    </>
  )
}
