import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone } from 'lucide-react';

interface DeviceSwitcherProps {
  children: ReactNode;
}

type DeviceType = 'laptop' | 'mobile';

const DeviceSwitcher = ({ children }: DeviceSwitcherProps) => {
  const [device, setDevice] = useState<DeviceType>('laptop');

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden flex flex-col">
      {/* Device Controls - Floating Glass Bar */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
        <div className="glass-card px-2 py-2 rounded-2xl flex items-center gap-2 border-white/10 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setDevice('laptop')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-500 ${
              device === 'laptop' 
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/40 font-black' 
                : 'text-slate-400 hover:text-white hover:bg-white/5 font-bold'
            }`}
          >
            <Monitor size={18} />
            <span className="text-[10px] uppercase tracking-widest">Laptop View</span>
          </button>
          
          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-500 ${
              device === 'mobile' 
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/40 font-black' 
                : 'text-slate-400 hover:text-white hover:bg-white/5 font-bold'
            }`}
          >
            <Smartphone size={18} />
            <span className="text-[10px] uppercase tracking-widest">Mobile View</span>
          </button>
        </div>
      </div>

      {/* Viewport Container */}
      <div className={`flex-1 w-full flex items-center justify-center transition-all duration-700 ease-[0.16,1,0.3,1] ${
          device === 'mobile' ? 'py-12 bg-black/40' : 'p-0'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={device}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`relative transition-all duration-700 ease-[0.16,1,0.3,1] shadow-2xl ${
              device === 'mobile' 
                ? 'w-[375px] h-[750px] rounded-[3rem] border-[12px] border-slate-900 overflow-hidden ring-4 ring-white/5' 
                : 'w-full min-h-screen border-0'
            }`}
          >
            {/* Mobile Status Bar Simulation */}
            {device === 'mobile' && (
              <div className="absolute top-0 inset-x-0 h-8 bg-slate-900 flex items-center justify-between px-8 z-[60]">
                <span className="text-[10px] text-white/40 font-bold">9:41</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-3.5 h-3.5 rounded-full border border-white/20" />
                  <div className="w-5 h-2.5 rounded-sm border border-white/20" />
                </div>
              </div>
            )}

            {/* Main Application Interface */}
            <div className={`w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar ${
              device === 'mobile' ? 'pt-8' : ''
            }`}>
              {children}
            </div>

            {/* Mobile Home Bar Simulation */}
            {device === 'mobile' && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/10 rounded-full z-[60]" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(14, 165, 233, 0.3);
        }
      `}</style>
    </div>
  );
};

export default DeviceSwitcher;
