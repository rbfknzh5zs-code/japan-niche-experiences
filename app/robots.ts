import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digitaldetoxjapan.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/legal/terms', '/legal/privacy', '/legal/disclaimer'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  }
}
