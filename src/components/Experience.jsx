import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, GitCommit } from 'lucide-react'

const experiences = [
    {
        company: "SIDE International Holdings Pvt Ltd / PTW",
        role: "DevOps & Full Stack Engineer",
        duration: "1.3 Years",
        location: "Bengaluru, India",
        responsibilities: [
            "Managed AWS infrastructure (EC2, S3, RDS, IAM, VPC)",
            "Deployed containerized applications using Docker & Kubernetes",
            "Created CI/CD pipelines (GitHub Actions, Jenkins)",
            "Automated server configuration using Ansible",
            "Production troubleshooting and security hardening"
        ],
        status: "CURRENT"
    }
]

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -z-10"></div>

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 font-heading tracking-tighter uppercase italic">Professional Journey</h2>
                    <div className="h-1.5 w-32 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 md:-translate-x-1/2 rounded-full hidden md:block"></div>
                    <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 rounded-full md:hidden"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node (Git Commit style) */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-slate-100 dark:bg-slate-900 rounded-full border-4 border-slate-200 dark:border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,242,255,0.2)] group-hover:border-neon-blue transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                                        <GitCommit className="text-neon-blue" size={18} />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} w-full`}>
                                    <div className="glass-card p-8 rounded-2xl bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/5 hover:border-neon-blue/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] relative overflow-hidden group">

                                        {/* Status Badge */}
                                        {exp.status && (
                                            <div className="absolute top-0 right-0 bg-neon-blue text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                                                {exp.status}
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-slate-500 dark:text-gray-400 mb-3">
                                                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-neon-blue" /> {exp.duration}</span>
                                                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-neon-blue" /> {exp.location}</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white font-heading mb-1">{exp.role}</h3>
                                            <div className="text-neon-blue font-mono text-sm font-bold">{exp.company}</div>
                                        </div>

                                        <div className="space-y-3">
                                            {exp.responsibilities.map((resp, i) => (
                                                <div key={i} className="flex items-start gap-3 group/item">
                                                    <span className="text-neon-blue font-mono mt-0.5 opacity-50 group-hover/item:opacity-100 transition-opacity">{'>'}</span>
                                                    <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{resp}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Decorative Tech Lines */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
