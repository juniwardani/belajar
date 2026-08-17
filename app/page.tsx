import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Target, 
  HeartHandshake, 
  Send, 
  Users, 
  BookOpen, 
  Home 
} from 'lucide-react';
import { leaderProfile, featuredNews, featuredArtikel } from '@/data';

export const metadata: Metadata = {
  title: 'Beranda | PCNU Kabupaten Kotabaru',
  description:
    'Website Resmi Pengurus Cabang Nahdlatul Ulama (PCNU) Kabupaten Kotabaru, Kalimantan Selatan. Menebarkan Islam Rahmatan Lil Alamin, Membangun Masyarakat yang Berakhlakul Karimah.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-900 text-white py-8 sm:py-12 lg:py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-green-400/15 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-[1.15] text-white">
                Menebar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-200">Rahmatan Lil 'Alamin</span> di Bumi Sa-Ijaan
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Menguatkan pilar Ahlussunnah Wal Jamaah An-Nahdliyah, majelis keilmuan, serta memperkuat ukhuwah dan pemberdayaan sosial di Kabupaten Kotabaru.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/profil/tentang-kami"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/30 group text-sm sm:text-base"
                >
                  <span>Tentang Kami</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/kontak"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-100 font-semibold rounded-xl border border-emerald-700/60 transition-colors text-sm sm:text-base"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-green-400/20 rounded-3xl blur-2xl transform rotate-3 scale-95" />
              <div className="relative inline-flex items-center justify-center bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Logo PCNU Kotabaru"
                  width={400}
                  height={300}
                  className="w-full max-w-[240px] sm:max-w-[290px] h-auto object-contain rounded-xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                  priority
                />
              </div>
            </div>          
          </div>
        </div>
      </section>


      {/* 3. Section Berita Terkini */}
      <section className="py-10 sm:py-14 bg-slate-50/50 border-b border-emerald-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Kabar Terkini
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Berita & Kegiatan PCNU Kotabaru
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Informasi terbaru seputar keumatan, agenda organisasi, dan kegiatan warga Nahdliyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {featuredNews.map((news) => (
              <article
                key={news.id}
                className="group rounded-2xl bg-white border border-emerald-100/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 sm:h-44 w-full bg-slate-100 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-700 to-green-900 flex items-center justify-center text-white font-black">
                      <span className="text-2xl tracking-widest opacity-80">PCNU</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-emerald-900/90 backdrop-blur-md text-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase border border-emerald-700/50">
                      {news.category}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{news.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{news.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 py-3 flex items-center justify-between text-xs border-t border-slate-100 bg-slate-50/50">
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <User className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{news.author}</span>
                  </span>
                  <Link 
                    href={`/berita/${news.slug}`} 
                    className="font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1 hover:underline text-xs"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-emerald-200 text-emerald-800 font-bold text-xs sm:text-sm shadow-sm hover:bg-emerald-700 hover:text-white hover:border-emerald-700 hover:shadow-md transition-all duration-300 group"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Section Artikel Terkini */}
      <section className="py-10 sm:py-14 bg-white border-b border-emerald-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Artikel & Opini
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Gagasan & Keilmuan Nahdliyin
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Kumpulan pemikiran, kajian keislaman, dan wawasan dakwah dari para ulama dan pengurus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {featuredArtikel.slice(0, 3).map((artikel) => (
              <article
                key={artikel.id}
                className="group rounded-2xl bg-white border border-emerald-100/80 p-5 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                      {artikel.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      <span>{artikel.date}</span>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                    {artikel.title}
                  </h3>

                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                    {artikel.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 flex items-center justify-between text-xs border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
                    <User className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{artikel.author}</span>
                  </span>
                  <Link 
                    href={`/artikel/${artikel.id}`} 
                    className="font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1 hover:underline text-xs"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs sm:text-sm shadow-sm hover:bg-emerald-700 hover:text-white hover:border-emerald-700 hover:shadow-md transition-all duration-300 group"
            >
              <span>Lihat Semua Artikel & Opini</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Section CTA Banner Aspirasi */}
      <section className="relative py-10 sm:py-14 bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-white">
            Ada Masukan atau Pengaduan untuk <span className="text-emerald-300">PCNU Kotabaru?</span>
          </h2>

          <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Suara dan aspirasi Nahdliyin sangat berarti bagi kemajuan keumatan. PCNU Kotabaru siap mendengarkan dan menindaklanjuti masukan Anda secara terbuka.
          </p>

          <div className="pt-1 flex justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold rounded-xl shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/20 transition-all text-xs sm:text-sm group"
            >
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Sampaikan Aspirasi Sekarang</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}