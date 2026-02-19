import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, type ContactFormData } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<ContactFormData>

    // ── Validate required fields ──────────────────────────────────────────────
    const required: (keyof ContactFormData)[] = ['desiredCheckInDate', 'guests', 'name', 'email']
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 },
        )
      }
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email ?? '')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Guests must be 1–4
    const guests = parseInt(String(body.guests), 10)
    if (isNaN(guests) || guests < 1 || guests > 4) {
      return NextResponse.json({ error: 'Guests must be between 1 and 4' }, { status: 400 })
    }

    // ── Send email ────────────────────────────────────────────────────────────
    await sendContactEmail({
      desiredCheckInDate: body.desiredCheckInDate!,
      guests: String(guests),
      name: body.name!.trim(),
      email: body.email!.trim(),
      whatsapp: body.whatsapp?.trim() || undefined,
      country: body.country?.trim() || undefined,
      message: body.message?.trim() || undefined,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contact/route] Error:', err)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or email us directly.' },
      { status: 500 },
    )
  }
}
