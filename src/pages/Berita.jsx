import React, { useState, useEffect } from 'react';
import { Calendar, ArrowUpRight, Search, ExternalLink } from 'lucide-react';
import beritaData from '../data/berita.json';
import './Berita.css';

const Berita = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBerita, setFilteredBerita] = useState([]);

  useEffect(() => {
    // Handle the static loaded data
    if (beritaData && beritaData.length > 0) {
      const results = beritaData.filter(b => 
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBerita(results);
    }
  }, [searchTerm]);

  return (
    <div className="berita-page">
      {/* HEADER SECTION */}
      <section className="berita-header-section">
        <div className="container">
          <h1 className="page-title animate-slide-up">
            Berita <span className="text-primary-600">Terkini</span>
          </h1>
          <p className="page-subtitle animate-slide-up-delay-1">
            Informasi terbaru dan update kegiatan dari seluruh aktivitas di lingkungan SMP PGRI 1 Tangerang.
          </p>
          
          <div className="search-bar animate-fade-in delay-2">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Cari berita..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* BERITA GRID SECTION */}
      <section className="berita-list-section">
        <div className="container">
          
          <div className="berita-grid-layout">
            {filteredBerita.length > 0 ? (
              filteredBerita.map((item, index) => (
                <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} className="berita-card main-card">
                  <div className="berita-image-wrapper">
                    {item.image ? (
                       <img src={item.image} alt={item.title} className="berita-image" />
                    ) : (
                       <div className="berita-placeholder-img">No Image Provided</div>
                    )}
                    <div className="berita-category">{item.category || 'Berita'}</div>
                  </div>
                  <div className="berita-content">
                    <h3>{item.title}</h3>
                    <div className="berita-meta">
                      <span className="berita-date">
                        <Calendar className="date-icon" /> {item.date}
                      </span>
                      <ExternalLink className="read-more-icon" />
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="empty-state">
                <Search className="empty-icon" />
                <h3>Tidak ada berita ditemukan</h3>
                <p>Coba gunakan kata kunci pencarian yang berbeda.</p>
              </div>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Berita;
