'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      desiredCheckInDate: (form.elements.namedItem('desiredCheckInDate') as HTMLInputElement).value,
      guests:             (form.elements.namedItem('guests') as HTMLSelectElement).value,
      name:               (form.elements.namedItem('name') as HTMLInputElement).value,
      email:              (form.elements.namedItem('email') as HTMLInputElement).value,
      whatsapp:           (form.elements.namedItem('whatsapp') as HTMLInputElement).value,
      country:            (form.elements.namedItem('country') as HTMLInputElement).value,
      message:            (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Unexpected error.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-forest-200 bg-forest-50 px-8 py-12 text-center">
        <div className="mb-4 text-4xl">🌿</div>
        <h3 className="font-display text-2xl font-light text-forest-800 mb-3">
          Request Received
        </h3>
        <p className="text-stone-600 leading-relaxed">
          Thank you, we&apos;ll reply within{' '}
          <strong className="text-stone-800">48 hours (JST)</strong> to confirm
          availability and next steps.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm text-forest-600 underline underline-offset-2 hover:text-forest-700"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Row 1: date + guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="desiredCheckInDate" className="block text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Desired Check-in Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="desiredCheckInDate"
            name="desiredCheckInDate"
            required
            className="input-base"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Guests <span className="text-red-500">*</span>
          </label>
          <select id="guests" name="guests" required className="input-base">
            <option value="">Select…</option>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </div>
      </div>

      {/* Row 2: name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="input-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@email.com"
            className="input-base"
          />
        </div>
      </div>

      {/* Row 3: WhatsApp + Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="whatsapp" className="block text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            WhatsApp <span className="text-stone-400 normal-case font-normal tracking-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            placeholder="+1 555 000 0000"
            className="input-base"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
            Country <span className="text-stone-400 normal-case font-normal tracking-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="United States"
            className="input-base"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold tracking-widest text-stone-500 uppercase mb-2">
          Message <span className="text-stone-400 normal-case font-normal tracking-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Questions, dietary needs, anything you'd like us to know…"
          className="input-base resize-none"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-stone-300 text-forest-600 focus:ring-forest-500"
        />
        <label htmlFor="consent" className="text-sm text-stone-600 leading-relaxed">
          I agree to the{' '}
          <Link href="/legal/terms" target="_blank" className="text-forest-600 underline underline-offset-2">
            Terms &amp; Conditions
          </Link>
          ,{' '}
          <Link href="/legal/privacy" target="_blank" className="text-forest-600 underline underline-offset-2">
            Privacy Policy
          </Link>
          , and{' '}
          <Link href="/legal/disclaimer" target="_blank" className="text-forest-600 underline underline-offset-2">
            Disclaimer
          </Link>
          . <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Reservation Request'}
      </button>

      <p className="text-center text-xs text-stone-400">
        We reply within 48 hours (JST). No payment required at this stage.
      </p>
    </form>
  )
}
