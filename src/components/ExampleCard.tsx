import type { ReactNode } from 'react'

type ExampleCardProps = {
  title: string
  description: string
  accent?: string
  children: ReactNode
}

export function ExampleCard({
  title,
  description,
  accent = '#8b5cf6',
  children,
}: ExampleCardProps) {
  return (
    <article className="example-card" style={{ ['--accent' as string]: accent }}>
      <header className="example-card__header">
        <div>
          <p className="eyebrow">Motion demo</p>
          <h2>{title}</h2>
        </div>
        <span className="badge">Live</span>
      </header>
      <p className="example-card__description">{description}</p>
      {children}
    </article>
  )
}
