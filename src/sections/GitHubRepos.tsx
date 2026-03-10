import { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, Star, GitBranch, ExternalLink } from 'lucide-react';
import { fetchGithubRepos } from '../utils/githubApi';
import type { GithubRepo } from '../utils/githubApi';
import { SOCIAL_LINKS } from '../constants';

const RepoCard = ({ repo, index }: { repo: GithubRepo, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 85%)`;

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onMouseMove={handleMouseMove}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative glass-card p-10 rounded-[2rem] border-white/5 hover:border-primary-500/20 transition-all duration-500 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-500">
            <Github size={24} />
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 group-hover:text-primary-400 transition-colors">
              <Star size={14} /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 group-hover:text-primary-400 transition-colors">
              <GitBranch size={14} /> {repo.forks_count}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-black font-heading mb-3 text-slate-100 group-hover:text-primary-400 transition-colors truncate">
          {repo.name}
        </h3>
        
        <p className="text-sm text-slate-400 font-medium line-clamp-2 mb-8 h-10 group-hover:text-slate-300 transition-colors">
          {repo.description || 'Professional DevOps/Cloud engineering repository.'}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          <span className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em]">
            {repo.language || 'Documentation'}
          </span>
          <ExternalLink size={16} className="text-slate-600 group-hover:text-primary-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </motion.a>
  );
};

const GitHubRepos = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      const username = SOCIAL_LINKS.github.split('/').pop() || '01Sachinc';
      const data = await fetchGithubRepos(username);
      setRepos(data);
      setLoading(false);
    };
    getRepos();
  }, []);

  return (
    <section id="github" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Open Source
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          GitHub <span className="text-gradient text-glow">Ecosystem</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          [...Array(6)].map((_, i) => (
            <div key={i} className="glass-card p-10 rounded-[2rem] animate-pulse h-64" />
          ))
        ) : (
          repos.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 text-center"
      >
        <a 
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline group inline-flex items-center gap-2"
        >
          Explore Entire Registry <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubRepos;
