'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { getTermsPathForLocale } from '@/utils/localeHelpers';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  const termsPath = getTermsPathForLocale(locale);

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-gray-600 dark:text-gray-400">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Wildscope</h2>
            <p className="mb-2">{t('copyright', { year: currentYear })}</p>
            <p>
              Created by <a href="https://www.dustinkessler.de" target="_blank" rel="noopener noreferrer" aria-label="Developer's website" className="text-emerald-600 dark:text-emerald-400 hover:underline">Dustin Keßler</a>
            </p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h2>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li>
                  <Link href={`/${locale}`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}#features`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Wildlife Tracking Features
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}#download`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Download App
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Legal</h2>
            <nav aria-label="Legal Navigation">
              <ul className="space-y-2">
                <li>
                  <Link href={`/${locale}/impressum`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {tNav('impressum')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/datenschutz`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {tNav('privacy')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/${termsPath}`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {tNav('terms')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/kontakt`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {tNav('contact')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Wildscope - Your AI-powered wildlife identification and outdoor adventure companion</p>
        </div>
      </div>
    </footer>
  );
} 