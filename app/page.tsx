import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Calendar, Clock, User, Target, HeartHandshake, Send, Users, BookOpen, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beranda | PCNU Kabupaten Kotabaru',
  description:
    'Website Resmi Pengurus Cabang Nahdlatul Ulama (PCNU) Kabupaten Kotabaru, Kalimantan Selatan. Menebarkan Islam Rahmatan Lil Alamin, Membangun Masyarakat yang Berakhlakul Karimah.',
};


export default async function HomePage() {
  // Data dummy untuk ditampilkan
  const leaderProfile = {
    name: 'KH. Ahmad Fauzi, M.Pd.I.',
    position: 'Ketua PCNU Kabupaten Kotabaru',
    image: '/images/leader.jpg',
    quote: 'Dengan NU, kita jaga ukhuwah Islamiyah, wujudkan masyarakat Kotabaru yang beriman, bertakwa, dan berakhlak mulia.'
  };

  const featuredNews = [
    {
      id: 1,
      title: 'PCNU Kotabaru Gelar Pengajian Akbar Menyambut Maulid Nabi',
      summary: 'Pengurus Cabang Nahdlatul Ulama Kotabaru menggelar pengajian akbar dalam rangka memperingati Maulid Nabi Muhammad SAW...',
      image: '/images/news1.jpg',
      category: 'Keagamaan',
      date: '15 September 2026',
      readTime: '3 menit',
      author: 'Tim Humas PCNU',
      slug: 'pengajian-akbar-maulid-nabi'
    },
    {
      id: 2,
      title: 'Santunan Anak Yatim dan Dhuafa PCNU Kotabaru',
      summary: 'PCNU Kotabaru menyalurkan santunan kepada anak yatim dan dhuafa di 12 kecamatan se-Kabupaten Kotabaru...',
      image: '/images/news2.jpg',
      category: 'Sosial',
      date: '12 September 2026',
      readTime: '2 menit',
      author: 'Tim Humas PCNU',
      slug: 'santunan-anak-yatim'
    },
    {
      id: 3,
      title: 'Pendidikan Kader NU: Penguatan Aswaja dan Nasionalisme',
      summary: 'PCNU Kotabaru mengadakan pendidikan kader untuk memperkuat pemahaman Ahlussunnah Wal Jamaah dan nilai-nilai kebangsaan...',
      image: '/images/news3.jpg',
      category: 'Pendidikan',
      date: '10 September 2026',
      readTime: '2 menit',
      author: 'Tim Humas PCNU',
      slug: 'pendidikan-kader-nu'
    }
  ];

  const featuredGallery = [
    {
      id: 1,
      title: 'Pengajian Akbar di Masjid Agung Kotabaru',
      image: '/images/gallery1.jpg',
      category: 'Keagamaan',
      date: '15 September 2026'
    },
    {
      id: 2,
      title: 'Santunan Anak Yatim PCNU Kotabaru',
      image: '/images/gallery2.jpg',
      category: 'Sosial',
      date: '12 September 2026'
    },
    {
      id: 3,
      title: 'Silaturahmi dengan Tokoh Agama se-Kotabaru',
      image: '/images/gallery3.jpg',
      category: 'Silaturahmi',
      date: '8 September 2026'
    }
  ];

  return (
    <>
      {/* 1. Hero Section - PCNU Kotabaru */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center border-4 border-green-300">
              <span className="text-white font-bold text-3xl">NU</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">
            PCNU Kabupaten Kotabaru
          </h1>
          <p className="text-xl sm:text-2xl text-green-200">
            Nahdlatul Ulama · Bumi Sa-Ijaan
          </p>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-green-100/90">
            Menebarkan Islam Rahmatan Lil Alamin, Membangun Masyarakat yang Berakhlakul Karimah
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-block px-4 py-1 bg-green-600/50 rounded-full text-sm border border-green-400/30">
              <Users className="w-4 h-4 inline mr-1" />
              Nahdliyin
            </span>
            <span className="inline-block px-4 py-1 bg-green-600/50 rounded-full text-sm border border-green-400/30">
              <BookOpen className="w-4 h-4 inline mr-1" />
              Aswaja
            </span>
            <span className="inline-block px-4 py-1 bg-green-600/50 rounded-full text-sm border border-green-400/30">
              <Home className="w-4 h-4 inline mr-1" />
              Ukhuwah
            </span>
          </div>
        </div>
      </section>

      {/* 2. Compact About / Vision Preview */}
      <section className="py-12 sm:py-16 bg-green-50 border-b border-green-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brief Visi Misi */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold text-green-800 tracking-wider uppercase bg-green-100 px-3 py-1 rounded-full border border-green-200">
                PROFIL RINGKAS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                Mengabdi untuk Umat dan Bangsa
              </h2>
              <p className="text-justify text-slate-700 text-sm sm:text-base leading-relaxed">
                PCNU Kabupaten Kotabaru berkomitmen menjadi garda terdepan dalam menjaga keutuhan NKRI, 
                memperkuat pemahaman Ahlussunnah Wal Jamaah, serta memberdayakan masyarakat melalui program-program 
                keagamaan, pendidikan, dan sosial kemasyarakatan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-green-200 shadow-xs flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Visi Keumatan</h3>
                    <p className="text-justify text-slate-600 text-xs mt-0.5">Mewujudkan masyarakat Kotabaru yang religius, berakhlak mulia, dan berdaya saing.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-green-800 text-white border border-green-700 shadow-xs flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-green-300 text-sm">Pemberdayaan Umat</h3>
                    <p className="text-justify text-green-100 text-xs mt-0.5">Pendidikan agama, ekonomi kerakyatan, dan pelayanan sosial berbasis masjid.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/profil"
                  className="inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition-colors"
                >
                  <span>Selengkapnya tentang Profil & Pengurus</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Leader Preview */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-green-200 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 shrink-0 bg-green-100">
                  <div className="w-full h-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xl">
                    {leaderProfile.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{leaderProfile.name}</h3>
                  <p className="text-justify text-xs font-semibold text-green-700">{leaderProfile.position}</p>
                </div>
              </div>
              <blockquote className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-green-500 pl-3 leading-relaxed">
                &ldquo;{leaderProfile.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Compact News Preview (3 Latest Cards) */}
      <section className="py-12 sm:py-16 bg-white border-b border-green-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-green-800 tracking-wider uppercase bg-green-100 px-3 py-1 rounded-full">
                KABAR TERKINI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">
                Berita & Kegiatan PCNU Kotabaru
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-green-700 hover:text-green-800 hover:underline"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((news) => (
              <article
                key={news.id}
                className="group rounded-2xl bg-white border border-green-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-500 flex items-center justify-center text-white font-bold">
                      <span className="text-4xl">NU</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                      {news.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-green-600" />
                        <span>{news.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-green-600" />
                        <span>{news.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug mb-2">
                      {news.title}
                    </h3>

                    <p className="text-justify text-slate-600 text-xs line-clamp-2 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-green-800 border-t border-green-100 mt-2 pt-3">
                  <span className="flex items-center gap-1 text-slate-500 font-normal text-[11px]">
                    <User className="w-3 h-3" />
                    <span>{news.author}</span>
                  </span>
                  <Link href={`/berita/${news.slug}`} className="hover:underline flex items-center gap-1">
                    <span>Baca</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compact Gallery Preview (3 Photo Cards) */}
      <section className="py-12 sm:py-16 bg-green-50/40 border-b border-green-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-green-800 tracking-wider uppercase bg-green-100 px-3 py-1 rounded-full">
                DOKUMENTASI FOTO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">
                Galeri Kegiatan PCNU Kotabaru
              </h2>
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-green-700 hover:text-green-800 hover:underline"
            >
              <span>Lihat Semua Foto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl sm:rounded-2xl bg-white overflow-hidden border border-green-200 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full max-h-48 sm:max-h-56 md:max-h-64 bg-gradient-to-br from-green-100 to-green-400 overflow-hidden flex items-center justify-center">
                  <span className="text-green-700 text-3xl font-bold">NU</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-green-800/90 text-green-300 text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md border border-green-400/30">
                    {item.category}
                  </div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white">
                    <h3 className="text-[11px] sm:text-xs font-bold line-clamp-1">{item.title}</h3>
                    <p className="text-justify text-[9px] sm:text-[10px] text-slate-300">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clean CTA Aspirasi Banner */}
      <section className="py-12 sm:py-16 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-green-400 text-green-950 text-xs font-black uppercase tracking-wider mb-4">
            LAYANAN ASPIRASI & PENGADUAN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Ada Masukan atau Pengaduan untuk PCNU Kotabaru?
          </h2>
          <p className="text-green-200 text-sm sm:text-base mt-3 mb-6 leading-relaxed">
            Suara dan aspirasi Nahdliyin sangat berarti bagi kemajuan organisasi. 
            PCNU Kotabaru siap mendengarkan dan menindaklanjuti masukan dari seluruh warga NU.
          </p>
          <div className="flex justify-center">
            <a
              href="/kontak"
              className="inline-flex items-center px-8 py-4 bg-green-400 hover:bg-green-300 text-green-950 font-bold rounded-lg transition-colors"
            >
              <Send className="w-4 h-4 mr-1.5" />
              <span>Sampaikan Aspirasi Sekarang</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}