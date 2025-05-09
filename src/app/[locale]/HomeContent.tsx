'use client';

import React, { useState } from 'react';
import {useTranslations} from 'next-intl';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { OrganizationJsonLd, WebsiteJsonLd, FAQJsonLd, ReviewJsonLd } from '@/components/JsonLd';

type HomeContentProps = {
  locale: string;
};

export default function HomeContent({ locale }: HomeContentProps) {
  const t = useTranslations('Hero');
  const tFeatures = useTranslations('Features');
  const tCta = useTranslations('CallToAction');
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data for SEO */}
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <FAQJsonLd />
      <ReviewJsonLd />
      
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white py-20 md:py-32 relative">
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <Image
              src="/images/header.png"
              alt="Wildlife tracking and outdoor adventure in pristine nature landscape"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="p-8 rounded-lg inline-block mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                {t('title')}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md">
                {t('subtitle')}
              </p>
              <button className="bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300">
                {t('cta')}
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800" id="features" aria-labelledby="features-heading">
          <div className="container mx-auto px-6">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{tFeatures('title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(`/images/img1_${locale}.png`)}>
                  <Image 
                    src={`/images/img1_${locale}.png`}
                    alt={`${tFeatures('feature1_title')} - Wildlife tracking tools`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to English if localized image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = `/images/img1_en.png`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">{tFeatures('feature1_title')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tFeatures('feature1_desc')}</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(`/images/img3_${locale}.png`)}>
                  <Image 
                    src={`/images/img3_${locale}.png`}
                    alt={`${tFeatures('feature2_title')} - AI wildlife identification`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to English if localized image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = `/images/img3_en.png`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">{tFeatures('feature2_title')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tFeatures('feature2_desc')}</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(`/images/img2_${locale}.png`)}>
                  <Image 
                    src={`/images/img2_${locale}.png`}
                    alt={`${tFeatures('feature3_title')} - Outdoor adventure community`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to English if localized image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = `/images/img2_en.png`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">{tFeatures('feature3_title')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tFeatures('feature3_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-emerald-600 text-white" id="download" aria-labelledby="cta-heading">
          <div className="container mx-auto px-6 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">{tCta('title')}</h2>
            <button className="bg-white text-emerald-700 font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg">
              {tCta('button')}
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      
      <ImageModal 
        imageUrl={selectedImage || ''} 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
} 