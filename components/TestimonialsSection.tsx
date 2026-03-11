const TESTIMONIALS = [
  {
    quote:
      "I was skeptical I could actually unplug — I check my phone constantly. By the second hour in the forest I genuinely forgot it existed. The private onsen at midnight was something I'll remember for years.",
    name: 'Sarah M.',
    detail: 'USA · Nasu Highland Glamping',
    stars: 5,
  },
  {
    quote:
      "The English guide pack made everything effortless. Every question I had was already answered. I arrived at the dome and there was nothing to figure out — just a campfire, a sauna, and the quietest night I've had in a decade.",
    name: 'James T.',
    detail: 'UK · Nasu Highland Glamping',
    stars: 5,
  },
  {
    quote:
      "Solo travel in Japan felt intimidating before this. The step-by-step directions were perfect — I got there without a single stressful moment. And the barrel sauna at sunrise after a cold plunge? Life-changing.",
    name: 'Lena K.',
    detail: 'Germany · Nasu Highland Glamping',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="bg-zinc-900 py-20 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-3">Guest Reviews</p>
            <h2 className="font-display text-3xl font-light text-white">What guests say</h2>
          </div>
          <div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-3">
            <div className="text-center">
              <p className="text-2xl font-semibold text-white leading-none">4.9</p>
              <p className="text-xs text-zinc-500 mt-1">out of 5</p>
            </div>
            <div className="w-px h-10 bg-zinc-700" />
            <div>
              <StarRating count={5} />
              <p className="text-xs text-zinc-500 mt-1">32 guests</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 flex flex-col gap-6"
            >
              <StarRating count={t.stars} />
              <p className="text-zinc-300 leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-zinc-800 pt-5">
                <p className="font-semibold text-zinc-100 text-sm">{t.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
