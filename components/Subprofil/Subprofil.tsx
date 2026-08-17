'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubNavItem {
  name: string;
  href: string;
}

const subNavItems: SubNavItem[] = [
  { name: 'Visi & Misi', href: '/profil/visi-misi' },
  { name: 'Struktur Pengurus', href: '/profil/pengurus' },
  { name: 'Lembaga & Banom', href: '/profil/lembaga-banom' },
  { name: 'Tentang Kami', href: '/profil/tentang-kami' },
];

export default function Subprofil() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname?.startsWith(href) ?? false;
  };

  return (
    // Ditambahkan border-t border-emerald-900/80 untuk mengunci batas atas agar tidak ada garis putih
    <div className="relative z-20 bg-emerald-950 border-t border-emerald-900/80 shadow-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 sm:grid-cols-4 border-b-2 border-emerald-800/60">
          {subNavItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.name} className="flex">
                <Link
                  href={item.href}
                  className={`flex-1 py-3 px-2 text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 relative -mb-[2px] ${
                    active
                      ? 'text-emerald-300 border-b-2 border-emerald-400 font-extrabold bg-emerald-900/40'
                      : 'text-emerald-200/70 hover:text-white hover:border-b-2 hover:border-emerald-600/50'
                  }`}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
                  )}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}