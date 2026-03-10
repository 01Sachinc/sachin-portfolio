import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start group">
          <div className="flex items-center gap-3">
            <Logo size={32} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-primary-500/10 text-slate-400 hover:text-primary-400 transition-all border border-white/5 hover:border-primary-500/20">
            <Github size={20} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-primary-500/10 text-slate-400 hover:text-primary-400 transition-all border border-white/5 hover:border-primary-500/20">
            <Linkedin size={20} />
          </a>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-green-500/10 text-slate-400 hover:text-green-400 transition-all border border-white/5 hover:border-green-500/20">
            <MessageCircle size={20} />
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-3 rounded-xl bg-white/5 hover:bg-primary-500/10 text-slate-400 hover:text-primary-400 transition-all border border-white/5 hover:border-primary-500/20">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
