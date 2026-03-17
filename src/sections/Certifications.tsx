import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Award, Briefcase, BookOpen, ExternalLink, ShieldCheck, Hash, CalendarDays, Terminal } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Expected 2026',
    icon: <Award className="text-primary-400" />,
    hash: 'AWS-SA-CERT-2026'
  },
  {
    title: 'Cloud DevOps Internship',
    issuer: 'Tech Innovations Inc.',
    date: '2025',
    icon: <Briefcase className="text-blue-400" />,
    hash: 'TECH-INTERN-2025-SACHIN'
  },
  {
    title: 'Professional Cloud Engineer Training',
    issuer: 'AWS Academy',
    date: '2025',
    icon: <BookOpen className="text-cyan-400" />,
    hash: 'AWS-ACADEMY-ENG-001'
  }
];

const CertCard = ({ cert, index }: { cert: any, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 85%)`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onMouseMove={handleMouseMove}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass-card p-10 rounded-[3rem] border-white/5 hover:border-primary-500/20 transition-all duration-700 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
           <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 transition-all duration-500 shadow-xl group-hover:shadow-primary-500/10">
             {cert.icon}
           </div>
           <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <ShieldCheck className="text-primary-500/30 group-hover:text-primary-500 transition-colors" size={20} />
              <span className="text-[9px] font-black font-mono text-primary-500/40 group-hover:text-primary-500 transition-colors">VERIFIED</span>
           </div>
        </div>

        <h3 className="text-2xl font-black font-display mb-4 text-white group-hover:text-primary-400 transition-colors leading-[1.1]">
          {cert.title}
        </h3>
        
        <div className="flex items-center gap-2 mb-8 p-3 rounded-xl bg-black/40 border border-white/5 w-fit">
           <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
           <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{cert.issuer}</span>
        </div>

        <div className="space-y-4 pt-10 border-t border-white/5">
           <div className="flex items-center justify-between group/meta">
              <div className="flex items-center gap-3 text-slate-500 group-hover/meta:text-slate-300 transition-colors">
                 <CalendarDays size={14} />
                 <span className="text-[9px] font-black font-mono uppercase">Issued_Date</span>
              </div>
              <span className="text-[11px] font-bold font-mono text-white">{cert.date}</span>
           </div>

           <div className="flex items-center justify-between group/meta">
              <div className="flex items-center gap-3 text-slate-500 group-hover/meta:text-slate-300 transition-colors">
                 <Hash size={14} />
                 <span className="text-[9px] font-black font-mono uppercase">Protocol_Hash</span>
              </div>
              <span className="text-[8px] font-bold font-mono text-primary-500/60 break-all text-right max-w-[150px]">{cert.hash}</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          Protocols / Verified
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black font-display text-center leading-tight">
          System <span className="text-gradient drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">Trust</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
        {certifications.map((cert, index) => (
          <CertCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
