import type { ReactNode } from 'react'

export function DomainTag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-tag tracking-[0.14em] text-accent uppercase">
      {children}
    </span>
  )
}
