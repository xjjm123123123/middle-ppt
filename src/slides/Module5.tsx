import { motion } from 'motion/react';
import { Slide } from '../components/Slide';
import { Github, Globe, Play, AlertTriangle, CheckCircle2, Target, BarChart3, Database } from 'lucide-react';

export function Slide16() {
  return (
    <Slide title="工程完成度与系统演示" subtitle="Engineering Completion & System Demo">
      <div className="flex flex-col h-full w-full gap-8">
        <p className="text-gray-400 font-sans text-sm text-center leading-relaxed max-w-4xl mx-auto">
          本项目不仅是算法原型的理论验证，更是一套落地的高可用全栈工程实践。目前系统核心代码已初具规模，架构清晰且模块化程度高。前端交互、后端服务与算法脚本均已完成脱敏处理，具备开源条件，并已通过 Vercel 实现持续集成与在线部署。
        </p>
        <div className="flex h-full w-full gap-8">
        {/* Left: Stats */}
        <div className="w-1/3 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="font-serif text-white mb-6 text-lg tracking-wide">工程代码量统计</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">前端 (React/TS)</span>
                  <span className="text-white font-mono">~12,500 行</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1 }} className="h-full bg-cinnabar" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">后端 (Node/Python)</span>
                  <span className="text-white font-mono">~4,800 行</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "25%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-bronze" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">算法脚本 (数据处理)</span>
                  <span className="text-white font-mono">~1,200 行</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "10%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-jade" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-1 flex flex-col justify-center items-center text-center">
            <h4 className="font-serif text-white mb-2 text-lg tracking-wide">开源与部署状态</h4>
            <p className="text-sm text-gray-400 font-sans mb-6">核心代码已脱敏并准备开源</p>
            <div className="flex flex-col gap-3 w-full">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 flex items-center justify-center gap-2 transition-colors hover:bg-white/10">
                <Github className="w-4 h-4" />
                GitHub (脱敏开源)
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 flex items-center justify-center gap-2 transition-colors hover:bg-white/10">
                <Globe className="w-4 h-4" />
                Vercel 部署 (在线演示)
              </span>
            </div>
          </div>
        </div>

        {/* Right: Video Demo */}
        <div className="w-2/3 bg-white/5 border border-white/10 rounded-2xl p-2 relative overflow-hidden flex flex-col">
          <div className="w-full h-10 bg-black/40 rounded-t-xl flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="text-xs text-gray-500 ml-4 font-mono tracking-wider">binfeng-system-demo.mp4</span>
          </div>
          <div className="flex-1 bg-[#0a0a0a] relative flex items-center justify-center rounded-b-xl overflow-hidden">
            <img src="https://picsum.photos/seed/demo/800/450?grayscale" alt="系统演示" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" referrerPolicy="no-referrer" />
            
            {/* Play Button Overlay */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer shadow-2xl transition-colors hover:bg-white/20"
            >
              <Play className="w-6 h-6 text-white ml-1" />
            </motion.div>
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

