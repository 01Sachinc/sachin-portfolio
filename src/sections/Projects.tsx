import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, ArrowUpRight, Terminal, Server, ShieldCheck, Box } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.12), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative glass-card rounded-[3rem] overflow-hidden border-white/5 h-full flex flex-col"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      {/* Deployment Status Header */}
      <div className="relative pt-10 px-10 pb-6 flex items-center justify-between border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-3">
           <Server className="text-primary-500/50 group-hover:text-primary-400 transition-colors" size={18} />
           <span className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-widest">ENV: PROD_STABLE</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
           <span className="text-[9px] font-black font-mono text-green-500/80 uppercase">READY</span>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-1 relative z-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[8px] px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 font-black font-mono uppercase tracking-[0.1em] group-hover:border-primary-500/30 group-hover:text-primary-400 transition-all">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-black font-display mb-6 text-white group-hover:text-primary-400 transition-colors leading-[1.1] tracking-tight">
          {project.title} <span className="text-primary-500/20 group-hover:text-primary-500/40 transition-colors">/&gt;</span>
        </h3>
        
        <p className="text-slate-400 text-base leading-relaxed mb-12 flex-1 font-mono text-sm">
           <span className="text-primary-500/50 mr-2">&gt;</span>
           {project.description}
        </p>
        
        <div className="flex items-center gap-6 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-500 group/btn"
          >
            <Github size={18} className="group-hover/btn:rotate-[360deg] transition-transform duration-700" /> 
            Source_Code
          </a>
          {project.caseStudy && (
            <a 
              href={project.caseStudy}
              className="p-5 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-widest text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-500 group/btn"
            >
              <Terminal size={18} /> 
              Exec_Audit
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          Selected / Production
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black font-display text-center leading-tight">
          Deployed <span className="text-gradient drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">Envs</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
