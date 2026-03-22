import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Banquet', href: '#banquet' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wider">
              MINARI<span className="text-gold-500">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-zinc-950 px-5 py-2.5 rounded-full font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-gold-400 hover:bg-zinc-900 rounded-md uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gold-500 hover:bg-zinc-900 rounded-md uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
