import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import HeroBackground from './components/3D/HeroBackground'
import MouseGlow from './components/Effects/MouseGlow'
import ScrollLoader from './components/Effects/ScrollLoader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Basic GSAP entrance for sections
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-neon-blue selection:text-black">
      <HeroBackground />
      <MouseGlow />
      <ScrollLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm font-heading tracking-widest uppercase">
        <p>© {new Date().getFullYear()} Sachin C S. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
