import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { locales } from '../../../i18n/request';
import type { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
  // Define title and description by locale
  const titles = {
    en: 'Wildscope - AI Wildlife Guide & Outdoor Survival App',
    de: 'Wildscope - KI-Wildlife-Guide & Outdoor-Überlebens-App',
    fr: 'Wildscope - Guide Animalier IA & App de Survie en Plein Air',
    it: 'Wildscope - Guida Naturalistica AI & App di Sopravvivenza Outdoor',
    es: 'Wildscope - Guía de Vida Silvestre con IA & App de Supervivencia',
    pt: 'Wildscope - Guia de Vida Selvagem com IA & App de Sobrevivência',
    ja: 'Wildscope - AI野生動物ガイド & アウトドアサバイバルアプリ'
  };

  const descriptions = {
    en: 'Wildscope combines AI wildlife identification, survival tools, compass navigation, and interactive text adventures. Explore nature with species recognition, offline maps, and tracking tools.',
    de: 'Wildscope vereint KI-Wildtierbestimmung, Überlebenswerkzeuge, Kompassnavigation und interaktive Textabenteuer. Erkunden Sie die Natur mit Artenerkennung, Offline-Karten und Tracking-Tools.',
    fr: 'Wildscope combine l\'identification de la faune par IA, des outils de survie, la navigation par boussole et des aventures textuelles interactives. Explorez la nature avec la reconnaissance des espèces, des cartes hors ligne et des outils de suivi.',
    it: 'Wildscope combina identificazione della fauna con AI, strumenti di sopravvivenza, navigazione con bussola e avventure testuali interattive. Esplora la natura con riconoscimento delle specie, mappe offline e strumenti di tracciamento.',
    es: 'Wildscope combina identificación de vida silvestre con IA, herramientas de supervivencia, navegación por brújula y aventuras de texto interactivas. Explore la naturaleza con reconocimiento de especies, mapas sin conexión y herramientas de seguimiento.',
    pt: 'Wildscope combina identificação de vida selvagem com IA, ferramentas de sobrevivência, navegação por bússola e aventuras de texto interativas. Explore a natureza com reconhecimento de espécies, mapas offline e ferramentas de rastreamento.',
    ja: 'WildscopeはAI野生動物識別、サバイバルツール、コンパスナビゲーション、インタラクティブテキストアドベンチャーを組み合わせています。種の認識、オフラインマップ、追跡ツールで自然を探索しましょう。'
  };

  const keywords = {
    en: 'wildscope app, survival tool, compass app, species identification, text adventure, ai wildlife guide, offline maps, plant identification, wilderness survival, outdoor navigation',
    de: 'Wildscope App, Überlebens-Tool, Kompass-App, Artenerkennung, Textabenteuer, KI-Wildtierführer, Offline-Karten, Pflanzenbestimmung, Wildnisüberleben, Outdoor-Navigation',
    fr: 'application Wildscope, outil de survie, application boussole, identification des espèces, aventure textuelle, guide animalier IA, cartes hors ligne, identification des plantes, survie en milieu sauvage, navigation en plein air',
    it: 'app Wildscope, strumento di sopravvivenza, app bussola, identificazione specie, avventura testuale, guida fauna AI, mappe offline, identificazione piante, sopravvivenza wilderness, navigazione outdoor',
    es: 'aplicación Wildscope, herramienta de supervivencia, aplicación brújula, identificación de especies, aventura de texto, guía de vida silvestre IA, mapas sin conexión, identificación de plantas, supervivencia en la naturaleza, navegación al aire libre',
    pt: 'aplicativo Wildscope, ferramenta de sobrevivência, app bússola, identificação de espécies, aventura de texto, guia de vida selvagem IA, mapas offline, identificação de plantas, sobrevivência na natureza, navegação ao ar livre',
    ja: 'Wildscopeアプリ, サバイバルツール, コンパスアプリ, 種の識別, テキストアドベンチャー, AI野生動物ガイド, オフラインマップ, 植物識別, 野外生存, アウトドアナビゲーション'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: keywords[locale as keyof typeof keywords] || keywords.en,
    applicationName: 'Wildscope',
    authors: [{ name: 'Wildscope Team', url: baseUrl }],
    generator: 'Next.js',
    creator: 'Wildscope',
    publisher: 'Wildscope',
    formatDetection: {
      telephone: false,
      email: false,
      address: false
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale === 'en' ? '' : locale}`,
      languages: {
        ...Object.fromEntries(
          locales.map(loc => [loc, `${baseUrl}/${loc === 'en' ? '' : loc}`])
        ),
        'x-default': `${baseUrl}/`
      }
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      url: `${baseUrl}/${locale === 'en' ? '' : locale}`,
      siteName: 'Wildscope',
      locale: locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og/og-image-${locale}.png`,
          width: 1200,
          height: 630,
          alt: titles[locale as keyof typeof titles] || titles.en
        },
        {
          url: `${baseUrl}/images/og/og-image.png`, // Fallback
          width: 1200,
          height: 630,
          alt: 'Wildscope - Wildlife Tracking & Outdoor Adventure App'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      images: [`${baseUrl}/images/og/og-image-${locale}.png`, `${baseUrl}/images/og/og-image.png`],
      creator: '@wildscope',
      site: '@wildscope'
    },
    category: 'outdoor,travel,nature,wildlife,adventure',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    other: {
      // App Store meta tags
      'apple-itunes-app': 'app-id=6741471953',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Wildscope',
      // Android app links
      'google-play-app': 'app-id=com.wildscope.app',
      // App Links
      'al:ios:app_store_id': '6741471953',
      'al:ios:app_name': 'Wildscope',
      'al:ios:url': 'wildscope://',
      'al:android:package': 'com.wildscope.app',
      'al:android:app_name': 'Wildscope',
      'al:android:url': 'wildscope://',
      'al:web:url': baseUrl,
      // Twitter app cards
      'twitter:app:name:iphone': 'Wildscope',
      'twitter:app:id:iphone': '6741471953',
      'twitter:app:url:iphone': 'wildscope://',
      'twitter:app:name:ipad': 'Wildscope',
      'twitter:app:id:ipad': '6741471953',
      'twitter:app:url:ipad': 'wildscope://',
      'twitter:app:name:googleplay': 'Wildscope',
      'twitter:app:id:googleplay': 'com.wildscope.app',
      'twitter:app:url:googleplay': 'wildscope://'
    }
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages({locale});
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';

  // Define localized titles and descriptions
  const titles = {
    en: 'Wildscope - AI Wildlife Guide & Outdoor Survival App',
    de: 'Wildscope - KI-Wildlife-Guide & Outdoor-Überlebens-App',
    fr: 'Wildscope - Guide Animalier IA & App de Survie en Plein Air',
    it: 'Wildscope - Guida Naturalistica AI & App di Sopravvivenza Outdoor',
    es: 'Wildscope - Guía de Vida Silvestre con IA & App de Supervivencia',
    pt: 'Wildscope - Guia de Vida Selvagem com IA & App de Sobrevivência',
    ja: 'Wildscope - AI野生動物ガイド & アウトドアサバイバルアプリ'
  };

  const descriptions = {
    en: 'Wildscope combines AI wildlife identification, survival tools, compass navigation, and interactive text adventures. Explore nature with species recognition, offline maps, and tracking tools.',
    de: 'Wildscope vereint KI-Wildtierbestimmung, Überlebenswerkzeuge, Kompassnavigation und interaktive Textabenteuer. Erkunden Sie die Natur mit Artenerkennung, Offline-Karten und Tracking-Tools.',
    fr: 'Wildscope combine l\'identification de la faune par IA, des outils de survie, la navigation par boussole et des aventures textuelles interactives. Explorez la nature avec la reconnaissance des espèces, des cartes hors ligne et des outils de suivi.',
    it: 'Wildscope combina identificazione della fauna con AI, strumenti di sopravvivenza, navigazione con bussola e avventure testuali interattive. Esplora la natura con riconoscimento delle specie, mappe offline e strumenti di tracciamento.',
    es: 'Wildscope combina identificación de vida silvestre con IA, herramientas de supervivencia, navegación por brújula y aventuras de texto interactivas. Explore la naturaleza con reconocimiento de especies, mapas sin conexión y herramientas de seguimiento.',
    pt: 'Wildscope combina identificação de vida selvagem com IA, ferramentas de sobrevivência, navegação por bússola e aventuras de texto interativas. Explore a natureza com reconhecimento de espécies, mapas offline e ferramentas de rastreamento.',
    ja: 'WildscopeはAI野生動物識別、サバイバルツール、コンパスナビゲーション、インタラクティブテキストアドベンチャーを組み合わせています。種の認識、オフラインマップ、追跡ツールで自然を探索しましょう。'
  };

  // For iOS app coming soon messages
  const iosAppMessages = {
    en: "Coming Soon",
    de: "Demnächst verfügbar",
    fr: "Bientôt disponible",
    it: "Prossimamente",
    es: "Próximamente",
    pt: "Em breve",
    ja: "近日公開"
  };

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Script id="schema-localized" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "Wildscope",
          "description": descriptions[locale as keyof typeof descriptions] || descriptions.en,
          "operatingSystem": "iOS, Android",
          "applicationCategory": "LifestyleApplication, UtilitiesApplication",
          "inLanguage": locale,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Organization",
            "name": "Wildscope Team",
            "url": baseUrl
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "iOS App",
              "value": iosAppMessages[locale as keyof typeof iosAppMessages] || iosAppMessages.en
            }
          ]
        })
      }} />
      {children}
    </NextIntlClientProvider>
  );
} 