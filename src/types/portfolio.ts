/**
 * Modele de donnees du portfolio.
 *
 * Le contenu francais et anglais est valide contre ces memes interfaces :
 * les deux langues ne peuvent donc pas diverger structurellement.
 */

export type Locale = "fr" | "en";

/**
 * Niveau de maitrise, volontairement limite a trois paliers honnetes.
 * Aucun palier "expert" n'existe dans le modele.
 */
export type SkillLevel = "core" | "working" | "learning";

export interface Skill {
  name: string;
  /**
   * core     : utilise regulierement sur des projets reels
   * working  : deja utilise, a l'aise sur les cas courants
   * learning : en cours d'apprentissage, pas encore en production
   */
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  label: string;
  /** Une phrase qui situe le groupe, pour eviter la grille de logos muette. */
  note: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  /** Dates reelles, format court. Jamais un intitule vague. */
  period: string;
  /** Ce que fait l'entreprise, pour que le lecteur situe le contexte technique. */
  context: string;
  contributions: string[];
  stack: string[];
}

/**
 * Etat reel du projet. Sert a formuler prudemment et a ne jamais
 * laisser croire qu'un projet est en production s'il ne l'est pas.
 */
export type ProjectStatus = "preproduction" | "production" | "prototype" | "wip" | "concept";

export type ProjectLinkKind = "demo" | "repo" | "site";

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

/** Un maillon de l'architecture affichee pour les projets complexes. */
export type ArchLayerKind = "client" | "api" | "data" | "async" | "external" | "ops";

export interface ArchLayer {
  kind: ArchLayerKind;
  label: string;
  items: string[];
}

export interface CaseStudyBlock {
  id: string;
  label: string;
  body: string[];
}

export interface CaseStudy {
  architecture: ArchLayer[];
  blocks: CaseStudyBlock[];
}

export interface Project {
  id: string;
  name: string;
  /** Une ligne, factuelle : ce que fait le produit. */
  tagline: string;
  status: ProjectStatus;
  period: string;
  /** Solo, equipe, contribution : evite toute ambiguite sur la paternite. */
  role: string;
  summary: string;
  /** Technologies reellement utilisees sur ce projet, rien d'autre. */
  stack: string[];
  links: ProjectLink[];
  /** Un seul projet doit porter ce drapeau : il occupe toute la largeur. */
  featured?: boolean;
  caseStudy?: CaseStudy;
}

export interface MethodStep {
  id: string;
  label: string;
  detail: string;
  tools: string[];
}

export interface EducationEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  detail?: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    items: { id: string; label: string }[];
    /** Libelle du landmark de navigation, pour les lecteurs d'ecran. */
    primary: string;
    cv: string;
    menuOpen: string;
    menuClose: string;
    skipToContent: string;
  };
  hero: {
    name: string;
    role: string;
    valueProposition: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    stackLabel: string;
    stack: string[];
  };
  profile: {
    heading: string;
    paragraphs: string[];
    facts: ProfileFact[];
  };
  skills: {
    heading: string;
    intro: string;
    legend: Record<SkillLevel, string>;
    groups: SkillGroup[];
    exploring: { heading: string; note: string; items: string[] };
  };
  experience: {
    heading: string;
    intro: string;
    items: Experience[];
  };
  projects: {
    heading: string;
    intro: string;
    statusLabels: Record<ProjectStatus, string>;
    roleLabel: string;
    stackLabel: string;
    caseStudyCta: string;
    caseStudyClose: string;
    architectureLabel: string;
    items: Project[];
    /**
     * Realisations citees sans fiche complete : projets arretes ou non
     * publiables. Les mentionner reste honnete, leur donner une carte ne l'est pas.
     */
    otherWork: {
      heading: string;
      note: string;
      items: { name: string; detail: string }[];
    };
  };
  method: {
    heading: string;
    intro: string;
    steps: MethodStep[];
  };
  education: {
    heading: string;
    items: EducationEntry[];
  };
  contact: {
    heading: string;
    intro: string;
    availabilityFor: string[];
    emailLabel: string;
    email: string;
    githubLabel: string;
    linkedinLabel: string;
    cvLabel: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
