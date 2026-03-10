import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, type ContactFormData } from '@/lib/email'
import { getSupabaseClient } from '@/lib/db'
import { generateReservationSummary } from '@/lib/ai'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<ContactFormData>

    // ── Validate required fields ──────────────────────────────────────────────
    const required: (keyof ContactFormData)[] = ['desiredCheckInDate', 'desiredCheckOutDate', 'guests', 'name', 'email']
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

    // Guests must be 1–8
    const guests = parseInt(String(body.guests), 10)
    if (isNaN(guests) || guests < 1 || guests > 8) {
      return NextResponse.json({ error: 'Guests must be between 1 and 8' }, { status: 400 })
    }

    // Check-out must be after check-in
    const checkInDate = new Date(String(body.desiredCheckInDate))
    const checkOutDate = new Date(String(body.desiredCheckOutDate))
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json({ error: 'Invalid check-in or check-out date' }, { status: 400 })
    }
    if (checkOutDate <= checkInDate) {
      return NextResponse.json({ error: 'Check-out date must be after check-in date' }, { status: 400 })
    }

    const normalizedMessage = body.message?.trim() || null
    const messageForDb = [normalizedMessage, `Check-out date: ${String(body.desiredCheckOutDate).trim()}`]
      .filter(Boolean)
      .join('\n')

    // ── Save to database ──────────────────────────────────────────────────────
    try {
      const db = getSupabaseClient()
      const { error: dbError } = await db
        .from('reservation_requests')
        .insert({
          desired_check_in_date: body.desiredCheckInDate!,
          guests,
          name: body.name!.trim(),
          email: body.email!.trim(),
          whatsapp: body.whatsapp?.trim() || null,
          country: body.country?.trim() || null,
          message: messageForDb || null,
        })
      if (dbError) {
        console.error('[contact/route] DB insert failed:', dbError.message)
      }
    } catch (dbErr) {
      console.error('[contact/route] DB exception:', dbErr)
      // DB failure does not block email sending
    }

    // ── Send email ────────────────────────────────────────────────────────────
    const aiSummary = await generateReservationSummary({
      desiredCheckInDate: body.desiredCheckInDate!,
      desiredCheckOutDate: body.desiredCheckOutDate!,
      guests: String(guests),
      name: body.name!.trim(),
      email: body.email!.trim(),
      whatsapp: body.whatsapp?.trim() || undefined,
      country: body.country?.trim() || undefined,
      message: body.message?.trim() || undefined,
    })

    await sendContactEmail({
      desiredCheckInDate: body.desiredCheckInDate!,
      desiredCheckOutDate: body.desiredCheckOutDate!,
      guests: String(guests),
      name: body.name!.trim(),
      email: body.email!.trim(),
      whatsapp: body.whatsapp?.trim() || undefined,
      country: body.country?.trim() || undefined,
      message: body.message?.trim() || undefined,
      aiSummary: aiSummary ?? undefined,
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
