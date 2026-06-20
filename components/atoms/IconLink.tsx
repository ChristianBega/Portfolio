import type { ReactNode } from 'react'

interface IconLinkProps {
  href: string
  icon: string
  children: ReactNode
}

export function IconLink({ href, icon, children }: IconLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-[11px] text-text-secondary font-mono text-mono-md py-1.5 transition-colors hover:text-accent"
    >
      <i className={icon} aria-hidden="true" />
      {children}
    </a>
  )
}
