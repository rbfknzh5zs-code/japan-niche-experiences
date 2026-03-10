'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { label: 'Packages', href: '/packages/digital-detox-starter' },
  { label: 'Blog', href: '/blog' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const introMode = pathname === '/'
  const copyRevealClass = introMode ? 'header-copy-reveal' : ''

  return (
    <header className="relative z-50 border-b border-zinc-800/50 bg-zinc-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className={`font-display text-2xl text-forest-400 group-hover:text-forest-300 transition-colors ${copyRevealClass}`}
            style={{ fontFamily: 'serif' }}
          >
            禅
          </span>
          <div className={copyRevealClass}>
            <p className="text-sm font-semibold tracking-widest text-zinc-100 uppercase leading-none">
              Digital Detox
            </p>
            <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase leading-tight">
              Japan
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-8 ${copyRevealClass}`}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-zinc-400 hover:text-forest-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className={`hidden md:inline-flex btn-primary text-xs px-5 py-2.5 ${copyRevealClass}`}>
            Request Dates
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span
              className={`block h-px w-6 bg-zinc-300 transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-zinc-300 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-zinc-300 transition-transform duration-200 ${open ? '-translate-y-2.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden bg-zinc-950 border-t border-zinc-800 px-6 pb-6 pt-4 space-y-4 ${copyRevealClass}`}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-zinc-300 hover:text-forest-400 transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full text-center text-xs mt-2"
          >
            Request Dates
          </Link>
        </div>
      )}
    </header>
  )
}
