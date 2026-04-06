import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock,
  Instagram, Facebook, Twitter, Youtube, Linkedin,
  GraduationCap, Users, Shield, BookOpen, Trophy, Heart,
  Send, ChevronRight, ArrowRight, ExternalLink, MessageCircle,
  Award, Target, Globe, BrainCircuit
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/informasi', label: 'Informasi' },
    { to: '/berita', label: 'Berita' },
    { to: '/galeri', label: 'Galeri' },
    { to: '/kalender-sekolah', label: 'Kalender Sekolah' },
    { to: '/ekstrakurikuler', label: 'Ekstrakurikuler' }
  ];

  const services = [
    { icon: BookOpen, label: 'Portal Spectra Smart School', to: '/portal-spectra-smart-school' },
    { icon: Users, label: 'Guru & Karyawan', to: '/guru' },
    { icon: Shield, label: 'Buku Tamu', to: '/buku-tamu' },
    { icon: Trophy, label: 'Daftar Prestasi', to: '/daftar-prestasi' },
  ];

  return (
    <footer className="footer-wrapper">
      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container newsletter-container">
          <div className="newsletter-icon-bg">
            <Send className="newsletter-icon" />
          </div>
          <h2>Tetap Terhubung dengan Kami</h2>
          <p>Dapatkan informasi terbaru tentang pendaftaran, prestasi, dan kegiatan sekolah langsung di email Anda</p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                required
              />
              <button type="submit" className="btn-subscribe">
                <Send className="btn-subscribe-icon" />
                Subscribe
              </button>
            </form>
          ) : (
            <div className="subscribe-success">
              <div className="success-icon-wrapper">
                <Send className="success-icon-small" />
              </div>
              <span>Terima kasih telah berlangganan!</span>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER MAIN */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <GraduationCap className="icon" />
              </div>
              <div>
                <h3>SMP PGRI 1</h3>
                <span>Tangerang Excellence</span>
              </div>
            </div>
            <p className="brand-desc">
              Lembaga pendidikan unggulan yang berkomitmen membentuk generasi global cerdas dan kreatif.
            </p>
            <div className="social-links">
               <a href="https://www.facebook.com/smppgri1kotatangerang/?_rdc=1&_rdr" className="social-link facebook"><Facebook /></a>
               <a href="https://www.instagram.com/smppgri1tangerang/" className="social-link instagram"><Instagram /></a>
               <a href="https://twitter.com/smppgri1tngr" className="social-link twitter"><Twitter /></a>
               <a href="https://www.youtube.com/c/SMPPGRI1Tangerang" className="social-link youtube"><Youtube /></a>
               <a href="https://www.tiktok.com/@smppgri1tangerang?refer=creator_embed" className="social-link tiktok" style={{background: 'rgba(255,255,255,0.1)'}}><Globe /></a>
            </div>
            <div className="brand-badges">
              <div className="badge badge-yellow"><Award className="badge-icon" /> Sekolah Adiwiyata</div>
              <div className="badge badge-blue"><Target className="badge-icon" /> ISO 9001:2015</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4><ChevronRight className="header-icon" /> Tautan Cepat</h4>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="footer-link">
                    <ChevronRight className="link-arrow" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div className="footer-links-col">
            <h4><BrainCircuit className="header-icon pink" /> Layanan Digital</h4>
            <ul>
              {services.map((service, i) => (
                <li key={i}>
                  <a href={service.to} className="footer-link">
                    <service.icon className="link-icon pink" />
                    <span>{service.label}</span>
                    <ExternalLink className="link-arrow external" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="footer-contact">
               <div className="contact-item">
                 <MapPin className="contact-icon" />
                 <div>
                   <span>Alamat</span>
                   <p>Komplek Pendidikan Cikokol<br/>Jl. Perintis Kemerdekaan 2<br/>Tangerang Banten</p>
                 </div>
               </div>
               <div className="contact-item">
                 <Phone className="contact-icon" />
                 <div>
                   <span>Telepon / WhatsApp</span>
                   <p>0215534589<br/>08121898951</p>
                 </div>
               </div>
               <div className="contact-item">
                 <Mail className="contact-icon" />
                 <div>
                   <span>Email</span>
                   <p>dani@smppgri1tngr.sch.id</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {new Date().getFullYear()} SMP PGRI 1 Tangerang. All Rights.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <div className="credit">
              Made with <span className="heart">❤️</span> by <b>IT Team</b>
            </div>
          </div>
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="btn-top">
            <ArrowRight className="top-icon" />
          </button>
        </div>
      </div>

      {/* FLOATING ACTION */}
      <button className="fab-button">
        <MessageCircle className="fab-icon" />
      </button>
    </footer>
  );
};

export default Footer;
