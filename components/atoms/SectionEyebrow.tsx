import type { ReactNode } from 'react'

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-label font-medium tracking-[0.16em] text-text-faint uppercase">
      {children}
    </h2>
  )
}
