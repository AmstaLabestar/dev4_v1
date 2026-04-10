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

### Déploiement automatique

Un workflow GitHub Actions est présent dans :

```bash
.github/workflows/deploy.yml
```

À chaque `push` sur `main`, GitHub Actions :

1. installe les dépendances
2. build le projet
3. publie automatiquement `dist` sur GitHub Pages

### Déploiement manuel

Commande disponible si tu veux republier à la main :

```bash
npm run deploy
```

Cette commande publie le contenu de `dist` sur la branche `gh-pages`.

## Configuration GitHub Pages

Dans le dépôt GitHub :

1. Ouvrir `Settings > Pages`
2. Choisir `GitHub Actions` comme source

## Fichiers importants

- `src/data/portfolio.ts` : contenu principal du portfolio
- `src/components/` : sections UI
- `public/CV_Hamza_BIKIENGA.pdf` : CV affiché dans le viewer
- `public/cv-viewer.html` : page de visualisation du CV
- `vite.config.ts` : configuration Vite et base GitHub Pages

## Notes

- Le CV est visible via un viewer intégré, sans lien de téléchargement direct depuis l’interface.
- Le thème principal utilise une palette bleu ciel avec support du mode sombre.
