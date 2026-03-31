import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, Search, Menu, X, Facebook, Twitter, Instagram, MapPin } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Formal Contact Info */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-contact">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Mail size={14} /> info@smppgri1tangerang.sch.id
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Phone size={14} /> (021) 1234567
            </span>
          </div>
          <div className="top-bar-social">
            <Facebook size={14} style={{ cursor: 'pointer' }} />
            <Twitter size={14} style={{ cursor: 'pointer' }} />
            <Instagram size={14} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      {/* Main Header - Title and Logo */}
      <div className="main-header">
        <div className="container">
          <div className="logo-placeholder">
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PGRI</span>
          </div>
          <div className="header-title">
            <h1>SMP PGRI 1 TANGERANG</h1>
            <p><MapPin size={12} style={{ display: 'inline', marginRight: '4px' }}/>Jl. Cikokol, Kota Tangerang, Banten</p>
          </div>
        </div>
      </div>

      {/* Main Navigation - Solid Blue */}
      <nav className="navbar-wrapper">
        <div className="container navbar">
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
            <NavLink to="/berita" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Berita</NavLink>
            <NavLink to="/prestasi" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Prestasi</NavLink>
            <NavLink to="/kalender" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Kalender Sekolah</NavLink>
          </div>

          <div className="nav-search">
            <input type="text" placeholder="Search..." />
            <Search size={16} className="nav-search-icon" />
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div style={{ backgroundColor: 'var(--primary-light)', padding: '10px 15px' }}>
            <NavLink to="/" style={{ display: 'block', color: 'white', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Home</NavLink>
            <NavLink to="/berita" style={{ display: 'block', color: 'white', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Berita</NavLink>
            <NavLink to="/prestasi" style={{ display: 'block', color: 'white', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Prestasi</NavLink>
            <NavLink to="/kalender" style={{ display: 'block', color: 'white', padding: '10px 0' }}>Kalender Sekolah</NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
