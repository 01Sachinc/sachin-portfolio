import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const NeuralMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5 
          }}
          animate={{ 
            x: [null, Math.random() * 100 + "%"],
            y: [null, Math.random() * 100 + "%"]
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-1 h-1 bg-primary-400 rounded-full blur-[1px]"
        />
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 10 10 L 90 90 M 10 90 L 90 10"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-500/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="section-padding flex flex-col items-center justify-center text-center w-full relative z-10 min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-black mb-8 uppercase tracking-widest backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            🚀 Built AI-Powered Self-Healing DevOps Platform
          </motion.div>
          <h1 className="text-6xl md:text-[10rem] font-black font-display mb-12 tracking-tighter leading-[0.85] text-white">
            ENGINEERING <br />
            <span className="text-gradient drop-shadow-[0_0_50px_rgba(56,189,248,0.3)] italic">AUTONOMY</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-400 font-bold mb-10 tracking-[0.2em] uppercase">
            <span className="text-primary-400 font-mono">
              <Typewriter
                words={[
                  'Java Fullstack Engineer',
                  'Systems Specialist',
                  'Cloud & DevOps Architect',
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={3000}
              />
            </span>
          </h2>
          
          <div className="mb-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary-400 font-black text-[10px] tracking-[0.6em] mb-4 uppercase"
            >
              BUILDING RESILIENT INFRASTRUCTURE
            </motion.div>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-medium">
              Specializing in <span className="text-white font-bold">Cloud-Native Architectures</span> and <span className="text-white font-bold">Autonomous DevOps</span>. 
              Focused on <span className="text-slate-300">automation, AI-driven monitoring, and enterprise security.</span>
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-[0_20px_40px_-15px_rgba(14,165,233,0.5)]"
            >
              View Case Studies <ChevronRight size={20} />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              download
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border border-white/10 hover:border-primary-500/50 hover:bg-white/5 text-slate-200 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all backdrop-blur-md"
            >
              Download CV <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Minimalist Background Element */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
           <NeuralMesh />
        </div>
      </div>
    </section>
  );
};

export default Hero;
