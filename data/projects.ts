export type ProjectHighlight = {
  icon: string;
  text: string;
  metric?: string;
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  cardMetric: string | null;
  cardDesc: string;
  tech: string[];
  repo: "public" | "private" | null;
  repoUrl?: string;
  siteUrl?: string;
  siteLabel?: string;
  summary: string;
  highlights: ProjectHighlight[];
  howItWorks?: string;
  whatILearned?: string;
};

export const projects: Project[] = [
  {
    slug: "alma-ehr",
    title: "AlmaEHR",
    tag: "HEALTHCARE · EHR",
    cardMetric: "~75%",
    cardDesc: "Built to replace a third-party EHR for a telehealth startup, cutting running costs by {metric}.",
    tech: [
      "Next.js",
      "Node · Express",
      "FHIR R4",
      "Cloud Healthcare API",
      "Cloud Run",
      "BigQuery",
      "Cloud SQL",
      "Firebase",
      "OAuth 2.0",
      "GoHighLevel",
    ],
    repo: "private",
    siteLabel: "Internal platform",
    summary:
      "Built with a two-person engineering team to replace DrChrono, AlmaEHR is a full-stack platform on Google Cloud using Next.js, Node/Express, and the Cloud Healthcare API. It adopts FHIR R4 for interoperability across a layered service architecture spanning practitioner, healing center, and patient portals, cutting running costs by roughly 75%.",
    highlights: [
      {
        icon: "ti ti-api",
        text: "Built {metric} Express REST endpoints on a layered service architecture, adopting FHIR R4 for interoperability.",
        metric: "60+",
      },
      { icon: "ti ti-trending-down", text: "Cut EHR running costs by {metric} versus the third-party system it replaced.", metric: "~75%" },
      {
        icon: "ti ti-shield-lock",
        text: "RBAC middleware using Firebase JWT for authentication and a custom user_roles layer to enforce HIPAA-compliant access across practitioner, healing center, and patient portals.",
      },
      { icon: "ti ti-database", text: "Dual-read pattern: BigQuery for fast paginated lists, FHIR API for real-time detail views." },
      { icon: "ti ti-refresh", text: "GoHighLevel OAuth 2.0 with token refresh and race-condition prevention for bidirectional CRM↔EHR sync." },
    ],
  },
  {
    slug: "almadelic",
    title: "Almadelic",
    tag: "TELEHEALTH",
    cardMetric: "~3.5%",
    cardDesc:
      "Built from concept to production, with 40+ pages, serverless AWS infrastructure, and a custom Stripe checkout that cut transaction fees to {metric}.",
    tech: ["React", "JavaScript", "AWS", "Stripe", "Prerender.io", "Lambda@Edge", "CloudFront", "Firebase", "Node.js", "GoHighLevel"],
    repo: "private",
    siteUrl: "https://almadelic.com",
    siteLabel: "almadelic.com",
    summary:
      "Built from concept to production for a telehealth startup, Almadelic is a React SPA on serverless AWS infrastructure. The work spanned the full product lifecycle: building and deploying 40+ pages, implementing SSR for SEO crawlability, and integrating Stripe, CRM, and EHR to support day-to-day business operations.",
    highlights: [
      {
        icon: "ti ti-layout",
        text: "Shipped 40+ responsive pages covering services, treatments, and state-specific landing pages, structured to improve ongoing organic traffic.",
      },
      {
        icon: "ti ti-brand-stripe",
        text: "Custom React + Stripe e-commerce after third-party solutions failed — first revenue, fees cut from ~6% to {metric}.",
        metric: "~3.5%",
      },
      {
        icon: "ti ti-search",
        text: "Fixed SPA crawlability by implementing Prerender.io with CloudFront and Lambda@Edge, improving crawl efficiency 5x and page delivery by 82%.",
      },
      { icon: "ti ti-plug", text: "REST integrations via API Gateway + Lambda connecting Stripe, CRM, and EHR." },
      { icon: "ti ti-settings-automation", text: "Built 40+ GoHighLevel automations for lead capture, appointment scheduling, and CRM-EHR syncing." },
    ],
  },
  {
    slug: "gardens-dispensary",
    title: "Gardens Dispensary",
    tag: "E-COMMERCE · MULTI-STATE",
    cardMetric: "2,000+",
    cardDesc:
      "Refactor that unified 17 locations, with local SEO work that pushed primary keywords to top-5 rankings and a lead-gen system that grew to {metric} leads.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Digital Ocean", "GitHub Actions", "Google Maps API"],
    repo: "private",
    siteUrl: "https://gardensdispensary.com",
    siteLabel: "gardensdispensary.com",
    summary:
      "Led a full rebrand and rebuild with a 3-person team, replacing an existing site across 17 dispensary locations in 5 states. The project spanned Next.js architecture, DevOps, WCAG compliance, local SEO, and a lead-gen system built on GoHighLevel.",
    highlights: [
      {
        icon: "ti ti-arrow-right",
        text: "Managed site migration with 301 redirects to preserve search rankings and traffic through the full rebrand.",
      },
      { icon: "ti ti-accessible", text: "WCAG compliance via Axe DevTools, hitting 95+ Lighthouse accessibility scores with zero critical errors." },
      {
        icon: "ti ti-mail",
        text: "Built a lead-gen system into GoHighLevel CRM with tagging, confirmation emails, and rewards sync, growing leads from 0 to {metric}.",
        metric: "2,000+",
      },
      {
        icon: "ti ti-search",
        text: "Local SEO via Next.js SSR, metadata, and schema markup, pushing primary keywords from page 2-3 to top-5 rankings.",
      },
    ],
  },
  {
    slug: "overland-baseball",
    title: "Overland Baseball",
    tag: "SPORTS",
    cardMetric: null,
    cardDesc: "Serverless SPA for a high-school program, later rebuilt with an AI-powered Strapi CMS so coaches manage content in natural language.",
    tech: ["React", "JavaScript", "Strapi CMS", "OpenAI", "Firebase", "AWS", "Railway"],
    repo: "public",
    repoUrl: "https://github.com/ChristianBega/Overland-Baseball-Website",
    siteUrl: "https://overlandbaseball.com",
    siteLabel: "overlandbaseball.com",
    summary:
      "Built and maintained solo for a high-school baseball program, serving players, parents, and coaching staff. Started as a serverless SPA on AWS with Firebase auth and role-based access, then rebuilt around a self-hosted Strapi CMS with an OpenAI integration.",
    highlights: [
      {
        icon: "ti ti-device-desktop",
        text: "Serverless SPA on AWS serving 30+ students, parents, and staff across public pages and a role-based admin dashboard.",
      },
      {
        icon: "ti ti-database",
        text: "Migrated from a static SPA to a self-hosted Strapi CMS on Railway, eliminating ongoing content update requests.",
      },
      { icon: "ti ti-robot", text: "Built an AI-powered CMS interface (OpenAI + Strapi) so coaches manage content in natural language." },
    ],
  },
];
