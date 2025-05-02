import { Article } from '@/types/article';
import axios from 'axios';

const isServer = typeof window === 'undefined';

// 🔁 Base URL selon contexte
const baseUrl = isServer
  ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  : '';

console.log('🔗 Base URL utilisée pour Axios:', baseUrl);

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`${baseUrl}api/articles`);
    return response.data;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des articles:', error);
    return [];
  }
};

export const getArticleById = async (id: string): Promise<Article | null> => {
  try {
    const response = await axios.get(`${baseUrl}api/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération de l'article:", error);
    return null;
  }
};
