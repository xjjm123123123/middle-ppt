import { motion } from 'motion/react';
import { Slide } from '../components/Slide';

const videos = [
  // Original videos
  "/video/all_generated_videos_collection/generated_videos_scene_01_东山征夫与季候武备_v18.mp4",
  "/video/all_generated_videos_collection/generated_videos_scene_02_幽谷清谈与物候观察_v18.mp4",
  "/video/all_generated_videos_collection/generated_videos_scene_04_南亩耕作与王业之始_v18.mp4",
  "/video/all_generated_videos_collection/generated_videos_scene_06_士大夫步履与道统传承_v18.mp4",
  "/video/all_generated_videos_collection/generated_videos_scene_08_君子之礼与谦抑美学_v18.mp4",
  "/video/all_generated_videos_collection/generated_videos_v20_scene_10_东山征夫与季候武备_v20.mp4",
  "/video/all_generated_videos_collection/generated_videos_v20_scene_12_东山征夫与季候武备_v20.mp4",
  "/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_001_optimized_v1_raw.mp4",
  "/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_004_optimized_v3_raw.mp4",
  "/video/all_generated_videos_collection/generated_videos_v19_scene_02_幽谷清谈与物候观察_v19.mp4",
  "/video/all_generated_videos_collection/generated_videos_v19_scene_06_士大夫步履与道统传承_v19.mp4",
  "/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_002_v1_raw.mp4",
  "/video/all_generated_videos_collection/generated_videos_binfeng_ultimate_image_006_v1_raw.mp4",
  "/video/all_generated_videos_collection/generated_videos_video_image_001_multiframe.mp4",
  "/video/all_generated_videos_collection/generated_videos_video_image_001_svd.mp4",
  // New videos from 'videos copy' folder
  "/video/all_generated_videos_collection/videos copy/image_003.mp4",
  "/video/all_generated_videos_collection/videos copy/image_005.mp4",
  "/video/all_generated_videos_collection/videos copy/image_006.mp4",
  "/video/all_generated_videos_collection/videos copy/img_001.mp4",
  "/video/all_generated_videos_collection/videos copy/img_002.mp4",
  "/video/all_generated_videos_collection/videos copy/img_004.mp4",
  "/video/all_generated_videos_collection/videos copy/img_007.mp4",
  "/video/all_generated_videos_collection/videos copy/img_008.mp4"
];

export function VideoWall() {
  return (
    <Slide title="视频效果迭代墙" subtitle="Video Generation Iteration Wall">
      <div className="h-full w-full overflow-hidden flex flex-col justify-center">
        {/* Adjusted grid to fit more videos without scrolling */}
        <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
          {videos.map((src, index) => {
            // Check if the video is from the 'videos copy' folder (Second Wave)
            const isSecondWave = src.includes("videos copy");
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02, duration: 0.5 }}
                className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 aspect-video group hover:z-10 hover:scale-150 hover:border-white/50 transition-all duration-300 shadow-lg"
              >
                <video
                  src={src}
                  className={`w-full h-full object-cover transition-all duration-500 ${isSecondWave ? 'opacity-100' : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100'}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                {/* Optional: filename tooltip on hover */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-[8px] text-white/90 font-mono truncate px-1 pb-1 w-full text-center">
                      {src.split('/').pop()}
                    </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-white/30 text-[10px] font-sans tracking-widest uppercase">
            Total {videos.length} Iterations Displayed · <span className="text-bronze">Highlighted</span> videos auto-playing
          </p>
        </div>
      </div>
    </Slide>
  );
}
