import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Server, Cloud, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const About = () => {
    const { summary, skills } = portfolioData.about;

    const coreFocus = [
        { icon: <Code2 className="text-primary-500" />, title: 'Full Stack Dev', desc: 'Java, Spring Boot, React' },
        { icon: <Cloud className="text-primary-500" />, title: 'Cloud Architecture', desc: 'AWS Services, High Availability' },
        { icon: <Server className="text-primary-500" />, title: 'DevOps & CI/CD', desc: 'Automation, Monitoring, Linux' },
    ];

    return (
        <section id="about" className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">About <span className="text-primary-500">Me</span></h2>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>

                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        {summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                        {coreFocus.map((item, idx) => (
                            <div key={idx} className="glass-card p-4 text-center">
                                <div className="w-10 h-10 mx-auto mb-3 bg-white/5 rounded-lg flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                                <p className="text-slate-500 text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white font-semibold flex items-center gap-2">
                            <CheckCircle2 className="text-primary-500 w-5 h-5" />
                            Core Competencies
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm italic">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="glass-card p-8 relative z-10 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                            <Cloud size={120} className="text-primary-500/5 -rotate-12" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-6">System & Architecture Expertise</h3>

                        <div className="space-y-8">
                            <div className="relative pl-8 border-l border-white/10">
                                <div className="absolute left-[-1px] top-0 w-[2px] h-8 bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                                <h4 className="text-white font-semibold mb-2">Backend Excellence</h4>
                                <p className="text-slate-400 text-sm">
                                    Specialized in microservices architecture using Spring Cloud, focusing on service discovery, API gateways, and distributed systems logic.
                                </p>
                            </div>

                            <div className="relative pl-8 border-l border-white/10">
                                <div className="absolute left-[-1px] top-0 w-[2px] h-8 bg-primary-500 opacity-50"></div>
                                <h4 className="text-white font-semibold mb-2">Infrastructure & DevOps</h4>
                                <p className="text-slate-400 text-sm">
                                    Hands-on regular experience with AWS (EC2, S3, IAM) and RHEL Linux administration. Proficient in automation via Bash and PowerShell.
                                </p>
                            </div>

                            <div className="relative pl-8 border-l border-white/10">
                                <div className="absolute left-[-1px] top-0 w-[2px] h-8 bg-primary-500 opacity-30"></div>
                                <h4 className="text-white font-semibold mb-2">Networking Fundamentals</h4>
                                <p className="text-slate-400 text-sm">
                                    Solid understanding of TCP/IP, MPLS, and BGP basics. Capable of designing and troubleshooting network topologies.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 p-4 bg-primary-600/5 border border-primary-500/10 rounded-xl">
                            <p className="text-slate-300 text-sm font-medium italic text-center">
                                "Committed to writing clean code and building resilient, automated infrastructure."
                            </p>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600/20 blur-2xl -z-10"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-600/10 blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
