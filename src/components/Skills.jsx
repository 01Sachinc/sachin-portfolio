import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Terminal, Shield, Network, Settings as SettingsIcon } from 'lucide-react'

const skillGroups = [
    {
        title: "Programming",
        icon: <Code2 className="text-neon-blue" />,
        skills: ["Core Java", "OOPS", "SQL", "JavaScript", "Bash", "PowerShell"]
    },
    {
        title: "Backend",
        icon: <Terminal className="text-neon-blue" />,
        skills: ["Spring Boot", "REST APIs", "JSP/Servlets", "MVC Architecture"]
    },
    {
        title: "Cloud",
        icon: <Cloud className="text-neon-blue" />,
        skills: ["AWS (EC2, S3, RDS)", "IAM, VPC", "CloudWatch", "Auto Scaling", "Load Balancers"]
    },
    {
        title: "DevOps",
        icon: <SettingsIcon className="text-neon-blue" size={20} />,
        skills: ["Docker", "Kubernetes", "Ansible", "Jenkins", "GitHub Actions", "Terraform"]
    },
    {
        title: "Infrastructure",
        icon: <Database className="text-neon-blue" />,
        skills: ["Linux (RHEL/Ubuntu)", "VMware ESXi", "Virtualization", "Disaster Recovery"]
    },
    {
        title: "Networking",
        icon: <Network className="text-neon-blue" />,
        skills: ["TCP/IP", "DNS", "BGP Basics", "MPLS", "VLAN"]
    }
]

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 font-heading tracking-tighter uppercase italic">Technical Stack</h2>
                    <div className="h-1.5 w-32 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10 hover:neon-border transition-all duration-300 relative overflow-hidden group bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-none"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                                {React.cloneElement(group.icon, { size: 80 })}
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-neon-blue/10 rounded-xl group-hover:bg-neon-blue/20 transition-colors">
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white font-heading">{group.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {skillGroups[idx].skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1.5 bg-slate-200 dark:bg-black/20 border border-slate-300 dark:border-white/5 rounded-none text-sm text-slate-600 dark:text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all cursor-default font-mono"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
