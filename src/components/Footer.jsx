import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h4>TENTANG KAMI</h4>
            <p style={{ marginBottom: '15px' }}>
              SMP PGRI 1 Tangerang berkomitmen untuk memberikan pendidikan berkualitas tinggi dan membentuk pilar kepribadian bangsa melalui bimbingan akademis maupun non-akademis.
            </p>
          </div>

          <div>
            <h4>TAUTAN CEPAT</h4>
            <div className="footer-links">
              <Link to="/"><ChevronRight size={14} style={{ display: 'inline' }} /> Beranda</Link>
              <Link to="/berita"><ChevronRight size={14} style={{ display: 'inline' }} /> Berita & Pengumuman</Link>
              <Link to="/prestasi"><ChevronRight size={14} style={{ display: 'inline' }} /> Prestasi Sekolah</Link>
              <Link to="/kalender"><ChevronRight size={14} style={{ display: 'inline' }} /> Kalender Akademik</Link>
            </div>
          </div>

          <div>
            <h4>HUBUNGI KAMI</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} color="var(--primary-color)" />
                <span>Jl. Cikokol,<br/>Kota Tangerang, Banten</span>
              </li>
              <li>
                <Phone size={18} color="var(--primary-color)" />
                <span>(021) 1234567</span>
              </li>
              <li>
                <Mail size={18} color="var(--primary-color)" />
                <span>info@smppgri1tangerang.sch.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Hak Cipta &copy; {new Date().getFullYear()} SMP PGRI 1 TANGERANG. Ditenagai oleh React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
