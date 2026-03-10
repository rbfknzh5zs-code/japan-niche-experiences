import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Nasu Highland Glamping — Private Onsen & Barrel Sauna in Every Cabin',
  description:
    'Glamping B&V Nasu Kogen: every dome cabin includes a private natural hot spring AND a private Finnish barrel sauna. Campfire, BBQ, free bar. Tochigi Prefecture. $20 coordination fee.',
  alternates: { canonical: '/packages/nasu-highland-glamping' },
  openGraph: {
    title: 'Nasu Highland Glamping — Private Onsen & Barrel Sauna in Every Cabin',
    description: 'Private onsen + barrel sauna in every cabin. Glamping BBQ, campfire, free bar. Nasu Kogen, Tochigi. Full English support by Digital Detox Japan.',
  },
}

const INCLUDED = [
  {
    icon: '♨️',
    title: 'Private Natural Hot Spring',
    desc: '100% natural mineral spring water flows into your own outdoor bath — in every single cabin. Soak under the open sky whenever you want. No sharing, no waiting.',
  },
  {
    icon: '🪣',
    title: 'Private Finnish Barrel Sauna',
    desc: 'An authentic Finnish-style barrel sauna with a cold water plunge tub is built into every cabin. Experience the true totonoi (整い) ritual — heat, cold, repeat — deep in the Nasu highlands.',
  },
  {
    icon: '🔥',
    title: 'Private Campfire',
    desc: 'Every cabin has its own private fire pit. Stare into the flames, toast marshmallows, and watch the stars appear over the Nasu highlands.',
  },
  {
    icon: '🍖',
    title: 'Glamping BBQ',
    desc: 'A luxurious outdoor BBQ using locally sourced Tochigi Prefecture ingredients — served in your private dining area adjacent to the cabin.',
  },
  {
    icon: '🍹',
    title: 'Free Bar at B&V Terrace',
    desc: 'Complimentary drinks at the communal B&V Terrace. Unwind with a beer or wine before heading back to your private sanctuary.',
  },
  {
    icon: '⛺',
    title: '5 Dome Types to Choose From',
    desc: 'Standard Dome (6 guests), Deluxe Dome (8 guests), Twin Dome (8 guests), Clear Dome (6 guests), and a Dog-Friendly Raindrop dome (6 guests + your dog).',
  },
  {
    icon: '📄',
    title: 'Full English Pack by Digital Detox Japan',
    desc: 'Check-in guide, directions from Tokyo, facility rules, local area tips — all in English. We handle all Japanese-language communication with the property.',
  },
]

const NOT_INCLUDED = [
  { item: 'Transportation / pickup service', note: 'Approx. 7 min from Nasu IC (Tohoku Expressway). We provide detailed English directions.' },
  { item: 'Meals beyond BBQ dinner', note: 'Breakfast is self-arranged. Nearby restaurants and convenience stores are covered in your guide.' },
  { item: 'Activities beyond what the cabin includes', note: 'Optional paid activities (smoked food, craft experiences, etc.) are available at the facility.' },
]

const DOME_TYPES = [
  { name: 'Standard Dome', size: '7 m', capacity: 'Up to 6 guests', note: 'Classic dome with private onsen, sauna, and campfire.' },
  { name: 'Deluxe Dome', size: '8 m', capacity: 'Up to 8 guests', note: 'Larger dome — ideal for groups or families.' },
  { name: 'Twin Dome', size: '—', capacity: 'Up to 8 guests', note: 'Two connected domes for couples or smaller groups wanting separate spaces.' },
  { name: 'Clear Dome', size: '7 m', capacity: 'Up to 6 guests', note: 'Transparent ceiling — stargaze from inside your cabin.' },
  { name: 'Raindrop', size: '—', capacity: 'Up to 6 guests', note: 'Dog-friendly dome with a dedicated private dog run. Bring your dog.' },
]

