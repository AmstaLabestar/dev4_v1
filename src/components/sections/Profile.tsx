import { useLanguage } from "../../hooks/useLanguage";
import Section from "../ui/Section";

const Profile = () => {
  const { content } = useLanguage();
  const { profile } = content;

  return (
    <Section id="profil" index="01" heading={profile.heading}>
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-prose space-y-5">
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-base text-fg-muted">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Faits bruts, lisibles sans lire les paragraphes. */}
        <dl className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:w-72 lg:grid-cols-1">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="bg-surface px-4 py-3">
              <dt className="meta">{fact.label}</dt>
              <dd className="mt-1 text-sm text-fg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default Profile;
