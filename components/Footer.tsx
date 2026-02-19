import Link from 'next/link'

const PACKAGES = [
  { label: 'Digital Detox Starter', href: '/packages/digital-detox-starter' },
]

const PAGES = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const LEGAL = [
  { label: 'Terms & Conditions', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Cancellation & Refunds', href: '/legal/cancellation-refunds' },
  { label: 'Disclaimer', href: '/legal/disclaimer' },
]

const LANDING = [
  { label: 'Digital Detox Japan', href: '/digital-detox-japan' },
  { label: 'Unplug in Japan', href: '/unplug-in-japan' },
  { label: 'Forest Therapy Japan', href: '/forest-therapy-japan' },
  { label: 'Japan Wellness Retreat', href: '/japan-wellness-nature-retreat' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-display text-2xl text-forest-400 group-hover:text-forest-300 transition-colors">
                静
              </span>
              <div>
                <p className="text-sm font-semibold tracking-widest text-white uppercase leading-none">
                  Digital Detox
                </p>
                <p className="text-xs tracking-[0.3em] text-stone-500 uppercase leading-tight">
                  Japan
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-xs">
              Curated digital detox experiences in Japan's natural wilderness. Glamping, onsen, and forest therapy — all prepared in English.
            </p>
            <p className="mt-4 text-xs text-stone-500 italic font-display">
              "Encouraged, not enforced."
            </p>
          </div>

          {/* Packages + Pages */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">Packages</h4>
            <ul className="space-y-2">
              {PACKAGES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 hover:text-forest-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase mb-4 mt-8">Explore</h4>
            <ul className="space-y-2">
              {PAGES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 hover:text-forest-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Landing pages */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">Topics</h4>
            <ul className="space-y-2">
              {LANDING.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 hover:text-forest-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">Legal</h4>
            <ul className="space-y-2">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 hover:text-forest-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Digital Detox Japan. All rights reserved.
          </p>
          <p className="text-xs text-stone-600">
            Operated in Japan &middot; English support available
          </p>
        </div>
      </div>
    </footer>
  )
}
