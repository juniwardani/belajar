'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubNavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const subNavItems: SubNavItem[] = [
  { name: 'Visi & Misi', href: '/profil/visi-misi' },
  { name: 'Struktur Pengurus', href: '/profil/pengurus' },
  { name: 'Lembaga & Banom', href: '/profil/lembaga-banom' },
  { name: 'Tentang Kami', href: '/profil/tentang-kami' },
];

export default function Subprofil() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (href: string) => {
    return pathname?.startsWith(href) ?? false;
  };

  return (
    <div className="bg-green-700/90 backdrop-blur-sm border-b border-green-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3">
          {subNavItems.map((item) => {
            const active = isActive(item.href);
            
            return (
              <li key={item.name} className="flex">
                <Link
                  href={item.href}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors text-center ${
                    active
                      ? 'bg-green-600 text-white'
                      : 'text-green-100 hover:bg-green-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}