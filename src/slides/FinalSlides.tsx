import type { Key, ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Database,
  Film,
  GalleryHorizontal,
  Globe2,
  Heart,
  Layers3,
  MessageSquareText,
  Route,
  Search,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import { Slide } from '../components/Slide';

type Tone = 'bronze' | 'jade' | 'cinnabar' | 'white';

const toneClass: Record<Tone, string> = {
  bronze: 'border-bronze/30 bg-bronze/10 text-bronze',
  jade: 'border-jade/30 bg-jade/10 text-jade',
  cinnabar: 'border-cinnabar/30 bg-cinnabar/10 text-cinnabar',
  white: 'border-white/15 bg-white/5 text-white/80',
};

function Panel({
  children,
  className = '',
  tone = 'white',
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  key?: Key;
}) {
  return (
    <div className={`rounded-lg border p-5 backdrop-blur-sm shadow-lg ${toneClass[tone]} ${className}`}>
      {children}
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <div className="text-[10px] text-bronze/70 font-sans tracking-[0.22em] uppercase mb-2">{children}</div>;
}

function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-white/62 font-sans text-base leading-relaxed ${className}`}>{children}</p>;
}

function NumberBadge({ children, tone = 'bronze' }: { children: ReactNode; tone?: Tone }) {
  return (
    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center font-mono text-sm shrink-0 ${toneClass[tone]}`}>
      {children}
    </div>
  );
}

function SmallHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-white/90 font-serif text-lg tracking-wide mb-3">{children}</h3>;
}

function Flow({ items }: { items: string[] }) {
  return (
    <div className="flex items-center justify-between gap-3">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-3 flex-1">
          <Panel tone={index % 2 === 0 ? 'bronze' : 'jade'} className="flex-1 min-h-24 flex items-center justify-center text-center px-4">
            <span className="text-sm text-white/82 font-serif leading-relaxed">{item}</span>
          </Panel>
          {index < items.length - 1 && <span className="text-bronze/50 text-xl shrink-0">→</span>}
        </div>
      ))}
    </div>
  );
}

function SimpleList({ items, className = 'text-sm' }: { items: string[]; className?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2 text-white/62 leading-relaxed ${className}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-bronze/70 mt-2 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MiniTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="rounded-lg border border-white/10 overflow-hidden bg-black/18">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
        {headers.map((header) => (
          <div key={header} className="px-4 py-3 bg-white/8 text-bronze text-xs font-sans tracking-widest">
            {header}
          </div>
        ))}
        {rows.flatMap((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className="px-4 py-3 border-t border-white/8 text-sm text-white/66 leading-relaxed"
            >
              {cell}
            </div>
          )),
        )}
      </div>
    </div>
  );
}

function VideoTile({ src, label }: { src: string; label: string; key?: Key }) {
  return (
    <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video">
      <video src={src} className="w-full h-full object-cover opacity-90" autoPlay loop muted playsInline />
      <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-2 py-1 text-[10px] text-white/75 text-center">
        {label}
      </div>
    </div>
  );
}

function LazyImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}


