import { useEffect, useRef } from 'react';
import { Slide } from '../components/Slide';

const videos = [
  '/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_001_optimized_v1_raw.mp4',
  '/video/all_generated_videos_collection/generated_videos_scene_04_南亩耕作与王业之始_v18.mp4',
  '/video/all_generated_videos_collection/videos copy/image_003.mp4',
  '/video/all_generated_videos_collection/videos copy/img_007.mp4',
];

function WallVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 aspect-video">
      <video ref={ref} src={src} className="w-full h-full object-cover opacity-85" loop muted playsInline preload="none" />
    </div>
  );
}

export function VideoWall() {
  return (
    <Slide title="视频效果迭代墙" subtitle="Video Generation · 4 Samples">
      <div className="h-full flex flex-col justify-center gap-4">
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
          {videos.map((src) => (
            <WallVideo key={src} src={src} />
          ))}
        </div>
        <p className="text-center text-white/35 text-[10px] tracking-widest">进入本页后按需播放 · 翻页自动暂停</p>
      </div>
    </Slide>
  );
}
