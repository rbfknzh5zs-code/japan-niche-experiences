import Link from 'next/link'

const EVIDENCE_CARDS: Array<{
  id: string
  title: string
  body: string
  iconPath: string | string[]
}> = [
  {
    id: 'sleep',
    title: 'Sleep',
    body: 'Problematic smartphone use has been linked with poorer sleep quality in systematic reviews.',
    iconPath:
      'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z',
  },
  {
    id: 'mood',
    title: 'Mood',
    body: 'Meta-analyses have found associations between problematic smartphone use and anxiety or depressive symptoms.',
    iconPath: [
      'M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
      'M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z',
    ],
  },
  {
    id: 'stress',
    title: 'Stress',
    body: 'Forest therapy studies have found lower salivary cortisol and lower blood pressure versus urban controls.',
    iconPath:
      'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z',
  },
  {
    id: 'relaxation',
    title: 'Relaxation',
    body: 'Nature exposure research suggests benefits for relaxation, mental well-being, and restoration.',
    iconPath: [
      'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
    ],
  },
]

const SOURCES = [
  {
    label: 'Smartphone use & sleep',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=problematic+smartphone+use+sleep+systematic+review',
  },
  {
    label: 'Smartphone use & mental health',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=problematic+smartphone+use+depression+anxiety+meta-analysis',
  },
  {
    label: 'Forest therapy review',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=forest+therapy+shinrin-yoku+cortisol+systematic+review',
  },
  {
    label: 'Nature & well-being',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=nature+exposure+mental+wellbeing+restoration+review',
  },
]

export default function WhyResetMattersSection() {
  return (
    <section className="bg-zinc-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6 mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forest-400 shrink-0">
            Wellness Research
          </p>
          <span className="hidden sm:inline text-zinc-700">—</span>
          <h2 className="font-display text-4xl font-light text-white">Why This Reset Matters</h2>
        </div>

        {/* 4-column evidence grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden mb-8">
          {EVIDENCE_CARDS.map((card) => {
            const paths = Array.isArray(card.iconPath) ? card.iconPath : [card.iconPath]
            return (
              <div key={card.id} className="bg-zinc-900 px-7 py-8">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="h-6 w-6 text-forest-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    {paths.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)}
                  </svg>
                  <h3 className="font-display text-lg font-medium text-zinc-100">{card.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">{card.body}</p>
              </div>
            )
          })}
        </div>

        {/* Footer: disclaimer + sources */}
        <div className="flex flex-wrap items-baseline gap-x-1 gap-y-1 text-sm text-zinc-600">
          <span>Research shows associations, not guaranteed outcomes.</span>
          <span className="text-zinc-800 mx-1">·</span>
          <span className="font-medium text-zinc-600">Sources:</span>
          {SOURCES.map((src, idx) => (
            <span key={src.label} className="flex items-baseline gap-x-1">
              <a href={src.href} target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-forest-400">
                {src.label}
              </a>
              {idx < SOURCES.length - 1 && <span className="text-zinc-800" aria-hidden="true">·</span>}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
