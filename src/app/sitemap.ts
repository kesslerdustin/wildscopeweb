import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '../../i18n/request';

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
      path: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
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
    {
      path: '/terms',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
      lastModified: new Date().toISOString()
    },
    // Additional pages can be added here
  ];
  
  // Create sitemap entries for each locale and route
  const sitemapEntries = locales.flatMap(locale => {
    return routes.map(route => {
      // For default locale, don't add locale prefix
      const path = locale === defaultLocale 
        ? route.path
        : `/${locale}${route.path}`;
      
      // Generate alternate language URLs for this page
      const alternateLanguages = locales
        .filter(loc => loc !== locale)
        .reduce((acc, lang) => {
          const altPath = lang === defaultLocale
            ? route.path
            : `/${lang}${route.path}`;
          acc[lang] = `${baseUrl}${altPath}`;
          return acc;
        }, {} as Record<string, string>);
      
      // Set canonical URL - for default locale, use unprefixed path
      const canonicalPath = locale === defaultLocale
        ? route.path
        : path;
      
      return {
        url: `${baseUrl}${path}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: alternateLanguages,
          canonical: `${baseUrl}${canonicalPath}`
        }
      };
    });
  });
  
  return sitemapEntries;
} 