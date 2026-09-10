import { useEffect } from "react";
import { site } from "../content/site";
import { useLanguage } from "../hooks/useLanguage";

const setMeta = (selector: string, value: string) => {
  const node = document.querySelector<HTMLMetaElement>(selector);
  if (node) node.content = value;
};

/**
 * Synchronise les metadonnees avec la langue affichee.
 *
 * Le HTML statique porte deja des valeurs completes pour les robots qui
 * n'executent pas JavaScript ; ce composant ne fait que les mettre a jour
 * lorsque le visiteur change de langue.
 */
const SeoHead = () => {
  const { locale, content } = useLanguage();

  useEffect(() => {
    document.title = content.meta.title;

    setMeta('meta[name="description"]', content.meta.description);
    setMeta('meta[property="og:title"]', content.meta.title);
    setMeta('meta[property="og:description"]', content.meta.description);
    setMeta('meta[property="og:image:alt"]', content.meta.ogAlt);
    setMeta('meta[property="og:locale"]', locale === "fr" ? "fr_FR" : "en_US");
    setMeta('meta[name="twitter:title"]', content.meta.title);
    setMeta('meta[name="twitter:description"]', content.meta.description);

    // Donnees structurees : la fiche Person est le format le plus directement
    // exploitable pour un portfolio personnel.
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.author,
      url: site.url,
      jobTitle: content.hero.role,
      description: content.meta.description,
      email: `mailto:${site.email}`,
      sameAs: [site.github, site.linkedin],
      knowsAbout: content.hero.stack,
    };

    let script = document.getElementById("json-ld-person");
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld-person";
      (script as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [locale, content]);

  return null;
};

export default SeoHead;
