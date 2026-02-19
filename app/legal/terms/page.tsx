import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Digital Detox Japan reservation and planning services.',
  alternates: { canonical: '/legal/terms' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="bg-stone-100 pt-32 pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-display text-4xl font-light text-stone-900">Terms & Conditions</h1>
          <p className="mt-3 text-stone-500 text-sm">Last updated: February 2026</p>
        </div>
      </div>

      <article className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-stone-600 leading-relaxed">

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">1. Introduction</h2>
            <p>These Terms & Conditions ("Terms") govern your use of the Digital Detox Japan website ("Site") and the reservation planning services ("Services") provided by Digital Detox Japan ("we," "us," "our"). By submitting a reservation request or purchasing a package, you agree to these Terms in full.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">2. Nature of Services</h2>
            <p className="mb-3">Digital Detox Japan is a reservation and experience planning service. We act as an intermediary between you (the guest) and third-party glamping facilities, onsen establishments, and other local providers. We are not the venue operator and are not responsible for the physical facilities, safety standards, or day-to-day operations of partner venues.</p>
            <p>Our service consists of: researching and booking accommodations on your behalf, preparing English-language guides and resources, and providing pre-stay support. We do not operate on-site and do not provide in-person guiding unless explicitly stated.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">3. Reservation Process</h2>
            <p className="mb-3">Submitting a reservation request form does not constitute a confirmed booking. A booking is confirmed only when: (a) we have verified availability with the venue, and (b) you have completed payment of the applicable package fee.</p>
            <p>We aim to respond to all reservation requests within 48 hours (JST). Response times may be longer during Japanese public holidays.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">4. Pricing</h2>
            <p>Package prices are displayed on the Site in Japanese Yen (JPY) and are correct at the time of publication. We reserve the right to update pricing at any time. The price confirmed at booking is the price you pay. Accommodation costs and venue fees may be additional unless explicitly stated as included.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">5. Cancellation & Refunds</h2>
            <p>Please refer to our <Link href="/legal/cancellation-refunds" className="text-forest-600 underline underline-offset-2">Cancellation & Refunds Policy</Link> for full details. Venue cancellation policies (which may differ from ours) are communicated at the time of booking confirmation.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">6. Guest Responsibilities</h2>
            <p className="mb-3">Guests are responsible for: following all campsite rules as outlined in the English PDF guide, treating venue facilities and natural surroundings with respect, arriving with valid travel documents (passport, visa if required), carrying appropriate travel insurance, and adhering to local Japanese regulations and etiquette.</p>
            <p>Guests who cause damage to venue property may be liable for repair or replacement costs.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">7. Liability Limitation</h2>
            <p>To the maximum extent permitted by law, Digital Detox Japan is not liable for: loss or damage to personal property, personal injury or illness during activities, disruptions due to weather or natural events, third-party service failures, or indirect losses of any kind. Please refer to our <Link href="/legal/disclaimer" className="text-forest-600 underline underline-offset-2">Disclaimer</Link> for further detail.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">8. Intellectual Property</h2>
            <p>All content on this Site — including text, images, guides, and design — is the property of Digital Detox Japan and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">9. Privacy</h2>
            <p>Your personal data is handled in accordance with our <Link href="/legal/privacy" className="text-forest-600 underline underline-offset-2">Privacy Policy</Link>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">10. Changes to These Terms</h2>
            <p>We may update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">11. Governing Law</h2>
            <p>These Terms are governed by the laws of Japan. Any disputes will be subject to the exclusive jurisdiction of Japanese courts.</p>
          </section>

          <div className="pt-8 border-t border-stone-100 text-sm text-stone-400 flex flex-wrap gap-6">
            <Link href="/legal/privacy" className="hover:text-forest-600 transition-colors">Privacy Policy</Link>
            <Link href="/legal/cancellation-refunds" className="hover:text-forest-600 transition-colors">Cancellation & Refunds</Link>
            <Link href="/legal/disclaimer" className="hover:text-forest-600 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
