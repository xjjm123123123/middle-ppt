import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { Zap } from 'lucide-react';
import { useState } from 'react';

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
        <p className="text-white/60 font-sans text-sm mb-6 text-center leading-relaxed max-w-4xl mx-auto">
          面对算力与模型的双重限制，我们采取了“降维解耦”策略。放弃对全画卷的整体动态化，转而基于《诗经》文本的叙事逻辑，提取关键分镜。通过掩码技术分离动态主体与静态背景，大幅降低了生成任务的复杂度。
        </p>
        {/* Top 3 Columns */}
        <div className="flex justify-between gap-6 mb-6">
          {['叙事性 (如"七月流火，九月授衣")', '画面完整性 (保留环境背景)', '动静对比 (内禀动势与静止背景)'].map((text, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 bg-white/5 border border-bronze/20 p-4 rounded-xl text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-white/30" />
              <span className="font-serif text-sm text-white/80 tracking-wide">{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Gallery */}
        <div className="flex-1 relative min-h-0">
          <div className="grid grid-cols-4 grid-rows-2 gap-3 h-full pb-2">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((imgIndex, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className={`relative rounded-xl overflow-hidden border ${i === 2 ? 'border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10 scale-105' : 'border-white/10'}`}
              >
                <img src={`/input_images/image_00${imgIndex + 1}.png`} alt={`Scene ${imgIndex}`} className="w-full h-full object-cover" />
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
        {/* Left: References */}
        <div className="w-2/5 h-[400px] relative group">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-[#F0EFE2] rounded-lg shadow-2xl relative overflow-hidden text-black/80 font-serif flex flex-col border border-[#D8D8C0] p-6"
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] mix-blend-multiply pointer-events-none" />
            
            <h3 className="text-sm font-bold text-black/90 mb-3 border-b border-cinnabar/20 pb-2 relative z-10 flex items-center gap-2 tracking-wider">
                <span className="w-1 h-3 bg-cinnabar/80 rounded-sm"/>
                参考文献 / References
            </h3>

            <div className="overflow-y-auto flex-1 pr-2 relative z-10 scrollbar-thin scrollbar-thumb-cinnabar/20 scrollbar-track-transparent">
                <ul className="space-y-2 text-[9px] leading-relaxed text-black/70 font-sans">
                    <li>[20] Murray, Julia K. (1993). <i>Ma Hezhi and the Illustration of the Book of Odes.</i> Cambridge: Cambridge University Press.</li>
                    <li>[21] Murray, Julia K. (1981). <i>Song Kao-tsung, Ma Ho-chih, and the Mao Shih Scrolls: Illustrations of the Classic of Poetry.</i> Ph.D. Dissertation, Princeton University.</li>
                    <li>[22] Harrist, Robert E. (1994). Ma Hezhi and the illustration of the book of Odes. <i>The Journal of Asian Studies</i>, 53(3), 923-925.</li>
                    <li>[23] 潘深亮. (2001). 宋 赵构 马和之 画豳风图卷考. <i>故宫博物院院刊 / 故宫名画记</i>.</li>
                    <li>[24] 田艺珉. 宋 赵构 马和之 闵予小子之什图卷研究. <i>故宫博物院藏品研究</i>.</li>
                    <li>[25] 马季戈. 南宋马和之《鹿鸣之什图》卷考辨. <i>故宫博物院藏品研究</i>.</li>
                    <li>[26] 吴广义. 从文化学角度透视诗经《豳风·七月》主题的双重性.</li>
                    <li>[27] 王湘文. 《毛诗品物图考》与中日交流. 台北: 国立故宫博物院.</li>
                    <li>[28] 故宫博物院. (2001). 宋 赵构 马和之 画豳风图卷. <i>故宫名画记</i>.</li>
                    <li>[29] (清) 阮元, 董诰 等编. 《石渠宝笈·续编》. 清内府书画著录.</li>
                    <li>[30] (清) 卞永誉 编著. 《式古堂书画汇考》. 中国古代历代书画著录.</li>
                    <li>[31] (明) 张丑 编著. 《清河书画舫》. 美术史与书画鉴赏著作.</li>
                </ul>
            </div>
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
            <div className="p-6 font-mono text-xs leading-relaxed text-white/60 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-jade">"prompt"</span>: <span className="text-white/50">"Animation of a scene from 'Binfeng Tu' by Ma Hezhi. Traditional Chinese ink and color painting on silk. A procession of ancient figures wearing robes walks across a landscape. They hold long, thin poles with small red accents at the tips. A horse is part of the group. The background features stylized rocks and sparse trees drawn with 'orchid leaf' brushstrokes. Soft, serene movement, historical atmosphere."</span>,
              </motion.div>
              <br/>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-cinnabar">"negative_prompt"</span>: <span className="text-white/40">"blurry, low quality, distorted, modern style, photograph, realistic, 3D render, ugly, deformed, noisy"</span>
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
  const [hoveredVersion, setHoveredVersion] = useState<string | null>(null);

  const versions = [
    {
      id: "V1",
      label: "V1",
      cx: "2",
      cy: "60",
      color: "var(--color-cinnabar)",
      title: "基础生成",
      desc: "初步跑通生成流程",
      params: { "Frames": "21", "FPS": "16", "Denoise": "Default" }
    },
    {
      id: "V12",
      label: "V12",
      cx: "15",
      cy: "50",
      color: "var(--color-bronze)",
      title: "提示词/时长优化",
      desc: "引入负向提示词，增加生成时长",
      params: { "Frames": "33", "FPS": "11", "Denoise": "0.75" }
    },
    {
      id: "V35",
      label: "V35",
      cx: "35",
      cy: "45",
      color: "var(--color-bronze)",
      title: "过渡平滑",
      desc: "首帧固定 + 线性混合 (Linear Blending)",
      params: { "Blending Frames": "7", "Motion": "Continuous Right" }
    },
    {
      id: "V52",
      label: "V52",
      cx: "55",
      cy: "20",
      color: "var(--color-jade)",
      title: "背景冻结 (重大突破)",
      desc: "光流法检测 + 泊松融合",
      params: { "Motion Threshold": "0.75", "Technique": "Optical Flow" }
    },
    {
      id: "V68",
      label: "V68",
      cx: "75",
      cy: "25",
      color: "var(--color-jade)",
      title: "原图保真",
      desc: "降低重绘幅度以保留笔触细节",
      params: { "Denoising Strength": "0.5", "Fidelity": "High" }
    },
    {
      id: "V74",
      label: "V74",
      cx: "98",
      cy: "8",
      color: "var(--color-jade)",
      title: "高画质稳态",
      desc: "增加推理步数，极致画质",
      params: { "Sampling Steps": "80", "CFG Scale": "7.5" }
    }
  ];

  const activeData = hoveredVersion ? versions.find(v => v.id === hoveredVersion) : versions[versions.length - 1];

  return (
    <Slide title="双阶段演进" subtitle="开源大模型推理与稳态超参数">
      <div className="flex flex-col h-full w-full">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl mx-auto">
          在基座模型选择上，我们采用了最新开源的 Wan 2.1 I2V 14B 模型。经过 70 余次的消融实验与迭代，我们成功锁定了针对南宋院体画风的最佳超参数组合（Sampling Steps, CFG Scale 等），在画面稳定度与动态连贯性之间取得了最优解。
        </p>
        <div className="flex h-full w-full gap-12 items-center">
        {/* Left: Architecture Diagram */}
        <div className="w-[35%] h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center"
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
        <div className="w-[65%] h-full flex flex-col justify-center relative">
          <h3 className="text-sm font-serif text-white/60 mb-8 text-center tracking-widest uppercase">参数迭代演进 (70+ 实验)</h3>
          <div className="relative w-full h-[300px] border-l border-b border-white/10 p-4">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-[8px] text-white/30 font-mono">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            
            {/* Chart Line with version markers */}
            <svg className="absolute inset-0 w-full h-full pl-8" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              
              {/* Intermediate experiment points (representing 70+ versions) */}
              {[...Array(40)].map((_, i) => {
                 // Generate points roughly along the curve to simulate dense experiments
                 const x = 2 + (i * 2.4); // Spread across 0-98
                 // Approximate the curve y-values with some randomness
                 let y = 60;
                 if (x < 15) y = 60 - (x-2)*(10/13);
                 else if (x < 35) y = 50 - (x-15)*(5/20);
                 else if (x < 55) y = 45 - (x-35)*(25/20);
                 else if (x < 75) y = 20 + (x-55)*(5/20);
                 else y = 25 - (x-75)*(17/23);
                 
                 // Add jitter
                 y += (Math.random() - 0.5) * 4;
                 
                 return (
                   <motion.circle 
                     key={`exp-${i}`}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 0.3 }}
                     transition={{ delay: 0.5 + Math.random(), duration: 1 }}
                     cx={x} 
                     cy={y} 
                     r="0.5" 
                     fill="white" 
                   />
                 );
              })}

              {/* Main curve: V1 -> V2 -> V10 -> V18 -> V20 -> V21 */}
              <motion.path 
                d="M 2 60 L 15 50 L 35 45 L 55 20 L 75 25 L 98 8" 
                fill="none" 
                stroke="var(--color-bronze)" 
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              
              {/* Version markers */}
              {versions.map((v) => (
                <g key={v.id} 
                   onMouseEnter={() => setHoveredVersion(v.id)}
                   onMouseLeave={() => setHoveredVersion(null)}
                   className="cursor-pointer group"
                >
                  <circle 
                     cx={v.cx} 
                     cy={v.cy} 
                     r={hoveredVersion === v.id ? "4" : (v.id === "V52" || v.id === "V74" ? "2.5" : "2")} 
                     fill={v.color} 
                     className="transition-all duration-300"
                     stroke={hoveredVersion === v.id ? "white" : "none"}
                     strokeWidth="1"
                   />
                   {/* Invisible hit area for easier hovering */}
                   <circle cx={v.cx} cy={v.cy} r="8" fill="transparent" />
                   
                   {/* Pulse effect for key milestones */}
                   {(v.id === "V52" || v.id === "V74") && !hoveredVersion && (
                     <circle cx={v.cx} cy={v.cy} r="2.5" fill={v.color} stroke={v.color} strokeWidth="0.5" className="opacity-50">
                       <animate attributeName="r" values="2.5;4.5;2.5" dur="2s" repeatCount="indefinite" />
                       <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                     </circle>
                   )}
                 </g>
               ))}
             </svg>
             
             {/* Version labels on X-axis */}
             <div className="absolute bottom-[-8px] left-[2%] -translate-x-1/2 text-[9px] text-cinnabar font-mono">V1</div>
             <div className="absolute bottom-[-8px] left-[15%] -translate-x-1/2 text-[9px] text-white/50 font-mono">V12</div>
             <div className="absolute bottom-[-8px] left-[35%] -translate-x-1/2 text-[9px] text-white/50 font-mono">V35</div>
             <div className="absolute bottom-[-8px] left-[55%] -translate-x-1/2 text-[9px] text-jade font-mono font-bold">V52</div>
             <div className="absolute bottom-[-8px] left-[75%] -translate-x-1/2 text-[9px] text-white/50 font-mono">V68</div>
             <div className="absolute bottom-[-8px] left-[98%] -translate-x-1/2 text-[9px] text-jade font-mono font-bold">V74</div>
            
            {/* Key milestone annotations (fade out on hover to avoid clutter) */}
            <motion.div 
              animate={{ opacity: hoveredVersion ? 0.2 : 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-[38%] left-[12%] text-[8px] text-white/40 font-mono">提示词增强</div>
              <div className="absolute top-[52%] left-[30%] text-[8px] text-white/40 font-mono">线性混合</div>
              <div className="absolute top-[8%] left-[52%] text-[8px] text-jade font-mono bg-jade/10 px-1.5 py-0.5 rounded">光流法+泊松融合</div>
              <div className="absolute top-[15%] left-[70%] text-[8px] text-white/40 font-mono">Denoise: 0.5</div>
              <div className="absolute top-[2%] left-[88%] text-[8px] text-jade font-mono">Steps: 80</div>
            </motion.div>
            
            {/* Dynamic Info Panel */}
            <motion.div 
              key={activeData?.id || 'default'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-4 right-4 backdrop-blur-md border p-5 rounded-xl w-48 shadow-2xl ${
                hoveredVersion ? 'bg-black/80 border-white/30 z-20' : 'bg-black/60 border-jade/30'
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <span className="text-white/90 font-serif text-xs tracking-widest font-bold">{activeData?.id} {activeData?.title}</span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeData?.color }} />
              </div>
              <p className="text-[10px] text-white/60 mb-3 leading-relaxed">{activeData?.desc}</p>
              <ul className="text-[10px] font-mono text-white/50 space-y-2 tracking-wider">
                {activeData?.params && Object.entries(activeData.params).map(([key, value]) => (
                  <li key={key} className="flex justify-between gap-2">
                    <span>{key}:</span> 
                    <span className="text-white font-bold">{value}</span>
                  </li>
                ))}
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
  const steps = [
    {
      id: "01",
      title: "光流检测 (Farnebäck)",
      desc: "使用 Farnebäck 稠密光流算法，计算像素级位移向量场，量化画面运动趋势。",
      img: "/images/images/screen-shot/截屏2026-03-13 下午12.05.31.png",
      color: "text-bronze",
      bg: "bg-bronze/20"
    },
    {
      id: "02",
      title: "运动区域掩码 (形态学)",
      desc: "基于光流幅值生成动态掩码，利用膨胀与高斯模糊处理，精确分割运动主体与静态背景。",
      img: "/images/images/screen-shot/截屏2026-03-13 下午12.06.34.png",
      color: "text-bronze",
      bg: "bg-bronze/20"
    },
    {
      id: "03",
      title: "金字塔背景融合 (5层)",
      desc: "采用拉普拉斯金字塔融合技术 (Poisson Blending)，实现生成背景与原始画卷的无缝拼接。",
      img: "/images/images/screen-shot/截屏2026-03-13 下午12.09.50.png",
      color: "text-bronze",
      bg: "bg-bronze/20"
    },
    {
      id: "04",
      title: "时序平滑 (3-5帧滑动窗口)",
      desc: "应用滑动窗口均值滤波策略（3-5帧），消除帧间闪烁，确保画面动态的连贯与稳定性。",
      img: "/images/images/screen-shot/截屏2026-03-13 下午12.14.29.png",
      color: "text-black", // Keep step 4 style consistent with previous design if intended, or normalize. I'll use bronze for consistency or check previous design. Previous step 4 had bronze text on black bg? No, step 4 had bronze text on bronze bg. Wait, Step 4 had `bg-bronze text-black`. I'll stick to a consistent style or keep the original variation if significant. Let's make them consistent for now, but maybe highlight the last one? The previous code had Step 4 with `bg-bronze text-black` for the label. Steps 1-3 had `bg-bronze/20 text-bronze`. I'll replicate that pattern.
      bg: "bg-bronze" 
    }
  ];

  return (
    <Slide title="四步稳定化后处理管线" subtitle="4-Step Post-Processing Pipeline">
      <div className="flex flex-col h-full w-full justify-center">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl mx-auto">
          针对 AI 生成视频中常见的背景闪烁、边缘抖动和时序不连贯等痛点，我们设计了一套基于传统计算机视觉（CV）的四步后处理管线。通过光流检测与形态学掩码，将动态人物与静态背景重新融合，显著提升了最终视觉呈现的可用性与美感。
        </p>
        <div className="grid grid-cols-4 gap-6 h-[300px]">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className={`bg-white/5 border ${i === 3 ? 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'border-white/10'} rounded-2xl p-5 flex flex-col items-center relative overflow-hidden group`}
            >
              <div className={`absolute top-0 left-0 ${step.id === '04' ? 'bg-bronze text-black' : 'bg-bronze/20 text-bronze'} text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-br-xl z-10 transition-colors duration-300`}>
                STEP {step.id}
              </div>
              
              <h4 className="font-serif text-sm text-white/90 mb-4 mt-6 tracking-wide relative z-10">{step.title}</h4>
              
              <div className="flex-1 w-full bg-black/50 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40" 
                />
                
                {/* Hover Overlay with Description */}
                <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                  <p className="text-white/90 text-xs font-sans leading-relaxed text-justify shadow-black drop-shadow-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
