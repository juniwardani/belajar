import React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  withLogo?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
  className = '',
  withLogo = false,
}: HeroProps) {
  return (
    <section className={`relative bg-gradient-to-r from-green-700 to-green-900 text-white py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Optional Logo */}
        {withLogo && (
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center border-4 border-green-300">
              <span className="text-white font-bold text-3xl sm:text-4xl">NU</span>
            </div>
          </div>
        )}

        {/* Title */}
        <h1 className={`font-black ${withLogo ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-4xl sm:text-5xl'} mb-2`}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl text-green-200">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-base sm:text-lg mt-3 max-w-2xl mx-auto text-green-100/90">
            {description}
          </p>
        )}

        {/* Children (optional: tags, buttons, dll) */}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}