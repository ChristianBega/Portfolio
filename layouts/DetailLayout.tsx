import type { ReactNode } from 'react'
import Link from 'next/link'
import MobileFooterBar from '@/components/organisms/MobileFooterBar'

export default function DetailLayout({ children }: { children: ReactNode }) {
  return (
    // Single column, full width. The AtmosphereLayer/background lives in
    // app/layout.tsx, so this only owns the foreground content. Extra bottom
    // padding on mobile clears the fixed MobileFooterBar.
    <main className="relative z-10 max-w-[880px] mx-auto px-5 lg:px-8 pt-10 lg:pt-[52px] pb-[80px] lg:pb-[110px]">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-mono-md text-text-dim transition-colors hover:text-accent"
      >
        <span aria-hidden="true">←</span> Projects
      </Link>

      {children}

      <MobileFooterBar />
    </main>
  )
}
