import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-900/40">
                            <Cpu className="text-white w-6 h-6" />
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">Sachin <span className="text-primary-500">C S</span></span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/sachincs" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/sachincs" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 flex items-center gap-6 px-3">
                                <a href="https://github.com/sachincs" className="text-slate-400 hover:text-white"><Github size={24} /></a>
                                <a href="https://linkedin.com/in/sachincs" className="text-slate-400 hover:text-white"><Linkedin size={24} /></a>
                                <a href="mailto:sachin.cs.dev@gmail.com" className="text-slate-400 hover:text-white"><Mail size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
