import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { locales } from '../../../i18n';
import type { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  // Define title and description by locale
  const titles = {
    en: 'Wildscope - Wildlife Tracking & Outdoor Adventure App',
    de: 'Wildscope - Wildlife-Tracking & Outdoor-Abenteuer-App',
    fr: 'Wildscope - Application de Suivi de la Faune et d\'Aventure en Plein Air',
    it: 'Wildscope - App di Tracciamento della Fauna Selvatica e Avventura all\'Aperto',
    es: 'Wildscope - Aplicación de Seguimiento de Vida Silvestre y Aventuras al Aire Libre',
    pt: 'Wildscope - Aplicativo de Rastreamento de Vida Selvagem e Aventura ao Ar Livre',
    ja: 'Wildscope - 野生動物追跡＆アウトドアアドベンチャーアプリ'
  };

  const descriptions = {
    en: 'Wildscope is your AI-powered wildlife identification and outdoor adventure companion. Explore nature with species recognition, offline hiking maps, and interactive tracking tools.',
    de: 'Wildscope ist Ihr KI-gestützter Begleiter für Wildtierbestimmung und Outdoor-Abenteuer. Erkunden Sie die Natur mit Artenbestimmung, Offline-Wanderkarten und interaktiven Tracking-Tools.',
    fr: 'Wildscope est votre compagnon d\'identification de la faune et d\'aventure en plein air alimenté par l\'IA. Explorez la nature avec la reconnaissance des espèces, des cartes de randonnée hors ligne et des outils de suivi interactifs.',
    it: 'Wildscope è il tuo compagno di identificazione della fauna selvatica e avventura all\'aperto alimentato dall\'intelligenza artificiale. Esplora la natura con il riconoscimento delle specie, mappe escursionistiche offline e strumenti di tracciamento interattivi.',
    es: 'Wildscope es su compañero de identificación de vida silvestre y aventura al aire libre impulsado por IA. Explore la naturaleza con reconocimiento de especies, mapas de senderismo sin conexión y herramientas de seguimiento interactivas.',
    pt: 'Wildscope é seu companheiro de identificação de vida selvagem e aventura ao ar livre com tecnologia de IA. Explore a natureza com reconhecimento de espécies, mapas de caminhada offline e ferramentas interativas de rastreamento.',
    ja: 'Wildscopeは、AI搭載の野生動物識別およびアウトドアアドベンチャーコンパニオンです。種の認識、オフラインハイキングマップ、インタラクティブな追跡ツールで自然を探索しましょう。'
  };

  const keywords = {
    en: 'wildlife tracking app, animal identification, nature app, outdoor adventure, AI species recognition, hiking companion, offline maps, plant identification, biodiversity tracker, wildlife observation',
    de: 'Wildtier-Tracking-App, Tieridentifikation, Natur-App, Outdoor-Abenteuer, KI-Artenerkennung, Wanderbegleiter, Offline-Karten, Pflanzenbestimmung, Biodiversitäts-Tracker, Wildtierbeobachtung',
    fr: 'application de suivi de la faune, identification des animaux, application nature, aventure en plein air, reconnaissance des espèces IA, compagnon de randonnée, cartes hors ligne, identification des plantes, suivi de la biodiversité, observation de la faune',
    it: 'app tracciamento fauna selvatica, identificazione animali, app natura, avventura all\'aperto, riconoscimento specie IA, compagno escursionistico, mappe offline, identificazione piante, tracker biodiversità, osservazione fauna selvatica',
    es: 'aplicación de seguimiento de vida silvestre, identificación de animales, aplicación de naturaleza, aventura al aire libre, reconocimiento de especies con IA, compañero de senderismo, mapas sin conexión, identificación de plantas, rastreador de biodiversidad, observación de vida silvestre',
    pt: 'aplicativo de rastreamento de vida selvagem, identificação de animais, app de natureza, aventura ao ar livre, reconhecimento de espécies com IA, companheiro de caminhada, mapas offline, identificação de plantas, rastreador de biodiversidade, observação de vida selvagem',
    ja: '野生動物追跡アプリ, 動物識別, 自然アプリ, アウトドアアドベンチャー, AI種認識, ハイキング仲間, オフラインマップ, 植物識別, 生物多様性トラッカー, 野生動物観察'
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';

  // Define localized titles and descriptions
  const titles = {
    en: 'Wildscope - Wildlife Tracking & Outdoor Adventure App',
    de: 'Wildscope - Wildlife-Tracking & Outdoor-Abenteuer-App',
    fr: 'Wildscope - Application de Suivi de la Faune et d\'Aventure en Plein Air',
    it: 'Wildscope - App di Tracciamento della Fauna Selvatica e Avventura all\'Aperto',
    es: 'Wildscope - Aplicación de Seguimiento de Vida Silvestre y Aventuras al Aire Libre',
    pt: 'Wildscope - Aplicativo de Rastreamento de Vida Selvagem e Aventura ao Ar Livre',
    ja: 'Wildscope - 野生動物追跡＆アウトドアアドベンチャーアプリ'
  };

  const descriptions = {
    en: 'Wildscope is your AI-powered wildlife identification and outdoor adventure companion. Explore nature with species recognition, offline hiking maps, and interactive tracking tools.',
    de: 'Wildscope ist Ihr KI-gestützter Begleiter für Wildtierbestimmung und Outdoor-Abenteuer. Erkunden Sie die Natur mit Artenbestimmung, Offline-Wanderkarten und interaktiven Tracking-Tools.',
    fr: 'Wildscope est votre compagnon d\'identification de la faune et d\'aventure en plein air alimenté par l\'IA. Explorez la nature avec la reconnaissance des espèces, des cartes de randonnée hors ligne et des outils de suivi interactifs.',
    it: 'Wildscope è il tuo compagno di identificazione della fauna selvatica e avventura all\'aperto alimentato dall\'intelligenza artificiale. Esplora la natura con il riconoscimento delle specie, mappe escursionistiche offline e strumenti di tracciamento interattivi.',
    es: 'Wildscope es su compañero de identificación de vida silvestre y aventura al aire libre impulsado por IA. Explore la naturaleza con reconocimiento de especies, mapas de senderismo sin conexión y herramientas de seguimiento interactivas.',
    pt: 'Wildscope é seu companheiro de identificação de vida selvagem e aventura ao ar livre com tecnologia de IA. Explore a natureza com reconhecimento de espécies, mapas de caminhada offline e ferramentas interativas de rastreamento.',
    ja: 'Wildscopeは、AI搭載の野生動物識別およびアウトドアアドベンチャーコンパニオンです。種の認識、オフラインハイキングマップ、インタラクティブな追跡ツールで自然を探索しましょう。'
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