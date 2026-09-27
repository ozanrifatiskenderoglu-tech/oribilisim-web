'use server'

export type CallbackState = { status: 'idle' | 'success' | 'error'; message: string }

const PHONE_PATTERN = /^[0-9+()\s-]{10,20}$/

export async function requestCallback(_prev: CallbackState, formData: FormData): Promise<CallbackState> {
  const name = String(formData.get('name') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const note = String(formData.get('note') ?? '').trim()

  if (name.length < 2 || name.length > 80) {
    return { status: 'error', message: 'Lütfen geçerli bir ad soyad girin.' }
  }
  if (!PHONE_PATTERN.test(phone)) {
    return { status: 'error', message: 'Lütfen geçerli bir telefon numarası girin.' }
  }
  if (note.length > 500) {
    return { status: 'error', message: 'Mesajınız en fazla 500 karakter olabilir.' }
  }

  console.log('[teklif] Geri arama talebi:', { name, hasNote: note.length > 0 })

  return {
    status: 'success',
    message: `Teşekkürler ${name.split(' ')[0]}! Sizi en kısa sürede arayacağım.`,
  }
}
