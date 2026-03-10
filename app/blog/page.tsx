import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from './posts'

export const metadata: Metadata = {
  title: 'Blog — Digital Detox Japan Guides & Inspiration',
  description:
    'Guides, tips, and inspiration for digital detox travel in Japan. Forest bathing, onsen etiquette, glamping guides, and more — all written for English-speaking travelers.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-black pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest-400 uppercase mb-5">Journal</p>
          <h1 className="font-display text-5xl font-light text-white mb-5">
            Guides & Inspiration
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Everything you need to know before, during, and after your digital detox in Japan. Written for English-speaking travelers.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-8 hover:border-forest-700 transition-all"
              >
                <p className="text-xs text-zinc-600 mb-3">
                  {new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <h2 className="font-display text-xl font-light text-zinc-100 group-hover:text-forest-400 mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed">{post.description}</p>
                <p className="mt-4 text-xs text-forest-500 group-hover:text-forest-400 transition-colors">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-16 px-6 border-t border-zinc-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl font-light text-white mb-4">Ready to experience it yourself?</h2>
          <p className="text-zinc-400 mb-8">Book a digital detox glamping experience in Japan — all in English, no planning stress.</p>
          <Link href="/contact" className="btn-primary">Request your dates</Link>
        </div>
      </section>
    </>
  )
}
