import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const Certifications = () => {
    return (
        <section id="certifications" className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional <span className="text-primary-500">Certifications</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg">
                        Validated expertise in Java, Cloud, and Networking through industry-standard credentials.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioData.certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary-500/50 transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600/10 transition-colors">
                            <Award className="text-primary-500 w-8 h-8" />
                        </div>
                        <h3 className="text-white font-bold mb-2">{cert.name}</h3>
                        <p className="text-primary-500 text-sm mb-4 font-medium">{cert.issuer}</p>
                        <div className="mt-auto">
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border-t border-white/10 pt-4 block w-full px-4">Verified</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-8 border-primary-500/20 bg-primary-950/5">
                <div className="flex items-center gap-6 text-left">
                    <div className="p-4 bg-primary-600/10 rounded-2xl hidden sm:block">
                        <GraduationCap className="text-primary-500 w-10 h-10" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-xl mb-1">Looking for my Full Portfolio?</h4>
                        <p className="text-slate-400 text-sm">Download my comprehensive resume for a detailed view of my academic and professional achievements.</p>
                    </div>
                </div>
                <a
                    href={portfolioData.contact.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary whitespace-nowrap"
                >
                    Download Resume <ExternalLink size={16} />
                </a>
            </div>
        </section>
    );
};

export default Certifications;
