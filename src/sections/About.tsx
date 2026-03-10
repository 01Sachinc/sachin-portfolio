import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Perspective
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          Building <span className="text-gradient">Resilient</span> Systems
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-12 xl:col-span-8 glass-card p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary-500/10 transition-colors duration-700" />
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-slate-100 leading-tight">
            I bridge the gap between <span className="text-primary-400">Software Engineering</span> and <span className="text-blue-500">Cloud Infrastructure</span>.
          </h3>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed max-w-4xl">
            <p>
              With a foundation in **Java Fullstack Development** and a specialized focus on **DevOps/Cloud Automation**, I architect systems that are built to scale, monitor themselves, and recover automatically. 
            </p>
            <p>
              My expertise lies in integrating **AI/ML insights** into monitoring pipelines (Prometheus/Grafana) and automating secure AWS architectures using **Terraform and Bash**. I believe in the "Zero-Trust" security model and the power of "Infrastructure as Code" to drive consistent excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 border-t border-white/5 pt-12">
            <div>
              <div className="text-4xl font-black text-primary-500 font-heading tracking-tighter">AWS</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Specialist</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary-500 font-heading tracking-tighter">JAVA</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Fullstack</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary-500 font-heading tracking-tighter">AI</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary-500 font-heading tracking-tighter">IaC</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Automation</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-12 xl:col-span-4 flex flex-col gap-8"
        >
          <div className="flex-1 glass-card p-10 rounded-[2.5rem] border-primary-500/20 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-5xl font-black text-white/5 absolute -top-8 -right-8 italic group-hover:text-primary-500/10 transition-colors">
              MISSION
            </div>
             <p className="text-xl font-bold text-slate-200 relative z-10 italic">
               "Empowering businesses through automated, secure, and intelligent engineering."
             </p>
          </div>
          
          <div className="flex-1 glass-card p-10 rounded-[2.5rem] border-blue-500/20 relative overflow-hidden group">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center font-bold text-blue-400 font-heading">0%</div>
                <h4 className="font-bold text-lg">Manual Effort</h4>
             </div>
             <p className="text-slate-400 text-sm">
               Striving for total automation across the SDLC, from local build to production deployment.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
