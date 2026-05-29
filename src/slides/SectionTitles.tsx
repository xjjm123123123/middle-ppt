import { BookOpenText, Cpu, Radio, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: ReactNode;
  color: string;
}

function SectionSlide({ id, title, subtitle, summary, icon, color }: SectionProps) {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[var(--color-bg-dark)] section-panel">
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] bg-gradient-to-br ${color} to-transparent`}
      />

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center slide-fade-in">
        <div className="mb-8 relative">
          <div className="relative p-6 bg-white/5 border border-white/10 rounded-lg shadow-lg">
            {icon}
          </div>
          <div className="absolute -top-12 -left-12 text-[120px] font-serif font-bold opacity-[0.03] text-white select-none pointer-events-none">
            {id}
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-serif text-white font-light mb-6 tracking-wider">{title}</h2>

        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent mb-6 opacity-50" />

        <p className="text-white/40 font-sans text-sm md:text-base tracking-[0.3em] uppercase">{subtitle}</p>

        <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-white/70 font-serif tracking-wide">
          {summary}
        </p>
      </div>
    </div>
  );
}

export function Section1() {
  return (
    <SectionSlide
      id="01"
      title="研究背景与文化对象"
      subtitle="Communication Context / Cultural Object / Design Goals"
      summary="从古画数字传播困境出发，明确《豳风图》的复合文化价值与系统设计目标。"
      icon={<BookOpenText className="w-12 h-12 text-bronze" strokeWidth={1} />}
      color="from-bronze"
    />
  );
}

export function Section2() {
  return (
    <SectionSlide
      id="02"
      title="传播学理论框架"
      subtitle="Encoding / Affordance / Uses & Gratifications / Immersive Narrative"
      summary="以线上数字长卷平台为对象，用编码/解码、媒介可供性、使用与满足与叙事沉浸等理论进行界面级解构分析。"
      icon={<Radio className="w-12 h-12 text-jade" strokeWidth={1} />}
      color="from-jade"
    />
  );
}

export function Section3() {
  return (
    <SectionSlide
      id="03"
      title="系统技术实现"
      subtitle="Slicing / Visual Generation / Interaction / RAG"
      summary="围绕长卷切片、语义标注、意象视频生成、双模式交互与智能导览完成技术闭环。"
      icon={<Cpu className="w-12 h-12 text-bronze" strokeWidth={1} />}
      color="from-bronze"
    />
  );
}

export function Section4() {
  return (
    <SectionSlide
      id="04"
      title="成果评估与价值总结"
      subtitle="Outcomes / Evaluation / Cultural & Technical Value"
      summary="总结系统成果、评估路径、文化传播价值、技术贡献以及后续优化方向。"
      icon={<Sparkles className="w-12 h-12 text-cinnabar" strokeWidth={1} />}
      color="from-cinnabar"
    />
  );
}
