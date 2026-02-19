import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Legal disclaimer for Digital Detox Japan — limitations of liability, health & safety, third-party content.',
  alternates: { canonical: '/legal/disclaimer' },
  robots: { index: false },
}

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      <div className="bg-stone-100 pt-32 pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-display text-4xl font-light text-stone-900">Disclaimer</h1>
          <p className="mt-3 text-stone-500 text-sm">Last updated: February 2026</p>
        </div>
      </div>

      <article className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-stone-600 leading-relaxed">

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">1. General Disclaimer</h2>
            <p>The information provided on this website and in Digital Detox Japan materials is for general informational purposes only. While we strive for accuracy, we make no warranties — express or implied — about the completeness, accuracy, reliability, or suitability of the information for any particular purpose.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">2. Nature Activities & Health</h2>
            <p className="mb-3">Outdoor activities including glamping, hiking, and onsen bathing involve inherent risks. By participating in any activity arranged through Digital Detox Japan, you acknowledge that you:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Are in adequate physical health to participate</li>
              <li>Accept personal responsibility for your safety</li>
              <li>Understand that we are not trained first responders or medical providers</li>
              <li>Will follow all safety guidelines provided by venue operators</li>
            </ul>
            <p>We strongly recommend carrying comprehensive travel insurance that covers medical emergencies, evacuation, and trip cancellation.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">3. Onsen Health Warnings</h2>
            <p>Hot spring bathing is not recommended for certain individuals including those with heart conditions, high blood pressure, skin conditions, open wounds, or during pregnancy. Please consult a medical professional before using onsen if you have health concerns. Always follow the rules and warnings posted at individual onsen facilities.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">4. Third-Party Venues</h2>
            <p>We act as an intermediary service. We do not operate, own, or control the glamping facilities, onsen, restaurants, or other venues included in or recommended by our packages. We are not responsible for the actions, omissions, standards, or services of third-party operators. Any issues with venue facilities should be reported to the venue directly and to us.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">5. Accuracy of Guides and Maps</h2>
            <p>Our English guides, onsen maps, and direction materials are prepared in good faith and to the best of our knowledge at the time of preparation. Roads, access policies, venue operations, and prices may change. We recommend verifying critical information (particularly directions and venue hours) close to your travel date.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">6. Digital Detox Outcomes</h2>
            <p>We make no medical or psychological claims about the outcomes of digital detox practices. References to research findings (e.g., effects of forest bathing on cortisol levels) are provided for informational purposes and do not constitute medical advice. If you have concerns about technology use, anxiety, or mental health, please consult a qualified healthcare professional.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Digital Detox Japan shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from: use of this website, participation in any experience, reliance on any information provided, or any acts or omissions of third-party venues or service providers.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-light text-stone-900 mb-4">8. Links to External Sites</h2>
            <p>This website may contain links to third-party websites. These are provided for convenience only. We do not endorse, control, or take responsibility for the content or practices of any external site.</p>
          </section>

          <div className="pt-8 border-t border-stone-100 text-sm text-stone-400 flex flex-wrap gap-6">
            <Link href="/legal/terms" className="hover:text-forest-600 transition-colors">Terms & Conditions</Link>
            <Link href="/legal/privacy" className="hover:text-forest-600 transition-colors">Privacy Policy</Link>
            <Link href="/legal/cancellation-refunds" className="hover:text-forest-600 transition-colors">Cancellation & Refunds</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
