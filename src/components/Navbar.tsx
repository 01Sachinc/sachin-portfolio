import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glossy py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a 
            href="#hero" 
            className="group relative flex items-center"
          >
            <motion.span 
              animate={{ 
                letterSpacing: scrolled ? "0.4em" : "0.2em",
                scale: scrolled ? 0.9 : 1
              }}
              className="text-2xl font-black font-heading text-white tracking-[0.2em] group-hover:text-primary-400 transition-colors duration-500"
            >
              SACHIN
            </motion.span>
            <motion.div 
              animate={{ 
                width: scrolled ? "100%" : "0%",
                opacity: scrolled ? 1 : 0
              }}
              className="absolute -bottom-1 left-0 h-0.5 bg-primary-500 rounded-full"
            />
          </a>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden glass-dark border-t border-white/10 overflow-hidden fixed inset-x-0 top-[76px] bottom-0 z-40 bg-dark/95 backdrop-blur-2xl"
          >
            <div className="px-10 py-16 flex flex-col items-center justify-center space-y-12 h-full">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black font-heading text-slate-300 hover:text-primary-400 transition-colors uppercase tracking-[0.2em]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-10 pt-12 border-t border-white/10 w-full justify-center">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 text-slate-400 hover:text-white transition-all">
                  <Github size={32} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 text-slate-400 hover:text-white transition-all">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
