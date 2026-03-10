import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative glass-card rounded-[2rem] overflow-hidden border-white/5"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      {/* Clean Header Area for Minimalist Look */}
      <div className="relative pt-10 px-10 pb-4 border-b border-white/5 bg-dark-lighter/30">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[9px] px-2 py-0.5 rounded-md bg-primary-500/5 border border-primary-500/10 text-primary-400 font-bold uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
        <div className="absolute top-8 right-8 text-slate-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
           <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="p-10 relative z-10">
        <h3 className="text-2xl font-black font-heading mb-4 text-slate-100 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-10 h-10 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>
        
        <div className="flex items-center gap-8">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-white transition-colors group/link"
          >
            <Github size={18} className="group-hover/link:scale-110 transition-transform" /> 
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Selected Works
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          Featured <span className="text-gradient">Case Studies</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
