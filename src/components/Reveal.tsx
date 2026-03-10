import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
