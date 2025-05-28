import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function RootPage() {
  // Get the Accept-Language header to determine the best locale
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Debug logging
  console.log('🔍 Root page - Accept-Language header:', acceptLanguage);
  
  // Parse Accept-Language header to find the best match
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ja'];
  const defaultLocale = 'en';
  
  // Better language detection from Accept-Language header
  let detectedLocale = defaultLocale;
  
  if (acceptLanguage) {
    // Parse Accept-Language header properly (format: "de-DE,de;q=0.9,en;q=0.8")
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [locale, q] = lang.trim().split(';q=');
        return {
          locale: locale.trim().toLowerCase().split('-')[0], // Extract main language code
          q: q ? parseFloat(q) : 1.0
        };
      })
      .sort((a, b) => b.q - a.q); // Sort by priority
    
    console.log('🔍 Parsed languages:', languages);
    
    // Find the first supported language
    for (const lang of languages) {
      if (locales.includes(lang.locale)) {
        detectedLocale = lang.locale;
        console.log('🎯 Detected locale:', detectedLocale);
        break;
      }
    }
  }
  
  console.log('🌍 Final locale for redirect:', detectedLocale);
  
  // Redirect to the detected locale path
  redirect(`/${detectedLocale}`);
} 