import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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
import LoadingScreen from './components/LoadingScreen'
import CloudGuardianProject from './pages/CloudGuardianProject'

const Home = () => (
  <main>
    <Hero />
    <Reveal><About /></Reveal>
    <Reveal><Skills /></Reveal>
    <Reveal><Projects /></Reveal>
    <Reveal><Certifications /></Reveal>
    <Reveal><GitHubRepos /></Reveal>
    <Reveal><Contact /></Reveal>
  </main>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="min-h-screen relative text-slate-200 cursor-none">
        <CustomCursor />
        <ThreeBackground />

        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <ScrollProgress />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/cloudguardian-ai-x" element={<CloudGuardianProject />} />
            {/* Catch-all route to redirect back to Home */}
            <Route path="*" element={<Home />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
