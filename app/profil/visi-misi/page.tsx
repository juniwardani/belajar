// app/visi-misi/page.tsx

import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import Subprofil from '@/components/Subprofil/Subprofil';
import {
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Handshake,
  Coins,
  GraduationCap,
  Monitor,
  Sparkles,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visi & Misi | PCNU Kabupaten Kotabaru',
  description:
    'Visi dan Misi PCNU Kabupaten Kotabaru masa khidmat 2025-2030. Meneguhkan ajaran Islam Ahlussunnah wal Jama\'ah An-Nahdliyah.',
};

// Data Visi & Misi
const visionMissionData = {
  vision: {
    title: 'Visi PCNU Kabupaten Kotabaru',
    subtitle: 'Masa Khidmat 2025 – 2030',
    text: 'Menjadi organisasi yang meneguhkan ajaran Islam Ahlussunnah wal Jama\'ah An-Nahdliyah serta mewujudkan masyarakat Kotabaru yang sejahtera, berkeadilan, berkarakter, dan berakhlakul karimah dalam bingkai Negara Kesatuan Republik Indonesia.',
  },
  missions: [
    {
      id: 1,
      title: 'Memperkuat Peran NU di Tengah Masyarakat',
      icon: Users,
      points: [
        'Menghidupkan kembali nilai sejarah NU sebagai jam\'iyyah yang lahir dari masyarakat dan hadir membersamai umat hingga pelosok daerah.',
        'Membangun kedekatan emosional, sosial, dan spiritual antara NU, kiai, ulama, dan masyarakat.',
      ],
    },
    {
      id: 2,
      title: 'Mengoptimalkan Pemberdayaan Organisasi dari PC hingga Ranting',
      icon: Building2,
      points: [
        'Meningkatkan koordinasi dan kolaborasi dengan MWC dan ranting dalam menggerakkan roda organisasi di setiap kecamatan.',
        'Mendukung penyusunan program kerja MWC dan ranting sesuai potensi daerah masing-masing.',
      ],
    },
    {
      id: 3,
      title: 'Memperkuat Kolaborasi dengan Pemerintah & Pemangku Kepentingan',
      icon: Handshake,
      points: [
        'Menjalin hubungan strategis dengan Pemerintah Daerah, DPRD, Forkopimda, perusahaan, lembaga pendidikan, dan pesantren untuk mendukung pembangunan Kotabaru Hebat.',
        'Memastikan program-program PCNU tersinergi dengan kebutuhan masyarakat dan daerah.',
      ],
    },
    {
      id: 4,
      title: 'Mendorong Kemandirian Ekonomi Jam\'iyyah',
      icon: Coins,
      points: [
        'Memberdayakan LAZISNU secara profesional dan berintegritas.',
        'Menghidupkan koperasi NU serta membaca peluang usaha yang bermanfaat bagi warga NU dan masyarakat umum.',
      ],
    },
    {
      id: 5,
      title: 'Mengembangkan Dakwah dan Pendidikan Islam Berkelanjutan',
      icon: GraduationCap,
      points: [
        'Memperkuat pendidikan Islam, dakwah Ahlussunnah wal Jama\'ah, serta kegiatan keagamaan seperti Lailatul Ijtima\' hingga tingkat kecamatan.',
        'Menghadirkan dakwah yang inklusif, teduh, dan meneguhkan nilai kebangsaan.',
      ],
    },
    {
      id: 6,
      title: 'Digitalisasi dan Pemanfaatan Teknologi Informasi',
      icon: Monitor,
      points: [
        'Mengoptimalkan media digital sebagai sarana dakwah, informasi organisasi, dan penguatan jejaring antar-pengurus.',
        'Menyelenggarakan kegiatan secara hybrid (tatap muka & online) agar akses dakwah lebih luas.',
      ],
    },
    {
      id: 7,
      title: 'Menumbuhkan Kaderisasi, Etos Kerja, dan Akhlak Berorganisasi',
      icon: Sparkles,
      points: [
        'Menanamkan semangat khairunnas anfa\'uhum linnas, bahwa setiap kader NU harus bermanfaat bagi masyarakat.',
        'Menguatkan adab berorganisasi sebagaimana pesan KH. Hasyim Asy\'ari: menjaga kecintaan, persatuan, dan menghindari perpecahan.',
        'Mengapresiasi siapa pun yang mengurus NU sebagai "santri jam\'iyyah" yang mendapat doa dan keberkahan perjuangan.',
      ],
    },
  ],
};

export default function VisiMisiPage() {
  return (
    <>
      <Hero title="Visi & Misi PCNU" />
      <Subprofil />

      {/* Visi Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Visi</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-2 leading-tight">
              {visionMissionData.vision.title}
            </h2>
            <p className="text-xs sm:text-sm text-green-600 font-medium mb-4 sm:mb-6">
              {visionMissionData.vision.subtitle}
            </p>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-medium italic">
                "{visionMissionData.vision.text}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Misi */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-green-700 text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>7 Program Misi Strategis</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Misi PCNU Kabupaten Kotabaru
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2">
              Masa Khidmat 2025 – 2030
            </p>
          </div>

          {/* Grid Misi: 1 Kolom (HP), 2 Kolom (Tablet/Laptop), 3 Kolom jika 7 Item (Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
            {visionMissionData.missions.map((mission) => {
              const Icon = mission.icon;
              return (
                <div
                  key={mission.id}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-green-200 p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-green-400 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Card */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-block text-[10px] sm:text-xs font-bold text-green-700 bg-green-100 px-2 sm:px-2.5 py-0.5 rounded-full">
                          Misi {String(mission.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1 group-hover:text-green-700 transition-colors leading-snug break-words">
                          {mission.title}
                        </h3>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2">
                      {mission.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="break-words">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Pesan */}
          <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
            <div className="bg-green-700 text-white rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center shadow-lg">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-green-200 shrink-0" />
              <p className="text-xs sm:text-base leading-relaxed">
                <span className="font-semibold block sm:inline">"Khairunnas anfa'uhum linnas"</span>
                <span className="hidden sm:inline"> — </span>
                <span className="text-green-100 block sm:inline mt-1 sm:mt-0">
                  Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain.
                </span>
              </p>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-green-600/60">
                <p className="text-[11px] sm:text-xs text-green-200 leading-normal">
                  Setiap kader NU adalah "santri jam'iyyah" yang mendapat doa dan keberkahan perjuangan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}