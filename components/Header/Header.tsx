'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: 'Beranda', href: '/' },
  { 
    name: 'Profil', 
    href: '/profil',
    submenu: [
      { name: 'Sejarah NU', href: '/profil/sejarah' },
      { name: 'Visi & Misi', href: '/profil/visi-misi' },
      { name: 'Struktur Pengurus', href: '/profil/pengurus' },
    ]
  },
  { name: 'Berita', href: '/berita' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-800 to-green-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo NU */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-black text-sm border-2 border-green-300 group-hover:border-green-200 transition-all shadow-lg shadow-green-500/20">
              NU
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-sm leading-tight block group-hover:text-green-200 transition-colors">
                PCNU Kotabaru
              </span>
              <span className="text-[10px] text-green-300 font-semibold block -mt-0.5">
                Nahdlatul Ulama · Bumi Sa-Ijaan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              
              if (item.submenu) {
                return (
                  <div key={item.name} className="relative group">
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                        active
                          ? 'bg-green-600 text-white'
                          : 'text-green-100 hover:bg-green-700 hover:text-white'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-green-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'bg-green-600 text-white'
                      : 'text-green-100 hover:bg-green-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-700">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);

                if (item.submenu) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          active
                            ? 'bg-green-600 text-white'
                            : 'text-green-100 hover:bg-green-700 hover:text-white'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openSubmenu === item.name && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-green-600 pl-4">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-sm text-green-200 hover:text-white hover:bg-green-700 rounded-lg transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      active
                        ? 'bg-green-600 text-white'
                        : 'text-green-100 hover:bg-green-700 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}