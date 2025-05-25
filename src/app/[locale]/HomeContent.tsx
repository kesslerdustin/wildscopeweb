'use client';

import React, { useState } from 'react';
import {useTranslations} from 'next-intl';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { OrganizationJsonLd, WebsiteJsonLd, FAQJsonLd, ReviewJsonLd } from '@/components/JsonLd';
import { motion } from 'framer-motion';
import { Leaf, Compass, Users, WifiOff, MapPin, Award, Search, MessageSquare, Brain } from 'lucide-react';

type HomeContentProps = {
  locale: string;
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HomeContent({ locale }: HomeContentProps) {
  const t = useTranslations('Hero');
  const tAbout = useTranslations('About');
  const tFeatures = useTranslations('Features');
  const tOffline = useTranslations('OfflineCapabilities');
  const tOnline = useTranslations('OnlineFeatures');
  const tAudience = useTranslations('Audience');
  const tTestimonials = useTranslations('Testimonials');
  const tPricing = useTranslations('Pricing');
  const tFaq = useTranslations('FAQ');
  const tCta = useTranslations('CallToAction');
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Tracking functions for app store clicks
  const trackAppStoreClick = () => {
    track('app_store_click', { 
      platform: 'iOS', 
      location: 'homepage',
      language: locale 
    });
  };

  const trackPlayStoreClick = () => {
    track('play_store_click', { 
      platform: 'Android',
      location: 'homepage', 
      language: locale 
    });
  };

  const featureIcons = [
    <Compass className="w-10 h-10 text-emerald-500 mb-4" key="feature-icon-1" />,
    <Search className="w-10 h-10 text-emerald-500 mb-4" key="feature-icon-2" />,
    <Users className="w-10 h-10 text-emerald-500 mb-4" key="feature-icon-3" />,
    <WifiOff className="w-10 h-10 text-emerald-500 mb-4" key="feature-icon-4" />,
    <Brain className="w-10 h-10 text-emerald-500 mb-4" key="feature-icon-5" />,
    <MessageSquare className="w-10 h-10 text-emerald-500 mb-4" key="feature-icon-6" />
  ];

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

        {/* About Section */}
        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">{tAbout('title')}</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image 
                  src="/images/about_us_image.png" // Replace with an actual image path
                  alt={tAbout('image_alt')} // Add alt text to translations
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">{tAbout('paragraph1')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Leaf className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{tAbout('bullet1')}</span>
                  </li>
                  <li className="flex items-start">
                    <Compass className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{tAbout('bullet2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{tAbout('bullet3')}</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700">{tAbout('paragraph2')}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800" id="features" aria-labelledby="features-heading">
          <motion.div 
            className="container mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            <motion.h2 
              id="features-heading" 
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
              variants={fadeIn}
            >
              {tFeatures('title')}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={`feature-${i}`}
                  className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                >
                  {featureIcons[i-1]}
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">{tFeatures(`feature${i}_title`)}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{tFeatures(`feature${i}_desc`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Offline Capabilities (Example of how to refactor other sections) */}
        <motion.section 
          className="py-16 bg-white dark:bg-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
              variants={fadeIn}
            >
              {tOffline('title')}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              {tOffline('intro')}
            </motion.p>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-12"
              variants={staggerChildren}
            >
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={`offline-cap-${i}`}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <MapPin className="w-8 h-8 text-emerald-500 mb-3" /> {/* Example Icon */}
                  <p className="font-semibold text-gray-700 dark:text-gray-200">{tOffline(`capability${i}`)}</p>
                </motion.div>
              ))}
            </motion.div>

            {tOffline('libraries_title') && (
              <motion.div className="max-w-4xl mx-auto" variants={fadeIn}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{tOffline('libraries_title')}</h3>
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm"
                  variants={staggerChildren}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    tOffline(`library${i}`) && (
                      <motion.div 
                        key={`offline-lib-${i}`} 
                        className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-700 transition-colors duration-200"
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tOffline(`library${i}`)}
                      </motion.div>
                    )
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          className="py-20 bg-emerald-600 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{tCta('title')}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{tCta('subtitle')}</p>
            
            {/* Benefits List */}
            <motion.ul 
              className="max-w-2xl mx-auto mb-10 text-left space-y-3 bg-emerald-700/30 p-6 rounded-lg"
              variants={staggerChildren}
            >
              {(tCta('benefits') as unknown as string[]).map((benefit: string, index: number) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-lg font-medium"
                  variants={fadeIn}
                >
                  <span className="text-emerald-300">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="https://apps.apple.com/app/wildscope"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackAppStoreClick}
                className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.722 19.786c-.063.12-.143.24-.232.336-.336.36-.907.504-1.454.504-.318 0-.63-.048-.936-.156a2.416 2.416 0 01-.906-.516l-3.24-2.832-3.234 2.832c-.27.228-.576.396-.906.516a2.7 2.7 0 01-.936.156 2.19 2.19 0 01-1.458-.504 1.25 1.25 0 01-.228-.336 2.016 2.016 0 01-.192-.912V4.824c0-.324.066-.624.192-.912a1.25 1.25 0 01.228-.336c.336-.36.91-.504 1.458-.504.318 0 .63.048.936.156.33.12.636.288.906.516L12 6.576l3.24-2.832c.27-.228.576-.396.906-.516.306-.108.618-.156.936-.156.547 0 1.118.144 1.454.504.089.096.17.216.232.336.126.288.192.588.192.912v14.05c0 .324-.066.624-.192.912zm-4.446-6.924l3.432 3.001V5.421L13.276 8.4l3.438-2.988v2.496l-3.438 2.982z" />
                </svg>
                {tCta('appstore')}
              </motion.a>
              
              <motion.a 
                href={tCta('playstoreLink')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackPlayStoreClick}
                className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.186 4.352C2.575 5.027 2.25 6.046 2.25 7.357v9.286c0 1.311.325 2.33.936 3.005l.117.129.188-.117 8.97-5.196V9.536L3.373 4.223l-.187-.117-.117.13.117.116z" />
                  <path d="M17.73 11l-3.75-2.143-9.938-5.679 9.938 5.679L17.73 11z" />
                  <path d="M21.436 11L17.26 8.571 14 6.429v11.142l3.26-2.143 4.176-2.428V11z" />
                  <path d="M13.53 19.446l-9.966-5.732-.188-.117-.118.13.118.116.118.13.187.117 9.85 5.732.187.117.117-.13-.117-.116.118-.13-.188-.117-.118.13z" />
                </svg>
                {tCta('playstore')}
              </motion.a>
            </div>
            <p className="mt-4 text-sm font-medium text-emerald-100">Available worldwide. Free download with optional premium features.</p>
          </div>
        </motion.section>
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