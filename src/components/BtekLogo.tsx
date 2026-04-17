import React from 'react';
import { cn } from '../lib/utils';

type BtekLogoProps = {
  className?: string;
  variant?: 'default' | 'light';
};

/**
 * Logo BTEK desde PNG con canal alfa: solo el arte visible, sin fondo ni filtros que simulen uno.
 */
export const BtekLogo = ({ className, variant }: BtekLogoProps) => {
  void variant;
  return (
    <span
      className={cn(
        'inline-flex max-w-full shrink-0 items-center justify-start bg-transparent leading-none',
        className
      )}
    >
      <img
        src="/logobtek.png?v=2"
        alt="Btek — Expertos en redes complejas"
        draggable={false}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="block h-full w-auto max-h-full object-contain object-left bg-transparent [background:none]"
        style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
      />
    </span>
  );
};
