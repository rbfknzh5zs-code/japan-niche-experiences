import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Digital Detox Japan — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/legal/privacy' },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="bg-stone-100 pt-32 pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-display text-4xl font-light text-stone-900">Privacy Policy</h1>
          <p className="mt-3 text-stone-500 text-sm">Last updated: February 2026</p>
        </div>
      </div>

      <article className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-stone-600 leading-relaxed">

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">1. Who We Are</h2>
            <p>Digital Detox Japan ("we," "us," "our") operates the website at this domain and provides digital detox experience planning services. For privacy inquiries, you can contact us through the <Link href="/contact" className="text-forest-600 underline underline-offset-2">Contact page</Link>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">2. What Data We Collect</h2>
            <p className="mb-3">When you submit a reservation request, we collect the following data:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Full name</li>
              <li>Email address</li>
              <li>Preferred check-in date and group size</li>
              <li>WhatsApp number (optional)</li>
              <li>Country of residence (optional)</li>
              <li>Any message or notes you include</li>
            </ul>
            <p>We do not collect payment card details directly — payment is processed through third-party payment providers.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">3. How We Use Your Data</h2>
            <p className="mb-3">We use your data to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Process your reservation request and confirm availability</li>
              <li>Communicate with you about your booking</li>
              <li>Prepare and send your English guide package</li>
              <li>Provide pre/during/post-stay support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">4. Sharing Your Data</h2>
            <p className="mb-3">We share your data only where necessary:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Venue operators:</strong> Your name and booking details are shared with the glamping facility to make the reservation.</li>
              <li><strong>Email service providers:</strong> We use Resend to send transactional emails. They process email data on our behalf.</li>
              <li><strong>Legal requirements:</strong> We may disclose data if required by law.</li>
            </ul>
            <p className="mt-3">We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">5. Data Retention</h2>
            <p>We retain your reservation data for up to 2 years for customer service and legal purposes, after which it is securely deleted. You may request earlier deletion by contacting us.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">6. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability (where applicable)</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us through the <Link href="/contact" className="text-forest-600 underline underline-offset-2">Contact page</Link>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">7. Cookies</h2>
            <p>This site uses only essential cookies required for the site to function (e.g., security tokens). We do not use analytics cookies, advertising cookies, or tracking pixels at this time.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">8. Security</h2>
            <p>We implement reasonable technical measures to protect your personal data from unauthorized access, loss, or disclosure. All data transmission uses HTTPS encryption.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The date at the top of this page will reflect the most recent revision. Continued use of the Site after changes constitutes acceptance.</p>
          </section>

          <div className="pt-8 border-t border-stone-100 text-sm text-stone-400 flex flex-wrap gap-6">
            <Link href="/legal/terms" className="hover:text-forest-600 transition-colors">Terms & Conditions</Link>
            <Link href="/legal/cancellation-refunds" className="hover:text-forest-600 transition-colors">Cancellation & Refunds</Link>
            <Link href="/legal/disclaimer" className="hover:text-forest-600 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
