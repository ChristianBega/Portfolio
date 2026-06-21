import Link from 'next/link'
import { AccentMetric } from '@/components/atoms/AccentMetric'
import { DomainTag } from '@/components/atoms/DomainTag'

interface ProjectCardProps {
  slug: string
  tag: string
  title: string
  cardDesc: string
  cardMetric: string | null
  tech: string[]
}

export default function ProjectCard({
  slug,
  tag,
  title,
  cardDesc,
  cardMetric,
  tech,
}: ProjectCardProps) {
  // Replace the {metric} placeholder with a glowing AccentMetric. When there is
  // no metric for this project, the description renders as plain text.
  const renderDesc = () => {
    if (cardMetric === null) return cardDesc
    const [before, after] = cardDesc.split('{metric}')
    return (
      <>
        {before}
        <AccentMetric>{cardMetric}</AccentMetric>
        {after}
      </>
    )
  }

  return (
    <Link
      href={`/projects/${slug}`}
      className="group grid grid-cols-[1fr_auto] py-[26px] px-[8px] border-t border-border-card transition-all duration-[180ms] hover:bg-[rgba(138,144,240,0.05)] hover:shadow-card-hover"
    >
      <div>
        <DomainTag>{tag}</DomainTag>
        <h3 className="text-card-title font-medium text-text-primary mt-[9px] mb-[8px] transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="text-body-sm text-text-dim leading-[1.6] max-w-[540px] mb-[13px]">
          {renderDesc()}
        </p>
        <div className="font-mono text-mono-sm text-text-faint tracking-[0.03em]">
          {tech.join(' · ')}
        </div>
      </div>
      <i
        className="ti ti-arrow-up-right text-text-faint text-[17px] mt-[6px]"
        aria-hidden="true"
      />
    </Link>
  )
}
