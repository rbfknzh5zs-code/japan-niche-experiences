'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const NAV = [
  { label: 'Packages', href: '/packages/digital-detox-starter' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="font-display text-2xl text-forest-600 group-hover:text-forest-700 transition-colors"
            style={{ fontFamily: 'serif' }}
          >
            静
          </span>
          <div>
            <p className="text-sm font-semibold tracking-widest text-stone-800 uppercase leading-none">
              Digital Detox
            </p>
            <p className="text-xs tracking-[0.3em] text-stone-500 uppercase leading-tight">
              Japan
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-stone-600 hover:text-forest-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5">
            Request Dates
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span
              className={`block h-px w-6 bg-stone-700 transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-stone-700 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-stone-700 transition-transform duration-200 ${open ? '-translate-y-2.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 pb-6 pt-4 space-y-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-stone-700 hover:text-forest-600 transition-colors py-1"
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
