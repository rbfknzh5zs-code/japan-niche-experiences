import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digitaldetoxjapan.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/digital-detox-japan', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/unplug-in-japan', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/forest-therapy-japan', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/japan-wellness-nature-retreat', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/packages/digital-detox-starter', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/how-it-works', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
