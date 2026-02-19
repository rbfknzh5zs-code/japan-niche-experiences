import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Digital Detox Japan — Escape Screens, Reconnect with Nature',
  description:
    "Digital detox japan experiences designed for English-speaking travelers. Glamping, forest bathing, and onsen in Japan's wilderness — all prepared in English. No Japanese required.",
  alternates: { canonical: '/digital-detox-japan' },
  openGraph: {
    title: 'Digital Detox Japan — Escape Screens, Reconnect with Nature',
    description: 'Curated digital detox retreats in Japan. Glamping, forest therapy & onsen — all in English.',
  },
}

export default function DigitalDetoxJapanPage() {
  return (
    <>
      <Hero
        tag="Digital Detox Japan"
        title="Digital Detox in Japan"
        titleEm="— Leave the Screen Life Behind"
        description="Japan's ancient forests, mineral-rich hot springs, and vast night skies offer the perfect antidote to screen fatigue. We make it effortless for English-speaking visitors to unplug completely."
        cta={{ label: 'Request your dates', href: '/contact' }}
        ctaSecondary={{ label: 'See the package', href: '/packages/digital-detox-starter' }}
        kanji="脱"
      />

      {/* Main content */}
      <article className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl prose-custom">
          <h2 className="font-display text-3xl font-light text-stone-900 mb-6">
            What Is a Digital Detox — and Why Japan?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 text-lg">
            A <strong className="text-stone-800">digital detox</strong> means deliberately stepping away from smartphones, laptops, and social media to give your nervous system a genuine rest. Research shows that even 24–48 hours without screens can meaningfully reduce cortisol levels, improve sleep quality, and restore attention span.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Japan is uniquely suited to this practice. The country pioneered <em>shinrin-yoku</em> — forest bathing — as a medically recognized form of preventive healthcare. Its <em>onsen</em> (hot spring) culture has offered people a phone-free space for centuries. Across Japan's countryside, you'll find the quietude that modern urban life rarely provides.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Yet navigating Japan as an English-speaking traveler can be challenging: making reservations in Japanese, understanding campsite rules, finding hidden onsen, driving rural roads. That's exactly what we handle for you.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            A Gentle Approach — Encouraged, Not Enforced
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            We believe in <strong className="text-stone-800">digital detox that's encouraged, not enforced</strong>. We won't confiscate your phone. We won't shame you for checking a map. What we do is create the conditions — nature, space, good food, hot springs — that make you genuinely want to put the screen down.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Most guests tell us they naturally stopped reaching for their phones by the second hour. Not because they had to. Because the forest was simply more interesting.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            What a Digital Detox Japan Experience Looks Like
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Our Digital Detox Starter is a one-night glamping experience designed for 1–4 guests. You arrive in the afternoon, settle into comfortable accommodation, and spend the evening around a BBQ. The morning brings forest air, birds, and the kind of stillness that city life rarely provides.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Comfortable glamping — real beds, no tent-pitching skills needed',
              'BBQ plan with ingredients prepared',
              'Onsen nearby — mineral hot springs without a phone in sight',
              'English PDF guide covering every detail from parking to garbage sorting',
              'Video directions so you arrive without stress',
              'Digital detox mini guide with tips for easing off screens',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-700">
                <span className="mt-1 h-5 w-5 rounded-full bg-forest-100 text-forest-600 text-xs flex items-center justify-center font-bold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            Who Is Digital Detox Japan For?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Our guests are typically English-speaking travelers from North America and Europe who:
          </p>
          <ul className="list-disc list-inside space-y-2 text-stone-600 mb-8 ml-4">
            <li>Feel burned out from constant connectivity</li>
            <li>Want to experience authentic Japanese nature, not tourist crowds</li>
            <li>Don't speak Japanese and want a fully prepared, worry-free experience</li>
            <li>Are traveling solo, as a couple, or in a small group of up to 4</li>
          </ul>
          <p className="text-stone-600 leading-relaxed">
            No camping experience required. No Japanese language skills required. Just bring curiosity and an open mind.
          </p>

          <div className="mt-14 rounded-2xl bg-forest-50 border border-forest-200 p-8 text-center">
            <p className="font-display text-2xl font-light text-forest-800 mb-4">
              Ready for your digital detox in Japan?
            </p>
            <p className="text-stone-600 mb-6">
              Tell us your dates and group size — we'll confirm availability and prepare everything.
            </p>
            <Link href="/contact" className="btn-primary">
              Request your dates
            </Link>
            <p className="mt-4 text-sm text-stone-400">No payment upfront. Reply within 48 hours (JST).</p>
          </div>
        </div>
      </article>

      {/* Internal links */}
      <section className="bg-stone-50 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-light text-stone-800 mb-8">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Unplug in Japan', href: '/unplug-in-japan', desc: 'The philosophy of disconnecting in Japan\'s quiet.' },
              { title: 'Forest Therapy Japan', href: '/forest-therapy-japan', desc: 'Shinrin-yoku and the science of forest bathing.' },
              { title: 'Japan Wellness Retreat', href: '/japan-wellness-nature-retreat', desc: 'Onsen, nature, and rest — a full wellness reset.' },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="group block rounded-xl border border-stone-200 bg-white p-6 hover:border-forest-300 hover:shadow-sm transition-all">
                <h3 className="font-display text-lg font-light text-stone-800 group-hover:text-forest-700 mb-2">{card.title}</h3>
                <p className="text-sm text-stone-500">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
