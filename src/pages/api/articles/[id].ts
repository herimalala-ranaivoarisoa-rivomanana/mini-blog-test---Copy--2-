import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'ID invalide.' });
  }

  switch (method) {
    case 'GET':
      try {
        const article = await prisma.article.findUnique({
          where: { id },
        });

        if (!article) {
          return res.status(404).json({ message: 'Article non trouvé.' });
        }

        return res.status(200).json(article);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erreur serveur.' });
      }

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Méthode ${method} non autorisée.`);
  }
}
