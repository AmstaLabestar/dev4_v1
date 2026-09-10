import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import portrait from "../../assets/profil.webp";
import { site } from "../../content/site";
import { useLanguage } from "../../hooks/useLanguage";

/**
 * Hero volontairement sobre : nom, titre, proposition de valeur, deux actions
 * et les liens professionnels. Aucune statistique invérifiable, aucun badge
 * decoratif. Tout ce qu'un recruteur doit lire en dix secondes tient ici.
 */
const Hero = () => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section id="top" className="shell pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="flex items-center gap-4">
        <img
          src={portrait}
          alt=""
          aria-hidden="true"
          width={56}
          height={56}
          decoding="async"
          fetchPriority="high"
          className="h-14 w-14 rounded-sm border border-border object-cover"
        />
        <div>
          <h1 className="text-xl font-semibold md:text-2xl">{hero.name}</h1>
          <p className="mt-0.5 font-mono text-xs text-fg-muted">{hero.role}</p>
        </div>
      </div>

      <p className="mt-8 max-w-prose text-lg leading-relaxed text-fg md:mt-10 md:text-xl md:leading-relaxed">
        {hero.valueProposition}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="#projets"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
        >
          {hero.ctaProjects}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-border-strong bg-surface px-5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {hero.ctaContact}
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        {[
          { href: site.github, label: "GitHub", Icon: Github, external: true },
          { href: site.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
          { href: site.cv, label: hero.ctaCv, Icon: FileText, external: true },
        ].map(({ href, label, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bandeau de stack : la reponse immediate a "qu'est-ce qu'il sait faire ?" */}
      <div className="mt-12 border-t border-border pt-6 md:mt-16">
        <p className="meta">{hero.stackLabel}</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {hero.stack.map((item) => (
            <li key={item} className="font-mono text-sm text-fg-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
