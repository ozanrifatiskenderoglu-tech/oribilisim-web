import { Download, Headset, MessageCircle, MonitorSmartphone, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-data'
import { QuoteModule } from './quote-module'
import { SectionHeading } from './section-heading'

const remoteTools = [
  {
    name: 'AnyDesk',
    description: 'Hafif, kurulumsuz çalışır. Uzmanımıza 9 haneli adresinizi iletin.',
    href: siteConfig.anydeskHref,
    color: 'text-destructive',
  },
  {
    name: 'TeamViewer QuickSupport',
    description: 'Kimlik ve şifrenizi paylaşarak güvenli oturum başlatın.',
    href: siteConfig.teamviewerHref,
    color: 'text-brand-cyan',
  },
]

export function SupportSection() {
  return (
    <section id="teklif" aria-labelledby="teklif-baslik" className="relative scroll-mt-28 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-96 max-w-4xl rounded-full bg-brand-indigo/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="teklif-baslik"
          eyebrow="Teklif & Destek"
          title="Teklif için doğrudan ulaşın, destek için anında bağlanın"
          description="Yeni kurulum ya da cihaz için bizi arayın veya yazın. Mevcut müşterimizseniz uzaktan destek ile dakikalar içinde yanınızdayız."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <QuoteModule />

          <aside id="uzaktan-destek" aria-labelledby="uzak-baslik" className="glass scroll-mt-24 rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-cyan/15">
                <Headset className="size-5 text-brand-cyan" aria-hidden="true" />
              </span>
              <div>
                <h3 id="uzak-baslik" className="font-semibold">
                  Uzaktan Destek
                </h3>
                <p className="text-sm text-muted-foreground">Ortalama bağlanma süresi: 5 dk</p>
              </div>
            </div>

            <ol className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li><span className="font-mono text-foreground">1.</span> Aşağıdan uygulamayı indirin ve çalıştırın.</li>
              <li><span className="font-mono text-foreground">2.</span> Destek hattımızı arayın.</li>
              <li><span className="font-mono text-foreground">3.</span> Ekrandaki bağlantı kodunu uzmanımıza iletin.</li>
            </ol>

            <ul className="mt-6 space-y-3">
              {remoteTools.map((tool) => (
                <li key={tool.name}>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border/60 bg-white/[0.03] p-4 transition-colors hover:border-brand-cyan/50"
                  >
                    <MonitorSmartphone className={cn('size-6 shrink-0', tool.color)} aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block font-medium">{tool.name}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{tool.description}</span>
                    </span>
                    <Download className="size-5 text-muted-foreground transition-colors group-hover:text-brand-cyan" aria-hidden="true" />
                    <span className="sr-only">(yeni sekmede indir)</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={siteConfig.phoneHref} className={cn(buttonVariants(), 'h-11')}>
                <Phone aria-hidden="true" />
                Destek Hattını Ara
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-11 border-brand-emerald/40 hover:border-brand-emerald hover:bg-brand-emerald/10',
                )}
              >
                <MessageCircle className="text-brand-emerald" aria-hidden="true" />
                WhatsApp Destek
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
