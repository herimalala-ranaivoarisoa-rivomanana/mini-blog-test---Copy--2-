import { Article } from '@/types/article';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`${baseUrl}/api/articles`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return [];
  }
};

export const getArticleById = async (id: string): Promise<Article | null> => {
  try {
    const response = await axios.get(`${baseUrl}/api/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return null;
  }
};
