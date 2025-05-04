# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

# Procédé de création de l'app crud avec react router V7

<!-- Ressource de code  -->

(https://www.youtube.com/watch?v=waI5CDisiuM&t=226s&ab_channel=PedroTech)
(https://github.com/machadop1407/React-Router-V7-CRUD-App)

<!-- 1er étape  -->

Initialiser le projet

[documentation de tailwindCSS (https://tailwindcss.com/docs/installation/framework-guides/react-router)]

<!-- 2ème étape  -->

Installation de supabase
[voir la doc sur (https://supabase.com/)]

<!-- 3ème faire les routes  -->

faire les routes
detruire le "le fichier home du dossier routes" et le dossier welcome
Créer deux pages et faire la navabar dans le fichier route.tsx

<!-- 4ème faire la navbar dans le fichier root.tsx directement  -->
