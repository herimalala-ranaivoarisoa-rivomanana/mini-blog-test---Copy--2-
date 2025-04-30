import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description, content, image } = req.body;

    if (!title || !description || !content || !image) {
      return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
      const newArticle = await prisma.article.create({
        data: {
          title,
          description,
          content,
          image,
        },
      });
      res.status(201).json(newArticle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la création de l’article.' });
    }
  } else if (req.method === 'GET') {
    try {
      const articles = await prisma.article.findMany({});
      return res.status(200).json(articles);
    } catch (error) {
      console.error('Erreur dans GET /api/articles:', error);  // 🔍 log utile
      return res.status(500).json({ message: 'Erreur serveur lors de la récupération des articles.' });
    }
  } else {
    res.status(405).end();
  }
}

