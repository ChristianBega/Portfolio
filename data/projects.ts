export type ProjectHighlight = {
  icon: string
  text: string
  metric?: string
}

export type Project = {
  slug: string
  title: string
  tag: string
  cardMetric: string | null
  cardDesc: string
  tech: string[]
  repo: 'public' | 'private' | null
  repoUrl?: string
  siteUrl?: string
  siteLabel?: string
  summary: string
  highlights: ProjectHighlight[]
  howItWorks?: string
  whatILearned?: string
}

export const projects: Project[] = [
  {
    slug: 'alma-ehr',
    title: 'AlmaEHR',
    tag: 'HEALTHCARE · EHR',
    cardMetric: '~75%',
    cardDesc: 'Custom FHIR EHR replacing a third-party system — {metric} lower cost.',
    tech: ['Next.js', 'Node · Express', 'FHIR R4', 'Cloud Healthcare API', 'Cloud Run', 'BigQuery', 'Cloud SQL', 'Firebase', 'OAuth 2.0', 'GoHighLevel'],
    repo: 'private',
    siteLabel: 'Internal platform',
    summary: 'Built with a two-person engineering team to replace a third-party EHR, AlmaEHR is a full-stack platform on Google Cloud using Next.js, Node/Express, and the Cloud Healthcare API. It adopts FHIR R4 for interoperability and a layered service architecture spanning practitioner, healing-center, and patient portals — replacing the prior system at roughly a quarter of the cost.',
    highlights: [
      { icon: 'ti ti-api', text: 'Built {metric} Express REST endpoints on a layered service architecture, adopting FHIR R4 for interoperability.', metric: '60+' },
      { icon: 'ti ti-trending-down', text: 'Cut EHR running costs by {metric} versus the third-party system it replaced.', metric: '~75%' },
      { icon: 'ti ti-shield-lock', text: 'RBAC middleware via Firebase JWT — practitioner → healing center → patient for HIPAA-compliant data boundaries.' },
      { icon: 'ti ti-database', text: 'Dual-read pattern: BigQuery for fast paginated lists, FHIR API for real-time detail views.' },
      { icon: 'ti ti-refresh', text: 'GoHighLevel OAuth 2.0 with token refresh and race-condition prevention for bidirectional CRM↔EHR sync.' },
    ],
    howItWorks: 'The non-obvious decision: list views served fast from BigQuery; clinical detail stays real-time through the FHIR API.',
  },
  {
    slug: 'almadelic',
    title: 'Almadelic',
    tag: 'TELEHEALTH',
    cardMetric: '~3.5%',
    cardDesc: 'Telehealth platform, concept to production — Stripe fees cut to {metric} from ~6%.',
    tech: ['React', 'JavaScript', 'AWS', 'Stripe', 'Prerender.io', 'Lambda@Edge', 'CloudFront', 'Firebase', 'Node.js', 'GoHighLevel'],
    repo: 'private',
    siteUrl: 'https://almadelic.com',
    siteLabel: 'almadelic.com',
    summary: 'The telehealth platform I built concept-to-production — 40+ pages, a custom Stripe checkout that cut fees from ~6% to ~3.5%, and an SSR fix that improved crawler page delivery 82%.',
    highlights: [
      { icon: 'ti ti-layout', text: 'Shipped 40+ responsive pages covering services, treatments, state landing pages, and blog; drove organic SEO.' },
      { icon: 'ti ti-brand-stripe', text: 'Custom React + Stripe e-commerce after third-party solutions failed — first revenue, fees cut from ~6% to {metric}.', metric: '~3.5%' },
      { icon: 'ti ti-search', text: 'Fixed SPA crawlability with Prerender.io + CloudFront + Lambda@Edge: 5x crawl efficiency, 82% better page delivery.' },
      { icon: 'ti ti-plug', text: 'REST integrations via API Gateway + Lambda connecting Stripe, CRM, and EHR.' },
      { icon: 'ti ti-settings-automation', text: '40+ GoHighLevel automations for lead capture, scheduling, and CRM-EHR syncing.' },
    ],
  },
  {
    slug: 'gardens-dispensary',
    title: 'Gardens Dispensary',
    tag: 'E-COMMERCE · MULTI-STATE',
    cardMetric: '2,000+',
    cardDesc: 'Multi-state retail platform unifying 17 locations across 5 states — 0 → {metric} leads.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Digital Ocean', 'GitHub Actions', 'Google Maps API'],
    repo: 'private',
    siteUrl: 'https://gardensdispensary.com',
    siteLabel: 'gardensdispensary.com',
    summary: 'Led a full rebrand and Next.js rebuild unifying 17 dispensary locations across 5 states. Built a lead-gen system that grew from 0 to 2,000+ leads, achieved top-5 local rankings for primary keywords, and hit 95+ Lighthouse accessibility scores with zero critical Axe errors.',
    highlights: [
      { icon: 'ti ti-users', text: 'Led full rebrand/refactor with a 3-person team, migrating 17+ location pages to Next.js.' },
      { icon: 'ti ti-accessible', text: 'WCAG compliance: 95+ Lighthouse accessibility score, zero critical Axe errors.' },
      { icon: 'ti ti-mail', text: 'Lead-gen system → GoHighLevel CRM with tagging, confirmation emails, rewards sync — 0 → {metric} leads.', metric: '2,000+' },
      { icon: 'ti ti-search', text: 'SEO via Next.js SSR, metadata, and schema markup → top-5 local rankings for primary keywords.' },
      { icon: 'ti ti-git-branch', text: 'DevOps: staging/prod on Digital Ocean, GitHub Actions pipeline, domain migration with 301 redirects.' },
    ],
  },
  {
    slug: 'overland-baseball',
    title: 'Overland Baseball',
    tag: 'SPORTS',
    cardMetric: null,
    cardDesc: 'Serverless SPA later rebuilt around an AI-powered Strapi CMS so non-technical coaches manage content in natural language.',
    tech: ['React', 'JavaScript', 'Strapi CMS', 'OpenAI', 'Firebase', 'AWS', 'Railway'],
    repo: 'public',
    repoUrl: 'https://github.com/ChristianBega/Overland-Baseball-Website',
    siteUrl: 'https://overlandbaseball.com',
    siteLabel: 'overlandbaseball.com',
    summary: 'A serverless SPA for a high-school baseball program, later rebuilt around an AI-powered Strapi CMS so non-technical coaches can manage content via natural language. Includes public pages, an admin dashboard, and Firebase auth with role-based access.',
    highlights: [
      { icon: 'ti ti-device-desktop', text: 'Serverless SPA for 30+ students, parents, and staff — public pages plus admin dashboard with Firebase auth.' },
      { icon: 'ti ti-database', text: 'Migrated static SPA → self-hosted Strapi CMS on Railway, cutting maintenance overhead.' },
      { icon: 'ti ti-robot', text: 'Built an AI-powered CMS interface (OpenAI + Strapi) so coaches manage content via natural language.' },
    ],
  },
]
