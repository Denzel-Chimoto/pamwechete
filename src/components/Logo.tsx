import { Link } from 'react-router';

export function Logo() {
  return (
    <Link
      to="/"
      aria-label="Pamwechete home"
      className="inline-flex items-center gap-2 text-[1.15rem] font-semibold tracking-[-0.03em] text-ink"
    >
      <span className="grid size-7 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white shadow-sm">
        <img className='rounded-full size-7' src="/assets/logo3.svg" alt="p" />
      </span>
      pamwechete
    </Link>
  );
}
