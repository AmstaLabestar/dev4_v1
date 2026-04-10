# Portfolio Dev4

Portfolio personnel de Hamza Bikienga, développé avec React, TypeScript, Vite et Tailwind CSS.

Le site met en avant :
- des projets web et mobiles
- des réalisations en contexte entreprise
- des compétences orientées produit, delivery et mise en production
- un mode clair/sombre avec identité visuelle bleu ciel

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- Framer Motion
- Lucide React

## Lancer le projet en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

Le build est généré dans le dossier `dist`.

## Prévisualiser le build

```bash
npm run preview
```

## Déploiement

Le projet est configuré pour être déployé sur GitHub Pages avec la base :

```ts
/dev4_v1/
```

Commande de déploiement :

```bash
npm run deploy
```

Cette commande publie le contenu de `dist` sur la branche `gh-pages`.

## Configuration GitHub Pages

Dans le dépôt GitHub :

1. Ouvrir `Settings > Pages`
2. Choisir `Deploy from a branch`
3. Sélectionner la branche `gh-pages`
4. Choisir le dossier `/ (root)`

## Fichiers importants

- `src/data/portfolio.ts` : contenu principal du portfolio
- `src/components/` : sections UI
- `public/CV_Hamza_BIKIENGA.pdf` : CV affiché dans le viewer
- `public/cv-viewer.html` : page de visualisation du CV
- `vite.config.ts` : configuration Vite et base GitHub Pages

## Notes

- Le CV est visible via un viewer intégré, sans lien de téléchargement direct depuis l’interface.
- Le thème principal utilise une palette bleu ciel avec support du mode sombre.
