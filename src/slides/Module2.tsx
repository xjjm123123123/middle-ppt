import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { Zap } from 'lucide-react';

export function Slide4() {
  return (
    <Slide title="数据重构与首轮算力受挫" subtitle="Data Reconstruction & Compute Bottleneck">
      <div className="flex h-full w-full items-center relative">
        {/* Left Side: Data Prep */}
        <div className="w-1/2 h-full flex flex-col justify-center pr-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl h-[400px] flex flex-col"
          >
            <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">前期工作量：精细标注</h3>
            <p className="text-sm text-white/70 font-sans mb-4 leading-relaxed">
              为构建高质量的训练集，我们对《豳风图》进行了超高分辨率切片，并使用 LabelMe 进行了像素级的多边形语义标注，提取了人物、农具、背景等核心要素。
            </p>
            <div className="relative flex-1 rounded-lg overflow-hidden border border-white/10">
              <img src="/images/images/screen-shot/annotation.png" alt="LabelMe 标注演示" className="w-full h-full object-cover opacity-90" />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded text-xs font-mono text-white/80 border border-white/10">
                Data: 64张 2048×2048 高清切片<br/>
                Tool: LabelMe 像素级多边形标注<br/>
                Model: AnimateDiff + LoRA 自主预训练
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center Split */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          className="absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 flex items-center justify-center"
        >
          <div className="bg-[var(--color-bg-dark)] p-2 rounded-full border border-white/20">
            <Zap className="w-5 h-5 text-cinnabar" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Right Side: Failure */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-12">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl h-[400px] flex flex-col"
          >
            <h3 className="text-xl font-serif text-white/90 mb-4 tracking-wide">端到端训练不可行性</h3>
            <p className="text-sm text-white/70 font-sans mb-4 leading-relaxed">
              由于古画画风独特且样本量有限，直接使用开源视频生成模型（如 AnimateDiff）进行端到端微调时，极易出现过拟合、画面崩坏，且在常规算力（如 RTX 4090）下频繁遭遇显存溢出（OOM）瓶颈。
            </p>
            <div className="relative flex-1 rounded-lg overflow-hidden border border-white/10 bg-black flex items-center justify-center">
              {/* Demo Video */}
              <video 
                src="/video/微信视频2026-03-14_095721_877.mp4" 
                className="w-full h-full object-contain" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <motion.div 
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-0 left-0 right-0 bg-cinnabar/10 backdrop-blur-md border-t border-cinnabar/30 text-cinnabar text-center py-3 font-mono text-xs tracking-widest uppercase"
              >
                ⚠ 50 Steps 收敛失败 / OOM显存溢出 (云端 RTX 4090 24GB)
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

export function Slide5() {
  return (
    <Slide title="降维策略" subtitle="基于文本叙事驱动的分镜提取">
      <div className="flex flex-col h-full w-full">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl mx-auto">
          面对算力与模型的双重限制，我们采取了“降维解耦”策略。放弃对全画卷的整体动态化，转而基于《诗经》文本的叙事逻辑，提取关键分镜。通过掩码技术分离动态主体与静态背景，大幅降低了生成任务的复杂度。
        </p>
        {/* Top 3 Columns */}
        <div className="flex justify-between gap-6 mb-12">
          {['叙事性 (如"七月流火，九月授衣")', '画面完整性 (保留环境背景)', '动静对比 (内禀动势与静止背景)'].map((text, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 bg-white/5 border border-bronze/20 p-6 rounded-xl text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-white/30" />
              <span className="font-serif text-base text-white/80 tracking-wide">{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Gallery */}
        <div className="flex-1 relative">
          <div className="grid grid-cols-4 gap-6 h-full pb-8">
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className={`relative rounded-xl overflow-hidden border ${i === 2 ? 'border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10 scale-105' : 'border-white/10'}`}
              >
                <img src={`/input_images/image_00${i + 1}.png`} alt={`Scene ${i}`} className="w-full h-full object-cover" />
                {i === 2 && (
                  <>
                    <motion.div 
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="absolute inset-0 border border-white/50 rounded-xl"
                    />
                    {/* Callouts */}
                    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full" />
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="25%" y1="25%" x2="10%" y2="10%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    </svg>
                    <div className="absolute top-2 left-2 text-[9px] bg-cinnabar/80 backdrop-blur-sm text-white px-1.5 py-0.5 rounded border border-cinnabar uppercase tracking-widest">原图: 65230×2773</div>

                    <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-white/50 rounded-full" />
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="75%" y1="75%" x2="90%" y2="90%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    </svg>
                    <div className="absolute bottom-2 right-2 text-[9px] bg-cinnabar/80 backdrop-blur-sm text-white px-1.5 py-0.5 rounded border border-cinnabar uppercase tracking-widest">静态约束</div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Slide6() {
  return (
    <Slide title="提示词工程与图像学语义转译" subtitle="Prompt Engineering & Semantic Translation">
      <div className="flex flex-col h-full w-full">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl mx-auto">
          大模型无法直接理解中国画的笔墨意趣。我们通过查阅故宫博物院等权威文献，提取关键美术史词汇（如“蚂蝗描”、“院体”），并将其转化为大模型可理解的结构化 Prompt，实现了从传统图像学语义到现代 AI 提示词的精准转译。
        </p>
        <div className="flex h-full w-full items-center gap-12">
        {/* Left: Ancient Text */}
        <div className="w-2/5 h-[400px] relative">
          <motion.div 
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full bg-bg-paper rounded-lg shadow-xl p-10 relative overflow-hidden text-text-ink font-serif"
            style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          >
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]" />
            <img 
              src="/images/images/screen-shot/截屏2026-03-11 下午7.20.54.png" 
              alt="故宫博物院考证文献" 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-auto object-contain opacity-90"
            />
            <h3 className="text-xl mb-8 border-l border-black/30 pl-3 tracking-widest mt-40">故宫博物院考证文献</h3>
            <p className="text-base leading-loose tracking-[0.3em]">
              画中人物衣纹多用<span className="text-cinnabar font-bold border-b border-cinnabar/40 pb-1 relative z-10" id="keyword1">兰叶描</span>与<span className="text-cinnabar font-bold border-b border-cinnabar/40 pb-1 relative z-10" id="keyword2">蚂蝗描</span>，
              呈现出典型的<span className="text-cinnabar font-bold border-b border-cinnabar/40 pb-1 relative z-10" id="keyword3">南宋院体</span>风格...
            </p>
          </motion.div>
        </div>

        {/* Center: Connection Lines */}
        <div className="w-1/5 h-full relative flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 400" preserveAspectRatio="none">
            <motion.path 
              d="M 50 0 L 50 400" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="1"
              strokeDasharray="4,8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Right: Code Editor */}
        <div className="w-2/5 h-[400px]">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full h-full bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="h-10 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="ml-4 text-[10px] text-white/40 font-mono tracking-widest uppercase">prompt_config.json</span>
            </div>
            <div className="p-8 font-mono text-xs leading-loose text-white/60">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-white/80">"prompt"</span>: <span className="text-white/50">"南宋马和之《豳风图》风格, 蚂蝗描衣纹, 院体画风, 静态散点透视, 农夫挥锄耕作, 动作连贯自然, 画面无明显运镜..."</span>,
              </motion.div>
              <br/>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-white/80">"negative_prompt"</span>: <span className="text-white/40">"镜头移动, 背景变形, 抖动, 现代元素, 模糊, 颜色失真, 现代服饰, 3D渲染..."</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </Slide>
  );
}

export function Slide7() {
  return (
    <Slide title="双阶段演进" subtitle="开源大模型推理与稳态超参数">
      <div className="flex flex-col h-full w-full">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl mx-auto">
          在基座模型选择上，我们采用了最新开源的 Wan 2.1 I2V 14B 模型。经过 70 余次的消融实验与迭代，我们成功锁定了针对南宋院体画风的最佳超参数组合（Sampling Steps, CFG Scale 等），在画面稳定度与动态连贯性之间取得了最优解。
        </p>
        <div className="flex h-full w-full gap-12 items-center">
        {/* Left: Architecture Diagram */}
        <div className="w-1/2 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-between"
          >
            <div className="w-48 h-24 bg-black/40 border border-white/20 rounded-xl flex items-center justify-center relative backdrop-blur-sm">
              <span className="font-mono text-sm text-white/80 tracking-widest text-center uppercase">Wan 2.1<br/>I2V 14B</span>
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-white/20">
                <motion.div 
                  animate={{ y: [0, 64] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-1.5 h-1.5 bg-white rounded-full -ml-[2.5px]"
                />
              </div>
            </div>
            
            <div className="w-64 h-24 bg-black/40 border border-white/20 rounded-xl flex items-center justify-center mt-16 backdrop-blur-sm">
              <span className="font-serif text-sm text-white/80 tracking-widest">初始视频流 (I2V)</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Chart & Data */}
        <div className="w-1/2 h-full flex flex-col justify-center relative">
          <h3 className="text-sm font-serif text-white/60 mb-8 text-center tracking-widest uppercase">画面稳定度得分演进</h3>
          <div className="relative w-full h-[300px] border-l border-b border-white/10 p-4">
            {/* Chart Line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M 0 80 Q 10 20, 20 70 T 40 40 T 60 60 T 80 20 L 100 20" 
                fill="none" 
                stroke="var(--color-bronze)" 
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
            <div className="absolute bottom-[-24px] left-0 text-[10px] text-white/30 font-mono tracking-widest">Exp 1</div>
            <div className="absolute bottom-[-24px] right-0 text-[10px] text-white/60 font-mono tracking-widest">Exp 74 (稳态)</div>
            
            {/* Optimal Params Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-jade/30 p-5 rounded-xl"
            >
              <h4 className="text-white/80 font-serif text-xs border-b border-white/10 pb-3 mb-3 tracking-widest">锁定超参数组合</h4>
              <ul className="text-[10px] font-mono text-white/50 space-y-3 tracking-wider">
                <li className="flex justify-between gap-4"><span>Sampling Steps:</span> <span className="text-white">50-80</span></li>
                <li className="flex justify-between gap-4"><span>CFG Scale:</span> <span className="text-white">6.5-7.5</span></li>
                <li className="flex justify-between gap-4"><span>Denoising Strength:</span> <span className="text-white">0.5-0.75</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </Slide>
  );
}

export function Slide8() {
  return (
    <Slide title="四步稳定化后处理管线" subtitle="4-Step Post-Processing Pipeline">
      <div className="flex flex-col h-full w-full justify-center">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl mx-auto">
          针对 AI 生成视频中常见的背景闪烁、边缘抖动和时序不连贯等痛点，我们设计了一套基于传统计算机视觉（CV）的四步后处理管线。通过光流检测与形态学掩码，将动态人物与静态背景重新融合，显著提升了最终视觉呈现的可用性与美感。
        </p>
        <div className="grid grid-cols-4 gap-6 h-[300px]">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bg-bronze/20 text-bronze text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-br-xl z-10">STEP 01</div>
            <h4 className="font-serif text-sm text-white/90 mb-4 mt-6 tracking-wide">光流检测 (Farnebäck)</h4>
            <div className="flex-1 w-full bg-black/50 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center mix-blend-luminosity">
              <img src="https://picsum.photos/seed/step1/200/200?grayscale" alt="光流" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
              {/* Simulated Optical Flow Arrows */}
              <svg className="absolute inset-0 w-full h-full opacity-50">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#fff" />
                  </marker>
                </defs>
                <line x1="20%" y1="50%" x2="40%" y2="40%" stroke="#fff" strokeWidth="1" markerEnd="url(#arrow)" />
                <line x1="30%" y1="60%" x2="50%" y2="50%" stroke="#fff" strokeWidth="1" markerEnd="url(#arrow)" />
                <line x1="40%" y1="70%" x2="60%" y2="60%" stroke="#fff" strokeWidth="1" markerEnd="url(#arrow)" />
              </svg>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bg-bronze/20 text-bronze text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-br-xl z-10">STEP 02</div>
            <h4 className="font-serif text-sm text-white/90 mb-4 mt-6 tracking-wide">运动区域掩码 (形态学)</h4>
            <div className="flex-1 w-full bg-black/80 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
              <div className="w-16 h-24 bg-white/80 rounded-full filter blur-xl opacity-60" />
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bg-bronze/20 text-bronze text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-br-xl z-10">STEP 03</div>
            <h4 className="font-serif text-sm text-white/90 mb-4 mt-6 tracking-wide">金字塔背景融合 (5层)</h4>
            <div className="flex-1 w-full bg-black/50 rounded-lg border border-white/5 relative overflow-hidden flex flex-col items-center justify-center gap-1.5">
              <div className="w-24 h-3 border border-white/20 bg-white/5 rounded-sm" />
              <div className="w-20 h-3 border border-white/30 bg-white/10 rounded-sm" />
              <div className="w-16 h-3 border border-white/40 bg-white/15 rounded-sm" />
              <div className="w-12 h-3 border border-white/50 bg-white/20 rounded-sm" />
              <div className="w-8 h-3 border border-white/60 bg-white/25 rounded-sm" />
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-col items-center relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <div className="absolute top-0 left-0 bg-bronze text-black text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-br-xl z-10">STEP 04</div>
            <h4 className="font-serif text-sm text-white mb-4 mt-6 tracking-wide">时序平滑 (3-5帧滑动窗口)</h4>
            <div className="flex-1 w-full bg-black/50 rounded-lg border border-white/20 relative overflow-hidden flex items-center justify-center mix-blend-luminosity">
               <img src="https://picsum.photos/seed/step4/200/200?grayscale" alt="最终" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
               <motion.div 
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/10"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
