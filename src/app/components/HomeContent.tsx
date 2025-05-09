'use client';

import React, { useState } from 'react';
import {useTranslations} from 'next-intl';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { motion } from 'framer-motion';
import { Database, Cloud, Camera, Map, Shield, Clock } from 'lucide-react';

type HomeContentProps = {
  locale: string;
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 drop-shadow-md">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-900 drop-shadow-md">
              {t('subtitle')}
            </p>
            <motion.button 
              className="bg-white text-emerald-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta')}
            </motion.button>
            <p className="mt-3 text-sm font-semibold text-gray-900 drop-shadow-md">{t('cta_subtext')}</p>
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

        {/* Offline Capabilities */}
        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">{tOffline('title')}</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{tOffline('intro')}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg text-center"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="font-semibold text-gray-800">{tOffline('capability1')}</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg text-center"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="font-semibold text-gray-800">{tOffline('capability2')}</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg text-center"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="font-semibold text-gray-800">{tOffline('capability3')}</p>
              </motion.div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{tOffline('libraries_title')}</h3>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                variants={staggerChildren}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.div 
                    key={i} 
                    className="bg-gray-50 p-4 rounded-lg"
                    variants={fadeIn}
                    whileHover={{ scale: 1.03 }}
                  >
                    {tOffline(`library${i}`)}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Online Features */}
        <motion.section 
          className="py-16 bg-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800"
              variants={fadeIn}
            >
              {tOnline('title')}
            </motion.h2>
            <motion.p 
              className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              {tOnline('intro')}
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-6 rounded-lg shadow"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tOnline(`feature${i}_title`)}</h3>
                  <p className="text-gray-600">{tOnline(`feature${i}_desc`)}</p>
                </motion.div>
              ))}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow md:col-span-2"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">{tOnline('feature5_title')}</h3>
                <p className="text-gray-600">{tOnline('feature5_desc')}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Audience Section */}
        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">{tAudience('title')}</h2>
            <p className="text-center text-lg text-gray-600 mb-8">{tAudience('intro')}</p>
            
            <motion.div 
              className="max-w-3xl mx-auto mb-10"
              variants={staggerChildren}
            >
              <ul className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5].map((i, index) => (
                  <motion.li 
                    key={i}
                    className={`flex items-center text-gray-700 ${index === 4 ? 'md:col-span-2 justify-center' : ''}`}
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {tAudience(`audience${i}`)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.p 
              className="text-center text-lg text-gray-600 italic max-w-3xl mx-auto"
              variants={fadeIn}
            >
              {tAudience('conclusion')}
            </motion.p>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="py-16 bg-gray-100"
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
              {tTestimonials('title')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md"
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="text-gray-600 italic mb-6">"{tTestimonials('testimonial1')}"</p>
                <p className="font-semibold text-gray-800">— {tTestimonials('testimonial1_author')}</p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md"
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="text-gray-600 italic mb-6">"{tTestimonials('testimonial2')}"</p>
                <p className="font-semibold text-gray-800">— {tTestimonials('testimonial2_author')}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">{tPricing('title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="border border-gray-200 rounded-lg p-8"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{tPricing('free_title')}</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{tPricing('free_feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{tPricing('free_feature2')}</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="border-2 border-emerald-500 rounded-lg p-8 shadow-lg relative"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{tPricing('pro_title')}</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{tPricing('pro_feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{tPricing('pro_feature2')}</span>
                  </li>
                </ul>
                <motion.button 
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Upgrade to Pro
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section 
          className="py-16 bg-gray-100"
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
            
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{tFaq('question1')}</h3>
                <p className="text-gray-600">{tFaq('answer1')}</p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{tFaq('question2')}</h3>
                <p className="text-gray-600">{tFaq('answer2')}</p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{tFaq('question3')}</h3>
                <p className="text-gray-600">{tFaq('answer3')}</p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Is Wildscope developed by a company?</h3>
                <p className="text-gray-600">
                  No, Wildscope is a one-man hobby project. It's developed and maintained by a single passionate developer in their spare time. 
                  This means updates might take longer, but it also ensures that the app stays true to its original vision of being 
                  a simple, efficient tool for wildlife enthusiasts without corporate influence or pressure to monetize user data.
                </p>
              </motion.div>
            </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
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