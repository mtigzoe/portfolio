const https = require('https');
const http = require('http');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetch(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const site = process.env.WORDPRESS_SITE;
  if (!site) {
    console.error('Set WORDPRESS_SITE to the source WordPress hostname before importing.');
    process.exitCode = 1;
    return;
  }
  const apiBase = `https://public-api.wordpress.com/rest/v1.1/sites/${encodeURIComponent(site)}`;
  try {
    const postsRaw = await fetch(`${apiBase}/posts?number=100`);
    fs.writeFileSync('wp_posts_raw.json', postsRaw);
    const postsJson = JSON.parse(postsRaw);
    console.log('Posts found:', postsJson.found, 'Received:', postsJson.posts?.length);
  } catch (e) {
    console.error('Error fetching posts:', e.message);
  }

  try {
    const pagesRaw = await fetch(`${apiBase}/pages?number=100`);
    fs.writeFileSync('wp_pages_raw.json', pagesRaw);
    const pagesJson = JSON.parse(pagesRaw);
    console.log('Pages found:', pagesJson.found, 'Received:', pagesJson.pages?.length);
  } catch (e) {
    console.error('Error fetching pages:', e.message);
  }

  try {
    const siteRaw = await fetch(`${apiBase}`);
    fs.writeFileSync('wp_site_raw.json', siteRaw);
    const siteJson = JSON.parse(siteRaw);
    console.log('Site name:', siteJson.name);
    console.log('Site description:', siteJson.description);
  } catch (e) {
    console.error('Error fetching site info:', e.message);
  }
}

run();
