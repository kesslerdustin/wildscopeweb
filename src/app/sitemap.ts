import { MetadataRoute } from 'next';
import { locales } from '../../i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  // Define all routes/pages that should be included in the sitemap
  const routes = [
    '', // homepage
    '/contact',
    '/datenschutz',
    '/impressum',
  ];
  
  // Create sitemap entries for each locale and route
  const sitemapEntries = locales.flatMap(locale => {
    return routes.map(route => {
      const path = route ? `/${locale}${route}` : `/${locale}`;
      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
      };
    });
  });
  
  return sitemapEntries;
} 