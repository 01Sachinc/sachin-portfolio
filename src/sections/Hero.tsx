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
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-400 text-sm font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black font-heading mb-8 tracking-tight leading-[0.9]">
            Architecting <br />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">Scalable</span> <br />
            Solutions
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-slate-300 font-medium mb-10 overflow-hidden">
             I am Sachin C S, a{' '}
            <span className="text-primary-400 font-bold">
              <Typewriter
                words={[
                  'Cloud & DevOps Engineer',
                  'Java Fullstack Developer',
                  'AWS Solutions Architect',
                ]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </span>
          </h2>
          
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-primary-400 font-black text-lg tracking-[0.2em] mb-4 flex items-center gap-4"
            >
              <span className="text-white opacity-50">★★</span>
              BUILDING RESILIENT SYSTEMS
              <span className="text-white opacity-50">★★</span>
            </motion.div>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
              Bridging the gap between robust software engineering and high-performance cloud infrastructure. 
              <span className="text-slate-100 italic"> Focus on automation, AI/ML monitoring, and security.</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-2xl shadow-primary-500/20 glow-primary"
            >
              Explore My Work <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-white/10 hover:border-primary-500/50 hover:bg-white/5 text-slate-200 rounded-2xl font-bold flex items-center gap-2 transition-all backdrop-blur-md"
            >
              Get Resume <Download size={22} />
            </motion.a>
          </div>
        </motion.div>

        {/* Cinematic Decoration */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
           className="hidden lg:block relative group"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Neural Background */}
            <NeuralMesh />
            
            {/* Inner Content Card - Glossy Overhaul */}
            <motion.div 
               whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
               className="relative z-10 w-[85%] aspect-square glossy rounded-[4rem] flex flex-col items-center justify-center p-16 transition-all duration-700 shadow-[0_0_50px_-10px_rgba(56,189,248,0.2)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-white/5 to-blue-500/10 pointer-events-none" />
              
              <div className="relative z-10 text-center">
                 <div className="text-8xl font-black text-white/5 tracking-tighter mb-4 group-hover:text-primary-400/20 transition-all duration-700">
                   TECH
                 </div>
                 <div className="h-0.5 w-24 bg-primary-500 mb-8 mx-auto group-hover:w-48 transition-all duration-700" />
                 <div className="text-primary-400 font-black uppercase tracking-[0.5em] text-xs">
                   SYSTEMS ARCHITECT
                 </div>
              </div>

               {/* Floating Badges - Enhanced */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-8 glass-card px-8 py-5 rounded-[2rem] border-white/20 shadow-2xl transform rotate-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/40">
                    <span className="text-xl font-black text-white">AWS</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-primary-400 uppercase font-black tracking-widest leading-none mb-1">Elite Tier</div>
                    <div className="text-sm font-black text-white">Cloud Architect</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-8 glass-card px-8 py-5 rounded-[2rem] border-white/20 shadow-2xl transform -rotate-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/40">
                    <span className="text-xl font-black text-white">Java</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-orange-400 uppercase font-black tracking-widest leading-none mb-1">Back-end</div>
                    <div className="text-sm font-black text-white">Core Engineer</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
