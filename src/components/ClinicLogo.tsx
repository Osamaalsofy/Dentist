import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';

interface ClinicLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  const { config, isRTL } = useClinic();
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
  };

  const exactLogoPath = '/src/assets/images/exact_al_yaqeen_logo_1791363408690.jpg';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Logo from User's uploaded brand image */}
      {!imgError ? (
        <div className={`relative ${heights[size]} aspect-auto flex items-center shrink-0 overflow-hidden rounded-lg bg-white`}>
          <img
            src={exactLogoPath}
            alt={isRTL ? config.brand.name : config.brand.nameEn}
            className={`${heights[size]} w-auto object-contain transition-transform duration-300 hover:scale-105`}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        /* Vector Fallback if image fails */
        <div className={`relative ${heights[size]} aspect-square flex items-center justify-center shrink-0`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm"
          >
            <path
              d="M 46 16 C 30 16 18 28 18 42 C 18 48 20 54 24 58 C 24 64 24 72 32 82 C 37 88 44 94 48 96 C 46 88 44 80 44 74 C 44 68 50 64 56 64 C 62 64 68 68 68 74 C 68 80 66 88 64 96 C 68 94 75 88 80 82 C 88 72 88 64 88 58 C 92 54 94 48 94 42 C 94 28 82 16 66 16 C 58 16 52 20 46 25 C 40 20 34 16 46 16 Z"
              fill="url(#toothGrad)"
            />
            <path
              d="M 52 28 C 62 20 74 18 84 22 C 78 28 72 34 68 42 C 60 40 54 34 52 28 Z"
              fill="#64748B"
            />
            <rect x="10" y="44" width="80" height="7" rx="3.5" fill="#FAF9F5" />
            <line x1="8" y1="47.5" x2="92" y2="47.5" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" />
            <path
              d="M 36 60 C 34 70 38 82 48 92 C 45 80 43 72 48 64 Z"
              fill="var(--primary-dark)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="toothGrad" x1="18" y1="16" x2="94" y2="96" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--primary)" />
                <stop offset="0.6" stopColor="var(--primary-dark)" />
                <stop offset="1" stopColor="var(--primary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Brand Name Text (Hidden on small mobile if logo image already has the full brand name lockup) */}
      {showText && (
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="font-bold tracking-tight text-slate-900 font-['Tajawal',sans-serif] text-[16px] sm:text-[18px]">
            {isRTL ? config.brand.name : config.brand.nameEn}
          </span>
          <span className="text-[11px] text-slate-500 font-normal">
            {isRTL ? config.brand.tagline : config.brand.taglineEn}
          </span>
        </div>
      )}
    </div>
  );
};
