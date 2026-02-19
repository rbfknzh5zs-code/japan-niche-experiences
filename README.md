# Digital Detox Japan

Marketing website for **Digital Detox Japan** — curated digital detox glamping and nature experiences in Japan for English-speaking travelers.

**Concept:** Digital fatigue × Japanese quiet
**Principle:** Encouraged, not enforced.
**Tech:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Resend

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# → Edit .env.local with your values (see section below)

# 3. Run the development server
npm run dev
# → Open http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file (never committed to git) with the following:

```env
# ── Resend (email sending) ─────────────────────────────────────────────────
# Get your API key at https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# The email address that receives reservation request notifications
SITE_OWNER_EMAIL=you@yourdomain.com

# The "from" address (must be from a domain verified in Resend)
EMAIL_FROM=Digital Detox Japan <noreply@yourdomain.com>

# ── Site URL ───────────────────────────────────────────────────────────────
# Used for canonical URLs, OpenGraph, and sitemap.xml
NEXT_PUBLIC_SITE_URL=https://digitaldetoxjapan.com
```

### Setting up Resend

1. Create an account at [resend.com](https://resend.com)
2. Add and verify your sending domain (e.g. `yourdomain.com`)
3. Create an API key and add it to `RESEND_API_KEY`
4. Set `EMAIL_FROM` to a `noreply@yourdomain.com` address on your verified domain

> **Note:** For local testing, Resend provides a sandbox that logs emails without actually sending them. You can also temporarily send to your own verified address.

---

## Project Structure

```
app/
├── layout.tsx                    ← Root layout with Header, Footer, fonts, metadata
├── page.tsx                      ← Home page (/)
├── globals.css                   ← Tailwind base + custom component classes
├── sitemap.ts                    ← Auto-generated sitemap.xml
├── robots.ts                     ← Auto-generated robots.txt
├── digital-detox-japan/          ← /digital-detox-japan (KW landing page)
├── unplug-in-japan/              ← /unplug-in-japan (KW landing page)
├── forest-therapy-japan/         ← /forest-therapy-japan (KW landing page)
├── japan-wellness-nature-retreat/ ← /japan-wellness-nature-retreat (KW landing page)
├── packages/
│   └── digital-detox-starter/   ← /packages/digital-detox-starter
├── how-it-works/                 ← /how-it-works
├── faq/                          ← /faq (with JSON-LD FAQPage schema)
├── contact/                      ← /contact (reservation request form)
├── legal/
│   ├── terms/                    ← /legal/terms
│   ├── privacy/                  ← /legal/privacy
│   ├── cancellation-refunds/     ← /legal/cancellation-refunds
│   └── disclaimer/               ← /legal/disclaimer
└── api/
    └── contact/route.ts          ← POST /api/contact (email sending endpoint)

components/
├── Header.tsx       ← Fixed navigation with scroll effect
├── Footer.tsx       ← Full footer with all links
├── Hero.tsx         ← Reusable dark hero section with kanji bg
├── FAQAccordion.tsx ← Client-side accordion component
├── ContactForm.tsx  ← Client-side form with validation + fetch
└── JsonLd.tsx       ← JSON-LD structured data helper

lib/
└── email.ts         ← Resend email sending logic

public/
└── images/
    └── motosuko-fuji.png
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — H1, problem/solution, featured package, 4-step CTA |
| `/digital-detox-japan` | SEO landing page — main target keyword |
| `/unplug-in-japan` | SEO landing page |
| `/forest-therapy-japan` | SEO landing page — shinrin-yoku focus |
| `/japan-wellness-nature-retreat` | SEO landing page — onsen + wellness |
| `/packages/digital-detox-starter` | Package detail page with Product schema |
| `/how-it-works` | 4-step process explanation |
| `/faq` | FAQ accordion with FAQPage JSON-LD |
| `/contact` | Reservation request form |
| `/legal/terms` | Terms & Conditions |
| `/legal/privacy` | Privacy Policy |
| `/legal/cancellation-refunds` | Cancellation & Refunds |
| `/legal/disclaimer` | Disclaimer |

---

## SEO Features

- Per-page `title`, `description`, `canonical` via Next.js `metadata`
- OpenGraph + Twitter Card tags on all pages
- `sitemap.xml` auto-generated at `/sitemap.xml`
- `robots.txt` auto-generated at `/robots.txt`
- **JSON-LD schemas:**
  - `Organization` + `WebSite` (root layout)
  - `Product` (Digital Detox Starter, home + package page)
  - `FAQPage` (FAQ page)
- Target keywords naturally placed in H1/H2 and body copy:
  - `digital detox japan`
  - `unplug in japan`
  - `japan wellness nature retreat`
  - `forest therapy japan`

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Import into [vercel.com](https://vercel.com)
3. Add the environment variables in the Vercel dashboard:
   - `RESEND_API_KEY`
   - `SITE_OWNER_EMAIL`
   - `EMAIL_FROM`
   - `NEXT_PUBLIC_SITE_URL` (set to your actual domain)
4. Deploy — Vercel auto-detects Next.js and sets up the build correctly

> The project uses the default Next.js build (`npm run build`). No special Vercel configuration needed.

---

## Customization Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` to your real domain
- [ ] Replace `staticaly.com` OG image references with real photos
- [ ] Adjust pricing in `/packages/digital-detox-starter/page.tsx`
- [ ] Add more packages as they become available
- [ ] Add Google Analytics or Plausible (privacy-friendly) in `layout.tsx`
- [ ] Set up a Resend verified domain and update `EMAIL_FROM`

---

## Contact Form Flow

```
User fills form → POST /api/contact → lib/email.ts → Resend API → SITE_OWNER_EMAIL
```

Validation happens both client-side (HTML5 + React state) and server-side (API route).
On success, the form shows a confirmation message: *"We'll reply within 48 hours (JST)."*
