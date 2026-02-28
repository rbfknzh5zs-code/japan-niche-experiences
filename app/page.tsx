import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Digital Detox in Japan — Unplug, Relax, Reconnect',
  description:
    'Digital fatigue × Japanese quiet. Curated glamping, onsen & forest therapy experiences in Japan for English-speaking travelers. Encouraged, not enforced.',
  alternates: { canonical: '/' },
}

const TESTIMONIALS = [
  {
    quote: "I came to Japan wired and left feeling like myself again. The onsen, the forest, the silence — it was exactly what I needed.",
    name: "Sarah M.",
    origin: "Toronto, Canada",
  },
  {
    quote: "Everything was prepared in English. I didn't have to figure out a single thing — I just showed up and unplugged.",
    name: "James K.",
    origin: "London, UK",
  },
  {
    quote: "The private barrel sauna at midnight was unforgettable. No phones, no noise — just stars and steam.",
    name: "Lena R.",
    origin: "Berlin, Germany",
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Choose your package',
    body: 'Pick the Digital Detox Starter — a one-night glamping stay with everything prepared. No camping experience needed.',
  },
  {
    num: '02',
    title: 'Request your dates',
    body: 'Fill out the short form with your preferred check-in date and group size. We respond within 48 hours (JST).',
  },
  {
    num: '03',
    title: 'We prepare everything',
    body: 'You receive your English PDF guide, onsen map, directions, and BBQ plan. We handle all Japanese-language logistics.',
  },
  {
    num: '04',
    title: 'Arrive & unplug',
    body: "Show up, leave the notifications behind, and step into Japan's quiet. The forest does the rest.",
  },
]

const INCLUDES = [
  { icon: '⛺', label: '1-night glamping stay' },
  { icon: '🥩', label: 'BBQ plan included' },
  { icon: '📄', label: 'English guide PDF' },
  { icon: '♨️', label: 'Onsen area map' },
  { icon: '🎥', label: 'Getting-there directions video' },
  { icon: '📖', label: 'Digital detox mini guide' },
]

