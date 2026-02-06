import React, { useState, useMemo } from 'react';
import { ZoomIn } from 'lucide-react';
import { tattoos } from '../tattoos';

type Category = 'all' | 'realismo' | 'blackwork' | 'retrato';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<Category>('all');
  // Usamos los datos importados directamente para carga instantánea
  const items = tattoos;

  const filteredItems = useMemo(() => 
    // @ts-ignore - Ignoramos error de tipo temporal si las categorías no coinciden exactamente
    filter === 'all' ? items : items.filter(i => i.category?.toLowerCase() === filter),
  [filter, items]);

  return (
    <section className="py-24 bg-zinc-950 relative" id="gallery">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-2 uppercase">Galería Reciente</h2>
            <div className="h-1 w-24 bg-gold-500"></div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {['all', 'realismo', 'blackwork', 'retrato'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-4 py-2 text-sm uppercase tracking-wider border transition-all whitespace-nowrap ${
                  filter === cat 
                    ? 'border-gold-500 text-gold-500 bg-gold-500/10' 
                    : 'border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                }`}
              >
                {cat === 'all' ? 'Ver Todo' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-zinc-900 aspect-[4/5] cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-400 text-xs uppercase tracking-widest mb-1">{item.style}</span>
                <h3 className="text-white font-display text-xl">{item.title}</h3>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 backdrop-blur-sm">
                <ZoomIn className="text-white w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://www.instagram.com/pedrocastilloink/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-1 hover:border-white">
                Ver más trabajos en Instagram <InstagramIcon />
            </a>
        </div>
      </div>
    </section>
  );
};

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default Gallery;