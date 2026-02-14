import { type ReactNode } from 'react';

interface SafeExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
}

export function SafeExternalLink({ href, children, className, 'aria-label': ariaLabel }: SafeExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
