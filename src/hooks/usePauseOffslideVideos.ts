import { useEffect } from 'react';

/** 翻页时暂停所有视频并释放解码资源，避免离屏占用 GPU */
export function usePauseOffslideVideos(activeKey: number) {
  useEffect(() => {
    document.querySelectorAll('video').forEach((el) => {
      el.pause();
      if (el.dataset.lazyWall === 'true') {
        el.removeAttribute('src');
        el.load();
      }
    });
  }, [activeKey]);
}
