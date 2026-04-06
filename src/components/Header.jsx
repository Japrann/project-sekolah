import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, GraduationCap, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="logo-icon-bg">
            <GraduationCap className="logo-icon" />
          </div>
          <div className="logo-text">
            <h1>SMP PGRI 1</h1>
            <p>Tangerang Excellence</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="header-nav hidden-tablet">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Beranda</Link>
          <Link to="/guru" className={`nav-link ${isActive('/guru') ? 'active' : ''}`}>Guru & Staff</Link>
          <Link to="/ekstrakurikuler" className={`nav-link ${isActive('/ekstrakurikuler') ? 'active' : ''}`}>Ekstrakurikuler</Link>
          <Link to="/daftar-prestasi" className={`nav-link ${isActive('/daftar-prestasi') ? 'active' : ''}`}>Prestasi</Link>
          <Link to="/berita" className={`nav-link ${isActive('/berita') ? 'active' : ''}`}>Berita</Link>
        </div>

        {/* Right Side Actions */}
        <div className="header-actions">
          <div className="search-bar hidden-mobile">
            <Search className="search-icon" />
            <input type="text" placeholder="Cari sesuatu..." />
          </div>
          <Link to="/daftar" className="btn-daftar hidden-mobile">
            Daftar Sekarang
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn hidden-desktop"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-nav">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="mobile-link">Beranda</Link>
          <Link to="/guru" onClick={() => setIsMenuOpen(false)} className="mobile-link">Guru & Staff</Link>
          <Link to="/ekstrakurikuler" onClick={() => setIsMenuOpen(false)} className="mobile-link">Ekstrakurikuler</Link>
          <Link to="/daftar-prestasi" onClick={() => setIsMenuOpen(false)} className="mobile-link">Prestasi</Link>
          <Link to="/berita" onClick={() => setIsMenuOpen(false)} className="mobile-link">Berita</Link>
          <div className="mobile-action-divider"></div>
          <Link to="/daftar" onClick={() => setIsMenuOpen(false)} className="btn-daftar mobile-btn">
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
