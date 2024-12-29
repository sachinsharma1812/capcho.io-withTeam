import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Capcho.io. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
            showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
}