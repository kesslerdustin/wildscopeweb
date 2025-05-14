import { MetadataRoute } from 'next';
import { locales } from '../../i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
  // Define all routes/pages that should be included in the sitemap
  const routes = [
    {
      path: '', // homepage
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      lastModified: new Date().toISOString()
    },
    {
      path: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: new Date().toISOString()
    },
    {
      path: '/datenschutz',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
      lastModified: new Date().toISOString()
    },
    {
      path: '/impressum',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
      lastModified: new Date().toISOString()
    },
    // Additional pages can be added here
  ];
  
  // Create sitemap entries for each locale and route
  const sitemapEntries = locales.flatMap(locale => {
    return routes.map(route => {
      const path = route.path ? `/${locale}${route.path}` : `/${locale}`;
      
      // Generate alternate language URLs for this page
      const alternateLanguages = locales
        .filter(loc => loc !== locale)
        .reduce((acc, lang) => {
          const altPath = route.path ? `/${lang}${route.path}` : `/${lang}`;
          acc[lang] = `${baseUrl}${altPath}`;
          return acc;
        }, {} as Record<string, string>);
      
      return {
        url: `${baseUrl}${path}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: alternateLanguages,
          canonical: `${baseUrl}${path}`
        }
      };
    });
  });
  
  return sitemapEntries;
} 