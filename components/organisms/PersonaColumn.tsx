import { IconLink } from '@/components/atoms/IconLink'

export default function PersonaColumn() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen overflow-visible lg:border-r border-border-subtle flex flex-col justify-between pt-8 pb-6 px-5 lg:pt-[72px] lg:pb-[56px] lg:pr-[44px] lg:pl-[8px]">
      {/* Top block — identity */}
      <div className="relative z-10">
        <h1 className="text-h1 font-semibold text-text-primary">Christian Bega</h1>
        <p className="text-ui text-text-secondary mt-[11px]">Full-stack developer</p>
        <p className="font-mono text-mono-md text-text-dim mt-[13px] leading-[1.9] whitespace-nowrap">
          React · Next.js · Node · AWS · GCP
        </p>
        <div className="flex items-center gap-[9px] mt-6 font-mono text-mono-sm text-text-dim tracking-[0.03em]">
          <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_11px_rgba(138,144,240,0.85)]" />
          Available for full-stack roles
        </div>
      </div>

      {/* Bottom block — links + CTA */}
      <div className="relative z-10 hidden lg:block">
        <nav className="flex flex-col">
          <IconLink icon="ti ti-brand-github" href="https://bit.ly/Cbega-GitHub">
            GitHub
          </IconLink>
          <IconLink icon="ti ti-brand-linkedin" href="https://bit.ly/Cbega-LinkedIn">
            LinkedIn
          </IconLink>
          <IconLink icon="ti ti-file-text" href="/Christian_Bega_Resume_2026.pdf">
            Resume (PDF)
          </IconLink>
        </nav>
        <a
          href="mailto:chrisb3ga@gmail.com"
          className="flex items-center justify-center gap-[9px] w-full mt-6 py-[13px] rounded-[10px] bg-accent text-base font-medium transition-colors hover:bg-accent-glow"
        >
          <i className="ti ti-mail" aria-hidden="true" />
          Get in touch
        </a>
      </div>
    </aside>
  )
}
