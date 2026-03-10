import { Resend } from 'resend'

export interface ContactFormData {
  desiredCheckInDate: string
  desiredCheckOutDate: string
  guests: string
  name: string
  email: string
  whatsapp?: string
  country?: string
  message?: string
  aiSummary?: string
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function sanitizeHeaderValue(input: string) {
  return input.replace(/[\r\n]+/g, ' ').trim()
}

export async function sendContactEmail(data: ContactFormData) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const ownerEmail = process.env.SITE_OWNER_EMAIL
  const fromAddress = process.env.EMAIL_FROM ?? 'Digital Detox Japan <noreply@digitaldetoxjapan.com>'

  if (!ownerEmail) throw new Error('SITE_OWNER_EMAIL is not set')

  const safeName = escapeHtml(data.name)
  const safeEmail = escapeHtml(data.email)
  const safeWhatsApp = data.whatsapp ? escapeHtml(data.whatsapp) : null
  const safeCountry = data.country ? escapeHtml(data.country) : null
  const safeCheckInDate = escapeHtml(data.desiredCheckInDate)
  const safeCheckOutDate = escapeHtml(data.desiredCheckOutDate)
  const safeGuests = escapeHtml(data.guests)
  const safeMessage = data.message ? escapeHtml(data.message).replace(/\n/g, '<br>') : null
  const safeAiSummary = data.aiSummary ? escapeHtml(data.aiSummary).replace(/\n/g, '<br>') : null
  const subjectName = sanitizeHeaderValue(data.name)
  const subjectCheckInDate = sanitizeHeaderValue(data.desiredCheckInDate)
  const subjectCheckOutDate = sanitizeHeaderValue(data.desiredCheckOutDate)
  const subjectGuests = sanitizeHeaderValue(data.guests)

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { font-family: Georgia, serif; color: #1e1c18; background: #faf9f7; margin: 0; padding: 0; }
  .wrap { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
  h1 { font-size: 24px; font-weight: 300; color: #2d5238; margin-bottom: 24px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  td { padding: 10px 0; border-bottom: 1px solid #e8e4dc; font-size: 15px; vertical-align: top; }
  td:first-child { color: #736d62; width: 40%; font-size: 13px; letter-spacing: 0.04em; }
  .msg { background: #f3f1ed; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.7; }
  .footer { margin-top: 32px; font-size: 12px; color: #948f83; }
</style></head>
<body>
<div class="wrap">
  <h1>New Reservation Request</h1>
  <p style="color:#736d62;margin-bottom:24px;">A guest has submitted a reservation request via Digital Detox Japan.</p>

  <table>
    <tr><td>Name</td><td>${safeName}</td></tr>
    <tr><td>Email</td><td>${safeEmail}</td></tr>
    ${safeWhatsApp ? `<tr><td>WhatsApp</td><td>${safeWhatsApp}</td></tr>` : ''}
    ${safeCountry ? `<tr><td>Country</td><td>${safeCountry}</td></tr>` : ''}
    <tr><td>Check-in Date</td><td>${safeCheckInDate}</td></tr>
    <tr><td>Check-out Date</td><td>${safeCheckOutDate}</td></tr>
    <tr><td>Guests</td><td>${safeGuests}</td></tr>
  </table>

  ${
    safeMessage
      ? `<p style="color:#736d62;font-size:13px;margin-bottom:8px;">Message</p>
         <div class="msg">${safeMessage}</div>`
      : ''
  }

  ${
    safeAiSummary
      ? `<p style="color:#736d62;font-size:13px;margin:20px 0 8px;">AI Summary (GPT-5.4)</p>
         <div class="msg">${safeAiSummary}</div>`
      : ''
  }

  <div class="footer">
    <p>Reply within 48 hours (JST) to confirm availability.</p>
    <p>&copy; ${new Date().getFullYear()} Digital Detox Japan</p>
  </div>
</div>
</body>
</html>
`

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: ownerEmail,
    replyTo: data.email,
    subject: `New Reservation Request — ${subjectName} (${subjectCheckInDate} → ${subjectCheckOutDate}, ${subjectGuests} guest${parseInt(data.guests, 10) > 1 ? 's' : ''})`,
    html,
  })

  if (error) throw new Error(error.message)
}
