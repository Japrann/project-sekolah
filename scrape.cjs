const https = require('https');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape() {
  try {
    const html = await fetchPage('https://www.smppgri1tangerang.sch.id/guru');
    
    // Find images and names
    const regex = /<img[^>]+src="([^">]+)"[^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>[\s\S]*?Mapel:\s*([^<]+)<\/small>/gi;
    
    let match;
    const teachers = [];
    while ((match = regex.exec(html)) !== null) {
      const img = match[1].trim();
      const name = match[2].trim();
      // mapel inside small tag. Wait, earlier regex had </li> which doesn't exist.
      const mapel = match[3].trim();
      teachers.push({name, img, mapel});
    }
    
    console.log(JSON.stringify(teachers, null, 2));
    
  } catch(e) {
    console.error(e);
  }
}

scrape();
