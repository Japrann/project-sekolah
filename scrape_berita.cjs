const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrapeBerita() {
  console.log('Fetching homepage news from SMP PGRI 1 Tangerang...');
  try {
    const html = await fetchPage('https://www.smppgri1tangerang.sch.id/');
    
    // We can extract news from the "Berita Terbaru" sidebar.
    // Structure:
    // <div class="entry col-12 mb-0">
    // ... <a href="URL"><img src="IMG" alt="..."></a>
    // ... <div class="entry-title"><h4><a href="URL">TITLE</a></h4></div>
    // ... <li>DATE</li>
    
    const entryRegex = /<div class="entry col-12 mb-0">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
    
    const urlTitleRegex = /<h4><a href="([^"]+)">([^<]+)<\/a><\/h4>/;
    const imgRegex = /<img src="([^"]+)" alt="[^"]*">/;
    const dateRegex = /<li>([^<]+)<\/li>/;

    const berita = [];
    let match;

    while ((match = entryRegex.exec(html)) !== null) {
      const block = match[1];
      
      const titleMatch = urlTitleRegex.exec(block);
      const imgMatch = imgRegex.exec(block);
      const dateMatch = dateRegex.exec(block);

      if (titleMatch) {
         berita.push({
           title: titleMatch[2].trim(),
           url: titleMatch[1].trim(),
           image: imgMatch ? imgMatch[1].trim() : '',
           date: dateMatch ? dateMatch[1].trim() : '',
           category: 'Berita Sekolah'
         });
      }
    }
    
    // Fallback if none found via entry blocks, maybe extract from ticker:
    if (berita.length === 0) {
       const tickerRegex = /<li><a href="([^"]+)"[^>]*><h5[^>]*>([^<]+)<\/h5><\/a><\/li>/g;
       let tMatch;
       while ((tMatch = tickerRegex.exec(html)) !== null) {
          berita.push({
            title: tMatch[2].trim().replace(/\.\.\.$/, ''),
            url: tMatch[1].trim(),
            image: "https://www.smppgri1tangerang.sch.id/upload/picture/63639994WhatsAppImage2024-09-07at08.50.00_763e8394.webp", // placeholder
            date: "Terbaru",
            category: "News Update"
          });
       }
    }

    // Deduplicate mapping by url to make sure it's clean
    const stringified = JSON.stringify(berita, null, 2);
    
    const dataDir = path.join(__dirname, 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const outPath = path.join(dataDir, 'berita.json');
    fs.writeFileSync(outPath, stringified);
    
    console.log(`Successfully scraped ${berita.length} news items to src/data/berita.json`);
    
  } catch(e) {
    console.error('Error scraping:', e);
  }
}

scrapeBerita();
