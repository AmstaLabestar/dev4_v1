import { Check } from "lucide-react";
import { expertise } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 md:py-24">
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
            <article key={item} className="rounded-[2rem] border border-base-300 bg-base-100 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium leading-7 text-base-content/80">{item}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
