import React, { useState } from 'react';
import { Users, Mail, Phone } from 'lucide-react';
import './GuruStaff.css';

const GuruStaff = () => {
  const [filter, setFilter] = useState('Semua');

  const staffData = [
    { id: 1, name: "Abdul Munir, SE", role: "Guru Mata Pelajaran", category: "Guru", subject: "TIK", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/96589119pakmunir-360x480.jpg" },
    { id: 2, name: "Ana Permatasari, S.Psi", role: "Guru BK", category: "Guru", subject: "Konseling", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/78210213IMG_0045_-_Copy-removebg-preview-360x480.png" },
    { id: 3, name: "Candraditya Kamawitra", role: "Guru Mata Pelajaran", category: "Guru", subject: "Seni Budaya", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/9624093pakchandra-360x480.jpg" },
    { id: 4, name: "Dani Hascaryo, S.Pd", role: "Guru Mata Pelajaran", category: "Guru", subject: "Bahasa Inggris", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/43475099pakdani-360x480.jpg" },
    { id: 5, name: "Dr. A. Ghazali Taufiq, M.Pd", role: "Pimpinan / Pengurus", category: "Pimpinan", subject: "Manajemen", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/81810886paktaufiq-360x480.jpg" },
    { id: 6, name: "Drs. Oding Harsono", role: "Guru Mata Pelajaran", category: "Guru", subject: "Matematika", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/62283043pakoding-360x480.jpg" },
    { id: 7, name: "Fahrodin, S.Kom", role: "Guru Mata Pelajaran", category: "Guru", subject: "TIK", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/96364119pakdin-360x480.jpg" },
    { id: 8, name: "Henny Aprilistini", role: "Guru Mata Pelajaran", category: "Guru", subject: "Bahasa", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/39597474IMG_4289-removebg-preview-360x480.jpg" },
    { id: 9, name: "Ilham Nurseha, S.Pd", role: "Guru Olahraga", category: "Guru", subject: "PJOK", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/18070504pakillham-360x480.jpg" },
    { id: 10, name: "Ira Meilani, S.Psi", role: "Guru BK", category: "Guru", subject: "Konseling", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/76733994buira-360x480.jpg" },
    { id: 11, name: "Dedi Sugiharto", role: "Staff Tata Usaha", category: "Staff", subject: "Administrasi", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/74094623WhatsApp_Image_2022-08-10_at_13.27.39-removebg-preview-360x480.png" },
    { id: 12, name: "Dyah Lukitaningtyas, S.Pd", role: "Staff Tata Usaha", category: "Staff", subject: "Administrasi", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/99469194budiah-360x480.jpg" },
    { id: 13, name: "Emi Rahmawati, S.Pd", role: "Staff Tata Usaha", category: "Staff", subject: "Administrasi", image: "https://www.smppgri1tangerang.sch.id/upload/imagecache/73669197buemi-360x480.jpg" },
  ];

  const filteredStaff = filter === 'Semua' ? staffData : staffData.filter(s => s.category === filter);

  return (
    <div className="staff-page">
      <div className="staff-header">
         <div className="icon-wrapper"><Users className="header-icon"/></div>
         <h1>Direktori Guru & Tenaga Kependidikan</h1>
         <p>Mengenal lebih dekat para pahlawan tanpa tanda jasa dan staf profesional yang berdedikasi tinggi membangun karakter generasi penerus bangsa.</p>
      </div>

      <div className="container staff-content">
         <div className="filter-bar">
            {['Semua', 'Pimpinan', 'Guru', 'Staff'].map(f => (
               <button 
                 key={f} 
                 className={`filter-btn ${filter === f ? 'active' : ''}`}
                 onClick={() => setFilter(f)}
               >
                 {f}
               </button>
            ))}
         </div>

         <div className="staff-grid">
            {filteredStaff.map(staff => (
              <div key={staff.id} className="staff-card animate-fade-in">
                 <div className="staff-avatar-wrapper">
                    <div className="staff-avatar">
                      {staff.image.startsWith('http') ? (
                        <img src={staff.image} alt={staff.name} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
                      ) : (
                        staff.image
                      )}
                    </div>
                    <div className="staff-category-badge">{staff.category}</div>
                 </div>
                 <div className="staff-info">
                   <h2>{staff.name}</h2>
                   <p className="staff-role">{staff.role}</p>
                   <div className="staff-subject">{staff.subject}</div>

                   <div className="staff-contact">
                     <button className="contact-btn"><Mail className="c-icon"/></button>
                     <button className="contact-btn"><Phone className="c-icon"/></button>
                   </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

export default GuruStaff;
