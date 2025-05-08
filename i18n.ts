import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ja'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale || defaultLocale;
  
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
