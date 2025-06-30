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
    }
  ];

  // Generate URLs for all locales
  const urls: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  for (const locale of locales) {
    for (const route of routes) {
      urls.push({
        url: `${baseUrl}${locale === defaultLocale ? '' : '/' + locale}${route.path}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority
      });
    }
  }

  return urls;
}

// Add image sitemap generation
export function generateImageSitemap(): {
  url: string;
  title?: string;
  caption?: string;
}[] {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
  return [
    {
      url: `${baseUrl}/images/og/og-image.png`,
      title: 'Wildscope App Preview',
      caption: 'Preview of the Wildscope wildlife identification app'
    },
    {
      url: `${baseUrl}/images/header.png`,
      title: 'AI Species Identification',
      caption: 'Identify wildlife using AI technology'
    },
    {
      url: `${baseUrl}/images/logo.png`,
      title: 'Wildscope Logo',
      caption: 'The official logo for Wildscope'
    }
  ];
} 