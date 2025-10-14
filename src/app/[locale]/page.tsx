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

  // Locale-specific metadata
  const metaData: Record<string, { title: string; description: string }> = {
    de: {
      title: '7 vs Wild App - Wildscope | KI-gestützte Wildtier-Erkennung & Survival-App | Partner für Nationalparks',
      description: 'Die offizielle 7 vs Wild App präsentiert in Staffel 5 Amazonas! KI-Wildtier-Erkennung, Offline-Navigation & Survival-Skills. Partnerschaft für Nationalparks, Tierparks und Naturschutzgebiete verfügbar.'
    },
    en: {
      title: 'Wildscope - AI Wildlife Identification & Nature Exploration App',
      description: 'Discover wildlife, explore nature, and track animals with our AI-powered outdoor companion app. Works offline for wilderness adventures anywhere.'
    },
    es: {
      title: 'App Gratuita de Identificación de Fauna con IA | Wildscope',
      description: 'Descubre y identifica la fauna silvestre con tecnología IA, explora la naturaleza con mapas sin conexión. Perfecto para senderismo y fotografía natural.'
    },
    fr: {
      title: 'Application Gratuite d\'Identification de la Faune avec IA | Wildscope',
      description: 'Découvrez et identifiez la faune avec l\'IA, explorez la nature avec cartes hors ligne. Parfait pour la randonnée et la photographie nature.'
    },
    it: {
      title: 'App Gratuita di Identificazione della Fauna con IA | Wildscope',
      description: 'Scopri e identifica la fauna con tecnologia IA, esplora la natura con mappe offline. Perfetto per escursionismo e fotografia naturalistica.'
    },
    pt: {
      title: 'App Gratuito de Identificação de Vida Selvagem com IA | Wildscope',
      description: 'Descubra e identifique a vida selvagem com IA, explore a natureza com mapas offline. Perfeito para trilhas e fotografia natural.'
    },
    ja: {
      title: '無料AI搭載野生動物識別アプリ | Wildscope',
      description: 'AIで野生動物を発見・識別。オフライン地図で自然探索。ハイキング、バードウォッチング、自然写真に最適。'
    }
  };

  const currentMeta = metaData[locale] || metaData.en;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: '%s | Wildscope',
      default: currentMeta.title
    },
    description: currentMeta.description,
    keywords: locale === 'de' 
      ? 'Wildscope, 7 vs Wild App, Nationalpark App, Tierpark App, Naturschutzgebiet digitalisierung, KI Tier-Erkennung, Pflanzenbestimmung, Offline-Navigation, Survival App, Outdoor App, Wandern App, Natur App, Wildtier Tracking, GPS Navigation, Partner Nationalparks'
      : 'Wildscope, AI wildlife identification, nature app, offline maps, plant identification, animal tracking, outdoor companion, hiking app, survival guide, GPS navigation, wildlife photography',
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `${baseUrl}/${locale}`,
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
      title: currentMeta.title,
      description: currentMeta.description,
      images: [`${baseUrl}/images/og/og-image-${locale}.png`]
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
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