'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900/80 relative overflow-hidden">
      {/* Decorative Blur Effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & About (Col 7) */}
          <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Logo NU Kotabaru"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
              PCNU KOTABARU
            </span>
          </div>

            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-xl">
              Pengurus Cabang Nahdlatul Ulama Kabupaten Kotabaru, Kalimantan Selatan. Mengemban amanah melayani umat, membina akidah Ahlussunnah Wal Jamaah An-Nahdliyah, serta merawat persatuan di Bumi Sa-Ijaan.
            </p>
          </div>

          {/* Kontak Sekretariat (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-300 border-b border-emerald-800/80 pb-2">
              Kontak Sekretariat
            </h4>
            
            <ul className="space-y-3.5 text-xs sm:text-sm text-emerald-100/80">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">
                  Jl. Mega Indah RT. 07 Ds. Semayap, Komplek Pendidikan Darul Ulum, Kotabaru
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono">
                  (+62) 812-5656-8899 / (+62) 812-5063-35
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href="mailto:kotabaru@nu.or.id" 
                  className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1 font-mono"
                >
                  <span>kotabaru@nu.or.id</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950/80 border-t border-emerald-900/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-200/50 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} PCNU Kabupaten Kotabaru. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <p className="font-medium text-emerald-400/80">
              Dikelola oleh Wakil Sekretaris Tanfidziyah PCNU Kotabaru
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;