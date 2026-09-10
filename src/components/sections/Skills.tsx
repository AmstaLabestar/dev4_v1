import { useLanguage } from "../../hooks/useLanguage";
import type { SkillLevel } from "../../types/portfolio";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

/**
 * Le niveau est signale par un point plein / demi / vide, doublé par un
 * `title` textuel : l'information ne repose jamais sur la seule couleur.
 */
const levelDot: Record<SkillLevel, string> = {
  core: "bg-accent",
  working: "bg-fg-subtle",
  learning: "border border-border-strong bg-transparent",
};

const Skills = () => {
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <Section id="competences" index="02" heading={skills.heading} intro={skills.intro} muted>
      {/* Legende : sans elle, une graduation ne veut rien dire. */}
      <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-2">
        {(Object.keys(skills.legend) as SkillLevel[]).map((level) => (
          <li key={level} className="flex items-center gap-2 text-xs text-fg-muted">
            <span className={`h-2 w-2 shrink-0 rounded-full ${levelDot[level]}`} aria-hidden="true" />
            {skills.legend[level]}
          </li>
        ))}
      </ul>

      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
        {skills.groups.map((group, index) => (
          <Reveal key={group.id} delay={index * 60} className="bg-surface p-5">
            <h3 className="text-base font-semibold text-fg">{group.label}</h3>
            <p className="mt-1 text-xs text-fg-subtle">{group.note}</p>

            <ul className="mt-4 space-y-2">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2.5">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${levelDot[skill.level]}`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm text-fg-muted">{skill.name}</span>
                  <span className="sr-only">— {skills.legend[skill.level]}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Separation nette entre competences et centres d'interet. */}
      <div className="mt-10 rounded-md border border-dashed border-border p-5">
        <h3 className="text-base font-semibold text-fg">{skills.exploring.heading}</h3>
        <p className="mt-1 max-w-prose text-xs text-fg-subtle">{skills.exploring.note}</p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {skills.exploring.items.map((item) => (
            <li key={item} className="font-mono text-sm text-fg-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Skills;
