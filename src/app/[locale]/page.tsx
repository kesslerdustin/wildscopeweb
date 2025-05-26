import {unstable_setRequestLocale} from 'next-intl/server';
import WildscopeHome from '@/app/components/WildscopeHome';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

type Props = {
  params: {locale: string};
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: '%s | Wildscope',
      default: 'Wildscope - AI Wildlife Identification & Nature Exploration App'
    },
    description: 'Discover wildlife, explore nature, and track animals with our AI-powered outdoor companion app. Works offline for wilderness adventures anywhere.',
    openGraph: {
      title: 'Wildscope - AI Wildlife Identification & Nature Exploration App',
      description: 'Discover wildlife, explore nature, and track animals with our AI-powered outdoor companion app. Works offline for wilderness adventures anywhere.',
      url: baseUrl,
      siteName: 'Wildscope',
      images: [
        {
          url: `${baseUrl}/images/og/og-image-${locale}.png`,
          width: 1200,
          height: 630,
          alt: 'Wildscope App Preview'
        }
      ],
      locale: locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Wildscope - AI Wildlife Identification & Nature Exploration App',
      description: 'Discover wildlife, explore nature, and track animals with our AI-powered outdoor companion app.',
      images: [`${baseUrl}/images/og/og-image-${locale}.png`]
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`,
        'fr': `${baseUrl}/fr`,
        'es': `${baseUrl}/es`,
        'it': `${baseUrl}/it`,
        'pt': `${baseUrl}/pt`,
        'ja': `${baseUrl}/ja`
      }
    }
  };
}

// Server Component to handle the locale setting
export default function HomePage({params: {locale}}: Props) {
  // Server-side function to set the locale
  unstable_setRequestLocale(locale);
  
  // Render the client component with the locale
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <WildscopeHome locale={locale} />
    </>
  );
} 