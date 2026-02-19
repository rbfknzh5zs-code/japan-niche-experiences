import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'FAQ — Digital Detox Japan Questions Answered',
  description:
    'Answers to common questions about Digital Detox Japan experiences: what\'s included, how booking works, connectivity, English support, cancellation, and more.',
  alternates: { canonical: '/faq' },
}

const FAQS: FAQItem[] = [
  {
    q: 'What exactly is included in the Digital Detox Starter package?',
    a: 'The Digital Detox Starter includes: (1) a 1-night glamping stay booked in your name, (2) a BBQ plan with ingredient guidance for your evening meal, (3) an English guide PDF covering all campsite rules, check-in, garbage sorting, and local tips, (4) an onsen area map with English notes, (5) a getting-there guide (step-by-step directions from the nearest station), and (6) a digital detox mini guide to ease your transition off screens.',
  },
  {
    q: 'What is NOT included?',
    a: 'Transportation/pickup, gear rental (not needed — glamping includes bedding and facilities), in-person guiding, meals beyond the BBQ plan, and onsen entry fees (typically ¥500–¥1,500 per person, paid on-site). We\'re explicit about this because we believe in honest pricing.',
  },
  {
    q: 'Do I need camping experience?',
    a: 'Not at all. We book glamping facilities, not primitive campsites. Glamping means real beds, climate control, proper toilet facilities, and usually showers. The experience is close to nature but free of the technical challenges of traditional camping.',
  },
  {
    q: 'Do I need to speak Japanese?',
    a: 'No. Everything we provide is in English. We handle all Japanese-language communication with venues and local services on your behalf. Your guide PDF, directions, onsen map, and all support from us are in English.',
  },
  {
    q: 'Will I have phone signal or WiFi?',
    a: 'Signal varies by location. Some rural areas have limited or no cell coverage — which is part of the appeal. Some glamping sites offer WiFi at reception buildings. We provide all necessary information (directions, guides, maps) before you arrive so you don\'t need connectivity on-site. Emergency contact options are always available.',
  },
  {
    q: 'Is my phone confiscated or monitored?',
    a: 'Absolutely not. Our philosophy is "encouraged, not enforced." We create the conditions for a natural digital detox — nature, good food, hot springs, quiet — but we never take your devices or impose rules. Most guests find they naturally stop reaching for their phones within the first hour or two.',
  },
  {
    q: 'How many people is the package for?',
    a: 'The Digital Detox Starter is priced per group of 1–4 guests. Couples, solo travelers, and small friend groups all work well. If you\'re a larger group, contact us and we\'ll explore options.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend 2–4 weeks in advance, especially for weekends and Japanese public holidays (Golden Week, Obon, Silver Week). We can sometimes accommodate shorter notice — just send a request and we\'ll check availability.',
  },
  {
    q: 'How does payment work?',
    a: 'The reservation request form is completely free. Once we confirm availability (within 48 hours JST), we send payment details for the package fee. Accommodation costs are either included in the package price or billed separately depending on the specific venue — this is always made clear before any payment.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Please see our Cancellation & Refunds page for full details. In brief: cancellations 7+ days before check-in receive a full refund; 3–6 days prior: 50% refund; less than 3 days: no refund. If we cannot find availability for your requested dates, you receive a full refund.',
  },
  {
    q: 'Can I get support during my stay?',
    a: 'Yes. We provide an email address for pre/during/post-stay support. For urgent matters, the English PDF includes emergency contact information. We don\'t offer on-site guiding, but we\'re reachable for any questions.',
  },
  {
    q: 'Is the experience suitable for non-outdoorsy people?',
    a: 'Yes. Glamping is designed precisely for people who want nature without roughing it. The most "outdoorsy" thing you\'ll do is grill your BBQ dinner and walk to the onsen. We include everything you need to feel comfortable and oriented from the moment you arrive.',
  },
]

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Simple hero */}
      <section className="bg-stone-900 pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-5">FAQ</p>
          <h1 className="font-display text-5xl font-light text-white mb-6">
            Common Questions
          </h1>
          <p className="text-stone-300 text-lg leading-relaxed">
            Everything you need to know about Digital Detox Japan experiences. Can't find your answer?{' '}
            <Link href="/contact" className="text-forest-400 underline underline-offset-2 hover:text-forest-300">
              Contact us directly.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-light text-stone-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-stone-600 mb-8">
            Send us a message. We reply within 48 hours (JST).
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact us</Link>
            <Link href="/packages/digital-detox-starter" className="btn-ghost">See the package</Link>
          </div>
        </div>
      </section>
    </>
  )
}
