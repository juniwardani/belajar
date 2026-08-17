export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  slug: string; // Tambahkan ini
}

export const featuredGallery: GalleryItem[] = [
  {
    id: 1,
    title: 'Pengajian Akbar di Masjid Agung Kotabaru',
    image: '/images/gallery1.jpg',
    category: 'Keagamaan',
    date: '15 September 2026',
    slug: 'pengajian-akbar-masjid-agung-kotabaru' // Tambahkan
  },
  {
    id: 2,
    title: 'Santunan Anak Yatim PCNU Kotabaru',
    image: '/images/gallery2.jpg',
    category: 'Sosial',
    date: '12 September 2026',
    slug: 'santunan-anak-yatim-pcnu-kotabaru'
  },
  {
    id: 3,
    title: 'Silaturahmi dengan Tokoh Agama se-Kotabaru',
    image: '/images/gallery3.jpg',
    category: 'Silaturahmi',
    date: '8 September 2026',
    slug: 'silaturahmi-tokoh-agama-kotabaru'
  }
];