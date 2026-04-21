const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { createObjectCsvWriter } = require('csv-writer');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to CSV file
const csvPath = path.join(__dirname, 'pendaftaran.csv');

// Set up CSV Writer
const csvWriter = createObjectCsvWriter({
  path: csvPath,
  header: [
    { id: 'date', title: 'Tanggal Daftar' },
    { id: 'namaSiswa', title: 'Nama Lengkap Siswa' },
    { id: 'nisn', title: 'NISN' },
    { id: 'tempatLahir', title: 'Tempat Lahir' },
    { id: 'tanggalLahir', title: 'Tanggal Lahir' },
    { id: 'asalSekolah', title: 'Asal Sekolah Dasar (SD)' },
    { id: 'namaOrtu', title: 'Nama Orang Tua/Wali' },
    { id: 'noHp', title: 'Nomor HP/WhatsApp' },
    { id: 'email', title: 'Email' },
    { id: 'alamat', title: 'Alamat Lengkap' }
  ],
  append: fs.existsSync(csvPath) // append if file exists
});

// Endpoint untuk menerima data pendaftaran
app.post('/api/pendaftaran', async (req, res) => {
  try {
    const data = req.body;
    
    const record = [
      {
        date: new Date().toISOString(),
        namaSiswa: data.namaSiswa || '',
        nisn: data.nisn || '',
        tempatLahir: data.tempatLahir || '',
        tanggalLahir: data.tanggalLahir || '',
        asalSekolah: data.asalSekolah || '',
        namaOrtu: data.namaOrtu || '',
        noHp: data.noHp || '',
        email: data.email || '',
        alamat: data.alamat || '',
      }
    ];

    await csvWriter.writeRecords(record);
    
    console.log('✅ Data pendaftaran baru berhasil ditambahkan ke pendaftaran.csv');
    res.status(200).json({ success: true, message: 'Data saved successfully.' });
  } catch (error) {
    console.error('❌ Gagal menyimpan data:', error);
    res.status(500).json({ success: false, error: 'Failed to write CSV data.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend Server berjalan di http://localhost:${PORT}`);
  console.log(`📁 File Excel (CSV) disimpan di: ${csvPath}`);
});
