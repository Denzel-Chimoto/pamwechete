import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import type { Program } from '../data/programs';

interface ProgramCardProps {
  program: Program;
  compact?: boolean;
}

export function ProgramCard({ program, compact = false }: ProgramCardProps) {
  return (
    <Link
      to={`/programs#${program.id}`}
      className={`group block overflow-hidden rounded-3xl border border-line bg-surface-elevated shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5 ${compact ? 'w-[300px] shrink-0 sm:w-[360px]' : ''}`}
    >
      <div className={`overflow-hidden bg-brand-100 dark:bg-brand-950 ${compact ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
        <img
          src={program.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 dark:bg-brand-950/70 dark:text-brand-200">
            {program.status === 'in-progress' ? 'In progress' : 'Completed'}
          </span>
          <ArrowUpRight aria-hidden="true" size={17} className="text-ink-subtle transition group-hover:text-brand-600" />
        </div>
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">{program.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-muted">{program.shortDescription}</p>
      </div>
    </Link>
  );
}
