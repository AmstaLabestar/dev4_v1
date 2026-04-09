import { Check } from "lucide-react";
import { expertise } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 md:py-24">
      <div className="section-shell rounded-[2.25rem] bg-white/55 px-5 py-8 md:px-8 md:py-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Expertise"
              title="Ce que j'apporte a un projet"
              description="Le portfolio doit rendre visible a la fois la competence technique, la capacite de delivery et l'attention portee a l'experience utilisateur, surtout sur mobile."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {expertise.map((item) => (
              <article key={item} className="surface-panel rounded-[2rem] p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium leading-7 text-slate-800">{item}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
