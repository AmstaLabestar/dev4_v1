import { ExternalLink } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import Tag from "../ui/Tag";

const Experience = () => {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <Section id="experience" index="03" heading={experience.heading} intro={experience.intro}>
      <ol className="space-y-px overflow-hidden rounded-md border border-border bg-border">
        {experience.items.map((item, index) => (
          <Reveal key={item.id} as="li" delay={index * 60} className="block bg-surface p-5 md:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-fg">
                {item.role} ·{" "}
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border-strong underline-offset-4 hover:decoration-accent"
                  >
                    {item.company}
                    <ExternalLink className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  item.company
                )}
              </h3>
              <p className="meta">
                {item.period} · {item.location}
              </p>
            </div>

            <p className="mt-3 max-w-prose text-sm text-fg-subtle">{item.context}</p>

            <ul className="mt-4 max-w-prose space-y-2">
              {item.contributions.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-fg-muted">
                  <span
                    className="mt-2 h-px w-3 shrink-0 bg-border-strong"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
