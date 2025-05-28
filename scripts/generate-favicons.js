// Favicon Generation Script
// Run this after manually creating the favicon files or use an online favicon generator

const fs = require('fs');
const path = require('path');

console.log('📋 Favicon Generation Checklist for Wildscope');
console.log('============================================');
console.log('');
console.log('You need to create these favicon files in the /public directory:');
console.log('');
console.log('✅ favicon.ico (already exists)');
console.log('✅ favicon.png (already exists)');
console.log('❌ apple-icon.png (180x180) - MISSING');
console.log('❌ icon-192.png (192x192) - MISSING');
console.log('❌ icon-512.png (512x512) - MISSING');
console.log('');
console.log('🔧 How to create missing files:');
console.log('');
console.log('Option 1: Use online favicon generator');
console.log('- Visit: https://realfavicongenerator.net/');
console.log('- Upload your /public/images/logo.png');
console.log('- Download generated files to /public/');
console.log('');
console.log('Option 2: Resize manually');
console.log('- Resize /public/images/logo.png to:');
console.log('  - apple-icon.png (180x180)');
console.log('  - icon-192.png (192x192)');
console.log('  - icon-512.png (512x512)');
console.log('');
console.log('Option 3: Use ImageMagick (if installed)');
console.log('- convert public/images/logo.png -resize 180x180 public/apple-icon.png');
console.log('- convert public/images/logo.png -resize 192x192 public/icon-192.png');
console.log('- convert public/images/logo.png -resize 512x512 public/icon-512.png');
console.log('');

// Check which files exist
const publicDir = path.join(__dirname, '..', 'public');
const requiredFiles = [
  'favicon.ico',
  'favicon.png', 
  'apple-icon.png',
  'icon-192.png',
  'icon-512.png'
];

console.log('📁 Current favicon files status:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(publicDir, file));
  console.log(`${exists ? '✅' : '❌'} ${file} ${exists ? '(exists)' : '(missing)'}`);
});

console.log('');
console.log('🚀 After creating missing files, run:');
console.log('npm run build && npm run start');
console.log('');
console.log('🔍 To test favicon in Google:');
console.log('1. Wait 24-48 hours after deployment');
console.log('2. Use Google Search Console to request re-indexing');
console.log('3. Check: https://www.google.com/s2/favicons?domain=wildscope.app'); 