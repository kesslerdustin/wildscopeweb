'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'wildscope_cookie_consent';

export default function CookieBanner() {
  const t = useTranslations('CookieBanner');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    // You might want to disable certain features or analytics if declined
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-0 left-0 right-0 bg-gray-800 dark:bg-gray-900 text-white p-4 shadow-lg z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm mb-3 sm:mb-0 sm:mr-4 flex items-center">
              <Cookie size={20} className="mr-2 text-yellow-400" /> 
              {t('message')}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleAccept}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('accept')}
              </button>
              <button
                onClick={handleDecline}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('decline')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 