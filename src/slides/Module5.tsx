import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { Github, Globe, AlertTriangle, CheckCircle2, Target, BarChart3, Database, ExternalLink } from 'lucide-react';

export function Slide16() {
  return (
    <Slide title="工程完成度与系统演示" subtitle="Engineering Completion & System Demo">
      <div className="flex flex-col h-full w-full gap-4">
        <p className="text-gray-400 font-sans text-sm text-center leading-relaxed max-w-4xl mx-auto line-clamp-2">
          本项目具有较高的工程完成度与系统复杂度。不仅是算法原型的理论验证，更是一套落地的高可用全栈工程实践。前端交互、后端服务与算法脚本均已完成脱敏处理，具备开源条件。
        </p>
        <div className="flex flex-1 min-h-0 w-full gap-6">
        {/* Left: Stats */}
        <div className="w-2/5 flex flex-col gap-3">
          {/* Model Engineering */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between shrink-0">
            <div className="absolute top-0 right-0 p-3 opacity-10">
               <Target className="w-16 h-16 text-white" />
            </div>
            <div>
              <h4 className="font-serif text-white mb-2 text-sm tracking-wide flex items-center gap-2">
                <span className="w-1 h-3 bg-cinnabar rounded-full"/>
                模型工程实现
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-1">
                <div>
                  <div className="text-[10px] text-gray-500 mb-0.5">核心代码量</div>
                  <div className="text-lg font-mono text-white font-light">~2,200 <span className="text-[10px] text-gray-600">行</span></div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 mb-0.5">总代码量 (含历史)</div>
                  <div className="text-lg font-mono text-white/60 font-light">~16,792 <span className="text-[10px] text-gray-600">行</span></div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://huggingface.co/xujiaming1234/video" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-300 flex items-center justify-center gap-2 transition-colors hover:bg-white/10 hover:border-white/20 cursor-pointer group"
            >
              <Database className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">HuggingFace 模型仓库</span>
            </a>
          </div>

          {/* Web Engineering */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 flex flex-col relative overflow-hidden min-h-0">
             <div className="absolute top-0 right-0 p-3 opacity-10">
               <Globe className="w-16 h-16 text-white" />
            </div>
            <h4 className="font-serif text-white mb-3 text-sm tracking-wide flex items-center gap-2 shrink-0">
              <span className="w-1 h-3 bg-jade rounded-full"/>
              网站工程实现
            </h4>
            
            <div className="grid grid-cols-2 gap-2 mb-3 border-b border-white/5 pb-3 shrink-0">
              <div>
                <div className="text-[10px] text-gray-500 mb-0.5">核心代码量</div>
                <div className="text-lg font-mono text-white font-light">~4,744 <span className="text-[10px] text-gray-600">行</span></div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 mb-0.5">总代码量</div>
                <div className="text-lg font-mono text-white/60 font-light">~10,210 <span className="text-[10px] text-gray-600">行</span></div>
              </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              {/* Frontend */}
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-300 font-medium">前端 (Frontend)</span>
                  <span className="text-jade font-mono">81% <span className="text-gray-600">~3,952行</span></span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-0.5">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "81%" }} transition={{ duration: 1 }} className="h-full bg-jade" />
                </div>
                <p className="text-[9px] text-gray-500 truncate">交互界面、视觉特效、状态管理</p>
              </div>

              {/* Algorithm */}
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-300 font-medium">算法 (Algorithm)</span>
                  <span className="text-bronze font-mono">11% <span className="text-gray-600">~535行</span></span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-0.5">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "11%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-bronze" />
                </div>
                <p className="text-[9px] text-gray-500 truncate">RAG 检索逻辑、LLM 集成、算法评测</p>
              </div>

              {/* Backend */}
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-300 font-medium">后端 (Backend)</span>
                  <span className="text-cinnabar font-mono">8% <span className="text-gray-600">~388行</span></span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-0.5">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "8%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-cinnabar" />
                </div>
                <p className="text-[9px] text-gray-500 truncate">数据库迁移、数据访问服务、处理脚本</p>
              </div>
            </div>

            {/* Open Source & Deploy */}
            <div className="mt-3 pt-3 border-t border-white/5 flex gap-2 shrink-0">
               <a 
                 href="https://github.com/xjjm123123123/ai-digital-scroll-platform" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-300 flex items-center justify-center gap-1.5 transition-colors hover:bg-white/10 hover:border-white/20 cursor-pointer group"
               >
                 <Github className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                 <span className="group-hover:text-white transition-colors truncate">GitHub (脱敏开源)</span>
               </a>
            </div>
          </div>
        </div>

        {/* Right: Video Demo */}
        <div className="w-3/5 bg-white/5 border border-white/10 rounded-2xl p-2 relative overflow-hidden flex flex-col">
          <div className="w-full h-8 bg-black/40 rounded-t-xl flex items-center justify-between px-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] text-gray-500 ml-3 font-mono tracking-wider">ai-digital-scroll-platform.vercel.app</span>
            </div>
            <a 
              href="https://ai-digital-scroll-platform.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              title="在新窗口打开"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex-1 bg-[#0a0a0a] relative flex items-center justify-center rounded-b-xl overflow-hidden group">
            <iframe 
              src="https://ai-digital-scroll-platform.vercel.app/" 
              className="w-full h-full border-0"
              title="System Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      </div>
    </Slide>
  );
}

export function Slide17() {
  return (
    <Slide title="后期研究计划：模型微调与量化评估" subtitle="Future Plan: Fine-tuning & Evaluation">
      <div className="flex flex-col h-full w-full gap-8">
        <p className="text-gray-400 font-sans text-sm text-center leading-relaxed max-w-4xl mx-auto">
          针对中期阶段发现的基座模型在特定古画细节（如衣纹走势、农具形制）上的生成瑕疵，下一阶段将重点攻克专属 LoRA 模型的微调训练。同时，我们将引入多维度客观评价指标与专家主观盲测，建立一套严谨的生成质量与文化表达评估体系。
        </p>
        
        {/* Top: LoRA Fine-tuning */}
        <div className="h-1/2 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center gap-12">
          <div className="w-1/3">
            <h4 className="font-serif text-white text-xl mb-4 tracking-wide flex items-center gap-3">
              <Target className="w-5 h-5 text-bronze" />
              专属 LoRA 模型微调
            </h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              针对基础模型在南宋画风细节（如衣纹、农具形制）上的不足，计划构建高质量的《诗经》图绘数据集进行微调。
            </p>
          </div>
          <div className="w-2/3 flex items-center justify-between bg-black/20 rounded-xl p-6 border border-white/5">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-3">
                <Database className="w-6 h-6 text-bronze" />
              </div>
              <span className="text-xs text-gray-400 tracking-wider">基础模型<br/>Wan 2.1</span>
            </div>
            <div className="text-white font-light text-2xl">+</div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center mb-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <span className="text-sm font-serif text-white relative z-10">LoRA</span>
              </div>
              <span className="text-xs text-gray-400 tracking-wider">南宋画风数据集</span>
            </div>
            <div className="text-gray-500 font-light text-2xl">→</div>
            <div className="text-center flex flex-col items-center">
              <div className="w-24 h-16 bg-white/10 rounded-xl border border-white/30 flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <span className="text-sm font-serif text-white">豳风专属模型</span>
              </div>
              <span className="text-xs text-gray-400 tracking-wider">细节保真度提升</span>
            </div>
          </div>
        </div>

        {/* Bottom: Evaluation Framework */}
        <div className="h-1/2 flex gap-8">
          <div className="w-1/4 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6">
            <BarChart3 className="w-8 h-8 text-bronze mb-4" />
            <h4 className="font-serif text-white text-xl text-center tracking-wide leading-relaxed">三维量化<br/>评估体系</h4>
          </div>
          
          <div className="w-3/4 grid grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-xs font-mono text-white">01</span>
              </div>
              <h5 className="font-serif text-white mb-3 tracking-wide">客观指标</h5>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                评估生成视频帧与原画切片的结构相似度 (SSIM) 与峰值信噪比 (PSNR)，量化视觉保真度。
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-xs font-mono text-white">02</span>
              </div>
              <h5 className="font-serif text-white mb-3 tracking-wide">主观体验</h5>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                设计 Likert 五级量表问卷，收集用户在沉浸感、交互流畅度、界面美观度等维度的评分。
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-xs font-mono text-white">03</span>
              </div>
              <h5 className="font-serif text-white mb-3 tracking-wide">人文学术盲审</h5>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                邀请历史学/艺术史专家，对 RAG 导览内容的准确性与意象生成的文化契合度进行盲审。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Slide18() {
  return (
    <Slide title="风险披露与致谢" subtitle="Risk Disclosure & Acknowledgments">
      <div className="flex h-full w-full gap-12">
        {/* Left: Risks */}
        <div className="w-1/2 flex flex-col gap-6">
          <h4 className="font-serif text-white text-xl mb-2 flex items-center gap-3 tracking-wide">
            <AlertTriangle className="w-5 h-5 text-cinnabar" />
            项目现存风险披露
          </h4>
          
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10 flex gap-4"
            >
              <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-cinnabar" /></div>
              <div>
                <h5 className="text-white font-sans text-sm mb-2 tracking-wide">算力瓶颈与 OOM 风险</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  超宽画幅视频生成极耗显存。缓解策略：严格执行切片渲染机制，探索模型量化技术。
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10 flex gap-4"
            >
              <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-cinnabar" /></div>
              <div>
                <h5 className="text-white font-sans text-sm mb-2 tracking-wide">LoRA 灾难性遗忘</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  微调可能导致模型丧失通用生成能力。缓解策略：采用较低的 Rank 值，结合正则化数据集。
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10 flex gap-4"
            >
              <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-cinnabar" /></div>
              <div>
                <h5 className="text-white font-sans text-sm mb-2 tracking-wide">垂直领域数据稀疏性</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  高质量的南宋农耕图像数据有限。缓解策略：引入数据增强技术，跨朝代相近画风迁移。
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10 flex gap-4"
            >
              <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-cinnabar" /></div>
              <div>
                <h5 className="text-white font-sans text-sm mb-2 tracking-wide">CMS 对比沙盒计划</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  计划引入内容管理系统沙盒，对比不同算法版本（如基座模型 vs LoRA微调）的生成效果，建立迭代基准。
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Acknowledgments */}
        <div className="w-1/2 bg-white/5 border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h2 className="font-serif text-4xl text-white mb-8 tracking-[0.2em] font-light">
              敬请批评指正
            </h2>
            
            <div className="w-12 h-px bg-white/30 mb-10" />
            
            <p className="text-gray-400 font-sans text-sm leading-loose tracking-wide">
              感谢导师的悉心指导<br/>
              感谢评委老师的聆听与评审
            </p>
            
            <div className="mt-16 pt-8 border-t border-white/10 w-full">
              <span className="text-xs text-gray-500 tracking-widest uppercase font-mono">
                哈尔滨工业大学 · 2026届本科毕业设计中期答辩
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

