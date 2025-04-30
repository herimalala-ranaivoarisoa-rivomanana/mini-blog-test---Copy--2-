# 📝 Mini Blog – Test Next.js + TypeScript

Ce projet est une application frontend construite avec **Next.js** et **TypeScript**, qui affiche une liste d’articles depuis une source locale. Il respecte les exigences de SSR, ISR, typage strict, et optimisation des images.

---

## 🚀 Fonctionnalités

- ✅ **Page d’accueil (/**) avec liste d’articles générée en **ISR** (`getStaticProps` + `revalidate`)
- ✅ **Page de détail d’un article** (`/articles/[id]`) avec **SSG** (`getStaticPaths`, `getStaticProps`)
- ✅ Affichage optimisé des images avec `next/image`
- ✅ Navigation via `next/link` (sans balise `<a>` redondante)
- ✅ Typage fort avec TypeScript (aucun `any`, interfaces, `InferGetStaticPropsType`)
- ✅ Page 404 personnalisée si l’article n’existe pas
- ✅ Gestion du fallback lors du chargement dynamique d’un article

---

## Prerequisites

- Node.js version récente
- npm

## Installation

Clone the repository

1. Installation des dependences:

   ```bash
   npm install
   ```

2. Run database migrations and seed the database:

   ```bash
   npx prisma migrate dev --name init
   ```

3. Start in development mode:

   ```bash
   npm run start:dev
   ```

## Credentials

Les identifiants d'administration sont:

- **Username:** <admin@example.com>
- **Password:** 123456
