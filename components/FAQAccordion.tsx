'use client'

import { useState } from 'react'

export interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-stone-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-light text-stone-800 pr-4">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 text-forest-600 text-2xl font-light leading-none transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="pb-6 pr-8">
                <p className="text-stone-600 leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
