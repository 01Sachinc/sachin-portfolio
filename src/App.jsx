import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import './styles/index.css';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-slate-300 overflow-x-hidden selection:bg-primary-500/30">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] contrast-150 grayscale invert">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar />

      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Custom Cursor / Light Follower - Advanced UI element */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-700"></div>
      </div>
    </div>
  );
}

export default App;
