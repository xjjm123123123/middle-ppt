import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { AlertTriangle } from 'lucide-react';

export function Slide9() {
  return (
    <Slide title="前后端技术架构" subtitle="Frontend and Backend Technical Architecture">
      <div className="flex flex-col h-full w-full gap-3 px-4 py-2 justify-center">
        {/* Layer 1: Presentation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full gap-4"
        >
          <div className="w-32 bg-[#1e293b] flex items-center justify-center rounded-lg border border-white/10 p-2 shadow-lg shrink-0">
            <span className="text-white font-bold text-center text-sm">前端表现层<br/><span className="text-[10px] text-white/50 font-normal">Presentation Layer</span></span>
          </div>
          <div className="flex-1 flex gap-2">
             <div className="flex-[3] bg-[#1e293b]/50 border border-white/10 rounded-lg p-2 flex flex-col gap-2">
                <div className="text-xs text-white/50 text-center uppercase tracking-wider scale-90">核心组件 (Core Components)</div>
                <div className="grid grid-cols-4 gap-2 h-full">
                    {[
                        { title: "ScrollScene", desc: "数字化长卷引擎\n(D3.js + 切片加载)" },
                        { title: "VideoPortal", desc: "热点视频入口\n(双模式：沉浸/解读)" },
                        { title: "RagChat", desc: "AI 对话助手\n(ReactMarkdown 渲染)" },
                        { title: "MiniMap", desc: "缩略图导航\n(全局定位)" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 rounded border border-white/5 p-2 flex flex-col items-center justify-center text-center">
                            <span className="text-bronze font-bold text-xs mb-1">{item.title}</span>
                            <span className="text-[10px] text-white/60 leading-tight whitespace-pre-wrap scale-90">{item.desc}</span>
                        </div>
                    ))}
                </div>
             </div>
             <div className="flex-1 bg-[#1e293b]/50 border border-white/10 rounded-lg p-2 flex flex-col gap-2">
                <div className="text-xs text-white/50 text-center uppercase tracking-wider scale-90">状态管理</div>
                <div className="bg-white/5 rounded border border-white/5 p-2 h-full flex flex-col items-center justify-center text-center">
                    <span className="text-white font-bold text-xs mb-1">React Hooks</span>
                    <span className="text-[10px] text-white/60 leading-tight scale-90">useState / useEffect<br/>useCallback</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Strategies Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex w-full gap-4 pl-36 text-[10px]"
        >
             <div className="flex-1 bg-amber-500/10 border border-amber-500/20 rounded px-2 py-1 text-amber-200/60 text-center truncate">
                降级策略：数据库查询失败 → 启用本地热点 (HOTSPOTS)
             </div>
             <div className="flex-[2] bg-blue-500/10 border border-blue-500/20 rounded px-2 py-1 text-blue-200/60 text-center truncate">
                RAG 流程：用户提问 → 知识库检索 → LLM 生成 → Markdown 渲染
             </div>
        </motion.div>

        {/* Layer 2: Business Logic */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex w-full gap-4"
        >
          <div className="w-32 bg-[#1e3a8a]/80 flex items-center justify-center rounded-lg border border-white/10 p-2 shadow-lg shrink-0">
            <span className="text-white font-bold text-center text-sm">业务逻辑层<br/><span className="text-[10px] text-white/50 font-normal">Business Logic Layer</span></span>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2">
              <div className="bg-[#1e3a8a]/30 border border-white/10 rounded-lg p-2 flex flex-col">
                  <span className="text-white font-bold text-xs mb-1 text-center">热点服务 (hotspotService)</span>
                  <div className="bg-white/5 rounded p-2 flex-1 flex flex-col justify-center gap-1 items-center">
                      <code className="text-[10px] text-blue-200/80 bg-black/20 px-1 rounded">fetchHotspots()</code>
                      <code className="text-[10px] text-blue-200/80 bg-black/20 px-1 rounded">seedHotspots()</code>
                  </div>
              </div>
              <div className="bg-[#1e3a8a]/30 border border-white/10 rounded-lg p-2 flex flex-col">
                  <span className="text-white font-bold text-xs mb-1 text-center">RAG 检索引擎 (ragService)</span>
                  <div className="bg-white/5 rounded p-2 flex-1 flex flex-col justify-center text-[10px] text-white/70 leading-relaxed text-center">
                      <span className="scale-90 block">标题匹配(+10) + 关键词(+5)<br/>内容模糊(+3) + 标签(+2)<br/>Top-K: 默认 K=3</span>
                  </div>
              </div>
              <div className="bg-[#1e3a8a]/30 border border-white/10 rounded-lg p-2 flex flex-col">
                  <span className="text-white font-bold text-xs mb-1 text-center">对话生成服务 (geminiService)</span>
                  <div className="bg-white/5 rounded p-2 flex-1 flex flex-col justify-center text-[10px] text-white/70 leading-relaxed text-center">
                      <span className="scale-90 block">调用 DeepSeek API<br/>系统提示词设计<br/>上下文构建与注入</span>
                  </div>
              </div>
          </div>
        </motion.div>

        {/* Layer 3: Data Service */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex w-full gap-4"
        >
          <div className="w-32 bg-[#334155] flex items-center justify-center rounded-lg border border-white/10 p-2 shadow-lg shrink-0">
            <span className="text-white font-bold text-center text-sm">数据服务层<br/><span className="text-[10px] text-white/50 font-normal">Data Service Layer</span></span>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="bg-[#334155]/40 border border-white/10 rounded-lg p-2 flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <span className="text-emerald-400 font-bold text-[10px]">SDK</span>
                  </div>
                  <div>
                      <div className="text-white font-bold text-xs mb-0.5">Supabase Client SDK</div>
                      <div className="text-[10px] text-white/60 scale-90 origin-left">数据库查询接口 / 存储桶访问接口</div>
                  </div>
              </div>
              <div className="bg-[#334155]/40 border border-white/10 rounded-lg p-2 flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded flex items-center justify-center border border-amber-500/30 shrink-0">
                    <span className="text-amber-400 font-bold text-[10px]">JSON</span>
                  </div>
                  <div>
                      <div className="text-white font-bold text-xs mb-0.5">本地知识库 (Knowledge Base)</div>
                      <div className="text-[10px] text-white/60 scale-90 origin-left">诗经解读 / 画家介绍 / 农事月历<br/>关键词匹配 + 多级评分</div>
                  </div>
              </div>
          </div>
        </motion.div>

        {/* Layer 4: Infrastructure */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex w-full gap-4"
        >
          <div className="w-32 bg-[#0f172a] flex items-center justify-center rounded-lg border border-white/10 p-2 shadow-lg shrink-0">
            <span className="text-white font-bold text-center text-sm">基础设施层<br/><span className="text-[10px] text-white/50 font-normal">Infrastructure</span></span>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2">
              <div className="bg-[#0f172a]/60 border border-white/10 rounded-lg p-2">
                  <div className="text-white font-bold text-xs mb-1 text-center">边缘存储服务 (Supabase Storage)</div>
                  <div className="flex gap-2 text-[10px] text-white/60 justify-center">
                      <div className="bg-white/5 rounded px-2 py-1 text-center border border-white/5"><span className="block text-white/40 text-[8px]">VIDEO</span>mp4资源</div>
                      <div className="bg-white/5 rounded px-2 py-1 text-center border border-white/5"><span className="block text-white/40 text-[8px]">IMAGE</span>长卷切片</div>
                  </div>
              </div>
              <div className="bg-[#0f172a]/60 border border-white/10 rounded-lg p-2">
                  <div className="text-white font-bold text-xs mb-1 text-center">关系型数据库 (PostgreSQL)</div>
                  <div className="text-[10px] text-white/60 leading-tight text-center scale-90">
                      热点数据表: hotspots (8条记录)<br/>
                      字段: id, x, y, label, season...
                  </div>
              </div>
              <div className="bg-[#0f172a]/60 border border-white/10 rounded-lg p-2">
                  <div className="text-white font-bold text-xs mb-1 text-center">大语言模型 API (DeepSeek)</div>
                  <div className="text-[10px] text-white/60 leading-tight text-center scale-90">
                      deepseek-chat<br/>
                      智能问答与诗意解读
                  </div>
              </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

export function Slide10() {
  return (
    <Slide title="面向超宽画幅的切片渲染架构" subtitle="Ultra-Wide Slice Rendering Architecture">
      <div className="flex flex-col h-full w-full gap-8">
        <p className="text-white/60 font-sans text-sm text-center leading-relaxed max-w-4xl mx-auto">
          《豳风图》原卷分辨率高达 65230×2773，直接在浏览器中渲染会导致严重的内存溢出与卡顿。我们创新性地采用了切片化懒加载架构，结合 D3.js 的 translate3d 硬件加速技术，将前端显存占用降低了 90% 以上，实现了丝滑无缝的全景长卷漫游体验。
        </p>
        {/* Top: Data Comparison */}
        <div className="h-1/3 flex items-center justify-center gap-16">
          <div className="text-center">
            <h4 className="text-white/50 font-sans mb-4 text-xs tracking-widest uppercase">理论峰值显存 (65230×2773全图)</h4>
            <motion.div 
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              className="text-5xl font-mono text-white/40 font-light flex items-center gap-4 justify-center"
            >
              724MB
              <AlertTriangle className="w-8 h-8 text-white/40" strokeWidth={1.5} />
            </motion.div>
          </div>
          
          <div className="text-3xl text-white/20 font-light">→</div>
          
          <div className="text-center">
            <h4 className="text-white/50 font-sans mb-4 text-xs tracking-widest uppercase">懒加载架构显存 (10张6523px切片)</h4>
            <motion.div 
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1.1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-6xl font-mono text-white/90 font-light"
            >
              72MB
            </motion.div>
          </div>
        </div>

        {/* Bottom: Rendering Mechanism */}
        <div className="h-2/3 relative bg-white/5 border border-white/10 rounded-2xl p-10 overflow-hidden flex items-center">
          {/* Long Scroll */}
          <div className="w-full h-32 flex gap-1 relative">
            {[...Array(10)].map((_, i) => (
              <motion.div 
                key={i}
                className="flex-1 h-full border border-dashed border-white/20 bg-black/40 flex items-center justify-center relative"
              >
                <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">Slice {i+1}</span>
                {/* Highlight active slices */}
                <motion.div 
                  animate={{ 
                    opacity: [0, 1, 1, 0, 0],
                    backgroundColor: ["transparent", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "transparent", "transparent"]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    times: [0, 0.1, 0.3, 0.4, 1],
                    delay: (i * 0.8) - 2 // Staggered to simulate moving window
                  }}
                  className="absolute inset-0 border border-white/50"
                />
              </motion.div>
            ))}
            
            {/* Viewport Window */}
            <motion.div 
              animate={{ x: ["0%", "700%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 left-0 w-[30%] border-2 border-white/80 bg-white/5 z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-end justify-center pb-3"
            >
              <span className="text-white/90 text-[10px] font-mono tracking-widest uppercase bg-black/80 px-3 py-1.5 rounded border border-white/20 backdrop-blur-md">D3.js translate3d 加速</span>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Slide11() {
  return (
    <Slide title="多维时空交互与全景巡游机制" subtitle="Multi-Dimensional Interaction & Panoramic Tour">
      <div className="flex flex-col h-full w-full items-center justify-center relative">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl z-40">
          打破传统古画展示的单一线性浏览模式，我们构建了画中画（PIP）多维导览机制。用户在全景巡游时，点击画卷中的特定热点，即可触发对应区域的动态意象视频与深度语义解析，实现了从宏观长卷巡游到微观文化探究的无缝切换。
        </p>
        {/* Main PIP Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] bg-black rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl flex items-center justify-center"
        >
          <video 
            src="/video/录屏2026-03-14 上午11.37.17.mov" 
            className="w-full h-full object-contain" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </motion.div>
      </div>
    </Slide>
  );
}

export function Slide12() {
  return (
    <Slide title="沉浸式数字水墨视觉渲染算法" subtitle="Immersive Digital Ink Rendering">
      <div className="flex flex-col h-full w-full">
        <p className="text-white/60 font-sans text-sm mb-10 text-center leading-relaxed max-w-4xl mx-auto">
          为了营造极致的东方美学沉浸感，系统的视觉呈现不仅停留在视频播放层面。我们通过 CSS mix-blend-mode 深度还原了宣纸的物理质感，并结合 WebGL 流体力学算法模拟了鼠标交互时的水墨晕染与波纹效果，让数字界面焕发古典生机。
        </p>
        <div className="grid grid-cols-3 gap-8 h-full w-full">
        {/* Column 1: Rice Paper Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center"
        >
          <h4 className="font-serif text-white/90 mb-6 tracking-wide">宣纸纹理 (mix-blend-mode: overlay)</h4>
          <div className="flex-1 w-full relative rounded-xl overflow-hidden border border-white/10 bg-white">
            <img src="https://picsum.photos/seed/art/300/400?grayscale" alt="原图" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity" referrerPolicy="no-referrer" />
            
            {/* Toggle Overlay Animation */}
            <motion.div 
              animate={{ opacity: [0, 1, 1, 0, 0] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1] }}
              className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] mix-blend-multiply opacity-80"
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <motion.span 
                animate={{ opacity: [1, 0, 0, 1, 1] }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1] }}
                className="bg-black/80 backdrop-blur-md border border-white/20 text-white/80 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded"
              >
                Normal
              </motion.span>
              <motion.span 
                animate={{ opacity: [0, 1, 1, 0, 0] }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1] }}
                className="bg-white/90 text-black text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded absolute left-1/2 -translate-x-1/2 shadow-lg"
              >
                mix-blend-multiply
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Ink Glow */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center"
        >
          <h4 className="font-serif text-white/90 mb-6 text-center tracking-wide">水墨发光与脉冲<br/><span className="text-xs text-white/50 font-sans tracking-widest uppercase mt-2 block">(drop-shadow / scale 0.8-2.0)</span></h4>
          <div className="flex-1 w-full relative rounded-xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
            <motion.div 
              animate={{ 
                filter: [
                  "drop-shadow(0 0 0px rgba(255,255,255,0))",
                  "drop-shadow(0 0 20px rgba(255,255,255,0.4))",
                  "drop-shadow(0 0 40px rgba(255,255,255,0.2))",
                  "drop-shadow(0 0 0px rgba(255,255,255,0))"
                ],
                scale: [1, 1.05, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm"
            >
              <span className="font-serif text-white/90 text-3xl font-light">豳</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Column 3: WebGL Fluid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center"
        >
          <h4 className="font-serif text-white/90 mb-6 text-center tracking-wide">流体力学仿真 (WebGL)<br/><span className="text-xs text-white/50 font-sans tracking-widest uppercase mt-2 block">mouseForce=20, viscous=65</span></h4>
          <div className="flex-1 w-full relative rounded-xl overflow-hidden border border-white/10 bg-black">
            <img src="https://picsum.photos/seed/water/300/400?grayscale" alt="水面" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" referrerPolicy="no-referrer" />
            
            {/* Simulated WebGL Ripple */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.circle 
                cx="50%" cy="50%" r="10" 
                fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"
                animate={{ r: [10, 120], opacity: [0.8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.circle 
                cx="50%" cy="50%" r="10" 
                fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                animate={{ r: [10, 180], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8, ease: "easeOut" }}
              />
              {/* Simulated Mouse Path */}
              <motion.path 
                d="M 20 80 Q 50 50, 80 20" 
                fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="15" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
      </div>
    </Slide>
  );
}
