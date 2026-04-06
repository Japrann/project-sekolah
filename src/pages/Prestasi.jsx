import React from 'react';
import { Trophy, Medal, Award, Calendar, ChevronRight } from 'lucide-react';
import './Prestasi.css';

const Prestasi = () => {
  const prestasiData = [
    {
      id: 1,
      title: "Juara 1 Pada Lomba Video Edukasi Gizi Remaja",
      level: "Kota Tangerang 2024",
      date: "Juli 2024",
      desc: "SMP PGRI 1 Tangerang Meraih Juara 1 Pada Lomba Video Edukasi Gizi Remaja Tingkat Kota Tangerang.",
      icon: Trophy,
      color: "gold"
    },
    {
      id: 2,
      title: "Kegiatan Satu Hari Menjadi Walikota Tangerang",
      level: "Program Eksekutif",
      date: "Mei 2024",
      desc: "Johanes Vicko Manugara, Siswa Berprestasi SMP PGRI 1 Tangerang sukses Menjalani Kegiatan Satu Hari Menjadi Walikota Tangerang.",
      icon: Award,
      color: "blue"
    },
    {
      id: 3,
      title: "Prestasi Akademis & Non-Akademis",
      level: "Tingkat Provinsi & Nasional",
      date: "Tahun Ajaran 2024/2025",
      desc: "Lagi! Peserta Didik SMP PGRI 1 Tangerang membuktikan daya saingnya dengan rentetan peraihan Prestasi Akademis dan Non Akademis.",
      icon: Medal,
      color: "green"
    }
  ];

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
           {prestasiData.map((item) => (
             <div key={item.id} className="timeline-item">
               <div className={`timeline-icon-box ${item.color}`}>
                 <item.icon className="t-icon" />
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
           ))}
        </div>
      </div>
    </div>
  );
};

export default Prestasi;
