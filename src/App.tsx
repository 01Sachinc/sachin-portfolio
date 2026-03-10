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
import CustomCursor from './components/CustomCursor'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-screen relative text-slate-200 cursor-none">
      <CustomCursor />
      <ThreeBackground />

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Certifications /></Reveal>
        <Reveal><GitHubRepos /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
