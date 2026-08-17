import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import Hero from '@/components/Hero/Hero';

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami | PCNU Kabupaten Kotabaru',
  description:
    'Hubungi Pengurus Cabang Nahdlatul Ulama (PCNU) Kabupaten Kotabaru, Kalimantan Selatan. Sampaikan aspirasi, masukan, atau pengaduan Anda.',
};

export default function KontakPage() {
  return (
    <>
      <Hero
        title="Hubungi Kami"
      />

      {/* Kontak Section + Google Maps */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kontak & Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Kontak */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Informasi Kontak</h2>
              <p className="text-slate-600 text-sm">
                Kami siap mendengarkan dan merespon setiap masukan dari warga Nahdliyin dan masyarakat umum.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Alamat</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Jl. Jenderal Sudirman No. 123<br />
                      Kotabaru, Kalimantan Selatan 72114
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Telepon</h4>
                    <a href="tel:+628123456789" className="text-sm text-slate-600 hover:text-green-700 transition-colors">
                      +62 812 3456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                    <Mail className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Email</h4>
                    <a href="mailto:info@pcnukotabaru.com" className="text-sm text-slate-600 hover:text-green-700 transition-colors">
                      info@pcnukotabaru.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                    <Clock className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Jam Operasional</h4>
                    <p className="text-sm text-slate-600">
                      Senin - Jumat: 08.00 - 16.00 WITA
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Media Sosial</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors" aria-label="Facebook">
                    <FaFacebook className="w-5 h-5 text-green-700" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors" aria-label="Instagram">
                    <FaInstagram className="w-5 h-5 text-green-700" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors" aria-label="YouTube">
                    <FaYoutube className="w-5 h-5 text-green-700" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors" aria-label="Twitter">
                    <FaTwitter className="w-5 h-5 text-green-700" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Kontak */}
            <div className="lg:col-span-2">
              <div className="bg-green-50/50 rounded-2xl p-6 sm:p-8 border border-green-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kirim Pesan</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Isi formulir di bawah ini untuk menghubungi kami. Kami akan merespon secepatnya.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          placeholder="Masukkan nama Anda"
                          className="w-full pl-9 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          placeholder="Masukkan email Anda"
                          className="w-full pl-9 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Subjek <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        id="subject"
                        placeholder="Masukkan subjek pesan"
                        className="w-full pl-9 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-4 py-2.5 text-sm border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Maps - Masih dalam 1 section yang sama, dengan jarak lebih dekat */}
          <div className="mt-8 sm:mt-10"> {/* Kurangi margin top */}
            <div className="text-center mb-4 sm:mb-5">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Lokasi Kantor PCNU Kotabaru
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Temukan kami di peta di bawah ini
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-green-200/50">
              {/* Map Container */}
              <div className="w-full h-[250px] sm:h-[320px] lg:h-[380px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255234.46286121234!2d115.967064765625!3d-3.3903167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de58b1c0d15c26f%3A0xc7fcc3f3be5ae1f5!2sKotabaru%2C%20Kalimantan%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PCNU Kabupaten Kotabaru"
                  className="w-full h-full"
                />
                
                {/* Gradient Overlay Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Info Card Overlay - Bottom Left */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-3.5 shadow-2xl border border-green-100/50 max-w-[200px] sm:max-w-xs transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[10px] sm:text-xs font-bold text-slate-900 truncate">
                        Kantor PCNU Kotabaru
                      </h4>
                      <p className="text-[9px] sm:text-xs text-slate-600 leading-tight">
                        Jl. Sudirman No. 123
                        <br className="hidden sm:block" />
                        <span className="sm:hidden">, </span>
                        Kotabaru, Kalsel
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="inline-flex items-center gap-1 text-[7px] sm:text-[9px] text-green-700 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-200">
                          <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                          Buka
                        </span>
                        <span className="text-[7px] sm:text-[9px] text-slate-400">•</span>
                        <span className="text-[7px] sm:text-[9px] text-slate-500">08.00-16.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Bottom Right */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex flex-col sm:flex-row gap-1.5 sm:gap-2">
                <a
                  href="https://www.google.com/maps/dir//Jl.+Jenderal+Sudirman+No.123+Kotabaru+Kalimantan+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-green-700 hover:bg-green-800 text-white text-[10px] sm:text-xs font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all hover:scale-105 duration-300"
                >
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="hidden sm:inline">Petunjuk Arah</span>
                  <span className="sm:hidden">Arah</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/Jl.+Jenderal+Sudirman+No.123+Kotabaru+Kalimantan+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-white/90 hover:bg-white text-slate-700 text-[10px] sm:text-xs font-semibold rounded-lg shadow-lg backdrop-blur-sm border border-white/20 transition-all hover:scale-105 duration-300"
                >
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  <span className="hidden sm:inline">Lihat Peta</span>
                  <span className="sm:hidden">Peta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}