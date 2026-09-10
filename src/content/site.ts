/**
 * Constantes non traduisibles, partagees par les deux langues.
 * Source unique de verite pour les liens : aucun composant ne code une URL en dur.
 */
export const site = {
  url: "https://amstalabestar.github.io/dev4_v1/",
  author: "Hamza Bikienga",
  email: "labestar04@gmail.com",
  github: "https://github.com/AmstaLabestar",
  linkedin: "https://www.linkedin.com/in/hamza-bikienga-7b3b152aa/",
  cv: "cv-viewer.html",
} as const;

/**
 * Marqueur reserve aux informations non encore verifiees.
 *
 * Aucune n'est en attente aujourd'hui : ces constantes restent disponibles pour
 * un futur ajout de contenu non confirme, afin qu'il soit visible a l'ecran
 * plutot qu'invente. `grep -rn "A_VERIFIER" src/content` pour les lister.
 */
export const A_VERIFIER = "à confirmer";
export const A_VERIFIER_EN = "to be confirmed";
