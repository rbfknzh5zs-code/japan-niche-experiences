import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Forest Therapy Japan — Shinrin-Yoku & Forest Bathing Experiences',
  description:
    "Experience forest therapy japan through the ancient practice of shinrin-yoku. Guided and self-guided forest bathing in Japan's wilderness — all in English. Scientifically proven to reduce stress.",
  alternates: { canonical: '/forest-therapy-japan' },
  openGraph: {
    title: 'Forest Therapy Japan — Shinrin-Yoku & Forest Bathing',
    description: 'Japan pioneered forest therapy. We make it accessible to English-speaking travelers — no Japanese, no stress, just ancient forest air.',
  },
}

export default function ForestTherapyJapanPage() {
  return (
    <>
      <Hero
        tag="Forest Therapy Japan"
        title="Forest Therapy Japan —"
        titleEm="The Original Healing Practice"
        description="Japan invented forest therapy. Its ancient cedar forests, with their phytoncide-rich air and profound stillness, are among the most powerful places on earth to reset a tired mind."
        cta={{ label: 'Request your dates', href: '/contact' }}
        ctaSecondary={{ label: 'See our packages', href: '/packages/digital-detox-starter' }}
        kanji="森"
      />

      <article className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6">
            What Is Forest Therapy?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 text-lg">
            <strong className="text-stone-800">Forest therapy</strong>, known in Japanese as <em>shinrin-yoku</em> (森林浴) or "forest bathing," is the practice of spending quiet, unhurried time in forested environments with the intention of absorbing — not just seeing — the forest. It was formalized in Japan in 1982 by the Ministry of Agriculture, Forestry and Fisheries as a public health initiative.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Unlike hiking, forest therapy is not about distance or destination. It's about presence. You walk slowly. You pause. You sit. You listen to the layer of sounds — wind, birds, insects, water. You breathe the phytoncides that trees release as their airborne immune secretions. And your nervous system, finally with nothing urgent to respond to, begins to downshift.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            The Science Behind Forest Therapy in Japan
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Decades of Japanese research — led by Dr. Qing Li of Nippon Medical School, author of the landmark book <em>Forest Bathing</em> — has documented measurable physiological effects:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            {[
              { metric: '12–13%', label: 'Reduction in cortisol', sub: 'after 2 hours in a forest environment' },
              { metric: '7%', label: 'Decrease in blood pressure', sub: 'compared to urban walking' },
              { metric: '50%+', label: 'Increase in NK cells', sub: 'natural killer immune cells, after 3 days' },
              { metric: '2+ days', label: 'Effect duration', sub: 'measurable benefits lasting up to 30 days' },
            ].map((item) => (
              <div key={item.metric} className="rounded-xl bg-forest-50 border border-forest-100 p-6">
                <p className="font-display text-3xl text-forest-700 mb-1">{item.metric}</p>
                <p className="font-medium text-stone-800 mb-1">{item.label}</p>
                <p className="text-sm text-stone-500">{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-600 leading-relaxed mb-6">
            These effects are partly attributed to <em>phytoncides</em> — the organic compounds released by trees, particularly Japanese cedar (hinoki) and cryptomeria. When inhaled, they stimulate the production of anti-cancer proteins in the body's immune cells.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            Forest Therapy Japan: Where and How
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Japan designates official "Forest Therapy Roads" — trails certified to have measurable therapeutic effects. There are over 60 certified sites across the country, primarily in Nagano, Okutama (Tokyo region), Nasu, and Yakushima.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Our Digital Detox Starter package is based in the Yamanashi / Fujisan region, where ancient forest meets the dramatic Mt. Fuji landscape. The area features well-maintained trails, nearby onsen, and spectacular stargazing — making it ideal for a complete digital detox forest therapy experience.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            While our Starter package is self-guided forest therapy — walk at your own pace, sit when you want, breathe deeply — the English PDF guide includes a shinrin-yoku primer with specific practices to maximize your time in the forest.
          </p>

          <h2 className="font-display text-3xl font-light text-stone-900 mb-6 mt-14">
            Forest Therapy + Digital Detox: The Perfect Combination
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            The intersection of <strong className="text-stone-800">forest therapy</strong> and <strong className="text-stone-800">digital detox</strong> is where the real transformation happens. Forest therapy requires presence — something that's nearly impossible with a buzzing device in your pocket. Digital detox removes the obstacle; the forest does the healing.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Many guests report that their first hour in the forest, freed from the habit of checking their phones, is uncomfortable — like the digital equivalent of withdrawal. By the second hour, most say their breathing has slowed, their thoughts have quieted, and they're noticing things they would have scrolled past: a spider web catching light, the particular green of moss after rain, the way cedar roots grip the earth like patient hands.
          </p>

          <div className="mt-14 rounded-2xl bg-forest-50 border border-forest-200 p-8 text-center">
            <p className="font-display text-2xl font-light text-forest-800 mb-4">
              Experience forest therapy in Japan
            </p>
            <p className="text-stone-600 mb-6 max-w-lg mx-auto">
              Our Digital Detox Starter puts you in a Japanese forest overnight — with BBQ, onsen access, and an English guide to shinrin-yoku.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Request your dates</Link>
              <Link href="/packages/digital-detox-starter" className="btn-ghost">See package details</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-stone-50 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-light text-stone-800 mb-8">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Digital Detox Japan', href: '/digital-detox-japan', desc: 'The full case for unplugging in Japan.' },
              { title: 'Unplug in Japan', href: '/unplug-in-japan', desc: 'How we make disconnecting easy.' },
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
