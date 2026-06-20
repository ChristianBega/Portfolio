export function AccentMetric({ children }: { children: string }) {
  return (
    <span className="text-accent font-semibold shadow-accent-glow">
      {children}
    </span>
  )
}
