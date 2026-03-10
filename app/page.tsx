import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import WhyResetMattersSection from '@/components/WhyResetMattersSection'

export const metadata: Metadata = {
  title: 'Digital Detox in Japan — Unplug, Relax, Reconnect',
  description:
    'Digital fatigue × Japanese quiet. Curated glamping, onsen & forest therapy experiences in Japan for English-speaking travelers. Encouraged, not enforced.',
  alternates: { canonical: '/' },
}

// SVG icon helper
function Ico({ path, className = 'w-5 h-5' }: { path: string | string[]; className?: string }) {
  const paths = Array.isArray(path) ? path : [path]
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
      ))}
    </svg>
  )
}

// Heroicons paths
const PATHS = {
  home:       'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  fire:       'M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z',
  document:   'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  sparkles:   [
    'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
  ],
  video:      'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z',
  book:       'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  check:      'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  envelope:   [
    'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75',
  ],
  creditCard: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z',
  globe:      [
    'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
  ],
  arrowPath:  'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
  utensils:   [
    'M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3 0V18m-9-4.875V18M6 18h12',
  ],
  beaker:     'M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L4.2 15.3m15.6 0-1.57 3.534a2.25 2.25 0 0 1-2.14 1.417H8.11a2.25 2.25 0 0 1-2.14-1.417L4.2 15.3',
}


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

