import React from 'react';
import { cn } from '../lib/utils';

type BtekLogoProps = {
  className?: string;
  /** En fondos oscuros (footer, sidebar): refuerza visibilidad del PNG con transparencia sin añadir fondo opaco. */
  variant?: 'default' | 'light';
};

/**
 * Logo Btek (PNG con canal alfa). El tamaño lo controla `className` en el contenedor (p. ej. h-10).
 */
export const BtekLogo = ({ className, variant = 'default' }: BtekLogoProps) => {
  return (
    <span
      className={cn(
        'inline-flex max-w-full shrink-0 items-center justify-start bg-transparent leading-none',
        className
      )}
    >
      <img
        src="/logobtek.png"
        alt="Btek"
        draggable={false}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className={cn(
          'block h-full w-auto max-h-full object-contain object-left [background:none]',
          // Fondo oscuro: leve realce para que el arte con alfa se lea bien (sin capa de color detrás)
          variant === 'light' &&
            'brightness-[1.12] contrast-[1.05] drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]'
        )}
        style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
      />
    </span>
  );
};
