import { useId, useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import type { Project, ProjectStatus } from "../../types/portfolio";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import Tag from "../ui/Tag";

/** Le statut est une information, pas une decoration : il a sa propre couleur de sens. */
const statusStyle: Record<ProjectStatus, string> = {
  production: "border-positive/40 text-positive",
  preproduction: "border-accent/40 text-accent",
  prototype: "border-caution/40 text-caution",
  wip: "border-caution/40 text-caution",
  concept: "border-border-strong text-fg-subtle",
};

const ProjectLinks = ({ project }: { project: Project }) => {
  if (project.links.length === 0) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-sm border border-border bg-surface px-3 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
        >
          {link.kind === "repo" ? (
            <Github className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          )}
          {link.label}
        </a>
      ))}
    </div>
  );
};

const ProjectMeta = ({ project }: { project: Project }) => {
  const { content } = useLanguage();

  return (
    <>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center rounded-sm border px-2 py-1 font-mono text-2xs uppercase ${statusStyle[project.status]}`}
        >
          {content.projects.statusLabels[project.status]}
        </span>
        <span className="meta">{project.period}</span>
      </div>

      <dl className="mt-4">
        <dt className="meta">{content.projects.roleLabel}</dt>
        <dd className="mt-1 text-sm text-fg-muted">{project.role}</dd>
      </dl>

      <div className="mt-4">
        <p className="meta">{content.projects.stackLabel}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </>
  );
};

/** Projet mis en avant : pleine largeur, avec son etude de cas depliable. */
const FeaturedProject = ({ project }: { project: Project }) => {
  const { content } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Reveal as="article" className="block rounded-md border border-border bg-surface p-5 md:p-8">
      <h3 className="text-xl font-semibold text-fg md:text-2xl">{project.name}</h3>
      <p className="mt-2 max-w-prose text-base text-fg-muted">{project.tagline}</p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(0,380px)] lg:gap-12">
        <div>
          <p className="max-w-prose text-sm text-fg-muted">{project.summary}</p>
          <ProjectMeta project={project} />
          <ProjectLinks project={project} />
        </div>

        {project.caseStudy ? (
          <ArchitectureDiagram
            layers={project.caseStudy.architecture}
            label={content.projects.architectureLabel}
          />
        ) : null}
      </div>

      {project.caseStudy ? (
        <>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-sm border border-border-strong bg-surface-2 px-4 text-sm font-medium text-fg transition-colors hover:bg-border/40"
          >
            {open ? content.projects.caseStudyClose : content.projects.caseStudyCta}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>

          <div id={panelId} hidden={!open} className="mt-8 border-t border-border pt-8">
            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              {project.caseStudy.blocks.map((block) => (
                <div key={block.id}>
                  <h4 className="meta text-accent">{block.label}</h4>
                  <div className="mt-2 space-y-3">
                    {block.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)} className="text-sm text-fg-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </Reveal>
  );
};

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
  <Reveal as="article" delay={delay} className="flex flex-col bg-surface p-5">
    <h3 className="text-lg font-semibold text-fg">{project.name}</h3>
    <p className="mt-2 text-sm text-fg-muted">{project.tagline}</p>
    <ProjectMeta project={project} />
    <div className="mt-auto">
      <ProjectLinks project={project} />
    </div>
  </Reveal>
);

const Projects = () => {
  const { content } = useLanguage();
  const { projects } = content;

  const featured = projects.items.find((project) => project.featured);
  const others = projects.items.filter((project) => !project.featured);

  return (
    <Section id="projets" index="04" heading={projects.heading} intro={projects.intro}>
      {featured ? <FeaturedProject project={featured} /> : null}

      <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {others.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 60} />
        ))}
      </div>

      {/* Realisations citees sans fiche : elles completent le parcours sans le diluer. */}
      <div className="mt-10 border-t border-border pt-6">
        <h3 className="meta">{projects.otherWork.heading}</h3>
        <p className="mt-2 max-w-prose text-xs text-fg-subtle">{projects.otherWork.note}</p>
        <ul className="mt-4 space-y-2">
          {projects.otherWork.items.map((item) => (
            <li key={item.name} className="max-w-prose text-sm text-fg-muted">
              <span className="font-medium text-fg">{item.name}</span> — {item.detail}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
