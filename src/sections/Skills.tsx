import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu, Terminal, Shield, Workflow, Layers, Box, Globe, Activity } from 'lucide-react';

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Cloud & DevOps': return <Globe size={20} />;
    case 'Full-Stack Development': return <Workflow size={20} />;
    case 'AI & Monitoring': return <Activity size={20} />;
    case 'Core Engineering': return <Cpu size={20} />;
    default: return <Layers size={20} />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          Processing / Clusters
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black font-display text-center leading-tight">
          System <span className="text-gradient drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">Logic</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto relative z-10">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] overflow-hidden group hover:bg-white/[0.04] transition-all duration-700 h-full flex flex-col border-white/5"
          >
            <div className="p-8 pb-4">
              <div className="flex items-center justify-between mb-8">
                 <div className="p-3 rounded-2xl bg-primary-500/5 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 border border-white/5 shadow-lg group-hover:shadow-primary-500/40">
                   <SkillIcon category={skill.category} />
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-[8px] font-black font-mono text-slate-600 uppercase tracking-tighter">CLUSTER_NODE</span>
                    <span className="text-[10px] font-black font-mono text-primary-500/40 tracking-tighter">0{index + 1}</span>
                 </div>
              </div>
              
              <h3 className="text-lg font-black font-display mb-8 text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight leading-tight">
                {skill.category}
              </h3>
            </div>

            <div className="flex-1 p-8 pt-0 space-y-3">
              {skill.items.map((item) => (
                <div key={item} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between group/item hover:border-primary-500/20 transition-all">
                  <span className="text-[11px] font-bold font-mono text-slate-400 group-hover/item:text-white transition-colors">
                    {item}
                  </span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((dot) => (
                      <div key={dot} className={`w-1 h-1 rounded-full ${index % 2 === 0 ? 'bg-primary-500/20' : 'bg-blue-500/20'}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-black/40 border-t border-white/5 flex items-center justify-between">
               <span className="text-[8px] font-black font-mono text-slate-500 uppercase">STATUS: OPTIMAL</span>
               <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                  <span className="text-[8px] font-black font-mono text-green-500/80">ACTIVE</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
