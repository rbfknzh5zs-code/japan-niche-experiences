import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Request Your Digital Detox Japan Dates',
  description:
    'Request your Digital Detox Japan dates. Tell us your check-in date and group size — we\'ll confirm availability within 48 hours (JST) and prepare everything in English.',
  alternates: { canonical: '/contact' },
}

const TRUST = [
  { icon: '📬', label: 'Reply within 48 hours (JST)' },
  { icon: '💳', label: 'No payment required at this stage' },
  { icon: '🇬🇧', label: 'All communication in English' },
  { icon: '🔄', label: 'Full refund if dates unavailable' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-5">Reservation Request</p>
          <h1 className="font-display text-5xl font-light text-white mb-5">
            Request Your Dates
          </h1>
          <p className="text-stone-300 text-lg leading-relaxed max-w-xl mx-auto">
            Share your preferred check-in date and group size. We'll confirm availability and take care of everything else.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Trust sidebar */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-light text-stone-900 mb-6">What happens next</h2>
              <ol className="space-y-5">
                {[
                  { n: '1', text: 'Submit your request (free, no card needed).' },
                  { n: '2', text: 'We check availability and respond within 48 hours (JST).' },
                  { n: '3', text: 'If available, we send you the package details and payment link.' },
                  { n: '4', text: 'Once confirmed, you receive your complete English guide pack.' },
                  { n: '5', text: 'Arrive, breathe, and unplug.' },
                ].map((item) => (
                  <li key={item.n} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-forest-100 text-forest-700 text-sm font-bold flex items-center justify-center flex-shrink-0">{item.n}</span>
                    <p className="text-stone-600 text-sm leading-relaxed pt-0.5">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl bg-stone-50 border border-stone-200 p-6 space-y-4">
              {TRUST.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-stone-600">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="text-sm text-stone-400 leading-relaxed">
              <p className="font-medium text-stone-600 mb-2">Preferred package</p>
              <p>Digital Detox Starter — 1 night glamping for 1–4 guests, from ¥15,000/group. BBQ plan, onsen map, English guide, and more.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
