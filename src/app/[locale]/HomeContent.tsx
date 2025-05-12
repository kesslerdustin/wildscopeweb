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
            <p className="text-lg mb-8 max-w-2xl mx-auto">{tCta('subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.722 19.786c-.063.12-.143.24-.232.336-.336.36-.907.504-1.454.504-.318 0-.63-.048-.936-.156a2.416 2.416 0 01-.906-.516l-3.24-2.832-3.234 2.832c-.27.228-.576.396-.906.516a2.7 2.7 0 01-.936.156 2.19 2.19 0 01-1.458-.504 1.25 1.25 0 01-.228-.336 2.016 2.016 0 01-.192-.912V4.824c0-.324.066-.624.192-.912a1.25 1.25 0 01.228-.336c.336-.36.91-.504 1.458-.504.318 0 .63.048.936.156.33.12.636.288.906.516L12 6.576l3.24-2.832c.27-.228.576-.396.906-.516.306-.108.618-.156.936-.156.547 0 1.118.144 1.454.504.089.096.17.216.232.336.126.288.192.588.192.912v14.05c0 .324-.066.624-.192.912zm-4.446-6.924l3.432 3.001V5.421L13.276 8.4l3.438-2.988v2.496l-3.438 2.982z" />
                </svg>
                {tCta('appstore')}
              </button>
              <a 
                href={tCta('playstoreLink')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.186 4.352C2.575 5.027 2.25 6.046 2.25 7.357v9.286c0 1.311.325 2.33.936 3.005l.117.129.188-.117 8.97-5.196V9.536L3.373 4.223l-.187-.117-.117.13.117.116z" />
                  <path d="M17.73 11l-3.75-2.143-9.938-5.679 9.938 5.679L17.73 11z" />
                  <path d="M21.436 11L17.26 8.571 14 6.429v11.142l3.26-2.143 4.176-2.428V11z" />
                  <path d="M13.53 19.446l-9.966-5.732-.188-.117-.118.13.118.116.118.13.187.117 9.85 5.732.187.117.117-.13-.117-.116.118-.13-.188-.117-.118.13z" />
                </svg>
                {tCta('playstore')}
              </a>
            </div>
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