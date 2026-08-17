export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

export const featuredNews: NewsItem[] = [
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