import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Award, BookOpen, Briefcase, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Expected 2026',
    icon: <Award className="text-primary-400" />
  },
  {
    title: 'Cloud DevOps Internship',
    issuer: 'Tech Innovations Inc.',
    date: '2025',
    icon: <Briefcase className="text-blue-400" />
  },
  {
    title: 'Professional Cloud Engineer Training',
    issuer: 'AWS Academy',
    date: '2025',
    icon: <BookOpen className="text-cyan-400" />
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

  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 85%)`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onMouseMove={handleMouseMove}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass-card p-10 rounded-[2rem] border-white/5 hover:border-primary-500/20 transition-all duration-500 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-500 border border-white/5">
          {cert.icon}
        </div>
        <h3 className="text-2xl font-black font-heading mb-3 text-slate-100 group-hover:text-primary-400 transition-colors">
          {cert.title}
        </h3>
        <p className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs mb-6 px-3 py-1 bg-primary-500/5 rounded-full inline-block">
          {cert.issuer}
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 text-slate-500 text-sm font-bold">
          <span>{cert.date}</span>
          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 group-hover:text-primary-400 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Achievements
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          Certifications & <span className="text-gradient">Experience</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
