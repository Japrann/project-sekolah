import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, FileText, UserPlus, TrendingUp } from 'lucide-react';
import './DashboardHome.css';

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalPendaftar: 0,
    totalGuru: 36,
    totalBerita: 31,
    visitorToday: 142
  });

  useEffect(() => {
    // Read count from local storage
    const dataStr = localStorage.getItem('daftarSiswa');
    if (dataStr) {
      const data = JSON.parse(dataStr);
      setStats(prev => ({ ...prev, totalPendaftar: data.length }));
    }
  }, []);

  return (
    <div className="dashboard-home">
      <div className="dash-header">
        <h1>Dashboard Overview</h1>
        <p>Ringkasan informasi sistem akademik tahun ini.</p>
      </div>

      <div className="stat-cards-container">
        <div className="stat-card pendaftar">
          <div className="stat-info">
             <h3>{stats.totalPendaftar}</h3>
             <p>Data Pendaftar Baru</p>
          </div>
          <div className="stat-icon">
             <UserPlus size={40} />
          </div>
        </div>

        <div className="stat-card guru">
          <div className="stat-info">
             <h3>{stats.totalGuru}</h3>
             <p>Tenaga Pendidik & Staff</p>
          </div>
          <div className="stat-icon">
             <GraduationCap size={40} />
          </div>
        </div>

        <div className="stat-card berita">
          <div className="stat-info">
             <h3>{stats.totalBerita}</h3>
             <p>Berita Dipublikasi</p>
          </div>
          <div className="stat-icon">
             <FileText size={40} />
          </div>
        </div>

        <div className="stat-card visitor">
          <div className="stat-info">
             <h3>{stats.visitorToday}</h3>
             <p>Pengunjung Hari Ini</p>
          </div>
          <div className="stat-icon">
             <Users size={40} />
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
         <div className="chart-wrapper">
           <div className="chart-header">
             <TrendingUp size={20} />
             <h3>Statistik Pendaftaran Bulanan</h3>
           </div>
           <div className="chart-body">
              {/* Mocking a simple bar chart using divs */}
              <div className="bar-chart">
                 <div className="bar" style={{height: '40%'}}><span>Jan</span></div>
                 <div className="bar" style={{height: '60%'}}><span>Feb</span></div>
                 <div className="bar" style={{height: '30%'}}><span>Mar</span></div>
                 <div className="bar active" style={{height: '90%'}}><span>Apr</span></div>
                 <div className="bar" style={{height: '0%'}}><span>May</span></div>
              </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default DashboardHome;
