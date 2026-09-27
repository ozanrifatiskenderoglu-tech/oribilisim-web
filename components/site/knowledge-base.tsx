import { Suspense } from 'react'
import { ExternalLink } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getKbArticles, KB_HOME } from '@/lib/akinsoft-kb'
import { faqs } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { KnowledgeBaseBrowser } from './knowledge-base-browser'

async function KnowledgeBaseArticles() {
  const articles = await getKbArticles()
  return <KnowledgeBaseBrowser articles={articles} />
}

function ArticlesSkeleton() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="glass h-40 animate-pulse rounded-2xl" />
      ))}
    </div>
  )
}

export function KnowledgeBase() {
  return (
    <section
      id="bilgi-bankasi"
      aria-labelledby="bilgi-baslik"
      className="relative scroll-mt-28 border-y border-border/60 bg-white/[0.015] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="bilgi-baslik"
          eyebrow="Akınsoft Bilgi Bankası"
          title="Resmi Akınsoft makaleleri, tek aramada"
          description="Makaleler doğrudan bilgibankasi.akinsoft.net üzerinden güncel olarak çekilir. Aradığınızı bulamazsanız ekibimiz uzaktan bağlanıp çözsün."
        />

        <Suspense fallback={<ArticlesSkeleton />}>
          <KnowledgeBaseArticles />
        </Suspense>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Tüm makaleler için{' '}
          <a
            href={KB_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-brand-cyan underline-offset-4 hover:underline"
          >
            bilgibankasi.akinsoft.net
            <ExternalLink className="size-3.5" aria-hidden="true" />
            <span className="sr-only">(yeni sekmede açılır)</span>
          </a>
        </p>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center text-xl font-semibold tracking-tight">Sıkça Sorulan Sorular</h3>
          <Accordion className="glass mt-6 rounded-2xl px-5">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`sss-${i}`} className="border-border/60">
                <AccordionTrigger className="py-4 text-base hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
