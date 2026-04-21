import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { LogOut, Home, Users, Settings, Database, Menu, X, Bell, User as UserIcon } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (isLoggedIn !== 'true') {
       navigate('/admin/login');
    }
  }, [navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/admin/dash', icon: <Home size={20} /> },
    { name: 'Data Pendaftar', path: '/admin/pendaftar', icon: <Users size={20} /> },
    { name: 'Manajemen Data', path: '/admin/data', icon: <Database size={20} /> },
    { name: 'Pengaturan', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
           <div className="sidebar-logo">🎓 <span>Sisfo PGRI 1</span></div>
           <button className="btn-close-sidebar" onClick={() => setIsSidebarOpen(false)}>
             <X size={20} />
           </button>
        </div>
        
        <div className="sidebar-user">
           <div className="user-avatar">AD</div>
           <div className="user-info">
             <p className="user-name">Administrator</p>
             <p className="user-role"><span className="status-dot"></span> Online</p>
           </div>
        </div>

        <nav className="sidebar-nav">
           <ul>
             <li className="admin-nav-header">MENU UTAMA</li>
             {navLinks.map((link, idx) => {
               const isActive = location.pathname === link.path;
               return (
                 <li key={idx}>
                   <Link to={link.path} className={`admin-nav-link ${isActive ? 'active' : ''}`}>
                     {link.icon} <span>{link.name}</span>
                   </Link>
                 </li>
               )
             })}
           </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className={`admin-main ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        {/* Top Navbar */}
        <header className="admin-topbar">
           <div className="topbar-left">
             <button className="btn-toggle-sidebar" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
               <Menu size={24} />
             </button>
             <div className="search-bar">
                <input type="text" placeholder="Pencarian cepat..." />
             </div>
           </div>
           
           <div className="topbar-right">
             <button className="topbar-icon-btn">
                <Bell size={20} />
                <span className="badge">3</span>
             </button>
             <div className="topbar-user-menu">
                <button className="btn-user-profile">
                   <UserIcon size={18} /> Admin
                </button>
             </div>
             <div className="topbar-divider"></div>
             <button className="btn-logout" onClick={handleLogout}>
                <LogOut size={18} /> Logout
             </button>
           </div>
        </header>

        {/* Content View */}
        <main className="admin-content-view">
           {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
