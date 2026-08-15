'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Heart,
  Globe,
  Clock,
  Calendar,
  ChevronRight,
  Award,
  Shield,
  HandHeart,
  GraduationCap
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

const quickLinks: FooterLink[] = [
  { name: 'Beranda', href: '/' },
  { name: 'Profil & Pengurus', href: '/profil' },
  { name: 'Berita & Kegiatan', href: '/berita' },
  { name: 'Galeri Dokumentasi', href: '/galeri' },
  { name: 'Kontak & Aspirasi', href: '/kontak' },
];

const programLinks: FooterLink[] = [
  { name: 'Pengajian Rutin', href: '/program/pengajian' },
  { name: 'Santunan Anak Yatim', href: '/program/santunan' },
  { name: 'Pendidikan Kader NU', href: '/program/pendidikan-kader' },
  { name: 'Bantuan Sosial', href: '/program/bansos' },
  { name: 'Pelatihan Ekonomi', href: '/program/pelatihan-ekonomi' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-white border-t border-green-800/50">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Brand & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-green-800/50">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-black text-lg border-2 border-green-400 shadow-lg shadow-green-500/30">
                NU
              </div>
              <div>
                <span className="font-bold text-white text-lg leading-tight block">
                  PCNU Kotabaru
                </span>
                <span className="text-xs text-green-300 font-semibold block -mt-0.5">
                  Nahdlatul Ulama · Bumi Sa-Ijaan
                </span>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed max-w-md">
              Pengurus Cabang Nahdlatul Ulama Kabupaten Kotabaru berkomitmen 
              menjadi garda terdepan dalam menjaga keutuhan NKRI, memperkuat 
              pemahaman Ahlussunnah Wal Jamaah, serta memberdayakan masyarakat 
              melalui program-program keagamaan, pendidikan, dan sosial kemasyarakatan.
            </p>
            
            {/* Tag NU */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-green-200 bg-green-800/50 px-3 py-1.5 rounded-full border border-green-700/50">
                <Users className="w-3.5 h-3.5 text-green-400" />
                Nahdliyin
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-green-200 bg-green-800/50 px-3 py-1.5 rounded-full border border-green-700/50">
                <BookOpen className="w-3.5 h-3.5 text-green-400" />
                Aswaja
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-green-200 bg-green-800/50 px-3 py-1.5 rounded-full border border-green-700/50">
                <Home className="w-3.5 h-3.5 text-green-400" />
                Ukhuwah
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-green-200 bg-green-800/50 px-3 py-1.5 rounded-full border border-green-700/50">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                NKRI
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-green-400 rounded-full"></span>
              Menu Cepat
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-green-300 hover:text-green-400 text-sm transition-all duration-200 flex items-center gap-2 hover:pl-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Unggulan */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-green-400 rounded-full"></span>
              Program
            </h3>
            <ul className="space-y-2.5">
              {programLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-green-300 hover:text-green-400 text-sm transition-all duration-200 flex items-center gap-2 hover:pl-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-green-400 rounded-full"></span>
              Hubungi Kami
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-green-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors">
                  <MapPin className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                </div>
                <span className="text-green-200 text-sm leading-relaxed">
                  Jl. Jenderal Sudirman No. 123<br />
                  Kotabaru, Kalimantan Selatan
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-green-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors">
                  <Phone className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                </div>
                <a href="tel:+628123456789" className="text-green-200 hover:text-green-300 text-sm transition-colors">
                  +62 812 3456 789
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-green-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors">
                  <Mail className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                </div>
                <a href="mailto:info@pcnukotabaru.com" className="text-green-200 hover:text-green-300 text-sm transition-colors">
                  info@pcnukotabaru.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-green-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors">
                  <Clock className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                </div>
                <span className="text-green-200 text-sm">
                  Senin - Jumat: 08.00 - 16.00 WITA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-green-400 flex items-center justify-center sm:justify-start gap-1">
              &copy; {currentYear} PCNU Kabupaten Kotabaru. 
              <span className="hidden sm:inline">All rights reserved.</span>
            </p>
            <p className="text-[10px] text-green-500/70 mt-1 flex items-center justify-center sm:justify-start gap-1">
              <Heart className="w-3 h-3 text-green-400 fill-green-400/20" />
              Nahdlatul Ulama · Islam Rahmatan Lil Alamin
              <Heart className="w-3 h-3 text-green-400 fill-green-400/20" />
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-green-500">
            <Link href="/kebijakan-privasi" className="hover:text-green-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <span className="text-green-700">|</span>
            <Link href="/syarat-ketentuan" className="hover:text-green-300 transition-colors">
              Syarat & Ketentuan
            </Link>
            <span className="text-green-700">|</span>
            <Link href="/sitemap" className="hover:text-green-300 transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Version / Built with */}
          <div className="flex items-center gap-2 text-[10px] text-green-500/50">
            <Globe className="w-3 h-3" />
            <span>v2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}