import React from 'react';
import { cn } from '../lib/utils';

type BtekLogoProps = {
  className?: string;
  /** default: navbar / fondos claros; light: pie de página y fondos oscuros o azul marca */
  variant?: 'default' | 'light';
};

/**
 * Wordmark BTEK + marca gráfica (colores de marca). Sin dependencia de assets externos.
 */
export const BtekLogo = ({ className, variant = 'default' }: BtekLogoProps) => {
  const isLight = variant === 'light';

  return (
    <svg
      role="img"
      aria-hidden
      className={cn('shrink-0', className)}
      viewBox="0 0 168 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>BTEK</title>
      {isLight ? (
        <>
          <rect x="0" y="4" width="32" height="32" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <circle cx="11" cy="14" r="2.5" fill="#ffffff" />
          <circle cx="21" cy="20" r="2.5" fill="#cc0000" />
          <circle cx="11" cy="26" r="2.5" fill="#ffffff" />
          <path
            d="M11 14 L21 20 L11 26"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="42"
            y="28"
            fontFamily='Inter, ui-sans-serif, system-ui, sans-serif'
            fontSize="22"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            <tspan fill="#ffffff">B</tspan>
            <tspan fill="#e2e8f0">TEK</tspan>
          </text>
          <rect x="42" y="31" width="52" height="3" rx="1" fill="#cc0000" />
        </>
      ) : (
        <>
          <rect x="0" y="4" width="32" height="32" rx="8" fill="#003399" />
          <circle cx="11" cy="14" r="2.5" fill="#ffffff" />
          <circle cx="21" cy="20" r="2.5" fill="#cc0000" />
          <circle cx="11" cy="26" r="2.5" fill="#ffffff" />
          <path
            d="M11 14 L21 20 L11 26"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="42"
            y="28"
            fontFamily='Inter, ui-sans-serif, system-ui, sans-serif'
            fontSize="22"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            <tspan fill="#003399">B</tspan>
            <tspan fill="#0f172a">TEK</tspan>
          </text>
          <rect x="42" y="31" width="52" height="3" rx="1" fill="#cc0000" />
        </>
      )}
    </svg>
  );
};
