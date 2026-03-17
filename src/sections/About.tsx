import { motion } from 'framer-motion';
import { Cpu, Globe, Lock, Workflow, Terminal, Activity, Server, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-10 font-mono text-[10px] tracking-tight text-white leading-relaxed select-none">
          SYSTEMINIT [OK] <br />
          CORE_MODULE_MOUNTING... <br />
          SEC_READY: TRUE <br />
          NET_STACK: STABLE <br />
        </div>
      </div>

      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          Perspective / Registry
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black font-display text-center leading-tight">
          Core <span className="text-gradient drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">Module</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto relative z-10">
        {/* Main Card: Identity Module */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-8 glass-card p-10 md:p-14 rounded-[3rem] relative overflow-hidden group"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-400 border border-primary-500/20 shadow-lg group-hover:shadow-primary-500/20 transition-all duration-500">
              <Cpu size={24} />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 via-primary-500/10 to-transparent" />
            <span className="text-[10px] font-black font-mono text-primary-500/50 tracking-tighter uppercase">ID: BRIDGE_OS_01</span>
          </div>

          <h3 className="text-3xl md:text-5xl font-black font-display mb-10 text-white leading-[1.1]">
            I build the <span className="text-primary-400">Intelligence</span> between Software and <span className="text-blue-500 font-medium italic">Infrastructure.</span>
          </h3>

          <div className="space-y-8 text-slate-400 text-lg leading-relaxed max-w-4xl">
            <p className="flex gap-4">
              <span className="text-primary-500 font-bold opacity-30 font-mono">01</span>
              <span>
                Systems Architect and **Java Fullstack Engineer** with a passion for **Autonomous DevOps**. I don't just deploy; I engineer resilient ecosystems.
              </span>
            </p>
            <p className="flex gap-4">
              <span className="text-primary-500 font-bold opacity-30 font-mono">02</span>
              <span>
                Specializing in AI-integrated monitoring and secure AWS cloud automation. My mission: Zero manual effort through **Infrastructure as Code**.
              </span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-md font-mono">
            {[
              { label: "Arch", value: "AWS", icon: Globe },
              { label: "Logic", value: "Java", icon: Terminal },
              { label: "Intel", value: "AI/ML", icon: Activity },
              { label: "Flow", value: "IaC", icon: Workflow },
            ].map((stat, i) => (
              <div key={i} className="group/stat">
                <div className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2 group-hover/stat:text-primary-400 transition-colors">{stat.label}</div>
                <div className="text-2xl font-black text-white group-hover/stat:translate-x-1 transition-transform">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Side Cards: System Constraints */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 glass-card p-10 rounded-[3rem] relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-8">
              <Lock className="text-white/5 scale-[4] -rotate-12 group-hover:text-primary-500/10 transition-colors" />
            </div>
            <div className="relative z-10 text-center">
              <h4 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-6">Protocol / Mission</h4>
              <p className="text-2xl font-bold text-white leading-tight italic">
                "Empowering businesses through automated, secure, and intelligent engineering."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[3rem] border-primary-500/20 relative overflow-hidden group"
          >
             <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center font-black text-primary-400 text-xl font-mono shadow-inner">0%</div>
                <div>
                  <h4 className="font-black text-white text-lg leading-none">Manual Delta</h4>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Efficiency Target</span>
                </div>
             </div>
             <p className="text-slate-400 text-sm font-mono leading-relaxed">
               Continuous optimization toward zero-manual intervention in complex SDLC pipelines.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
