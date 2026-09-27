'use client'

import { useEffect, useState } from 'react'
import { Boxes, Gauge, Landmark, Receipt } from 'lucide-react'

const BAR_COUNT = 14

function initialBars() {
  return Array.from({ length: BAR_COUNT }, (_, i) => 35 + ((i * 37) % 55))
}

export function LiveStatsCard() {
  const [bars, setBars] = useState<number[]>(initialBars)
  const [receipts, setReceipts] = useState(1284)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setBars((prev) => [...prev.slice(1), 40 + Math.round(Math.random() * 55)])
      setReceipts((r) => r + 1 + Math.floor(Math.random() * 3))
    }, 1600)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="glass relative rounded-2xl p-5 shadow-2xl shadow-black/40 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Günlük Satış Paneli</p>
          <p className="mt-1 text-sm font-medium">Merkez Mağaza · Hopa</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-emerald/15 px-2.5 py-1 text-xs font-medium text-brand-emerald">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-emerald opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-brand-emerald" />
          </span>
          Canlı
        </span>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Gauge className="size-3.5" aria-hidden="true" />
            Satış Hızı
          </p>
          <p className="mt-1 font-mono text-4xl font-semibold text-brand-cyan">+%40</p>
        </div>
        <div className="text-right">
          <p className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
            <Receipt className="size-3.5" aria-hidden="true" />
            Kesilen Fiş
          </p>
          <p className="mt-1 font-mono text-2xl font-semibold tabular-nums" aria-live="off">
            {receipts.toLocaleString('tr-TR')}
          </p>
        </div>
      </div>

      <div className="mt-5 flex h-28 items-end gap-1.5" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-indigo/60 to-brand-cyan transition-[height] duration-700 ease-out"
            style={{ height: `${h}%`, opacity: 0.45 + (i / BAR_COUNT) * 0.55 }}
          />
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-white/[0.03] p-4">
          <Boxes className="size-5 text-brand-emerald" aria-hidden="true" />
          <p className="mt-3 text-sm font-medium">Otomatik Stok Sayımı</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[86%] rounded-full bg-brand-emerald" />
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">%86 tamamlandı · 3 depo</p>
        </div>
        <div className="rounded-xl border border-border/60 bg-white/[0.03] p-4">
          <Landmark className="size-5 text-brand-cyan" aria-hidden="true" />
          <p className="mt-3 text-sm font-medium">Maliye Entegrasyonu</p>
          <p className="mt-2 font-mono text-2xl font-semibold text-brand-cyan">%100</p>
          <p className="text-xs text-muted-foreground">GİB & e-Belge senkron</p>
        </div>
      </div>
    </div>
  )
}
