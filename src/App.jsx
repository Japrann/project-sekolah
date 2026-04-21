import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Main CSS
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Daftar from './pages/Daftar'; 
import Prestasi from './pages/Prestasi';
import Ekstrakurikuler from './pages/Ekstrakurikuler';
import GuruStaff from './pages/GuruStaff';
import Berita from './pages/Berita';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/AdminLayout';
import DashboardHome from './pages/admin/DashboardHome';
import DataPendaftar from './pages/admin/DataPendaftar';

const PagePlaceholder = ({ title }) => (
  <div style={{ minHeight: '80vh', padding: '120px 20px', textAlign: 'center', backgroundColor: 'var(--neutral-50)' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--neutral-900)', marginBottom: '1rem' }}>{title}</h1>
    <p style={{ fontSize: '1.2rem', color: 'var(--neutral-600)' }}>Halaman ini sedang dalam pengembangan.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          {/* Default Public Layout handled conditionally or using a wrapper, but here we just render Header/Footer for non-admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route path="/admin/*" element={
            <AdminLayout>
               <Routes>
                 <Route path="dash" element={<DashboardHome />} />
                 <Route path="pendaftar" element={<DataPendaftar />} />
                 <Route path="data" element={<PagePlaceholder title="Manajemen Data Sistem" />} />
                 <Route path="settings" element={<PagePlaceholder title="Pengaturan Administrator" />} />
                 <Route path="" element={<DashboardHome />} />
               </Routes>
            </AdminLayout>
          } />

          {/* Public Routes with Header & Footer */}
          <Route path="/*" element={
            <>
              <Header />
              <main style={{ flex: 1, paddingTop: '80px' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/daftar" element={<Daftar />} />
                  <Route path="/daftar-prestasi" element={<Prestasi />} />
                  <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
                  <Route path="/guru" element={<GuruStaff />} />
                  <Route path="/staff--tenaga-kependidikan" element={<GuruStaff />} />
                  <Route path="/tentang" element={<PagePlaceholder title="Tentang Sekolah" />} />
                  <Route path="/sejarah" element={<PagePlaceholder title="Sejarah" />} />
                  <Route path="/visi-misi" element={<PagePlaceholder title="Visi & Misi" />} />
                  <Route path="/struktur" element={<PagePlaceholder title="Struktur Organisasi" />} />
                  <Route path="/akademik" element={<PagePlaceholder title="Program Akademik" />} />
                  <Route path="/fasilitas" element={<PagePlaceholder title="Fasilitas" />} />
                  <Route path="/galeri" element={<PagePlaceholder title="Galeri" />} />
                  <Route path="/kontak" element={<PagePlaceholder title="Kontak" />} />
                  <Route path="/berita" element={<Berita />} />
                  <Route path="/prestasi" element={<PagePlaceholder title="Prestasi Gemilang" />} />
                  <Route path="/kalender-sekolah" element={<PagePlaceholder title="Kalender Akademik" />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
