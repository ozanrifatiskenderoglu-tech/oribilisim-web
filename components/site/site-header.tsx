'use client'

import { useState } from 'react'
import { Clock, Headset, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-data'

const navItems = [
  { href: '#sihirbaz', label: 'Çözümler' },
  { href: '#hugin-pos', label: 'Hugin POS' },
  { href: '#bilgi-bankasi', label: 'Bilgi Bankası' },
  { href: '#uzaktan-destek', label: 'Uzaktan Destek' },
  { href: '#iletisim', label: 'İletişim' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-border/60 bg-black/30 text-xs text-muted-foreground backdrop-blur md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-brand-emerald" aria-hidden="true" />
              {siteConfig.regions.join(' · ')}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-brand-cyan" aria-hidden="true" />
              Hafta içi {siteConfig.hours[0].time}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <MessageCircle className="size-3.5 text-brand-emerald" aria-hidden="true" />
              WhatsApp
            </a>
            <a href={siteConfig.phoneHref} className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-brand-cyan">
              <Phone className="size-3.5" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#" className="flex items-center gap-3" aria-label="Ori Bilişim ana sayfa">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-emerald font-display text-sm font-bold text-primary-foreground">
              ORİ
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold tracking-tight">Ori Bilişim</span>
              <span className="text-[11px] text-muted-foreground">Akınsoft & Hugin Yetkili Bayi</span>
            </span>
          </a>

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-white/[0.03] p-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#uzaktan-destek"
              className={cn(buttonVariants({ variant: 'outline' }), 'hidden h-10 rounded-full px-4 xl:inline-flex')}
            >
              <Headset aria-hidden="true" />
              Destek
            </a>
            <a href="#teklif" className={cn(buttonVariants(), 'hidden h-10 rounded-full px-5 sm:inline-flex')}>
              Teklif Al
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-white/5 lg:hidden"
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobil-menu" aria-label="Mobil menü" className="border-t border-border/60 lg:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="grid grid-cols-2 gap-2 pt-2">
                <a href={siteConfig.phoneHref} className={cn(buttonVariants({ variant: 'outline' }), 'h-10')}>
                  <Phone aria-hidden="true" />
                  Ara
                </a>
                <a href="#teklif" onClick={() => setOpen(false)} className={cn(buttonVariants(), 'h-10')}>
                  Teklif Al
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
