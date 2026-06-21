/**
 * NebulaLayer — global background haze that sits behind the stars.
 *
 * Several overlapping, offset violet radial-gradients read as an irregular
 * nebula cloud rather than a single discrete orb. Weighted toward the
 * center-left so it pools behind the persona column and dissipates to the
 * right. Static + pointer-events-none; the starfield (z-1) paints on top.
 *
 * Layered radial-gradients are the sanctioned inline-style exception
 * (same family as the glow-orb gradients).
 */
export default function NebulaLayer() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: [
          'radial-gradient(40% 32% at 34% 46%, rgba(146,150,255,0.20), rgba(110,118,230,0.06) 52%, transparent 76%)',
          'radial-gradient(28% 28% at 22% 37%, rgba(162,150,255,0.12), transparent 72%)',
          'radial-gradient(32% 30% at 46% 57%, rgba(112,120,230,0.11), transparent 74%)',
          'radial-gradient(24% 26% at 58% 41%, rgba(122,112,216,0.07), transparent 72%)',
          'radial-gradient(22% 24% at 30% 63%, rgba(92,102,202,0.06), transparent 74%)',
        ].join(', '),
      }}
    />
  )
}
