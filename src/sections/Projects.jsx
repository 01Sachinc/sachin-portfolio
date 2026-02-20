import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Zap, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card overflow-hidden group h-full flex flex-col"
        >
            <div className="relative h-48 overflow-hidden bg-slate-900">
                {/* Placeholder for architecture diagram / screen */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-black flex items-center justify-center p-6 text-center">
                    <div className="border border-primary-500/20 rounded-lg p-4 bg-black/40 backdrop-blur-sm">
                        <Layers className="w-8 h-8 text-primary-500 mx-auto mb-2 opacity-50" />
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Architecture Diagram</p>
                        <p className="text-xs text-slate-400 font-medium">{project.title}</p>
                    </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-600/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-4">
                        <a href={project.github} className="p-3 bg-white rounded-full text-primary-600 hover:scale-110 transition-transform">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white rounded-full text-primary-600 hover:scale-110 transition-transform">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight italic">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="space-y-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase mb-2">
                            <Zap size={14} /> Key Challenges Solved
                        </div>
                        <p className="text-slate-300 text-xs italic">"{project.challenges}"</p>
                    </div>

                    <div className="p-3 bg-primary-500/5 rounded-lg border border-primary-500/10">
                        <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase mb-2">
                            <Info size={14} /> Business Impact
                        </div>
                        <p className="text-slate-300 text-xs">{project.impact}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-white/5 text-slate-400 rounded uppercase font-bold tracking-tighter">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-primary-500 italic">Work</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg">
                        A selection of my most significant technical projects across backend systems, cloud, and networking.
                    </p>
                </div>
                <a href="https://github.com/sachincs" target="_blank" rel="noreferrer" className="text-primary-500 font-medium hover:underline flex items-center gap-2">
                    View all on GitHub <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

// Helper for ArrowRight inside the component
const ArrowRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default Projects;
