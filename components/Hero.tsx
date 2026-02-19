import Link from 'next/link'

interface HeroProps {
  tag?: string
  title: string
  titleEm?: string        // italic/em part of title
  subtitle?: string
  description: string
  cta?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  kanji?: string          // large bg kanji character
  center?: boolean
}

export default function Hero({
  tag,
  title,
  titleEm,
  subtitle,
  description,
  cta,
  ctaSecondary,
  kanji = '静',
  center = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-900 pt-32 pb-24">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/40 via-stone-900 to-earth-900/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(61,107,74,0.15)_0%,transparent_60%)] pointer-events-none" />

      {/* Large kanji background */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
      >
        <span
          className="font-display text-[28rem] leading-none text-white/[0.025] translate-x-24 -translate-y-8"
          style={{ fontFamily: 'serif' }}
        >
          {kanji}
        </span>
      </div>

      {/* Content */}
      <div className={`relative z-10 mx-auto max-w-5xl px-6 ${center ? 'text-center' : ''}`}>
        {tag && (
          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-forest-400 uppercase">
            {tag}
          </p>
        )}

        <h1 className="font-display text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
          {title}
          {titleEm && (
            <>
              {' '}
              <em className="italic text-forest-300">{titleEm}</em>
            </>
          )}
        </h1>

        {subtitle && (
          <p className="mt-3 font-display text-lg italic text-stone-400">{subtitle}</p>
        )}

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-300 font-light">
          {description}
        </p>

        {(cta || ctaSecondary) && (
          <div className={`mt-10 flex flex-wrap gap-4 ${center ? 'justify-center' : ''}`}>
            {cta && (
              <Link href={cta.href} className="btn-primary">
                {cta.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-lg border border-stone-600 px-6 py-3 text-sm font-medium text-stone-300 transition-all hover:border-stone-400 hover:text-white"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
