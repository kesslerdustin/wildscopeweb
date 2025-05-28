import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function RootPage() {
  // Get the Accept-Language header to determine the best locale
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Parse Accept-Language header to find the best match
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ja'];
  const defaultLocale = 'en';
  
  // Simple language detection from Accept-Language header
  let detectedLocale = defaultLocale;
  
  for (const locale of locales) {
    if (acceptLanguage.toLowerCase().includes(locale)) {
      detectedLocale = locale;
      break;
    }
  }
  
  // Redirect to the detected locale path
  redirect(`/${detectedLocale}`);
} 