import type { ReactNode } from 'react'

export default function HomeLayout({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div
      className="relative z-10 grid max-w-[1180px] mx-auto min-h-screen"
      style={{ gridTemplateColumns: '37% 1fr' }}
    >
      {left}
      {right}
    </div>
  )
}
