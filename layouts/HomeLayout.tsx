import type { ReactNode } from 'react'

interface HomeLayoutProps {
  left: ReactNode
  right: ReactNode
}

// NOTE: POR-10 placeholder. Real HomeLayout ships in POR-10 — this satisfies the
// { left, right } interface so the home page compiles and renders: a sticky left
// persona column beside scrollable right content.
export default function HomeLayout({ left, right }: HomeLayoutProps) {
  return (
    <div className="relative z-10 mx-auto grid max-w-[1080px] grid-cols-[300px_1fr] gap-0 px-[32px]">
      <aside className="sticky top-0 h-screen py-[72px]">{left}</aside>
      <div>{right}</div>
    </div>
  )
}