export default function NasuHighlandGlampingPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digitaldetoxjapan.com'
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Nasu Highland Glamping Retreat',
    description:
      'Glamping B&V Nasu Kogen — private natural onsen + private barrel sauna in every dome cabin. Campfire, glamping BBQ, free bar. Tochigi Prefecture, Japan.',
    brand: { '@type': 'Brand', name: 'Digital Detox Japan' },
    url: `${SITE_URL}/packages/nasu-highland-glamping`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 45000, priceCurrency: 'JPY' },
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <JsonLd data={productSchema} />

      <Hero
        tag="Featured Destination · Nasu Kogen, Tochigi"
        title="Nasu Highland Glamping —"
        titleEm="Private Onsen & Sauna in Every Cabin"
        description="Every dome cabin at Glamping B&V Nasu Kogen comes with its own private natural hot spring and Finnish barrel sauna. Soak, sweat, campfire, stars. The first resort of its kind in the Nasu Kogen area."
        cta={{ label: 'Request your dates', href: '/contact' }}
        kanji="湯"
        bgImage="/images/nasut_1.jpg"
      />

      {/* Onsen + Sauna highlight banner */}
      <section className="bg-earth-900 py-10 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <span className="text-4xl">♨️</span>
            <div>
              <p className="text-xs font-semibold tracking-widest text-earth-300 uppercase mb-0.5">In every cabin</p>
              <p className="font-display text-xl font-light text-white">Private Natural Hot Spring</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-earth-700" />
          <div className="flex items-center gap-4">
            <span className="text-4xl">🪣</span>
            <div>
              <p className="text-xs font-semibold tracking-widest text-earth-300 uppercase mb-0.5">In every cabin</p>
              <p className="font-display text-xl font-light text-white">Finnish Barrel Sauna</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-earth-700" />
          <div className="flex items-center gap-4">
            <span className="text-4xl">🔥</span>
            <div>
              <p className="text-xs font-semibold tracking-widest text-earth-300 uppercase mb-0.5">In every cabin</p>
              <p className="font-display text-xl font-light text-white">Private Campfire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-white py-12 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2 row-span-1 lg:col-span-2 lg:row-span-2">
              <Image
                src="/images/bv.jpg"
                alt="Glamping B&V Nasu Kogen — dome cabins"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/nasut_4.jpg"
                alt="Nasu Highland glamping exterior"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/nasut_11.jpg"
                alt="Nasu Highland glamping dome"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/nasu-sauna.jpg"
                alt="Private barrel sauna at Nasu Highland"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/nasut_6.jpg"
                alt="Nasu Highland glamping camp area"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-stone-400 text-right">
            Photos: Glamping B&amp;V Nasu Kogen
          </p>
        </div>
      </section>

      {/* Package overview */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-14">

              {/* What's included */}
              <div>
                <h2 className="font-display text-3xl font-light text-white mb-8">What's Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {INCLUDED.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-zinc-100 mb-1">{item.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Onsen & Sauna deep dive */}
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 space-y-6">
                <h2 className="font-display text-2xl font-light text-white">
                  The Onsen & Sauna Experience
                </h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-2 flex items-center gap-2">
                      <span>♨️</span> Natural hot spring water — 100% private
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      The Nasu Kogen area of Tochigi Prefecture is one of Japan's premier hot spring regions. At Glamping B&V, each cabin is fed directly by natural mineral-rich spring water — not pumped or shared with other guests. You have your own outdoor bath, completely private, open-air. Use it at midnight. Use it at 6am. It's yours for the stay.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-2 flex items-center gap-2">
                      <span>🪣</span> Finnish barrel sauna + cold water plunge
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Every cabin has its own barrel sauna — the distinctive round-shaped Finnish design. Heat up inside, then step out to the cold plunge tub. Repeat. This is <em>totonoi</em> (整い) — the Japanese sauna ritual of finding equilibrium through heat and cold. In the middle of a highland forest, it hits different.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dome types */}
              <div>
                <h2 className="font-display text-3xl font-light text-white mb-6">Choose Your Dome</h2>
                <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
                  Five dome types are available. All come with private onsen, sauna, and campfire. Tell us your group size and we'll recommend the right fit.
                </p>
                <div className="space-y-3">
                  {DOME_TYPES.map((dome) => (
                    <div key={dome.name} className="flex gap-4 py-4 border-b border-zinc-800">
                      <span className="text-xl flex-shrink-0 mt-0.5">⛺</span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                          <p className="font-semibold text-zinc-100">{dome.name}</p>
                          {dome.size !== '—' && (
                            <span className="text-xs text-zinc-600">({dome.size} diameter)</span>
                          )}
                          <span className="text-xs font-medium text-forest-400 bg-forest-900/40 rounded-full px-2 py-0.5">
                            {dome.capacity}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500">{dome.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's NOT included */}
              <div>
                <h2 className="font-display text-3xl font-light text-white mb-6">What's Not Included</h2>
                <div className="space-y-4">
                  {NOT_INCLUDED.map((item) => (
                    <div key={item.item} className="flex gap-4 py-4 border-b border-zinc-800">
                      <span className="text-zinc-600 flex-shrink-0 mt-0.5">✕</span>
                      <div>
                        <p className="font-medium text-zinc-200">{item.item}</p>
                        <p className="text-sm text-zinc-500 mt-0.5">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="font-display text-3xl font-light text-white mb-2">Getting There</h2>
                <p className="text-zinc-500 text-sm mb-8">From Japan's international airports to Nasu Kogen, Tochigi</p>

                {/* Airport journey cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {/* NRT */}
                  <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
                    <div className="flex items-start gap-3 mb-5">
                      <span className="text-xs font-bold tracking-widest text-forest-400 bg-forest-400/10 border border-forest-400/20 rounded px-2 py-1 mt-0.5">NRT</span>
                      <div>
                        <p className="font-semibold text-zinc-100">Narita International Airport</p>
                        <p className="text-xs text-zinc-500 mt-0.5">Most international long-haul flights</p>
                      </div>
                    </div>

                    {/* Train route */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">🚄 By Train</p>
                      <div className="relative pl-5">
                        <div className="absolute left-[7px] top-4 bottom-4 w-px bg-zinc-700" />
                        {[
                          { dot: '✈', label: 'Narita Airport', sub: null },
                          { dot: '→', label: 'Narita Express (N\'EX)', sub: '~60 min · ¥3,000' },
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

                    {/* Car */}
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

                    {/* Train route */}
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

                    {/* Car */}
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


                <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 text-xs text-zinc-600">
                  📍 Address: 5731-8 Uenodai, Takakukou, Nasu-cho, Nasu-gun, Tochigi 325-0001 · Step-by-step English directions included in your guide.
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">How pricing works</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-base leading-none mt-0.5">🏕️</span>
                    <div>
                      <p className="font-medium text-zinc-200">Accommodation</p>
                      <p className="text-xs text-zinc-500 mt-0.5">We book on your behalf and email you the exact cost. Varies by dates and dome type.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm border-t border-zinc-800 pt-4">
                    <span className="text-base leading-none mt-0.5">📋</span>
                    <div>
                      <p className="font-medium text-zinc-200">Coordination fee</p>
                      <p className="text-2xl font-semibold text-forest-400 my-1">$20</p>
                      <p className="text-xs text-zinc-500">English guide · Japanese comms · support</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mb-6">All amounts confirmed by email before payment.</p>

                <div className="space-y-2 mb-8 text-sm text-zinc-400">
                  <p className="flex items-center gap-2"><span>♨️</span> Private onsen in every cabin</p>
                  <p className="flex items-center gap-2"><span>🪣</span> Private barrel sauna in every cabin</p>
                  <p className="flex items-center gap-2"><span>🔥</span> Private campfire in every cabin</p>
                  <p className="flex items-center gap-2"><span className="text-forest-400">✓</span> Up to 8 guests</p>
                  <p className="flex items-center gap-2"><span className="text-forest-400">✓</span> Dog-friendly option available</p>
                </div>

                <Link href="/contact" className="btn-primary w-full text-center block mb-4">
                  Request your dates
                </Link>
                <p className="text-xs text-center text-zinc-600">No payment required at this stage</p>

                <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3 text-sm text-zinc-500">
                  <Link href="/faq" className="block hover:text-forest-400 transition-colors">→ Frequently asked questions</Link>
                  <Link href="/how-it-works" className="block hover:text-forest-400 transition-colors">→ How the process works</Link>
                  <Link href="/packages/digital-detox-starter" className="block hover:text-forest-400 transition-colors">→ Also: Digital Detox Starter</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="bg-zinc-950 py-10 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-5xl">
          <ShareButtons
            url="https://digitaldetoxjapan.com/packages/nasu-highland-glamping"
            title="Nasu Highland Glamping — Private Onsen & Barrel Sauna in Every Cabin"
          />
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="bg-black py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xl italic text-earth-300 mb-3">Onsen. Sauna. Silence.</p>
          <p className="text-earth-200/70 leading-relaxed">
            The Nasu Kogen region has been a hot spring destination for centuries. Add a private barrel sauna, a campfire, and a dome under the stars — and you have something rare: a place that genuinely asks nothing of you.
          </p>
        </div>
      </section>
    </>
  )
}
