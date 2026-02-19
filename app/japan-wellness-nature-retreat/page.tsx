import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Japan Wellness Nature Retreat — Onsen, Forest & Deep Rest',
  description:
    'A japan wellness nature retreat combining onsen, forest bathing, and digital detox glamping. Designed for English-speaking travelers seeking genuine rest in Japan\'s natural wilderness.',
  alternates: { canonical: '/japan-wellness-nature-retreat' },
  openGraph: {
    title: 'Japan Wellness Nature Retreat — Onsen, Forest & Deep Rest',
    description: 'Combine onsen, forest therapy, and glamping in one curated Japan wellness retreat — all in English.',
  },
}

export default function JapanWellnessNatureRetreatPage() {
  return (
    <>
      <Hero
        tag="Japan Wellness Nature Retreat"
        title="Japan Wellness Nature Retreat"
        titleEm="— Onsen, Forest & Deep Rest"
        description="Three of Japan's oldest wellness traditions — forest bathing, hot spring bathing, and simple living in nature — combined into one effortless experience for English-speaking visitors."
        cta={{ label: 'Request your dates', href: '/contact' }}
        ctaSecondary={{ label: 'See the package', href: '/packages/digital-detox-starter' }}
        kanji="癒"
      />

      <article className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6">
            Japan as a Wellness Destination
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 text-lg">
            Japan is quietly one of the world's most powerful <strong className="text-stone-800">wellness destinations</strong> — not because of luxury spas or curated retreats, but because the country itself has an ancient infrastructure of practices designed to restore the human body and mind.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            <em>Onsen</em> (hot spring bathing) has been part of Japanese culture for over a thousand years. <em>Shinrin-yoku</em> (forest bathing) was formalized as a health practice in the 1980s and is now prescribed by Japanese doctors. The minimalist aesthetic of Japanese design — spare, quiet, uncluttered — creates physical environments that naturally reduce anxiety.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Add to this the absence of screens — either by choice or by limited cell signal — and you have something remarkably close to what expensive wellness retreats in the West try to engineer. Japan offers it naturally.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            The Three Pillars of a Japan Wellness Nature Retreat
          </h2>

          {[
            {
              num: '01',
              title: 'Onsen — The Mineral Reset',
              body: `Japan has over 27,000 onsen facilities, from grand hotel baths to hidden roadside pools. Soaking in mineral-rich hot spring water — particularly the sulfurous springs of mountainous regions — measurably improves circulation, reduces muscle tension, and encourages deep sleep. Many traditional onsen explicitly prohibit mobile phones, making them a naturally enforced digital detox space.

Our packages include an onsen map for the local area, pointing you toward the most accessible and scenic options nearby your glamping site.`,
            },
            {
              num: '02',
              title: 'Forest — The Breathing Space',
              body: `Japan's cedar and cypress forests emit phytoncides — airborne compounds that, when inhaled, stimulate the immune system and reduce the stress hormone cortisol. Spending even 2 hours walking slowly through a Japanese forest has been shown to significantly lower blood pressure and improve mood for days afterward.

You don't need a guided meditation session or a retreat program. You need a forest, an unhurried afternoon, and the willingness to walk without looking at your phone.`,
            },
            {
              num: '03',
              title: 'Glamping — Rest Without Compromise',
              body: `Traditional camping requires skills, gear, and energy. Glamping provides the nature connection — fresh air, dark skies, birdsong at dawn — without the friction. Our partners offer real beds, proper facilities, and an atmosphere of calm that's impossible to achieve in a city hotel.

The BBQ dinner, the unhurried morning, the sound of wind through trees as you wake up — this is what genuine rest feels like.`,
            },
          ].map((section) => (
            <div key={section.num} className="mb-12">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-4xl text-forest-200 leading-none">{section.num}</span>
                <h3 className="font-display text-2xl font-light text-stone-800">{section.title}</h3>
              </div>
              {section.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-stone-600 leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          ))}

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-6">
            Planning a Japan Wellness Nature Retreat as an English Speaker
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            The main barrier for English-speaking visitors planning a <strong className="text-stone-800">japan wellness nature retreat</strong> is language. Most small-town onsen and rural glamping sites operate primarily in Japanese. Reviews are in Japanese. Booking systems are in Japanese. Staff may speak limited English.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            This is exactly what we solve. We research, book, and coordinate every element of your stay in Japanese, then give you all the information you need in clear English: a PDF guide, directions video, onsen map, and pre-arrival checklist.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            You don't need to navigate any of it. You just need to show up.
          </p>

          <div className="mt-10 rounded-2xl bg-stone-900 p-8 text-center">
            <p className="font-display text-2xl font-light text-white mb-4">
              Your Japan wellness retreat starts here
            </p>
            <p className="text-stone-300 mb-6">
              Tell us your dates. We'll handle the rest.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Request your dates</Link>
              <Link href="/packages/digital-detox-starter" className="inline-flex items-center justify-center rounded-lg border border-stone-600 px-6 py-3 text-sm font-medium text-stone-300 transition-all hover:border-stone-400 hover:text-white">
                See the package
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-stone-50 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-light text-stone-800 mb-8">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Digital Detox Japan', href: '/digital-detox-japan', desc: 'Why Japan is perfect for digital detox.' },
              { title: 'Forest Therapy Japan', href: '/forest-therapy-japan', desc: 'The science and practice of shinrin-yoku.' },
              { title: 'Unplug in Japan', href: '/unplug-in-japan', desc: 'How we make disconnecting easy.' },
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
