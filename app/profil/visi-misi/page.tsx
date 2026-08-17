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
      <Hero
        title="Visi & Misi PCNU"
        description="Meneguhkan ajaran Islam Ahlussunnah wal Jama'ah An-Nahdliyah menuju masyarakat Kotabaru yang sejahtera, berkeadilan, dan berakhlakul karimah"
      />
      <Subprofil />

      {/* Visi Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Eye className="w-5 h-5" />
              <span>Visi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              {visionMissionData.vision.title}
            </h2>
            <p className="text-sm text-green-600 font-medium mb-6">
              {visionMissionData.vision.subtitle}
            </p>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                "{visionMissionData.vision.text}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="py-12 sm:py-16 bg-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Misi */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="w-5 h-5" />
              <span>7 Program Misi Strategis</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Misi PCNU Kabupaten Kotabaru
            </h2>
            <p className="text-slate-600 mt-2">
              Masa Khidmat 2025 – 2030
            </p>
          </div>

          {/* Grid Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visionMissionData.missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <div
                  key={mission.id}
                  className="group bg-white rounded-2xl border border-green-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-green-400"
                >
                  {/* Header Card */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-700 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full">
                        Misi {String(mission.id).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-green-700 transition-colors">
                        {mission.title}
                      </h3>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2">
                    {mission.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Footer Pesan */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-green-700 text-white rounded-2xl p-6 sm:p-8 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-green-200" />
              <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-semibold">"Khairunnas anfa'uhum linnas"</span>
                <br />
                <span className="text-green-100">
                  Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain.
                </span>
              </p>
              <div className="mt-4 pt-4 border-t border-green-600/50">
                <p className="text-xs text-green-200">
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