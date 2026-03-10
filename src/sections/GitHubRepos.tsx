import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, ExternalLink } from 'lucide-react';
import { fetchGithubRepos } from '../utils/githubApi';
import type { GithubRepo } from '../utils/githubApi';
import { SOCIAL_LINKS } from '../constants';

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
          GitHub <span className="text-gradient">Repositories</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          [...Array(6)].map((_, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl animate-pulse h-48" />
          ))
        ) : (
          repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl group border-white/5 hover:border-primary-500/30 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <Github className="text-primary-400 group-hover:text-primary-300 transition-colors" size={24} />
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1">
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch size={14} /> {repo.forks_count}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold font-heading mb-2 text-slate-100 group-hover:text-primary-400 transition-colors truncate">
                {repo.name}
              </h3>
              
              <p className="text-sm text-slate-400 line-clamp-2 mb-6 h-10">
                {repo.description || 'Professional DevOps/Cloud engineering repository.'}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {repo.language || 'Documentation'}
                </span>
                <ExternalLink size={16} className="text-slate-600 group-hover:text-primary-400 transition-colors" />
              </div>
            </motion.a>
          ))
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <a 
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View All Repositories
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubRepos;
