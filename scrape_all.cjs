const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Helper untuk fetch konten via HTTPS dengan timeout
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    
    req.on('error', reject);
    req.on('timeout', () => {
      req.abort();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

// Data Directory
const dataDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 1. Scrape Berita
async function scrapeBerita() {
  console.log('🔄 Mengambil data dari /berita...');
  try {
    const html = await fetchPage('https://www.smppgri1tangerang.sch.id/berita');
    const $ = cheerio.load(html);
    const beritaList = [];

    // Gunakan selektor class entry pada template web sekolah
    $('.entry').each((i, el) => {
      const titleEl = $(el).find('.entry-title a');
      const title = titleEl.text().trim();
      const url = titleEl.attr('href');
      const image = $(el).find('img').attr('src');
      const date = $(el).find('.entry-meta li').first().text().replace('pukul', '').trim();
      
      if (title && url) {
        beritaList.push({
          title, url, image: image || '', date, category: 'Berita Terbaru'
        });
      }
    });

    console.log(`✅ ${beritaList.length} Berita ditemukan.`);
    if (beritaList.length > 0) {
      fs.writeFileSync(path.join(dataDir, 'berita.json'), JSON.stringify(beritaList, null, 2));
    }
    return beritaList.length;
  } catch (err) {
    console.error('❌ Gagal mengambil Berita:', err.message);
    return 0;
  }
}

// 2. Scrape Guru & Staff
async function scrapeGuruStaff() {
  console.log('🔄 Mengambil data dari /guru & /staff--tenaga-kependidikan...');
  const guruList = [];
  
  try {
    // a. Data Guru
    const htmlGuru = await fetchPage('https://www.smppgri1tangerang.sch.id/guru');
    let $ = cheerio.load(htmlGuru);
    
    $('.team').each((i, el) => {
      const name = $(el).find('.team-title h4').text().trim();
      const role = $(el).find('.team-title span').text().trim() || 'Guru';
      const image = $(el).find('img').attr('src');
      if (name) {
        guruList.push({ name, role, type: 'Guru', image });
      }
    });

    // b. Data Staff & Satpam (TU)
    const htmlStaff = await fetchPage('https://www.smppgri1tangerang.sch.id/staff--tenaga-kependidikan');
    $ = cheerio.load(htmlStaff);
    
    $('.team').each((i, el) => {
      const name = $(el).find('.team-title h4').text().trim();
      const role = $(el).find('.team-title span').text().trim() || 'Staff / Tata Usaha';
      const image = $(el).find('img').attr('src');
      if (name) {
        // Tentukan kategori jika ada kata satpam
        const isSatpam = name.toLowerCase().includes('satpam') || role.toLowerCase().includes('security') || role.toLowerCase().includes('keamanan');
        guruList.push({ name, role, type: isSatpam ? 'Keamanan' : 'Tata Usaha / Staff', image });
      }
    });

    console.log(`✅ ${guruList.length} Guru & Staff ditemukan.`);
    if (guruList.length > 0) {
       fs.writeFileSync(path.join(dataDir, 'gurustaff.json'), JSON.stringify(guruList, null, 2));
    }
  } catch (err) {
    console.error('❌ Gagal mengambil Guru & Staff:', err.message);
  }
}

// 3. Scrape Prestasi
async function scrapePrestasi() {
  console.log('🔄 Mengambil data dari /daftar-prestasi...');
  try {
    const html = await fetchPage('https://www.smppgri1tangerang.sch.id/daftar-prestasi');
    const $ = cheerio.load(html);
    const prestasiList = [];

    // Biasanya daftar dikemas dalam tabel jika "daftar-prestasi"
    $('table tbody tr').each((i, el) => {
      const cols = $(el).find('td');
      if (cols.length >= 3) {
        const title = $(cols[1]).text().trim();
        const level = $(cols[2]).text().trim();
        const date = $(cols[3]).text().trim() || 'Terbaru';
        
        prestasiList.push({
          id: i + 1,
          title,
          level,
          date,
          desc: `Penghargaan yang diraih kontingen SMP PGRI 1 Tangerang pada event tingkat ${level}.`,
          iconName: 'Medal',
          color: 'blue'
        });
      }
    });
    
    // Jika formatnya bukan table (melainkan div/list)
    if (prestasiList.length === 0) {
      $('.entry-title').each((i, el) => {
         const title = $(el).text().trim();
         if(title.toLowerCase().includes('juara') || title.toLowerCase().includes('prestasi')) {
           prestasiList.push({
             id: i + 1,
             title,
             level: 'Prestasi',
             date: '2024 / 2025',
             desc: title,
             iconName: 'Trophy',
             color: 'gold'
           });
         }
      });
    }

    console.log(`✅ ${prestasiList.length} Prestasi ditemukan.`);
    if (prestasiList.length > 0) {
      fs.writeFileSync(path.join(dataDir, 'prestasi.json'), JSON.stringify(prestasiList, null, 2));
    }
  } catch (err) {
    console.error('❌ Gagal mengambil Prestasi:', err.message);
  }
}

// Eksekusi Semua
async function runAll() {
  console.log("=== MEMULAI SINKRONISASI DATA ===");
  await scrapeBerita();
  await scrapeGuruStaff();
  await scrapePrestasi();
  console.log("=== SELESAI SINKRONISASI DATA ===");
}

runAll();
