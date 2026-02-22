import React from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

const certs = [
    "Java Full Stack – JSpiders",
    "AWS Cloud Practitioner",
    "Kubernetes Fundamentals",
    "Linux Administration"
]

const Certifications = () => {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 font-heading tracking-tighter uppercase italic">Certifications</h2>
                    <div className="h-1.5 w-32 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 flex items-center gap-6 hover:neon-border transition-all duration-300 group bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-none"
                        >
                            <div className="p-4 bg-neon-blue/10 rounded-xl group-hover:bg-neon-blue/20 transition-all group-hover:scale-110">
                                <Award className="text-neon-blue" size={32} />
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white font-black text-xl font-heading uppercase">{cert}</h3>
                                <div className="flex items-center gap-2 text-slate-500 dark:text-gray-500 text-sm mt-2 font-mono">
                                    <CheckCircle size={14} className="text-neon-blue" />
                                    <span>Verified Professional</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
