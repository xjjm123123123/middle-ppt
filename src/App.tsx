import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import { usePauseOffslideVideos } from './hooks/usePauseOffslideVideos';
import {
  FinalSlide1,
  FinalSlide2,
  FinalSlide3,
  FinalSlide4,
  FinalSlide5,
  FinalSlide6,
  FinalSlide7,
  FinalSlide8,
  FinalSlide10,
  FinalSlide13,
  FinalSlide18,
  FinalSlide19,
  FinalSlide20,
} from './slides/FinalSlides';
import { Slide5, Slide6, Slide7, Slide8 } from './slides/Module2';
import { Slide9, Slide10, Slide11, Slide12 } from './slides/Module3';
import { Slide13, Slide14, Slide15 } from './slides/Module4';
import { Slide16 } from './slides/Module5';
import { VideoWall } from './slides/VideoWall';
import { Section1, Section2, Section3, Section4 } from './slides/SectionTitles';
import {
  CommSlideOverview,
  CommSlideAffordance,
  CommSlideUsesGratifications,
  CommSlideSynthesis,
} from './slides/CommunicationSlides';

const frontSlides = [
  FinalSlide1,
  FinalSlide2,
  Section1,
  FinalSlide3,
  FinalSlide4,
  FinalSlide5,
  Section2,
  FinalSlide6,
  CommSlideOverview,
  CommSlideAffordance,
  CommSlideUsesGratifications,
  CommSlideSynthesis,
  Section3,
  FinalSlide7,
  FinalSlide8,
  Slide5,
  Slide6,
  FinalSlide10,
  Slide7,
  VideoWall,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  FinalSlide13,
  Slide14,
  Slide15,
  Slide13,
  Slide16,
  Section4,
  FinalSlide18,
  FinalSlide19,
  FinalSlide20,
];

const slides = frontSlides;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  usePauseOffslideVideos(currentSlide);

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
    const finish = () => {
      setIsLoading(false);
    };
    window.addEventListener('loadingComplete', finish);
    if (document.readyState === 'complete') {
      finish();
    }
    return () => window.removeEventListener('loadingComplete', finish);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className="w-screen h-screen bg-[var(--color-bg-dark)] text-[var(--color-text-main)] overflow-hidden relative font-sans"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest('button') || target.closest('a')) return;
          if (e.clientX > window.innerWidth / 2) {
            nextSlide();
          } else {
            prevSlide();
          }
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div id="slide-root" className="w-full h-full relative px-12 md:px-20 contain-paint">
            <CurrentSlideComponent key={currentSlide} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-50 pointer-events-none">
          <div
            className="h-full bg-bronze transition-[width] duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        <div className="absolute bottom-6 right-8 text-xs font-mono text-bronze/60 tracking-widest z-50 pointer-events-none">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300 z-50">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            disabled={currentSlide === 0}
            className="p-3 rounded-full border border-white/10 text-white disabled:opacity-20 hover:bg-bronze/10 hover:border-bronze/50 hover:text-bronze transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full border border-white/10 text-white disabled:opacity-20 hover:bg-bronze/10 hover:border-bronze/50 hover:text-bronze transition-colors cursor-pointer"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="absolute top-6 right-6 z-50 pointer-events-none">
          <img
            src="/images/logo.png"
            alt="HIT Logo"
            className="w-24 h-auto object-contain mix-blend-screen opacity-90"
            loading="eager"
            decoding="async"
            width={96}
            height={96}
          />
        </div>
      </div>
    </>
  );
}
