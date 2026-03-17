import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-primary-500 rounded-full blur-[100px] w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none"
        />

        {/* Logo/Brand Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="text-4xl md:text-6xl font-black font-display tracking-tighter text-white mb-2">
            SACHIN <span className="text-primary-500">{" />"}</span>
          </div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
          />
        </motion.div>

        {/* Progress System */}
        <div className="w-64 md:w-80 space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Core Initialized</span>
            <span className="text-sm font-black text-primary-400 font-mono">{Math.floor(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-primary-500 shadow-[0_0_20px_rgba(14,165,233,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Status Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-8 text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400"
        >
          {progress < 40 ? "Linking Dependencies..." : progress < 80 ? "Optimizing Assets..." : "Establishing Protocol..."}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
