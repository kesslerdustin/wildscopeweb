'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { track } from '@vercel/analytics';
// import { Compass, Leaf, Users, Wifi, Map, Award } from 'lucide-react'; // Removed icons
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const tCta = useTranslations('CallToAction');
  const locale = useLocale();

  // Tracking functions for app store clicks
  const trackAppStoreClick = () => {
    track('app_store_click', { 
      platform: 'iOS', 
      location: 'header',
      language: locale 
    });
  };

  const trackPlayStoreClick = () => {
    track('play_store_click', { 
      platform: 'Android',
      location: 'header', 
      language: locale 
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-2xl font-bold text-emerald-600 hover:opacity-80 transition-opacity flex items-center">
          <Image 
            src="/images/icon.png" 
            alt="Wildscope Wildlife Tracking App Icon" 
            width={32} 
            height={32} 
            className="rounded-full mr-2"
          />
          <Image 
            src="/images/logo.png" 
            alt="Wildscope - Wildlife Tracking & Outdoor Adventure App Logo" 
            width={160} 
            height={40} 
            className="h-8 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://apps.apple.com/us/app/wildscope/id6741471953"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackAppStoreClick}
              className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.722 19.786c-.063.12-.143.24-.232.336-.336.36-.907.504-1.454.504-.318 0-.63-.048-.936-.156a2.416 2.416 0 01-.906-.516l-3.24-2.832-3.234 2.832c-.27.228-.576.396-.906.516a2.7 2.7 0 01-.936.156 2.19 2.19 0 01-1.458-.504 1.25 1.25 0 01-.228-.336 2.016 2.016 0 01-.192-.912V4.824c0-.324.066-.624.192-.912a1.25 1.25 0 01.228-.336c.336-.36.91-.504 1.458-.504.318 0 .63.048.936.156.33.12.636.288.906.516L12 6.576l3.24-2.832c.27-.228-.576.396-.906-.516.306-.108.618-.156.936-.156.547 0 1.118.144 1.454.504.089.096.17.216.232.336.126.288.192.588.192.912v14.05c0 .324-.066.624-.192.912zm-4.446-6.924l3.432 3.001V5.421L13.276 8.4l3.438-2.988v2.496l-3.438 2.982z" />
              </svg>
              {tCta('appstore')}
            </a>
            <a
              href={tCta('playstoreLink')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackPlayStoreClick}
              className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.186 4.352C2.575 5.027 2.25 6.046 2.25 7.357v9.286c0 1.311.325 2.33.936 3.005l.117.129.188-.117 8.97-5.196V9.536L3.373 4.223l-.187-.117-.117.13.117.116z" />
                <path d="M17.73 11l-3.75-2.143-9.938-5.679 9.938 5.679L17.73 11z" />
                <path d="M21.436 11L17.26 8.571 14 6.429v11.142l3.26-2.143 4.176-2.428V11z" />
                <path d="M13.53 19.446l-9.966-5.732-.188-.117-.118.13.118.116.118.13.187.117 9.85 5.732.187.117.117-.13-.117-.116.118-.13-.188-.117-.118.13z" />
              </svg>
              {tCta('playstore')}
            </a>
          </div>
          {/* Removed icon section */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
} 