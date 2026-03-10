export interface BlogPost {
  slug: string
  title: string
  description: string
  datePublished: string
  keywords: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'nasu-kogen-glamping-guide',
    title: 'Nasu Kogen Glamping Guide 2026',
    description: 'Everything you need to know about glamping in Nasu Kogen — Japan\'s premier highland destination. Private onsen, sauna, forest walks, and no Japanese required.',
    datePublished: '2024-03-01',
    keywords: ['nasu kogen glamping', 'nasu highland glamping', 'glamping tochigi'],
  },
  {
    slug: 'shinrin-yoku-guide-for-beginners',
    title: 'Shinrin-Yoku for Beginners: How to Practice Forest Bathing',
    description: 'A practical guide to shinrin-yoku — the Japanese practice of forest bathing. How to do it, what to expect, and why it works.',
    datePublished: '2024-03-08',
    keywords: ['shinrin yoku guide', 'how to do forest bathing', 'forest bathing japan'],
  },
  {
    slug: 'digital-detox-tips-before-you-go',
    title: '12 Digital Detox Tips to Prepare Before Your Trip to Japan',
    description: 'Before you unplug in Japan, prepare your nervous system. 12 practical digital detox tips that make the transition easier and the experience deeper.',
    datePublished: '2024-03-15',
    keywords: ['digital detox tips', 'how to do a digital detox', 'screen detox tips'],
  },
  {
    slug: 'onsen-etiquette-guide-english',
    title: 'Japan Onsen Etiquette Guide for First-Timers (English)',
    description: 'Everything you need to know before your first Japanese onsen — rules, customs, tattoo policies, and what to bring. Written in plain English for international visitors.',
    datePublished: '2024-03-22',
    keywords: ['onsen etiquette', 'japan onsen rules english', 'onsen guide english'],
  },
  {
    slug: 'glamping-japan-vs-camping-what-to-expect',
    title: 'Glamping vs. Camping in Japan: What to Expect',
    description: 'Not sure whether to book glamping or traditional camping in Japan? Here\'s an honest comparison — comfort levels, cost, what\'s included, and who each suits best.',
    datePublished: '2024-03-29',
    keywords: ['glamping japan', 'camping japan english', 'glamping vs camping japan'],
  },
  {
    slug: 'digital-detox-japan-solo-travel-guide',
    title: 'Solo Digital Detox in Japan: A Complete Guide',
    description: 'Traveling solo and want to unplug in Japan? This guide covers everything — safety, logistics, the best destinations, and how to enjoy solitude in Japan\'s wilderness.',
    datePublished: '2024-04-05',
    keywords: ['solo travel japan', 'solo glamping japan', 'solo digital detox'],
  },
  {
    slug: 'best-time-to-visit-nasu-kogen',
    title: 'Best Time to Visit Nasu Kogen in 2026',
    description: 'Nasu Kogen is beautiful year-round, but each season offers something different. Here\'s a month-by-month guide to planning your visit.',
    datePublished: '2024-04-12',
    keywords: ['nasu kogen best time', 'nasu kogen when to go', 'nasu kogen seasons'],
  },
  {
    slug: 'screen-fatigue-recovery-japan',
    title: 'Screen Fatigue Recovery: Why Japan Works',
    description: 'Screen fatigue is a modern epidemic. Japan\'s forests, onsen, and stillness offer a uniquely effective environment for recovery. Here\'s the science and the experience.',
    datePublished: '2024-04-19',
    keywords: ['screen fatigue recovery', 'digital burnout recovery', 'screen detox nature'],
  },
]
