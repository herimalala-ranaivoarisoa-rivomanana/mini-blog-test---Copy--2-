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
      revalidate: 60,
    };
  } catch (error) {
    console.error('Erreur lors du chargement des articles :', error);
    return {
      props: {
        articles: [],
      },
      revalidate: 60,
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
          <p className="text-orange-200">Aucun article disponible pour le moment.</p>
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
