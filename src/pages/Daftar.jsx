import React, { useState } from 'react';
import { CheckCircle2, User, Mail, Phone, Calendar, MapPin, School, GraduationCap } from 'lucide-react';
import './Daftar.css';

const Daftar = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Data State
  const [formData, setFormData] = useState({
    namaSiswa: '', nisn: '', tempatLahir: '', tanggalLahir: '', asalSekolah: '',
    namaOrtu: '', noHp: '', email: '', alamat: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate small processing time
      setTimeout(() => {
        // Fetch existing data or initialize empty array
        const existingDataStr = localStorage.getItem('daftarSiswa');
        const existingData = existingDataStr ? JSON.parse(existingDataStr) : [];
        
        // Add new registration with timestamp
        const newEntry = {
          ...formData,
          tanggalDaftar: new Date().toISOString()
        };
        
        existingData.push(newEntry);
        
        // Save back to local storage
        localStorage.setItem('daftarSiswa', JSON.stringify(existingData));
        
        setIsLoading(false);
        setIsSubmitted(true);
      }, 800);
      
    } catch(err) {
      console.error(err);
      alert("Error menyimpan pendaftaran.");
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="daftar-success-wrapper">
        <div className="success-card">
          <div className="success-icon-bg">
            <CheckCircle2 className="success-icon" />
          </div>
          <h2>Pendaftaran Berhasil!</h2>
          <p>Terima kasih telah mendaftar di SMP PGRI 1. Tim pendaftaran kami akan segera menghubungi Anda untuk proses selanjutnya.</p>
          <button onClick={() => window.location.href = '/'} className="btn-success-home">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="daftar-container">
      {/* LEFT SIDE - Info & Visuals */}
      <div className="daftar-visual hidden-tablet">
        <div className="visual-overlay"></div>
        <div className="visual-gradient"></div>
        
        <div className="visual-content">
          <div className="visual-icon-bg">
             <GraduationCap className="visual-icon" />
          </div>
          <h1>Mari Bergabung Menjadi Bagian Dari Kami.</h1>
          <p>Proses pendaftaran dirancang dengan mudah. Nikmati fasilitas kelas dunia dan kurikulum berstandar internasional.</p>
        </div>

        <div className="visual-quote-card">
           <Quote className="quote-mark" />
           <p className="quote-text">"Sekolah ini merupakan tempat yang tepat untuk menggali potensi setiap siswa dengan fasilitas yang luar biasa memadai."</p>
           <div className="quote-author">
              <div className="author-avatar">AJ</div>
              <div className="author-info">
                <h4>Andi Jaya</h4>
                <span>Alumni 2021</span>
              </div>
           </div>
        </div>
      </div>

      {/* RIGHT SIDE - Form */}
      <div className="daftar-form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Formulir Pendaftaran</h2>
            <p>Silakan lengkapi data di bawah ini dengan benar.</p>
          </div>

          {/* Progress Indicator */}
          <div className="progress-bar">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`} />
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`} />
          </div>

          <form onSubmit={step === 1 ? handleNext : handleSubmit}>
            {/* STEP 1: Data Siswa */}
            <div className={`form-step ${step === 1 ? 'active' : ''}`}>
              <div className="form-grid">
                 <div className="input-group">
                   <label>Nama Lengkap Siswa</label>
                   <div className="input-wrapper">
                     <User className="input-icon" />
                     <input required name="namaSiswa" value={formData.namaSiswa} onChange={handleChange} type="text" placeholder="John Doe" />
                   </div>
                 </div>

                 <div className="input-group">
                   <label>NISN (Opsional)</label>
                   <div className="input-wrapper">
                     <School className="input-icon" />
                     <input name="nisn" value={formData.nisn} onChange={handleChange} type="text" placeholder="0012345678" />
                   </div>
                 </div>

                 <div className="input-group">
                   <label>Tempat Lahir</label>
                   <div className="input-wrapper">
                     <MapPin className="input-icon" />
                     <input required name="tempatLahir" value={formData.tempatLahir} onChange={handleChange} type="text" placeholder="Jakarta" />
                   </div>
                 </div>

                 <div className="input-group">
                   <label>Tanggal Lahir</label>
                   <div className="input-wrapper">
                     <Calendar className="input-icon" />
                     <input required name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} type="date" />
                   </div>
                 </div>
              </div>

              <div className="input-group span-full">
                 <label>Asal Sekolah Dasar (SD)</label>
                 <div className="input-wrapper">
                   <School className="input-icon" />
                   <input required name="asalSekolah" value={formData.asalSekolah} onChange={handleChange} type="text" placeholder="SDN 01 Percontohan" />
                 </div>
              </div>

              <button type="submit" className="btn-next">
                Lanjutkan ke Data Orang Tua
              </button>
            </div>

            {/* STEP 2: Data Orang Tua */}
            <div className={`form-step ${step === 2 ? 'active' : ''}`}>
              <div className="form-grid">
                 <div className="input-group">
                   <label>Nama Orang Tua/Wali</label>
                   <div className="input-wrapper">
                     <User className="input-icon" />
                     <input required={step===2} name="namaOrtu" value={formData.namaOrtu} onChange={handleChange} type="text" placeholder="Budi Santoso" />
                   </div>
                 </div>

                 <div className="input-group">
                   <label>Nomor HP/WhatsApp</label>
                   <div className="input-wrapper">
                     <Phone className="input-icon" />
                     <input required={step===2} name="noHp" value={formData.noHp} onChange={handleChange} type="tel" placeholder="08123456789" />
                   </div>
                 </div>
              </div>

              <div className="input-group span-full">
                 <label>Email (Opsional)</label>
                 <div className="input-wrapper">
                   <Mail className="input-icon" />
                   <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email@contoh.com" />
                 </div>
              </div>

              <div className="input-group span-full">
                 <label>Alamat Lengkap</label>
                 <div className="input-wrapper text-area">
                   <textarea required={step===2} name="alamat" value={formData.alamat} onChange={handleChange} placeholder="Jl. Sudirman No. 1..." />
                 </div>
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setStep(1)} className="btn-back">
                  Kembali
                </button>
                <button type="submit" disabled={isLoading} className="btn-submit">
                  {isLoading ? 'Mengirim Data...' : 'Kirim Pendaftaran'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Quote = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
)

export default Daftar;
