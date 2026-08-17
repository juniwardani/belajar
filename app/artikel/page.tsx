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
  Filter
} from 'lucide-react';
import { featuredArtikel } from '@/data';

export const metadata: Metadata = {
  title: 'Artikel & Opini | PCNU Kabupaten Kotabaru',
  description:
    'Kumpulan artikel dan opini terbaru dari Pengurus Cabang Nahdlatul Ulama (PCNU) Kabupaten Kotabaru, Kalimantan Selatan.',
};

export default function ArtikelPage() {
  // Ambil semua kategori unik
  const categories = ['Semua', ...new Set(featuredArtikel.map(news => news.category))];

  return (
    <>
      <Hero
        title="Artikel & Opini"
        description="Kumpulan tulisan Fiqih, Khutbah, Aqidah, Tasawuf, dan Ke-NU-an"
      />

      {/* Filter & Search Section */}
      <section className="py-6 bg-white border-b border-green-200/50 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Categories Filter */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-green-600 shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    category === 'Semua'
                      ? 'bg-green-700 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari Artikel..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artikel List */}
      <section className="py-12 sm:py-16 bg-green-50/30 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Counter */}
          <div className="mb-8">
            <p className="text-sm text-slate-600">
              Menampilkan <span className="font-bold text-green-700">{featuredArtikel.length}</span> Artikel
            </p>
          </div>

          {/* Grid Artikel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtikel.map((news) => (
              <article
                key={news.id}
                className="group bg-white rounded-2xl border border-green-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-green-600" />
                      <span>{news.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-green-600" />
                      <span>{news.author}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug mb-2">
                    {news.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed flex-1">
                    {news.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State (jika tidak ada Artikel) */}
          {featuredArtikel.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Belum Ada Artikel</h3>
              <p className="text-slate-500">Belum ada Artikel yang dipublikasikan saat ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination (Placeholder) */}
      {featuredArtikel.length > 6 && (
        <section className="py-8 bg-white border-t border-green-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                Sebelumnya
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg">
                1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                Selanjutnya
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}