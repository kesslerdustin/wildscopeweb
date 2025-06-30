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
    en: 'Wildscope - All-in-One Wildlife & Plant Identification | Outdoor Survival Guide',
    de: 'Wildscope - Tiere & Pflanzen bestimmen | Outdoor Survival Ratgeber',
    fr: 'Wildscope - Identification Faune & Flore | App Survie Nature',
    it: 'Wildscope - Riconoscimento Fauna & Flora | App Sopravvivenza',
    es: 'Wildscope - Identificación de Fauna y Flora | App Supervivencia',
    pt: 'Wildscope - Identificação de Fauna e Flora | App Sobrevivência',
    ja: 'Wildscope - 野生動植物図鑑＆アウトドアサバイバルアプリ'
  };

  const descriptions = {
    en: "Discover nature with AI: Instant wildlife & plant identification, offline maps, and expert survival guides. Free app with GPS tracking, weather alerts, and interactive learning. Perfect for hikers, photographers, and nature enthusiasts.",
    de: "Entdecke die Natur mit KI: Sofortige Tier- & Pflanzenbestimmung, Offline-Karten und Experten-Survival-Guides. Kostenlose App mit GPS-Tracking, Wetterwarnungen und interaktivem Lernen. Perfekt für Wanderer, Fotografen und Naturbegeisterte.",
    fr: 'Identifiez la faune et la flore avec l\'IA. Application gratuite avec cartes hors ligne, boussole, outils de survie et reconnaissance d\'espèces. Parfait pour la randonnée et le camping.',
    it: 'Riconosci fauna e flora con l\'intelligenza artificiale. App gratuita con mappe offline, bussola, strumenti di sopravvivenza e identificazione delle specie. Ideale per escursioni e campeggio.',
    es: 'Wildscope combina identificación de vida silvestre con IA, herramientas de supervivencia, navegación por brújula y aventuras de texto interactivas. Explore la naturaleza con reconocimiento de especies, mapas sin conexión y herramientas de seguimiento.',
    pt: 'Wildscope combina identificação de vida selvagem com IA, ferramentas de sobrevivência, navegação por bússola e aventuras de texto interativas. Explore a natureza com reconhecimento de espécies, mapas offline e ferramentas de rastreamento.',
    ja: 'AI技術で野生動植物を識別。無料アプリでオフラインマップ、コンパス、サバイバルツール、種の認識が可能。ハイキング、キャンプ、自然観察に最適。'
  };

  const keywords = {
    en: "AI nature guide, wildlife recognition app, offline species identification, nature exploration app, biodiversity tracking, outdoor survival guide, wildlife photography assistant, hiking companion app, plant identification AI, nature learning app, wildlife identification app, species database, survival skills, knot tying, shelter building, fire making, weather data, compass navigation, bio index, nature community",
    de: "KI Naturführer, Wildtier Erkennungs-App, Offline Artenbestimmung, Naturerkundungs-App, Artenvielfalt tracking, Outdoor Überlebensguide, Naturfotografie Assistent, Wander-App, Pflanzen KI-Bestimmung, Natur Lern-App, Tier bestimmen App, Artendatenbank, Survival Skills, Knoten binden, Unterschlupf bauen, Feuer machen, Wetterdaten, Kompass Navigation, Bio-Index, Naturgemeinschaft",
    fr: 'identification animaux app, identification plantes, guide nature, application randonnée, reconnaissance espèces, cartes hors ligne, boussole navigation, survie nature, application outdoor, guide faune flore',
    it: 'riconoscimento animali app, identificazione piante, guida natura, app escursionismo, riconoscimento specie, mappe offline, navigazione bussola, sopravvivenza outdoor, app trekking, guida fauna flora',
    es: 'app identificar animales, identificación plantas, guía naturaleza, app senderismo, reconocimiento especies, mapas sin conexión, navegación brújula, supervivencia aire libre, app excursiones, guía fauna flora',
    pt: 'app identificar animais, identificação plantas, guia natureza, app trilhas, reconhecimento espécies, mapas offline, navegação bússola, sobrevivência ar livre, app caminhadas, guia fauna flora',
    ja: '動物識別アプリ, 植物図鑑, ネイチャーガイド, ハイキングアプリ, 種の特定, オフラインマップ, コンパスナビ, アウトドアサバイバル, トレッキング, 野生動物図鑑'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: keywords[locale as keyof typeof keywords] || keywords.en,
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
    other: {
      // App Store meta tags
      'apple-itunes-app': 'app-id=6741471953',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Wildscope',
      // Android app links
      'google-play-app': 'app-id=com.duselk.theoutdoorbible',
      // App Links
      'al:ios:app_store_id': '6741471953',
      'al:ios:app_name': 'Wildscope',
      'al:ios:url': 'wildscope://',
      'al:android:package': 'com.duselk.theoutdoorbible',
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
      'twitter:app:id:googleplay': 'com.duselk.theoutdoorbible',
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
  const messages = await getMessages({ locale });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';

  // Define localized titles and descriptions
  const titles = {
    en: 'Wildscope - Wildlife Identification & Outdoor Survival App',
    de: 'Wildscope - Tiere & Pflanzen bestimmen | Outdoor Survival App',
    fr: 'Wildscope - Guide Animalier IA & App de Survie en Plein Air',
    it: 'Wildscope - Guida Naturalistica AI & App di Sopravvivenza Outdoor',
    es: 'Wildscope - Guía de Vida Silvestre con IA & App de Supervivencia',
    pt: 'Wildscope - Guia de Vida Selvagem com IA & App de Sobrevivência',
    ja: 'Wildscope - AI野生動物ガイド & アウトドアサバイバルアプリ'
  };

  const descriptions = {
    en: 'Identify wildlife, plants & animals with AI technology. Free outdoor app with offline maps, compass navigation, survival tools, and species recognition. Perfect for hiking, camping & nature exploration.',
    de: 'Tiere und Pflanzen mit KI erkennen - kostenlose Outdoor App mit Offline-Karten, Kompass, Überlebenstipps und Artenbestimmung. Ideal für Wandern, Camping & Naturerkundung.',
    fr: 'Wildscope combine l\'identification de la faune par IA, des outils de survie, la navigation par boussole et des aventures textuelles interactives. Explorez la nature avec la reconnaissance des espèces, des cartes hors ligne et des outils de suivi.',
    it: 'Wildscope combina identificazione della fauna con AI, strumenti di sopravvivenza, navigazione con bussola e avventure testuali interattive. Esplora la natura con riconoscimento delle specie, mappe offline e strumenti di tracciamento.',
    es: 'Wildscope combina identificación de vida silvestre con IA, herramientas de supervivencia, navegación por brújula y aventuras de texto interactivas. Explore la naturaleza con reconocimiento de especies, mapas sin conexión y herramientas de seguimiento.',
    pt: 'Wildscope combina identificação de vida selvagem com IA, ferramentas de sobrevivência, navegação por bússola e aventuras de texto interativas. Explore la natureza com reconhecimento de espécies, mapas offline e ferramentas de rastreamento.',
    ja: 'WildscopeはAI野生動物識別、サバイバルツール、コンパスナビゲーション、インタラクティブテキストアドベンチャーを組み合わせています。種の認識、オフラインマップ、追跡ツールで自然を探索しましょう。'
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
          "featureList": locale === 'de' ? [
            "KI-gestützte Artenbestimmung",
            "Offline-Kartenfunktion",
            "Survival-Guides",
            "GPS-Tracking",
            "Wetterwarnungen",
            "Interaktives Naturlernen",
            "Artenvielfalt-Tracking",
            "Community-Funktionen",
            "Sicherheitshinweise",
            "Überlebenstechniken"
          ] : [
            "AI-powered species identification",
            "Offline maps functionality",
            "Survival guides",
            "GPS tracking",
            "Weather alerts",
            "Interactive nature learning",
            "Biodiversity tracking",
            "Community features",
            "Safety alerts",
            "Survival techniques"
          ]
        })
      }} />
      {children}
    </NextIntlClientProvider>
  );
} 