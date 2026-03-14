import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import { Slide1, Slide2, Slide3 } from './slides/Module1';
import { Slide4, Slide5, Slide6, Slide7, Slide8 } from './slides/Module2';
import { Slide9, Slide10, Slide11, Slide12 } from './slides/Module3';
import { Slide13, Slide14, Slide15 } from './slides/Module4';
import { Slide16, Slide17, Slide18 } from './slides/Module5';

const slides = [
  Slide1, Slide2, Slide3,
  Slide4, Slide5, Slide6, Slide7, Slide8,
  Slide9, Slide10, Slide11, Slide12,
  Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleLoadingComplete = () => {
      setIsLoading(false);
    };
    window.addEventListener('loadingComplete', handleLoadingComplete);
    return () => window.removeEventListener('loadingComplete', handleLoadingComplete);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div 
      className="w-screen h-screen bg-[var(--color-bg-dark)] text-[var(--color-text-main)] overflow-hidden relative font-sans"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('button')) return;
        if (e.clientX > window.innerWidth / 2) {
          nextSlide();
        } else {
          prevSlide();
        }
      }}
    >
      <div className="texture-overlay pointer-events-none" />
      
      {/* Main Content Area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full relative pointer-events-auto px-12 md:px-20">
          <AnimatePresence mode="wait">
            <CurrentSlideComponent key={currentSlide} />
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-50 pointer-events-none">
        <motion.div 
          className="h-full bg-bronze"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-8 text-xs font-mono text-bronze/60 tracking-widest z-50 pointer-events-none">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300 z-50">
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          disabled={currentSlide === 0}
          className="p-3 rounded-full border border-white/10 text-white disabled:opacity-20 hover:bg-bronze/10 hover:border-bronze/50 hover:text-bronze transition-all cursor-pointer"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full border border-white/10 text-white disabled:opacity-20 hover:bg-bronze/10 hover:border-bronze/50 hover:text-bronze transition-all cursor-pointer"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Minimalist Logo Placeholder */}
      <div className="absolute top-6 right-6 z-50 pointer-events-none">
        <img src="/images/logo.png" alt="HIT Logo" className="w-24 h-auto object-contain mix-blend-screen opacity-90" />
      </div>
    </div>
    </>
  );
}
