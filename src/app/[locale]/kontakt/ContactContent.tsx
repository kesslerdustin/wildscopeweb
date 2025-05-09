'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function ContactContent() {
  const t = useTranslations('ContactPage');
  
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow max-w-2xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t('contact_intro')}</p>
        
        <div className="flex flex-col items-center justify-center space-y-4 mb-4">
          <h2 className="text-xl font-semibold">{t('contact_person')}</h2>
          <p>Dustin Keßler</p>
          <p>Kurt Schumacher Straße 93</p>
          <p>46539 Dinslaken</p>
          <p>{t('country')}</p>
        </div>
        
        <a 
          href="mailto:duselkay@gmail.com" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          duselkay@gmail.com
        </a>
      </div>
    </>
  );
} 