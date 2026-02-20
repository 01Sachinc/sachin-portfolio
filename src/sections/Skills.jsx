import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Cloud, Network, Code, Terminal, Settings, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const categoryIcons = {
    "Programming & Backend": <Code className="w-6 h-6 text-primary-500" />,
    "Cloud & DevOps": <Cloud className="w-6 h-6 text-primary-500" />,
    "Linux & Virtualization": <Terminal className="w-6 h-6 text-primary-500" />,
    "Networking": <Network className="w-6 h-6 text-primary-500" />,
};

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="bg-[#080808] py-24">
            <div className="section-container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Technical <span className="text-primary-500">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        A comprehensive overview of my technical stack, ranging from backend development to cloud infrastructure and networking.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {portfolioData.skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="glass-card p-6 group hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] active:scale-[0.98]"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/10 transition-colors">
                                {categoryIcons[skillGroup.category] || <Cpu className="w-6 h-6 text-primary-500" />}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium group-hover:border-primary-500/30 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tools & Certs quick highlights */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-6"
                    >
                        <div className="w-16 h-16 shrink-0 bg-primary-600/10 rounded-2xl flex items-center justify-center">
                            <Settings className="text-primary-500 w-8 h-8 animate-spin-slow" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-2">Advanced Tooling</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Expert in modern development tools: GitHub Actions, IntelliJ IDEA, Maven, Postman, and VS Code. Proficient in version control and automated linting.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-6"
                    >
                        <div className="w-16 h-16 shrink-0 bg-blue-600/10 rounded-2xl flex items-center justify-center">
                            <ShieldCheck className="text-blue-500 w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-2">Quality & Security</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Focus on high-performance code, secure API design (OAuth2/JWT), and resilient disaster recovery strategies for production environments.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
