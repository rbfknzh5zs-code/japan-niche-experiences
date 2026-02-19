import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cancellation & Refunds Policy',
  description: 'Digital Detox Japan cancellation and refund policy — what to do if you need to cancel or change your reservation.',
  alternates: { canonical: '/legal/cancellation-refunds' },
  robots: { index: false },
}

export default function CancellationRefundsPage() {
  return (
    <div className="bg-white">
      <div className="bg-stone-100 pt-32 pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-display text-4xl font-light text-stone-900">Cancellation & Refunds</h1>
          <p className="mt-3 text-stone-500 text-sm">Last updated: February 2026</p>
        </div>
      </div>

      <article className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-stone-600 leading-relaxed">

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">1. Cancellation by the Guest</h2>
            <p className="mb-6">If you need to cancel a confirmed booking, please notify us as early as possible via email. Cancellation fees are calculated based on the number of days before your check-in date:</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-50">
                    <th className="text-left py-3 px-4 border border-stone-200 font-semibold text-stone-700">Notice Period</th>
                    <th className="text-left py-3 px-4 border border-stone-200 font-semibold text-stone-700">Refund</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: '7+ days before check-in', refund: 'Full refund (100%)' },
                    { period: '3–6 days before check-in', refund: '50% refund' },
                    { period: 'Less than 3 days before check-in', refund: 'No refund' },
                    { period: 'No-show', refund: 'No refund' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                      <td className="py-3 px-4 border border-stone-200">{row.period}</td>
                      <td className="py-3 px-4 border border-stone-200 font-medium text-stone-800">{row.refund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-stone-500">Note: This policy applies to our package fee. Venue (accommodation) cancellation policies may differ and will be communicated at the time of booking confirmation. In some cases, venue fees are non-refundable regardless of notice period.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">2. Cancellation by Us</h2>
            <p className="mb-3">We may need to cancel a booking in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>The requested venue is unavailable and we cannot source a suitable alternative</li>
              <li>Force majeure events (natural disasters, severe weather, government restrictions)</li>
              <li>Safety concerns at or near the venue</li>
            </ul>
            <p>In the event we cancel your booking, you will receive a <strong className="text-stone-800">full refund</strong> of all fees paid, processed within 5–7 business days.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">3. Date Changes</h2>
            <p>We will accommodate date change requests where venue availability allows, at no additional charge, provided the request is made more than 7 days before the original check-in date. Date changes within 7 days are subject to the cancellation policy above.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">4. Unfulfilled Requests</h2>
            <p>If you submit a reservation request and we are unable to confirm availability for your dates, your request is cancelled at no charge. No payment will have been taken at this stage.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">5. Refund Processing</h2>
            <p>Approved refunds are processed within 5–7 business days using the same payment method as the original transaction. Processing times may vary depending on your bank or card provider.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">6. How to Cancel</h2>
            <p>To cancel or change your booking, please contact us via the <Link href="/contact" className="text-forest-600 underline underline-offset-2">Contact page</Link> or reply to your booking confirmation email. Please include your booking reference number.</p>
          </section>

          <div className="pt-8 border-t border-stone-100 text-sm text-stone-400 flex flex-wrap gap-6">
            <Link href="/legal/terms" className="hover:text-forest-600 transition-colors">Terms & Conditions</Link>
            <Link href="/legal/privacy" className="hover:text-forest-600 transition-colors">Privacy Policy</Link>
            <Link href="/legal/disclaimer" className="hover:text-forest-600 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
