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
import { 
  Compass, 
  Brain, 
  Users, 
  Download, 
  BookOpen, 
  MessageCircle,
  Map,
  Leaf,
  Camera,
  BookMarked,
  Award,
  Gamepad2,
  Cloud,
  WifiOff,
  Check
} from 'lucide-react';
import { 
  ArticleJsonLd, 
  SoftwareApplicationJsonLd, 
  AppStoreDataJsonLd,
  FAQJsonLd,
  OrganizationJsonLd,
  WebsiteJsonLd
} from '@/components/JsonLd';

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
  const t7vsWild = useTranslations('SevenVsWild');
  
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

  // Enhanced animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const slideIn = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? 50 : -50
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Function to map img numbers to new order
  const getImageNumber = (index: number) => {
    const imageOrder = {
      1: 6,  // First feature shows image 6
      2: 4,  // Second feature shows image 4
      3: 3,  // Third feature shows image 3
      4: 1,  // Fourth feature shows image 1
      5: 2,  // Fifth feature shows image 2
      6: 5   // Sixth feature shows image 5
    };
    return imageOrder[index as keyof typeof imageOrder] || index;
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ArticleJsonLd />
      <SoftwareApplicationJsonLd />
      <AppStoreDataJsonLd />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white pt-6 pb-12 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <Image
              src="/images/header.png"
              alt="Wildscope - AI Wildlife Identification and Nature Exploration App"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <motion.div 
            className="container mx-auto px-4 sm:px-6 relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="md:flex md:items-center md:gap-8">
              <div className="md:w-2/3 text-center md:text-left">
                <div className="pt-2 pb-8 px-3 sm:p-8 rounded-lg inline-block md:inline-block mx-auto md:mx-0">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg font-display tracking-tight">
                    {t('title')}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto md:mx-0 text-white/90 drop-shadow-md font-display font-medium">
                    {t('subtitle')}
                  </p>

                  {/* Image for Mobile & Tablet */}
                  <div className="md:hidden my-8 flex justify-center items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src="/images/main_image.png"
                        alt="Wildscope App on iPhone"
                        width={300}
                        height={420}
                        priority
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Download Buttons */}
                  <div className="flex flex-col lg:flex-row gap-4 justify-center md:justify-start mb-8">
                    <motion.a
                      href="https://apps.apple.com/us/app/wildscope/id6741471953"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackAppStoreClick}
                      className="bg-black text-white font-display font-semibold py-4 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.722 19.786c-.063.12-.143.24-.232.336-.336.36-.907.504-1.454.504-.318 0-.63-.048-.936-.156a2.416 2.416 0 01-.906-.516l-3.24-2.832-3.234 2.832c-.27.228-.576.396-.906.516a2.7 2.7 0 01-.936.156 2.19 2.19 0 01-1.458-.504 1.25 1.25 0 01-.228-.336 2.016 2.016 0 01-.192-.912V4.824c0-.324.066-.624.192-.912a1.25 1.25 0 01.228-.336c.336-.36.91-.504 1.458-.504.318 0 .63.048.936.156.33.12.636.288.906.516L12 6.576l3.24-2.832c.27-.228.576-.396.906-.516.306-.108.618-.156.936-.156.547 0 1.118.144 1.454.504.089.096.17.216.232.336.126.288.192.588.192.912v14.05c0 .324-.066.624-.192.912zm-4.446-6.924l3.432 3.001V5.421L13.276 8.4l3.438-2.988v2.496l-3.438 2.982z" />
                      </svg>
                      {t('appstore')}
                    </motion.a>
                    <motion.a
                      href="https://play.google.com/store/apps/details?id=com.duselk.theoutdoorbible"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackPlayStoreClick}
                      className="bg-black text-white font-display font-semibold py-4 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.186 4.352C2.575 5.027 2.25 6.046 2.25 7.357v9.286c0 1.311.325 2.33.936 3.005l.117.129.188-.117 8.97-5.196V9.536L3.373 4.223l-.187-.117-.117.13.117.116z" />
                        <path d="M17.73 11l-3.75-2.143-9.938-5.679 9.938 5.679L17.73 11z" />
                        <path d="M21.436 11L17.26 8.571 14 6.429v11.142l3.26-2.143 4.176-2.428V11z" />
                        <path d="M13.53 19.446l-9.966-5.732-.188-.117-.118.13.118.116.118.13.187.117 9.85 5.732.187.117.117-.13-.117-.116.118-.13-.188-.117-.118.13z" />
                      </svg>
                      {t('playstore')}
                    </motion.a>
                  </div>

                  <p className="text-lg font-medium text-white/90 mb-8 font-display">
                    {t('download_subtext')}
                  </p>
                  
                  {/* Key Features Grid */}
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl mx-auto bg-black/20 p-4 sm:p-6 rounded-lg">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center space-x-3 text-left"
                        variants={fadeIn}
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        </span>
                        <span className="text-white/90 text-lg font-display">{t(`feature_${i}`)}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 hidden md:flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src="/images/main_image.png"
                    alt="Wildscope App on iPhone"
                    width={500}
                    height={700}
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 7 vs Wild Section - German only */}
        {locale === 'de' && (
          <motion.section 
            className="py-12 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="container mx-auto px-4 sm:px-8 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Image */}
                  <div className="w-full md:w-2/5">
                    <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
                      <Image
                        src="/images/7vWS5.jpg"
                        alt="Wildscope präsentiert von 7 vs. Wild Staffel 5 Amazonas - Survival App für Outdoor Abenteuer"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-3/5">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-900 font-display tracking-tight">
                      {t7vsWild('title')}
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 mb-4 font-display font-medium leading-relaxed">
                      {t7vsWild('subtitle')}
                    </p>
                    <p className="text-sm md:text-base text-gray-700 font-display leading-relaxed">
                      {t7vsWild('description')}
                    </p>
                    
                    {/* SEO Keywords (visually hidden but readable by search engines) */}
                    <div className="sr-only" aria-hidden="true">
                      {t7vsWild('keywords')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Features Section */}
        <section id="features" className="py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-800 font-display">
              {tFeatures('title')}
            </h2>
            <div className="space-y-24">
              {[1, 2, 3, 4, 5, 6].map((featureNum) => {
                // Define feature-specific colors
                const colors: Record<number, { bg: string; text: string; icon: string }> = {
                  1: { bg: 'bg-emerald-50/50', text: 'text-emerald-800', icon: 'text-emerald-600' },
                  2: { bg: 'bg-sky-50/60', text: 'text-sky-800', icon: 'text-sky-600' },
                  3: { bg: 'bg-violet-50/50', text: 'text-violet-800', icon: 'text-violet-600' },
                  4: { bg: 'bg-amber-50/60', text: 'text-amber-800', icon: 'text-amber-600' },
                  5: { bg: 'bg-rose-50/50', text: 'text-rose-800', icon: 'text-rose-600' },
                  6: { bg: 'bg-teal-50/60', text: 'text-teal-800', icon: 'text-teal-600' }
                };

                return (
                  <motion.div
                    key={featureNum}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 p-4 sm:p-8 rounded-2xl ${
                      featureNum % 2 === 0 ? colors[featureNum].bg : ''
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideIn}
                    custom={featureNum % 2 === 0}
                  >
                    {/* Image container */}
                    <div className={`w-full md:w-1/4 flex items-center justify-center ${featureNum % 2 === 0 ? 'md:order-last' : ''}`}>
                      <div className="relative w-full max-w-[280px] md:max-w-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all duration-300 group"
                           onClick={() => setSelectedImage(`/images/img${getImageNumber(featureNum)}_${locale}.png`)}>
                        <div className="relative aspect-[3/5] md:aspect-[2/3] h-[500px] md:h-[600px] bg-gray-50 flex items-center justify-center">
                          {/* Background blur for image */}
                          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                            <Image
                              src={`/images/img${getImageNumber(featureNum)}_${locale}.png`}
                              alt=""
                              fill
                              className="object-cover blur-xl opacity-30 scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = `/images/img${getImageNumber(featureNum)}_en.png`;
                              }}
                            />
                          </div>
                          {/* Main image */}
                          <div className="relative z-10 h-full w-full flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">
                              <Image
                                src={`/images/img${getImageNumber(featureNum)}_${locale}.png`}
                                alt={tFeatures(`img${featureNum}_alt`)}
                                fill
                                className="object-contain scale-[1.15] md:scale-[1.2] translate-x-[-8%]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  target.src = `/images/img${getImageNumber(featureNum)}_en.png`;
                                }}
                              />
                            </div>
                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="w-full md:w-3/4 space-y-6">
                      <h3 className={`text-2xl md:text-3xl font-bold font-display tracking-tight ${colors[featureNum].text}`}>
                        {tFeatures(`feature${featureNum}_title`)}
                      </h3>
                      <p className={`text-lg font-display font-medium ${
                        featureNum === 1 ? 'text-gray-500' : 
                        featureNum % 2 === 0 ? 'text-gray-900/80' : 'text-gray-600'
                      }`}>
                        {tFeatures(`feature${featureNum}_desc`)}
                      </p>
                      <ul className="space-y-4">
                        {[1, 2, 3].map((pointNum) => (
                          <li key={pointNum} className="flex items-start space-x-3">
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center mt-1`}>
                              <Check className={`w-4 h-4 ${colors[featureNum].icon}`} />
                            </span>
                            <span className={`font-display font-medium ${
                              featureNum === 1 ? 'text-gray-500' : 
                              featureNum % 2 === 0 ? 'text-gray-900/80' : 'text-gray-600'
                            }`}>
                              {tFeatures(`feature${featureNum}_point${pointNum}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <motion.section 
          className="py-16 bg-white overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">{tAbout('title')}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">{tAbout('paragraph1')}</p>
              <p className="text-lg text-gray-600 mb-8">{tAbout('paragraph2')}</p>
              
              {/* Add darklite image with rounded edges */}
              <div className="w-full flex justify-center">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-2xl">
                  <Image 
                    src={`/images/darklite_${locale}.png`}
                    alt={`${tAbout('title')} - Wildscope app interface showing wildlife identification features`}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                    priority
                    onError={(e) => {
                      // Fallback to English if localized image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = `/images/darklite_en.png`;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section 
          id="download"
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
              <motion.a
                href="https://apps.apple.com/us/app/wildscope/id6741471953"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackAppStoreClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  className="bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center w-full"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.722 19.786c-.063.12-.143.24-.232.336-.336.36-.907.504-1.454.504-.318 0-.63-.048-.936-.156a2.416 2.416 0 01-.906-.516l-3.24-2.832-3.234 2.832c-.27.228-.576.396-.906.516a2.7 2.7 0 01-.936.156 2.19 2.19 0 01-1.458-.504 1.25 1.25 0 01-.228-.336 2.016 2.016 0 01-.192-.912V4.824c0-.324.066-.624.192-.912a1.25 1.25 0 01.228-.336c.336-.36.91-.504 1.458-.504.318 0 .63.048.936.156.33.12.636.288.906.516L12 6.576l3.24-2.832c.27-.228.576-.396.906-.516.306-.108.618-.156.936-.156.547 0 1.118.144 1.454.504.089.096.17.216.232.336.126.288.192.588.192.912v14.05c0 .324-.066.624-.192.912zm-4.446-6.924l3.432 3.001V5.421L13.276 8.4l3.438-2.988v2.496l-3.438 2.982z" />
                  </svg>
                  {tCta('appstore')}
                </button>
              </motion.a>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.duselk.theoutdoorbible"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackPlayStoreClick}
                className="bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group"
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
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Online Features Section - MOVED UP */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-emerald-800 font-display tracking-tight">
              {tOnline('title')}
            </h2>
            <p className="text-lg text-center mb-16 text-gray-700 font-display font-medium">
              {tOnline('intro')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((featureNum) => (
                <motion.div
                  key={featureNum}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-emerald-700 font-display tracking-tight">
                    {tOnline(`feature${featureNum}_title`)}
                  </h3>
                  <p className="text-gray-900/80 font-display font-medium">
                    {tOnline(`feature${featureNum}_desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Offline Capabilities Section - MOVED UP */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-emerald-800 font-display tracking-tight">
              {tOffline('title')}
            </h2>
            <p className="text-lg text-center mb-16 text-gray-700 font-display font-medium">
              {tOffline('intro')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Capabilities */}
              <div className="col-span-full lg:col-span-1">
                <div className="bg-emerald-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6 text-emerald-800 font-display tracking-tight">
                    {tOffline('capabilities_title')}
                  </h3>
                  <ul className="space-y-4">
                    {[1, 2, 3].map((capNum) => (
                      <li key={capNum} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        </span>
                        <span className="text-gray-900/80 font-display font-medium">
                          {tOffline(`capability${capNum}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Knowledge Libraries */}
              <div className="col-span-full lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-emerald-800 font-display tracking-tight">
                    {tOffline('libraries_title')}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((libNum) => (
                      <div key={libNum} className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-emerald-500" />
                        </span>
                        <span className="text-gray-900/80 font-display font-medium">
                          {tOffline(`library${libNum}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - MOVED DOWN */}
        <motion.section 
          id="faq"
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight"
              variants={fadeIn}
            >
              {tFaq('title')}
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[1, 2, 3, 4, 5, 6, 7, ...(locale === 'de' ? [8] : [])].map((num) => (
                  <motion.div 
                    key={num}
                    className="bg-gray-50 p-6 rounded-lg shadow"
                    variants={fadeIn}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-emerald-600 tracking-tight">{tFaq(`question${num}`)}</h3>
                    <p className="text-gray-700 font-medium">{tFaq(`answer${num}`)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
      <CookieBanner />
      
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
} 