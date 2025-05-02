# Étape 1 : Image de base
FROM node:18

# Étape 2 : Dossier de travail
WORKDIR /app

# Étape 3 : Copier tous les fichiers
COPY . .

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Générer Prisma client & seed la BDD
RUN npm run railway:setup

# Étape 6 : Build l'app
RUN npm run build

# Étape 7 : Lancer l’app Next.js
CMD ["npm", "start"]
