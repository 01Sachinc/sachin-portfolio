import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu } from 'lucide-react'

const ScrollLoader = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let timeout;
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrollPercent = (currentScroll / totalScroll) * 100;

            setIsVisible(true)
            setProgress(scrollPercent)

            clearTimeout(timeout)
            timeout = setTimeout(() => {
                setIsVisible(false)
            }, 1000)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timeout)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full z-[101] pointer-events-none">
            {/* Top Progress Bar */}
            <motion.div
                className="h-[2px] bg-neon-blue shadow-[0_0_10px_#00f2ff]"
                style={{ width: `${progress}%` }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Discrete Status Pill */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute top-4 right-8 flex items-center gap-3 bg-slate-900/40 dark:bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-2xl"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="text-neon-blue"
                        >
                            <Cpu size={14} />
                        </motion.div>
                        <span className="text-white/70 font-mono text-[10px] uppercase tracking-[0.3em]">Sync_Proc_node</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ScrollLoader
