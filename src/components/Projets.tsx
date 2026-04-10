import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Projets = () => {
  return (
    <section id="projets" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Projets"
        title="Des projets qui prouvent ma capacité à livrer dans des contextes variés"
        description="Chaque fiche résume le contexte, la réponse apportée et la valeur que j’ajoute quand il faut concevoir, exécuter puis livrer proprement."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="surface-panel rounded-[2rem] p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {project.category}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-base-content">{project.title}</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
              <div className="rounded-[1.25rem] bg-base-100/55 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Problème</p>
                <p className="mt-2 text-sm leading-6 text-base-content/75 md:leading-7">{project.problem}</p>
              </div>

              <div className="rounded-[1.25rem] bg-base-100/55 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solution</p>
                <p className="mt-2 text-sm leading-6 text-base-content/75 md:leading-7">{project.solution}</p>
              </div>

              <div className="rounded-[1.25rem] border border-primary/10 bg-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Valeur apportée</p>
                <p className="mt-2 text-sm leading-6 text-base-content/85 md:leading-7">{project.value}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-base-300 bg-base-100/80 px-3 py-2 text-xs font-medium text-base-content/75"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/80 px-4 py-2 text-sm font-semibold text-base-content transition hover:border-primary hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projets;
