'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();

  return (
    <header className="bg-gray-50 dark:bg-gray-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity flex items-center">
          <Image 
            src="/images/icon.png" 
            alt="Wildscope icon" 
            width={32} 
            height={32} 
            className="rounded-full mr-2"
          />
          <Image 
            src="/images/logo.png" 
            alt="Wildscope logo" 
            width={160} 
            height={40} 
            className="h-8 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-4">
          {/* Add other navigation links here if needed in the future */}
          {/* <Link href={`/${locale}/features`} className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400">{t('features')}</Link> */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
} 