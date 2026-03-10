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

function App() {
  return (
    <div className="min-h-screen relative text-slate-200">
      {/* Premium 3D Background */}
      <ThreeBackground />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <GitHubRepos />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
