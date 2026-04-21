import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle, LogIn } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulasi Request API Login
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        navigate('/admin/dash');
      } else {
        setError('Username atau kata sandi tidak valid. Silakan coba lagi.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        
        <div className="login-visual-side">
          <div className="school-brand">
             <div className="logo-placeholder">🎓</div>
             <h2>SMP PGRI 1</h2>
             <p>Portal Administrasi</p>
          </div>
          <div className="visual-illustration">
             {/* Abstract Shapes or Illustrations */}
             <div className="circle-1"></div>
             <div className="circle-2"></div>
             <div className="glass-card">
               <Lock size={32} />
               <h4>Sistem Teramankan</h4>
               <p>Hanya untuk penggunaan internal administrator SMP PGRI 1 Tangerang.</p>
             </div>
          </div>
        </div>

        <div className="login-form-side">
           <div className="form-header">
             <h2>Masuk ke Dashboard</h2>
             <p>Silakan masukkan kredensial administrator Anda.</p>
           </div>
           
           {error && (
             <div className="alert-error">
                <AlertCircle size={18} />
                <span>{error}</span>
             </div>
           )}

           <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Nama Pengguna</label>
                <div className="input-wrapper">
                   <User className="input-icon" size={20} />
                   <input 
                     type="text" 
                     placeholder="Masukkan admin"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     required 
                   />
                </div>
              </div>
              
              <div className="input-group">
                <label>Kata Sandi</label>
                <div className="input-wrapper">
                   <Lock className="input-icon" size={20} />
                   <input 
                     type="password" 
                     placeholder="••••••••"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required 
                   />
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Ingat Saya</span>
                </label>
                <a href="#" className="forgot-password">Lupa Sandi?</a>
              </div>

              <button type="submit" disabled={isLoading} className="btn-login-submit">
                 {isLoading ? 'Mengautentikasi...' : (
                   <>
                     <LogIn size={20} /> Masuk Sekarang
                   </>
                 )}
              </button>
           </form>
           
           <div className="back-to-home">
             <a href="/">← Kembali ke Beranda Utama</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
