import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight } from 'lucide-react';

const DUMMY_LATEST_NEWS = [
  { id: 1, title: 'Pendaftaran Murid Baru SMP PGRI 1 Tangerang Tahun Pelajaran 2026/2027 Telah Dibuka', date: 'Maret 2026', author: 'Administrator', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'SMP PGRI 1 Tangerang Umumkan Kelulusan 247 Siswa Kelas 9 Tahun Ajaran 2024/2025', date: 'Juni 2025', author: 'Administrator', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Review Perjalanan P5 SMP PGRI 1 Tangerang Tahun Ajaran 2024/2025', date: 'Mei 2025', author: 'Humas', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400' },
];

const Home = () => {
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      
      {/* Formal Hero / Slider area */}
      <div style={{ margin: '20px 0', border: '5px solid #fff', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200&h=400" 
          alt="Gedung Sekolah SMP PGRI 1 Tangerang"
          style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0, 64, 133, 0.85)', color: 'white', padding: '15px 20px' }}>
          <h2 style={{ color: 'white', margin: 0, fontSize: '1.4rem' }}>Selamat Datang di Portal Resmi SMP PGRI 1 TANGERANG</h2>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>Mewujudkan generasi cerdas, beriman, dan berprestasi.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* Main Content Area */}
        <div style={{ flex: '1 1 65%' }}>
          
          <div style={{ borderBottom: '2px solid var(--primary-color)', marginBottom: '20px', paddingBottom: '5px' }}>
            <h3 style={{ display: 'inline-block', backgroundColor: 'var(--primary-color)', color: 'white', padding: '8px 15px', margin: 0, fontSize: '1.1rem', textTransform: 'uppercase' }}>Berita Terbaru</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {DUMMY_LATEST_NEWS.map(news => (
              <div key={news.id} className="card" style={{ display: 'flex', flexDirection: 'row' }}>
                <img 
                  src={news.image} 
                  alt={news.title}
                  style={{ width: '220px', height: '150px', objectFit: 'cover' }}
                />
                <div style={{ padding: '15px', flex: 1 }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                    <Link to="/berita" style={{ color: 'var(--primary-color)' }}>{news.title}</Link>
                  </h4>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {news.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {news.author}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem' }}>Diberitahukan kepada seluruh siswa dan wali murid mengenai pembaruan informasi akademik...</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <Link to="/berita" className="btn-secondary">Lihat Semua Berita <ChevronRight size={16} /></Link>
          </div>

        </div>

        {/* Sidebar Area */}
        <div style={{ flex: '1 1 30%', minWidth: '300px' }}>
          
          {/* Sambutan Kepala Sekolah Widget */}
          <div className="card" style={{ marginBottom: '30px' }}>
            <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 15px', fontWeight: 'bold', borderBottom: '3px solid var(--secondary-color)' }}>
              Sambutan Kepala Sekolah
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" 
                alt="Kepala Sekolah"
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #f8f9fa', boxShadow: 'var(--shadow-sm)', marginBottom: '15px' }}
              />
              <h5 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Bapak M.Pd.</h5>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>Assalamu'alaikum Wr. Wb. Selamat datang di website resmi SMP PGRI 1 Tangerang. Melalui wadah ini kami berkomitmen...</p>
              <button className="btn-primary" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>Baca Selengkapnya</button>
            </div>
          </div>

          {/* Pengumuman Widget */}
          <div className="card">
            <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 15px', fontWeight: 'bold', borderBottom: '3px solid var(--secondary-color)' }}>
              Pengumuman Cepat
            </div>
            <ul style={{ padding: '0' }}>
              <li style={{ padding: '12px 15px', borderBottom: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
                <Link to="/kalender" style={{ color: 'var(--text-primary)' }}>Jadwal Pengambilan Raport Mid Semester</Link>
              </li>
              <li style={{ padding: '12px 15px', borderBottom: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
                <Link to="/berita" style={{ color: 'var(--text-primary)' }}>Daftar Nama Siswa Lolos Seleksi OSN Kota</Link>
              </li>
              <li style={{ padding: '12px 15px', fontSize: '0.9rem' }}>
                <Link to="/berita" style={{ color: 'var(--text-primary)' }}>Panduan Upacara Bendera Secara Daring</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
