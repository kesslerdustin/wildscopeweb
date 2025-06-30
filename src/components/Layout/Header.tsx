'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { track } from '@vercel/analytics';
// import { Compass, Leaf, Users, Wifi, Map, Award } from 'lucide-react'; // Removed icons
import { Instagram } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { usePathname } from 'next/navigation';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();

  // Generate breadcrumb items based on current path
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    const items = [
      {
        name: t('home'),
        url: `/${locale === 'en' ? '' : locale}`
      }
    ];

    let currentPath = '';
    paths.forEach((path) => {
      if (path !== locale) {
        currentPath += `/${path}`;
        items.push({
          name: t(path),
          url: `/${locale}${currentPath}`
        });
      }
    });

    return items;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="text-2xl font-bold text-emerald-600 hover:opacity-80 transition-opacity flex items-center">
            <Image 
              src="/images/icon.png" 
              alt="Wildscope Wildlife Tracking App Icon" 
              width={40} 
              height={40} 
              className="rounded-full mr-2"
            />
            <Image 
              src="/images/logo.png" 
              alt="Wildscope - Wildlife Tracking & Outdoor Adventure App Logo" 
              width={160} 
              height={40} 
              className="h-8 w-auto hidden md:block"
            />
            <span className="md:hidden">Wildscope</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href={`/${locale}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
              {t('home')}
            </Link>
            <Link href={`/${locale}/impressum`} className="text-gray-600 hover:text-emerald-600 transition-colors">
              {t('impressum')}
            </Link>
            <Link href={`/${locale}/privacy`} className="text-gray-600 hover:text-emerald-600 transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-emerald-600 transition-colors">
              {t('contact')}
            </Link>
            <a 
              href="https://www.instagram.com/wildscope.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => track('instagram_click')}
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex md:hidden items-center space-x-4">
            <a 
              href="https://www.instagram.com/wildscope.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <LanguageSwitcher />
          </nav>
        </div>

        {/* Breadcrumb navigation */}
        {breadcrumbs.length > 1 && (
          <nav className="text-sm mt-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.url} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-500">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-600">{breadcrumb.name}</span>
                  ) : (
                    <Link href={breadcrumb.url} className="text-emerald-600 hover:text-emerald-700">
                      {breadcrumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      {/* Add BreadcrumbJsonLd for SEO */}
      {breadcrumbs.length > 1 && <BreadcrumbJsonLd items={breadcrumbs} />}
    </header>
  );
} 