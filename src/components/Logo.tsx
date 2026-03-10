import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 40 }: LogoProps) => {
  return (
    <a href="#hero" className={`relative group inline-block ${className}`}>
      <motion.svg
        width={size * 2.5}
        height={size}
        viewBox="0 0 250 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        whileHover="hover"
        className="relative z-10"
      >
        {/* Glossy Background Gloss */}
        <defs>
          <linearGradient id="logo-gloss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* CS Text Symbol */}
        <motion.path
          d="M20 70C20 81.0457 28.9543 90 40 90H70V75H40C37.2386 75 35 72.7614 35 70V30C35 27.2386 37.2386 25 40 25H70V10H40C28.9543 10 20 18.9543 20 30V70Z"
          fill="currentColor"
          className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          variants={{
            initial: { opacity: 0.9, scale: 0.95 },
            hover: { opacity: 1, scale: 1 }
          }}
        />
        <motion.path
          d="M80 15H130C135.523 15 140 19.4772 140 25V40C140 45.5228 135.523 50 130 50H95V65H130C135.523 65 140 69.4772 140 75V85C140 91.0457 135.523 96 129.477 96H80V80H125V66H95C89.4772 66 85 61.5228 85 56V40C85 34.4772 89.4772 30 95 30H125V26H80V15Z"
          fill="currentColor"
          className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          variants={{
            initial: { opacity: 0.9, scale: 0.95 },
            hover: { opacity: 1, scale: 1 }
          }}
        />

        {/* Glossy Swooshes */}
        <motion.path
          d="M150 10C180 10 210 30 220 60C230 90 210 120 180 130"
          stroke="#EA580C"
          strokeWidth="14"
          strokeLinecap="round"
          className="drop-shadow-[0_0_20px_rgba(234,88,12,0.5)]"
          variants={{
            initial: { pathLength: 0.4, opacity: 0.6 },
            hover: { pathLength: 1, opacity: 1 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.path
          d="M165 25C190 25 210 45 215 70C220 95 205 115 185 120"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          className="opacity-40"
          variants={{
            initial: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 0.6 }
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        />
      </motion.svg>
      
      {/* Absolute Reflective Layer for the SVG area */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
    </a>
  );
};

export default Logo;
