import { useLanguage } from "../../hooks/useLanguage";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

/**
 * Cycle de vie d'une application, presente comme une suite numerotee.
 * L'objectif est de montrer une comprehension du cycle complet, pas de
 * revendiquer une expertise : chaque etape est accompagnee des outils reels.
 */
const Method = () => {
  const { content } = useLanguage();
  const { method } = content;

  return (
    <Section id="methode" index="05" heading={method.heading} intro={method.intro} muted>
      <ol className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
        {method.steps.map((step, index) => (
          <Reveal
            key={step.id}
            as="li"
            delay={index * 50}
            className="block bg-surface p-5"
          >
            <p className="meta">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-base font-semibold text-fg">{step.label}</h3>
            <p className="mt-2 text-sm text-fg-muted">{step.detail}</p>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              {step.tools.map((tool) => (
                <li key={tool} className="font-mono text-2xs uppercase text-fg-subtle">
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
};

export default Method;
