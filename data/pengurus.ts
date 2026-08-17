// @/data/pengurus.ts

export interface Pengurus {
  id: string;
  name: string;
  title: string;
  position: string;
  description?: string;
  category: 'utama' | 'syuriyah' | 'tanfidziyah' | 'mustasyar' | 'awan';
  subCategory?: string;
  isMain?: boolean;
}

export interface StrukturPengurus {
  id: string;
  name: string;
  description?: string;
  members: Pengurus[];
}

// Data Pengurus PCNU Kabupaten Kotabaru
export const pengurusData: StrukturPengurus[] = [
  // ==================== PIMPINAN UTAMA ====================
  {
    id: 'pimpinan-utama',
    name: 'Pimpinan Utama PCNU Kotabaru',
    description: 'Rais Syuriah, Katib Syuriah, Ketua Tanfidziyah, dan Sekretaris Tanfidziyah',
    members: [
      {
        id: 'rais-syuriah',
        name: 'KH. Muchtashor, S.Ag.',
        title: 'Rais Syuriah',
        position: 'Rais Syuriah',
        description: 'Pemimpin Bimbingan Spiritual & Keagamaan Syuriyah PCNU Kotabaru',
        category: 'utama',
        isMain: true,
      },
      {
        id: 'katib-syuriah',
        name: 'Drs. H. Umar Dani, M.M.',
        title: 'Katib Syuriah',
        position: 'Katib Syuriah',
        description: 'Katib Sekretaris Kebijakan Keagamaan Syuriyah PCNU Kotabaru',
        category: 'utama',
        isMain: true,
      },
      {
        id: 'ketua-tanfidziyah',
        name: 'Dr. H. Nur Zazin, M.A.',
        title: 'Ketua Tanfidziyah',
        position: 'Ketua Tanfidziyah',
        description: 'Ketua Tanfidziyah / Pelaksana Harian PCNU Kotabaru',
        category: 'utama',
        isMain: true,
      },
      {
        id: 'sekretaris-tanfidziyah',
        name: 'H. Ahmad Fitriadi Fazriannor, S.H., M.Hum.',
        title: 'Sekretaris Tanfidziyah',
        position: 'Sekretaris Tanfidziyah',
        description: 'Sekretaris Tanfidziyah PCNU Kotabaru',
        category: 'utama',
        isMain: true,
      },
    ],
  },

  // ==================== MUSTASYAR ====================
  {
    id: 'mustasyar',
    name: 'Mustasyar',
    description: '16 Anggota',
    members: [
      { id: 'm-01', name: 'H. Rusli, S.Sos.', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-02', name: 'KH. Mukhyar Darmawi, B.A.', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-03', name: 'Syairi Mukhlis, S.Sos.', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-04', name: 'Eka Syafruddin, AP., M.AP.', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-05', name: 'KH. Bahruddin Abdullah', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-06', name: 'KH. Jamhari', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-07', name: 'KH. Amiruddin', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-08', name: 'KH. Jamzuri (Gus Jam)', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-09', name: 'Ust. H. Abu Bakar Sidiq', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-10', name: 'Drs. H. Zulkifli, BT.', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-11', name: 'Ust. H. M. Thohir', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-12', name: 'Drs. H. Midhan', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-13', name: 'Ust. Usman Lakuba', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-14', name: 'Drs. H. Mukhni AF.', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-15', name: 'Drs. H. Hasbi M. Tawab', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
      { id: 'm-16', name: 'Kaspul Anwar, S.Ag.', title: 'Mustasyar', position: 'Mustasyar', category: 'mustasyar' },
    ],
  },

  // ==================== WAKIL RAIS SYURIAH ====================
  {
    id: 'wakil-rais',
    name: 'Wakil Rais Syuriah',
    description: '8 Anggota',
    members: [
      { id: 'wr-01', name: 'KH. Drs. Salman Basri, M.M.', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
      { id: 'wr-02', name: 'KH. Abdul Rasyid Arsyad, S.Ag.', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
      { id: 'wr-03', name: 'KH. Ahmad Muzakir', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
      { id: 'wr-04', name: 'KH. Drs. Bahruddin, H.S.', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
      { id: 'wr-05', name: 'Drs. H. Abdul Majid, M.Pd.I.', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
      { id: 'wr-06', name: 'KH. Abdul Hadi', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
      { id: 'wr-07', name: 'Kyai Thoharun Amrulloh, S.Pd.I.', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
      { id: 'wr-08', name: 'Kyai Zarkasyi Ma\'ad, B.A.', title: 'Wakil Rais', position: 'Wakil Rais Syuriah', category: 'syuriyah' },
    ],
  },

  // ==================== WAKIL KATIB SYURIAH ====================
  {
    id: 'wakil-katib',
    name: 'Wakil Katib Syuriah',
    description: '8 Anggota',
    members: [
      { id: 'wk-01', name: 'H. Muhammad Fadlani HS, S.Pd.', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
      { id: 'wk-02', name: 'Dr. H. Muhammad Husaini, M.M.', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
      { id: 'wk-03', name: 'Syukeri Ghazali, M.Pd.I.', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
      { id: 'wk-04', name: 'Ust. Abdur Rahim, S.Pd.I.', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
      { id: 'wk-05', name: 'H. Mukhyar, S.Pd.I., M.M.', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
      { id: 'wk-06', name: 'Ust. Fahrian', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
      { id: 'wk-07', name: 'Muhammad Yamin, S.Ag., M.M.', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
      { id: 'wk-08', name: 'H. Ahmad Sibuaih, S.Ag.', title: 'Wakil Katib', position: 'Wakil Katib Syuriah', category: 'syuriyah' },
    ],
  },

  // ==================== A'WAN ====================
  {
    id: 'awan',
    name: 'A\'wan',
    description: '40 Anggota',
    members: [
      { id: 'a-01', name: 'Ust. H. Syaiful Anwar', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-02', name: 'Drs. H. Suhartono, M.Si.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-03', name: 'Drs. Suhardiansyah', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-04', name: 'Muhammad Fuad Fahruddin, S.Ag., M.M.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-05', name: 'Khairian Ansyari, S.STP., M.Si.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-06', name: 'Drs. H. Selamat Riyadi', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-07', name: 'Selamat Riyadi, S.Pd., M.Ed.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-08', name: 'Gusti Abdul Wakhid, S.STP., M.AP.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-09', name: 'Bahrinuddin, S.Ag.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-10', name: 'Guru Syahran, S.Pd.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-11', name: 'Nasrullah Zamzami, ST., M.S.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-12', name: 'Drs. H. M. Fikripani, M.M.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-13', name: 'Drs. H. Imran Tamim, M.M.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-14', name: 'KH. M. Rusdi', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-15', name: 'Ir. Bahruddin, M.E.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-16', name: 'H. Arbain, S.Sos.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-17', name: 'Mujiburahman, S.Ag.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-18', name: 'H. M. Zaini Yasrip, S.Pd.I., Drs.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-19', name: 'Akhmad Gafuri, S.H., M.Hum.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-20', name: 'Noor Ipansyah, S.H., M.H.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-21', name: 'M. Subhan, S.H.I., M.H.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-22', name: 'H. Bakhruddin, S.AP., M.AP.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-23', name: 'H. Faisal Bateni, M.Pd.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-24', name: 'H. Jamhuri', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-25', name: 'H. Kisra Sarwansyah', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-26', name: 'H. Syarifuddin (H. Punding)', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-27', name: 'Arbani, S.Pd.I., M.M.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-28', name: 'Awaluddin, S.Pd.I.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-29', name: 'Nujhan, S.Pd.I.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-30', name: 'Sapuansyah, S.Pd.I.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-31', name: 'M. Bahruddin, M.Pd.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-32', name: 'H. Syadijan, M.Si.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-33', name: 'H. Sulaiman, S.Ag., M.M.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-34', name: 'Akhmad Sarwani, S.E.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-35', name: 'Hadi Arbaun, S.Pd.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-36', name: 'Hilal Salihin, M.Pd.I.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-37', name: 'Jasman', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-38', name: 'Moh. Syaiful Huda', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-39', name: 'Yusuf Ridho, S.Ds., M.M.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
      { id: 'a-40', name: 'Rian Chandra, S.Pd., M.H.', title: 'A\'wan', position: 'A\'wan', category: 'awan' },
    ],
  },

  // ==================== WAKIL KETUA TANFIDZIYAH ====================
  {
    id: 'wakil-ketua-tanfidziyah',
    name: 'Wakil Ketua Tanfidziyah',
    description: '8 Anggota',
    members: [
      { id: 'wkt-01', name: 'Dr. H. Ahmad Kamal, S.H.I., M.Ag.', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wkt-02', name: 'Dr. H. Akhmad Ismail Fahni, S.E., M.Si.', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wkt-03', name: 'Drs. Suriani Anshari, M.M.', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wkt-04', name: 'H. Abdul Ghoni, S.Pd.I.', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wkt-05', name: 'Ust. M. Muhdiannor, S.Pd.I., Gr.', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wkt-06', name: 'H. Herman Prasetyo, S.Ag., M.M.', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wkt-07', name: 'Ust. H. M. Yusuf Firdaus, S.Pd.', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wkt-08', name: 'Kyai Mahmudi', title: 'Wakil Ketua Tanfidziyah', position: 'Wakil Ketua Tanfidziyah', category: 'tanfidziyah' },
    ],
  },

  // ==================== WAKIL SEKRETARIS TANFIDZIYAH ====================
  {
    id: 'wakil-sekretaris-tanfidziyah',
    name: 'Wakil Sekretaris Tanfidziyah',
    description: '8 Anggota',
    members: [
      { id: 'wst-01', name: 'Tahmidullah, S.Pd.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wst-02', name: 'Muhammad Noor, S.Ag., S.Pd.I.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wst-03', name: 'Mahmud, S.AP.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wst-04', name: 'Hamsuri M. Amin, S.Pd.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wst-05', name: 'Muhammad Said, S.Pd., Gr.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wst-06', name: 'Juni Wardani, S.Pd.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wst-07', name: 'M. Rafi, S.Ag., M.Ag.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wst-08', name: 'Hafiudin Rizaldi, S.Pd.', title: 'Wakil Sekretaris Tanfidziyah', position: 'Wakil Sekretaris Tanfidziyah', category: 'tanfidziyah' },
    ],
  },

  // ==================== BENDAHARA TANFIDZIYAH ====================
  {
    id: 'bendahara-tanfidziyah',
    name: 'Bendahara Tanfidziyah',
    description: 'Pengelola Keuangan & Aset PCNU Kab. Kotabaru',
    members: [
      {
        id: 'bendahara',
        name: 'H. Ahmad Syarwani, S.H.I., M.M.',
        title: 'Bendahara Tanfidziyah',
        position: 'Bendahara Tanfidziyah',
        description: 'Pengelola Keuangan & Aset PCNU Kab. Kotabaru',
        category: 'tanfidziyah',
      },
    ],
  },

  // ==================== WAKIL BENDAHARA TANFIDZIYAH ====================
  {
    id: 'wakil-bendahara-tanfidziyah',
    name: 'Wakil Bendahara Tanfidziyah',
    description: '5 Anggota',
    members: [
      { id: 'wb-01', name: 'Sya\'yanul Kadevi, ST.', title: 'Wakil Bendahara Tanfidziyah', position: 'Wakil Bendahara Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wb-02', name: 'Ir. Dwi Handoko, ST., M.M.', title: 'Wakil Bendahara Tanfidziyah', position: 'Wakil Bendahara Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wb-03', name: 'M. Husni Thambrin, S.Pd.I.', title: 'Wakil Bendahara Tanfidziyah', position: 'Wakil Bendahara Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wb-04', name: 'Rahmad Al Hafidz, S.Pd.I.', title: 'Wakil Bendahara Tanfidziyah', position: 'Wakil Bendahara Tanfidziyah', category: 'tanfidziyah' },
      { id: 'wb-05', name: 'Benny Azi Lesmana Tahir, M.Pd.', title: 'Wakil Bendahara Tanfidziyah', position: 'Wakil Bendahara Tanfidziyah', category: 'tanfidziyah' },
    ],
  },
];

// Kategori unik untuk filter
export const pengurusCategories = [
  { id: 'semua', label: 'Semua Struktur Pengurus' },
  { id: 'utama', label: 'Pimpinan Utama PCNU Kotabaru' },
  { id: 'mustasyar', label: 'Mustasyar' },
  { id: 'syuriyah', label: 'Syuriyah' },
  { id: 'tanfidziyah', label: 'Tanfidziyah' },
  { id: 'awan', label: 'A\'wan' },
];