import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const Hero = () => {
    const { name, title, tagline, cta } = portfolioData.hero;

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>

            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Available for new projects
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-600">{name}</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
                            {title}
                        </h2>

                        <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                            {tagline}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="btn-primary group"
                            >
                                {cta.primary}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="btn-secondary"
                            >
                                {cta.secondary}
                            </motion.a>
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">Connect With Me</span>
                            <div className="flex gap-4">
                                <a href={portfolioData.contact.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                                <a href={portfolioData.contact.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative z-10 glass-card p-2 aspect-square rounded-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-blue-600/20 opacity-50"></div>
                            {/* Profile Image Placeholder - in a real app, the user would replace this */}
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center rounded-2xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                            </div>

                            {/* Stats Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                <div className="glass-card p-4 text-center">
                                    <div className="text-2xl font-bold text-white">3+</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-tighter">Years Exp</div>
                                </div>
                                <div className="glass-card p-4 text-center">
                                    <div className="text-2xl font-bold text-white">15+</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-tighter">Projects</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative orbital rings */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full animate-spin-slow"></div>
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-white/5 rounded-full animate-reverse-spin-slow"></div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll Down</span>
                <ChevronDown className="text-slate-500 w-5 h-5" />
            </motion.div>
        </section>
    );
};

export default Hero;
