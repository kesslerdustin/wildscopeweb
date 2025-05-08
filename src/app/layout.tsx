import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultLocale } from "../../i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wildscope",
  description: "Discover Wildscope - Your Next Adventure!",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body className={`${inter.className} bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200`}>
        {children}
      </body>
    </html>
  );
} 