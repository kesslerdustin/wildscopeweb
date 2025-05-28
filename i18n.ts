import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ja'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale || defaultLocale;
  
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    console.warn(`🚨 Invalid locale detected: ${locale}. Falling back to ${defaultLocale}`);
    notFound();
  }
  
  console.log(`🌐 Using locale: ${locale}`);
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
