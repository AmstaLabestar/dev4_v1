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
            title="Un profil plus oriente execution que simple experimentation"
            description="Le portfolio doit montrer que je sais concevoir, developper, livrer et deployer. Cette section pose les preuves les plus rapides a comprendre."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[2rem] border border-base-300 bg-base-100 p-6"
              >
                <h3 className="text-xl font-semibold text-base-content">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-base-content/70">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Experience"
            title="Ce que j'ai deja pris en charge"
            description="Au lieu d'afficher seulement des logos de technologies, le portfolio doit presenter les vraies responsabilites deja gerees sur des missions concretes."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[2rem] border border-base-300 bg-base-100 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-base-content">{experience.title}</h3>
                  <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70">
                    {experience.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-base-content/70">{experience.summary}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-base-content/75">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
