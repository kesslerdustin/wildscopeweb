import { MetadataRoute } from 'next';
import { locales } from '../../i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  // Define all routes/pages that should be included in the sitemap
  const routes = [
    {
      path: '', // homepage
      changeFrequency: 'weekly' as const,
      priority: 1.0
    },
    {
      path: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      path: '/datenschutz',
      changeFrequency: 'yearly' as const,
      priority: 0.5
    },
    {
      path: '/impressum',
      changeFrequency: 'yearly' as const,
      priority: 0.5
    },
    // Additional pages can be added here
  ];
  
  // Create sitemap entries for each locale and route
  const sitemapEntries = locales.flatMap(locale => {
    return routes.map(route => {
      const path = route.path ? `/${locale}${route.path}` : `/${locale}`;
      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      };
    });
  });
  
  return sitemapEntries;
} 