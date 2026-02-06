import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/204/1920/1080" // Dark gritty texture look
          alt="Tattoo Background" 
          loading="eager"
          className="w-full h-full object-cover grayscale brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block py-1 px-3 border border-zinc-700 rounded-full bg-zinc-900/50 backdrop-blur text-gold-400 text-xs tracking-widest uppercase mb-6 animate-fade-in">
          Premium Tattoo Artist • Medellín
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 tracking-tight leading-none animate-slide-up">
          REALISMO <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">SIN LÍMITES</span>
        </h1>

        <p className="max-w-xl mx-auto text-zinc-400 text-lg mb-10 font-light animate-slide-up-delay">
          Especialista en sombras, retratos y arte corporal de alta complejidad. 
          Transforma tu piel en un lienzo eterno con Pedro Castillo.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
          <button 
            onClick={() => onNavigate('contact')}
            className="group relative px-8 py-4 bg-zinc-100 text-zinc-950 font-bold uppercase tracking-wider overflow-hidden rounded-sm hover:bg-gold-400 transition-colors duration-300"
          >
            Agendar Cita
          </button>
          
          <button 
            onClick={() => onNavigate('gallery')}
            className="group flex items-center gap-2 text-white px-8 py-4 uppercase tracking-wider text-sm font-medium hover:text-gold-400 transition-colors"
          >
            Ver Portafolio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Social Proof / Stats */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between text-zinc-500 text-sm tracking-widest uppercase font-mono border-t border-zinc-800 pt-6">
          <span>+5 Años de Experiencia</span>
          <span>Especialista Black & Grey</span>
          <span>100% Clientes Satisfechos</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;