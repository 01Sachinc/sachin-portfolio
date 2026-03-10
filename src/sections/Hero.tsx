import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

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
          
          <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            Bridging the gap between robust software engineering and high-performance cloud infrastructure. 
            <span className="text-slate-100 italic"> Focus on automation, AI/ML monitoring, and security.</span>
          </p>
          
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
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-primary-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-[10%] border border-primary-500/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-[20%] border-2 border-dashed border-primary-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
            
            {/* Inner Content Card */}
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -10 }}
              className="relative z-10 w-[80%] aspect-square glass-dark rounded-[3rem] border-white/10 flex flex-col items-center justify-center p-12 transition-all duration-500 shadow-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-blue-500/5 group-hover:scale-110 transition-transform duration-700" />
              <div className="text-8xl font-black text-white/5 group-hover:text-primary-400/10 transition-colors tracking-tighter duration-700">
                SCSI
              </div>
              <div className="mt-4 text-primary-400 font-bold uppercase tracking-[0.4em] text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                Engineering Excellence
              </div>

               {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-10 glass px-6 py-4 rounded-3xl shadow-3xl border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-xl font-bold text-primary-400">AWS</div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Certified</div>
                    <div className="text-sm font-bold">Solutions Architect</div>
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
