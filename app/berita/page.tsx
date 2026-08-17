// app/berita/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';

import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { featuredNews } from '@/data';

export const metadata: Metadata = {
  title: 'Berita & Kegiatan | PCNU Kabupaten Kotabaru',
  description:
    'Kumpulan berita dan kegiatan terbaru dari Pengurus Cabang Nahdlatul Ulama (PCNU) Kabupaten Kotabaru, Kalimantan Selatan.',
};

export default function BeritaPage() {
  return (
    <>
      <Hero title="Berita & Kegiatan" />

      {/* Berita List Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-green-50/30 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid Berita */}
          {featuredNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredNews.map((news) => (
                <article
                  key={news.id}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-green-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                    {news.image ? (
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center text-white font-bold">
                        <span className="text-4xl sm:text-5xl opacity-90">NU</span>
                      </div>
                    )}
                    
                    <div className="absolute top-3 left-3 bg-green-700/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {news.category}
                    </div>

                    {news.readTime && (
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{news.readTime}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-green-600" />
                        <span>{news.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-green-600" />
                        <span className="truncate max-w-[120px]">{news.author}</span>
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug mb-2">
                      {news.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed flex-1">
                      {news.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-green-100">
                      <Link
                        href={`/berita/${news.slug}`}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-green-700 hover:text-green-800 transition-colors"
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Empty State */}
          {featuredNews.length === 0 && (
            <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-green-200 p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                Belum Ada Berita
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                Belum ada berita atau kegiatan yang dipublikasikan saat ini.
              </p>
            </div>
          )}

          {/* Pagination UI (Tampil jika jumlah berita > 6) */}
          {featuredNews.length > 6 && (
            <div className="mt-8 sm:mt-12 flex items-center justify-center gap-1.5 sm:gap-2">
              <button className="p-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>

              <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-green-700 text-white shadow-sm">
                1
              </button>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg text-slate-600 hover:text-green-700 border border-green-200 hover:bg-green-50 transition-colors">
                2
              </button>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg text-slate-600 hover:text-green-700 border border-green-200 hover:bg-green-50 transition-colors">
                3
              </button>

              <button className="p-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-1">
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}