import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Cloud, Code, Database, Server } from 'lucide-react'

const About = () => {
    const highlights = [
        { icon: <Code className="text-neon-blue" />, title: "Full Stack Development", desc: "Expertise in Java, Spring Boot, and React." },
        { icon: <Cloud className="text-neon-blue" />, title: "AWS DevOps", desc: "Provisioning and managing cloud infrastructure." },
        { icon: <Server className="text-neon-blue" />, title: "Infrastructure", desc: "Kubernetes orchestration and Ansible automation." },
        { icon: <Cpu className="text-neon-blue" />, title: "Cloud Native", desc: "Building scalable, distributed microservices." },
    ]

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 font-heading tracking-tighter uppercase italic">About Me</h2>
                    <div className="h-1.5 w-32 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                </motion.div>

                <div className="flex flex-col items-center text-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-600 dark:text-gray-400 text-xl leading-relaxed font-light"
                    >
                        <p className="mb-8">
                            I am a <span className="text-slate-900 dark:text-white font-bold">DevOps Architect & Full Stack Developer</span> dedicated to building and automating high-availability systems. With 1.3+ years of experience in the enterprise domain, I specialize in the <span className="text-neon-blue underline font-mono">bridging the gap between Dev & Ops</span>.
                        </p>
                        <p>
                            From complex Kubernetes orchestration to scalable Java backends, I design end-to-end solutions that are built to scale and engineered for reliability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-10 flex flex-col items-center text-center gap-4 hover:neon-border transition-all duration-300 group bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-none"
                            >
                                <div className="p-4 bg-neon-blue/10 rounded-full group-hover:bg-neon-blue/20 transition-all group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="font-black text-slate-900 dark:text-white text-2xl font-heading">{item.title}</h3>
                                <p className="text-slate-500 dark:text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Background static */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-blue/5 blur-[120px] rounded-full -z-10"></div>
        </section>
    )
}

export default About
