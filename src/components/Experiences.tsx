import { motion } from "framer-motion";
import { experiences, highlights } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Experiences = () => {
  return (
    <section id="experiences" className="py-16 md:py-24">
      <div className="space-y-12">
        <div>
          <SectionHeading
            eyebrow="Positionnement"
            title="Un profil qui apporte de la valeur produit, technique et delivery"
            description="Je ne viens pas seulement développer des écrans. J’aide à faire avancer un produit avec une exécution propre, une expérience utilisateur convaincante et une livraison fiable."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="surface-panel rounded-[2rem] p-6"
              >
                <h3 className="text-xl font-semibold text-base-content">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-base-content/75">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-shell rounded-[2.25rem] border border-sky-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-5 py-8 md:px-8 md:py-10">
            <SectionHeading
              eyebrow="Expérience"
              title="Ce que je peux prendre en charge concrètement"
              description="Mon expérience montre surtout une chose : je peux intervenir sur les points qui font vraiment avancer un projet, de l’interface jusqu’à la production."
              invert
            />
            <div className="grid gap-6 md:grid-cols-2">
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="rounded-[2rem] border border-sky-200/10 bg-[rgba(15,23,42,0.94)] p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                    <span className="rounded-full border border-sky-200/20 bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-950">
                      {experience.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/88">{experience.summary}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-white/90">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
