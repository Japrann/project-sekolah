const cheerio = require('cheerio');
const fs = require('fs');
const html = fs.readFileSync('guru_test.html', 'utf8');

const $ = cheerio.load(html);

// Find the section that actually contains the lists
const possibleContainers = [];
$('div.team, div.team-list, ul.team, li.team').each((i, el) => {
   possibleContainers.push($(el).attr('class'));
});
console.log('TEAM CLASSES:', possibleContainers.length > 0 ? possibleContainers : 'Not found');

// Let's print out all h4 tags inside links to find teachers
const h4s = [];
$('a').each((i, el) => {
   const text = $(el).text().trim();
   if (text && text.includes('S.Pd')) {
      h4s.push(text);
   }
});
console.log('TEACHERS:', h4s.slice(0, 5));

// What about img wrappers around a text ?
const items = [];
$('img').each((i, el) => {
   const src = $(el).attr('src');
   if (src && src.includes('imagecache')) {
      const parentHtml = $(el).parent().parent().html() || '';
      items.push({ src, snippet: parentHtml.substring(0, 100) });
   }
});
console.log('IMAGES:', items.slice(0, 2));
