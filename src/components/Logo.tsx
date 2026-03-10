import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 40 }: LogoProps) => {
  return (
    <a href="#hero" className={`relative group inline-block ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        whileHover="hover"
        className="relative z-10"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Monogram - Inspired by User Image */}
        <motion.g filter="url(#glow)">
          {/* Left Large Arc */}
          <motion.path
            d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C53.5 90 57 89.5 60 88.5"
            stroke="url(#logo-gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            variants={{
              initial: { pathLength: 1, opacity: 0.9 },
              hover: { scale: 1.05, opacity: 1 }
            }}
          />
          {/* Top Right Segment */}
          <motion.path
            d="M90 40C90 23 77 10 60 10"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            variants={{
              initial: { pathLength: 1, opacity: 0.7 },
              hover: { scale: 1.05, opacity: 1, x: 2, y: -2 }
            }}
          />
          {/* Bottom Right Segment & Bar */}
          <motion.path
            d="M65 50H90C90 73 72 90 50 90"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            variants={{
              initial: { pathLength: 1, opacity: 0.8 },
              hover: { scale: 1.05, opacity: 1, x: 2, y: 2 }
            }}
          />
        </motion.g>
      </motion.svg>
      
      {/* Absolute Reflective Layer for the SVG area */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
    </a>
  );
};

export default Logo;
