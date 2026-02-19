import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digitaldetoxjapan.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Digital Detox Japan — Unplug, Relax, Reconnect',
    template: '%s | Digital Detox Japan',
  },
  description:
    "Curated digital detox experiences in Japan's wilderness. Glamping, onsen, forest therapy — all prepared in English for international travelers. Encouraged, not enforced.",
  keywords: ['digital detox japan', 'unplug in japan', 'japan wellness nature retreat', 'forest therapy japan', 'glamping japan'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Digital Detox Japan',
    title: 'Digital Detox Japan — Unplug, Relax, Reconnect',
    description: "Escape screen fatigue in Japan's quiet wilderness. Digital detox glamping, onsen & forest therapy experiences — all in English.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Detox Japan — Unplug, Relax, Reconnect',
    description: "Escape screen fatigue in Japan's quiet wilderness. Digital detox glamping, onsen & forest therapy — all in English.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digital Detox Japan',
  url: SITE_URL,
  description: 'Curated digital detox nature experiences in Japan — glamping, onsen, and forest therapy for international travelers.',
  areaServed: { '@type': 'Country', name: 'Japan' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', availableLanguage: 'English' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Digital Detox Japan',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <JsonLd data={[orgSchema, websiteSchema]} />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
