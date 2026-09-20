import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { NAV_ITEMS } from '../lib/navigation';
import { ButtonLink } from './ButtonLink';
import { Logo } from './Logo';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-brand-50 font-medium text-brand-800 dark:bg-brand-950/70 dark:text-brand-200' : 'text-ink-muted hover:bg-subtle hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink to="/about#contact" variant="secondary">Partner with us</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          className="grid size-10 place-items-center rounded-full text-ink hover:bg-subtle md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-line bg-surface px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm ${isActive ? 'bg-brand-50 font-medium text-brand-800 dark:bg-brand-950/70 dark:text-brand-200' : 'text-ink-muted'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ButtonLink to="/about#contact" onClick={close} variant="primary" className="mt-3 w-full">
              Partner with us
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
