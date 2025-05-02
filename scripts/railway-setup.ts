import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'development';
const envFilePath = path.resolve(process.cwd(), `.env.${NODE_ENV}`);
const schemaPath = path.resolve(__dirname, '../prisma/schema.prisma');

// 1. Charger .env approprié
if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
  console.log(`✅ Variables d'environnement chargées depuis ${envFilePath}`);
} else {
  console.warn(`⚠️ Aucun fichier .env pour ${NODE_ENV}, exécution sans variables d'environnement.`);
}

// 2. Générer Prisma Client
try {
  console.log('📦 Génération du client Prisma...');
  execSync(`npx prisma generate --schema="${schemaPath}"`, { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Erreur lors de la génération Prisma:', error);
  process.exit(1);
}

// 3. Appliquer les migrations
try {
  console.log('📌 Application des migrations...');
  execSync(`npx prisma migrate deploy --schema="${schemaPath}"`, { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Erreur lors de l’application des migrations:', error);
  process.exit(1);
}

// 4. Seed de la base de données
try {
  console.log('🌱 Exécution du seed...');
  execSync(`npx prisma db seed`, { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Erreur lors du seed:', error);
  process.exit(1);
}

console.log('✅ Setup Railway terminé avec succès.');
