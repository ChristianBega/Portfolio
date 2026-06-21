interface ProjectBentoProps {
  slug: string
}

type BentoTile = {
  label: string
  icon: string
}

type BentoLayout = {
  // Large left tile spanning both rows on tablet/desktop.
  hero: BentoTile & { subLabel: string }
  topRight: BentoTile
  bottomRight: BentoTile
}

// Placeholder tile config per project. Real screenshots/video swap in later;
// for now every project renders patterned placeholder tiles.
const LAYOUTS: Record<string, BentoLayout> = {
  'alma-ehr': {
    hero: { label: 'Demo video', subLabel: 'Product walkthrough', icon: 'ti ti-player-play' },
    topRight: { label: 'Form builder', icon: 'ti ti-forms' },
    bottomRight: { label: 'Practitioner dashboard', icon: 'ti ti-layout-dashboard' },
  },
  almadelic: {
    hero: { label: 'Homepage', subLabel: 'Landing experience', icon: 'ti ti-browser' },
    topRight: { label: 'Checkout', icon: 'ti ti-shopping-cart' },
    bottomRight: { label: 'Mobile', icon: 'ti ti-device-mobile' },
  },
  'gardens-dispensary': {
    hero: { label: 'Homepage', subLabel: 'Landing experience', icon: 'ti ti-browser' },
    topRight: { label: 'Locations', icon: 'ti ti-map-pin' },
    bottomRight: { label: 'Menu', icon: 'ti ti-list' },
  },
  'overland-baseball': {
    hero: { label: 'Homepage', subLabel: 'Landing experience', icon: 'ti ti-browser' },
    topRight: { label: 'Roster', icon: 'ti ti-users' },
    bottomRight: { label: 'Admin dashboard', icon: 'ti ti-layout-dashboard' },
  },
}

// Subtle repeating diagonal pattern over a faint solid fill — matches the
// portfolio mockup tiles. Allowed inline-style exception for the gradient.
const tileBackground =
  'repeating-linear-gradient(135deg, rgba(255,255,255,0.022) 0 11px, rgba(255,255,255,0) 11px 22px), rgba(255,255,255,0.022)'

export default function ProjectBento({ slug }: ProjectBentoProps) {
  const layout = LAYOUTS[slug]

  if (!layout) return null

  return (
    <div className="grid grid-cols-1 grid-rows-none gap-[10px] md:grid-cols-2 md:grid-rows-[200px_200px] lg:grid-cols-[1.5fr_1fr]">
      {/* Hero — spans both rows on tablet/desktop, equal-height on mobile. */}
      <div
        className="flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-[13px] border border-border-card text-text-faint md:row-span-2"
        style={{ background: tileBackground }}
      >
        <i className={`${layout.hero.icon} text-[24px]`} aria-hidden="true" />
        <span className="font-mono text-mono-sm text-text-faint">{layout.hero.label}</span>
        <span className="mt-1 font-mono text-[10px] text-text-dim">{layout.hero.subLabel}</span>
      </div>

      {[layout.topRight, layout.bottomRight].map((tile) => (
        <div
          key={tile.label}
          className="flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-[13px] border border-border-card text-text-faint"
          style={{ background: tileBackground }}
        >
          <i className={`${tile.icon} text-[20px]`} aria-hidden="true" />
          <span className="font-mono text-mono-sm text-text-faint">{tile.label}</span>
        </div>
      ))}
    </div>
  )
}
