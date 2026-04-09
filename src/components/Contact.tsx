import { FileText, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  { label: "Envoyer un email", href: "mailto:labestar04@gmail.com", icon: Mail },
  {
    label: "Voir GitHub",
    href: "https://github.com/AmstaLabestar?tab=repositories",
    icon: Github,
  },
  {
    label: "Voir LinkedIn",
    href: "https://www.linkedin.com/in/hamza-bikienga-7b3b152aa/",
    icon: Linkedin,
  },
  { label: "Consulter le CV", href: "/CV_Hamza_BIKIENGA.pdf", icon: FileText },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-shell rounded-[2.25rem] border border-sky-300/20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-6 md:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Disponible pour discuter d'un produit, d'une mission ou d'une refonte"
          description="Le site doit se terminer sur un appel a l'action simple et direct. Si le visiteur est convaincu, il doit savoir tout de suite comment me contacter."
          invert
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-[1.5rem] border border-sky-200/12 bg-[rgba(125,211,252,0.12)] px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition hover:border-sky-300 hover:bg-[rgba(125,211,252,0.18)] hover:text-white"
              >
                <Icon className="h-5 w-5 text-sky-300" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
