import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mb-4">Page introuvable</p>
      <Link href="/">
        <span className="text-xl text-blue-500 hover:underline">{`Retour à la page d'accueil`}</span>
      </Link>
    </div>
  );
};

export default Custom404;
