import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { Clock, CheckCircle2, Calendar, AlertTriangle } from 'lucide-react';

export function TableOfContents() {
  const sections = [
    {
      id: "01",
      title: "进度符合度",
      subtitle: "Progress & Schedule Compliance",
      icon: <Clock className="w-6 h-6 text-bronze" />,
      items: [
        "宏观进度追踪与节点锚定",
        "开题报告预定目标达成情况"
      ]
    },
    {
      id: "02",
      title: "已完成工作",
      subtitle: "Completed Research & Achievements",
      icon: <CheckCircle2 className="w-6 h-6 text-jade" />,
      items: [
        "数据重构与提示词工程 (Data & Prompt)",
        "生成模型演进与后处理 (Model & Pipeline)",
        "前后端架构与切片渲染 (Architecture)",
        "垂直领域 RAG 智能导览 (RAG System)"
      ]
    },
    {
      id: "03",
      title: "后续规划",
      subtitle: "Future Research Plan",
      icon: <Calendar className="w-6 h-6 text-white/80" />,
      items: [
        "专属 LoRA 模型微调训练",
        "三维量化评估体系构建"
      ]
    },
    {
      id: "04",
      title: "问题与困难",
      subtitle: "Challenges & Bottlenecks",
      icon: <AlertTriangle className="w-6 h-6 text-cinnabar" />,
      items: [
        "算力瓶颈与显存溢出风险",
        "垂直领域数据稀疏性问题",
        "模型灾难性遗忘与泛化平衡"
      ]
    }
  ];

  return (
    <Slide title="中期答辩目录" subtitle="Table of Contents">
      <div className="h-full w-full flex items-center justify-center px-10">
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 w-full max-w-6xl">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="flex items-start gap-5">
                {/* Number & Icon */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-4xl font-serif text-white/10 font-bold leading-none select-none group-hover:text-white/20 transition-colors">
                    {section.id}
                  </span>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 transition-colors shadow-lg backdrop-blur-sm">
                    {section.icon}
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent min-h-[40px]" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-serif text-white/90 mb-1 tracking-wide group-hover:text-white transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-xs text-white/40 font-sans tracking-widest uppercase mb-6">
                    {section.subtitle}
                  </p>

                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400 font-sans group-hover:text-gray-300 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-bronze transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent -z-10 rounded-2xl transition-all duration-500 blur-xl opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
