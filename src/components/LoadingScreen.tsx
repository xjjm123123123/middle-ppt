import { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        const event = new CustomEvent('loadingComplete');
        window.dispatchEvent(event);
      }, 500);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 bg-[var(--color-bg-dark)] flex items-center justify-center z-[100] ${isExiting ? 'loading-screen-exit' : ''}`}>
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-20 h-20">
          <div className="loading-spinner-outer absolute inset-0 rounded-full border-2 border-bronze/30" />
          <div className="loading-spinner-inner absolute inset-2 rounded-full border-2 border-transparent border-t-bronze" />
        </div>
        <div className="loading-fade-in text-bronze/80 text-sm tracking-[0.3em] uppercase">
          加载中...
        </div>
      </div>
    </div>
  );
}
