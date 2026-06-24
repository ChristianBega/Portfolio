import { notFound } from 'next/navigation'
import DetailLayout from '@/layouts/DetailLayout'
import ProjectBento from '@/components/organisms/ProjectBento'
import HighlightBullet from '@/components/molecules/HighlightBullet'
import { AccentMetric } from '@/components/atoms/AccentMetric'
import { DomainTag } from '@/components/atoms/DomainTag'
import { SectionEyebrow } from '@/components/atoms/SectionEyebrow'
import { TechChip } from '@/components/atoms/TechChip'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  // Replace the {metric} placeholder in the one-liner with a glowing AccentMetric.
  // When the project has no metric, the description renders as plain text.
  const renderOneLiner = () => {
    if (project.cardMetric === null) return project.cardDesc
    const [before, after] = project.cardDesc.split('{metric}')
    return (
      <>
        {before}
        <AccentMetric>{project.cardMetric}</AccentMetric>
        {after}
      </>
    )
  }

  return (
    <DetailLayout>
      <header className="mt-9 lg:mt-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* Title block */}
          <div className="max-w-[640px]">
            <DomainTag>{project.tag}</DomainTag>
            <h1 className="text-detail-h1 font-semibold text-text-primary mt-3">
              {project.title}
            </h1>
            <p className="text-body text-text-muted leading-[1.7] mt-4">
              {renderOneLiner()}
            </p>
          </div>

          {/* Repo / site links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-mono-md text-text-dim shrink-0 lg:justify-end lg:text-right lg:mt-1">
            {project.repo === 'private' && (
              <span className="flex items-center gap-2">
                <i className="ti ti-lock" aria-hidden="true" /> Private repo
              </span>
            )}
            {project.repo === 'public' && project.repoUrl && (
              <a
                href={project.repoUrl}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <i className="ti ti-brand-github" aria-hidden="true" /> Source
              </a>
            )}
            {project.siteUrl ? (
              <a
                href={project.siteUrl}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                {project.siteLabel ?? project.siteUrl}
                <i className="ti ti-arrow-up-right" aria-hidden="true" />
              </a>
            ) : project.siteLabel ? (
              <span className="flex items-center gap-2">{project.siteLabel}</span>
            ) : null}
          </div>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((t) => (
            <TechChip key={t}>{t}</TechChip>
          ))}
        </div>
      </header>

      {/* Hero visual */}
      <div className="mt-[68px] lg:mt-[72px]">
        <ProjectBento slug={project.slug} />
      </div>

      {/* Summary */}
      <section className="mt-[68px] lg:mt-[72px]">
        <SectionEyebrow>Summary</SectionEyebrow>
        <p className="text-body text-text-muted leading-[1.8] max-w-[680px] mt-4">
          {project.summary}
        </p>
      </section>

      {/* Role & Highlights */}
      <section className="mt-[68px] lg:mt-[72px]">
        <SectionEyebrow>Role &amp; Highlights</SectionEyebrow>
        <div className="flex flex-col gap-[17px] mt-5">
          {project.highlights.map((h) => (
            <HighlightBullet key={h.text} icon={h.icon} text={h.text} metric={h.metric} />
          ))}
        </div>
      </section>

      {/* How it works (optional) */}
      {project.howItWorks && (
        <section className="mt-[68px] lg:mt-[72px]">
          <SectionEyebrow>How it works</SectionEyebrow>
          <p className="text-body text-text-muted leading-[1.8] max-w-[680px] mt-4">
            {project.howItWorks}
          </p>
        </section>
      )}

      {/* What I learned (optional) */}
      {project.whatILearned && (
        <section className="mt-[68px] lg:mt-[72px]">
          <SectionEyebrow>What I learned</SectionEyebrow>
          <p className="text-body text-text-muted leading-[1.8] max-w-[680px] mt-4">
            {project.whatILearned}
          </p>
        </section>
      )}
    </DetailLayout>
  )
}
