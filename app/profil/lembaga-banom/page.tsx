// app/lembaga-banom/page.tsx

'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero/Hero';
import Subprofil from '@/components/Subprofil/Subprofil';
import {
  Building2,
  Users,
  Search,
  Filter,
  BookOpen,
  Briefcase,
  Heart,
  GraduationCap,
  Landmark,
  Shield,
  Music,
  HandHeart,
  Scale,
  Home,
  Stethoscope,
  Cloud,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { lembagaData, banomData } from '@/data/lembaga-banom';

type TabType = 'lembaga' | 'banom';

export default function LembagaBanomPage() {
  const [activeTab, setActiveTab] = useState<TabType>('lembaga');
  const [searchQuery, setSearchQuery] = useState('');

  // Data yang ditampilkan berdasarkan tab aktif
  const currentData = useMemo(() => {
    return activeTab === 'lembaga' ? lembagaData : banomData;
  }, [activeTab]);

  // Filter data berdasarkan pencarian
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return currentData;
    const query = searchQuery.toLowerCase();
    return currentData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.fullName.toLowerCase().includes(query) ||
        item.acronym.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }, [currentData, searchQuery]);

  // Ikon untuk setiap lembaga/banom (berdasarkan acronym)
  const getIcon = (acronym: string, category: 'lembaga' | 'banom') => {
    if (category === 'banom') {
      switch (acronym) {
        case 'Muslimat NU':
        case 'Fatayat NU':
          return <Users className="w-6 h-6" />;
        case 'GP Ansor':
          return <Shield className="w-6 h-6" />;
        case 'PMII':
          return <GraduationCap className="w-6 h-6" />;
        case 'IPNU':
        case 'IPPNU':
          return <BookOpen className="w-6 h-6" />;
        case 'JATMAN':
          return <Heart className="w-6 h-6" />;
        case 'JQH':
          return <Music className="w-6 h-6" />;
        case 'ISNU':
          return <Building2 className="w-6 h-6" />;
        case 'SARBUMUSI':
          return <Briefcase className="w-6 h-6" />;
        case 'Pagar Nusa':
          return <Shield className="w-6 h-6" />;
        case 'PERGUNU':
          return <BookOpen className="w-6 h-6" />;
        case 'SNNU':
          return <Globe className="w-6 h-6" />;
        case 'ISHARINU':
          return <Music className="w-6 h-6" />;
        default:
          return <Users className="w-6 h-6" />;
      }
    }

    // Ikon untuk Lembaga
    switch (acronym) {
      case 'LDNU':
        return <BookOpen className="w-6 h-6" />;
      case 'LP Ma\'arif NU':
      case 'LPTNU':
        return <GraduationCap className="w-6 h-6" />;
      case 'RMI NU':
        return <Home className="w-6 h-6" />;
      case 'LPNU':
      case 'LAZISNU':
        return <Briefcase className="w-6 h-6" />;
      case 'LPPNU':
        return <Globe className="w-6 h-6" />;
      case 'LKKNU':
        return <Heart className="w-6 h-6" />;
      case 'LAKPESDAM NU':
        return <Users className="w-6 h-6" />;
      case 'LPBH NU':
        return <Scale className="w-6 h-6" />;
      case 'LESBUMI NU':
        return <Music className="w-6 h-6" />;
      case 'LWPNU':
        return <Landmark className="w-6 h-6" />;
      case 'LBMNU':
        return <BookOpen className="w-6 h-6" />;
      case 'LTMNU':
        return <Home className="w-6 h-6" />;
      case 'LKNU':
        return <Stethoscope className="w-6 h-6" />;
      case 'LFNU':
        return <Globe className="w-6 h-6" />;
      case 'LTNNU':
        return <BookOpen className="w-6 h-6" />;
      case 'LPBI NU':
        return <Cloud className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  // Warna background untuk setiap kategori
  const getCardColor = (index: number) => {
    const colors = [
      'from-green-100 to-green-50 border-green-200',
      'from-blue-100 to-blue-50 border-blue-200',
      'from-purple-100 to-purple-50 border-purple-200',
      'from-yellow-100 to-yellow-50 border-yellow-200',
      'from-red-100 to-red-50 border-red-200',
      'from-indigo-100 to-indigo-50 border-indigo-200',
      'from-pink-100 to-pink-50 border-pink-200',
      'from-teal-100 to-teal-50 border-teal-200',
      'from-orange-100 to-orange-50 border-orange-200',
      'from-cyan-100 to-cyan-50 border-cyan-200',
    ];
    return colors[index % colors.length];
  };

  // Warna text untuk ikon
  const getIconColor = (index: number) => {
    const colors = [
      'text-green-600',
      'text-blue-600',
      'text-purple-600',
      'text-yellow-600',
      'text-red-600',
      'text-indigo-600',
      'text-pink-600',
      'text-teal-600',
      'text-orange-600',
      'text-cyan-600',
    ];
    return colors[index % colors.length];
  };

  // Total data
  const totalLembaga = lembagaData.length;
  const totalBanom = banomData.length;

  return (
    <>
      <Hero
        title="Lembaga & Banom NU"
        description="Perangkat departementasi dan organisasi semi-otonom Nahdlatul Ulama dalam menjalankan program dan pengabdian kepada umat"
      />
      <Subprofil />

      {/* Tab Navigation */}
      <section className="py-6 bg-white border-b border-green-200/50 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Tab Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="flex rounded-xl bg-green-50 p-1 border border-green-200 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('lembaga')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'lembaga'
                      ? 'bg-green-700 text-white shadow-md'
                      : 'text-green-700 hover:bg-green-100'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  Lembaga NU
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeTab === 'lembaga'
                        ? 'bg-white/20 text-white'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {totalLembaga}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('banom')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'banom'
                      ? 'bg-green-700 text-white shadow-md'
                      : 'text-green-700 hover:bg-green-100'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Banom NU
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeTab === 'banom'
                        ? 'bg-white/20 text-white'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {totalBanom}
                  </span>
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Cari ${activeTab === 'lembaga' ? 'lembaga' : 'banom'}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-green-50/30 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Counter & Description */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-2">
            <div>
              <p className="text-sm text-slate-600">
                Menampilkan{' '}
                <span className="font-bold text-green-700">{filteredData.length}</span>{' '}
                {activeTab === 'lembaga' ? 'lembaga' : 'banom'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-green-200">
                {activeTab === 'lembaga' ? '18 Lembaga' : '14 Banom'}
              </span>
            </div>
          </div>

          {/* Deskripsi Singkat */}
          <div className="mb-8 bg-white rounded-2xl border border-green-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                {activeTab === 'lembaga' ? (
                  <Building2 className="w-6 h-6 text-green-700" />
                ) : (
                  <Users className="w-6 h-6 text-green-700" />
                )}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  {activeTab === 'lembaga'
                    ? 'Apa itu Lembaga NU?'
                    : 'Apa itu Badan Otonom (Banom) NU?'}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {activeTab === 'lembaga'
                    ? 'Lembaga NU adalah perangkat departementasi dalam organisasi Nahdlatul Ulama yang bertugas melaksanakan kebijakan NU pada bidang-bidang atau kelompok masyarakat yang memerlukan penanganan khusus.'
                    : 'Badan Otonom (Banom) NU adalah organisasi semi-otonom di bawah naungan NU yang membina kelompok demografis atau profesi tertentu dengan berpedoman pada ajaran Ahlussunnah Wal Jama\'ah An-Nahdliyah.'}
                </p>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-gradient-to-br ${getCardColor(
                  index
                )} border rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default`}
              >
                {/* Icon & Acronym */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <div className={getIconColor(index)}>
                      {getIcon(item.acronym, item.category)}
                    </div>
                  </div>
                  <span className="text-2xl font-extrabold text-white/40 group-hover:text-white/60 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-base font-bold text-slate-900 leading-tight">
                  {item.name}
                </h4>

                {/* Full Name */}
                <p className="text-xs font-medium text-green-700 mt-0.5">
                  {item.fullName}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Badge */}
                <div className="mt-3 pt-3 border-t border-white/50">
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                      item.category === 'lembaga'
                        ? 'bg-green-700/10 text-green-700'
                        : 'bg-blue-700/10 text-blue-700'
                    }`}
                  >
                    {item.category === 'lembaga' ? 'Lembaga NU' : 'Banom NU'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                {activeTab === 'lembaga' ? 'Lembaga' : 'Banom'} Tidak Ditemukan
              </h3>
              <p className="text-slate-500">
                Tidak ada {activeTab === 'lembaga' ? 'lembaga' : 'banom'} yang sesuai dengan pencarian Anda.
              </p>
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400">
              {activeTab === 'lembaga'
                ? 'Terdapat 18 Lembaga NU yang menangani berbagai bidang pelayanan kepada umat.'
                : 'Terdapat 14 Banom NU yang membina berbagai kelompok demografis dan profesi.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}