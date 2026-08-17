// app/pengurus/page.tsx

'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero/Hero';
import Subprofil from '@/components/Subprofil/Subprofil';
import {
  Users,
  User,
  Filter,
  Search,
  Crown,
  Star,
  Shield,
  Briefcase,
  UserCheck,
  ChevronRight,
} from 'lucide-react';
import { pengurusData, pengurusCategories, type Pengurus } from '@/data/pengurus';

export default function PengurusPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data berdasarkan kategori dan pencarian
  const filteredData = useMemo(() => {
    let filtered = pengurusData;

    // Filter kategori
    if (selectedCategory !== 'semua') {
      filtered = filtered
        .map((struktur) => ({
          ...struktur,
          members: struktur.members.filter(
            (member) => member.category === selectedCategory
          ),
        }))
        .filter((struktur) => struktur.members.length > 0);
    }

    // Filter pencarian
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered
        .map((struktur) => ({
          ...struktur,
          members: struktur.members.filter(
            (member) =>
              member.name.toLowerCase().includes(query) ||
              member.position.toLowerCase().includes(query) ||
              (member.description?.toLowerCase() || '').includes(query)
          ),
        }))
        .filter((struktur) => struktur.members.length > 0);
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Total anggota
  const totalMembers = useMemo(() => {
    return pengurusData.reduce((acc, struktur) => acc + struktur.members.length, 0);
  }, []);

  // Ikon untuk setiap kategori
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'utama':
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 'mustasyar':
        return <Star className="w-5 h-5 text-purple-500" />;
      case 'syuriyah':
        return <Shield className="w-5 h-5 text-blue-500" />;
      case 'tanfidziyah':
        return <Briefcase className="w-5 h-5 text-green-600" />;
      case 'awan':
        return <UserCheck className="w-5 h-5 text-orange-500" />;
      default:
        return <Users className="w-5 h-5 text-green-600" />;
    }
  };

  // Badge warna untuk setiap kategori
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'utama':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'mustasyar':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'syuriyah':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tanfidziyah':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'awan':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <>
      <Hero
        title="Struktur Pengurus PCNU"
        description="Susunan Pengurus Cabang Nahdlatul Ulama Kabupaten Kotabaru Masa Khidmat 2025–2030"
      />
      <Subprofil />

      {/* Filter & Search Section */}
      <section className="py-6 bg-white border-b border-green-200/50 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Categories Filter */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-green-600 shrink-0" />
              {pengurusCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-green-700 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari pengurus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pengurus List */}
      <section className="py-12 sm:py-16 bg-green-50/30 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Counter */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-green-200">
              Masa Khidmat 2025–2030
            </span>
          </div>

          {/* Grid Struktur */}
          <div className="space-y-8">
            {filteredData.map((struktur) => (
              <div
                key={struktur.id}
                className="bg-white rounded-2xl border border-green-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header Struktur */}
                <div className="bg-gradient-to-r from-green-700 to-green-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      {getCategoryIcon(struktur.members[0]?.category || '')}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {struktur.name}
                      </h3>
                      {struktur.description && (
                        <p className="text-green-100 text-sm">
                          {struktur.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {struktur.members.length} Anggota
                  </span>
                </div>

                {/* Members Grid */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {struktur.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-start gap-3 p-3 rounded-xl border border-green-100 hover:border-green-300 hover:bg-green-50/50 transition-all group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors">
                        <User className="w-5 h-5 text-green-700 group-hover:text-white transition-colors" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900 leading-tight">
                          {member.name}
                        </p>
                        {member.description && (
                          <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                            {member.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
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
                Pengurus Tidak Ditemukan
              </h3>
              <p className="text-slate-500">
                Tidak ada pengurus yang sesuai dengan filter atau pencarian Anda.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}