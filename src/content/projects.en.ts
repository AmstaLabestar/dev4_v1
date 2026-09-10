import type { Project } from "../types/portfolio";

/**
 * English mirror of `projects.fr.ts`. Both are validated against `Project[]`,
 * so the two languages cannot drift apart structurally.
 */
export const projectsEn: Project[] = [
  {
    id: "sic",
    name: "SIC",
    tagline: "Fintech application for money transfers between different mobile networks.",
    status: "preproduction",
    period: "June 2026 – October 2026 · contract",
    role: "Backend and infrastructure developer, on a two-person project.",
    summary:
      "Django/DRF backend handling transfers between mobile operators, with asynchronous processing, payment aggregator integration and monitoring in place.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "GitHub Actions",
      "Sentry",
      "Grafana",
    ],
    links: [],
    featured: true,
    caseStudy: {
      architecture: [
        {
          kind: "client",
          label: "Client",
          items: ["Client application", "Consumes the API over HTTPS"],
        },
        {
          kind: "api",
          label: "API",
          items: [
            "Django REST Framework",
            "Authentication and OTP verification",
            "Request validation",
            "Transfer business logic",
          ],
        },
        {
          kind: "data",
          label: "Data",
          items: ["PostgreSQL", "Transactional model", "Operation history"],
        },
        {
          kind: "async",
          label: "Asynchronous processing",
          items: ["Celery", "Redis as broker", "Transfer tasks outside the HTTP request"],
        },
        {
          kind: "external",
          label: "External services",
          items: [
            "Payment aggregator",
            "Signed inbound webhooks (HMAC)",
            "Mobile operators",
          ],
        },
        {
          kind: "ops",
          label: "Operations",
          items: [
            "Docker",
            "GitHub Actions",
            "Staging environment",
            "Sentry",
            "Grafana",
            "Uptime monitoring",
          ],
        },
      ],
      blocks: [
        {
          id: "contexte",
          label: "Context",
          body: [
            "Sending money from one mobile network to another is still not straightforward for end users. SIC targets that case: a transfer where sender and recipient are not on the same operator.",
            "The work was carried out under a service contract running from June to October 2026, by two developers. I took on the backend and the infrastructure.",
          ],
        },
        {
          id: "probleme",
          label: "Problem",
          body: [
            "A money transfer cannot be treated as a simple database write. The operation depends on external services whose response is neither immediate nor guaranteed: the payment aggregator may answer later, the receiving operator may be unavailable, and a confirmation may arrive well after the initial request.",
            "The backend therefore has to handle intermediate states, asynchronous confirmations and failure cases, without ever leaving a transaction in an ambiguous state.",
          ],
        },
        {
          id: "solution",
          label: "Solution",
          body: [
            "A REST API built with Django REST Framework, backed by PostgreSQL for transactional data, and by Celery with Redis for everything that cannot be handled within the lifetime of an HTTP request.",
            "Integration with the payment aggregator uses outbound calls to initiate the operation and inbound webhooks to receive its confirmation. User authentication relies on OTP verification.",
          ],
        },
        {
          id: "role",
          label: "My role",
          body: [
            "Designed and built the backend: data model, REST API, transfer business logic, authentication and OTP.",
            "Integrated the payment aggregator and handled inbound webhooks.",
            "Set up the infrastructure: Docker containerisation, CI/CD pipeline, staging environment and monitoring.",
          ],
        },
        {
          id: "defis",
          label: "Technical challenges",
          body: [
            "Integrating with external services whose response times and formats are imposed: this is the project's main constraint.",
            "Handling asynchronous confirmations through webhooks, including how they are reliably received and processed.",
            "Managing a transaction's state throughout its lifecycle, including when a step fails.",
          ],
        },
        {
          id: "decisions",
          label: "Technical decisions",
          body: [
            "Move transfer processing out of the request/response cycle and hand it to Celery: an HTTP request should not wait on an operator's answer.",
            "Redis as the task broker, chosen to stay consistent with the rest of the containerised infrastructure.",
            "PostgreSQL for transactional guarantees on financial operations.",
            "Docker so that local, staging and deployment environments share one definition.",
          ],
        },
        {
          id: "securite",
          label: "Security",
          body: [
            "User authentication with OTP verification.",
            "Systematic validation of incoming data at the API layer.",
            "Inbound webhooks are signed by the aggregator: the HMAC signature is verified before any processing, which rejects unauthenticated calls to the confirmation endpoint.",
          ],
        },
        {
          id: "deploiement",
          label: "Deployment",
          body: [
            "Application containerised with Docker and deployed to a staging environment.",
            "Continuous integration pipeline with GitHub Actions: changes are checked automatically before deployment.",
          ],
        },
        {
          id: "monitoring",
          label: "Monitoring",
          body: [
            "Sentry for application error reporting and tracking.",
            "Grafana for metrics visualisation.",
            "Uptime monitoring to be alerted when the service becomes unavailable.",
          ],
        },
        {
          id: "etat",
          label: "Current state",
          body: [
            "Development is complete and delivered. The application is deployed to a staging environment, with CI/CD and monitoring in place.",
          ],
        },
      ],
    },
  },

  {
    id: "jobo",
    name: "Jobo",
    tagline: "Job platform connecting candidates and recruiters in Burkina Faso.",
    status: "production",
    period: "Tanga Group · 2026",
    role: "Team contribution, on both the frontend and the backend, tracked through issues.",
    summary:
      "The platform aggregates listings from several sources, automatically extracts information from a CV, and gives candidates an application flow with a match score. On the recruiter side, it allows posting a role and reviewing pre-filtered profiles.",
    stack: ["Python", "Django"],
    links: [{ label: "View platform", href: "https://jobo.tangagroup.com/", kind: "demo" }],
  },

  {
    id: "tangaflow",
    name: "TangaFlow",
    tagline: "SaaS for managing employee time and attendance.",
    status: "production",
    period: "Tanga Group · 2026",
    role: "Team contribution, on both the frontend and the backend, tracked through issues.",
    summary:
      "SaaS platform letting companies manage their employees' clock-in and clock-out records. It sits within Tanga Group's work on time management, including RFID and biometric devices.",
    stack: ["Python", "Django"],
    links: [{ label: "View product", href: "https://tangaflow.com/", kind: "site" }],
  },

  {
    id: "djona-flash",
    name: "Djona Flash",
    tagline: "Delivery application built in a company setting.",
    status: "production",
    period: "Neere Lab Technology · 2025 – 2026",
    role: "Interface development.",
    summary:
      "Delivery application built with Laravel on the server side and React on the interface side. My work covered the interfaces used by delivery drivers and the tracking screens.",
    stack: ["Laravel", "React", "JavaScript"],
    links: [],
  },

  {
    id: "gestion-commercants",
    name: "Management apps for small retailers",
    tagline: "Point-of-sale, stock and sales tracking tools delivered to small retailers.",
    status: "production",
    period: "2024 – 2026 · alongside other work",
    role: "Built and delivered solo.",
    summary:
      "Management applications covering the till, stock tracking and sales, sized for small retail businesses. Scoping with the retailer, development, rollout, then follow-up fixes.",
    stack: ["Python", "Django", "PostgreSQL"],
    links: [],
  },
];
