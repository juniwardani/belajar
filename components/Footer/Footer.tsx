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
  const [currentYear, setCurrentYear] = useState(2024); // Default tahun

  useEffect(() => {
    // Set tahun setelah mount di client
    setCurrentYear(new Date().getFullYear());

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

  return (
    <footer className="bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-white border-t border-green-800/50">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16 pb-10 border-b border-green-800/50">
          {/* Brand Column - Kiri */}
          <div className="lg:w-[45%] xl:w-[50%]">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-green-500/30 border border-green-400/30">
                NU
              </div>
              <div>
                <span className="font-bold text-white text-xl leading-tight block tracking-tight">
                  PCNU Kotabaru
                </span>
                <span className="text-[11px] text-green-300 font-semibold block -mt-0.5 tracking-widest uppercase">
                  Nahdlatul Ulama · Bumi Sa-Ijaan
                </span>
              </div>
            </div>
            <p className="text-green-200/80 text-sm leading-relaxed max-w-lg">
              Pengurus Cabang Nahdlatul Ulama Kabupaten Kotabaru berkomitmen
              menjadi garda terdepan dalam menjaga keutuhan NKRI, memperkuat
              pemahaman Ahlussunnah Wal Jamaah, serta memberdayakan masyarakat
              melalui program-program keagamaan, pendidikan, dan sosial kemasyarakatan.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-green-200/70 bg-green-800/30 px-3 py-1.5 rounded-full border border-green-700/30 hover:bg-green-700/40 hover:border-green-600/50 transition-all cursor-default">
                <Users className="w-3.5 h-3.5 text-green-400/70" />
                Nahdliyin
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-green-200/70 bg-green-800/30 px-3 py-1.5 rounded-full border border-green-700/30 hover:bg-green-700/40 hover:border-green-600/50 transition-all cursor-default">
                <BookOpen className="w-3.5 h-3.5 text-green-400/70" />
                Aswaja
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-green-200/70 bg-green-800/30 px-3 py-1.5 rounded-full border border-green-700/30 hover:bg-green-700/40 hover:border-green-600/50 transition-all cursor-default">
                <Home className="w-3.5 h-3.5 text-green-400/70" />
                Ukhuwah
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-green-200/70 bg-green-800/30 px-3 py-1.5 rounded-full border border-green-700/30 hover:bg-green-700/40 hover:border-green-600/50 transition-all cursor-default">
                <Shield className="w-3.5 h-3.5 text-green-400/70" />
                NKRI
              </span>
            </div>
          </div>

          {/* Kontak - Kanan */}
          <div className="lg:w-[40%] xl:w-[35%]">
            <h3 className="text-[11px] font-bold text-green-300 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-green-500/50"></span>
              Hubungi Kami
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 bg-green-800/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-700/50 group-hover:scale-105 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-green-400/70 group-hover:text-green-300" />
                </div>
                <span className="text-green-200/80 text-sm leading-relaxed">
                  Jl. Jenderal Sudirman No. 123
                  <br />
                  Kotabaru, Kalimantan Selatan
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-9 h-9 bg-green-800/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-700/50 group-hover:scale-105 transition-all duration-300">
                  <Phone className="w-4 h-4 text-green-400/70 group-hover:text-green-300" />
                </div>
                <a
                  href="tel:+628123456789"
                  className="text-green-200/80 hover:text-green-300 text-sm transition-colors"
                >
                  +62 812 3456 789
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-9 h-9 bg-green-800/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-700/50 group-hover:scale-105 transition-all duration-300">
                  <Mail className="w-4 h-4 text-green-400/70 group-hover:text-green-300" />
                </div>
                <a
                  href="mailto:info@pcnukotabaru.com"
                  className="text-green-200/80 hover:text-green-300 text-sm transition-colors"
                >
                  info@pcnukotabaru.com
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-9 h-9 bg-green-800/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-700/50 group-hover:scale-105 transition-all duration-300">
                  <Clock className="w-4 h-4 text-green-400/70 group-hover:text-green-300" />
                </div>
                <span className="text-green-200/80 text-sm">
                  Senin - Jumat: 08.00 - 16.00 WITA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-green-300/50 tracking-wide">
            &copy; {currentYear} PCNU Kotabaru. All rights reserved.
          </p>
          <p className="text-[11px] text-green-300/40 tracking-wide">
            Dikelola oleh Tim IT PCNU Kotabaru
          </p>
        </div>
      </div>
    </footer>
  );
}