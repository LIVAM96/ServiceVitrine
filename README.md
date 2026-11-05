# Mirosotech Portfolio

Site vitrine statique de Liva Randrianivoson — développeur freelance spécialisé dans les sites vitrines statiques pour artisans, commerçants et indépendants.

Domaine : **miroso.tech**

## Stack
- [Astro](https://astro.build) — générateur de site statique
- [Tailwind CSS](https://tailwindcss.com) — styles utilitaires
- Hébergement recommandé : Netlify ou Vercel (offre gratuite)

## Installation locale

```bash
# 1. Entrer dans le dossier
cd miroso-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Le site est alors accessible sur `http://localhost:4321`.

## Build pour la production

```bash
npm run build
```

Le site statique est généré dans le dossier `dist/`.

## Déploiement

### Netlify (recommandé)
1. Pousse le code sur GitHub.
2. Connecte ton dépôt à Netlify.
3. Build command : `npm run build`
4. Publish directory : `dist`
5. Ajoute ton domaine `miroso.tech` dans les paramètres de domaine Netlify.

### Vercel
1. Importe ton dépôt GitHub sur Vercel.
2. Le framework Astro est détecté automatiquement.
3. Ajoute `miroso.tech` dans les réglages de domaine.

## Formulaire de contact

Le composant `ContactForm` utilise [Formspree](https://formspree.io).
1. Crée un compte gratuit sur Formspree.
2. Crée un nouveau formulaire et copie l'URL de l'endpoint.
3. Remplace la valeur `action` dans `src/components/ContactForm.astro`.

## Mentions légales & RGPD

La page `/legal` contient les mentions légales et la politique de confidentialité. Adapte les informations (nom, adresse, email) selon ta situation juridique avant de mettre en ligne.
