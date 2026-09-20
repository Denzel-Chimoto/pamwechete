import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { NAV_ITEMS } from '../lib/navigation';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-line bg-subtle">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-16">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">
            A student-led initiative connecting opportunities, talent and resources through the power of community.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">Explore</h2>
          <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
            {NAV_ITEMS.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-ink-muted hover:text-brand-700 dark:hover:text-brand-300">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div id="contact">
          <h2 className="text-sm font-semibold text-ink">Get involved</h2>
          <p className="mt-4 text-sm leading-6 text-ink-muted">Have an opportunity, resource or partnership to share?</p>
          <a href="mailto:hello@pamwechete.org" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200">
            hello@pamwechete.org <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} Pamwechete. All rights reserved.</span>
          <span>Faster alone. Further together.</span>
        </div>
      </div>
    </footer>
  );
}
