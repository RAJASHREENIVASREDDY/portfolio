'use client'

import { Reveal } from './reveal'

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
