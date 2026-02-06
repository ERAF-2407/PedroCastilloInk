import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
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
    { id: 'hero', label: 'Inicio' },
    { id: 'gallery', label: 'Galería' },
    { id: 'aftercare', label: 'Cuidados' },
    { id: 'contact', label: 'Citas' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-white tracking-tighter cursor-pointer" onClick={() => onNavigate('hero')}>
          PEDRO<span className="text-indigo-500">CASTILLO</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-colors"
          >
            Agendar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-sm uppercase tracking-widest text-zinc-400 hover:text-white py-2"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;