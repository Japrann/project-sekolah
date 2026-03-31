import React from 'react';
import { Calendar as CalendarIcon, User, ChevronRight } from 'lucide-react';

const DUMMY_NEWS = [
  {
    id: 1,
    title: 'Pendaftaran Murid Baru SMP PGRI 1 Tangerang Tahun Pelajaran 2026/2027 Telah Dibuka',
    date: 'Maret 2026',
    category: 'Pendaftaran',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400',
    summary: 'SMP PGRI 1 Tangerang resmi membuka pendaftaran peserta didik baru. Segera daftarkan putra/putri Anda untuk menempuh pendidikan berkualitas.'
  },
  {
    id: 2,
    title: 'SMP PGRI 1 Tangerang Umumkan Kelulusan 247 Siswa Kelas 9 Tahun Ajaran 2024/2025',
    date: 'Juni 2025',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400',
    summary: 'Segenap dewan guru mengucapkan selamat dan sukses atas kelulusan 247 siswa kelas 9.'
  },
  {
    id: 3,
    title: 'Review Perjalanan P5 SMP PGRI 1 Tangerang Tahun Ajaran 2024/2025',
    date: 'Mei 2025',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400',
    summary: 'Rangkaian kegiatan Projek Penguatan Profil Pelajar Pancasila (P5) telah selesai dilaksanakan dengan hasil karya gemilang dari para siswa.'
  },
  {
    id: 4,
    title: 'Lagi! Peserta Didik SMP PGRI 1 Tangerang Raih Prestasi Akademis dan Non Akademik',
    date: 'April 2025',
    category: 'Prestasi',
    image: 'https://images.unsplash.com/photo-1560784566-a440cc2ceef3?auto=format&fit=crop&q=80&w=400',
    summary: 'Siswa kami kembali membawa pulang piala dalam kejuaraan tingkat provinsi Banten.'
  }
];

const Berita = () => {

  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      
      {/* Breadcrumb / Page Title */}
      <div style={{ backgroundColor: 'var(--white)', padding: '15px 20px', borderBottom: '1px solid var(--border-color)', margin: '0 0 30px', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>INDEKS BERITA</h2>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '5px' }}>Home / Berita</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
        {DUMMY_NEWS.map((news) => (
          <div key={news.id} className="card">
            <div style={{ position: 'relative' }}>
              <img 
                src={news.image} 
                alt={news.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
              />
              <span className="badge" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                {news.category}
              </span>
            </div>
            
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', height: '2.8rem', overflow: 'hidden' }}>
                <a href="#!" style={{ color: 'var(--text-primary)' }}>{news.title}</a>
              </h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '15px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><CalendarIcon size={14} /> {news.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> Admin</span>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.5, height: '4.2rem', overflow: 'hidden' }}>
                {news.summary}
              </p>
              
              <a href="#!" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                Baca Selengkapnya <ChevronRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Formal Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div style={{ display: 'flex' }}>
          <button style={{ padding: '8px 15px', border: '1px solid var(--border-color)', backgroundColor: 'var(--white)', color: 'var(--primary-color)' }}>Prev</button>
          <button style={{ padding: '8px 15px', border: '1px solid var(--primary-color)', backgroundColor: 'var(--primary-color)', color: 'white' }}>1</button>
          <button style={{ padding: '8px 15px', border: '1px solid var(--border-color)', backgroundColor: 'var(--white)', color: 'var(--primary-color)' }}>2</button>
          <button style={{ padding: '8px 15px', border: '1px solid var(--border-color)', backgroundColor: 'var(--white)', color: 'var(--primary-color)' }}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Berita;
