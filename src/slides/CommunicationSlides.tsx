import type { ReactNode } from 'react';
import { Slide } from '../components/Slide';

const SITE = 'ai-digital-scroll-platform.vercel.app';

function Shot({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col gap-2 min-w-0 ${className}`}>
      <div className="relative rounded-lg overflow-hidden border border-bronze/25 bg-black/60 aspect-video shadow-[0_0_40px_rgba(0,0,0,0.45)]">
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" loading="lazy" decoding="async" />
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] text-bronze/80 font-mono tracking-wider">
          {SITE}
        </div>
      </div>
      {caption && <figcaption className="text-[11px] text-white/45 text-center leading-snug">{caption}</figcaption>}
    </figure>
  );
}

function TheoryBlock({
  theory,
  scholar,
  analysis,
  tone = 'bronze',
}: {
  theory: string;
  scholar: string;
  analysis: string;
  tone?: 'bronze' | 'jade';
}) {
  const border = tone === 'bronze' ? 'border-bronze/30 bg-bronze/8' : 'border-jade/30 bg-jade/8';
  return (
    <div className={`rounded-lg border p-4 ${border}`}>
      <div className="text-bronze/70 text-[10px] tracking-[0.2em] uppercase mb-1">{scholar}</div>
      <h4 className="text-white/92 font-serif text-lg mb-2">{theory}</h4>
      <p className="text-white/62 text-sm leading-relaxed">{analysis}</p>
    </div>
  );
}

function Point({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-white/62 text-sm leading-relaxed">
      <span className="w-1.5 h-1.5 rounded-full bg-bronze/70 mt-2 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

/** 传播学专节：平台站点解构总览 */
export function CommSlideOverview() {
  const rows = [
    ['序言门户', '框架理论 / 仪式化传播', '以《七月》诗句设定观看议程，完成“入卷”前的意义铺垫'],
    ['背景策展', '文化资本 / 知识沟', '院体画史、七篇诗旨、蚂蝗描——为解码提供权威语境'],
    ['长卷浏览', '媒介可供性 / 空间叙事', '横向切片、章节标尺、足迹——把卷轴阅读转译为可计算路径'],
    ['热点探测', '参与式文化 / 互动仪式', '金色锚点将被动观看转为可点击的意义单元'],
    ['个性化报告', '效果反馈 / 受众分析', '画卷底栏「报告」汇总读画行为，生成可读的传播效果文本'],
    ['智能导览', '使用与满足 / 知识沟弥合', 'RAG 回应“看不懂”，把提问转化为协商式解码'],
    ['双模式切换', '沉浸—解读分轨', 'I/C 切换对应审美沉浸与认知阐释两类传播需求'],
  ];
  return (
    <Slide title="传播学解构：数字长卷平台作为传播装置" subtitle={`Site Analysis · ${SITE}`}>
      <div className="h-full flex flex-col justify-center gap-5">
        <p className="text-white/58 text-center text-sm max-w-4xl mx-auto">
          以下以线上部署站点为对象，用传播学理论逐层拆解界面、交互与内容组织如何共同完成《豳风图》的文化转译与受众接合。
        </p>
        <div className="rounded-lg border border-white/10 overflow-hidden bg-black/20">
          <div className="grid grid-cols-3 bg-white/8 text-bronze text-[10px] tracking-widest">
            {['界面模块', '理论透镜', '传播功能'].map((h) => (
              <div key={h} className="px-3 py-2 border-r border-white/8 last:border-r-0">
                {h}
              </div>
            ))}
          </div>
          {rows.map((row, i) => (
            <div
              key={row[0]}
              className="grid grid-cols-3 border-t border-white/8 text-xs text-white/66"
              style={{ background: i % 2 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
            >
              {row.map((cell, j) => (
                <div key={j} className="px-3 py-2.5 border-r border-white/6 last:border-r-0 leading-relaxed">
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-xs">
          站点截图见后续「媒介可供性 / 使用与满足」专页（减少同页多图加载）
        </p>
      </div>
    </Slide>
  );
}

/** 霍尔编码/解码 + 框架理论 */
export function CommSlideEncoding() {
  return (
    <Slide title="编码/解码：从诗经意象到界面符号" subtitle="Hall · Entman · Cultural Translation">
      <div className="grid grid-cols-2 gap-6 h-full items-center">
        <div className="grid grid-rows-2 gap-4">
          <Shot src="/images/platform-screenshots/platform-intro.png" alt="序言页" caption="主导编码：诗句引题 +「入卷探幽」仪式入口" />
          <Shot src="/images/platform-screenshots/platform-bg.png" alt="背景页" caption="背景编码：七篇诗旨折叠为可浏览的文化文本块" />
        </div>
        <div className="space-y-4">
          <TheoryBlock
            scholar="Stuart Hall · Encoding/Decoding"
            theory="主导—协商—对抗式解读"
            analysis="平台在序言用《七月》诗句完成主导编码，将观看者预设为“西周农桑”语境；背景页以院体画史、蚂蝗描等学术话语加固权威解读；用户点击热点、向 RAG 提问时进入协商式解码；若拒绝诗画互证框架，则可能出现对抗式阅读（仅浏览图像而不接受解释）。"
          />
          <TheoryBlock
            scholar="Robert Entman · Framing"
            theory="议程设置与框架"
            tone="jade"
            analysis="四段导航（序言—背景—画卷—术理）构成信息框架：先确立情感基调，再供给知识，后开放交互，最后揭示技术逻辑——相当于为受众编排了一条“由情入理”的传播路径。"
          />
          <ul className="space-y-1">
            <Point>AI 意象视频是对原作视觉符码的二次编码，将静态笔触转译为时间性运动。</Point>
            <Point>「当前叙事段落·七月」把连续长卷切分为可命名的传播单元，降低解码成本。</Point>
          </ul>
        </div>
      </div>
    </Slide>
  );
}

/** 媒介可供性 */
export function CommSlideAffordance() {
  const affordances = [
    ['横向平移 + 章节尺', '卷轴可供性', '延续手卷“展卷而读”的身体隐喻，但以像素坐标可追踪'],
    ['探测 (R)', '指向可供性', '点击即“探幽”，把观看行为数据化'],
    ['足迹 (P)', '路径可供性', '记录浏览轨迹，支持回访与叙事连贯'],
    ['报告', '反馈可供性', '将时长、热点、视频停留、提问等行为数据二次编码为「个性化读画报告」'],
    ['全屏 (B)', '沉浸可供性', '遮蔽导航噪音，强化在场感'],
    ['智能导览侧栏', '对话可供性', '把单向阐释变为双向问答'],
  ];
  return (
    <Slide title="媒介可供性：界面如何邀请行动" subtitle="Gibson · Hutchby · Leonardi">
      <div className="grid grid-cols-5 gap-5 h-full items-center">
        <div className="col-span-2">
          <Shot src="/images/platform-screenshots/platform-scroll.png" alt="长卷浏览" caption="画卷主界面：切片长卷 + 叙事段落 + 工具栏" />
        </div>
        <div className="col-span-3 space-y-4">
          <TheoryBlock
            scholar="Affordance Theory"
            theory="可供性不是功能列表，而是“促使某种传播行为发生”的媒介特质"
            analysis="画卷底部工具栏（探测 / 足迹 / 报告 / 全屏）构成完整的交互闭环：热点邀请点击，足迹沉淀路径，「报告」把分散行为聚合为「本次亮点」「主题偏好」「最近足迹」等可读文本——实现从行为数据到传播反馈的再编码。"
          />
          <div className="rounded-lg border border-white/10 overflow-hidden">
            {affordances.map(([ui, concept, effect]) => (
              <div key={ui} className="grid grid-cols-3 border-t border-white/8 first:border-t-0 text-xs">
                <div className="px-3 py-2 text-bronze/90">{ui}</div>
                <div className="px-3 py-2 text-white/75">{concept}</div>
                <div className="px-3 py-2 text-white/55">{effect}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/** 使用与满足 + 双模式 */
export function CommSlideUsesGratifications() {
  return (
    <Slide title="使用与满足：双模式满足差异化受众需求" subtitle="Katz · Blumler · McQuail">
      <div className="grid grid-cols-2 gap-6 h-full items-center">
        <div className="space-y-4">
          <Shot src="/images/platform-screenshots/platform-rag.png" alt="智能导览" caption="解读轨：RAG 导览与推荐问题（C 键）" />
          <TheoryBlock
            scholar="Uses & Gratifications"
            theory="用户主动选择媒介以满足特定需求"
            analysis="沉浸模式满足情感/审美需求（看、听、感受季节与农事节律）；解读模式满足认知需求（理解典故、笔法、篇章结构）；RAG 推荐问题降低提问门槛，属于“媒介供给预期满足”的设计。"
          />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-center">
            {[
              ['沉浸模式', '情感满足 · 临场感 · 审美愉悦', 'jade'],
              ['解读模式', '认知满足 · 释疑 · 文化认同', 'bronze'],
            ].map(([mode, needs, tone]) => (
              <div
                key={mode}
                className={`rounded-lg border p-4 ${tone === 'jade' ? 'border-jade/30 bg-jade/10' : 'border-bronze/30 bg-bronze/10'}`}
              >
                <div className="font-serif text-lg text-white/90 mb-2">{mode}</div>
                <p className="text-xs text-white/55 leading-relaxed">{needs}</p>
              </div>
            ))}
          </div>
          <TheoryBlock
            scholar="McQuail · Media Effects"
            theory="同一文本，不同使用方式产生不同传播效果"
            tone="jade"
            analysis="同一《豳风图》切片，全屏观影者获得“叙事沉浸”效果；开启导览并点击推荐问题的用户获得“知识增益”效果。双轨设计避免以单一阐释强加于全部受众，体现传播策略上的受众细分思维。"
          />
          <ul>
            <Point>推荐问题「七篇诗意如何排布」对应结构性认知需求。</Point>
            <Point>「蚂蝗描特点」对应专业艺术史需求，体现垂直深度传播。</Point>
            <Point>结合热点上下文的回答，将满足从“泛科普”提升为“情境化解释”。</Point>
            <Point>画卷底栏「报告」满足反思性需求：用户获得对自己读画方式的文本化反馈（浏览式扫读 / 深度解读等）。</Point>
          </ul>
        </div>
      </div>
    </Slide>
  );
}

/** 叙事沉浸 + 技术透明 */
export function CommSlideNarrative() {
  return (
    <Slide title="叙事沉浸与透明化传播：被讲述的长卷" subtitle="Green & Brock · Ryan · Transparency">
      <div className="grid grid-cols-2 gap-6 h-full items-center">
        <Shot src="/images/platform-screenshots/platform-hotspot.png" alt="叙事段落" caption="「七月」叙事段落 + 热点巡游：时间性农耕故事线" />
        <div className="space-y-4">
          <TheoryBlock
            scholar="Narrative Transportation · Green & Brock"
            theory="叙事传输：受众在故事中“失去自我”"
            analysis="平台以诗篇章节（七月→狼跋）组织浏览路径，配合环境音与全屏意象视频，使用户从现代屏幕“传输”到西周农桑时空；热点视频将单点画面扩展为连续动作，强化故事因果感。"
          />
          <TheoryBlock
            scholar="Participatory Culture · Jenkins"
            theory="参与式文化：探测、足迹、提问"
            tone="jade"
            analysis="用户不再是被动的画史课听众，而是通过点击、巡游、提问共同生产意义；足迹与报告功能把个人浏览转化为可分享的传播轨迹，具备二次传播的潜力。"
          />
          <Shot src="/images/platform-screenshots/platform-theory-tech.png" alt="术理页" caption="术理页：技术框架的透明化传播，建立可信度" className="max-h-32" />
        </div>
      </div>
    </Slide>
  );
}

/** 综合：传播链路闭环 */
export function CommSlideSynthesis() {
  const chain = [
    ['文化源文本', '《豳风》+马和之长卷', '符号库存'],
    ['平台编码', '切片·视频·文案·UI', '多模态文本'],
    ['媒介呈现', '长卷站点', '传播渠道'],
    ['用户解码', '浏览·点击·提问', '意义生成'],
    ['传播反馈', '足迹·个性化报告·再入卷', '行为回流与再编码'],
  ];
  return (
    <Slide title="传播闭环：平台作为文化转译枢纽" subtitle="Integrated Communication Model">
      <div className="h-full flex flex-col justify-center gap-6">
        <div className="flex items-center justify-between gap-2">
          {chain.map(([stage, content, role], i) => (
            <div key={stage} className="flex items-center gap-2 flex-1">
              <div className="flex-1 rounded-lg border border-bronze/25 bg-bronze/8 p-3 text-center">
                <div className="text-bronze text-[10px] tracking-widest mb-1">{stage}</div>
                <div className="text-white/88 text-xs font-serif">{content}</div>
                <div className="text-white/45 text-[10px] mt-1">{role}</div>
              </div>
              {i < chain.length - 1 && <span className="text-bronze/40 shrink-0">→</span>}
            </div>
          ))}
        </div>
        <p className="text-white/58 text-sm text-center max-w-4xl mx-auto leading-relaxed">
          传播学视角下，本网站不是技术 Demo，而是一套完整的文化传播装置：以霍尔编码/解码为总框架，以可供性组织行动，以满足理论解释双模式，以叙事传输支撑沉浸，并通过线上站点（{SITE}）实现可验证、可展示的传播实践。
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          <Shot src="/images/platform-screenshots/platform-scroll.png" alt="" caption="媒介呈现" />
          <Shot src="/images/platform-screenshots/platform-rag.png" alt="" caption="协商解码" />
        </div>
      </div>
    </Slide>
  );
}

export const communicationSlides = [
  CommSlideOverview,
  CommSlideEncoding,
  CommSlideAffordance,
  CommSlideUsesGratifications,
  CommSlideNarrative,
  CommSlideSynthesis,
];
