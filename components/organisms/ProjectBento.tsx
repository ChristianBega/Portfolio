'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import ImageLightbox from './ImageLightbox'

interface ProjectBentoProps {
  slug: string
}

type BentoTile = {
  label: string
  icon: string
  image?: string
}

type BentoLayout = {
  // Large left tile spanning both rows on tablet/desktop.
  hero: BentoTile & { subLabel: string }
  topRight: BentoTile
  bottomRight: BentoTile
}

const LAYOUTS: Record<string, BentoLayout> = {
  'alma-ehr': {
    hero: { label: 'Dashboard', subLabel: 'Practitioner overview', icon: 'ti ti-layout-dashboard', image: '/images/almaehr-dashboard.png' },
    topRight: { label: 'Form builder', icon: 'ti ti-forms', image: '/images/almaehr-form-builder.png' },
    bottomRight: { label: 'Sessions', icon: 'ti ti-calendar-event', image: '/images/almaehr-sessions.png' },
  },
  almadelic: {
    hero: { label: 'Homepage', subLabel: 'Landing experience', icon: 'ti ti-browser', image: '/images/almadelic-homepage.png' },
    topRight: { label: 'Checkout', icon: 'ti ti-shopping-cart', image: '/images/almadelic-checkout.png' },
    bottomRight: { label: 'Directory', icon: 'ti ti-device-mobile', image: '/images/almadelic-directory.png' },
  },
  'gardens-dispensary': {
    hero: { label: 'Homepage', subLabel: 'Landing experience', icon: 'ti ti-browser', image: '/images/gardens-homepage.png' },
    topRight: { label: 'Locations', icon: 'ti ti-map-pin', image: '/images/gardens-locations.png' },
    bottomRight: { label: 'Map view', icon: 'ti ti-map', image: '/images/gardens-map.png' },
  },
  'overland-baseball': {
    hero: { label: 'Homepage', subLabel: 'Landing experience', icon: 'ti ti-browser', image: '/images/overland-homepage.png' },
    topRight: { label: 'AI CMS', icon: 'ti ti-robot', image: '/images/overland-ai-cms.png' },
    bottomRight: { label: 'Strapi dashboard', icon: 'ti ti-layout-dashboard', image: '/images/overland-strapi.png' },
  },
}

// Subtle repeating diagonal pattern over a faint solid fill — matches the
// portfolio mockup tiles. Allowed inline-style exception for the gradient.
const tileBackground =
  'repeating-linear-gradient(135deg, rgba(255,255,255,0.022) 0 11px, rgba(255,255,255,0) 11px 22px), rgba(255,255,255,0.022)'

export default function ProjectBento({ slug }: ProjectBentoProps) {
  const layout = LAYOUTS[slug]
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null)

  const handleClose = useCallback(() => setSelected(null), [])

  if (!layout) return null

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-none gap-[10px] md:grid-cols-2 md:grid-rows-[200px_200px] lg:grid-cols-[1.5fr_1fr]">
        {/* Hero — spans both rows on tablet/desktop, equal-height on mobile. */}
        {layout.hero.image ? (
          <div
            className="relative min-h-[160px] cursor-pointer overflow-hidden rounded-[13px] border border-border-card transition-[filter] duration-200 hover:brightness-110 md:row-span-2"
            onClick={() => setSelected({ src: layout.hero.image!, alt: layout.hero.label })}
          >
            <Image
              src={layout.hero.image}
              alt={layout.hero.label}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 530px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-mono text-mono-sm text-text-primary drop-shadow-md">
              {layout.hero.label}
            </span>
          </div>
        ) : (
          <div
            className="flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-[13px] border border-border-card text-text-faint md:row-span-2"
            style={{ background: tileBackground }}
          >
            <i className={`${layout.hero.icon} text-[24px]`} aria-hidden="true" />
            <span className="font-mono text-mono-sm text-text-faint">{layout.hero.label}</span>
            <span className="mt-1 font-mono text-[10px] text-text-dim">{layout.hero.subLabel}</span>
          </div>
        )}

        {[layout.topRight, layout.bottomRight].map((tile) =>
          tile.image ? (
            <div
              key={tile.label}
              className="relative min-h-[160px] cursor-pointer overflow-hidden rounded-[13px] border border-border-card transition-[filter] duration-200 hover:brightness-110"
              onClick={() => setSelected({ src: tile.image!, alt: tile.label })}
            >
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 350px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-3 font-mono text-mono-sm text-text-primary drop-shadow-md">
                {tile.label}
              </span>
            </div>
          ) : (
            <div
              key={tile.label}
              className="flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-[13px] border border-border-card text-text-faint"
              style={{ background: tileBackground }}
            >
              <i className={`${tile.icon} text-[20px]`} aria-hidden="true" />
              <span className="font-mono text-mono-sm text-text-faint">{tile.label}</span>
            </div>
          )
        )}
      </div>

      {selected && (
        <ImageLightbox
          src={selected.src}
          alt={selected.alt}
          open={true}
          onClose={handleClose}
        />
      )}
    </>
  )
}
