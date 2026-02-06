import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Aftercare from './components/Aftercare';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const aftercareRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      'hero': heroRef,
      'gallery': galleryRef,
      'aftercare': aftercareRef,
      'contact': contactRef,
    };

    const ref = refs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-gold-500 selection:text-white">
      <Navbar onNavigate={scrollToSection} />
      
      <div ref={heroRef}>
        <Hero onNavigate={scrollToSection} />
      </div>

      <div ref={galleryRef}>
        <Gallery />
      </div>

      <div ref={aftercareRef}>
        <Aftercare />
      </div>

      <div ref={contactRef}>
        <Booking />
      </div>

      <Footer />
    </div>
  );
}

export default App;