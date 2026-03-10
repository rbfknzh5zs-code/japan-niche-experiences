import OpenAI from 'openai'

interface ReservationSummaryInput {
  desiredCheckInDate: string
  guests: string
  name: string
  email: string
  whatsapp?: string
  country?: string
  message?: string
}

const DEFAULT_OPENAI_MODEL = 'gpt-5.4'

let client: OpenAI | null = null

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return null

  if (!client) {
    client = new OpenAI({ apiKey })
  }
  return client
}

function buildReservationPrompt(data: ReservationSummaryInput) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp ?? 'N/A'}`,
    `Country: ${data.country ?? 'N/A'}`,
    `Check-in Date: ${data.desiredCheckInDate}`,
    `Guests: ${data.guests}`,
    `Message: ${data.message ?? 'N/A'}`,
  ].join('\n')
}

export async function generateReservationSummary(data: ReservationSummaryInput): Promise<string | null> {
  const openai = getOpenAIClient()
  if (!openai) return null

  const model = process.env.OPENAI_MODEL?.trim() || DEFAULT_OPENAI_MODEL

  try {
    const response = await openai.responses.create({
      model,
      input: [
        {
          role: 'system',
          content:
            'You summarize customer reservation inquiries for internal operations. Return exactly 3 short bullet points in English, each prefixed with "- ". Keep total under 80 words.',
        },
        {
          role: 'user',
          content: buildReservationPrompt(data),
        },
      ],
    })

    const summary = response.output_text.trim()
    return summary.length > 0 ? summary : null
  } catch (err) {
    console.error('[ai] Failed to generate reservation summary:', err)
    return null
  }
}
