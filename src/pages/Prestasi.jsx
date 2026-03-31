import React from 'react';
import { Award } from 'lucide-react';

const DUMMY_ACHIEVEMENTS = [
  { id: 1, title: 'Juara Harapan 1 Lomba Gerak Jalan Berirama', category: 'Ekstrakurikuler Paskibra', year: '2024', image: 'https://images.unsplash.com/photo-1542491500-b6f703de9bc0?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Juara Harapan 1 Lomba Tari Kreasi Nusantara', category: 'Seni & Budaya', year: '2024', image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Meraih Prestasi Sebagai Walikota Sehari Kota Tangerang', category: 'Prestasi Kepemimpinan', year: '2024', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Juara 1 Lomba Video Edukasi Gizi Remaja Tingkat SMP', category: 'Akademik/Edukasi', year: '2024', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: 'Juara 2 Lomba Video Edukasi Genre', category: 'Pendidikan Anak/Remaja', year: '2024', image: 'https://images.unsplash.com/photo-1620800845112-6804554b7325?auto=format&fit=crop&q=80&w=400' },
];

const Prestasi = () => {
  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      
      <div style={{ backgroundColor: 'var(--white)', padding: '15px 20px', borderBottom: '1px solid var(--border-color)', margin: '0 0 30px', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>DAFTAR PRESTASI SISWA</h2>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '5px' }}>Home / Daftar Prestasi</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {DUMMY_ACHIEVEMENTS.map((item) => (
          <div key={item.id} className="card" style={{ padding: '15px', textAlign: 'center' }}>
            <div style={{ overflow: 'hidden', borderBottom: '3px solid var(--secondary-color)', paddingBottom: '10px' }}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ width: '100%', height: '180px', objectFit: 'cover', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            
            <div style={{ marginTop: '15px' }}>
              <div style={{ color: 'var(--primary-color)', marginBottom: '5px' }}>
                <Award size={28} style={{ display: 'inline' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '5px', marginBottom: '0' }}>
                Kategori: <strong>{item.category}</strong> <br/>
                Tahun: <strong>{item.year}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Prestasi;
