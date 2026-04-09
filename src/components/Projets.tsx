import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Projets = () => {
  return (
    <section id="projets" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Projets"
        title="Une selection de projets qui met en avant la livraison"
        description="La selection doit montrer plusieurs contextes de travail: entreprise, mobile, freelance et projet personnel. Le plus important est le role joue et la capacite a amener le produit jusqu'en production."
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
            <p className="mt-4 text-sm leading-7 text-base-content/75">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-base-300 bg-base-100/80 px-3 py-2 text-xs font-medium text-base-content/75"
                >
                  {tag}
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
