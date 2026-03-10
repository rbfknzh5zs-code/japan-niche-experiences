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
      <section className="bg-black pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-5">Reservation Request</p>
          <h1 className="font-display text-5xl font-light text-white mb-5">
            Request Your Dates
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
            Share your preferred check-in date and group size. We'll confirm availability and take care of everything else.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Trust sidebar */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-light text-white mb-6">What happens next</h2>
              <ol className="space-y-5">
                {[
                  { n: '1', text: 'Submit your request (free, no card needed).' },
                  { n: '2', text: 'We check availability and respond within 48 hours (JST).' },
                  { n: '3', text: 'If available, we book the facility on your behalf and email you the total cost — accommodation + $20 coordination fee.' },
                  { n: '4', text: 'You confirm and pay. We handle all Japanese communication with the property.' },
                  { n: '5', text: 'Receive your English guide pack, then arrive and unplug.' },
                ].map((item) => (
                  <li key={item.n} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-forest-900 text-forest-400 text-sm font-bold flex items-center justify-center flex-shrink-0">{item.n}</span>
                    <p className="text-zinc-400 text-sm leading-relaxed pt-0.5">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 space-y-4">
              {TRUST.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-zinc-400">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
              <p className="text-xs font-semibold tracking-widest text-forest-400 uppercase">How pricing works</p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-base leading-none mt-0.5">🏕️</span>
                  <div>
                    <p className="font-medium text-zinc-200">Accommodation</p>
                    <p className="text-xs text-zinc-500 mt-0.5">We book the facility on your behalf and email you the exact cost. You pay us — we handle the Japanese side.</p>
                  </div>
                </div>
                <div className="border-t border-zinc-800 pt-3 flex items-start gap-3">
                  <span className="text-base leading-none mt-0.5">📋</span>
                  <div>
                    <p className="font-medium text-zinc-200">Coordination fee — <span className="text-forest-400">$20</span></p>
                    <p className="text-xs text-zinc-500 mt-0.5">Fixed fee per booking. Covers English guide PDF, all Japanese communication, and email support.</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-600 border-t border-zinc-800 pt-3">Both amounts are confirmed by email before any payment is required.</p>
            </div>

            <div className="text-sm text-zinc-500 leading-relaxed">
              <p className="font-medium text-zinc-300 mb-2">Preferred package</p>
              <p>Nasu Highland Glamping — private onsen + sauna in every dome cabin. Up to 8 guests. Full English guide included.</p>
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
