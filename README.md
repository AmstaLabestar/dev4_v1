# Portfolio — Hamza Bikienga

Portfolio personnel d'un ingénieur logiciel orienté backend et DevOps.
Site statique bilingue (FR/EN), à double thème, déployé sur GitHub Pages.

## Stack

| Rôle | Choix |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styles | Tailwind CSS 3, tokens CSS maison |
| Icônes | lucide-react |
| CI/CD | GitHub Actions → GitHub Pages |

Trois dépendances de production seulement : `react`, `react-dom`, `lucide-react`.
Ni framework CSS de composants, ni bibliothèque d'animation : les apparitions
utilisent `IntersectionObserver` et une keyframe CSS.

## Démarrer

```bash
npm install
npm run dev
```

## Vérifier, construire, prévisualiser

```bash
npx tsc --noEmit   # typage
npm run lint       # eslint
npm run build      # build de production dans dist/
npm run preview    # prévisualisation du build
```

Ces trois vérifications sont rejouées par la CI avant tout déploiement.

## Structure

```
src/
  types/portfolio.ts        Modèle de données. Les deux langues sont validées contre lui.
  content/
    site.ts                 Constantes partagées : URL, email, liens sociaux.
    fr.ts / en.ts           Contenu éditorial de chaque langue.
    projects.fr.ts / .en.ts Projets et études de cas.
  i18n/                     Contexte de langue et provider.
  hooks/                    useTheme, useLanguage, useActiveSection.
  components/
    layout/                 Header, Footer.
    sections/               Une section de page par fichier.
    ui/                     Primitives réutilisables (Section, Tag, Reveal, toggles).
```

### Modifier le contenu

Tout le texte vit dans `src/content/`. Aucun composant ne contient de chaîne
éditoriale ni d'URL en dur.

**Une modification faite en français doit l'être aussi en anglais** : les deux
fichiers sont typés par `SiteContent`, donc une clé oubliée fait échouer
`tsc --noEmit` — et donc la CI.

### Informations à confirmer

Toute valeur non vérifiée doit porter le marqueur `A_VERIFIER` (`A_VERIFIER_EN`
côté anglais), défini dans `src/content/site.ts`. Elle reste alors visible à
l'écran tant qu'elle n'est pas remplacée — plutôt que d'être inventée.

```bash
grep -rn "A_VERIFIER" src/content
```

Aucune information n'est en attente actuellement.

## Design system

Les couleurs sont définies une seule fois, sous forme de tokens CSS dans
`src/index.css`, et exposées à Tailwind par `tailwind.config.js`.

- **Aucune couleur en dur dans un composant.** Les deux thèmes se déduisent des
  mêmes noms de tokens, ce qui garantit leur parité.
- **Trois rayons de bordure** : `sm` (6px), `md` (10px), `lg` (16px).
- **Une police de texte** (Inter) et **une monospace** (JetBrains Mono),
  réservée aux métadonnées techniques.
- **Une seule couleur d'accent**, utilisée pour l'action et l'état, jamais pour
  la décoration.

Le thème suit la préférence système au premier chargement, puis le choix
explicite du visiteur (`localStorage`). Idem pour la langue.

## Accessibilité

- Une seule `h1`, hiérarchie `h2`/`h3` respectée.
- Lien d'évitement vers le contenu principal.
- Cibles tactiles ≥ 44px.
- `prefers-reduced-motion` neutralise toutes les animations.
- Le niveau de compétence n'est jamais porté par la seule couleur.

## Déploiement

Le workflow `.github/workflows/deploy.yml` s'exécute à chaque `push` sur `main` :
typage → lint → build → publication sur GitHub Pages.

Dans `Settings > Pages`, la source doit être **GitHub Actions**.

La base de déploiement est définie dans `vite.config.ts` :

```ts
base: '/dev4_v1/'
```

Déploiement manuel disponible avec `npm run deploy` (publie `dist` sur la
branche `gh-pages`).

## Fichiers publics

- `public/CV_Hamza_BIKIENGA.pdf` — CV affiché par le viewer.
- `public/cv-viewer.html` — page de consultation du CV, hors application React.
- `public/robots.txt`, `public/sitemap.xml` — indexation.
