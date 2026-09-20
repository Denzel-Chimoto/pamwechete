import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';

type ButtonLinkProps = Omit<LinkProps, 'children' | 'className'> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
  showArrow?: boolean;
  className?: string;
};

export function ButtonLink({
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-400',
    secondary:
      'border border-brand-200 bg-brand-50 text-brand-900 hover:border-brand-300 hover:bg-brand-100 focus-visible:ring-brand-300 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-100 dark:hover:bg-brand-900/60',
    quiet:
      'text-ink-muted hover:bg-brand-50 hover:text-ink focus-visible:ring-brand-300 dark:hover:bg-brand-950/60',
  } as const;

  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight aria-hidden="true" size={16} />}
    </Link>
  );
}