export default function HomePage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Digital Detox Starter',
    description:
      'A 1-night glamping digital detox package in Japan for 1–8 guests. Includes BBQ plan, English guide PDF, onsen map, directions, and digital detox mini guide.',
    brand: { '@type': 'Brand', name: 'Digital Detox Japan' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 20, priceCurrency: 'USD' },
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
        kanji="禅"
        bgImage="/images/hero-forest.jpg"
      />

      {/* ── Manifesto strip ── */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-10 px-6">
        <p className="mx-auto max-w-2xl text-center font-display text-xl font-light italic leading-relaxed text-zinc-300">
          "In a world of infinite scrolling, the most radical thing you can do is stop.
          Put down the phone. Step into the forest. Find yourself in the silence."
        </p>
      </section>

      {/* ── Problem section ── */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-5">The Problem</p>
          <h2 className="font-display text-4xl font-light text-white leading-tight max-w-2xl">
            Screen fatigue is real — and Japan is the antidote.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { num: '7+', unit: 'hrs', label: 'Average daily screen time', sub: 'for adults in North America & Europe' },
              { num: '30', unit: 'min', label: 'Average time outdoors', sub: 'per day in the same population' },
              { num: '58', unit: '%', label: 'Report digital burnout', sub: 'and actively seek ways to disconnect' },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
                <div className="inline-flex items-baseline gap-1.5 mb-3">
                  <span className="font-sans text-6xl font-light text-forest-400 leading-none">{item.num}</span>
                  <span className="font-sans text-2xl font-light text-forest-400 leading-none">{item.unit}</span>
                </div>
                <p className="font-medium text-zinc-100">{item.label}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Japan pioneered <strong className="text-zinc-200">shinrin-yoku</strong> (forest bathing) as a health practice. Its onsen culture is thousands of years old. Zen tradition has been practiced in these mountains for centuries. This country was built for digital detox — and we make it effortless for English-speaking visitors.
          </p>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-5">The Solution</p>
          <h2 className="font-display text-4xl font-light text-white leading-tight max-w-2xl">
            You don't need another app. You need a forest.
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
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
              <li key={item} className="flex items-start gap-3 text-zinc-300">
                <Ico
                  path={PATHS.check}
                  className="mt-0.5 flex-shrink-0 w-5 h-5 text-forest-400"
                />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-xl italic text-forest-400">
            Encouraged, not enforced.
          </p>
        </div>
      </section>

      {/* ── Why This Reset Matters ── */}
      <WhyResetMattersSection />

      {/* ── Packages ── */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-5">Packages</p>
          <h2 className="font-display text-4xl font-light text-white mb-12">Choose Your Experience</h2>

          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <Ico path={PATHS.envelope} className="w-4 h-4 text-forest-400" />
                <span>Quick response</span>
              </span>
              <span className="hidden sm:inline text-zinc-600">·</span>
              <span className="flex items-center gap-2">
                <Ico path={PATHS.creditCard} className="w-4 h-4 text-forest-400" />
                <span>No upfront payment</span>
              </span>
              <span className="hidden sm:inline text-zinc-600">·</span>
              <span className="flex items-center gap-2">
                <Ico path={PATHS.globe} className="w-4 h-4 text-forest-400" />
                <span>English support</span>
              </span>
            </div>

            {/* Card 1: Nasu Highland Glamping — Featured */}
            <div className="rounded-2xl border border-zinc-800 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-end min-h-64 relative overflow-hidden bg-black">
                <Image
                  src="/images/nasu-dome-forest.png"
                  alt="Glamping B&V Nasu Kogen — dome cabin exterior"
                  fill
                  className="object-cover object-center opacity-50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-earth-300 uppercase mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth-400 inline-block" />
                  Featured Destination
                </span>
                <p className="relative z-10 font-display text-3xl font-light text-white">
                  Nasu Highland —<br /><em className="text-earth-300">Private onsen & sauna</em>
                </p>
              </div>

              <div className="p-10 flex flex-col justify-between bg-zinc-900">
                <div>
                  <p className="text-xs text-zinc-500 mb-4">Nasu Kogen · Tochigi Prefecture</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      { iconKey: 'sparkles' as const, label: 'Private natural hot spring — every cabin' },
                      { iconKey: 'fire'     as const, label: 'Private barrel sauna + cold plunge — every cabin' },
                      { iconKey: 'fire'     as const, label: 'Private campfire — every cabin' },
                      { iconKey: 'utensils' as const, label: 'Glamping BBQ with local Tochigi ingredients' },
                      { iconKey: 'beaker'   as const, label: 'Free bar at B&V Terrace' },
                      { iconKey: 'document' as const, label: 'Full English guide by Digital Detox Japan' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-center gap-3 text-zinc-300">
                        <Ico
                          path={PATHS[item.iconKey]}
                          className="w-5 h-5 flex-shrink-0 text-forest-400"
                        />
                        <span className="text-sm">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-zinc-500">
                    5 dome types. Up to 8 guests.
                  </p>
                  <p className="text-sm text-earth-300 flex items-center gap-1.5 mt-2">
                    🐾 <span>Pets welcome — dog-friendly dome available</span>
                  </p>
                </div>

                <div className="border-t border-zinc-800 pt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3">
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Accommodation</p>
                      <p className="text-sm font-medium text-zinc-200">Quoted by email</p>
                      <p className="text-xs text-zinc-500 mt-0.5">We book on your behalf</p>
                    </div>
                    <div className="rounded-lg bg-forest-400/10 border border-forest-400/30 px-4 py-3">
                      <p className="text-xs text-forest-500 uppercase tracking-widest mb-1">Our fee</p>
                      <p className="text-xl font-semibold text-forest-500">$20</p>
                      <p className="text-xs text-forest-400 mt-0.5">per booking</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href="/packages/nasu-highland-glamping" className="btn-ghost text-sm flex-1 text-center">
                      Package details
                    </Link>
                    <Link href="/contact" className="btn-primary text-sm flex-1 text-center">
                      Request your dates
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting There */}
            <div>
              <h3 className="font-display text-2xl font-light text-white mb-2">Getting There</h3>
              <p className="text-zinc-500 text-sm mb-6">From Japan's international airports to Nasu Kogen, Tochigi</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* NRT */}
                <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
                  <div className="flex items-start gap-3 mb-5">
                    <span className="text-xs font-bold tracking-widest text-forest-400 bg-forest-400/10 border border-forest-400/20 rounded px-2 py-1 mt-0.5">NRT</span>
                    <div>
                      <p className="font-semibold text-zinc-100">Narita International Airport</p>
                      <p className="text-xs text-zinc-500 mt-0.5">Most international long-haul flights</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">🚄 By Train</p>
                    <div className="relative pl-5">
                      <div className="absolute left-[7px] top-4 bottom-4 w-px bg-zinc-700" />
                      {[
                        { dot: '✈', label: 'Narita Airport', sub: null },
                        { dot: '→', label: "Narita Express (N'EX)", sub: '~60 min · ¥3,000' },
                        { dot: '🔄', label: 'Tokyo Station', sub: 'Transfer to Shinkansen' },
                        { dot: '→', label: 'Tohoku Shinkansen (Yamabiko)', sub: '~75 min · ¥5,000' },
                        { dot: '🚉', label: 'Nasu-Shiobara Station', sub: 'Transfer to taxi' },
                        { dot: '→', label: 'Taxi', sub: '~30 min · ¥3,000–4,000' },
                        { dot: '⛺', label: 'Nasu Highland Glamping', sub: null },
                      ].map((step, i) => (
                        <div key={i} className="relative flex items-start gap-3 mb-2.5">
                          <span className="absolute -left-5 w-3.5 h-3.5 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-[8px] mt-0.5 flex-shrink-0">{step.dot}</span>
                          <div>
                            <p className={`text-xs font-medium ${i === 6 ? 'text-forest-400' : 'text-zinc-300'}`}>{step.label}</p>
                            {step.sub && <p className="text-[11px] text-zinc-600">{step.sub}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-lg bg-zinc-800/60 px-3 py-2 flex items-center justify-between">
                      <span className="text-xs text-zinc-400">Total journey</span>
                      <span className="text-sm font-semibold text-white">~2.5–3 hrs</span>
                    </div>
                  </div>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">🚗 By Rental Car</p>
                    <p className="text-xs text-zinc-500">Tohoku Expressway → Nasu IC → ~7 min to site</p>
                    <div className="mt-2 rounded-lg bg-zinc-800/60 px-3 py-2 flex items-center justify-between">
                      <span className="text-xs text-zinc-400">Total journey</span>
                      <span className="text-sm font-semibold text-white">~2.5–3 hrs</span>
                    </div>
                  </div>
                </div>

                {/* HND */}
                <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
                  <div className="flex items-start gap-3 mb-5">
                    <span className="text-xs font-bold tracking-widest text-forest-400 bg-forest-400/10 border border-forest-400/20 rounded px-2 py-1 mt-0.5">HND</span>
                    <div>
                      <p className="font-semibold text-zinc-100">Haneda Airport</p>
                      <p className="text-xs text-zinc-500 mt-0.5">Closer to central Tokyo — faster overall</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">🚄 By Train</p>
                    <div className="relative pl-5">
                      <div className="absolute left-[7px] top-4 bottom-4 w-px bg-zinc-700" />
                      {[
                        { dot: '✈', label: 'Haneda Airport', sub: null },
                        { dot: '→', label: 'Keikyu Line', sub: '~25 min · ¥600' },
                        { dot: '🔄', label: 'Shinagawa Station', sub: 'Transfer to Shinkansen' },
                        { dot: '→', label: 'Tohoku Shinkansen (Yamabiko)', sub: '~80 min · ¥5,500' },
                        { dot: '🚉', label: 'Nasu-Shiobara Station', sub: 'Transfer to taxi' },
                        { dot: '→', label: 'Taxi', sub: '~30 min · ¥3,000–4,000' },
                        { dot: '⛺', label: 'Nasu Highland Glamping', sub: null },
                      ].map((step, i) => (
                        <div key={i} className="relative flex items-start gap-3 mb-2.5">
                          <span className="absolute -left-5 w-3.5 h-3.5 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-[8px] mt-0.5 flex-shrink-0">{step.dot}</span>
                          <div>
                            <p className={`text-xs font-medium ${i === 6 ? 'text-forest-400' : 'text-zinc-300'}`}>{step.label}</p>
                            {step.sub && <p className="text-[11px] text-zinc-600">{step.sub}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-lg bg-zinc-800/60 px-3 py-2 flex items-center justify-between">
                      <span className="text-xs text-zinc-400">Total journey</span>
                      <span className="text-sm font-semibold text-white">~2–2.5 hrs</span>
                    </div>
                  </div>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">🚗 By Rental Car</p>
                    <p className="text-xs text-zinc-500">Tohoku Expressway → Nasu IC → ~7 min to site</p>
                    <div className="mt-2 rounded-lg bg-zinc-800/60 px-3 py-2 flex items-center justify-between">
                      <span className="text-xs text-zinc-400">Total journey</span>
                      <span className="text-sm font-semibold text-white">~2.5–3 hrs</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-zinc-900 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6 mb-10">
            <p className="text-sm font-semibold tracking-[0.3em] text-forest-400 uppercase shrink-0">Process</p>
            <span className="hidden sm:inline text-zinc-700">—</span>
            <h2 className="font-display text-4xl font-light text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden mb-8">
            {STEPS.map((step) => (
              <div key={step.num} className="bg-zinc-900 px-7 py-8">
                <p className="text-sm text-forest-400/60 tracking-widest mb-4">{step.num}</p>
                <h3 className="font-display text-lg font-medium text-zinc-100 mb-3 leading-snug">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div>
            <Link href="/contact" className="btn-primary">
              Request your dates
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
