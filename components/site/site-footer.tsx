import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-data'

export function SiteFooter() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`

  return (
    <footer id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-20 border-t border-border/60 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-emerald">Bölgesel Servis Ağı</p>
              <h2 id="iletisim-baslik" className="mt-2 text-balance text-2xl font-semibold tracking-tight">
                Doğu Karadeniz’in her köşesinde yerinde destek
              </h2>
            </div>
            <ul className="flex flex-wrap gap-2">
              {siteConfig.regions.map((r) => (
                <li
                  key={r}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-emerald/30 bg-brand-emerald/10 px-3.5 py-1.5 text-sm"
                >
                  <MapPin className="size-3.5 text-brand-emerald" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr_1.3fr]">
          <div>
            <p className="text-lg font-semibold">Ori Bilişim</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Akınsoft ERP/Otomasyon Sistemleri ve Hugin POS Çözümleri bölge yetkili ana bayisi.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 hover:text-brand-cyan">
                <Phone className="size-4 text-brand-cyan" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-brand-cyan">
                <Mail className="size-4 text-brand-cyan" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="size-4 text-brand-cyan" aria-hidden="true" />
                {siteConfig.address}
              </p>
            </address>
          </div>

          <div>
            <p className="flex items-center gap-2 font-semibold">
              <Clock className="size-4 text-brand-cyan" aria-hidden="true" />
              Çalışma Saatleri
            </p>
            <dl className="mt-4 space-y-2 text-sm">
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 border-b border-border/60 pb-2">
                  <dt className="text-muted-foreground">{h.day}</dt>
                  <dd className="font-mono">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 font-semibold">Sosyal Medya</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand-cyan/50 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass overflow-hidden rounded-2xl">
            <iframe
              title="Ori Bilişim konum haritası"
              src={mapSrc}
              className="h-64 w-full grayscale invert-[0.9] hue-rotate-180 lg:h-full lg:min-h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ori Bilişim. Tüm hakları saklıdır.</p>
          <p>Akınsoft ve Hugin, ilgili sahiplerinin tescilli markalarıdır.</p>
        </div>
      </div>
    </footer>
  )
}
