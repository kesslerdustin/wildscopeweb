// Script to update App Store data for SEO structured data
// Run this script periodically to keep your app data current

const https = require('https');
const fs = require('fs');
const path = require('path');

const APP_ID = '6741471953'; // Your App Store ID
const APP_STORE_API = `https://itunes.apple.com/lookup?id=${APP_ID}`;

async function fetchAppStoreData() {
  return new Promise((resolve, reject) => {
    https.get(APP_STORE_API, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.results && result.results.length > 0) {
            resolve(result.results[0]);
          } else {
            reject(new Error('No app data found'));
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function updateAppStoreData() {
  try {
    console.log('Fetching App Store data...');
    const appData = await fetchAppStoreData();
    
    const structuredData = {
      // Current app store data
      name: appData.trackName,
      version: appData.version,
      rating: appData.averageUserRating,
      ratingCount: appData.userRatingCount,
      price: appData.price,
      description: appData.description,
      releaseDate: appData.releaseDate,
      currentVersionReleaseDate: appData.currentVersionReleaseDate,
      fileSize: Math.round(appData.fileSizeBytes / 1024 / 1024) + 'MB',
      contentAdvisoryRating: appData.contentAdvisoryRating,
      genres: appData.genres,
      releaseNotes: appData.releaseNotes,
      screenshotUrls: appData.screenshotUrls,
      
      // Estimated download range based on rating count
      downloadEstimate: estimateDownloads(appData.userRatingCount),
      
      lastUpdated: new Date().toISOString()
    };
    
    // Write to a data file that can be imported
    const dataPath = path.join(__dirname, '..', 'src', 'data', 'app-store-data.json');
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.writeFileSync(dataPath, JSON.stringify(structuredData, null, 2));
    
    console.log('App Store data updated successfully!');
    console.log(`Rating: ${structuredData.rating}/5 (${structuredData.ratingCount} ratings)`);
    console.log(`Version: ${structuredData.version}`);
    console.log(`Size: ${structuredData.fileSize}`);
    console.log(`Estimated downloads: ${structuredData.downloadEstimate}`);
    
    return structuredData;
  } catch (error) {
    console.error('Error updating App Store data:', error);
    return null;
  }
}

function estimateDownloads(ratingCount) {
  // Rough estimation: typically 1-5% of users rate apps
  // This is a conservative estimate
  if (ratingCount < 10) return '100+';
  if (ratingCount < 50) return '1,000+';
  if (ratingCount < 100) return '5,000+';
  if (ratingCount < 500) return '10,000+';
  if (ratingCount < 1000) return '50,000+';
  if (ratingCount < 5000) return '100,000+';
  if (ratingCount < 10000) return '500,000+';
  return '1,000,000+';
}

// Run the update
if (require.main === module) {
  updateAppStoreData().then((data) => {
    if (data) {
      console.log('\n📱 Next steps:');
      console.log('1. Update your JsonLd.tsx components with this real data');
      console.log('2. Set up a cron job to run this script daily/weekly');
      console.log('3. Consider adding Google Play Store data when available');
    }
  });
}

module.exports = { updateAppStoreData, fetchAppStoreData }; 