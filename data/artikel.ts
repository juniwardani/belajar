export interface ArtikelItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  author: string;
  content?: string; // Opsional untuk konten lengkap
}

export const featuredArtikel: ArtikelItem[] = [
  {
    id: 1,
    title: 'JUNI CNU Kotabaru Gelar Pengajian Akbar Menyambut Maulid Nabi',
    summary: 'Pengurus Cabang Nahdlatul Ulama Kotabaru menggelar pengajian akbar dalam rangka memperingati Maulid Nabi Muhammad SAW yang dihadiri oleh ribuan jamaah dari berbagai kecamatan di Kabupaten Kotabaru.',
    category: 'Keagamaan',
    date: '15 September 2026',
    author: 'Tim Humas PCNU',
    content: `
      <p>Pengurus Cabang Nahdlatul Ulama (PCNU) Kabupaten Kotabaru menggelar pengajian akbar dalam rangka memperingati Maulid Nabi Muhammad SAW 1448 H. Acara yang berlangsung di Masjid Agung Kotabaru ini dihadiri oleh ribuan jamaah dari berbagai kecamatan se-Kabupaten Kotabaru.</p>
      
      <p>Pengajian akbar ini menghadirkan penceramah utama KH. Ahmad Mustofa dari Banjarmasin yang membahas tentang keteladanan Rasulullah SAW dalam membangun peradaban yang berakhlak mulia. Dalam ceramahnya, beliau menekankan pentingnya meneladani akhlak Nabi dalam kehidupan sehari-hari.</p>
      
      <p>Ketua PCNU Kotabaru, KH. Muhammad Zainuri, dalam sambutannya menyampaikan bahwa peringatan Maulid Nabi ini menjadi momentum untuk memperkuat ukhuwah Islamiyah dan meningkatkan kecintaan kepada Rasulullah SAW. Beliau juga mengajak seluruh warga Nahdliyin untuk terus mengamalkan ajaran Ahlussunnah Wal Jamaah dalam kehidupan bermasyarakat.</p>
      
      <p>Acara dimulai dengan pembacaan sholawat dan marhaban yang dipimpin oleh grup rebana PCNU Kotabaru. Suasana semakin khidmat ketika ratusan jamaah bersama-sama melantunkan sholawat Nabi. Setelah itu dilanjutkan dengan tausiyah dan diakhiri dengan doa bersama.</p>
      
      <p>Selain pengajian, panitia juga menyediakan layanan kesehatan gratis dan pembagian makanan ringan untuk anak-anak. Kegiatan ini mendapat antusiasme tinggi dari masyarakat dan diharapkan dapat menjadi agenda rutin PCNU Kotabaru dalam memperkuat nilai-nilai keislaman di Bumi Sa-Ijaan.</p>
    `
  },
  {
    id: 2,
    title: 'Santunan Anak Yatim dan Dhuafa PCNU Kotabaru',
    summary: 'PCNU Kotabaru menyalurkan santunan kepada anak yatim dan dhuafa di 12 kecamatan se-Kabupaten Kotabaru sebagai wujud kepedulian sosial di bulan Maulid.',
    category: 'Sosial',
    date: '12 September 2026',
    author: 'Tim Humas PCNU',
    content: `
      <p>Dalam rangka memperingati Maulid Nabi Muhammad SAW, PCNU Kabupaten Kotabaru menyalurkan santunan kepada anak yatim dan dhuafa di 12 kecamatan se-Kabupaten Kotabaru. Kegiatan ini merupakan wujud kepedulian sosial PCNU terhadap masyarakat yang membutuhkan.</p>
      
      <p>Total santunan yang disalurkan mencapai Rp 250 juta yang berasal dari infak dan sedekah para donatur serta pengurus PCNU Kotabaru. Setiap anak yatim menerima paket sembako, perlengkapan sekolah, dan uang tunai.</p>
      
      <p>Koordinator kegiatan, H. Abdul Rahman, mengatakan bahwa santunan ini merupakan bentuk nyata dari pengamalan ajaran Islam yang mengajarkan kepedulian terhadap sesama. "Kami berharap bantuan ini dapat meringankan beban mereka dan memberikan kebahagiaan di hari Maulid Nabi," ujarnya.</p>
      
      <p>Kegiatan santunan ini juga diiringi dengan pengajian dan doa bersama yang dipimpin oleh tokoh agama setempat. Acara berlangsung dengan khidmat dan penuh haru, terutama saat anak-anak yatim didoakan dan diberikan motivasi untuk terus semangat dalam menuntut ilmu dan menggapai cita-cita.</p>
      
      <p>PCNU Kotabaru berkomitmen untuk terus melakukan kegiatan sosial seperti ini secara rutin, tidak hanya di momen-momen tertentu, tetapi juga sebagai program pemberdayaan umat yang berkelanjutan.</p>
    `
  },
  {
    id: 3,
    title: 'Pendidikan Kader NU: Penguatan Aswaja dan Nasionalisme',
    summary: 'PCNU Kotabaru mengadakan pendidikan kader untuk memperkuat pemahaman Ahlussunnah Wal Jamaah dan nilai-nilai kebangsaan bagi generasi muda Nahdliyin.',
    category: 'Pendidikan',
    date: '10 September 2026',
    author: 'Tim Humas PCNU',
    content: `
      <p>PCNU Kabupaten Kotabaru mengadakan pendidikan kader bagi generasi muda Nahdliyin dengan tema "Penguatan Ahlussunnah Wal Jamaah dan Nasionalisme". Kegiatan ini diikuti oleh 50 peserta dari berbagai kecamatan di Kabupaten Kotabaru.</p>
      
      <p>Pendidikan kader ini berlangsung selama dua hari di Kantor PCNU Kotabaru dan menghadirkan narasumber dari PWNU Kalimantan Selatan dan akademisi UIN Antasari Banjarmasin. Materi yang disampaikan meliputi pemahaman Aswaja, moderasi beragama, wawasan kebangsaan, dan kepemimpinan.</p>
      
      <p>Ketua Panitia, Ustadz Ahmad Fauzi, menjelaskan bahwa pendidikan kader ini bertujuan untuk mencetak kader-kader NU yang berkualitas dan siap menjadi pemimpin di masa depan. "Kami ingin generasi muda NU tidak hanya paham agama, tetapi juga memiliki jiwa nasionalisme yang kuat," ujarnya.</p>
      
      <p>Para peserta mengikuti kegiatan dengan antusias, terlihat dari diskusi-diskusi interaktif yang terjadi selama sesi berlangsung. Mereka juga diberikan tugas untuk membuat program kerja yang bisa diimplementasikan di lingkungan masing-masing.</p>
      
      <p>Kegiatan ini ditutup dengan penyerahan sertifikat kepada seluruh peserta dan doa bersama. PCNU Kotabaru berencana mengadakan kegiatan serupa secara berkala untuk terus memperkuat kapasitas kader-kader NU di Kabupaten Kotabaru.</p>
    `
  },
  {
    id: 4,
    title: 'Pelatihan Ekonomi Kreatif bagi Warga Nahdliyin',
    summary: 'PCNU Kotabaru menggelar pelatihan ekonomi kreatif untuk memberdayakan warga Nahdliyin agar memiliki kemandirian ekonomi melalui usaha mikro dan kecil.',
    category: 'Ekonomi',
    date: '8 September 2026',
    author: 'Tim Humas PCNU',
    content: `
      <p>PCNU Kabupaten Kotabaru menggelar pelatihan ekonomi kreatif bagi warga Nahdliyin di Aula Kantor PCNU. Kegiatan ini bertujuan memberdayakan masyarakat agar memiliki kemandirian ekonomi melalui pengembangan usaha mikro dan kecil.</p>
      
      <p>Pelatihan ini diikuti oleh 70 peserta dari berbagai kecamatan yang terdiri dari ibu rumah tangga, pemuda, dan pelaku usaha kecil. Materi yang disampaikan meliputi manajemen keuangan, pemasaran digital, dan inovasi produk.</p>
      
      <p>Narasumber yang dihadirkan adalah praktisi bisnis dan akademisi dari Fakultas Ekonomi dan Bisnis Universitas Lambung Mangkurat. Mereka memberikan pendampingan intensif kepada peserta untuk mengembangkan ide bisnis yang potensial di Kabupaten Kotabaru.</p>
      
      <p>Wakil Ketua PCNU Kotabaru, H. M. Noor, menyampaikan bahwa pelatihan ini merupakan bagian dari program pemberdayaan umat yang menjadi fokus PCNU. "Kami ingin warga Nahdliyin tidak hanya kuat secara spiritual tetapi juga mandiri secara ekonomi," jelasnya.</p>
      
      <p>Kegiatan yang berlangsung selama tiga hari ini diakhiri dengan presentasi rencana bisnis dari masing-masing kelompok peserta. Tiga rencana bisnis terbaik mendapatkan bantuan modal usaha dari PCNU Kotabaru untuk memulai usahanya.</p>
    `
  },
  {
    id: 5,
    title: 'Musyawarah Cabang PCNU Kotabaru Persiapan Pemilu 2027',
    summary: 'PCNU Kotabaru menggelar musyawarah cabang untuk membahas peran NU dalam menghadapi Pemilu 2027 dan menjaga persatuan bangsa.',
    category: 'Organisasi',
    date: '5 September 2026',
    author: 'Tim Humas PCNU',
    content: `
      <p>PCNU Kabupaten Kotabaru menggelar musyawarah cabang yang membahas peran strategis NU dalam menghadapi Pemilihan Umum 2027. Musyawarah yang berlangsung di Kantor PCNU ini dihadiri oleh pengurus cabang, ranting, dan tokoh masyarakat.</p>
      
      <p>Dalam musyawarah tersebut, dibahas tentang bagaimana NU dapat berkontribusi dalam menjaga persatuan bangsa dan menciptakan pemilu yang damai dan berintegritas. Para peserta sepakat bahwa NU harus menjadi garda terdepan dalam menangkal hoaks dan politik identitas.</p>
      
      <p>Ketua PCNU Kotabaru, KH. Muhammad Zainuri, menegaskan bahwa NU harus tetap netral secara politik tetapi aktif dalam memberikan edukasi kepada masyarakat. "Kita harus menjaga ukhuwah dan persatuan, karena itu adalah harga mati bagi bangsa ini," tegasnya.</p>
      
      <p>Musyawarah ini juga menghasilkan rekomendasi untuk membentuk tim pemantau pemilu dari kalangan Nahdliyin yang akan mengawal jalannya pemilu di Kabupaten Kotabaru. Selain itu, akan diadakan kampanye damai dan literasi politik di tingkat ranting.</p>
      
      <p>Kegiatan ini diakhiri dengan pembacaan ikrar kebangsaan yang diikuti seluruh peserta sebagai bentuk komitmen NU dalam menjaga keutuhan NKRI.</p>
    `
  },
  {
    id: 6,
    title: 'Peringatan Hari Santri 2026 di Kotabaru',
    summary: 'PCNU Kotabaru memperingati Hari Santri 2026 dengan berbagai kegiatan yang melibatkan santri dan masyarakat di Kabupaten Kotabaru.',
    category: 'Peringatan',
    date: '3 September 2026',
    author: 'Tim Humas PCNU',
    content: `
      <p>PCNU Kabupaten Kotabaru memperingati Hari Santri 2026 dengan menggelar serangkaian kegiatan yang melibatkan santri dari berbagai pondok pesantren dan masyarakat umum di Kabupaten Kotabaru.</p>
      
      <p>Puncak peringatan Hari Santri digelar di Alun-alun Kotabaru dengan dihadiri oleh ribuan santri, tokoh agama, dan pejabat setempat. Kegiatan dimulai dengan upacara bendera, kemudian dilanjutkan dengan pembacaan doa dan istighosah bersama.</p>
      
      <p>Rangkaian kegiatan Hari Santri tahun ini antara lain: lomba baca kitab kuning, lomba pidato bahasa Arab, pentas seni Islami, dan pameran hasil karya santri. Semua kegiatan berlangsung meriah dan mendapat sambutan positif dari masyarakat.</p>
      
      <p>Dalam sambutannya, KH. Muhammad Zainuri mengajak para santri untuk terus belajar dan mengembangkan potensi diri. "Santri adalah generasi penerus yang akan membawa perubahan bagi bangsa. Jangan pernah berhenti belajar dan berkontribusi," pesannya.</p>
      
      <p>Peringatan Hari Santri ini menjadi bukti bahwa santri dan NU memiliki peran sentral dalam pembangunan sumber daya manusia yang berakhlak mulia di Kabupaten Kotabaru. PCNU berkomitmen untuk terus mendukung pendidikan pesantren dan pengembangan potensi santri.</p>
    `
  }
];