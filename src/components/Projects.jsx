import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Box, Server, Shield, Layers } from 'lucide-react'

const projects = [
    {
        title: "Java Full Stack Enterprise App",
        tech: ["Spring Boot", "REST APIs", "SQL Server", "React"],
        desc: "Built a secure enterprise application with role-based access control and structured debugging.",
        impact: "Reduced bug incidents and improved performance through structural refactoring.",
        icon: <Layers className="text-neon-blue" />
    },
    {
        title: "Kubernetes Microservices",
        tech: ["Docker", "Kubernetes", "AWS EC2", "CI/CD"],
        desc: "Deployed containerized microservices with auto-scaling, health checks, and rolling updates.",
        impact: "Reduced deployment downtime and automated release cycles.",
        icon: <Box className="text-neon-blue" />
    },
    {
        title: "Ansible Infrastructure Automation",
        tech: ["Ansible", "Linux", "AWS", "YAML"],
        desc: "Automated server provisioning and patch management using Ansible playbooks.",
        impact: "Reduced manual setup time and improved environment consistency.",
        icon: <Server className="text-neon-blue" />
    },
    {
        title: "AWS Cloud Monitoring Setup",
        tech: ["CloudWatch", "EC2", "Auto Scaling", "IAM"],
        desc: "Implemented comprehensive monitoring and alerting for AWS infrastructure.",
        impact: "Improved system uptime and proactive issue detection.",
        icon: <Shield className="text-neon-blue" />
    }
]

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 font-heading tracking-tighter uppercase italic">Deployment Logs</h2>
                    <div className="h-1.5 w-32 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card group flex flex-col bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:neon-border transition-all duration-500 overflow-hidden shadow-lg dark:shadow-none"
                        >
                            <div className="p-10 flex-1">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-neon-blue/10 rounded-2xl group-hover:bg-neon-blue/20 transition-all group-hover:scale-110">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4 text-slate-400 dark:text-gray-500">
                                        <Github size={22} className="hover:text-neon-blue cursor-pointer transition-colors" />
                                        <ExternalLink size={22} className="hover:text-neon-blue cursor-pointer transition-colors" />
                                    </div>
                                </div>

                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 font-heading uppercase tracking-tight group-hover:text-neon-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg font-light leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="relative mb-8 p-6 bg-slate-200 dark:bg-black/40 border-l-4 border-neon-blue font-mono text-sm italic">
                                    <span className="absolute top-2 right-4 text-[10px] text-slate-500 dark:text-gray-600 uppercase">System Outcome</span>
                                    <p className="text-slate-700 dark:text-gray-300"># {project.impact}</p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono px-3 py-1 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/20 transition-all">
                                            $ {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
