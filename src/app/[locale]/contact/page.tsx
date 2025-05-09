import {unstable_setRequestLocale} from 'next-intl/server';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: {locale: string};
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  // Define title by locale
  const titles = {
    en: 'Contact Us | Wildscope',
    de: 'Kontaktiere Uns | Wildscope',
    fr: 'Contactez-Nous | Wildscope',
    it: 'Contattaci | Wildscope',
    es: 'Contáctenos | Wildscope',
    pt: 'Contate-Nos | Wildscope',
    ja: 'お問い合わせ | Wildscope'
  };
  
  return {
    title: titles[params.locale as keyof typeof titles] || titles.en,
    alternates: {
      canonical: `${baseUrl}/${params.locale}/contact`,
      languages: {
        en: `${baseUrl}/en/contact`,
        de: `${baseUrl}/de/contact`,
        fr: `${baseUrl}/fr/contact`,
        it: `${baseUrl}/it/contact`,
        es: `${baseUrl}/es/contact`,
        pt: `${baseUrl}/pt/contact`,
        ja: `${baseUrl}/ja/contact`,
      }
    }
  };
}

export default function ContactPage({params: {locale}}: Props) {
  // Server-side function to set the locale
  unstable_setRequestLocale(locale);
  const t = useTranslations('ContactPage');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: t('title'), url: `${baseUrl}/${locale}/contact` }
  ];
  
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <div className="container mx-auto py-8">
        {/* Breadcrumb UI */}
        <nav className="flex mb-4 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href={`/${locale}`} className="inline-flex items-center text-gray-600 hover:text-blue-600">
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-500">{t('title')}</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
        <p className="mb-4">{t('contact_intro')}</p>
      </div>
    </>
  );
} 