import { useEffect, useState } from "react";

/**
 * Renvoie l'identifiant de la section actuellement en vue.
 * Utilise pour marquer le lien de navigation correspondant : un visiteur
 * doit toujours savoir ou il se trouve dans la page.
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // On retient la section visible la plus haute dans la page.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      // La bande d'observation vise le tiers superieur du viewport.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};
