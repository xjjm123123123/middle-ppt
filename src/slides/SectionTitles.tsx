import { motion } from 'motion/react';
import { Clock, CheckCircle2, Calendar, AlertTriangle } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

function SectionSlide({ id, title, subtitle, icon, color }: SectionProps) {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[var(--color-bg-dark)]">
      {/* Background Decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className={`w-[60vw] h-[60vw] rounded-full bg-gradient-to-br ${color} to-transparent opacity-[0.03] blur-[100px]`} />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-white/5 blur-xl rounded-full transform scale-150 opacity-50" />
          <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm">
            {icon}
          </div>
          <div className="absolute -top-12 -left-12 text-[120px] font-serif font-bold opacity-[0.03] text-white select-none pointer-events-none">
            {id}
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white font-light mb-6 tracking-wider"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent mb-6 opacity-50"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/40 font-sans text-sm md:text-base tracking-[0.3em] uppercase"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}

export function Section1() {
  return (
    <SectionSlide 
      id="01"
      title="进度符合度"
      subtitle="Progress & Schedule Compliance"
      icon={<Clock className="w-12 h-12 text-bronze" strokeWidth={1} />}
      color="from-bronze"
    />
  );
}

export function Section2() {
  return (
    <SectionSlide 
      id="02"
      title="已完成工作"
      subtitle="Completed Research & Achievements"
      icon={<CheckCircle2 className="w-12 h-12 text-jade" strokeWidth={1} />}
      color="from-jade"
    />
  );
}

export function Section3() {
  return (
    <SectionSlide 
      id="03"
      title="后续规划"
      subtitle="Future Research Plan"
      icon={<Calendar className="w-12 h-12 text-white/80" strokeWidth={1} />}
      color="from-blue-500"
    />
  );
}

export function Section4() {
  return (
    <SectionSlide 
      id="04"
      title="问题与困难"
      subtitle="Challenges & Bottlenecks"
      icon={<AlertTriangle className="w-12 h-12 text-cinnabar" strokeWidth={1} />}
      color="from-cinnabar"
    />
  );
}
