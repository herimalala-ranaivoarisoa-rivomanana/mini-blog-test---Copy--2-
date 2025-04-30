import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {Article} from "@/types/article"

const AdminPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    description: '',
    image: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    
    if (!token) {
      router.push('/login');
      return;
    }

   setIsAuthenticated(true);
    
   const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Erreur de chargement des articles');
      }
    };

    fetchArticles();
  }, [router]);

  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    if (!token) return;

    try {
      await axios.post('/api/articles', newArticle, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewArticle({ title: '', content: '',image:'', description: '' });
      setError('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      setError('Erreur lors de la création de l\'article');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Page Admin</h1>

        {!isAuthenticated && <p className="text-center text-red-600">Vous devez être connecté pour accéder à cette page.</p>}

        {error && <p className="text-red-600">{error}</p>}

        <form onSubmit={handleCreateArticle} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Créer un nouvel article</h2>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded"
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="title">ImageURL</label>
            <input
              type="text"
              id="image"
              className="w-full p-2 border border-gray-300 rounded"
              value={newArticle.image}
              onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="description">Description</label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded"
              value={newArticle.description}
              onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="content">Contenu</label>
            <textarea
              id="content"
              className="w-full p-2 border border-gray-300 rounded"
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Ajouter l&apos;article
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Articles existants</h2>
          <div className="mt-4">
            {articles.length === 0 ? (
              <p>Aucun article disponible.</p>
            ) : (
              <ul>
                {articles.map((article: Article) => (
                  <li key={article.id} className="mb-2">
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p>{article.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
