import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Wand2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LiveStatsCard } from './live-stats-card'

export function Hero() {
  return (
    <section aria-labelledby="hero-baslik" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-indigo/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-brand-emerald/15 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-24 lg:pb-28">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
              <BadgeCheck className="size-3.5 text-brand-cyan" aria-hidden="true" />
              Akınsoft Bölge Ana Bayii
            </span>
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
              <ShieldCheck className="size-3.5 text-brand-emerald" aria-hidden="true" />
              Hugin POS Yetkili Servisi
            </span>
          </div>

          <h1
            id="hero-baslik"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            İşletmenizi Dijital Çağa Taşıyın:{' '}
            <span className="text-gradient">Akınsoft & Hugin POS</span> Çözümleri
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Ori Bilişim Güvencesiyle Akıllı Otomasyon, Yeni Nesil Yazar Kasa POS ve Kesintisiz Saha Destek
            Hizmetleri.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#teklif"
              className={cn(
                buttonVariants(),
                'h-12 px-6 text-base shadow-[0_0_40px_-8px] shadow-brand-cyan/70 transition-shadow hover:shadow-brand-cyan',
              )}
            >
              Hemen Teklif Alın
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              href="#sihirbaz"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'group h-12 border-brand-emerald/40 bg-brand-emerald/5 px-6 text-base hover:border-brand-emerald hover:bg-brand-emerald/10',
              )}
            >
              <Wand2 className="text-brand-emerald transition-transform group-hover:rotate-12" aria-hidden="true" />
              Sektörel Çözüm Sihirbazı
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-6">
            {[
              { k: '15+', v: 'Yıllık tecrübe' },
              { k: '1.200+', v: 'Aktif işletme' },
              { k: '< 30 dk', v: 'Uzaktan müdahale' },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-xs text-muted-foreground">{s.v}</dt>
                <dd className="mt-1 font-mono text-xl font-semibold">{s.k}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 hidden items-center gap-1.5 rounded-full bg-brand-emerald/15 px-3 py-1 text-xs font-medium text-brand-emerald sm:inline-flex">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Canlı panel önizlemesi
          </div>
          <LiveStatsCard />
        </div>
      </div>
    </section>
  )
}
