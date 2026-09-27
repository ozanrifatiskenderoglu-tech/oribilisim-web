import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'latin-ext'], variable: '--font-manrope' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'latin-ext'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Ori Bilişim | Akınsoft ERP & Hugin POS Bölge Yetkili Bayisi',
  description:
    'Ori Bilişim; Akınsoft ERP/otomasyon yazılımları ve Hugin yeni nesil yazar kasa POS çözümlerinde Artvin, Hopa, Kemalpaşa, Arhavi ve Borçka bölge yetkili ana bayisidir. Kurulum, eğitim ve kesintisiz saha desteği.',
  metadataBase: new URL('https://oribilisim.com.tr'),
  generator: 'v0.app',
  openGraph: {
    title: 'Ori Bilişim | Akınsoft & Hugin POS Çözümleri',
    description: 'Akıllı otomasyon, yeni nesil yazar kasa POS ve kesintisiz saha destek hizmetleri.',
    locale: 'tr_TR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1020',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${manrope.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
