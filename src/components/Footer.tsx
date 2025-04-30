// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-200 py-6 px-4 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="/about" className="hover:text-white">À propos</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/privacy" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </footer>
    );
  }
  