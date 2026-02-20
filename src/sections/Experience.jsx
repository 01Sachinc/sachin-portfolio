import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const Experience = () => {
    return (
        <section id="experience" className="bg-[#050505] py-24">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Career <span className="text-primary-500">Timeline</span></h2>
                    <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>

                <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-600 border border-dark-bg z-10 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>

                            <div className="glass-card p-6 relative group hover:bg-white/[0.03] transition-colors">
                                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Briefcase size={80} className="text-primary-500" />
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-primary-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
                                    {exp.description}
                                </p>

                                <div className="flex items-center gap-2 text-slate-500 text-xs italic">
                                    <MapPin size={12} />
                                    <span>Remote / Hybrid</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
