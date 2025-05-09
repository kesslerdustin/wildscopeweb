import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  
  // Extract the locale from the pathname (e.g., /en/about -> en)
  const locale = pathname.split('/')[1];
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>{t('copyright').replace('{year}', currentYear.toString())}</p>
            <p className="mt-1 text-sm">
              Created by <a href="https://www.dustinkessler.de" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline">Dustin Keßler</a>
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link href={`/${locale}/impressum`} className="hover:text-emerald-300 transition-colors">
              {t('impressum')}
            </Link>
            <Link href={`/${locale}/datenschutz`} className="hover:text-emerald-300 transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/kontakt`} className="hover:text-emerald-300 transition-colors">
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 