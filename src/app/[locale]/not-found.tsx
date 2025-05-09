'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

// Add metadata for better SEO on 404 page
export const metadata: Metadata = {
  title: 'Page Not Found | Wildscope',
  description: 'Sorry, the page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function NotFound() {
  // This will use translations from the current locale
  const t = useTranslations('NotFound');
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-8 max-w-md text-gray-600 dark:text-gray-400">{t('description')}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {t('backHome')}
      </Link>
    </div>
  );
} 