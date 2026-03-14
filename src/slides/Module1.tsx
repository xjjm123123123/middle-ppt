import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { MapPin } from 'lucide-react';

export function Slide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-[var(--color-bg-dark)]">
      {/* 豳风图背景 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/images/binfengtu_small.jpg)' }}
      />
      {/* 黑色遮罩 */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      
      {/* Subtle Glow Background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2, 3], opacity: [0, 0.3, 0.05] }}
        transition={{ duration: 6, ease: "easeOut", times: [0, 0.5, 1] }}
        className="absolute w-[800px] h-[800px] rounded-full bg-white blur-[120px] mix-blend-screen pointer-events-none"
      />
      
      <div className="z-10 flex flex-col items-center text-center max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-6xl font-serif font-light text-white leading-tight mb-12 tracking-wide"
        >
          基于深度学习的<br/>
          <span className="text-bronze font-medium">豳风图意象视频生成</span><br/>
          与交互系统设计
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center space-y-4 text-sm md:text-base font-sans text-white/50 tracking-[0.15em] uppercase"
        >
          <div className="h-px w-16 bg-white/20 mb-6" />
          <p>数字媒体艺术</p>
          <p>学生：许家铭</p>
          <p>学号：2022110371</p>
          <p>指导教师：闫子飞</p>
          <p className="mt-12 text-xs opacity-40 tracking-[0.2em]">中期答辩 · 2026.03.16</p>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide2() {
  return (
    <Slide title="立项愿景与跨学科研究坐标" subtitle="Vision & Interdisciplinary Coordinates">
      <div className="flex flex-col md:flex-row h-full w-full gap-12 items-center">
        {/* Left 40% */}
        <div className="w-full md:w-2/5 flex flex-col justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <h3 className="text-xl font-serif text-white/90 mb-6 tracking-wide">核心科学问题</h3>
            <p className="text-base leading-relaxed text-white/70 font-sans mb-6">
              如何通过生成大模型，跨越<span className="text-white font-medium">（传）南宋马和之《豳风图》长卷</span>的<span className="text-white font-medium">静态散点透视</span>与现代<span className="text-white font-medium">时序动态叙事</span>之间的鸿沟？
            </p>
            <p className="text-xs leading-relaxed text-white/40 font-sans">
              传统书画的数字化展示多停留在静态高清扫描或简单的2D平移，缺乏对画中时空叙事与农耕文化的深度挖掘。本项目旨在利用 AIGC 技术，赋予古画动态生命力，打造沉浸式交互体验，探索数字人文视角下的文化遗产活化新路径。
            </p>
            <div className="mt-8 relative h-40 w-full rounded-lg overflow-hidden border border-white/10">
              <img src="/images/images/tiles/tile_4.jpg" alt="豳风图局部" className="w-full h-full object-cover opacity-80 mix-blend-normal" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-xs font-serif text-white/80 tracking-widest">《豳风图》局部细节</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right 60% */}
        <div className="w-full md:w-3/5 h-full flex items-center justify-center relative pt-4">
          <div className="relative w-full max-w-[650px] aspect-[4/3]">
            {/* Venn Diagram Circles */}
            <motion.div 
              initial={{ x: -50, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-[8%] left-[8%] w-[56%] h-[56%] rounded-full border border-bronze/30 bg-bronze/15 flex items-center justify-center backdrop-blur-md"
            >
              <span className="absolute top-[15%] text-white/80 font-sans tracking-widest text-sm md:text-base text-center">AIGC<br/><span className="text-[10px] md:text-xs opacity-50 uppercase">生成式人工智能</span></span>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-[8%] right-[8%] w-[56%] h-[56%] rounded-full border border-bronze/30 bg-bronze/15 flex items-center justify-center backdrop-blur-md"
            >
              <span className="absolute top-[15%] text-white/80 font-sans tracking-widest text-sm md:text-base text-center">HCI<br/><span className="text-[10px] md:text-xs opacity-50 uppercase">人机交互</span></span>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[56%] h-[56%] rounded-full border border-bronze/30 bg-bronze/15 flex items-center justify-center backdrop-blur-md"
            >
              <span className="absolute bottom-[15%] text-white/80 font-sans tracking-widest text-sm md:text-base text-center">Digital Humanities<br/><span className="text-[10px] md:text-xs opacity-50 uppercase">数字人文</span></span>
            </motion.div>

            {/* Center Intersection */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24%] h-[24%] rounded-full bg-cinnabar/20 flex items-center justify-center z-10 border border-cinnabar/50 backdrop-blur-xl"
            >
              <span className="text-white font-serif text-xs md:text-sm text-center leading-relaxed tracking-widest">古典<br/>数字人文</span>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Slide3() {
  return (
    <Slide title="宏观进度追踪与中期锚点" subtitle="Macro Progress Tracking">
      <div className="flex flex-col h-full w-full justify-center">
        <p className="text-white/60 font-sans text-sm mb-12 px-8 text-center leading-relaxed max-w-4xl mx-auto">
          本项目整体规划分为四个核心阶段。目前已顺利完成前期的图像语义解析与生成模型攻坚，正处于第三阶段（交互式系统设计与功能实现）的冲刺期。本次中期答辩将重点展示已跑通的算法管线与前端交互原型，并明确下一阶段的优化方向。
        </p>
        
        <div className="flex justify-between mb-16 px-8 relative">
          {/* Background Line */}
          <div className="absolute top-2 left-12 right-12 h-px bg-white/10 -z-10" />
          
          {[
            { title: '第一阶段 (第1-4周)', desc: '图像分析与语义数据构建', active: true },
            { title: '第二阶段 (第5-10周)', desc: '生成模型的设计与训练', active: true },
            { title: '第三阶段 (第11-16周)', desc: '交互式系统的设计与实现', active: true },
            { title: '第四阶段 (第17-20周)', desc: '系统维度的效果评估', active: false }
          ].map((stage, i) => (
            <div key={i} className="flex flex-col items-center text-center w-1/4 px-4 relative">
              <div className={`w-4 h-4 rounded-full mb-6 z-10 border-2 ${stage.active ? 'bg-cinnabar border-cinnabar' : 'bg-black border-bronze/30'}`} />
              <span className={`font-serif text-sm mb-2 tracking-wide ${stage.active ? 'text-white' : 'text-white/40'}`}>{stage.title}</span>
              <span className={`font-sans text-xs leading-relaxed ${stage.active ? 'text-white/60' : 'text-white/30'}`}>{stage.desc}</span>
            </div>
          ))}
        </div>

        <div className="relative w-full h-64 bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col justify-between">
          {/* Gantt Bars */}
          <div className="space-y-6 relative z-10">
            <div className="flex items-center">
              <span className="w-32 text-xs text-white/50 font-sans tracking-widest uppercase">切片标注</span>
              <div className="h-4 bg-white/5 rounded-full w-1/4 relative overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} className="absolute inset-0 bg-bronze/60" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-32 text-xs text-white/50 font-sans tracking-widest uppercase">模型微调</span>
              <div className="h-4 bg-white/5 rounded-full w-2/4 ml-[10%] relative overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.5 }} className="absolute inset-0 bg-bronze/60" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-32 text-xs text-white/50 font-sans tracking-widest uppercase">后处理开发</span>
              <div className="h-4 bg-white/5 rounded-full w-1/3 ml-[30%] relative overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 1, delay: 1 }} className="absolute inset-0 bg-bronze/60" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-32 text-xs text-white/50 font-sans tracking-widest uppercase">系统集成</span>
              <div className="h-4 bg-white/5 rounded-full w-1/4 ml-[50%] relative overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1, delay: 1.5 }} className="absolute inset-0 bg-bronze/60" />
              </div>
            </div>
          </div>

          {/* Time Axis */}
          <div className="absolute bottom-6 left-40 right-10 flex justify-between text-[10px] text-white/30 font-mono tracking-widest border-t border-white/10 pt-4">
            <span>2025.10</span>
            <span>2025.12</span>
            <span>2026.02</span>
            <span className="text-white/80 font-bold">2026.03.16</span>
            <span>2026.05</span>
          </div>

          {/* Current Time Anchor */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
            className="absolute top-0 bottom-0 left-[75%] w-px border-l border-dashed border-white/50 z-20"
          >
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-4 -left-3 text-white"
            >
              <MapPin size={24} strokeWidth={1.5} className="text-cinnabar" />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 text-white/80 text-[10px] tracking-widest uppercase">
              答辩锚点
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
