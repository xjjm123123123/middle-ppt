import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { Server, AppWindow, AlertTriangle, CheckCircle, Database } from 'lucide-react';

export function Slide13() {
  return (
    <Slide title="结构化多模态资源分布矩阵" subtitle="Structured Multimodal Resource Matrix">
      <div className="flex flex-col h-full w-full gap-8">
        {/* Top: Concept */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center justify-between shadow-lg">
          <div className="w-2/3">
            <h4 className="font-serif text-white/90 text-xl mb-4 tracking-wide">资源分布策略</h4>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-3">
              为实现毫秒级交互响应，系统采用“预生成+云存储+异步调用”的策略。将高算力消耗的视频生成环节前置，通过 Supabase 构建结构化的多模态资源矩阵。
            </p>
            <p className="text-white/50 font-sans text-sm leading-relaxed">
              这种架构有效打破了大模型实时生成的延迟瓶颈。结构化数据（坐标、语义）存储于 PostgreSQL，而大体积的切片图床与意象视频库则依托全球 CDN 加速，确保前端按需加载的极致流畅度。
            </p>
          </div>
          <div className="w-1/3 flex justify-end">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 border border-dashed border-white/30 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm"
            >
              <span className="text-white/80 font-mono tracking-widest uppercase text-xs">毫秒级</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom: Architecture Diagram */}
        <div className="flex-1 relative flex items-center justify-center">
          <div className="w-full max-w-5xl flex justify-between items-center relative">
            
            {/* Left: Pre-generation */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-64 h-48 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 relative z-10 shadow-lg"
            >
              <div className="text-white/60 mb-4">
                <Server className="w-7 h-7 text-bronze" strokeWidth={1.5} />
              </div>
              <h5 className="font-serif text-white/90 mb-2 tracking-wide">离线预生成 (GPU)</h5>
              <span className="text-xs text-white/50 text-center font-sans">Wan 2.1 模型<br/>批量生成视频 (1080p)</span>
            </motion.div>

            {/* Middle: Cloud Storage */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-80 h-64 bg-white/5 border border-white/20 rounded-2xl flex flex-col items-center justify-center p-6 relative z-20 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md"
            >
              <h5 className="font-serif text-white/90 text-lg mb-6 tracking-wide">Supabase 云端矩阵</h5>
              
              <div className="w-full space-y-3">
                <div className="bg-black/40 p-3 rounded-lg flex justify-between items-center border border-white/10">
                  <span className="text-xs text-white/70 font-sans">JSON 结构化数据 (坐标/语义)</span>
                  <span className="text-[10px] bg-white/10 text-white/80 px-2 py-1 rounded font-mono tracking-widest uppercase">PostgreSQL</span>
                </div>
                <div className="bg-black/40 p-3 rounded-lg flex justify-between items-center border border-white/10">
                  <span className="text-xs text-white/70 font-sans">切片图床 (CDN加速)</span>
                  <span className="text-[10px] bg-white/10 text-white/80 px-2 py-1 rounded font-mono tracking-widest uppercase">Storage</span>
                </div>
                <div className="bg-black/40 p-3 rounded-lg flex justify-between items-center border border-white/10">
                  <span className="text-xs text-white/70 font-sans">意象视频库 (MP4/WebM)</span>
                  <span className="text-[10px] bg-white/10 text-white/80 px-2 py-1 rounded font-mono tracking-widest uppercase">Storage</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Client */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-64 h-48 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 relative z-10 shadow-lg"
            >
              <div className="text-white/60 mb-4">
                <AppWindow className="w-7 h-7 text-bronze" strokeWidth={1.5} />
              </div>
              <h5 className="font-serif text-white/90 mb-2 tracking-wide">前端异步调用</h5>
              <span className="text-xs text-white/50 text-center font-sans">React 19 懒加载<br/>按需获取资源 (毫秒级)</span>
            </motion.div>

            {/* Animated Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Left to Middle */}
              <motion.path 
                d="M 256 128 L 352 128" 
                stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4,4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.circle r="3" fill="#ffffff"
                animate={{ cx: [256, 352], cy: [128, 128], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              
              {/* Middle to Right */}
              <motion.path 
                d="M 672 128 L 768 128" 
                stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4,4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.circle r="3" fill="#ffffff"
                animate={{ cx: [672, 768], cy: [128, 128], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </svg>

          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Slide14() {
  return (
    <Slide title="垂直领域 RAG 智能导览与防幻觉" subtitle="Vertical Domain RAG & Anti-Hallucination">
      <div className="flex flex-col h-full w-full gap-6">
        <p className="text-white/60 font-sans text-sm text-center leading-relaxed max-w-4xl mx-auto flex-shrink-0">
          通用大模型在解读《诗经·豳风》等垂直古籍领域时，极易产生历史事实错误与文化意象的“幻觉”。为此，我们引入了检索增强生成（RAG）技术，将《诗经》原文、南宋农书等权威文献向量化，在调用大模型前注入精准上下文，从根本上遏制了文化常识的生成偏差。
        </p>
        
        <div className="flex flex-1 w-full gap-6 overflow-hidden">
          {/* Left Column: Problem & Solution */}
          <div className="flex flex-col w-1/3 gap-6 h-full">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-cinnabar flex-1 shadow-lg flex flex-col justify-center">
              <h4 className="font-serif text-white/80 mb-3 flex items-center gap-3 tracking-wide text-base">
                <AlertTriangle className="w-5 h-5 text-cinnabar" strokeWidth={1.5} />
                LLM 幻觉痛点
              </h4>
              <p className="text-xs text-white/50 font-sans leading-relaxed">
                通用大模型在解读《诗经·豳风》等垂直古籍领域时，极易产生历史事实错误与文化意象的“幻觉”。
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-jade flex-[1.5] shadow-lg flex flex-col justify-center">
              <h4 className="font-serif text-white/90 mb-3 flex items-center gap-3 tracking-wide text-base">
                <CheckCircle className="w-5 h-5 text-jade" strokeWidth={1.5} />
                RAG 闭环解决方案
              </h4>
              <ul className="text-xs text-white/60 font-sans space-y-3 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-white/80 font-mono mt-0.5">01.</span>
                  构建《诗经》与南宋农耕文化专属知识库。
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80 font-mono mt-0.5">02.</span>
                  用户提问先经过向量检索匹配相关古籍片段。
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80 font-mono mt-0.5">03.</span>
                  DeepSeek API 基于检索到的“上下文”进行受限生成。
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: RAG Flow Diagram */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 relative flex items-center justify-center shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 mix-blend-overlay" />
            
            <div className="relative w-full max-w-xl h-full flex flex-col items-center justify-between py-2">
              
              {/* User Input */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-black/60 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full z-10 shadow-xl"
              >
                <span className="text-white/90 font-sans tracking-wide text-sm">用户提问："图中农夫在种什么？"</span>
              </motion.div>

              {/* Down Arrow */}
              <div className="w-px h-8 bg-white/10 relative my-1">
                <motion.div 
                  animate={{ y: [0, 32] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full"
                />
              </div>

              {/* Retrieval Core */}
              <div className="w-full flex justify-between items-center z-10 gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex-1 h-28 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-3 shadow-inner"
                >
                  <span className="text-[10px] text-white/70 mb-3 font-mono tracking-widest uppercase">向量化 (Embedding)</span>
                  <div className="w-3/4 h-1 bg-black/50 rounded-full overflow-hidden border border-white/10">
                    <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-1/2 h-full bg-white/40" />
                  </div>
                </motion.div>

                <div className="text-white/30 font-light text-xl">↔</div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex-1 h-28 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-3 shadow-inner"
                >
                  <span className="text-[10px] text-white/70 mb-2 font-mono tracking-widest uppercase">本地知识库 (Vector DB)</span>
                  <Database className="w-4 h-4 text-white/50" strokeWidth={1.5} />
                  <span className="text-[10px] text-white/40 mt-2 text-center tracking-widest leading-tight">《诗经·七月》<br/>南宋农书</span>
                </motion.div>
              </div>

              {/* Down Arrow */}
              <div className="w-px h-8 bg-white/10 relative my-1">
                <motion.div 
                  animate={{ y: [0, 32] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full"
                />
              </div>

              {/* Generation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-full bg-white/5 border border-white/20 p-4 rounded-xl z-10 text-center shadow-xl backdrop-blur-sm"
              >
                <h5 className="text-white/90 font-serif mb-2 tracking-wide text-sm">DeepSeek API 受限生成</h5>
                <p className="text-[10px] text-white/50 font-sans leading-relaxed">
                  结合知识库片段：“八月剥枣，十月获稻”。<br/>
                  <span className="text-white/80 mt-1 inline-block">输出：根据《诗经·七月》记载，结合画面时令，农夫可能在进行秋收准备，体现了南宋农业劳作的节气规律。该动作与《豳风图》中描绘的“十月获稻”场景相呼应。</span>
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Slide15() {
  return (
    <Slide title="语义检索匹配权重打分机制" subtitle="Semantic Retrieval Scoring Mechanism">
      <div className="flex flex-col h-full w-full gap-8">
        <div className="text-center mb-2">
          <p className="text-white/60 font-sans text-sm leading-relaxed max-w-4xl mx-auto">
            为了进一步提升 RAG 系统的检索精度，我们设计了多层级防御与权重打分机制。该机制综合了精确关键词匹配、向量语义相似度以及时空元数据校验，并设定了严格的置信度阈值。只有总得分超过阈值的检索结果才会被送入大模型，确保了导览内容的绝对学术严谨性。
          </p>
        </div>

        <div className="flex-1 grid grid-cols-4 gap-6">
          {/* Layer 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center border-t-4 border-t-cinnabar/40 relative overflow-hidden shadow-lg"
          >
            <div className="absolute -right-4 -top-4 text-7xl font-serif text-white/5">1</div>
            <h4 className="font-serif text-white/90 text-lg mb-6 tracking-wide">精确关键词匹配</h4>
            <div className="text-3xl font-mono text-bronze mb-6 font-light">W₁=0.4</div>
            <p className="text-xs text-white/50 font-sans text-center leading-relaxed">
              基于 TF-IDF 或 BM25 算法，对用户提问中的专有名词（如“豳风”、“七月”）进行硬匹配。
            </p>
          </motion.div>

          {/* Layer 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center border-t-4 border-t-cinnabar/60 relative overflow-hidden shadow-lg"
          >
            <div className="absolute -right-4 -top-4 text-7xl font-serif text-white/5">2</div>
            <h4 className="font-serif text-white/90 text-lg mb-6 tracking-wide">向量语义相似度</h4>
            <div className="text-3xl font-mono text-bronze mb-6 font-light">W₂=0.3</div>
            <p className="text-xs text-white/50 font-sans text-center leading-relaxed">
              使用 Embedding 模型计算提问与知识段落的余弦相似度，捕捉隐含语义关联。
            </p>
          </motion.div>

          {/* Layer 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center border-t-4 border-t-cinnabar/80 relative overflow-hidden shadow-lg"
          >
            <div className="absolute -right-4 -top-4 text-7xl font-serif text-white/5">3</div>
            <h4 className="font-serif text-white/90 text-lg mb-6 tracking-wide">时空元数据校验</h4>
            <div className="text-3xl font-mono text-bronze mb-6 font-light">W₃=0.2</div>
            <p className="text-xs text-white/50 font-sans text-center leading-relaxed">
              校验检索内容是否符合当前画卷切片的时令（如“七月”）与空间位置。
            </p>
          </motion.div>

          {/* Layer 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center border-t-4 border-t-cinnabar relative overflow-hidden shadow-lg"
          >
            <div className="absolute -right-4 -top-4 text-7xl font-serif text-white/5">4</div>
            <h4 className="font-serif text-white/90 text-lg mb-6 tracking-wide">置信度阈值拦截</h4>
            <div className="text-3xl font-mono text-bronze mb-6 font-light">T=0.75</div>
            <p className="text-xs text-white/50 font-sans text-center leading-relaxed">
              综合得分低于阈值时，触发“知识盲区”回复模板，拒绝强行生成，彻底杜绝幻觉。
            </p>
          </motion.div>
        </div>

        {/* Formula */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-black/40 border border-white/20 rounded-2xl p-6 flex items-center justify-center mt-4 shadow-xl backdrop-blur-sm"
        >
          <span className="font-mono text-xl text-white/90 tracking-widest font-light">
            Score = (W₁ × S_keyword) + (W₂ × S_semantic) + (W₃ × S_meta) {'>'} 0.75
          </span>
        </motion.div>
      </div>
    </Slide>
  );
}
