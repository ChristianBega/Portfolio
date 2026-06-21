import type { ReactNode } from 'react'

export default function HomeLayout({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="relative z-10 grid grid-cols-[37%_1fr] max-w-[1180px] mx-auto min-h-screen">
      {left}
      {right}
    </div>
  )
}
