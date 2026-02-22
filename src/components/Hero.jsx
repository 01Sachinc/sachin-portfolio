import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'

const Hero = () => {
    const [text, setText] = useState('')
    const fullText = "Full Stack Developer | AWS DevOps Engineer"
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText[index])
                setIndex(prev => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        }
    }, [index, fullText])

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 px-4 overflow-hidden">
            <div className="container mx-auto flex flex-col items-center text-center gap-12 z-10">

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-neon-blue font-mono mb-6 text-xl tracking-[0.3em] uppercase"
                    >
                        Initializing Portfolio...
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-6xl md:text-9xl font-black mb-8 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent font-heading tracking-tighter uppercase flex justify-center flex-wrap"
                    >
                        {"Sachin C S".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                whileHover={{
                                    y: i === 0 ? [0, -20, 0] : [0, -10, 0],
                                    color: "#00f2ff",
                                    textShadow: "0 0 8px rgba(0,242,255,0.8)",
                                    transition: { duration: 0.4, ease: "easeInOut" }
                                }}
                                className={`inline-block ${char === " " ? "mx-4" : ""}`}
                                style={{ display: 'inline-block', cursor: 'pointer' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-3xl text-slate-600 dark:text-gray-400 mb-12 h-20"
                    >
                        <span className="text-slate-900 dark:text-white font-bold font-heading">{text}<span className="animate-pulse text-neon-blue">_</span></span>
                        <p className="mt-4 text-lg font-light max-w-2xl mx-auto text-slate-500 dark:text-gray-500">
                            Architecting scalable cloud infrastructures and building high-performance full-stack applications.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-6 justify-center"
                    >
                        <a href="#projects" className="px-10 py-4 bg-neon-blue text-black font-black uppercase tracking-widest text-sm rounded-none hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors flex items-center gap-3 shadow-[0_0_25px_rgba(0,242,255,0.4)]">
                            ./explore_projects <ExternalLink size={18} />
                        </a>
                        <a href="/resume.pdf" className="px-10 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm rounded-none hover:bg-slate-900 dark:hover:bg-white hover:text-black dark:hover:text-black transition-all flex items-center gap-3">
                            cat resume.pdf <Download size={18} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* DevOps Terminal Component */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="w-full max-w-3xl glass-card border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden shadow-2xl bg-slate-900 dark:bg-black/80"
                >
                    <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="text-gray-500 text-[10px] uppercase font-mono ml-4 tracking-widest">System_Shell_v2.0</span>
                    </div>
                    <div className="p-6 text-left font-mono text-sm sm:text-base leading-relaxed overflow-x-auto text-gray-300">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div className="flex gap-3 mb-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-white">git status</span>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.8 }}
                                className="text-gray-400 mb-4 ml-6 font-bold"
                            >
                                On branch <span className="text-white">main</span><br />
                                Your branch is up to date with 'origin/main'.<br />
                                nothing to commit, working tree clean
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                        >
                            <div className="flex gap-3 mb-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-white">terraform plan</span>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.5 }}
                                className="text-yellow-400 mb-4 ml-6 italic font-bold"
                            >
                                # Infrastructure is up-to-date.<br />
                                # 0 to add, 0 to change, 0 to destroy.
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                            className="flex gap-3"
                        >
                            <span className="text-green-400">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white animate-pulse">█</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] -z-10"></div>
        </section>
    )
}

export default Hero
