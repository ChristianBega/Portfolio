export function AccentMetric({ children }: { children: string }) {
  return (
    <span className="inline text-accent font-semibold [filter:drop-shadow(0_0_8px_rgba(138,144,240,0.6))]">
      {children}
    </span>
  )
}
