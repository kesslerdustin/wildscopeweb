import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultLocale } from "../../i18n";
import { Analytics } from "@vercel/analytics/react";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com'),
  title: {
    template: '%s | Wildscope - Wildlife Tracking & Outdoor Adventure App',
    default: 'Wildscope - Wildlife Tracking & Outdoor Adventure App'
  },
  description: "Discover Wildscope - Your comprehensive wildlife identification and outdoor adventure companion. Explore nature with AI-powered species recognition, offline maps, and interactive tracking tools.",
  applicationName: 'Wildscope',
  authors: [{ name: 'Wildscope Team' }],
  creator: 'Wildscope',
  publisher: 'Wildscope',
  keywords: [
    'wildlife tracking app', 
    'outdoor adventure app', 
    'nature exploration', 
    'species identification', 
    'plant identification', 
    'offline hiking maps', 
    'AI wildlife recognition', 
    'animal tracking app', 
    'outdoor companion app', 
    'adventure tool', 
    'nature discovery', 
    'biodiversity app', 
    'wildlife observation', 
    'nature guide app',
    'wildlife identification',
    'mobile wildlife tracker'
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
    icon: '/favicon.ico',
    apple: '/images/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'your-google-site-verification-if-available',
    other: {
      'facebook-domain-verification': process.env.NEXT_PUBLIC_FB_VERIFICATION || 'your-facebook-verification-if-available',
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com',
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
  category: 'outdoor,travel,nature,wildlife,adventure',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com'} />
        {/* Preload critical assets */}
        <link rel="preload" href="/images/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/images/header.png" as="image" type="image/png" />
        
        {/* Add DNS prefetching for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://wildscope.com" />
        
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
                "url": "https://wildscope.com"
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