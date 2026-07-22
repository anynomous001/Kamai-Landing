'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

interface KamaiLogoProps {
  height?: number;
  className?: string;
  variant?: 'auto' | 'light' | 'dark';
}

export default function KamaiLogo({
  height = 80,
  className = "",
  variant = 'auto'
}: KamaiLogoProps) {
  const { theme } = useTheme();
  const isDark = variant === 'dark' || (variant === 'auto' && theme === 'dark');

  // Choose the optimal high-res rectangular brand logo asset based on dark / light mode
  const logoSrc = isDark
    ? "/dark-bg-logo.png"
    : "/kamai-rounded-logo-removebg-preview.png";

  // Proportional width for the rectangular brand logo
  const width = Math.round(height * 3.8);

  return (
    <div
      className={`relative flex-shrink-0 inline-flex items-center justify-center transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ height: height, width: width }}
    >
      <Image
        src={logoSrc}
        alt="Kamai Logo"
        width={width * 2}
        height={height * 2}
        className="object-contain w-full h-full scale-[1.55] transform origin-left"
        priority
      />
    </div>
  );
}