function OutcomeCard({
  title,
  items,
  img,
  tone,
  icon,
  delay,
}: {
  title: string;
  items: string[];
  img: string;
  tone: Tone;
  icon: ReactNode;
  delay: number;
}) {
  return (
    <div
      className={`rounded-lg border p-4 shadow-lg ${toneClass[tone]} relative overflow-hidden group slide-fade-in`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex gap-4">
        <div className="w-[42%] shrink-0">
          <div className="relative rounded-md overflow-hidden border border-white/10 aspect-[4/3]">
            <LazyImg src={img} alt={title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-2 left-2 text-bronze/90">{icon}</div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <SmallHeading>{title}</SmallHeading>
          <ul className="space-y-1.5">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-white/62 text-xs leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-bronze mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  dimension,
  metric,
  evidence,
  img,
  score,
  delay,
}: {
  dimension: string;
  metric: string;
  evidence: string;
  img: string;
  score: number;
  delay: number;
}) {
  return (
    <div
      className="rounded-lg border border-white/10 bg-black/35 overflow-hidden group slide-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-24 overflow-hidden">
        <LazyImg src={img} alt={dimension} className="w-full h-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <span className="absolute bottom-2 left-3 font-serif text-white/95 text-sm">{dimension}</span>
      </div>
      <div className="p-3 space-y-2">
        <p className="text-white/58 text-[11px] leading-snug">{metric}</p>
        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-bronze/80 to-jade/80 rounded-full"
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-bronze/55 text-[10px]">{evidence}</p>
      </div>
    </div>
  );
}

function StaticEvidenceStrip({ images }: { images: { src: string; label: string }[] }) {
  return (
    <div className="ppt-evidence-strip rounded-lg border border-white/10 bg-black/30 p-2">
      {images.map((item) => (
        <div key={item.src} className="flex flex-col items-center gap-1 min-w-0">
          <LazyImg src={item.src} alt={item.label} className="w-full h-16 object-cover rounded border border-white/10" />
          <span className="text-[9px] text-white/40 truncate w-full text-center">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function FinalSlide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-[var(--color-bg-dark)] overflow-hidden section-panel">
      <img
        src="/images/images/binfengtu_small.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute w-[72vw] h-[72vw] rounded-full border border-bronze/20 opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-6xl text-center px-8 slide-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.35] tracking-wide">
          <span className="block whitespace-nowrap">基于深度学习的</span>
          <span className="block whitespace-nowrap text-bronze font-medium">《豳风图》意象视频生成</span>
          <span className="block whitespace-nowrap">与交互传播系统设计</span>
        </h1>
        <p className="mt-8 text-white/58 text-base tracking-[0.18em]">
          面向古画文化解码的意象视频生成、双模式交互与智能导览
        </p>
        <div className="mt-12 flex flex-col items-center gap-3 text-sm text-white/45 tracking-[0.16em]">
          <div className="w-20 h-px bg-bronze/50" />
          <p>数字媒体艺术 · 学生：许家铭 · 指导教师：闫子飞</p>
          <p className="text-xs text-bronze/65">本科毕业设计结题答辩 · 2026</p>
        </div>
      </div>
    </div>
  );
}

export function FinalSlide2() {
  const sections = [
    ['01', '研究背景与文化对象', '传播困境 / 文化价值 / 设计目标'],
    ['02', '传播学理论框架', '理论总览 / 站点解构截图 / 编码·可供性·满足·叙事 / 传播闭环'],
    ['03', '系统技术实现', '切片标注 / 视觉生成 / 后处理 / 双模式交互 / RAG'],
    ['04', '成果评估与价值总结', '系统成果 / 评估体系 / 文化价值 / 技术价值 / 局限展望'],
  ];
  return (
    <Slide title="结题答辩目录" subtitle="Final Defense Agenda">
      <div className="grid grid-cols-2 gap-8 h-full content-center px-10">
        {sections.map(([id, title, desc], index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
          >
            <Panel className="h-44 flex gap-5 items-start">
              <NumberBadge tone={index === 1 ? 'jade' : index === 3 ? 'cinnabar' : 'bronze'}>{id}</NumberBadge>
              <div>
                <SmallHeading>{title}</SmallHeading>
                <p className="text-white/54 leading-relaxed">{desc}</p>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

export function FinalSlide3() {
  const items = [
    ['看不完', '长卷尺度超出普通屏幕观看习惯，用户容易只看局部，失去连续叙事。'],
    ['看不懂', '画面包含诗经文本、农耕礼俗、历史器物和人物动作，普通用户缺少文化语境。'],
    ['看不深', '静态图文说明互动性弱，用户难以形成主动探索和持续理解。'],
  ];
  return (
    <Slide title="古画数字传播的三重困境" subtitle="Viewing, Understanding, Immersion">
      <div className="grid grid-cols-[1.15fr_1fr] gap-10 h-full items-center">
        <Panel className="h-[430px] p-3 overflow-hidden">
          <img src="/images/images/binfengtu_small.jpg" alt="《豳风图》长卷缩略图" className="w-full h-full object-cover opacity-85" />
        </Panel>
        <div className="space-y-5">
          {items.map(([title, desc], index) => (
            <Panel key={title} tone={index === 0 ? 'bronze' : index === 1 ? 'jade' : 'cinnabar'} className="flex gap-4">
              <NumberBadge tone={index === 0 ? 'bronze' : index === 1 ? 'jade' : 'cinnabar'}>{index + 1}</NumberBadge>
              <div>
                <SmallHeading>{title}</SmallHeading>
                <Lead>{desc}</Lead>
              </div>
            </Panel>
          ))}
          <Lead className="pt-2 text-center">
            古画数字化不能只解决“看得到”，还要解决连续观看、文化理解和主动探索的问题。
          </Lead>
        </div>
      </div>
    </Slide>
  );
}

export function FinalSlide4() {
  const values = [
    ['诗经文本', '对应《诗经·豳风》，呈现四时流转、衣食生产和生活制度。'],
    ['农耕礼俗', '劳作、服饰、器物、建筑和仪式共同构成农耕文明符号。'],
    ['长卷叙事', '横向展开形成连续观看路径，散点透视组织多个时间片段。'],
    ['笔墨审美', '线描、设色、留白和纸本质感决定 AI 动态化边界。'],
  ];
  return (
    <Slide title="《豳风图》：复合文化文本" subtitle="Cultural Object">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-10 h-full items-center">
        <div className="relative">
          <Panel className="p-3">
            <img src="/images/images/tiles/tile_4.jpg" alt="《豳风图》局部" className="w-full h-[430px] object-cover rounded-md" />
          </Panel>
          <div className="absolute bottom-6 left-6 right-6 bg-black/70 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
            <Kicker>核心定位</Kicker>
            <p className="text-white/82 font-serif text-lg">不是普通古风素材，而是诗、礼、卷、墨交织的文化载体。</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {values.map(([title, desc], index) => (
            <Panel key={title} tone={index % 2 === 0 ? 'bronze' : 'jade'} className="min-h-48">
              <Kicker>Layer {index + 1}</Kicker>
              <SmallHeading>{title}</SmallHeading>
              <Lead>{desc}</Lead>
            </Panel>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function FinalSlide5() {
  return (
    <Slide title="研究问题与设计目标" subtitle="Research Questions & Goals">
      <div className="grid grid-cols-[1fr_0.95fr_1fr] gap-7 h-full items-center">
        <Panel tone="bronze" className="min-h-[420px]">
          <h3 className="text-white/90 font-serif text-2xl tracking-wide mb-6">文化传播问题</h3>
          <SimpleList
            className="text-xl"
            items={[
              '如何降低古画理解门槛？',
              '如何避免 AI 动态破坏笔墨气质？',
              '如何让用户从被动观看转为主动探索？',
            ]}
          />
        </Panel>
        <div className="relative aspect-square">
          {['AIGC', 'HCI', 'Digital Humanities'].map((label, index) => (
            <div
              key={label}
              className={`absolute w-[58%] h-[58%] rounded-full border border-bronze/35 bg-bronze/12 backdrop-blur-sm flex items-center justify-center text-center text-white/78 text-xl font-semibold ${
                index === 0 ? 'left-0 top-4' : index === 1 ? 'right-0 top-4' : 'left-1/2 -translate-x-1/2 bottom-0'
              }`}
            >
              {label}
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-cinnabar/50 bg-cinnabar/18 flex items-center justify-center text-center font-serif text-white text-2xl leading-snug">
              文化传播
              <br />
              系统
            </div>
          </div>
        </div>
        <Panel tone="jade" className="min-h-[420px]">
          <h3 className="text-white/90 font-serif text-2xl tracking-wide mb-6">技术实现问题</h3>
          <SimpleList
            className="text-xl"
            items={[
              '如何处理超宽长卷图像？',
              '如何把图像学语义转化为生成模型语言？',
              '如何控制视频生成的风格和运动？',
              '如何让问答系统理解当前画面上下文？',
            ]}
          />
        </Panel>
      </div>
      <div className="absolute bottom-14 left-20 right-20 grid grid-cols-4 gap-4">
        {['文化保真', '叙事增强', '交互理解', '传播转化'].map((goal) => (
          <div key={goal} className="rounded-lg border border-white/10 bg-black/35 py-4 text-center text-bronze font-serif text-2xl tracking-wide">
            {goal}
          </div>
        ))}
      </div>
    </Slide>
  );
}

export function FinalSlide6() {
  const theories = [
    ['编码/解码', '原作文化信息被重新编码为视频、热点、问答和界面，用户通过观看、点击、提问完成解码。'],
    ['媒介可供性', '切片提供浏览可供性，视频提供时间感，热点提供探索入口，报告回流读画数据，RAG 提供解释入口。'],
    ['使用与满足', '沉浸模式回应审美进入，解读模式回应知识获取。'],
    ['叙事沉浸', '意象视频增强用户对季节、劳作、礼俗的时间性感知。'],
  ];
  return (
    <Slide title="传播学框架：从文化编码到用户解码" subtitle="Communication Theory">
      <div className="space-y-10 h-full flex flex-col justify-center">
        <Flow items={['原作文化信息', 'AI 视觉编码', '交互媒介呈现', '用户文化解码', '反馈与再传播']} />
        <div className="grid grid-cols-4 gap-5">
          {theories.map(([title, desc], index) => (
            <Panel key={title} tone={index % 2 === 0 ? 'bronze' : 'jade'} className="min-h-56">
              <Kicker>Theory {index + 1}</Kicker>
              <SmallHeading>{title}</SmallHeading>
              <Lead>{desc}</Lead>
            </Panel>
          ))}
        </div>
        <Lead className="text-center max-w-4xl mx-auto">
          理论总览后，将以部署站点 ai-digital-scroll-platform.vercel.app 为案例，结合界面截图完成传播学解构（共 6 页）。
        </Lead>
      </div>
    </Slide>
  );
}

export function FinalSlide7() {
  const layers = [
    ['数据层', '长卷图像、切片图像、视频素材、文化文本'],
    ['语义层', '人物、器物、动作、场景、诗句、礼俗标签'],
    ['生成层', '提示词工程、视频生成、视觉约束、后处理'],
    ['交互层', '长卷浏览、视频播放、沉浸/解读模式、热点交互'],
    ['导览层', '推荐问题、RAG 检索、上下文回答、文化解释'],
  ];
  return (
    <Slide title="系统总体架构：文化语义驱动的技术链路" subtitle="System Architecture">
      <div className="h-full flex flex-col justify-center gap-5">
        {layers.map(([name, content], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="grid grid-cols-[160px_1fr] gap-5 items-stretch"
          >
            <Panel tone={index % 2 === 0 ? 'bronze' : 'jade'} className="flex items-center justify-center text-center">
              <span className="font-serif text-lg text-white">{name}</span>
            </Panel>
            <Panel className="flex items-center">
              <span className="text-white/70 text-lg">{content}</span>
            </Panel>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

export function FinalSlide8() {
  return (
    <Slide title="长卷切片与语义标注" subtitle="Computable Cultural Data">
      <div className="grid grid-cols-[1fr_1.1fr] gap-9 h-full items-center">
        <Panel className="p-3 h-[430px] relative overflow-hidden">
          <img src="/images/images/screen-shot/annotation.png" alt="LabelMe 标注截图" className="w-full h-full object-cover rounded-md" />
          <div className="absolute bottom-5 left-5 bg-black/70 border border-white/10 rounded-lg px-4 py-3 text-xs text-white/75">
            64 张 2048×2048 高清切片 · LabelMe 多边形语义标注
          </div>
        </Panel>
        <div className="space-y-5">
          <Panel tone="bronze">
            <SmallHeading>切片原则</SmallHeading>
            <SimpleList items={['保持场景完整', '保持人物与器物关系', '保持长卷叙事连续']} />
          </Panel>
          <MiniTable
            headers={['图像区域', '基础标签', '文化语义', '技术用途']}
            rows={[
              ['农夫', '人物', '春耕劳作', '动态主体生成'],
              ['农具', '器物', '农耕文明符号', '热点解释'],
              ['建筑', '场景', '聚落生活', '背景稳定约束'],
            ]}
          />
          <Lead>切片与标注解决长卷在屏幕媒介中的观看路径问题，也把古画转化为可计算、可检索、可生成的文化数据。</Lead>
        </div>
      </div>
    </Slide>
  );
}

export function FinalSlide9() {
  const parts = [
    '主体描述：人物、动作、器物、场景',
    '文化语义：季节、劳作、礼俗、诗经意象',
    '水墨笔触（brushwork_prompt）：蚂蝗描、兰叶描、纸本渗化、线条断续有力',
    '风格约束：南宋院体、淡设色、绢本肌理',
    '动态约束：轻微动作、低幅度运动、背景稳定',
    '负向约束：避免现代服饰、强光影、卡通化、3D 感',
  ];
  return (
    <Slide title="提示词工程与图像学语义转译" subtitle="Prompt Engineering">
      <div className="grid grid-cols-[1fr_1fr] gap-9 h-full items-center">
        <Panel tone="bronze" className="h-[430px]">
          <Kicker>Prompt Structure</Kicker>
          <div className="space-y-4">
            {parts.map((part, index) => (
              <div key={part} className="flex gap-3 items-start">
                <NumberBadge tone={index === 5 ? 'cinnabar' : index === 2 ? 'jade' : 'bronze'}>{index + 1}</NumberBadge>
                <p className={`leading-relaxed ${index === 2 ? 'text-jade/90' : 'text-white/70'}`}>{part}</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel className="h-[430px] flex flex-col">
          <Kicker>prompt_config.json</Kicker>
          <div className="bg-black/45 border border-white/10 rounded-lg p-5 font-mono text-xs leading-relaxed text-white/62 flex-1">
            <p><span className="text-jade">"subject"</span>: "ancient farmers, tools, seasonal labor",</p>
            <p><span className="text-jade">"culture"</span>: "Book of Odes, Binfeng, agrarian ritual",</p>
            <p><span className="text-jade">"brushwork_prompt"</span>: "mayihuang miao, orchid-leaf line, ink wash on silk, brush edge preserved",</p>
            <p><span className="text-bronze">"style"</span>: "Southern Song court, light mineral color",</p>
            <p><span className="text-bronze">"motion"</span>: "subtle movement, low amplitude, stable background",</p>
            <p><span className="text-cinnabar">"negative"</span>: "3D render, airbrush smooth, hard shadow, cartoon"</p>
          </div>
          <Lead className="mt-5">
            提示词工程不是简单描述画面，而是将传统图像学语言转化为生成模型能够执行的视觉指令。
          </Lead>
        </Panel>
      </div>
    </Slide>
  );
}

export function FinalSlide10() {
  const constraints = ['构图约束', '笔墨约束', '色彩约束', '运动约束', '语义约束'];
  return (
    <Slide title="视觉约束下的意象视频生成" subtitle="Controlled Image-to-Video">
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-9 h-full items-center">
        <div className="grid grid-cols-2 gap-4">
          {constraints.map((item, index) => (
            <Panel key={item} tone={index === 4 ? 'cinnabar' : index % 2 === 0 ? 'bronze' : 'jade'} className={index === 4 ? 'col-span-2' : ''}>
              <Kicker>Constraint {index + 1}</Kicker>
              <SmallHeading>{item}</SmallHeading>
              <Lead>
                {[
                  '主体位置不大幅漂移，保留长卷构图秩序。',
                  '线条不融化、不闪烁，维护笔墨辨识度。',
                  '保持低饱和与纸本质感，避免现代影像质感。',
                  '动作幅度克制，避免强镜头运动喧宾夺主。',
                  '动作和器物功能符合历史语境，减少 AI 再编码误读。',
                ][index]}
              </Lead>
            </Panel>
          ))}
        </div>
        <Panel className="h-[430px] flex flex-col justify-center">
          <Sparkles className="w-12 h-12 text-bronze mb-6" strokeWidth={1.2} />
          <SmallHeading>回应教师意见</SmallHeading>
          <Lead>
            动态效果可能削弱古画笔墨质感，因此系统建立视觉约束标准，核心是控制 AI 再编码过程中的噪声和偏差，让动态服务于古画气韵。
          </Lead>
        </Panel>
      </div>
    </Slide>
  );
}

export function FinalSlide11() {
  return (
    <Slide title="生成流程与技术迭代" subtitle="From Failure Samples to Stable Output">
      <div className="grid grid-cols-[0.95fr_1.05fr] gap-8 h-full items-center">
        <Panel tone="bronze" className="h-[430px]">
          <SmallHeading>生成流程</SmallHeading>
          <SimpleList
            items={[
              '输入图像切片',
              '构建文化语义 Prompt',
              '设置视觉约束和负向约束',
              '生成候选视频',
              '筛选失败样例',
              '后处理与稳定性优化',
              '接入前端展示',
            ]}
          />
        </Panel>
        <div className="grid grid-cols-3 gap-3">
          {[
            ['/video/all_generated_videos_collection/videos copy/img_001.mp4', '候选 01'],
            ['/video/all_generated_videos_collection/videos copy/img_002.mp4', '候选 02'],
            ['/video/all_generated_videos_collection/videos copy/img_004.mp4', '候选 03'],
            ['/video/all_generated_videos_collection/videos copy/image_003.mp4', '优化 01'],
            ['/video/all_generated_videos_collection/videos copy/image_005.mp4', '优化 02'],
            ['/video/all_generated_videos_collection/videos copy/image_006.mp4', '优化 03'],
          ].map(([src, label]) => (
            <VideoTile key={src} src={src} label={label} />
          ))}
          <Panel className="col-span-3">
            <Lead>失败类型包括结构崩坏、色彩漂移、运动过强、笔触闪烁和语义不准；优化目标是动态克制、风格稳定、语义一致、适合交互展示。</Lead>
          </Panel>
        </div>
      </div>
    </Slide>
  );
}

export function FinalSlide12() {
  const steps = [
    ['光流检测', 'Farneback 光流量化帧间运动趋势。'],
    ['运动掩码', '分离动态主体与静态背景。'],
    ['背景融合', '金字塔融合修复边缘抖动。'],
    ['时序平滑', '滑动窗口降低帧间闪烁。'],
  ];
  return (
    <Slide title="四步稳定化后处理管线" subtitle="Post-Processing Pipeline">
      <div className="grid grid-cols-4 gap-5 h-full items-center">
        {steps.map(([title, desc], index) => (
          <Panel key={title} tone={index === 3 ? 'jade' : 'bronze'} className="h-[390px] flex flex-col">
            <NumberBadge tone={index === 3 ? 'jade' : 'bronze'}>{index + 1}</NumberBadge>
            <SmallHeading>{title}</SmallHeading>
            <Lead>{desc}</Lead>
            <div className="mt-auto rounded-lg border border-white/10 bg-black/35 h-32 flex items-center justify-center text-white/35 text-xs">
              {['Farneback', 'Mask', 'Pyramid', 'Smooth'][index]}
            </div>
          </Panel>
        ))}
      </div>
      <Lead className="absolute bottom-12 left-20 right-20 text-center">
        后处理不是单纯提升清晰度，而是降低生成噪声，维护古画在数字媒介中的可信度和稳定审美。
      </Lead>
    </Slide>
  );
}

const HOTSPOT_IMMERSION_SHOT = '/images/images/screen-shot/截屏2026-03-11 下午8.42.09.png';
const HOTSPOT_INTERPRETATION_SHOT = '/images/images/screen-shot/截屏2026-03-11 下午8.42.16.png';

export function FinalSlide13() {
  const modes = [
    {
      badge: 'I · 沉浸',
      title: '沉浸模式',
      subtitle: '点击热点后 · 全屏意象进入',
      caption: 'VideoPortal · 沉浸轨：画面占满视口，弱 UI 干扰',
      items: ['生成视频全屏播放', '低信息密度与氛围优先', 'I 键 / 顶栏切换', '面向审美体验与情绪共鸣'],
      img: HOTSPOT_IMMERSION_SHOT,
      tone: 'bronze' as Tone,
      icon: <GalleryHorizontal className="w-7 h-7 text-bronze" strokeWidth={1.2} />,
    },
    {
      badge: 'C · 解读',
      title: '解读模式',
      subtitle: '点击热点后 · 语义卡片展开',
      caption: 'VideoPortal · 解读轨：背景 / AI 视点 / 文化阐释并列',
      items: ['热点语义卡片侧栏', '诗旨背景与 AI 语义视点', 'C 键 / 顶栏切换', '面向知识获取与文化理解'],
      img: HOTSPOT_INTERPRETATION_SHOT,
      tone: 'jade' as Tone,
      icon: <MessageSquareText className="w-7 h-7 text-jade" strokeWidth={1.2} />,
    },
  ];

  return (
    <Slide title="双模式交互：审美进入与知识理解" subtitle="Hotspot → VideoPortal · I / C Dual Track">
      <div className="h-full flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2 text-[11px] font-sans text-white/45 flex-wrap">
          <span className="px-2.5 py-1 rounded-full border border-white/12">点击金色热点</span>
          <span className="text-bronze/45">→</span>
          <span className="px-2.5 py-1 rounded-full border border-white/12">VideoPortal 弹层</span>
          <span className="text-bronze/45">→</span>
          <span className="px-2.5 py-1 rounded-full border border-bronze/35 text-bronze/75">I 沉浸</span>
          <span className="text-white/25">/</span>
          <span className="px-2.5 py-1 rounded-full border border-jade/35 text-jade/75">C 解读</span>
        </div>

        <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className={`rounded-lg border overflow-hidden shadow-lg flex flex-col min-h-0 ${toneClass[mode.tone]}`}
            >
              <div className="relative flex-[1.35] min-h-[240px] bg-black/60">
                <LazyImg
                  src={mode.img}
                  alt={`${mode.title}界面`}
                  className="w-full h-full object-contain object-center bg-black/80"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 border border-white/10 text-[10px] font-mono tracking-wider text-white/80">
                  {mode.badge}
                </div>
                <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/85 to-transparent text-[10px] text-white/55 text-center">
                  {mode.caption}
                </div>
              </div>

              <div className="p-4 shrink-0">
                <div className="flex items-start gap-3 mb-2">
                  {mode.icon}
                  <div>
                    <SmallHeading>{mode.title}</SmallHeading>
                    <p className="text-white/45 text-xs font-sans tracking-wide -mt-1">{mode.subtitle}</p>
                  </div>
                </div>
                <SimpleList items={mode.items} className="text-xs" />
              </div>
            </div>
          ))}
        </div>

        <Lead className="text-center text-sm">
          同一热点触发 VideoPortal 后，用户可在顶栏 I/C 切换：沉浸模式让生成视频占据主视野；解读模式叠加诗旨背景与 AI 语义视点，分别回应审美满足与认知满足。
        </Lead>
      </div>
    </Slide>
  );
}

export function FinalSlide14() {
  return (
    <Slide title="热点推荐问题：从看见图像到理解图像" subtitle="Guided Questions">
      <div className="space-y-9 h-full flex flex-col justify-center">
        <Flow items={['当前切片', '热点对象', '文化标签', '推荐问题', 'RAG 导览']} />
        <div className="grid grid-cols-2 gap-5">
          {[
            '画面中的人物正在进行哪类农耕活动？',
            '这个器物在传统农业中有什么用途？',
            '当前场景和《诗经·豳风》的季节秩序有什么关系？',
            '为什么这个画面适合轻微动态而不是强动作？',
          ].map((question) => (
            <Panel key={question} tone="jade" className="flex gap-3 items-center">
              <MessageSquareText className="w-5 h-5 text-jade shrink-0" />
              <span className="text-white/78">{question}</span>
            </Panel>
          ))}
        </div>
        <Lead className="text-center">
          原先问答偏通用，用户需要自己想问题；热点推荐问题让系统主动提供理解入口，降低提问门槛。
        </Lead>
      </div>
    </Slide>
  );
}

export function FinalSlide15() {
  return (
    <Slide title="RAG 智能导览：回答当前画面" subtitle="Context-Aware RAG">
      <div className="grid grid-cols-[1fr_0.9fr] gap-8 h-full items-center">
        <div className="space-y-5">
          <Flow items={['画面 ID', '语义标签', '文献检索', '受限生成', '依据返回']} />
          <Panel tone="bronze">
            <SmallHeading>保留技术基础</SmallHeading>
            <SimpleList items={['DeepSeek API', '本地知识库', '《诗经》与农耕文化资料', '向量化检索', '防幻觉机制']} />
          </Panel>
          <Lead>RAG 导览将用户自由提问转化为基于画面语境和文献依据的解释性传播过程。</Lead>
        </div>
        <Panel className="p-3 h-[430px]">
          <img src="/images/images/screen-shot/rag.png" alt="RAG 智能导览界面" className="w-full h-full object-contain rounded-md" />
        </Panel>
      </div>
    </Slide>
  );
}

export function FinalSlide16() {
  return (
    <Slide title="语义检索匹配权重机制" subtitle="Scene Context + Knowledge Retrieval">
      <div className="grid grid-cols-[0.95fr_1.05fr] gap-9 h-full items-center">
        <Panel tone="bronze" className="h-[430px]">
          <SmallHeading>画面上下文因子</SmallHeading>
          <SimpleList items={['当前场景 ID', '热点标题', '文化标签', '正文关键词', '用户问题关键词']} />
        </Panel>
        <div className="space-y-5">
          <MiniTable
            headers={['匹配层级', '权重', '作用']}
            rows={[
              ['热点标题匹配', '+10', '锁定当前画面对象'],
              ['用户关键词匹配', '+5', '召回自然语言实体'],
              ['正文模糊包含', '+3', '补充弱相关语料'],
              ['文化标签匹配', '+2', '提供上下文扩展'],
            ]}
          />
          <Panel className="text-center">
            <span className="font-mono text-white/85">Total Score = Title × 10 + Keyword × 5 + Content × 3 + Tag × 2</span>
          </Panel>
          <Lead>这不是单纯文本检索，而是“画面上下文 + 文献知识”的联合召回。</Lead>
        </div>
      </div>
    </Slide>
  );
}

export function FinalSlide17() {
  return (
    <Slide title="前端系统实现与资源矩阵" subtitle="Frontend System & Resource Matrix">
      <div className="grid grid-cols-5 gap-4 h-full items-center">
        {[
          ['离线预生成', 'GPU 批量生成视频，避免实时生成延迟。', <Film className="w-7 h-7" />],
          ['Supabase / PostgreSQL', '存储坐标、语义、热点和文本解释。', <Database className="w-7 h-7" />],
          ['Storage / CDN', '托管切片图床和意象视频库。', <Globe2 className="w-7 h-7" />],
          ['React 懒加载', '按需加载视频、图像和解释内容。', <Layers3 className="w-7 h-7" />],
          ['系统可扩展', '可继续加入新场景、新热点、新知识条目。', <Workflow className="w-7 h-7" />],
        ].map(([title, desc, icon], index) => (
          <Panel key={String(title)} tone={index % 2 === 0 ? 'bronze' : 'jade'} className="h-[360px] flex flex-col">
            <div className="text-bronze mb-5">{icon}</div>
            <SmallHeading>{title}</SmallHeading>
            <Lead>{desc}</Lead>
          </Panel>
        ))}
      </div>
    </Slide>
  );
}

export function FinalSlide18() {
  const outcomes = [
    {
      title: '数据成果',
      items: ['65230×2773 长卷切片', 'LabelMe 语义标注', '热点坐标与文化标签'],
      img: '/images/images/screen-shot/annotation.png',
      tone: 'bronze' as Tone,
      icon: <Database className="w-5 h-5" strokeWidth={1.2} />,
    },
    {
      title: '生成成果',
      items: ['8 组分镜意象视频', '四步稳定化后处理', 'brushwork_prompt 笔触约束'],
      img: '/images/platform-screenshots/platform-immersive.png',
      tone: 'jade' as Tone,
      icon: <Film className="w-5 h-5" strokeWidth={1.2} />,
    },
    {
      title: '交互成果',
      items: ['沉浸 / 解读双模式', '热点探测与足迹', '个性化读画报告'],
      img: '/images/platform-screenshots/platform-scroll.png',
      tone: 'jade' as Tone,
      icon: <GalleryHorizontal className="w-5 h-5" strokeWidth={1.2} />,
    },
    {
      title: '导览成果',
      items: ['上下文 RAG 问答', '推荐问题引导', '文献加权召回'],
      img: '/images/platform-screenshots/platform-rag.png',
      tone: 'bronze' as Tone,
      icon: <MessageSquareText className="w-5 h-5" strokeWidth={1.2} />,
    },
  ];

  return (
    <Slide title="系统成果：生成、交互、解读一体化" subtitle="System Outcomes">
      <div className="h-full flex flex-col gap-4">
        <div className="flex items-center justify-center gap-3 text-bronze/80 text-xs font-serif">
          {['数据', '生成', '交互', '导览'].map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full border border-bronze/30">{label}</span>
              {i < 3 && <span className="text-bronze/40">→</span>}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          {outcomes.map((o, index) => (
            <OutcomeCard key={o.title} {...o} delay={index * 0.12} />
          ))}
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-4 items-end">
          <div className="rounded-lg overflow-hidden border border-white/10 h-20">
            <LazyImg
              src="/images/platform-screenshots/platform-immersive.png"
              alt="意象视频示意"
              className="w-full h-full object-cover"
            />
          </div>
          <a
            href="https://ai-digital-scroll-platform.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-jade/40 bg-jade/15 px-6 py-4 text-jade flex items-center gap-2 shrink-0 hover:bg-jade/25 transition-colors"
          >
            <Globe2 className="w-5 h-5" />
            <span className="font-serif tracking-wide">线上系统演示</span>
          </a>
        </div>
      </div>
    </Slide>
  );
}

export function FinalSlide19() {
  const metrics = [
    {
      dimension: '视觉保真',
      metric: '构图稳定、色调一致、笔墨不被破坏',
      evidence: '原画切片 / 生成画面对比',
      img: '/images/images/tiles/tile_4.jpg',
      score: 88,
    },
    {
      dimension: '视频质量',
      metric: '运动连续、主体稳定、闪烁较少',
      evidence: '多版本迭代墙对比',
      img: '/images/platform-screenshots/platform-immersive.png',
      score: 82,
    },
    {
      dimension: '交互体验',
      metric: '双模式清晰、热点有效、响应流畅',
      evidence: '画卷操作录屏',
      img: '/images/platform-screenshots/platform-hotspot.png',
      score: 90,
    },
    {
      dimension: '知识传播',
      metric: '理解度提升、推荐问题点击率',
      evidence: '个性化读画报告',
      img: '/images/platform-screenshots/platform-report.png',
      score: 85,
    },
    {
      dimension: '文化准确',
      metric: '回答有文献依据、专家可校验',
      evidence: 'RAG 检索来源',
      img: '/images/images/screen-shot/rag.png',
      score: 87,
    },
  ];

  return (
    <Slide title="评估体系：从技术有效到传播有效" subtitle="Evaluation Framework">
      <div className="h-full flex flex-col gap-4 justify-center">
        <p className="text-center text-white/50 text-sm max-w-2xl mx-auto">
          五维指标对应可展示的图像、视频与平台界面证据，进度条表示当前迭代阶段的自评达成度
        </p>
        <div className="grid grid-cols-5 gap-3">
          {metrics.map((m, i) => (
            <MetricCard key={m.dimension} {...m} delay={i * 0.1} />
          ))}
        </div>
        <StaticEvidenceStrip
          images={[
            { src: '/images/images/tiles/tile_4.jpg', label: '原卷局部' },
            { src: '/images/images/screen-shot/annotation.png', label: '标注' },
            { src: '/images/platform-screenshots/platform-scroll.png', label: '交互' },
            { src: '/images/platform-screenshots/platform-rag.png', label: '导览' },
          ]}
        />
      </div>
    </Slide>
  );
}

export function FinalSlide20() {
  const cultural = [
    '推动诗画互文内容的当代表达',
    '解释农耕文明、四时秩序与生活礼俗',
    '将古画观看从被动浏览转为主动探索',
    '形成可复制的数字人文传播路径',
  ];
  const technical = [
    '建立面向古画的图生视频工作流',
    '五类视觉约束 + brushwork_prompt 笔触控制',
    '上下文感知 RAG 与个性化读画报告',
    '生成、长卷、双模式、问答一体化部署',
  ];

  return (
    <Slide title="文化价值与技术价值总结" subtitle="Value Summary">
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
          <div className="relative rounded-lg border border-bronze/30 overflow-hidden">
            <LazyImg
              src="/images/images/binfengtu_small.jpg"
              alt="豳风图"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
            <div className="relative p-6 h-full flex flex-col justify-end">
              <BookOpen className="w-10 h-10 text-bronze mb-4" strokeWidth={1.2} />
              <SmallHeading>文化价值</SmallHeading>
              <ul className="space-y-2.5 mt-2">
                {cultural.map((item) => (
                  <li key={item} className="flex gap-2 text-white/75 text-sm">
                    <Sparkles className="w-3.5 h-3.5 text-bronze shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-lg border border-jade/30 overflow-hidden">
            <LazyImg
              src="/images/platform-screenshots/platform-theory-tech.png"
              alt="技术架构"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/88 via-black/75 to-black/55" />
            <div className="relative p-6 h-full flex flex-col justify-end">
              <BrainCircuit className="w-10 h-10 text-jade mb-4" strokeWidth={1.2} />
              <SmallHeading>技术价值</SmallHeading>
              <ul className="space-y-2.5 mt-2">
                {technical.map((item) => (
                  <li key={item} className="flex gap-2 text-white/75 text-sm">
                    <Target className="w-3.5 h-3.5 text-jade shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />
        </div>

        <StaticEvidenceStrip
          images={[
            { src: '/images/platform-screenshots/platform-intro.png', label: '序言' },
            { src: '/images/platform-screenshots/platform-scroll.png', label: '长卷' },
            { src: '/images/platform-screenshots/platform-report.png', label: '报告' },
            { src: '/images/platform-screenshots/platform-rag.png', label: '导览' },
          ]}
        />
      </div>
    </Slide>
  );
}

export function FinalSlideThanks() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-[var(--color-bg-dark)] overflow-hidden section-panel">
      <img
        src="/images/images/binfengtu_small.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/68" />
      <div className="absolute w-[68vw] h-[68vw] rounded-full border border-bronze/15 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center px-10 slide-fade-in">
        <Heart className="w-10 h-10 text-bronze/80 mx-auto mb-8" strokeWidth={1.2} />

        <h1 className="text-4xl md:text-6xl font-serif font-light text-white tracking-[0.22em] mb-6">致谢</h1>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent mx-auto mb-10" />

        <p className="text-xl md:text-2xl font-serif text-white/88 leading-relaxed tracking-wide mb-4">
          感谢各位老师一直以来的悉心指导与帮助
        </p>
        <p className="text-base md:text-lg font-serif text-white/58 leading-relaxed tracking-wide mb-12">
          感谢答辩委员会各位老师的聆听、提问与批评指正
        </p>

        <div className="inline-flex flex-col gap-3 text-sm text-white/50 tracking-[0.14em]">
          <div className="w-16 h-px bg-bronze/40 mx-auto" />
          <p>汇报人：许家铭</p>
          <p>指导教师：闫子飞</p>
          <p className="text-bronze/65 text-xs tracking-[0.2em] pt-2">恳请各位老师批评指正</p>
        </div>
      </div>
    </div>
  );
}

export function FinalSlide21() {
  return (
    <Slide title="局限性、未来展望与致谢" subtitle="Limitations, Future Work & Thanks">
      <div className="grid grid-cols-[1fr_1fr_0.85fr] gap-6 h-full items-center">
        <Panel tone="cinnabar" className="h-[390px]">
          <SmallHeading>研究局限</SmallHeading>
          <SimpleList
            items={[
              '生成模型仍可能出现细节漂移。',
              '高质量古画训练数据有限。',
              '文化解释仍需要专家持续校验。',
              '用户评估样本可以继续扩大。',
            ]}
          />
        </Panel>
        <Panel tone="jade" className="h-[390px]">
          <SmallHeading>未来方向</SmallHeading>
          <SimpleList
            items={[
              '建立更系统的古画风格 LoRA 数据集。',
              '引入更精细的区域运动控制。',
              '扩展到更多诗画互文作品。',
              '面向文博展陈和课堂教学做多终端版本。',
            ]}
          />
        </Panel>
        <Panel className="h-[390px] flex flex-col items-center justify-center text-center">
          <CheckCircle2 className="w-12 h-12 text-bronze mb-6" strokeWidth={1.2} />
          <h3 className="font-serif text-3xl text-white mb-8 tracking-[0.18em]">敬请批评指正</h3>
          <p className="text-white/55 leading-loose">
            感谢导师指导
            <br />
            感谢评委老师聆听
          </p>
        </Panel>
      </div>
    </Slide>
  );
}

export const finalSlides = [
  FinalSlide1,
  FinalSlide2,
  FinalSlide3,
  FinalSlide4,
  FinalSlide5,
  FinalSlide6,
  FinalSlide7,
  FinalSlide8,
  FinalSlide9,
  FinalSlide10,
  FinalSlide11,
  FinalSlide12,
  FinalSlide13,
  FinalSlide14,
  FinalSlide15,
  FinalSlide16,
  FinalSlide17,
  FinalSlide18,
  FinalSlide19,
  FinalSlide20,
  FinalSlide21,
];
