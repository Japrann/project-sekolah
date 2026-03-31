import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Any app-specific css
import Layout from './components/Layout';
import Home from './pages/Home';
import Berita from './pages/Berita';
import Prestasi from './pages/Prestasi';
import Kalender from './pages/Kalender';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/prestasi" element={<Prestasi />} />
          <Route path="/kalender" element={<Kalender />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
