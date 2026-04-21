import React, { useState, useEffect } from 'react';
import { Download, Users, School, Trash2 } from 'lucide-react';

const AdminDash = () => {
  const [pendaftar, setPendaftar] = useState([]);

  useEffect(() => {
    const dataStr = localStorage.getItem('daftarSiswa');
    if (dataStr) {
      setPendaftar(JSON.parse(dataStr));
    }
  }, []);

  const downloadCSV = () => {
    if (pendaftar.length === 0) return alert("Belum ada data pendaftar.");
    
    const headers = ['Nama Siswa', 'NISN', 'Tempat Lahir', 'Tanggal Lahir', 'Asal Sekolah', 'Nama Ortu', 'No HP', 'Email', 'Alamat', 'Tanggal Daftar'];
    const rows = pendaftar.map(siswa => [
       `"${siswa.namaSiswa || ''}"`,
       `"${siswa.nisn || ''}"`,
       `"${siswa.tempatLahir || ''}"`,
       `"${siswa.tanggalLahir || ''}"`,
       `"${siswa.asalSekolah || ''}"`,
       `"${siswa.namaOrtu || ''}"`,
       `"${siswa.noHp || ''}"`,
       `"${siswa.email || ''}"`,
       `"${(siswa.alamat || '').replace(/"/g, '""')}"`,
       `"${new Date(siswa.tanggalDaftar).toLocaleString()}"`
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + headers.join(',') + "\n" + rows.map(r => r.join(',')).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Data_Pendaftaran_Siswa.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearData = () => {
    if(window.confirm("Apakah Anda yakin ingin menghapus semua data pendaftar?")) {
       localStorage.removeItem('daftarSiswa');
       setPendaftar([]);
    }
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1a365d', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 'bold' }}>
           <Users size={32} color="#2b6cb0" /> Admin Dashboard
        </h1>
        <div style={{ display: 'flex', gap: '10px' }}>
           <button onClick={downloadCSV} style={{ backgroundColor: '#2b6cb0', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', transition: '0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} onMouseOver={e=>e.currentTarget.style.backgroundColor='#1a4b8c'} onMouseOut={e=>e.currentTarget.style.backgroundColor='#2b6cb0'}>
             <Download size={18} /> Download Excel
           </button>
           <button onClick={clearData} style={{ backgroundColor: '#fff', color: '#e53e3e', padding: '10px 20px', borderRadius: '8px', border: '1px solid #e53e3e', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', transition: '0.2s' }} onMouseOver={e=>e.currentTarget.style.backgroundColor='#fff5f5'} onMouseOut={e=>e.currentTarget.style.backgroundColor='#fff'}>
             <Trash2 size={18} /> Bersihkan Data
           </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        {pendaftar.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '16px', color: '#4a5568', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nama Pendaftar</th>
                  <th style={{ padding: '16px', color: '#4a5568', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sekolah Asal</th>
                  <th style={{ padding: '16px', color: '#4a5568', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nama Wali</th>
                  <th style={{ padding: '16px', color: '#4a5568', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>No HP/WA</th>
                  <th style={{ padding: '16px', color: '#4a5568', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Waktu Daftar</th>
                </tr>
              </thead>
              <tbody>
                {pendaftar.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e2e8f0', transition: '0.1s' }} onMouseOver={e=>e.currentTarget.style.backgroundColor='#f8fafc'} onMouseOut={e=>e.currentTarget.style.backgroundColor='transparent'}>
                    <td style={{ padding: '16px', color: '#2d3748', fontWeight: '600' }}>{p.namaSiswa}</td>
                    <td style={{ padding: '16px', color: '#718096' }}>{p.asalSekolah}</td>
                    <td style={{ padding: '16px', color: '#718096' }}>{p.namaOrtu}</td>
                    <td style={{ padding: '16px', color: '#718096', fontFamily: 'monospace' }}>{p.noHp}</td>
                    <td style={{ padding: '16px', color: '#718096', fontSize: '0.9rem' }}>{new Date(p.tanggalDaftar).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ padding: '80px 20px', textAlign: 'center', color: '#718096' }}>
             <School size={64} style={{ margin: '0 auto 16px', color: '#cbd5e0' }} />
             <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Belum Ada Data Pendaftar</h3>
             <p style={{ maxWidth: '400px', margin: '0 auto' }}>Data pendaftaran siswa baru yang masuk melalui form pendaftaran akan otomatis muncul di halaman ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDash;
