import type { SiteContent } from "../types/portfolio";
import { projectsFr } from "./projects.fr";
import { site } from "./site";

export const fr: SiteContent = {
  meta: {
    title: "Hamza Bikienga — Ingénieur logiciel Backend & DevOps | Django, PostgreSQL, Docker",
    description:
      "Ingénieur logiciel orienté backend. Je conçois des applications Django / PostgreSQL et je les mène jusqu'à la production : Docker, CI/CD, déploiement VPS et supervision.",
    ogAlt: "Portfolio de Hamza Bikienga, ingénieur logiciel backend et DevOps",
  },

  nav: {
    items: [
      { id: "profil", label: "Profil" },
      { id: "competences", label: "Compétences" },
      { id: "experience", label: "Expérience" },
      { id: "projets", label: "Projets" },
      { id: "methode", label: "Méthode" },
      { id: "contact", label: "Contact" },
    ],
    primary: "Navigation principale",
    cv: "CV",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    skipToContent: "Aller au contenu principal",
  },

  hero: {
    name: "Hamza Bikienga",
    role: "Ingénieur logiciel — Backend & DevOps",
    valueProposition:
      "Je conçois des applications web côté serveur avec Django et PostgreSQL, et je les accompagne jusqu'en production : conteneurisation, intégration continue, déploiement et supervision.",
    ctaProjects: "Voir les projets",
    ctaContact: "Me contacter",
    ctaCv: "Consulter le CV",
    stackLabel: "Stack principale",
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "CI/CD", "Linux"],
  },

  profile: {
    heading: "Profil",
    paragraphs: [
      "Ingénieur de travaux en génie logiciel, diplômé de l'Université Virtuelle du Burkina Faso. Je travaille principalement sur le backend : modélisation des données, API REST, logique métier et intégration de services externes.",
      "Mon intérêt ne s'arrête pas au code. Je prends aussi en charge la mise en service : conteneurisation avec Docker, pipeline d'intégration continue, déploiement sur VPS et mise en place de la supervision. C'est ce qui me permet de suivre une application depuis sa conception jusqu'à son maintien en production.",
      "J'ai construit cette approche en travaillant sur des applications utilisées en contexte professionnel, où le débogage, la maintenance et le support technique comptent autant que le développement initial.",
    ],
    facts: [
      { label: "Poste recherché", value: "Développeur backend / full-stack" },
      { label: "Localisation", value: "Ouagadougou, Burkina Faso" },
      { label: "Disponibilité", value: "Immédiate" },
      { label: "Langues", value: "Français" },
    ],
  },

  skills: {
    heading: "Compétences",
    intro:
      "Backend et infrastructure constituent mon socle. Le frontend et le mobile viennent en complément, sur les projets qui le demandent.",
    legend: {
      core: "Utilisé régulièrement, sur des projets livrés",
      working: "Déjà mis en œuvre en projet",
      learning: "En cours d'apprentissage",
    },
    groups: [
      {
        id: "backend",
        label: "Backend",
        note: "Mon domaine principal : modélisation, API et logique métier.",
        skills: [
          { name: "Python", level: "core" },
          { name: "Django", level: "core" },
          { name: "Django REST Framework", level: "core" },
          { name: "API REST", level: "core" },
          { name: "Celery", level: "working" },
          { name: "Redis", level: "working" },
          { name: "Laravel", level: "working" },
          { name: "NestJS", level: "working" },
        ],
      },
      {
        id: "data",
        label: "Données",
        note: "Modélisation relationnelle et requêtage.",
        skills: [
          { name: "PostgreSQL", level: "core" },
          { name: "SQL", level: "core" },
        ],
      },
      {
        id: "devops",
        label: "DevOps & Infrastructure",
        note: "De la branche Git jusqu'au serveur de production.",
        skills: [
          { name: "Docker", level: "core" },
          { name: "Git / GitHub", level: "core" },
          { name: "CI/CD", level: "working" },
          { name: "GitHub Actions", level: "working" },
          { name: "Linux", level: "working" },
          { name: "Déploiement VPS", level: "working" },
        ],
      },
      {
        id: "observabilite",
        label: "Observabilité",
        note: "Savoir ce que fait une application une fois déployée.",
        skills: [
          { name: "Sentry", level: "working" },
          { name: "Grafana", level: "working" },
          { name: "Uptime monitoring", level: "working" },
          { name: "Logs applicatifs", level: "working" },
        ],
      },
      {
        id: "frontend",
        label: "Frontend",
        note: "Intégration d'interfaces et connexion au backend, sur des applications React.",
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
        note: "Développement d'applications mobiles en contexte projet.",
        skills: [{ name: "Flutter", level: "working" }],
      },
      {
        id: "qualite",
        label: "Qualité",
        note: "Ce qui rend un projet reprenable par quelqu'un d'autre.",
        skills: [
          { name: "Tests automatisés", level: "working" },
          { name: "Revue de code", level: "working" },
          { name: "Workflow Git / Pull Request", level: "working" },
        ],
      },
    ],
    exploring: {
      heading: "Domaines que j'explore",
      note: "Sujets sur lesquels je me forme actuellement et qui orientent la suite de mon parcours.",
      items: [
        "Cloud computing",
        "Architecture logicielle",
        "Cybersécurité",
        "React Native",
        "IA et agents",
        "IoT",
        "Blockchain / DePIN",
        "Agritech",
      ],
    },
  },

  experience: {
    heading: "Expérience",
    intro:
      "Deux expériences en entreprise et des prestations en indépendant, sur des applications en service.",
    items: [
      {
        id: "tanga",
        role: "Ingénieur logiciel",
        company: "Tanga Group",
        companyUrl: "https://www.tangagroup.com/",
        location: "Ouagadougou, Burkina Faso",
        period: "Février 2026 – Août 2026 · 7 mois",
        context:
          "Tanga Group développe des systèmes de pointage et de gestion du temps s'appuyant sur des badges RFID et sur la biométrie, ainsi que plusieurs produits web dont Jobo et TangaFlow.",
        contributions: [
          "Contribution en équipe aux produits web du groupe, Jobo et TangaFlow, développés avec Django",
          "Travail sur le frontend comme sur le backend, dans un suivi par issues partagé avec l'équipe",
          "Développement et évolution de fonctionnalités sur des applications déjà en service",
          "Débogage et correction d'anomalies remontées par les utilisateurs",
          "Maintenance applicative et support technique auprès des utilisateurs métier",
          "Prise en main de systèmes existants pour intervenir dessus sans en casser le fonctionnement",
          "Traduction de besoins utilisateurs en évolutions techniques concrètes",
        ],
        stack: ["Python", "Django", "Git"],
      },
      {
        id: "neere",
        role: "Développeur",
        company: "Neere Lab Technology",
        location: "Ouagadougou, Burkina Faso",
        period: "Septembre 2025 – Janvier 2026 · 5 mois",
        context:
          "Neere Lab Technology réalise des applications web et mobiles pour des entreprises et des particuliers, avec des activités en cybersécurité et en data.",
        contributions: [
          "Développement des interfaces de Djona Flash, une application de livraison construite avec Laravel et React",
          "Conception d'écrans adaptés à un usage métier sur le terrain",
          "Contribution à d'autres projets internes et à des applications livrées à des clients",
        ],
        stack: ["Laravel", "React", "JavaScript"],
      },
      {
        id: "freelance",
        role: "Développeur freelance",
        company: "Missions indépendantes",
        location: "Ouagadougou, Burkina Faso",
        period: "2024 – 2026 · en parallèle",
        context:
          "Prestations de développement menées en indépendant : applications de gestion pour de petits commerçants, puis une prestation backend sur le projet fintech SIC.",
        contributions: [
          "Prestation backend et infrastructure sur SIC, application fintech de transfert d'argent, de juin à octobre 2026",
          "Applications de gestion pour commerçants : caisse, suivi du stock et des ventes",
          "Cadrage du besoin avec le client avant développement",
          "Développement, déploiement et mise en service de l'application",
          "Suivi après livraison : corrections et petites évolutions",
        ],
        stack: ["Python", "Django", "PostgreSQL", "Docker"],
      },
    ],
  },

  projects: {
    heading: "Projets",
    intro:
      "Cinq projets, chacun sur une problématique différente : intégration de services de paiement, plateforme métier, application de terrain et outillage de gestion.",
    statusLabels: {
      preproduction: "Déployé en préproduction",
      production: "En production",
      prototype: "Prototype fonctionnel",
      wip: "En cours de développement",
      concept: "Conception",
    },
    roleLabel: "Mon rôle",
    stackLabel: "Stack",
    caseStudyCta: "Lire l'étude de cas",
    caseStudyClose: "Réduire l'étude de cas",
    architectureLabel: "Architecture",
    items: projectsFr,
    otherWork: {
      heading: "Autres réalisations",
      note: "Projets antérieurs, développés seul.",
      items: [
        {
          name: "SmartCard",
          detail: "Application web de réductions chez des commerçants partenaires.",
        },
        {
          name: "FidelityCard",
          detail: "Page de présentation et de précommande adossée à SmartCard.",
        },
      ],
    },
  },

  method: {
    heading: "Comment je travaille",
    intro:
      "Une application ne se termine pas au dernier commit. Je prends en charge le cycle complet, de l'analyse du besoin jusqu'à la maintenance en production.",
    steps: [
      {
        id: "analyse",
        label: "Analyse",
        detail: "Comprendre le besoin réel et les contraintes avant d'écrire du code.",
        tools: ["Cadrage", "Cas d'usage"],
      },
      {
        id: "architecture",
        label: "Architecture",
        detail:
          "Modéliser les données, découper les responsabilités, choisir les briques techniques.",
        tools: ["Modèle relationnel", "API REST"],
      },
      {
        id: "developpement",
        label: "Développement",
        detail: "Implémenter par petites branches, relues avant intégration.",
        tools: ["Django", "DRF", "Git", "Pull Request"],
      },
      {
        id: "tests",
        label: "Tests",
        detail: "Couvrir la logique métier sensible pour pouvoir modifier sans casser.",
        tools: ["Tests automatisés"],
      },
      {
        id: "ci",
        label: "Intégration continue",
        detail: "Faire vérifier chaque changement par la machine avant qu'il n'aille plus loin.",
        tools: ["GitHub Actions", "Build"],
      },
      {
        id: "deploiement",
        label: "Déploiement",
        detail: "Passer par un environnement de préproduction avant toute mise en production.",
        tools: ["Docker", "VPS", "Préproduction"],
      },
      {
        id: "monitoring",
        label: "Supervision",
        detail:
          "Être averti d'une erreur ou d'une indisponibilité sans attendre le signalement d'un utilisateur.",
        tools: ["Sentry", "Grafana", "Uptime"],
      },
      {
        id: "maintenance",
        label: "Maintenance",
        detail: "Corriger, faire évoluer et garder l'application utilisable dans la durée.",
        tools: ["Logs", "Support"],
      },
    ],
  },

  education: {
    heading: "Formation",
    items: [
      {
        id: "diplome",
        title: "Licence en génie logiciel",
        institution: "Université Virtuelle du Burkina Faso",
        period: "Novembre 2025",
        detail: "Titre professionnel : ingénieur de travaux en génie logiciel.",
      },
    ],
  },

  contact: {
    heading: "Contact",
    intro:
      "Le plus simple reste l'email. Vous pouvez aussi me joindre sur LinkedIn ou consulter mon code sur GitHub.",
    availabilityFor: [
      "Opportunités professionnelles",
      "Missions freelance",
      "Collaborations techniques",
    ],
    emailLabel: "Écrire un email",
    email: site.email,
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    cvLabel: "CV",
  },

  footer: {
    rights: "Tous droits réservés.",
    builtWith: "React, TypeScript, Tailwind CSS. Déployé via GitHub Actions.",
  },
};
