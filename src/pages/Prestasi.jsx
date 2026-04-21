import React from 'react';
import { Trophy, Medal, Award, Calendar, ChevronRight } from 'lucide-react';
import './Prestasi.css';

import prestasiData from '../data/prestasi.json';

const Prestasi = () => {

  return (
    <div className="prestasi-page">
      <div className="prestasi-header">
         <div className="container">
           <h1>Daftar Prestasi Gemilang</h1>
           <p>Melihat kembali jejak-jejak keberhasilan siswa dan institusi SMP PGRI 1 Tangerang dalam berbagai kompetisi dan penghargaan bergengsi.</p>
         </div>
      </div>

      <div className="container prestasi-content">
        <div className="prestasi-timeline">
           {prestasiData.map((item) => {
             const IconComponent = {
               Trophy: Trophy,
               Award: Award,
               Medal: Medal
             }[item.iconName] || Trophy;

             return (
               <div key={item.id} className="timeline-item">
                 <div className={`timeline-icon-box ${item.color}`}>
                   <IconComponent className="t-icon" />
                 </div>
                 <div className="timeline-card">
                   <div className="card-top">
                     <div className="date-badge"><Calendar className="icon-sm"/> {item.date}</div>
                     <span className="level-badge">{item.level}</span>
                   </div>
                   <h2>{item.title}</h2>
                   <p>{item.desc}</p>
                   <button className="read-more">Baca Berita <ChevronRight className="icon-sm" /></button>
                 </div>
               </div>
             )
           })}
        </div>
      </div>
    </div>
  );
};

export default Prestasi;
