import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { BLOG_POSTS } from '../posts'
import { getPostContent } from '../content'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.description },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const content = getPostContent(slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `https://digitaldetoxjapan.com/blog/${slug}`,
    datePublished: post.datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    author: { '@type': 'Organization', name: 'Digital Detox Japan', url: 'https://digitaldetoxjapan.com' },
    publisher: { '@type': 'Organization', name: 'Digital Detox Japan' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://digitaldetoxjapan.com/blog/${slug}` },
    keywords: post.keywords.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://digitaldetoxjapan.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://digitaldetoxjapan.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://digitaldetoxjapan.com/blog/${slug}` },
    ],
  }

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="bg-black pt-32 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-xs text-forest-400 hover:text-forest-300 transition-colors mb-6 inline-block">
            ← All guides
          </Link>
          <p className="text-xs text-zinc-600 mb-4">
            {new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">{post.description}</p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-16 px-6">
        <div className="mx-auto max-w-3xl prose-custom">
          {content}
        </div>
      </article>

      {/* CTA */}
      <section className="bg-zinc-950 py-16 px-6 border-t border-zinc-900">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl font-light text-white mb-4">Ready to experience it yourself?</p>
          <p className="text-zinc-400 mb-8">
            We handle every Japanese detail — booking, guide, directions. You just arrive and unplug.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request your dates</Link>
            <Link href="/packages/nasu-highland-glamping" className="btn-ghost">See the package</Link>
          </div>
          <p className="mt-4 text-xs text-zinc-600">No payment upfront · Reply within 48 hrs</p>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-zinc-900 py-16 px-6 border-t border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-light text-white mb-8">More guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 4).map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-forest-700 transition-all"
              >
                <h3 className="font-display text-base font-light text-zinc-100 group-hover:text-forest-400 mb-2 leading-snug">
                  {related.title}
                </h3>
                <p className="text-xs text-zinc-500">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
