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
import { featuredNews } from '@/data';

export const metadata: Metadata = {
  title: 'Berita & Kegiatan | PCNU Kabupaten Kotabaru',
  description:
    'Kumpulan berita dan kegiatan terbaru dari Pengurus Cabang Nahdlatul Ulama (PCNU) Kabupaten Kotabaru, Kalimantan Selatan.',
};

export default function BeritaPage() {
  // Ambil semua kategori unik
  const categories = ['Semua', ...new Set(featuredNews.map(news => news.category))];

  return (
    <>
      <Hero
        title="Berita & Kegiatan"
        description="Informasi terbaru seputar kegiatan dan program PCNU Kabupaten Kotabaru"
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
                placeholder="Cari berita..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Berita List */}
      <section className="py-12 sm:py-16 bg-green-50/30 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Counter */}
          <div className="mb-8">
            <p className="text-sm text-slate-600">
              Menampilkan <span className="font-bold text-green-700">{featuredNews.length}</span> berita
            </p>
          </div>

          {/* Grid Berita */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((news) => (
              <article
                key={news.id}
                className="group bg-white rounded-2xl border border-green-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-600 flex items-center justify-center text-white font-bold">
                    <span className="text-5xl">NU</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-green-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {news.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{news.readTime}</span>
                  </div>
                </div>

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

                  <div className="mt-4 pt-4 border-t border-green-100">
                    <Link
                      href={`/berita/${news.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-green-700 hover:text-green-800 hover:underline transition-colors"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State (jika tidak ada berita) */}
          {featuredNews.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Belum Ada Berita</h3>
              <p className="text-slate-500">Belum ada berita yang dipublikasikan saat ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination (Placeholder) */}
      {featuredNews.length > 6 && (
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