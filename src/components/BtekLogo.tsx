import React from 'react';
import { cn } from '../lib/utils';

type BtekLogoProps = {
  className?: string;
  /** Reservado por si en el futuro se usa variante para fondos oscuros (misma imagen PNG con transparencia). */
  variant?: 'default' | 'light';
};

/**
 * Logo Btek desde PNG con canal alfa; sin fondo adicional en el contenedor.
 */
export const BtekLogo = ({ className, variant = 'default' }: BtekLogoProps) => {
  void variant;
  return (
    <img
      src="/logobtek.png"
      alt="Btek"
      width={320}
      height={96}
      draggable={false}
      decoding="async"
      className={cn(
        'block h-auto w-auto max-w-full shrink-0 object-contain bg-transparent',
        'select-none',
        className
      )}
      style={{ backgroundColor: 'transparent' }}
    />
  );
};
