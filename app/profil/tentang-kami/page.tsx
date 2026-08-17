// app/tentang/page.tsx

import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import Subprofil from '@/components/Subprofil/Subprofil';
import {
  Building2,
  Users,
  BookOpen,
  Heart,
  HandHeart,
  GraduationCap,
  Landmark,
  Shield,
  Globe,
  MapPin,
  Calendar,
  Award,
  Target,
  Eye,
  CheckCircle,
  Quote,
  Home,
  Church,
  User,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang PCNU | PCNU Kabupaten Kotabaru',
  description:
    'Tentang Pengurus Cabang Nahdlatul Ulama Kabupaten Kotabaru - Bumi Saijaan. Sejarah, visi misi, dan program pemberdayaan PCNU Kotabaru.',
};

export default function TentangPage() {
  return (
    <>
      <Hero
        title="Tentang PCNU Kotabaru"
        description="Pengurus Cabang Nahdlatul Ulama Kabupaten Kotabaru – Bumi Saijaan"
      />
      <Subprofil />

      {/* Pengantar */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Logo/Ilustrasi */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-green-700 to-green-500 rounded-3xl flex items-center justify-center shadow-xl">
                  <div className="text-center text-white">
                    <span className="text-6xl font-bold block">NU</span>
                    <span className="text-xs font-light tracking-widest block mt-1">
                      PCNU KOTABARU
                    </span>
                  </div>
                </div>
              </div>

              {/* Deskripsi */}
              <div className="lg:w-2/3">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Kabupaten Kotabaru - Kalimantan Selatan</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Selamat Datang di PCNU Kotabaru
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <span className="font-semibold text-green-700">
                    Pengurus Cabang Nahdlatul Ulama Kabupaten Kotabaru
                  </span>{' '}
                  adalah perpanjangan tangan organisasi Nahdlatul Ulama di tingkat kabupaten yang
                  berkomitmen untuk memajukan kehidupan beragama, berbangsa, dan bernegara di{' '}
                  <span className="font-semibold text-green-700">Bumi Saijaan</span>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  PCNU Kotabaru aktif memfasilitasi kegiatan dakwah, sosial, dan pendidikan melalui
                  berbagai program unggulan seperti{' '}
                  <span className="font-medium text-green-700">LAZISNU</span>,{' '}
                  <span className="font-medium text-green-700">Lailatul Ijtima</span>, majelis ilmu,
                  serta berbagai kegiatan keumatan lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Ringkas */}
      <section className="py-12 sm:py-16 bg-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Landasan & Komitmen PCNU Kotabaru
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Aqidah */}
              <div className="bg-white rounded-2xl border border-green-200 p-6 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Aqidah Asy'ariyah</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Berlandaskan Aqidah Asy'ariyah, PCNU menjaga tradisi Ahlussunnah wal Jama'ah dan
                  memperkuat peran Nahdlatul Ulama di tengah masyarakat.
                </p>
              </div>

              {/* Tasawuf & Fiqih */}
              <div className="bg-white rounded-2xl border border-green-200 p-6 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Tasawuf & Fiqih</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dalam tasawuf mengikuti ajaran{' '}
                  <span className="font-medium text-green-700">Ghazaliyyah</span> dan{' '}
                  <span className="font-medium text-green-700">Junaid al-Baghdadi</span>, serta
                  dalam fiqih berpegang pada <span className="font-medium text-green-700">
                    Syafi'iyyah
                  </span>{' '}
                  yang moderat dan seimbang.
                </p>
              </div>

              {/* NKRI & Rahmatan lil Alamin */}
              <div className="bg-white rounded-2xl border border-green-200 p-6 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">NKRI & Rahmatan lil Alamin</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Menanamkan cinta tanah air serta menjaga kesatuan dan persatuan demi keutuhan NKRI
                  dengan semangat{' '}
                  <span className="font-medium text-green-700">Islam rahmatan lil 'alamin</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program & Aktivitas */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Program & Aktivitas Unggulan
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
              <p className="text-slate-600 mt-3 text-sm">
                Berbagai program pemberdayaan yang menyentuh sektor ekonomi, pendidikan, dan
                kemanusiaan
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: HandHeart,
                  name: 'LAZISNU',
                  desc: 'Penghimpunan dan penyaluran zakat, infak, dan sedekah untuk pemberdayaan umat',
                  color: 'from-red-50 to-red-100 border-red-200',
                  iconColor: 'text-red-600',
                },
                {
                  icon: Church,
                  name: 'Lailatul Ijtima',
                  desc: 'Kegiatan rutin pengajian dan silaturahmi warga NU hingga tingkat kecamatan',
                  color: 'from-blue-50 to-blue-100 border-blue-200',
                  iconColor: 'text-blue-600',
                },
                {
                  icon: GraduationCap,
                  name: 'Majelis Ilmu',
                  desc: 'Pengajian dan kajian keislaman untuk meningkatkan pemahaman keagamaan',
                  color: 'from-purple-50 to-purple-100 border-purple-200',
                  iconColor: 'text-purple-600',
                },
                {
                  icon: Users,
                  name: 'Pemberdayaan Umat',
                  desc: 'Program pemberdayaan ekonomi, pendidikan, dan sosial kemasyarakatan',
                  color: 'from-green-50 to-green-100 border-green-200',
                  iconColor: 'text-green-600',
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${program.color} border rounded-2xl p-5 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <program.icon className={`w-7 h-7 ${program.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{program.name}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-12 sm:py-16 bg-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Visi & Misi PCNU Kotabaru
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
              <p className="text-slate-600 mt-3 text-sm">Masa Khidmat 2025 – 2030</p>
            </div>

            {/* Visi */}
            <div className="bg-white rounded-2xl border border-green-200 p-6 sm:p-8 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Visi</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base pl-0 sm:pl-14">
                "Menjadi organisasi yang meneguhkan ajaran Islam Ahlussunnah wal Jama'ah An-Nahdliyah
                serta mewujudkan masyarakat Kotabaru yang sejahtera, berkeadilan, berkarakter, dan
                berakhlakul karimah dalam bingkai Negara Kesatuan Republik Indonesia."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl border border-green-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Misi</h3>
              </div>
              <div className="space-y-3 pl-0 sm:pl-14">
                {[
                  'Memperkuat peran NU di tengah masyarakat dengan menghidupkan nilai sejarah dan membangun kedekatan emosional, sosial, dan spiritual.',
                  'Mengoptimalkan pemberdayaan organisasi dari PC hingga ranting dengan meningkatkan koordinasi dan kolaborasi antar tingkatan.',
                  'Memperkuat kolaborasi dengan Pemerintah Daerah, DPRD, Forkopimda, dan pemangku kepentingan lainnya.',
                  'Mendorong kemandirian ekonomi Jam\'iyyah melalui pemberdayaan LAZISNU dan koperasi NU.',
                  'Mengembangkan dakwah dan pendidikan Islam berkelanjutan yang inklusif, teduh, dan meneguhkan nilai kebangsaan.',
                  'Digitalisasi dan pemanfaatan teknologi informasi untuk dakwah dan penguatan jejaring.',
                  'Menumbuhkan kaderisasi, etos kerja, dan akhlak berorganisasi dengan semangat khairunnas anfa\'uhum linnas.',
                ].map((misi, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm leading-relaxed">{misi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil Singkat */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kiri: Pilar Utama */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-green-700" />
                  Pilar Utama PCNU
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: Heart,
                      label: 'Keagamaan',
                      desc: 'Penguatan aqidah, syariah, dan tasawuf Ahlussunnah wal Jama\'ah',
                    },
                    {
                      icon: Users,
                      label: 'Kebangsaan',
                      desc: 'Menjaga NKRI dan memperkuat nasionalisme berbasis nilai keislaman',
                    },
                    {
                      icon: HandHeart,
                      label: 'Kemanusiaan',
                      desc: 'Program pemberdayaan dan pelayanan sosial bagi masyarakat',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 p-3 rounded-xl bg-green-50/50 border border-green-100">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <item.icon className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{item.label}</h4>
                        <p className="text-xs text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kanan: Dukungan & Peran */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-700" />
                  Dukungan & Peran
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: Users,
                      label: 'Pengurus & Banom',
                      desc: 'Didukung oleh pengurus, badan otonom, dan warga Nahdliyin yang solid',
                    },
                    {
                      icon: GraduationCap,
                      label: 'Pendidikan & Pesantren',
                      desc: 'Jejaring dengan lembaga pendidikan dan pesantren di Kotabaru',
                    },
                    {
                      icon: Landmark,
                      label: 'Kelembagaan',
                      desc: 'Wadah strategis untuk penguatan kelembagaan dan pemberdayaan umat',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 p-3 rounded-xl bg-green-50/50 border border-green-100">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <item.icon className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{item.label}</h4>
                        <p className="text-xs text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kutipan */}
            <div className="mt-10 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 sm:p-8 text-center text-white">
              <Quote className="w-8 h-8 text-green-200 mx-auto mb-3 opacity-50" />
              <p className="text-base sm:text-lg font-light leading-relaxed">
                "PCNU Kotabaru terus tumbuh sebagai wadah strategis untuk penguatan kelembagaan,
                pemberdayaan umat, dan pembangunan masyarakat yang berkelanjutan."
              </p>
              <p className="text-sm text-green-200 mt-3">— PCNU Kabupaten Kotabaru</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}