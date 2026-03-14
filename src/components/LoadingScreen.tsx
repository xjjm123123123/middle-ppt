import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-[var(--color-bg-dark)] flex items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-bronze/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-bronze"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-bronze/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-bronze/80 text-sm tracking-[0.3em] uppercase"
        >
          加载中...
        </motion.div>
      </div>
    </motion.div>
  );
}
