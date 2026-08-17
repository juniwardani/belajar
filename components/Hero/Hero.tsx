import React, { ReactNode } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  className?: string;
  children?: ReactNode;
}

export default function Hero({
  title,
  className = '',
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-900 text-white py-10 sm:py-14 lg:py-16 ${className}`}>
      {/* Ambient Glows & Dot Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-green-400/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4 sm:py-6 lg:py-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-snug sm:leading-tight text-white max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto break-words">
          {title}
        </h1>
      </div>
    </section>
  );
}