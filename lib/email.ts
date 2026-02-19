import { Resend } from 'resend'

export interface ContactFormData {
  desiredCheckInDate: string
  guests: string
  name: string
  email: string
  whatsapp?: string
  country?: string
  message?: string
}

export async function sendContactEmail(data: ContactFormData) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const ownerEmail = process.env.SITE_OWNER_EMAIL
  const fromAddress = process.env.EMAIL_FROM ?? 'Digital Detox Japan <noreply@digitaldetoxjapan.com>'

  if (!ownerEmail) throw new Error('SITE_OWNER_EMAIL is not set')

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
    <tr><td>Name</td><td>${data.name}</td></tr>
    <tr><td>Email</td><td>${data.email}</td></tr>
    ${data.whatsapp ? `<tr><td>WhatsApp</td><td>${data.whatsapp}</td></tr>` : ''}
    ${data.country ? `<tr><td>Country</td><td>${data.country}</td></tr>` : ''}
    <tr><td>Check-in Date</td><td>${data.desiredCheckInDate}</td></tr>
    <tr><td>Guests</td><td>${data.guests}</td></tr>
  </table>

  ${
    data.message
      ? `<p style="color:#736d62;font-size:13px;margin-bottom:8px;">Message</p>
         <div class="msg">${data.message.replace(/\n/g, '<br>')}</div>`
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
    subject: `New Reservation Request — ${data.name} (${data.desiredCheckInDate}, ${data.guests} guest${parseInt(data.guests) > 1 ? 's' : ''})`,
    html,
  })

  if (error) throw new Error(error.message)
}
