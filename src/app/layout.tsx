import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultLocale } from "../../i18n";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
  keywords: ['wildlife tracking', 'outdoor adventure app', 'nature exploration', 'species identification', 'offline hiking maps', 'AI wildlife recognition', 'outdoor companion', 'adventure tool', 'nature discovery'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
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
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 