import { useCallback, useEffect, useRef } from 'react';
import { Slide } from '../components/Slide';

const MAX_AUTOPLAY = 6;

const videos = [
  '/video/all_generated_videos_collection/generated_videos_scene_01_东山征夫与季候武备_v18.mp4',
  '/video/all_generated_videos_collection/generated_videos_scene_02_幽谷清谈与物候观察_v18.mp4',
  '/video/all_generated_videos_collection/generated_videos_scene_04_南亩耕作与王业之始_v18.mp4',
  '/video/all_generated_videos_collection/generated_videos_scene_06_士大夫步履与道统传承_v18.mp4',
  '/video/all_generated_videos_collection/generated_videos_scene_08_君子之礼与谦抑美学_v18.mp4',
  '/video/all_generated_videos_collection/generated_videos_v20_scene_10_东山征夫与季候武备_v20.mp4',
  '/video/all_generated_videos_collection/generated_videos_v20_scene_12_东山征夫与季候武备_v20.mp4',
  '/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_001_optimized_v1_raw.mp4',
  '/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_004_optimized_v3_raw.mp4',
  '/video/all_generated_videos_collection/generated_videos_v19_scene_02_幽谷清谈与物候观察_v19.mp4',
  '/video/all_generated_videos_collection/generated_videos_v19_scene_06_士大夫步履与道统传承_v19.mp4',
  '/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_002_v1_raw.mp4',
  '/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_006_v1_raw.mp4',
  '/video/all_generated_videos_collection/generated_videos_video_image_001_multiframe.mp4',
  '/video/all_generated_videos_collection/generated_videos_video_image_001_svd.mp4',
  '/video/all_generated_videos_collection/videos copy/image_003.mp4',
  '/video/all_generated_videos_collection/videos copy/image_005.mp4',
  '/video/all_generated_videos_collection/videos copy/image_006.mp4',
  '/video/all_generated_videos_collection/videos copy/img_001.mp4',
  '/video/all_generated_videos_collection/videos copy/img_002.mp4',
  '/video/all_generated_videos_collection/videos copy/img_004.mp4',
  '/video/all_generated_videos_collection/videos copy/img_007.mp4',
  '/video/all_generated_videos_collection/videos copy/img_008.mp4',
];

const playingVideos = new Set<HTMLVideoElement>();

function pauseTracked(el: HTMLVideoElement) {
  el.pause();
  playingVideos.delete(el);
}

function playWithLimit(el: HTMLVideoElement) {
  if (playingVideos.has(el)) return;
  if (playingVideos.size >= MAX_AUTOPLAY) {
    const oldest = playingVideos.values().next().value;
    if (oldest) pauseTracked(oldest);
  }
  void el.play()
    .then(() => {
      if (!el.paused) playingVideos.add(el);
    })
    .catch(() => {});
}

function showStillFrame(el: HTMLVideoElement) {
  const capture = () => {
    el.pause();
    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      el.currentTime = Math.min(0.08, el.duration > 0 ? el.duration * 0.05 : 0.08);
    }
  };
  if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    capture();
    return;
  }
  el.addEventListener('loadeddata', capture, { once: true });
}

function WallVideo({
  src,
  isSecondWave,
  loadDelay,
}: {
  src: string;
  isSecondWave: boolean;
  loadDelay: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);

  const loadVideo = useCallback(() => {
    const el = videoRef.current;
    if (!el || loadedRef.current) return;
    loadedRef.current = true;
    el.src = src;
  }, [src]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadVideo();
      const el = videoRef.current;
      if (!el) return;
      if (isSecondWave) {
        playWithLimit(el);
      } else {
        showStillFrame(el);
      }
    }, loadDelay);

    return () => window.clearTimeout(timer);
  }, [isSecondWave, loadDelay, loadVideo]);

  useEffect(() => {
    if (!isSecondWave) return;
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          pauseTracked(video);
          showStillFrame(video);
          return;
        }
        loadVideo();
        playWithLimit(video);
      },
      { threshold: 0.1 },
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
      pauseTracked(video);
    };
  }, [isSecondWave, loadVideo]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        loadVideo();
        const el = videoRef.current;
        if (el) playWithLimit(el);
      }}
      onMouseLeave={() => {
        const el = videoRef.current;
        if (!el || isSecondWave) return;
        pauseTracked(el);
        showStillFrame(el);
      }}
      className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 aspect-video group hover:z-10 hover:scale-[1.35] hover:border-white/50 transition-transform duration-300 shadow-lg contain-paint will-change-transform"
    >
      <video
        ref={videoRef}
        data-lazy-wall="true"
        className={`w-full h-full object-cover transition-[opacity,filter] duration-500 ${
          isSecondWave
            ? 'opacity-100'
            : 'opacity-80 grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:opacity-100'
        }`}
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-[8px] text-white/90 font-mono truncate px-1 pb-1 w-full text-center">
          {src.split('/').pop()}
        </span>
      </div>
    </div>
  );
}

export function VideoWall() {
  useEffect(() => () => playingVideos.clear(), []);

  return (
    <Slide title="视频效果迭代墙" subtitle={`Video Generation Iteration Wall · ${videos.length} Samples`}>
      <div className="h-full w-full overflow-hidden flex flex-col justify-center">
        <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
          {videos.map((src, index) => (
            <WallVideo
              key={src}
              src={src}
              isSecondWave={src.includes('videos copy')}
              loadDelay={Math.floor(index / 4) * 120}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-white/30 text-[10px] font-sans tracking-widest uppercase">
            Total {videos.length} Iterations · early samples in <span className="text-white/55">grayscale</span> ·{' '}
            <span className="text-bronze">Highlighted</span> auto-play (max {MAX_AUTOPLAY}) · hover to preview
          </p>
        </div>
      </div>
    </Slide>
  );
}
