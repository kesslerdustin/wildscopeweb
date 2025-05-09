const https = require('https');
const { URL } = require('url');

// Website URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
const sitemapUrl = `${baseUrl}/sitemap.xml`;

/**
 * Ping search engines to notify them about the sitemap
 */
async function pingSearchEngines() {
  console.log('🔍 Pinging search engines about the sitemap...');
  
  const searchEngines = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  ];
  
  for (const engineUrl of searchEngines) {
    try {
      await pingUrl(engineUrl);
      const { hostname } = new URL(engineUrl);
      console.log(`✅ Successfully pinged ${hostname}`);
    } catch (error) {
      const { hostname } = new URL(engineUrl);
      console.error(`❌ Failed to ping ${hostname}:`, error.message);
    }
  }
}

/**
 * Ping a URL
 * @param {string} url 
 * @returns {Promise<void>}
 */
function pingUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        resolve();
      } else {
        reject(new Error(`HTTP status code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Execute the ping
pingSearchEngines().catch(console.error); 