import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, List } from 'lucide-react';

const EVENTS = [
  { date: '2025-05-15', title: 'Kegiatan Perpisahan Siswa Kelas 9' },
  { date: '2025-06-10', title: 'Pengumuman Kelulusan Siswa Kelas 9' },
  { date: '2025-07-15', title: 'Masa Pengenalan Lingkungan Sekolah (MPLS)' },
  { date: '2026-03-05', title: 'Pendaftaran Murid Baru Gelombang I' },
];

const Kalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2026-03-16'));

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const daysInWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const renderCells = () => {
    const cells = [];
    
    // Empty cells
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} style={{ border: '1px solid var(--border-color)', backgroundColor: '#f8f9fa' }}></div>);
    }

    // Actual days
    for (let d = 1; d <= daysInCurrentMonth; d++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dayEvents = EVENTS.filter(e => e.date === dateString);
      
      const isToday = currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth() && d === new Date().getDate();

      cells.push(
        <div key={`day-${d}`} style={{
          minHeight: '100px', border: '1px solid var(--border-color)', padding: '5px',
          backgroundColor: isToday ? '#e3f2fd' : 'white'
        }}>
          <div style={{ fontWeight: 600, padding: '2px 6px', display: 'inline-block', backgroundColor: isToday ? 'var(--primary-color)' : 'transparent', color: isToday ? 'white' : 'inherit', borderRadius: '3px', marginBottom: '5px' }}>
            {d}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {dayEvents.map((evt, idx) => (
              <span key={idx} style={{
                fontSize: '0.75rem', padding: '3px 5px',
                backgroundColor: 'var(--secondary-color)', color: '#212529',
                display: 'block', borderLeft: '3px solid var(--primary-color)'
              }}>
                {evt.title}
              </span>
            ))}
          </div>
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      
      <div style={{ backgroundColor: 'var(--white)', padding: '15px 20px', borderBottom: '1px solid var(--border-color)', margin: '0 0 30px', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>KALENDER SEKOLAH</h2>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '5px' }}>Home / Kalender Sekolah</div>
      </div>

      <div className="card" style={{ padding: '0' }}>
        {/* Header Calendar Table */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--primary-color)', color: 'white', padding: '15px 20px' }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'white' }}>{monthNames[currentMonth]} {currentYear}</h3>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={prevMonth} style={{ backgroundColor: 'white', color: 'var(--primary-color)', border: 'none', padding: '5px 10px', borderRadius: '3px' }}><ChevronLeft size={18} /></button>
            <button onClick={nextMonth} style={{ backgroundColor: 'white', color: 'var(--primary-color)', border: 'none', padding: '5px 10px', borderRadius: '3px' }}><ChevronRight size={18} /></button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0' }}>
            {daysInWeek.map(day => (
              <div key={day} style={{ textAlign: 'center', fontWeight: 'bold', padding: '10px 0', backgroundColor: '#e9ecef', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
                {day}
              </div>
            ))}
            {renderCells()}
          </div>
        </div>
      </div>
      
      {/* Event Legend/List below */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div style={{ backgroundColor: '#f8f9fa', padding: '15px 20px', borderBottom: '1px solid var(--border-color)' }}>
          <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><List size={20}/> Keterangan Event</h4>
        </div>
        <div style={{ padding: '20px' }}>
          <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {EVENTS.map((evt, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '0.95rem', borderBottom: '1px dashed #ccc', paddingBottom: '10px' }}>
                <span style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4px 10px', borderRadius: '3px', fontSize: '0.85rem' }}>
                  {evt.date}
                </span>
                <span>{evt.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Kalender;
