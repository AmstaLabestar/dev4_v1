import type { SiteContent } from "../types/portfolio";
import { projectsEn } from "./projects.en";
import { site } from "./site";

export const en: SiteContent = {
  meta: {
    title: "Hamza Bikienga — Backend & DevOps Software Engineer | Django, PostgreSQL, Docker",
    description:
      "Backend-focused software engineer. I build Django / PostgreSQL applications and take them through to production: Docker, CI/CD, VPS deployment and monitoring.",
    ogAlt: "Portfolio of Hamza Bikienga, backend and DevOps software engineer",
  },

  nav: {
    items: [
      { id: "profil", label: "Profile" },
      { id: "competences", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projets", label: "Projects" },
      { id: "methode", label: "Method" },
      { id: "contact", label: "Contact" },
    ],
    primary: "Main navigation",
    cv: "Résumé",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    skipToContent: "Skip to main content",
  },

  hero: {
    name: "Hamza Bikienga",
    role: "Software Engineer — Backend & DevOps",
    valueProposition:
      "I build server-side web applications with Django and PostgreSQL, and take them through to production: containerisation, continuous integration, deployment and monitoring.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    ctaCv: "View résumé",
    stackLabel: "Core stack",
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "CI/CD", "Linux"],
  },

  profile: {
    heading: "Profile",
    paragraphs: [
      "Software engineering graduate of the Universite Virtuelle du Burkina Faso. I work mainly on the backend: data modelling, REST APIs, business logic and integration with external services.",
      "My interest does not stop at the code. I also handle putting an application into service: containerisation with Docker, a continuous integration pipeline, VPS deployment and monitoring. That is what lets me follow an application from design through to keeping it running in production.",
      "I built this approach working on applications used in a professional setting, where debugging, maintenance and technical support matter as much as the initial development.",
    ],
    facts: [
      { label: "Looking for", value: "Backend / full-stack developer" },
      { label: "Location", value: "Ouagadougou, Burkina Faso" },
      { label: "Availability", value: "Immediate" },
      { label: "Languages", value: "French" },
    ],
  },

  skills: {
    heading: "Skills",
    intro:
      "Backend and infrastructure are my foundation. Frontend and mobile come in support, on the projects that call for them.",
    legend: {
      core: "Used regularly, on delivered projects",
      working: "Already applied in a project",
      learning: "Currently learning",
    },
    groups: [
      {
        id: "backend",
        label: "Backend",
        note: "My main area: modelling, APIs and business logic.",
        skills: [
          { name: "Python", level: "core" },
          { name: "Django", level: "core" },
          { name: "Django REST Framework", level: "core" },
          { name: "REST APIs", level: "core" },
          { name: "Celery", level: "working" },
          { name: "Redis", level: "working" },
          { name: "Laravel", level: "working" },
          { name: "NestJS", level: "working" },
        ],
      },
      {
        id: "data",
        label: "Data",
        note: "Relational modelling and querying.",
        skills: [
          { name: "PostgreSQL", level: "core" },
          { name: "SQL", level: "core" },
        ],
      },
      {
        id: "devops",
        label: "DevOps & Infrastructure",
        note: "From the Git branch to the production server.",
        skills: [
          { name: "Docker", level: "core" },
          { name: "Git / GitHub", level: "core" },
          { name: "CI/CD", level: "working" },
          { name: "GitHub Actions", level: "working" },
          { name: "Linux", level: "working" },
          { name: "VPS deployment", level: "working" },
        ],
      },
      {
        id: "observabilite",
        label: "Observability",
        note: "Knowing what an application does once it is deployed.",
        skills: [
          { name: "Sentry", level: "working" },
          { name: "Grafana", level: "working" },
          { name: "Uptime monitoring", level: "working" },
          { name: "Application logs", level: "working" },
        ],
      },
      {
        id: "frontend",
        label: "Frontend",
        note: "Interface integration and wiring to the backend, on React applications.",
        skills: [
          { name: "React", level: "working" },
          { name: "JavaScript", level: "working" },
          { name: "HTML", level: "working" },
          { name: "CSS", level: "working" },
        ],
      },
      {
        id: "mobile",
        label: "Mobile",
        note: "Mobile application development in a project setting.",
        skills: [{ name: "Flutter", level: "working" }],
      },
      {
        id: "qualite",
        label: "Quality",
        note: "What makes a project possible for someone else to pick up.",
        skills: [
          { name: "Automated tests", level: "working" },
          { name: "Code review", level: "working" },
          { name: "Git / Pull Request workflow", level: "working" },
        ],
      },
    ],
    exploring: {
      heading: "Areas I am exploring",
      note: "Topics I am currently studying and that shape where I want to go next.",
      items: [
        "Cloud computing",
        "Software architecture",
        "Cybersecurity",
        "React Native",
        "AI and agents",
        "IoT",
        "Blockchain / DePIN",
        "Agritech",
      ],
    },
  },

  experience: {
    heading: "Experience",
    intro: "Two company roles and independent contract work, on applications in service.",
    items: [
      {
        id: "tanga",
        role: "Software engineer",
        company: "Tanga Group",
        companyUrl: "https://www.tangagroup.com/",
        location: "Ouagadougou, Burkina Faso",
        period: "February 2026 – August 2026 · 7 months",
        context:
          "Tanga Group builds time and attendance systems relying on RFID badges and biometrics, along with several web products including Jobo and TangaFlow.",
        contributions: [
          "Contributed as part of the team to the group's web products, Jobo and TangaFlow, built with Django",
          "Worked on both the frontend and the backend, through an issue tracker shared with the team",
          "Developed and extended features on applications already in service",
          "Debugged and fixed issues reported by users",
          "Handled application maintenance and technical support for business users",
          "Worked within existing systems without breaking how they function",
          "Turned user needs into concrete technical changes",
        ],
        stack: ["Python", "Django", "Git"],
      },
      {
        id: "neere",
        role: "Developer",
        company: "Neere Lab Technology",
        location: "Ouagadougou, Burkina Faso",
        period: "September 2025 – January 2026 · 5 months",
        context:
          "Neere Lab Technology builds web and mobile applications for companies and individuals, with activity in cybersecurity and data.",
        contributions: [
          "Built the interfaces for Djona Flash, a delivery application made with Laravel and React",
          "Designed screens suited to field use by business users",
          "Contributed to other internal projects and to applications delivered to clients",
        ],
        stack: ["Laravel", "React", "JavaScript"],
      },
      {
        id: "freelance",
        role: "Freelance developer",
        company: "Independent work",
        location: "Ouagadougou, Burkina Faso",
        period: "2024 – 2026 · alongside other work",
        context:
          "Independent development work: management applications for small retailers, then a backend contract on the SIC fintech project.",
        contributions: [
          "Backend and infrastructure contract on SIC, a money transfer fintech application, from June to October 2026",
          "Management applications for retailers: till, stock and sales tracking",
          "Scoped the requirement with the client before development",
          "Developed, deployed and shipped the solution",
          "Followed up after delivery with fixes and small changes",
        ],
        stack: ["Python", "Django", "PostgreSQL", "Docker"],
      },
    ],
  },

  projects: {
    heading: "Projects",
    intro:
      "Five projects, each on a different problem: payment service integration, business platform, field application and management tooling.",
    statusLabels: {
      preproduction: "Deployed to staging",
      production: "In production",
      prototype: "Working prototype",
      wip: "In development",
      concept: "Concept",
    },
    roleLabel: "My role",
    stackLabel: "Stack",
    caseStudyCta: "Read the case study",
    caseStudyClose: "Collapse case study",
    architectureLabel: "Architecture",
    items: projectsEn,
    otherWork: {
      heading: "Other work",
      note: "Earlier projects, built solo.",
      items: [
        { name: "SmartCard", detail: "Web application for discounts at partner merchants." },
        {
          name: "FidelityCard",
          detail: "Presentation and pre-order page tied to SmartCard.",
        },
      ],
    },
  },

  method: {
    heading: "How I work",
    intro:
      "An application does not end at the last commit. I take on the full cycle, from analysing the need through to maintenance in production.",
    steps: [
      {
        id: "analyse",
        label: "Analysis",
        detail: "Understand the real need and the constraints before writing code.",
        tools: ["Scoping", "Use cases"],
      },
      {
        id: "architecture",
        label: "Architecture",
        detail: "Model the data, split responsibilities, choose the technical building blocks.",
        tools: ["Relational model", "REST API"],
      },
      {
        id: "developpement",
        label: "Development",
        detail: "Implement in small branches, reviewed before they are merged.",
        tools: ["Django", "DRF", "Git", "Pull Request"],
      },
      {
        id: "tests",
        label: "Tests",
        detail: "Cover sensitive business logic so it can be changed without breaking.",
        tools: ["Automated tests"],
      },
      {
        id: "ci",
        label: "Continuous integration",
        detail: "Let the machine check every change before it goes any further.",
        tools: ["GitHub Actions", "Build"],
      },
      {
        id: "deploiement",
        label: "Deployment",
        detail: "Go through a staging environment before any production release.",
        tools: ["Docker", "VPS", "Staging"],
      },
      {
        id: "monitoring",
        label: "Monitoring",
        detail: "Be alerted to an error or an outage without waiting for a user to report it.",
        tools: ["Sentry", "Grafana", "Uptime"],
      },
      {
        id: "maintenance",
        label: "Maintenance",
        detail: "Fix, evolve and keep the application usable over time.",
        tools: ["Logs", "Support"],
      },
    ],
  },

  education: {
    heading: "Education",
    items: [
      {
        id: "diplome",
        title: "Bachelor's degree in software engineering",
        institution: "Universite Virtuelle du Burkina Faso",
        period: "November 2025",
        detail: "Professional title: ingenieur de travaux en genie logiciel.",
      },
    ],
  },

  contact: {
    heading: "Contact",
    intro:
      "Email is the simplest route. You can also reach me on LinkedIn or look through my code on GitHub.",
    availabilityFor: ["Job opportunities", "Freelance work", "Technical collaborations"],
    emailLabel: "Send an email",
    email: site.email,
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    cvLabel: "Résumé",
  },

  footer: {
    rights: "All rights reserved.",
    builtWith: "React, TypeScript, Tailwind CSS. Deployed via GitHub Actions.",
  },
};
