import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SlideProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Slide({ children, className = '', title, subtitle }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full flex flex-col py-12 md:py-16 relative ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-10 z-20">
          {title && (
            <h2 className="text-3xl md:text-4xl font-serif font-light text-bronze tracking-wide mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <div className="text-xs md:text-sm text-bronze/60 font-sans tracking-[0.2em] uppercase">
              {subtitle}
            </div>
          )}
          <div className="h-px w-12 bg-cinnabar/50 mt-6" />
        </div>
      )}
      <div className="flex-1 relative z-20 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
