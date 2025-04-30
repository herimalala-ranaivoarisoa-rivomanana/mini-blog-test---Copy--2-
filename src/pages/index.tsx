import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';
import { Article } from '@/types/article';

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = async () => {
  try {
    const articles = await getAllArticles();
    return {
      props: {
        articles,
      },
      revalidate: 60, // Permet de régénérer la page après 60 secondes
    };
  } catch (error) {
    console.error('Erreur lors du chargement des articles :', error);

    // Fallback : renvoyer des données par défaut (articles vides ou simulés)
    return {
      props: {
        articles: [], // Ou tu pourrais mettre des articles simulés ici si tu en as
      },
      revalidate: 60, // Toujours garder la possibilité de régénérer la page
    };
  }
};

export default function HomePage({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Blog - Accueil</title>
        <meta name="description" content="Découvrez nos derniers articles de blog sur divers sujets." />
      </Head>
      <main role="main" className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-left">Articles récents</h1>
        {articles.length === 0 ? (
          // Message d'erreur si aucun article n'est disponible
          <p className="text-orange-200">Aucun article disponible pour le moment. Veuillez réessayer plus tard.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
