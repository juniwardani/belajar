// app/pengurus/page.tsx

'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero/Hero';
import Subprofil from '@/components/Subprofil/Subprofil';
import {
  Users,
  User,
  Search,
  Crown,
  Star,
  Shield,
  Briefcase,
  UserCheck,
  X,
} from 'lucide-react';
import { pengurusData, pengurusCategories } from '@/data/pengurus';

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




    return filtered;
  }, [selectedCategory, searchQuery]);

  // Total anggota terdaftar
  const totalMembers = useMemo(() => {
    return pengurusData.reduce((acc, struktur) => acc + struktur.members.length, 0);
  }, []);

  // Ikon untuk setiap kategori
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'utama':
        return <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />;
      case 'mustasyar':
        return <Star className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />;
      case 'syuriyah':
        return <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />;
      case 'tanfidziyah':
        return <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />;
      case 'awan':
        return <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-orange-300" />;
      default:
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
    }
  };

  return (
    <>
      <Hero title="Struktur Pengurus PCNU" />
      <Subprofil />

      {/* Pengurus List Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-green-50/30 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Filter & Search Input */}
          

          {/* Grid Struktur */}
          <div className="space-y-6 sm:space-y-8">
            {filteredData.map((struktur) => (
              <div
                key={struktur.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-green-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header Struktur */}
                <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                      {getCategoryIcon(struktur.members[0]?.category || '')}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                        {struktur.name}
                      </h3>
                      {struktur.description && (
                        <p className="text-green-100 text-xs sm:text-sm mt-0.5">
                          {struktur.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="self-start sm:self-auto bg-white/20 text-white text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap">
                    {struktur.members.length} Anggota
                  </span>
                </div>

                {/* Members Grid */}
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {struktur.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-start gap-3 p-3 rounded-xl border border-green-100 hover:border-green-300 hover:bg-green-50/50 transition-all group min-w-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-green-700 group-hover:text-white transition-colors" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug break-words">
                          {member.name}
                        </p>
                        <p className="text-[11px] sm:text-xs text-green-700 font-medium mt-0.5 break-words">
                          {member.position}
                        </p>
                        {member.description && (
                          <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight break-words">
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
            <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-green-200 p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                Pengurus Tidak Ditemukan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-4">
                Tidak ada pengurus yang sesuai dengan filter atau kata kunci pencarian Anda.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('semua');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-green-700 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm"
              >
                Reset Filter
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}