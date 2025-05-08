'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LocaleNotFound() {
  // This will use translations from the current locale
  const t = useTranslations('NotFound');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {t('title', { fallback: 'Page Not Found' })}
      </h1>
      <p className="mb-6">
        {t('message', { fallback: 'The page you are looking for does not exist or has been moved.' })}
      </p>
      <Link 
        href="/"
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        {t('goHome', { fallback: 'Go to Homepage' })}
      </Link>
    </div>
  );
} 