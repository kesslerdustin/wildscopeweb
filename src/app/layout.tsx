import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultLocale } from "../../i18n/request";
import { Analytics } from "@vercel/analytics/react";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app'),
  title: {
    template: '%s | Wildscope - AI Wildlife & Survival Guide',
    default: 'Wildscope: AI Wildlife Identification & Outdoor Survival App | Official Site'
  },
  description: "Official Wildscope website - Download the #1 AI-powered wildlife identification and survival app. Features text adventures, species tracking, compass navigation, offline maps, and nature exploration tools.",
  applicationName: 'Wildscope',
  authors: [{ name: 'Wildscope Team', url: 'https://www.wildscope.app' }],
  creator: 'Wildscope',
  publisher: 'Wildscope',
  keywords: [
    'wildscope',
    'wildscope official',
    'wildscope website',
    'wildscope app download',
    'wildscope mobile app',
    'wildscope ai wildlife app',
    'wildscope nature app',
    'wildscope survival app',
    'ai wildlife identification',
    'wildlife tracking app',
    'survival tool app',
    'compass navigation app',
    'species identification app',
    'text adventure survival',
    'offline hiking maps',
    'nature exploration app',
    'outdoor survival guide',
    'ai species recognition',
    'plant identification ai',
    'animal tracking app',
    'wilderness survival app',
    'outdoor navigation tool',
    'interactive nature guide',
    'wildlife observation app',
    'nature discovery app',
    'biodiversity tracker',
    'gps compass navigation',
    'offline survival guide',
    'ai nature companion',
    'wilderness exploration app',
    'species database app',
    'outdoor safety tool',
    'nature identification app',
    'wildlife guide app',
    'survival game app',
    'outdoor adventure app',
    'hiking companion app',
    'nature education app',
    'ecosystem tracker'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'your-google-site-verification-if-available',
    other: {
      'facebook-domain-verification': process.env.NEXT_PUBLIC_FB_VERIFICATION || 'your-facebook-verification-if-available',
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Wildscope',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  category: 'outdoor, travel, nature, wildlife, adventure, survival, education',
  other: {
    'apple-itunes-app': 'app-id=6741471953',
    'google-play-app': 'app-id=com.duselk.theoutdoorbible'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app'} />
        
        {/* Favicon declarations for all browsers and Google */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Additional favicon formats for better compatibility */}
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#10b981" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/images/header.png" as="image" type="image/png" />
        
        {/* Add DNS prefetching for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.wildscope.app" />
        
        {/* JSON-LD structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Wildscope",
              "description": "Wildlife tracking and outdoor adventure companion app with AI-powered species recognition",
              "operatingSystem": "iOS, Android",
              "applicationCategory": "LifestyleApplication, UtilitiesApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "author": {
                "@type": "Organization",
                "name": "Wildscope Team",
                "url": "https://www.wildscope.app"
              },
              "potentialAction": {
                "@type": "DownloadAction",
                "target": [
                  {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://play.google.com/store/apps/details?id=com.duselk.theoutdoorbible",
                    "actionPlatform": "https://schema.org/AndroidPlatform"
                  }
                  // iOS app coming soon
                ]
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "iOS App",
                  "value": "Coming Soon"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 