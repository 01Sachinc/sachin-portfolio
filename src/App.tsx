import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import GitHubRepos from './sections/GitHubRepos'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-screen relative text-slate-200 cursor-none">
      <CustomCursor />
      {/* Premium 3D Background */}
      <ThreeBackground />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Content */}
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Certifications /></Reveal>
        <Reveal><GitHubRepos /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
