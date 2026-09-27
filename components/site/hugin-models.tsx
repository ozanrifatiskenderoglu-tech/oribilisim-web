import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { huginModels } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

export function HuginModels() {
  return (
    <section id="hugin-pos" aria-labelledby="hugin-baslik" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="hugin-baslik"
          eyebrow="Hugin Yetkili Servisi"
          title="İki model, her işletmeye doğru cihaz"
          description="Tuşlu ve hafif Tiger T300 mü, Android ekranlı S1 mi? Kurulum, banka tanımı ve Wolvox entegrasyonu dahil yerinde teslim ediyoruz."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {huginModels.map((m) => (
            <article
              key={m.id}
              aria-labelledby={`model-${m.id}`}
              className="glass flex flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                <Image
                  src={m.image}
                  alt={`${m.name} yeni nesil yazar kasa POS cihazı`}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                  {m.tagline}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 id={`model-${m.id}`} className="text-2xl font-semibold tracking-tight">
                  {m.name}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{m.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label="İdeal kullanım alanları">
                  {m.idealFor.map((use) => (
                    <li key={use} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {use}
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 divide-y divide-border/60 rounded-xl border border-border/60 bg-white/[0.02]">
                  {m.specs.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="text-right font-medium">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a href="#teklif" className={cn(buttonVariants(), 'mt-8 h-11 self-start px-5')}>
                  {m.name} için teklif al
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
