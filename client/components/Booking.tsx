import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="contact">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/2">
            <h2 className="font-display text-5xl text-white mb-6 uppercase">Agenda <br/> Tu Cita</h2>
            <p className="text-zinc-400 mb-8 text-lg font-light">
              Los cupos son limitados. Para agendar, necesitamos saber tu idea, tamaño aproximado y zona del cuerpo.
              Se requiere un depósito para confirmar la cita.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-gold-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Ubicación</h4>
                  <p className="text-zinc-500">Calle 10A #34-11, Poblado<br/>Medellín, Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-gold-500 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">WhatsApp</h4>
                  <p className="text-zinc-500">+57 300 123 4567</p>
                  <span className="text-xs text-zinc-600">Solo mensajes</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-gold-500 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <p className="text-zinc-500">citas@pedrocastilloink.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-zinc-900 p-8 md:p-10 rounded-sm border border-zinc-800">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-zinc-950 border-b border-zinc-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Tu nombre" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Teléfono</label>
                  <input type="tel" className="w-full bg-zinc-950 border-b border-zinc-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="+57..." />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Email</label>
                <input type="email" className="w-full bg-zinc-950 border-b border-zinc-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="tu@email.com" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Descripción del Tatuaje</label>
                <textarea rows={4} className="w-full bg-zinc-950 border-b border-zinc-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Describe tu idea, zona y tamaño aproximado..."></textarea>
              </div>

              <button type="button" className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-gold-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                <Calendar size={18} />
                Solicitar Cotización
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;