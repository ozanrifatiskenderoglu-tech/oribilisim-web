'use client'

import { ArrowRight, BedDouble, Check, Cpu, ShoppingCart, Truck, UtensilsCrossed } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { sectors, type SectorId } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

const icons: Record<SectorId, typeof UtensilsCrossed> = {
  restoran: UtensilsCrossed,
  market: ShoppingCart,
  otel: BedDouble,
  saha: Truck,
}

export function SolutionWizard() {
  return (
    <section id="sihirbaz" aria-labelledby="sihirbaz-baslik" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="sihirbaz-baslik"
          eyebrow="Sektörel Çözüm Sihirbazı"
          title="Sektörünüzü seçin, ideal paketi görün"
          description="Her işletmenin ritmi farklıdır. Sektörünüze özel Akınsoft yazılımları ve Hugin POS donanım paketini saniyeler içinde keşfedin."
        />

        <Tabs defaultValue="restoran" className="mt-12 gap-8">
          <TabsList className="mx-auto grid h-auto w-full max-w-4xl grid-cols-2 gap-2 bg-transparent p-0 md:grid-cols-4">
            {sectors.map((s) => {
              const Icon = icons[s.id]
              return (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="glass h-auto flex-col gap-2 rounded-xl px-3 py-4 text-sm text-muted-foreground transition-all hover:text-foreground data-active:border-brand-cyan/60 data-active:bg-brand-cyan/10 data-active:text-foreground dark:data-active:border-brand-cyan/60 dark:data-active:bg-brand-cyan/10"
                >
                  <Icon className="size-5! text-brand-cyan" aria-hidden="true" />
                  <span className="whitespace-normal text-center">{s.label}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {sectors.map((s) => (
            <TabsContent key={s.id} value={s.id} className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="glass flex flex-col rounded-2xl p-6 lg:row-span-2">
                  <Badge variant="outline" className="w-fit border-brand-emerald/40 text-brand-emerald">
                    {s.label}
                  </Badge>
                  <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight">{s.headline}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-3">
                    {s.gains.map((g) => (
                      <div key={g.label} className="rounded-xl border border-border/60 bg-white/[0.03] p-4">
                        <dt className="text-xs text-muted-foreground">{g.label}</dt>
                        <dd className="mt-1 font-mono text-2xl font-semibold text-brand-emerald">{g.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    href="#teklif"
                    className={cn(buttonVariants(), 'mt-8 h-11 w-full lg:mt-auto')}
                  >
                    Bu paket için teklif al
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>

                <div className="glass rounded-2xl p-6 lg:col-span-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">Önerilen Akınsoft Yazılımları</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                    {s.software.map((sw) => (
                      <li
                        key={sw.name}
                        className="rounded-xl border border-border/60 bg-white/[0.03] p-4 transition-colors hover:border-brand-cyan/50"
                      >
                        <Check className="size-4 text-brand-cyan" aria-hidden="true" />
                        <p className="mt-3 font-medium">{sw.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{sw.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6 lg:col-span-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand-emerald">İdeal Hugin POS Donanım Paketi</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {s.hardware.map((hw) => (
                      <li
                        key={hw.name}
                        className="flex items-start gap-3 rounded-xl border border-border/60 bg-white/[0.03] p-4 transition-colors hover:border-brand-emerald/50"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/15">
                          <Cpu className="size-4 text-brand-emerald" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-medium">{hw.name}</span>
                          <span className="mt-0.5 block text-sm text-muted-foreground">{hw.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
