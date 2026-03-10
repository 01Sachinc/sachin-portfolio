import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const ContactItem = ({ icon, label, value, onCopy, copied }: any) => {
  return (
    <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group relative overflow-hidden transition-all duration-500 hover:border-primary-500/30">
       <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
       <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-primary-500/40 border border-white/5">
         {icon}
       </div>
       <div className="flex-1 min-w-0">
          <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">{label}</div>
          <div className="text-base font-bold text-slate-100 truncate group-hover:text-primary-400 transition-colors duration-500">{value}</div>
       </div>
       <button 
         onClick={() => onCopy(value, label)}
         className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-primary-400 hover:bg-white/5 transition-all"
       >
         {copied === label ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
       </button>
    </div>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 80%)`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="flex flex-col items-center mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Connectivity
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-black font-heading text-center">
          Let's Start a <span className="text-gradient">Conversation</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-12 xl:col-span-5 space-y-6"
        >
          <ContactItem 
            icon={<Mail size={28} />} 
            label="Email Registry" 
            value={SOCIAL_LINKS.email} 
            onCopy={copyToClipboard} 
            copied={copied} 
          />
          <ContactItem 
            icon={<Phone size={28} />} 
            label="Direct Line" 
            value={SOCIAL_LINKS.phone} 
            onCopy={copyToClipboard} 
            copied={copied} 
          />

          <div className="grid grid-cols-2 gap-4 mt-8">
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-primary-500/40 transition-all duration-500 group">
                <Github size={24} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white">GitHub</span>
             </a>
             <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-primary-500/40 transition-all duration-500 group">
                <Linkedin size={24} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white">LinkedIn</span>
             </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           onMouseMove={handleMouseMove}
           className="lg:col-span-12 xl:col-span-7 glass-card p-12 md:p-16 rounded-[3rem] relative overflow-hidden group border-white/5"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background }}
          />

          <h3 className="text-3xl font-black font-heading mb-12 relative z-10">Send a Detailed <span className="text-primary-400">Message</span></h3>

          <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="group/field relative">
                <input type="text" id="name" required className="peer w-full bg-transparent border-b-2 border-white/10 py-4 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors placeholder-transparent" placeholder="Name" />
                <label htmlFor="name" className="absolute left-0 -top-2 text-xs font-black text-primary-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-500 select-none pointer-events-none">Full Name</label>
              </div>
              <div className="group/field relative">
                <input type="email" id="email" required className="peer w-full bg-transparent border-b-2 border-white/10 py-4 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors placeholder-transparent" placeholder="Email" />
                <label htmlFor="email" className="absolute left-0 -top-2 text-xs font-black text-primary-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-500 select-none pointer-events-none">Email Address</label>
              </div>
            </div>
            
            <div className="group/field relative">
                <input type="text" id="subject" required className="peer w-full bg-transparent border-b-2 border-white/10 py-4 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors placeholder-transparent" placeholder="Subject" />
                <label htmlFor="subject" className="absolute left-0 -top-2 text-xs font-black text-primary-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-500 select-none pointer-events-none">Subject Registry</label>
            </div>

            <div className="group/field relative">
              <textarea id="message" rows={4} required className="peer w-full bg-transparent border-b-2 border-white/10 py-4 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-0 -top-2 text-xs font-black text-primary-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-500 select-none pointer-events-none">Message Body</label>
            </div>

            <button className="px-12 py-6 bg-primary-500 hover:bg-primary-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all group/btn glow-primary active:scale-95">
              Broadcast System <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
