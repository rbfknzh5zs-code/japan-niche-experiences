import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'How It Works — Digital Detox Japan Process',
  description:
    'Simple 4-step process: choose your package, request dates, we prepare everything in English, you arrive and unplug. No Japanese needed, no planning stress.',
  alternates: { canonical: '/how-it-works' },
}

const STEPS = [
  {
    num: '01',
    title: 'Choose your package',
    desc: 'Browse our Digital Detox Starter — currently our flagship 1-night glamping experience for 1–4 guests. Read what\'s included, what\'s not, and our pricing.',
    cta: { label: 'See the package', href: '/packages/digital-detox-starter' },
  },
  {
    num: '02',
    title: 'Request your dates',
    desc: 'Fill out the short reservation request form with your preferred check-in date, group size, name, and email. WhatsApp is optional but useful for quick follow-up.',
    cta: { label: 'Request dates', href: '/contact' },
  },
  {
    num: '03',
    title: 'We confirm & prepare',
    desc: 'Within 48 hours (JST), we confirm availability. Once confirmed, we handle all Japanese-language reservations and prepare your complete English guide package: PDF guide, onsen map, directions video, BBQ plan, and digital detox mini guide.',
    cta: null,
  },
  {
    num: '04',
    title: 'Arrive & unplug',
    desc: 'Show up at your glamping site with your guide in hand. The BBQ is planned, the onsen map is ready, and the forest is waiting. Everything after this is about being present.',
    cta: null,
  },
]

const FAQS = [
  { q: 'How far in advance should I request?', a: 'Ideally 2–4 weeks ahead, especially for weekends and Golden Week. We can sometimes accommodate shorter notice — just ask.' },
  { q: 'What happens if my dates aren\'t available?', a: 'We\'ll suggest alternative dates or, if we can\'t find a suitable option, issue a full refund of any payment made.' },
  { q: 'Do I pay upfront?', a: 'No. The reservation request form is free. Payment details are sent only after we confirm availability.' },
  { q: 'What if I have questions before I book?', a: 'Use the contact form and mention you have pre-booking questions. We\'re happy to clarify anything before you commit.' },
]

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        tag="How It Works"
        title="Four Simple Steps"
        titleEm="to Japanese Quiet"
        description="We've designed this to be as friction-free as possible. You tell us your dates; we handle the rest in Japanese. You just need to show up."
        kanji="道"
        cta={{ label: 'Request your dates', href: '/contact' }}
      />

      {/* Steps */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-20">
            {STEPS.map((step, i) => (
              <div key={step.num} className={`flex flex-col sm:flex-row gap-8 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Number */}
                <div className="flex-shrink-0 sm:w-32 flex items-start justify-start sm:justify-center pt-1">
                  <span className="font-display text-8xl font-light text-forest-100 leading-none">{step.num}</span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-4">
                  <h2 className="font-display text-3xl font-light text-stone-900 mb-4">{step.title}</h2>
                  <p className="text-stone-600 leading-relaxed mb-6 text-lg">{step.desc}</p>
                  {step.cta && (
                    <Link href={step.cta.href} className="btn-ghost">
                      {step.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-light text-stone-900 mb-10">
            What We Handle (So You Don't Have To)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🇯🇵', title: 'Japanese reservations', desc: 'We book the glamping site in Japanese, confirm availability, and manage all communications with the venue.' },
              { icon: '📋', title: 'Campsite rules & etiquette', desc: 'Every site has unique rules. Our English PDF covers garbage sorting, quiet hours, fire regulations, and everything else.' },
              { icon: '♨️', title: 'Onsen research', desc: 'We identify the best onsen near your site, check their access policies, and include a ready-to-use map with English notes.' },
              { icon: '🗺️', title: 'Directions from the city', desc: 'Getting to rural Japan is the hardest part. We prepare step-by-step directions from the nearest major station or highway.' },
              { icon: '🥩', title: 'BBQ planning', desc: 'We create a BBQ ingredient plan tailored to your group size — what to buy, where to buy it, and how to prepare it.' },
              { icon: '📖', title: 'Detox guide', desc: 'A short, thoughtful mini guide on easing off screens: what to expect, simple practices, and how to make the most of 24 hours offline.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-stone-200 p-6">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-semibold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-light text-stone-900 mb-10">Common Questions</h2>
          <div className="divide-y divide-stone-200">
            {FAQS.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="font-display text-xl font-light text-stone-800 mb-3">{item.q}</h3>
                <p className="text-stone-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="btn-ghost">
              See all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-600 py-20 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-4xl font-light text-white mb-5">
            Ready to unplug?
          </h2>
          <p className="text-forest-100 mb-8 leading-relaxed">
            Submit your reservation request. It takes 2 minutes and there's no payment required upfront.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors">
            Request your dates
          </Link>
        </div>
      </section>
    </>
  )
}
