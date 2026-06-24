'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { SectionEyebrow } from '@/components/atoms/SectionEyebrow'
import ProjectCard from '@/components/molecules/ProjectCard'
import { projects } from '@/data/projects'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const mainClassName =
  'relative pt-4 pb-[72px] lg:py-[72px] px-5 lg:pl-[52px] lg:px-[8px] border-l border-border-subtle lg:pb-[84px]'

// The right column content, split out from app/page.tsx so it can run on the
// client and stagger its sections in on first paint.
export default function RightColumnContent() {
  const reduced = useReducedMotion()

  const about = (
    <>
      <SectionEyebrow>About</SectionEyebrow>
      <p className="text-body text-text-muted leading-[1.85] max-w-[580px] mt-4 mb-[56px]" style={{ textWrap: "pretty" }}>
        Denver-based developer with three years building production software for a telehealth startup, where I grew from entry-level into the lead
        role. Working in a startup meant owning work across the full stack: backend API development, cloud infrastructure, CI/CD pipelines, automated
        testing, and the frontend.
      </p>
    </>
  );

  const featured = (
    <>
      <SectionEyebrow>Featured Projects</SectionEyebrow>
      <div className="flex flex-col mt-1 border-b border-border-card">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </>
  )

  const more = (
    <Link
      href="/projects"
      className="inline-flex items-center gap-[8px] text-accent font-mono text-mono-md mt-[30px] py-[6px] transition-all hover:gap-[12px]"
    >
      <i className="ti ti-arrow-right" aria-hidden="true" />
      More projects, experiments &amp; home-lab notes
    </Link>
  )

  if (reduced) {
    return (
      <main className={mainClassName}>
        {about}
        {featured}
        {more}
      </main>
    )
  }

  return (
    <motion.main
      className={mainClassName}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>{about}</motion.div>
      <motion.div variants={item}>{featured}</motion.div>
      <motion.div variants={item}>{more}</motion.div>
    </motion.main>
  )
}