export default function HomePage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Digital Detox Starter',
    description:
      'A 1-night glamping digital detox package in Japan for 1–4 guests. Includes BBQ plan, English guide PDF, onsen map, directions, and digital detox mini guide.',
    brand: { '@type': 'Brand', name: 'Digital Detox Japan' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 15000, priceCurrency: 'JPY' },
      availability: 'https://schema.org/InStock',
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digitaldetoxjapan.com'}/packages/digital-detox-starter`,
    },
  }

  return (
    <>
      <JsonLd data={productSchema} />

      {/* ── Hero ── */}
      <Hero
        tag="Digital Detox · Japan"
        title="Digital Detox in Japan —"
        titleEm="Unplug, Relax, Reconnect"
        subtitle="Digital fatigue × Japanese quiet"
        description="Trade your notifications for the sound of wind through cedar. We handle every Japanese detail — booking, guide, directions — so you step off the train and straight into stillness."
        cta={{ label: 'Request your dates', href: '/contact' }}
        kanji="静"
        bgImage="/images/hero-forest.jpg"
      />

      {/* ── Manifesto strip ── */}
      <section className="bg-forest-600 py-10 px-6">
        <p className="mx-auto max-w-2xl text-center font-display text-xl font-light italic leading-relaxed text-white/90">
          "In a world of infinite scrolling, the most radical thing you can do is stop.
          Put down the phone. Step into the forest. Find yourself in the silence."
        </p>
      </section>

      {/* ── Problem section ── */}
      <section className="bg-stone-50 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-600 uppercase mb-5">The Problem</p>
          <h2 className="font-display text-4xl font-light text-stone-900 leading-tight max-w-2xl">
            Screen fatigue is real — and Japan is the antidote.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { stat: '7+ hrs', label: 'Average daily screen time', sub: 'for adults in North America & Europe' },
              { stat: '30 min', label: 'Average time outdoors', sub: 'per day in the same population' },
              { stat: '58%', label: 'Report digital burnout', sub: 'and actively seek ways to disconnect' },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl bg-white border border-stone-200 p-8">
                <p className="font-display text-5xl font-light text-forest-600">{item.stat}</p>
                <p className="mt-2 font-medium text-stone-800">{item.label}</p>
                <p className="mt-1 text-sm text-stone-500">{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg text-stone-600 leading-relaxed max-w-3xl">
            Japan pioneered <strong className="text-stone-800">shinrin-yoku</strong> (forest bathing) as a health practice. Its onsen culture is thousands of years old. Zen tradition has been practiced in these mountains for centuries. This country was built for digital detox — and we make it effortless for English-speaking visitors.
          </p>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="bg-stone-100 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-600 uppercase mb-5">The Solution</p>
          <h2 className="font-display text-4xl font-light text-stone-900 leading-tight max-w-2xl">
            You don't need another app. You need a forest.
          </h2>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-2xl">
            We handle every detail — in Japanese — so you arrive with nothing to figure out and everything to enjoy.
          </p>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              'Glamping accommodations booked in your name',
              'BBQ plan prepared with ingredients',
              'Onsen map for the local area',
              'Full English guide PDF (rules, how-tos, tips)',
              'Video directions from the nearest station',
              'Digital detox mini guide to ease the transition',
              'All Japanese communication handled for you',
              'Email support before and during your stay',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-700">
                <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-forest-100 text-forest-600 text-xs flex items-center justify-center font-bold">✓</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-xl italic text-forest-700">
            Encouraged, not enforced.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-stone-50 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-600 uppercase mb-5 text-center">Guest Stories</p>
          <h2 className="font-display text-4xl font-light text-stone-900 leading-tight text-center mb-14">
            What our guests say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-stone-200 p-8 flex flex-col">
                <span className="font-display text-5xl text-forest-200 leading-none mb-4">&ldquo;</span>
                <p className="text-stone-700 leading-relaxed flex-1">{t.quote}</p>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="font-medium text-stone-800 text-sm">{t.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{t.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-600 uppercase mb-5">Packages</p>
          <h2 className="font-display text-4xl font-light text-stone-900 mb-12">Choose Your Experience</h2>

          <div className="space-y-8">
            {/* Card 1: Nasu Highland Glamping — Featured */}
            <div className="rounded-2xl border border-earth-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-end min-h-64 relative overflow-hidden bg-stone-900">
                <Image
                  src="/images/bv.jpg"
                  alt="Glamping B&V Nasu Kogen — dome cabin exterior"
                  fill
                  className="object-cover object-center opacity-55"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                <span className="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-earth-300 uppercase mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth-400 inline-block" />
                  Featured Destination
                </span>
                <p className="relative z-10 font-display text-3xl font-light text-white">
                  Nasu Highland —<br /><em className="text-earth-300">Private onsen & sauna</em>
                </p>
              </div>

              <div className="p-10 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-500 mb-4">Nasu Kogen · Tochigi Prefecture</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      { icon: '♨️', label: 'Private natural hot spring — every cabin' },
                      { icon: '🪣', label: 'Private barrel sauna + cold plunge — every cabin' },
                      { icon: '🔥', label: 'Private campfire — every cabin' },
                      { icon: '🍖', label: 'Glamping BBQ with local Tochigi ingredients' },
                      { icon: '🍹', label: 'Free bar at B&V Terrace' },
                      { icon: '📄', label: 'Full English guide by Digital Detox Japan' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-center gap-3 text-stone-700">
                        <span className="text-xl w-8 flex-shrink-0">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-stone-500">
                    5 dome types. Up to 8 guests. Dog-friendly option available.
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">From</p>
                    <p className="font-display text-3xl text-stone-900">¥45,000</p>
                    <p className="text-xs text-stone-400">/ cabin per night</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href="/packages/nasu-highland-glamping" className="btn-ghost text-sm">
                      Package details
                    </Link>
                    <Link href="/contact" className="btn-primary text-sm">
                      Request your dates
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-stone-50 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-600 uppercase mb-5">Process</p>
          <h2 className="font-display text-4xl font-light text-stone-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="relative">
                <p className="font-display text-5xl font-light text-forest-200 leading-none mb-4">{step.num}</p>
                <h3 className="font-display text-xl font-light text-stone-800 mb-3">{step.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-primary">
              Request your dates
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-stone-900 py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg italic text-stone-400 mb-4">Digital fatigue × Japanese quiet</p>
          <h2 className="font-display text-4xl font-light text-white mb-6">
            Ready to unplug in Japan?
          </h2>
          <p className="text-stone-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Send us your dates and group size. We'll confirm availability and take care of everything else.
          </p>
          <Link href="/contact" className="btn-primary text-base py-4 px-10">
            Request your dates
          </Link>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-400">
            <span className="flex items-center gap-2">✉️ <span>Quick response</span></span>
            <span className="hidden sm:inline text-stone-700">·</span>
            <span className="flex items-center gap-2">💳 <span>No upfront payment</span></span>
            <span className="hidden sm:inline text-stone-700">·</span>
            <span className="flex items-center gap-2">🇬🇧 <span>English support</span></span>
            <span className="hidden sm:inline text-stone-700">·</span>
            <span className="flex items-center gap-2">🔄 <span>Free cancellation</span></span>
          </div>
        </div>
      </section>
    </>
  )
}
