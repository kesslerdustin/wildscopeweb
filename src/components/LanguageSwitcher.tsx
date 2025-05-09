'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { locales } from '../../i18n';
import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languageNames: { [key: string]: string } = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    it: 'Italiano',
    es: 'Español',
    pt: 'Português',
    ja: '日本語',
  };

  // Create a path for the new locale
  function getLocalePath(newLocale: string) {
    // Replace the current locale in the path with the new one
    // e.g., /en/about -> /fr/about
    const segments = pathname.split('/');
    const isLocaleSegmentPresent = locales.includes(segments[1]);
    
    if (isLocaleSegmentPresent) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    
    return segments.join('/');
  }

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      const newPath = getLocalePath(newLocale);
      router.push(newPath);
      setIsOpen(false);
    });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-emerald-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
        disabled={isPending}
      >
        <Globe size={18} className="mr-2 text-emerald-600" />
        {languageNames[locale] || locale.toUpperCase()}
        <ChevronDown size={18} className={`ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 py-1">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleChange(loc)}
              disabled={locale === loc || isPending}
              className={`block w-full text-left px-4 py-2 text-sm 
                          ${locale === loc 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'text-emerald-600 hover:bg-gray-100'}
                          disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {languageNames[loc] || loc.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 