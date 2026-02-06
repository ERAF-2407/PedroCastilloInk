import React from 'react';
import { Shield, Droplets, Sun, Ban } from 'lucide-react';

const Aftercare: React.FC = () => {
  const steps = [
    {
      icon: <Droplets className="text-gold-500" size={32} />,
      title: "Limpieza",
      description: "Lava suavemente con agua tibia y jabón neutro 3 veces al día. Seca con toallas de papel dando toques suaves."
    },
    {
      icon: <Shield className="text-gold-500" size={32} />,
      title: "Protección",
      description: "Aplica una capa muy fina de crema cicatrizante recomendada (ej. Aquaphor) solo cuando el tatuaje esté seco."
    },
    {
      icon: <Sun className="text-gold-500" size={32} />,
      title: "Evita el Sol",
      description: "Mantén el tatuaje cubierto y lejos de la luz solar directa durante el proceso de curación."
    },
    {
      icon: <Ban className="text-gold-500" size={32} />,
      title: "Cero Inmersión",
      description: "Evita piscinas, mar, saunas o jacuzzis por al menos 2 semanas para prevenir infecciones."
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800" id="aftercare">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase">Cuidados del Tatuaje</h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto"></div>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            El resultado final depende 50% del artista y 50% de tus cuidados. Sigue estas instrucciones para asegurar una curación perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-zinc-950 p-8 rounded-sm border border-zinc-800 hover:border-gold-500/50 transition-colors group">
              <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-display text-white mb-3">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aftercare;