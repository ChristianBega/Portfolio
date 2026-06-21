// NOTE: POR-10 placeholder. Real PersonaColumn (name, role, links) ships in
// POR-10 — this minimal version lets the home page render until then.
export default function PersonaColumn() {
  return (
    <div>
      <h1 className="text-h1 font-medium text-text-primary">Christian Bega</h1>
      <p className="font-mono text-mono-md text-text-faint mt-[10px] tracking-[0.03em]">
        Full-stack developer · Denver
      </p>
    </div>
  )
}
