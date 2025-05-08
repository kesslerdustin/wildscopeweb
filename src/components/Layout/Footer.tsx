'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            {t('copyright', { year: currentYear })}
          </p>
          <nav className="flex space-x-4 sm:space-x-6">
            <Link href={`/${locale}/impressum`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors">
              {tNav('impressum')}
            </Link>
            <Link href={`/${locale}/datenschutz`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors">
              {tNav('privacy')}
            </Link>
            <Link href={`/${locale}/kontakt`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors">
              {tNav('contact')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
} 