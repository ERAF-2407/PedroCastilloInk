import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-display font-bold text-white mb-2">PEDRO CASTILLO</h3>
          <p className="text-zinc-500 text-sm">Arte corporal y realismo en Medellín.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>

        <div className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} Pedro Castillo Ink. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;