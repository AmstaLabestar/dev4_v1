import type { Project } from "../types/portfolio";

/**
 * Selection volontairement courte : cinq projets, chacun illustrant une
 * problematique differente. Chaque `status` reflete l'etat reel du projet.
 */
export const projectsFr: Project[] = [
  {
    id: "sic",
    name: "SIC",
    tagline:
      "Application fintech de transfert d'argent entre réseaux mobiles différents.",
    status: "preproduction",
    period: "Juin 2026 – Octobre 2026 · prestation",
    role: "Développeur backend et infrastructure, sur un projet mené à deux.",
    summary:
      "Backend Django/DRF traitant des transferts entre opérateurs mobiles, avec traitement asynchrone, intégration d'un agrégateur de paiement et supervision en place.",
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
          items: ["Application cliente", "Consommation de l'API en HTTPS"],
        },
        {
          kind: "api",
          label: "API",
          items: [
            "Django REST Framework",
            "Authentification et vérification par OTP",
            "Validation des requêtes",
            "Logique métier de transfert",
          ],
        },
        {
          kind: "data",
          label: "Données",
          items: ["PostgreSQL", "Modèle transactionnel", "Historique des opérations"],
        },
        {
          kind: "async",
          label: "Traitement asynchrone",
          items: ["Celery", "Redis en broker", "Tâches de transfert hors requête HTTP"],
        },
        {
          kind: "external",
          label: "Services externes",
          items: [
            "Agrégateur de paiement",
            "Webhooks entrants signés (HMAC)",
            "Opérateurs mobiles",
          ],
        },
        {
          kind: "ops",
          label: "Exploitation",
          items: [
            "Docker",
            "GitHub Actions",
            "Environnement de préproduction",
            "Sentry",
            "Grafana",
            "Uptime monitoring",
          ],
        },
      ],
      blocks: [
        {
          id: "contexte",
          label: "Contexte",
          body: [
            "Envoyer de l'argent d'un réseau mobile vers un autre reste une opération peu directe pour l'utilisateur final. SIC vise à couvrir ce cas : un transfert dont l'émetteur et le destinataire ne sont pas chez le même opérateur.",
            "Le projet a fait l'objet d'un contrat de prestation de juin à octobre 2026, mené à deux développeurs. J'y ai pris en charge le backend et l'infrastructure.",
          ],
        },
        {
          id: "probleme",
          label: "Problème",
          body: [
            "Un transfert d'argent ne peut pas être traité comme une simple écriture en base. L'opération dépend de services externes dont la réponse n'est ni immédiate ni garantie : l'agrégateur de paiement peut répondre en différé, l'opérateur destinataire peut être indisponible, et une confirmation peut arriver bien après la requête initiale.",
            "Le backend doit donc gérer des états intermédiaires, des confirmations asynchrones et des cas d'échec, sans jamais laisser une transaction dans un état ambigu.",
          ],
        },
        {
          id: "solution",
          label: "Solution",
          body: [
            "Une API REST construite avec Django REST Framework, adossée à PostgreSQL pour les données transactionnelles, et à Celery avec Redis pour tout ce qui ne peut pas être traité dans le temps d'une requête HTTP.",
            "L'intégration avec l'agrégateur de paiement passe par des appels sortants pour initier l'opération, et par des webhooks entrants pour en recevoir la confirmation. L'authentification des utilisateurs s'appuie sur une vérification par OTP.",
          ],
        },
        {
          id: "role",
          label: "Mon rôle",
          body: [
            "Conception et développement du backend : modèle de données, API REST, logique métier de transfert, authentification et OTP.",
            "Intégration de l'agrégateur de paiement et traitement des webhooks entrants.",
            "Mise en place de l'infrastructure : conteneurisation Docker, pipeline CI/CD, environnement de préproduction et supervision.",
          ],
        },
        {
          id: "defis",
          label: "Défis techniques",
          body: [
            "Intégration avec des services externes dont les délais de réponse et les formats sont imposés : c'est la principale contrainte du projet.",
            "Traitement des confirmations asynchrones via webhooks, avec la question de leur réception fiable et de leur traitement.",
            "Gestion des états d'une transaction tout au long de son cycle, y compris lorsqu'une étape échoue.",
          ],
        },
        {
          id: "decisions",
          label: "Choix techniques",
          body: [
            "Sortir le traitement des transferts du cycle requête/réponse et le confier à Celery : une requête HTTP ne doit pas attendre la réponse d'un opérateur.",
            "Redis comme broker de tâches, choisi pour rester cohérent avec le reste de l'infrastructure conteneurisée.",
            "PostgreSQL pour la garantie transactionnelle sur les opérations financières.",
            "Docker pour que l'environnement local, la préproduction et le déploiement partagent la même définition.",
          ],
        },
        {
          id: "securite",
          label: "Sécurité",
          body: [
            "Authentification des utilisateurs avec vérification par code OTP.",
            "Validation systématique des données entrantes au niveau de l'API.",
            "Webhooks entrants signés par l'agrégateur : la signature HMAC est vérifiée avant tout traitement, ce qui écarte les appels non authentifiés vers l'endpoint de confirmation.",
          ],
        },
        {
          id: "deploiement",
          label: "Déploiement",
          body: [
            "Application conteneurisée avec Docker et déployée sur un environnement de préproduction.",
            "Pipeline d'intégration continue avec GitHub Actions : les changements sont vérifiés automatiquement avant d'être déployés.",
          ],
        },
        {
          id: "monitoring",
          label: "Supervision",
          body: [
            "Sentry pour la remontée et le suivi des erreurs applicatives.",
            "Grafana pour la visualisation des métriques.",
            "Surveillance de disponibilité pour être alerté d'une indisponibilité du service.",
          ],
        },
        {
          id: "etat",
          label: "État actuel",
          body: [
            "Le développement est terminé et livré. L'application est déployée en environnement de préproduction, avec CI/CD et supervision en place.",
          ],
        },
      ],
    },
  },

  {
    id: "jobo",
    name: "Jobo",
    tagline:
      "Plateforme d'emploi mettant en relation candidats et recruteurs au Burkina Faso.",
    status: "production",
    period: "Tanga Group · 2026",
    role: "Contribution en équipe, sur le frontend comme sur le backend, dans un suivi par issues.",
    summary:
      "La plateforme agrège des offres issues de plusieurs sources, extrait automatiquement les informations d'un CV, et propose aux candidats un parcours de candidature avec score de compatibilité. Côté recruteur, elle permet de publier une offre et de consulter des profils déjà filtrés.",
    stack: ["Python", "Django"],
    links: [{ label: "Voir la plateforme", href: "https://jobo.tangagroup.com/", kind: "demo" }],
  },

  {
    id: "tangaflow",
    name: "TangaFlow",
    tagline: "SaaS de gestion du pointage des employés.",
    status: "production",
    period: "Tanga Group · 2026",
    role: "Contribution en équipe, sur le frontend comme sur le backend, dans un suivi par issues.",
    summary:
      "Plateforme SaaS permettant aux entreprises de gérer le pointage de leurs employés. Elle s'inscrit dans l'activité de Tanga Group autour de la gestion du temps de travail, y compris les dispositifs RFID et biométriques.",
    stack: ["Python", "Django"],
    links: [{ label: "Voir le produit", href: "https://tangaflow.com/", kind: "site" }],
  },

  {
    id: "djona-flash",
    name: "Djona Flash",
    tagline: "Application de livraison développée en contexte entreprise.",
    status: "production",
    period: "Neere Lab Technology · 2025 – 2026",
    role: "Développement des interfaces.",
    summary:
      "Application de livraison construite avec Laravel côté serveur et React côté interface. Mon travail a porté sur les interfaces utilisées par les livreurs et sur les écrans de suivi.",
    stack: ["Laravel", "React", "JavaScript"],
    links: [],
  },

  {
    id: "gestion-commercants",
    name: "Applications de gestion pour commerçants",
    tagline: "Outils de caisse, de stock et de suivi des ventes livrés à de petits commerçants.",
    status: "production",
    period: "2024 – 2026 · en parallèle",
    role: "Développement et livraison, seul.",
    summary:
      "Applications de gestion couvrant la caisse, le suivi du stock et les ventes, adaptées à des commerces de petite taille. Cadrage avec le commerçant, développement, mise en service puis suivi des corrections.",
    stack: ["Python", "Django", "PostgreSQL"],
    links: [],
  },
];
