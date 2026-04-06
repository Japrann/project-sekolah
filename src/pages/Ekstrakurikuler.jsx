import React from 'react';
import { Tent, Flag, HeartPulse, Palette, Dribbble, Music, Compass } from 'lucide-react';
import './Ekstrakurikuler.css';

const Ekstrakurikuler = () => {
  const ekskuls = [
    {
      id: 1,
      title: 'Pramuka',
      desc: 'Membentuk karakter disiplin, mandiri, dan berjiwa kepemimpinan melalui kegiatan kepramukaan yang menyenangkan.',
      icon: Tent,
      color: 'eks-brown'
    },
    {
      id: 2,
      title: 'Basket',
      desc: 'Pengembangan fisik, kerja sama tim, dan strategi bermain dalam ekstrakurikuler olahraga basket.',
      icon: Dribbble,
      color: 'eks-orange'
    },
    {
      id: 3,
      title: 'Futsal',
      desc: 'Wadah bagi siswa mengasah skill sepak bola lapangan kecil dalam berbagai ajang turnamen futsal bergengsi.',
      icon: Dribbble,
      color: 'eks-blue'
    },
    {
      id: 4,
      title: 'Badminton',
      desc: 'Pelatihan intensif teknik dasar dan lanjutan untuk menciptakan bibit-bibit unggul di bidang bulu tangkis.',
      icon: Flag,
      color: 'eks-blue'
    },
    {
      id: 5,
      title: 'Seni Tari',
      desc: 'Melestarikan budaya bangsa dengan mempelajari tarian tradisional maupun kontemporer.',
      icon: Palette,
      color: 'eks-purple'
    },
    {
      id: 6,
      title: 'Seni Drama (Teater)',
      desc: 'Mengembangkan olah vokal, ekspresi, dan seni peran untuk tampil di pementasan panggung.',
      icon: Music,
      color: 'eks-red'
    },
    {
      id: 7,
      title: 'PMR',
      desc: 'Membekali siswa dengan keterampilan pertolongan pertama dasar dan jiwa kemanusiaan.',
      icon: HeartPulse,
      color: 'eks-pink'
    },
    {
      id: 8,
      title: 'English Club',
      desc: 'Wadah interaktif memperlancar kemampuan berbicara, debat, dan tata letak bahasa Inggris harian.',
      icon: Tent,
      color: 'eks-blue'
    },
    {
      id: 9,
      title: 'Baca Tulis Puisi',
      desc: 'Menyalurkan bakat sastra siswa melalui cipta puisi, bedah sastra, dan deklamasi indah.',
      icon: Compass,
      color: 'eks-brown'
    },
    {
      id: 10,
      title: 'Body Workout (BWO)',
      desc: 'Klub untuk membentuk fisik bugar dan sehat melalu latihan terukur (Kalistenik/Cardio).',
      icon: HeartPulse,
      color: 'eks-orange'
    }
  ];

  return (
    <div className="ekskul-page">
      <div className="ekskul-header">
        <div className="container">
          <div className="icon-badge">
            <Compass className="icon-main"/>
          </div>
          <h1>Ekstrakurikuler</h1>
          <p>Kembangkan bakat, minat, dan potensi terpendam melalui program ekstrakurikuler komprehensif di SMP PGRI 1 Tangerang.</p>
        </div>
      </div>

      <div className="container ekskul-content">
        <div className="ekskul-grid">
           {ekskuls.map(eks => (
             <div key={eks.id} className="ekskul-card">
               <div className={`ekskul-icon-wrap ${eks.color}`}>
                 <eks.icon className="e-icon" />
               </div>
               <h3>{eks.title}</h3>
               <p>{eks.desc}</p>
               <button className="join-btn">Gabung Klub</button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Ekstrakurikuler;
