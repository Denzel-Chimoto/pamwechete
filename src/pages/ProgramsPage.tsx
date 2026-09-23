import { useMemo, useState } from 'react';
import { ProgramCard } from '../components/ProgramCard';
import { SectionHeading } from '../components/SectionHeading';
import { PROGRAMS } from '../data/programs';

export function ProgramsPage() {
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed'>('all');
  const programs = useMemo(
    () => (filter === 'all' ? PROGRAMS : PROGRAMS.filter((program) => program.status === filter)),
    [filter],
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="Projects built around access, connection and opportunity."
          // description="This page and the homepage carousel intentionally use the same static programme repository, so content only needs to be maintained in one place."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Programme status">
          {[
            ['all', 'All'],
            ['in-progress', 'In progress'],
            ['completed', 'Completed'],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={filter === value}
              onClick={() => setFilter(value as typeof filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === value
                  ? 'bg-brand-600 text-white'
                  : 'border border-line bg-surface text-ink-muted hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 dark:hover:bg-brand-950/60 dark:hover:text-brand-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <div key={program.id} id={program.id} className="scroll-mt-24">
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
