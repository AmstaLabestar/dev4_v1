import { Mail, Github, Linkedin, FileText } from "lucide-react";
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
      <div className="rounded-[2rem] border border-base-300 bg-base-100 p-6 md:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Disponible pour discuter d'un produit, d'une mission ou d'une refonte"
          description="Le site doit se terminer sur un appel a l'action simple et direct. Si le visiteur est convaincu, il doit savoir tout de suite comment me contacter."
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
                className="flex items-center gap-3 rounded-[1.5rem] border border-base-300 px-5 py-4 text-sm font-semibold text-base-content transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-5 w-5" />
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
