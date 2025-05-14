import { MetadataRoute } from 'next';
import { defaultLocale, locales } from '../../i18n';

export default function manifest(): MetadataRoute.Manifest {
  const descriptions = {
    en: 'Discover your next adventure with Wildscope.',
    de: 'Entdecke dein nächstes Abenteuer mit Wildscope.',
    fr: 'Découvrez votre prochaine aventure avec Wildscope.',
    it: 'Scopri la tua prossima avventura con Wildscope.',
    es: 'Descubre tu próxima aventura con Wildscope.',
    pt: 'Descubra sua próxima aventura com Wildscope.',
    ja: 'Wildscopeで次の冒険を発見しましょう。'
  };

  return {
    name: 'Wildscope',
    short_name: 'Wildscope',
    description: descriptions[defaultLocale as keyof typeof descriptions] || descriptions.en,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066CC',
    lang: defaultLocale,
    dir: 'ltr',
    scope: '/',
    related_applications: [
      {
        platform: 'web',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app'
      }
    ],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  };
} 