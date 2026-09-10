import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Numero affiche en mono, a la maniere d'un sommaire technique. */
  index: string;
  heading: string;
  intro?: string;
  children: ReactNode;
  /** Fond alterne, pour rythmer la page sans recourir a un degrade. */
  muted?: boolean;
};

/**
 * Enveloppe de section : garantit une hierarchie de titres coherente
 * (une seule h1 dans le Hero, puis h2 ici, h3 dans les cartes) et un
 * rythme vertical identique partout.
 */
const Section = ({ id, index, heading, intro, children, muted = false }: SectionProps) => {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-border py-16 md:py-24 ${muted ? "bg-surface-2" : ""}`}
    >
      <div className="shell">
        <div className="mb-10 max-w-prose md:mb-14">
          <p className="meta">{index}</p>
          <h2 id={headingId} className="mt-3 text-2xl md:text-3xl">
            {heading}
          </h2>
          {intro ? <p className="mt-4 text-base text-fg-muted">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
