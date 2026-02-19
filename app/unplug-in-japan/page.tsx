import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Unplug in Japan — How to Disconnect Without Planning Stress',
  description:
    "Want to unplug in Japan but don't know where to start? We prepare everything in English — glamping, onsen access, BBQ, and forest therapy — so you can just arrive and breathe.",
  alternates: { canonical: '/unplug-in-japan' },
  openGraph: {
    title: 'Unplug in Japan — How to Disconnect Without Planning Stress',
    description: 'We handle all Japanese logistics so you can unplug in Japan without the stress. Glamping, onsen & forest bathing — all in English.',
  },
}

export default function UnplugInJapanPage() {
  return (
    <>
      <Hero
        tag="Unplug in Japan"
        title="Unplug in Japan —"
        titleEm="No Planning Stress Required"
        description="Japan's countryside is one of the world's best places to disconnect. We handle every Japanese-language detail so you arrive ready to breathe — not troubleshoot."
        cta={{ label: 'Request your dates', href: '/contact' }}
        ctaSecondary={{ label: 'See the package', href: '/packages/digital-detox-starter' }}
        kanji="離"
      />

      <article className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6">
            Why Unplug in Japan?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 text-lg">
            Deciding to <strong className="text-stone-800">unplug in Japan</strong> is easy. Actually doing it is harder when you're navigating foreign-language campsite bookings, unclear onsen access rules, and rural roads without a reliable signal. Most travelers give up before they start.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            We exist to remove every one of those friction points. By the time you arrive at your glamping site, the BBQ is waiting, the directions are clear, and the onsen map is in your hand. You have nothing to organize and everything to experience.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            The Art of Japanese Quiet
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Japan has a concept called <em>ma</em> (間) — the pregnant pause, the meaningful space between things. You feel it in the interval between footsteps on a forest path, in the silence of a mountain onsen at dusk, in the moment before birdsong returns after you've been still long enough to stop startling the forest.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            This is not the silence of an empty room. It's the silence of a world that has been here long before notifications existed — and will remain long after the last server farm powers down. Japanese nature has a particular density of presence. Travelers from North America and Europe consistently report that it feels different from nature at home. More settled. More ancient. More indifferent to urgency.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            That's what you're traveling for. We just take care of the paperwork.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            What "Unplug" Means With Us
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Our philosophy is simple: <strong className="text-stone-800">encouraged, not enforced</strong>. We don't lock away your devices. We don't enforce silence rules. We create an environment where unplugging happens naturally because the alternative — staring at Instagram instead of a starlit Japanese sky — just doesn't make sense.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
            {[
              { title: 'What we provide', items: ['Glamping accommodation booked & confirmed', 'BBQ ingredients plan ready on arrival', 'Onsen access map for the local area', 'English PDF guide (every detail covered)', 'Video directions from nearest station', 'Digital detox mini guide'] },
              { title: 'What you don\'t need', items: ['Japanese language skills', 'Camping experience', 'Advance scouting or research', 'Booking portals in Japanese', 'A rental car necessarily', 'A plan beyond "arrive and breathe"'] },
            ].map((col) => (
              <div key={col.title} className="rounded-xl bg-stone-50 border border-stone-200 p-6">
                <h3 className="font-semibold text-stone-800 mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="mt-0.5 text-forest-500 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            How to Unplug in Japan: A Practical Guide
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            If you're planning to unplug in Japan independently, here's what to prepare:
          </p>
          <ol className="space-y-4 text-stone-600 mb-8">
            <li className="flex gap-4">
              <span className="font-display text-2xl text-forest-300 leading-none flex-shrink-0">1.</span>
              <div>
                <strong className="text-stone-800 block mb-1">Choose a nature region</strong>
                Yamanashi (Mt. Fuji area), Nagano, Nasu, and Izu are all excellent for English-speaking visitors. Rural areas with limited cell service are ideal.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl text-forest-300 leading-none flex-shrink-0">2.</span>
              <div>
                <strong className="text-stone-800 block mb-1">Book glamping, not traditional camping</strong>
                Glamping sites offer real beds, proper toilets, and clear check-in processes — far less friction for first-timers.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl text-forest-300 leading-none flex-shrink-0">3.</span>
              <div>
                <strong className="text-stone-800 block mb-1">Download everything before you go</strong>
                Maps, guides, directions. Assume zero connectivity on-site and front-load all information.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl text-forest-300 leading-none flex-shrink-0">4.</span>
              <div>
                <strong className="text-stone-800 block mb-1">Or: let us do it all</strong>
                Our Digital Detox Starter package handles steps 1–3 for you — including the Japanese-language parts you can't access yourself.
              </div>
            </li>
          </ol>

          <div className="mt-14 rounded-2xl bg-stone-900 p-8 text-center">
            <p className="font-display text-2xl font-light text-white mb-4">
              Ready to unplug in Japan?
            </p>
            <p className="text-stone-300 mb-6">
              We handle everything from booking to directions. You just show up.
            </p>
            <Link href="/contact" className="btn-primary">
              Request your dates
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-stone-50 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-light text-stone-800 mb-8">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Digital Detox Japan', href: '/digital-detox-japan', desc: 'The full guide to digital detox in Japan.' },
              { title: 'Forest Therapy Japan', href: '/forest-therapy-japan', desc: 'Shinrin-yoku — forest bathing as medicine.' },
              { title: 'Japan Wellness Retreat', href: '/japan-wellness-nature-retreat', desc: 'Onsen, nature, and deep rest.' },
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
