'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, MessageCircle, Phone, PhoneCall } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-data'
import { requestCallback, type CallbackState } from '@/app/actions'

const initialState: CallbackState = { status: 'idle', message: '' }

export function QuoteModule() {
  const [state, formAction, pending] = useActionState(requestCallback, initialState)

  return (
    <div className="glass flex flex-col rounded-2xl p-5 sm:p-8">
      <h3 className="text-2xl font-semibold tracking-tight">Teklif almak için doğrudan bana ulaşın</h3>
      <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
        Paket, modül ya da fiyat seçmenize gerek yok. İşletmenizi dinleyip size en uygun Akınsoft ve Hugin çözümünü
        birlikte belirleyelim.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href={siteConfig.phoneHref} className={cn(buttonVariants(), 'h-14 justify-start gap-3 px-5 text-base')}>
          <Phone aria-hidden="true" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-normal opacity-80">Hemen arayın</span>
            {siteConfig.phone}
          </span>
        </a>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-14 justify-start gap-3 border-brand-emerald/40 px-5 text-base hover:border-brand-emerald hover:bg-brand-emerald/10',
          )}
        >
          <MessageCircle className="text-brand-emerald" aria-hidden="true" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-normal text-muted-foreground">Yazışarak</span>
            WhatsApp&apos;tan yazın
          </span>
        </a>
      </div>

      <div className="my-8 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        ya da sizi arayayım
        <span className="h-px flex-1 bg-border" />
      </div>

      {state.status === 'success' ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-brand-emerald/40 bg-brand-emerald/10 p-6 text-center">
          <CheckCircle2 className="size-10 text-brand-emerald" aria-hidden="true" />
          <p className="mt-3 font-semibold" role="status">
            {state.message}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Mesai saatleri içinde genellikle 30 dakika içinde dönüş yapılır.</p>
        </div>
      ) : (
        <form action={formAction} className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="teklif-ad">Ad Soyad</Label>
            <Input id="teklif-ad" name="name" required minLength={2} maxLength={80} autoComplete="name" className="h-11" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="teklif-tel">Telefon</Label>
            <Input
              id="teklif-tel"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="05XX XXX XX XX"
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label htmlFor="teklif-not">
              Kısa not <span className="font-normal text-muted-foreground">(isteğe bağlı)</span>
            </Label>
            <Textarea
              id="teklif-not"
              name="note"
              maxLength={500}
              rows={3}
              placeholder="Örn. Kafem için Hugin S1 ve Wolvox Restoran düşünüyorum."
            />
          </div>
          {state.status === 'error' && (
            <p className="text-sm text-destructive sm:col-span-2" role="alert">
              {state.message}
            </p>
          )}
          <Button type="submit" className="h-11 sm:col-span-2" disabled={pending}>
            {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <PhoneCall aria-hidden="true" />}
            Beni Arayın
          </Button>
        </form>
      )}
    </div>
  )
}
