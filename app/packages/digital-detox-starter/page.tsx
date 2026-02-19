import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Digital Detox Starter Package — 1-Night Glamping in Japan',
  description:
    'The Digital Detox Starter: 1-night glamping for 1–4 guests in Japan\'s wilderness. Includes BBQ plan, English guide PDF, onsen map, directions & digital detox mini guide. From ¥15,000/group.',
  alternates: { canonical: '/packages/digital-detox-starter' },
  openGraph: {
    title: 'Digital Detox Starter Package — 1-Night Glamping in Japan',
    description: '1-night glamping digital detox in Japan. BBQ, onsen access, English guide — everything prepared. From ¥15,000/group.',
  },
}

const INCLUDED = [
  {
    icon: '⛺',
    title: '1-Night Glamping Stay',
    desc: 'Comfortable glamping accommodation booked in your name. Real beds, heating/cooling, proper facilities. No camping experience needed.',
  },
  {
    icon: '🥩',
    title: 'BBQ Plan',
    desc: 'A curated BBQ ingredient plan for the evening — everything you need for a memorable outdoor dinner under the stars.',
  },
  {
    icon: '📄',
    title: 'English Guide PDF',
    desc: 'A comprehensive PDF guide covering check-in procedures, campsite rules, garbage sorting, local etiquette, and nearby highlights.',
  },
  {
    icon: '♨️',
    title: 'Onsen Map',
    desc: 'A curated map of nearby onsen (hot springs) with English notes on access, pricing, and what to expect. Typically 10–30 min from your site.',
  },
  {
    icon: '🎥',
    title: 'Getting-There Guide',
    desc: 'A step-by-step directions video (or document) from the nearest train station or major highway, with all tricky junction notes in English.',
  },
  {
    icon: '📖',
    title: 'Digital Detox Mini Guide',
    desc: 'A short, practical guide to easing off screens — what to expect from your nervous system, simple practices, and how to enjoy the quiet.',
  },
]

const NOT_INCLUDED = [
  { item: 'Transportation / pickup service', note: 'We provide directions, but no driver is included.' },
  { item: 'Gear rental (tent, sleeping bag, etc.)', note: 'Glamping facilities include all necessary gear.' },
  { item: 'In-person guiding or on-site staff from us', note: 'We are your remote support team, not on-site guides.' },
  { item: 'Meals beyond the BBQ plan', note: 'The BBQ ingredient plan is for dinner. Breakfast is self-arranged.' },
  { item: 'Onsen entry fees', note: 'These vary by facility (typically ¥500–¥1,500/person) and are paid on-site.' },
]

export default function DigitalDetoxStarterPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digitaldetoxjapan.com'
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Digital Detox Starter',
    description: '1-night glamping digital detox experience in Japan for 1–4 guests. Includes BBQ plan, English guide PDF, onsen area map, directions guide, and digital detox mini guide.',
    brand: { '@type': 'Brand', name: 'Digital Detox Japan' },
    url: `${SITE_URL}/packages/digital-detox-starter`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 15000, priceCurrency: 'JPY' },
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '32',
    },
  }

  return (
    <>
      <JsonLd data={productSchema} />

      <Hero
        tag="Package"
        title="Digital Detox Starter"
        titleEm="— Your First Night of Japanese Quiet"
        description="One night of glamping in Japan's wilderness. BBQ, onsen, an English guide for everything — and nothing to plan. Just arrive, breathe, and let the forest do its work."
        cta={{ label: 'Request your dates', href: '/contact' }}
        kanji="一"
      />

      {/* Package overview */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-14">

              {/* What's included */}
              <div>
                <h2 className="font-display text-3xl font-light text-stone-900 mb-8">What's Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {INCLUDED.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-stone-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's NOT included */}
              <div>
                <h2 className="font-display text-3xl font-light text-stone-900 mb-6">What's Not Included</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  We believe in honest, clear pricing. Here's what falls outside the package:
                </p>
                <div className="space-y-4">
                  {NOT_INCLUDED.map((item) => (
                    <div key={item.item} className="flex gap-4 py-4 border-b border-stone-100">
                      <span className="text-stone-400 flex-shrink-0 mt-0.5">✕</span>
                      <div>
                        <p className="font-medium text-stone-700">{item.item}</p>
                        <p className="text-sm text-stone-400 mt-0.5">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div>
                <h2 className="font-display text-3xl font-light text-stone-900 mb-6">How It Works</h2>
                <ol className="space-y-6">
                  {[
                    { step: '01', title: 'Submit a reservation request', body: 'Fill in the form with your preferred check-in date and group size (1–4 guests). No payment at this stage.' },
                    { step: '02', title: 'We confirm availability', body: 'Within 48 hours (JST), we confirm availability and send you the next steps, including payment details.' },
                    { step: '03', title: 'You receive your complete pack', body: 'Once confirmed, you receive your English guide PDF, onsen map, directions, BBQ plan, and detox mini guide.' },
                    { step: '04', title: 'Arrive & unplug', body: "Show up. Everything is ready. Put your phone away — or don't. We encourage, never enforce." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-5">
                      <span className="font-display text-3xl text-forest-200 leading-none flex-shrink-0">{item.step}</span>
                      <div>
                        <p className="font-semibold text-stone-800 mb-1">{item.title}</p>
                        <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-stone-200 bg-stone-50 p-8">
                <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-2">From</p>
                <p className="font-display text-4xl font-light text-stone-900 mb-1">¥15,000</p>
                <p className="text-sm text-stone-400 mb-6">/ group (1–4 guests)</p>

                <div className="space-y-2 mb-8 text-sm text-stone-600">
                  <p className="flex items-center gap-2"><span className="text-forest-500">✓</span> 1–4 guests</p>
                  <p className="flex items-center gap-2"><span className="text-forest-500">✓</span> 1 night</p>
                  <p className="flex items-center gap-2"><span className="text-forest-500">✓</span> All English</p>
                  <p className="flex items-center gap-2"><span className="text-forest-500">✓</span> No camping experience needed</p>
                  <p className="flex items-center gap-2"><span className="text-forest-500">✓</span> Reply within 48 hrs (JST)</p>
                </div>

                <Link href="/contact" className="btn-primary w-full text-center block mb-4">
                  Request your dates
                </Link>
                <p className="text-xs text-center text-stone-400">No payment required at this stage</p>

                <div className="mt-8 pt-6 border-t border-stone-200 space-y-3 text-sm text-stone-500">
                  <Link href="/faq" className="block hover:text-forest-600 transition-colors">→ Frequently asked questions</Link>
                  <Link href="/how-it-works" className="block hover:text-forest-600 transition-colors">→ How the process works</Link>
                  <Link href="/legal/cancellation-refunds" className="block hover:text-forest-600 transition-colors">→ Cancellation & refunds</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="bg-stone-900 py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xl italic text-forest-300 mb-3">Encouraged, not enforced.</p>
          <p className="text-stone-400 leading-relaxed">
            We won't take your phone. We won't run a silence program. We'll just put you in a beautiful place with good food and the time to remember that the world existed before notifications.
          </p>
        </div>
      </section>
    </>
  )
}
