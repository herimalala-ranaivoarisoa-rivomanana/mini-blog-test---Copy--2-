import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const navLinkClasses =
    'px-4 py-2 border border-white rounded hover:bg-teal-700 transition';

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="bg-teal-600 text-white px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Break News</h1>
        <nav className="flex gap-4 items-center">
          {!isActive('/') && (
            <Link href="/" className={`${navLinkClasses} ${isActive('/') ? 'bg-teal-700' : ''}`}>
              Actualités
            </Link>
          )}
          {!isAuthenticated ? (
            <Link href="/login" className={navLinkClasses}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/admin" className={navLinkClasses}>
                Admin
              </Link>
              <button
                className={navLinkClasses}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
