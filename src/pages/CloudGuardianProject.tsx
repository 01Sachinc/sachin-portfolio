import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Cpu, Server, Zap, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudGuardianProject = () => {
  const [metrics, setMetrics] = useState({ cpu: 45, mem: 62, scale: 3, status: 'Healthy' });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.floor(Math.random() * 20) + 40 + (Math.random() > 0.9 ? 30 : 0),
        mem: Math.floor(Math.random() * 10) + 60,
        scale: prev.cpu > 80 ? 5 : 3,
        status: prev.cpu > 80 ? 'Heal Triggered' : 'Healthy'
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 pb-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <Link to="/" className="text-primary-400 flex items-center gap-2 mb-8 hover:text-primary-300 transition-colors">
          <ChevronRight className="rotate-180" size={18} />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-bold mb-6">
              <Shield size={16} /> Autonomous DevOps Engine
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
              CloudGuardian <span className="text-gradient">AI X</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              An enterprise-grade autonomous DevOps platform integrating Kubernetes, Terraform, and AI-based anomaly detection for self-healing infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
               <a href="#" className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary-500 text-white font-bold hover:bg-primary-600 transition-all">
                 <ExternalLink size={20} /> Live Dashboard
               </a>
               <a href="#" className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                 <Github size={20} /> Repository
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass-card rounded-[2.5rem] p-8 border-white/10 bg-dark-lighter/50 backdrop-blur-3xl overflow-hidden">
               <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Activity className="text-primary-400 animate-pulse" size={20} /> Real-Time Telemetry
                  </h3>
                  <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${metrics.status === 'Healthy' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400 animate-pulse'}`}>
                    {metrics.status}
                  </span>
               </div>

               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-slate-400 font-medium">
                      <span>CPU Utilization</span>
                      <span>{metrics.cpu}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         className={`h-full ${metrics.cpu > 80 ? 'bg-red-500' : 'bg-primary-500'}`}
                         animate={{ width: `${metrics.cpu}%` }}
                       />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2 text-slate-400 font-medium">
                      <span>Memory Load</span>
                      <span>{metrics.mem}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         className="h-full bg-blue-500"
                         animate={{ width: `${metrics.mem}%` }}
                       />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                       <Cpu size={24} className="text-primary-400 mb-2" />
                       <div className="text-2xl font-black">{metrics.scale}</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Active Nodes</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                       <Server size={24} className="text-blue-400 mb-2" />
                       <div className="text-2xl font-black">2.4k</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Requests/s</div>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Architecture Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Enterprise <span className="text-gradient">Architecture</span></h2>
            <p className="text-slate-400">Multi-layer defense and automated orchestration pipeline.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "AI Core", desc: "Python-based ML engine detecting anomalies in metric streams." },
              { icon: Shield, title: "Self-Healing", desc: "Bash-orchestrated remediation fixing failures in < 5 seconds." },
              { icon: Activity, title: "Observability", desc: "Prometheus & Grafana layered monitoring with WebSocket sync." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-4xl border-white/5 hover:border-primary-500/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CloudGuardianProject;
