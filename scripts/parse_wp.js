const fs = require('fs');

const feed = fs.readFileSync('feed.xml', 'utf-8');

function cleanEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#038;/g, '&')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');
}

const items = [];
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
let match;
while ((match = itemRegex.exec(feed)) !== null) {
  const itemContent = match[1];
  const title = (itemContent.match(/<title>(.*?)<\/title>/) || [])[1] || '';
  const link = (itemContent.match(/<link>(.*?)<\/link>/) || [])[1] || '';
  const pubDate = (itemContent.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1] || '';
  const creator = (itemContent.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/) || [])[1] || '';
  const content = (itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) || [])[1] || '';
  const description = (itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || [])[1] || '';
  const postGuid = (itemContent.match(/<guid[^>]*>(.*?)<\/guid>/) || [])[1] || '';

  const catRegex = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g;
  const categories = [];
  let cm;
  while ((cm = catRegex.exec(itemContent)) !== null) {
    categories.push(cleanEntities(cm[1]));
  }

  const cleanLink = link.trim();
  const slugMatch = cleanLink.match(/\/([^/]+)\/?$/);
  const slug = slugMatch ? slugMatch[1] : '';

  // Extract date nicely
  const parsedDate = new Date(pubDate);

  // Clean description of read more link
  let cleanDesc = description.replace(/<span class="excerpt-more-link">[\s\S]*?<\/span>/, '').replace(/<[^>]+>/g, '').trim();

  items.push({
    id: slug,
    title: cleanEntities(title),
    originalUrl: '',
    slug: slug,
    date: parsedDate.toISOString(),
    formattedDate: parsedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    author: 'Author',
    categories: categories.length > 0 ? categories : ['Software Engineering'],
    summary: cleanEntities(cleanDesc).replace(/Miriam Lozneanu|\\bMiriam\\b/g, 'Author'),
    content: cleanEntities(content).replace(/Miriam Lozneanu|\\bMiriam\\b/g, 'Author'),
  });
}

console.log('Parsed', items.length, 'posts');
items.forEach((p, idx) => {
  console.log(`${idx + 1}. [${p.formattedDate}] ${p.title} (${p.slug})`);
});

fs.writeFileSync('data/posts.json', JSON.stringify(items, null, 2));
console.log('Saved to data/posts.json');
