import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  // No custom scrolling - just use native browser smooth scroll
  // This ensures perfect compatibility across all devices and browsers
  return <>{children}</>;
}
