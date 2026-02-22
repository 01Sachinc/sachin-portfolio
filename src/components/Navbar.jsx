import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-lg border-b border-glass-border py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-tighter"
                >
                    <a href="#" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-10 h-10 bg-neon-blue text-black flex items-center justify-center rounded-lg font-black text-xl shadow-[0_0_15px_rgba(0,242,255,0.5)] overflow-hidden hover:shadow-[0_0_25px_rgba(0,242,255,0.8)] transition-all"
                        >
                            <span className="relative z-10 flex items-center justify-center w-full h-full">CS</span>
                            {/* Animated scanline on hover */}
                            <motion.div
                                className="absolute left-0 w-full h-full bg-white/40 skew-y-12"
                                initial={{ top: "-150%" }}
                                whileHover={{ top: "150%" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </a>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-gray-400 hover:text-neon-blue transition-colors text-sm font-medium uppercase tracking-widest"
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-glass-bg transition-colors text-gray-400 hover:text-neon-blue"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="https://github.com/01Sachinc" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/sachinc" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-glass-bg transition-colors text-slate-500 dark:text-gray-400"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-glass-border overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-slate-900 dark:text-gray-300 hover:text-neon-blue font-bold font-heading uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-8 mt-4 text-slate-500 dark:text-gray-400">
                                <Github size={24} className="hover:text-neon-blue transition-colors cursor-pointer" />
                                <Linkedin size={24} className="hover:text-neon-blue transition-colors cursor-pointer" />
                                <Mail size={24} className="hover:text-neon-blue transition-colors cursor-pointer" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
