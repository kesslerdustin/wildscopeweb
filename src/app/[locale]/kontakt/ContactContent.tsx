'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

export default function ContactContent() {
  const t = useTranslations('ContactPage');
  
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow max-w-2xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t('content_placeholder')}</p>
        <ContactForm />
      </div>
    </>
  );
} 