import HomeLayout from '@/layouts/HomeLayout'
import PersonaColumn from '@/components/organisms/PersonaColumn'
import MobileFooterBar from '@/components/organisms/MobileFooterBar'
import { SectionEyebrow } from '@/components/atoms/SectionEyebrow'
import ProjectCard from '@/components/molecules/ProjectCard'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <>
    <HomeLayout
      left={<PersonaColumn />}
      right={
        <main className="relative pt-4 pb-[72px] lg:py-[72px] px-5 lg:pl-[52px] lg:px-[8px] border-l border-border-subtle lg:pb-[84px]">
          {/* About */}
          <SectionEyebrow>About</SectionEyebrow>
          <p
            className="text-body text-text-muted leading-[1.85] max-w-[580px] mt-4 mb-[56px]"
            style={{ textWrap: 'pretty' }}
          >
            Full-stack developer in Denver with three years building production
            software for a telehealth startup, where I grew from entry-level into
            the lead role. Most of my work lives on the backend and in
            infrastructure — a custom FHIR-based EHR, serverless APIs, CI/CD,
            and integrations across Stripe, CRM, and healthcare systems.
          </p>

          {/* Featured Projects */}
          <SectionEyebrow>Featured Projects</SectionEyebrow>
          <div className="flex flex-col mt-1 border-b border-border-card">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>

          {/* More projects link */}
          <a
            href="/projects"
            className="inline-flex items-center gap-[8px] text-accent font-mono text-mono-md mt-[30px] py-[6px] transition-all hover:gap-[12px]"
          >
            <i className="ti ti-arrow-right" aria-hidden="true" />
            More projects, experiments &amp; home-lab notes
          </a>
        </main>
      }
    />

    <MobileFooterBar />
    </>
  )
}
