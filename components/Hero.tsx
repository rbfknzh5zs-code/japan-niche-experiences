import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  tag?: string
  title: string
  titleEm?: string        // italic/em part of title
  subtitle?: string
  description: React.ReactNode
  cta?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  kanji?: string          // large bg kanji character
  center?: boolean
  bgImage?: string        // background photo path e.g. "/images/hero-forest.jpg"
  introImage?: string     // intro photo shown first, then crossfades to bgImage
}

export default function Hero({
  tag,
  title,
  titleEm,
  subtitle,
  description,
  cta,
  ctaSecondary,
  kanji = '禅',
  center = true,
  bgImage,
  introImage,
}: HeroProps) {
  const useIntroTransition = Boolean(introImage && bgImage)
  const introOverlayClass = useIntroTransition ? 'hero-overlay-reveal' : ''
  const introToneClass = useIntroTransition ? 'hero-lime-grade' : ''

  return (
    <section className="relative overflow-hidden bg-stone-900 pt-20 pb-24">
      {/* Background photos (intro -> current visual) */}
      {introImage && bgImage ? (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            className="hero-main-image object-cover object-center"
            sizes="100vw"
          />
          <Image
            src={introImage}
            alt=""
            fill
            priority
            className="hero-intro-image object-cover object-center"
            sizes="100vw"
          />
        </>
      ) : (
        bgImage && (
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
        )
      )}
      {/* Subtle gradient overlays */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-forest-900/40 via-stone-900/50 to-earth-900/20 pointer-events-none ${introOverlayClass}`}
      />
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(134,68,16,0.10)_0%,transparent_60%)] pointer-events-none ${introOverlayClass}`}
      />
      <div className={`absolute inset-0 pointer-events-none ${introToneClass}`} />

      {/* Large kanji background */}
      <div
        aria-hidden
        className={`absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none ${
          useIntroTransition ? 'hero-copy-reveal' : ''
        }`}
      >
        <span
          className="font-display text-[28rem] leading-none text-white/[0.025] translate-x-24 -translate-y-8"
          style={{ fontFamily: 'serif' }}
        >
          {kanji}
        </span>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-5xl px-6 ${
          center ? 'text-center' : ''
        } ${useIntroTransition ? 'hero-copy-reveal' : ''}`}
      >
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
