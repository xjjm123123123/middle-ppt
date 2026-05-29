import { useEffect } from 'react';

/** 翻页时暂停所有视频，避免离屏解码占用 GPU */
export function usePauseOffslideVideos(activeKey: number) {
  useEffect(() => {
    document.querySelectorAll('video').forEach((el) => {
      el.pause();
    });
  }, [activeKey]);
}
