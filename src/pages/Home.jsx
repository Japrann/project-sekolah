import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Play, BrainCircuit, Globe, Shield, BookOpen, Trophy, Heart,
  Quote, ArrowRight, GraduationCap, ArrowUpRight, Calendar
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const stats = [
    { num: "2500+", label: "Siswa Aktif" },
    { num: "98%", label: "Tingkat Kelulusan" },
    { num: "150+", label: "Penghargaan" },
    { num: "50+", label: "Ekskul" }
  ];

  const beritaTerbaru = [
    {
      title: "Pendaftaran Murid Baru SMP PGRI 1 Tangerang Tahun Pelajaran 2026/2027 Telah Dibuka",
      date: "05-07-2025",
      kat: "Pengumuman",
      url: "https://www.smppgri1tangerang.sch.id/berita/detail/990902/pendaftaran-murid-baru-smp-pgri-1-tangerang-tahun-pelajaran-20262027-telah-dibuka/"
    },
    {
      title: "SMP PGRI 1 Tangerang Umumkan Kelulusan 247 Siswa Kelas 9 Tahun Ajaran 2024/2025",
      date: "05-06-2025",
      kat: "Akademik",
      url: "https://www.smppgri1tangerang.sch.id/berita/detail/990668/smp-pgri-1-tangerang-umumkan-kelulusan-247-siswa-kelas-9-tahun-ajaran-20242025/"
    },
    {
      title: "SMP PGRI 1 Tangerang Tidak Termasuk Sekolah Penerima BOP Dari Pemerintah Kota Tangerang",
      date: "05-06-2025",
      kat: "Informasi",
      url: "https://www.smppgri1tangerang.sch.id/berita/detail/990662/smp-pgri-1-tangerang-tidak-termasuk-sekolah-penerima-bop-dari-pemerintah-kota-tangerang/"
    }
  ];

  // Keep hook space for possible future hooks if needed

  return (
    <div className="home-wrapper">

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-accent blob-1"></div>
        <div className="hero-bg-accent blob-2"></div>

        <div className="container hero-content">
          <div className="hero-badge animate-fade-in">
            <Sparkles className="hero-badge-icon" />
            <span>Penerimaan Siswa Baru Dibuka!</span>
          </div>

          <h1 className="hero-title animate-slide-up">
            Masa Depan <br />
            <span className="hero-title-highlight">Dimulai Di Sini</span>
          </h1>

          <p className="hero-subtitle animate-slide-up-delay-1">
            SMP PGRI 1 Tangerang mengadopsi kurikulum berstandar internasional dengan pendekatan teknologi mutakhir untuk membentuk pemimpin masa depan.
          </p>

          <div className="hero-actions animate-slide-up-delay-2">
            <Link to="/daftar" className="btn-primary hero-btn-main">
              Daftar Sekarang
            </Link>
            <button className="hero-btn-secondary">
              <Play className="icon-mr" /> Virtual Tour
            </button>
          </div>

          <div className="hero-stats animate-slide-up-delay-3">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN PEMBINA */}
      <section className="sambutan-section">
        <div className="container sambutan-container">
          <div className="sambutan-image-wrapper">
            {/* Random premium modern corporate avatar replacement for pembina */}
            <div className="pembina-img-placeholder" style={{ overflow: 'hidden' }}>
              <img src="https://www.smppgri1tangerang.sch.id/upload/imagecache/81810886paktaufiq-360x480.jpg" alt="Kepala Sekolah" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="pembina-badge">
              <div className="pembina-name">Miftah Syarif, S.Pd</div>
              <div className="pembina-role">Kepala Sekolah & Pembina</div>
            </div>
          </div>
          <div className="sambutan-content">
            <div className="section-header-left">
              <span className="subtitle">Mendidik dengan Hati</span>
              <h2>Sambutan Kepala Sekolah / Pembina</h2>
            </div>
            <p className="sambutan-text">
              Mewujudkan sekolah yang ramah, nyaman, asri, dan membahagiakan bagi semua siswa adalah sebuah keharusan. Kondisi itu mampu tercipta jika sekolah menyadari sepenuhnya bahwa fungsi sekolah sejatinya adalah untuk memanusiakan manusia, yang prosesnya lebih mengutamakan kenyamanan dan kebahagiaan para siswanya.
            </p>
            <p className="sambutan-text">
              Atas dasar tersebut, SMP PGRI 1 Tangerang terus mencoba untuk menjadi sekolah idaman. Sebuah sekolah yang selalu dirindukan siswa untuk beraktivitas dan belajar, dimana hati mereka terpaut untuk datang kembali. Tidak boleh ada perasaan kebencian atau kekerasan di dalamnya, karena sekolah menjalankan keseluruhan kegiatannya berbasis hati.
            </p>
            <p className="sambutan-text quote-style">
              Maka wajarlah bila SMP PGRI 1 Tangerang memiliki moto sentral yaitu <strong>Educating with Heart</strong>. Semua melahirkan kebahagiaan yang berdampak pada prestasi akademik. 5S kami: Senyum, Salam, Sapa, Saji dan Sanjung.
            </p>
            <button className="btn-outline-primary">Baca Selengkapnya</button>
          </div>
        </div>
      </section>

      {/* 4.5 BERITA TERBARU */}
      <section className="berita-section">
        <div className="container">
          <div className="section-header">
            <h2>Berita Terbaru</h2>
            <p>Dapatkan update dan informasi terkini langsung dari portal resmi SMP PGRI 1 Tangerang.</p>
          </div>

          <div className="berita-grid">
            {beritaTerbaru.map((berita, idx) => (
              <a href={berita.url} target="_blank" rel="noopener noreferrer" key={idx} className="berita-card">
                <div className="berita-kat-badge">{berita.kat}</div>
                <h3>{berita.title}</h3>
                <div className="berita-footer">
                  <span className="berita-date"><Calendar className="date-icon" /> {berita.date}</span>
                  <ArrowUpRight className="berita-arrow" />
                </div>
              </a>
            ))}
          </div>

          <div className="berita-action">
            <Link to="/berita" className="btn-outline-primary shadow-sm">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="cta-section">
        <div className="cta-bg-pattern"></div>

        <div className="container cta-content">
          <GraduationCap className="cta-icon" />
          <h2>Bergabunglah Dengan Kami Sekarang</h2>
          <p>Berikan pendidikan terbaik untuk masa depan bersinar. Proses pendaftaran cepat dan mudah.</p>

          <div className="cta-actions">
            <Link to="/daftar" className="btn-light">
              Formulir Pendaftaran
            </Link>
            <button className="btn-outline-white">
              <a
                href="https://wa.me/628121898951"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }} // Opsional: agar styling tetap rapi
              >
                Hubungi Kami
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
