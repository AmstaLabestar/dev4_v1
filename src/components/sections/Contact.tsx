import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { site } from "../../content/site";
import { useLanguage } from "../../hooks/useLanguage";
import Section from "../ui/Section";

/**
 * Pas de formulaire : un mailto direct est plus rapide pour le visiteur et
 * ne demande ni backend ni service tiers a maintenir.
 */
const Contact = () => {
  const { content } = useLanguage();
  const { contact, education } = content;

  return (
    <Section id="contact" index="06" heading={contact.heading} intro={contact.intro}>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <ul className="space-y-2">
            {contact.availabilityFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-fg-muted">
                <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-sm bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {contact.email}
          </a>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {[
              { href: site.github, label: contact.githubLabel, Icon: Github },
              { href: site.linkedin, label: contact.linkedinLabel, Icon: Linkedin },
              { href: site.cv, label: contact.cvLabel, Icon: FileText },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* La formation reste visible sans occuper une section entiere. */}
        <div>
          <h3 className="meta">{education.heading}</h3>
          <ul className="mt-3 space-y-px overflow-hidden rounded-md border border-border bg-border">
            {education.items.map((item) => (
              <li key={item.id} className="bg-surface px-4 py-3">
                <p className="text-sm font-medium text-fg">{item.title}</p>
                <p className="mt-1 text-sm text-fg-muted">{item.institution}</p>
                <p className="meta mt-1">{item.period}</p>
                {item.detail ? (
                  <p className="mt-2 text-sm text-fg-muted">{item.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
