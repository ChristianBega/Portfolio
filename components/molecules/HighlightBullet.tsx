import { AccentMetric } from '@/components/atoms/AccentMetric'

interface HighlightBulletProps {
  icon: string
  text: string
  metric?: string
}

export default function HighlightBullet({ icon, text, metric }: HighlightBulletProps) {
  // Split the sentence on the {metric} placeholder and drop a glowing AccentMetric
  // inline — same pattern as ProjectCard. With no metric, render the text as-is.
  const renderText = () => {
    if (!metric) return text
    const [before, after] = text.split('{metric}')
    return (
      <>
        {before}
        <AccentMetric>{metric}</AccentMetric>
        {after}
      </>
    )
  }

  return (
    <div className="flex gap-3">
      <i
        className={`${icon} text-accent text-[16px] mt-[3px] shrink-0`}
        aria-hidden="true"
      />
      <p className="text-body text-text-muted leading-[1.65]">{renderText()}</p>
    </div>
  )
}
