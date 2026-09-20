import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { PROGRAMS } from '../data/programs';
import { ProgramCard } from './ProgramCard';

export function ProgramCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollerRef.current?.scrollBy({
      left: direction === 'right' ? 390 : -390,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="scrollbar-hidden flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-5 pt-1"
      >
        {PROGRAMS.map((program) => (
          <div key={program.id} className="snap-start">
            <ProgramCard program={program} compact />
          </div>
        ))}
      </div>
      <div className="mt-2 hidden justify-end gap-2 sm:flex">
        <button
          type="button"
          onClick={() => scroll('left')}
          aria-label="Previous programmes"
          className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950/60"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          aria-label="Next programmes"
          className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950/60"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
