'use client';

import React, { useRef, useState } from 'react';
import {useTranslations} from 'next-intl';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { motion } from 'framer-motion';
import { Database, Cloud, Camera, Map, Shield, Clock } from 'lucide-react';

type WildscopeHomeProps = {
  locale: string;
};

export default function WildscopeHome({ locale }: WildscopeHomeProps) {
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

  // Create a ref for the download section
  const downloadSectionRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the download section
  const scrollToDownload = () => {
    downloadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const featureIcons = [
    <Database className="w-10 h-10 text-emerald-500 mb-4" key="database" />,
    <Cloud className="w-10 h-10 text-emerald-500 mb-4" key="cloud" />,
    <Camera className="w-10 h-10 text-emerald-500 mb-4" key="camera" />,
    <Map className="w-10 h-10 text-emerald-500 mb-4" key="map" />,
    <Shield className="w-10 h-10 text-emerald-500 mb-4" key="shield" />,
    <Clock className="w-10 h-10 text-emerald-500 mb-4" key="clock" />
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white py-20 md:py-32 relative">
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <Image
              src="/images/header.png"
              alt="Header background"
              fill
              priority
              className="object-cover opacity-30"
            />
          </div>
          <motion.div 
            className="container mx-auto px-6 text-center relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg inline-block mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
                {t('title')}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-800">
                {t('subtitle')}
              </p>
              <motion.button 
                className="bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                onClick={scrollToDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cta')}
              </motion.button>
              <p className="mt-3 text-sm font-semibold text-gray-700">{t('cta_subtext')}</p>
            </div>
          </motion.div>
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
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">{tAbout('paragraph1')}</p>
              <p className="text-lg text-gray-600">{tAbout('paragraph2')}</p>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <motion.div 
            className="container mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
              variants={fadeIn}
            >
              {tFeatures('title')}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col items-center">
                    {featureIcons[i-1]}
                  </div>
                  <div className="mb-4 overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(`/images/img${i}.png`)}>
                    <Image 
                      src={`/images/img${i}.png`}
                      alt={tFeatures(`feature${i}_title`)}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFeatures(`feature${i}_title`)}</h3>
                  <p className="text-gray-600">{tFeatures(`feature${i}_desc`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <motion.section 
          className="py-20 bg-emerald-600 text-white" 
          ref={downloadSectionRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{tCta('title')}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{tCta('subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
                onClick={trackAppStoreClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.722 19.786c-.063.12-.143.24-.232.336-.336.36-.907.504-1.454.504-.318 0-.63-.048-.936-.156a2.416 2.416 0 01-.906-.516l-3.24-2.832-3.234 2.832c-.27.228-.576.396-.906.516a2.7 2.7 0 01-.936.156 2.19 2.19 0 01-1.458-.504 1.25 1.25 0 01-.228-.336 2.016 2.016 0 01-.192-.912V4.824c0-.324.066-.624.192-.912a1.25 1.25 0 01.228-.336c.336-.36.91-.504 1.458-.504.318 0 .63.048.936.156.33.12.636.288.906.516L12 6.576l3.24-2.832c.27-.228.576-.396.906-.516.306-.108.618-.156.936-.156.547 0 1.118.144 1.454.504.089.096.17.216.232.336.126.288.192.588.192.912v14.05c0 .324-.066.624-.192.912zm-4.446-6.924l3.432 3.001V5.421L13.276 8.4l3.438-2.988v2.496l-3.438 2.982z" />
                </svg>
                {tCta('appstore')}
              </motion.button>
              <motion.button 
                className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
                onClick={trackPlayStoreClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.186 4.352C2.575 5.027 2.25 6.046 2.25 7.357v9.286c0 1.311.325 2.33.936 3.005l.117.129.188-.117 8.97-5.196V9.536L3.373 4.223l-.187-.117-.117.13.117.116z" />
                  <path d="M17.73 11l-3.75-2.143-9.938-5.679 9.938 5.679L17.73 11z" />
                  <path d="M21.436 11L17.26 8.571 14 6.429v11.142l3.26-2.143 4.176-2.428V11z" />
                  <path d="M13.53 19.446l-9.966-5.732-.188-.117-.118.13.118.116.118.13.187.117 9.85 5.732.187.117.117-.13-.117-.116.118-.13-.188-.117-.118.13z" />
                </svg>
                {tCta('playstore')}
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
              variants={fadeIn}
            >
              {tFaq('title')}
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFaq('question1')}</h3>
                  <p className="text-gray-600">{tFaq('answer1')}</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFaq('question2')}</h3>
                  <p className="text-gray-600">{tFaq('answer2')}</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFaq('question3')}</h3>
                  <p className="text-gray-600">{tFaq('answer3')}</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFaq('question4')}</h3>
                  <p className="text-gray-600">{tFaq('answer4')}</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFaq('question5')}</h3>
                  <p className="text-gray-600">{tFaq('answer5')}</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFaq('question6')}</h3>
                  <p className="text-gray-600">{tFaq('answer6')}</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg shadow"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tFaq('question7')}</h3>
                  <p className="text-gray-600">{tFaq('answer7')}</p>
                </motion.div>
              </div>
            </div>
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