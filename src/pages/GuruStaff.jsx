import React, { useState, useMemo } from 'react';
import { Search, MapPin, User, Mail, Shield, Filter } from 'lucide-react';
import guruStaffData from '../data/gurustaff.json';
import './GuruStaff.css';

const GuruStaff = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Semua');

  const categories = ['Semua', 'Manajemen', 'Guru', 'Tata Usaha / Staff', 'Keamanan'];

  const filteredData = useMemo(() => {
    return guruStaffData.filter(person => {
      const matchSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          person.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchTab = activeTab === 'Semua' || person.type === activeTab;
      return matchSearch && matchTab;
    });
  }, [searchTerm, activeTab]);

  return (
    <div className="guru-staff-page">
      {/* Header */}
      <section className="guru-header-section">
        <div className="container">
          <h1 className="animate-slide-up">Direktori <span className="text-primary-600">Pendidik & Staff</span></h1>
          <p className="guru-subtitle animate-slide-up-delay-1">Berkenalan dengan para pendidik, staf manajemen, tata usaha, dan keamanan hebat yang berdedikasi membangun generasi unggul di SMP PGRI 1 Tangerang.</p>
          
          <div className="guru-search-box animate-slide-up-delay-2">
             <Search className="search-icon" />
             <input 
               type="text" 
               placeholder="Cari nama atau jabatan..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="guru-content-section">
        <div className="container">
           {/* Filters */}
           <div className="guru-filters">
             {categories.map(cat => (
               <button 
                 key={cat} 
                 className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                 onClick={() => setActiveTab(cat)}
               >
                 {cat}
               </button>
             ))}
           </div>

           {/* Cards Grid */}
           {filteredData.length > 0 ? (
             <div className="guru-grid">
               {filteredData.map((person, index) => (
                 <div key={index} className="person-card">
                   <div className="person-avatar-wrapper">
                     {person.image ? (
                        <img src={person.image} alt={person.name} className="person-avatar" />
                     ) : (
                        <div className="person-placeholder">
                           {person.type === 'Keamanan' ? <Shield className="placeholder-icon" /> : <User className="placeholder-icon" />}
                        </div>
                     )}
                     <div className="person-type-badge">{person.type}</div>
                   </div>
                   <div className="person-info">
                     <h3>{person.name}</h3>
                     <p className="person-role">{person.role}</p>
                   </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="empty-state">
               <User className="empty-icon" />
               <h3>Data tidak ditemukan</h3>
               <p>Coba gunakan kata kunci atau filter lain.</p>
             </div>
           )}
        </div>
      </section>
    </div>
  );
};

export default GuruStaff;
