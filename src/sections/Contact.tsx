import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, Globe, Zap, Clock, Wifi, Cpu, Database, Activity, Terminal, Server, ShieldCheck, MapPin, BarChart3 } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { SOCIAL_LINKS } from '../constants';

const TelemetryCard = ({ icon: Icon, label, value, subValue, trend }: any) => (
  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-primary-500/30 transition-all">
    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={100} />
    </div>
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
        <Icon size={20} />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</span>
      {trend && (
        <span className={`ml-auto text-[10px] font-bold ${trend > 0 ? 'text-green-400' : 'text-blue-400'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-black text-white">{value}</span>
      <span className="text-xs font-medium text-slate-500">{subValue}</span>
    </div>
    <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-primary-500"
        initial={{ width: '0%' }}
        animate={{ width: typeof value === 'string' ? value : `${Math.min(95, parseFloat(value))}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const ConnectivityGrid = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56,189,248,0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: [0, 1, 0], x: '100vw' }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute h-[1px] w-40 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
          style={{ top: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
};

const Contact = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [metrics, setMetrics] = useState({
    cpu: 24.5,
    memory: 42.1,
    latency: 12,
    threats: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setMetrics(prev => ({
        cpu: +(prev.cpu + (Math.random() - 0.5) * 5).toFixed(1),
        memory: +(prev.memory + (Math.random() - 0.5) * 2).toFixed(1),
        latency: +(prev.latency + (Math.random() - 0.5) * 4).toFixed(0),
        threats: prev.threats
      }));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const logEntries = useMemo(() => [
    "Initializing protocol...",
    "Global node distribution active.",
    "Anomaly detection engine standby.",
    "Network topology verified.",
    "Self-healing sequences optimized.",
    "Predictive failure analysis running.",
    "CloudGuardian core heartbeat: Stable."
  ], []);

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <ConnectivityGrid />
      
      <div className="flex flex-col items-center mb-24 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
        >
          Operational Intelligence
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black font-heading text-center leading-tight">
          System <span className="text-gradient">Status</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto relative z-10">
        {/* Left Column: Presence & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-12 xl:col-span-4 space-y-6"
        >
          <div className="glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden group h-full">
            <div className="flex justify-between items-start mb-10">
              <h4 className="text-2xl font-black flex items-center gap-3 text-white">
                <Globe className="text-primary-400" size={24} /> Nodes
              </h4>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-widest border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Operational
              </div>
            </div>
            
            <div className="space-y-8 mb-12">
               <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                     <MapPin className="text-primary-400" size={16} />
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Distribution</span>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between text-xs font-bold text-slate-300">
                        <span>us-east-1</span>
                        <span className="text-green-400">Stable</span>
                     </div>
                     <div className="flex justify-between text-xs font-bold text-slate-300">
                        <span>eu-west-1</span>
                        <span className="text-green-400">Stable</span>
                     </div>
                     <div className="flex justify-between text-xs font-bold text-slate-300">
                        <span>ap-south-1 (Primary)</span>
                        <span className="text-green-400">Optimal</span>
                     </div>
                  </div>
               </div>

               <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                     <BarChart3 className="text-primary-400" size={16} />
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Metadata</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <div className="text-[8px] text-slate-500 font-bold uppercase tracking-tighter">Availability</div>
                        <div className="text-lg font-black text-white">99.98%</div>
                     </div>
                     <div>
                        <div className="text-[8px] text-slate-500 font-bold uppercase tracking-tighter">Latency Min</div>
                        <div className="text-lg font-black text-white">4ms</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                 <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                    <Clock size={20} />
                 </div>
                 <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Local System Time</div>
                    <div className="text-2xl font-black font-heading text-white">{time}</div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-2xl flex flex-col items-center gap-3 border border-white/5 hover:border-primary-500/40 transition-all group">
                    <Github size={24} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white">GitHub</span>
                 </a>
                 <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-2xl flex flex-col items-center gap-3 border border-white/5 hover:border-primary-500/40 transition-all group">
                    <Linkedin size={24} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white">LinkedIn</span>
                 </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Telemetry Dashboard */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-12 xl:col-span-8 space-y-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TelemetryCard icon={Cpu} label="System Load" value={`${metrics.cpu}%`} subValue="CPU" trend={+2.1} />
            <TelemetryCard icon={Database} label="Memory Usage" value={`${metrics.memory}%`} subValue="RAM" trend={-1.4} />
            <TelemetryCard icon={Activity} label="Network Latency" value={`${metrics.latency}ms`} subValue="PING" trend={+0.5} />
          </div>

          <div className="glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-white flex items-center gap-4">
                  <Terminal className="text-primary-400" size={24} /> 
                  Decision <span className="text-primary-400 italic font-medium">Stream</span>
                </h3>
                <div className="flex items-center gap-3">
                   <ShieldCheck className="text-green-400" size={20} />
                   <span className="text-[10px] font-black uppercase text-green-400 tracking-widest">Protocol: Secure</span>
                </div>
             </div>

             <div className="bg-black/40 rounded-2xl p-6 font-mono text-sm border border-white/5 space-y-3 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-4">
                   <Activity className="text-primary-500/20 animate-pulse" size={40} />
                </div>
                {logEntries.map((line, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="text-primary-500/40 select-none">[{i+1}00]</span>
                    <span className={i === logEntries.length - 1 ? "text-primary-400 font-bold" : "text-slate-400"}>
                      {i === logEntries.length - 1 && "> "} {line}
                    </span>
                  </motion.div>
                ))}
             </div>

             <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Uptime", value: "99.9%", icon: Server },
                  { label: "Active Nodes", value: "12", icon: Globe },
                  { label: "Security Scale", value: "L-IV", icon: ShieldCheck },
                  { label: "Bandwidth", value: "Gpbs", icon: Wifi },
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <stat.icon size={18} className="mx-auto mb-3 text-slate-600 group-hover:text-primary-400 transition-colors" />
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-lg font-black text-white">{stat.value}</div>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
