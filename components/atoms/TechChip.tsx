export function TechChip({ children }: { children: string | string[] }) {
  const label = Array.isArray(children) ? children.join(" · ") : children;
  return <span className="font-mono text-mono-sm text-text-muted border border-border-card rounded-md px-2.5 py-1.5">{label}</span>;
}
