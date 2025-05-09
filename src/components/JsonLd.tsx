'use client';

import { useParams } from 'next/navigation';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage' | 'Product' | 'Review' | 'Article';
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  const params = useParams();
  const locale = params.locale as string;
  
  // Format the JSON-LD data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  const params = useParams();
  const locale = params.locale as string;
  
  const translations = {
    en: {
      name: 'Wildscope',
      description: 'Wildscope offers AI-powered wildlife identification and outdoor exploration tools for nature enthusiasts around the world.',
      slogan: 'Connect with nature through technology'
    },
    de: {
      name: 'Wildscope',
      description: 'Wildscope bietet KI-gestützte Wildtieridentifikation und Outdoor-Erkundungswerkzeuge für Naturliebhaber weltweit.',
      slogan: 'Verbinde dich mit der Natur durch Technologie'
    },
    fr: {
      name: 'Wildscope',
      description: 'Wildscope propose des outils d\'identification de la faune et d\'exploration en plein air alimentés par l\'IA pour les amoureux de la nature du monde entier.',
      slogan: 'Connectez-vous avec la nature grâce à la technologie'
    },
    it: {
      name: 'Wildscope',
      description: 'Wildscope offre strumenti di identificazione della fauna selvatica e di esplorazione all\'aria aperta basati sull\'intelligenza artificiale per gli amanti della natura di tutto il mondo.',
      slogan: 'Connettiti con la natura attraverso la tecnologia'
    },
    es: {
      name: 'Wildscope',
      description: 'Wildscope ofrece herramientas de identificación de fauna silvestre y exploración al aire libre con tecnología de IA para entusiastas de la naturaleza en todo el mundo.',
      slogan: 'Conéctate con la naturaleza a través de la tecnología'
    },
    pt: {
      name: 'Wildscope',
      description: 'Wildscope oferece ferramentas de identificação de vida selvagem e exploração ao ar livre com tecnologia de IA para entusiastas da natureza em todo o mundo.',
      slogan: 'Conecte-se com a natureza através da tecnologia'
    },
    ja: {
      name: 'Wildscope',
      description: 'Wildscopeは、世界中の自然愛好家のためにAI搭載の野生動物識別とアウトドア探検ツールを提供します。',
      slogan: 'テクノロジーを通じて自然とつながる'
    }
  };
  
  const t = translations[locale as keyof typeof translations] || translations.en;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  const data = {
    name: t.name,
    description: t.description,
    slogan: t.slogan,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    sameAs: [
      'https://facebook.com/wildscope',
      'https://instagram.com/wildscope',
      'https://twitter.com/wildscope'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
      addressLocality: 'Dinslaken',
      postalCode: '46539',
      streetAddress: 'Kurt Schumacher Straße 93'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@wildscope.com'
    }
  };
  
  return <JsonLd type="Organization" data={data} />;
}

export function WebsiteJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  const params = useParams();
  const locale = params.locale as string;
  
  const translations = {
    en: {
      name: 'Wildscope - Wildlife Tracking & Outdoor Adventure App',
      description: 'Discover wildlife, explore nature, and track animals with our AI-powered outdoor companion app'
    },
    de: {
      name: 'Wildscope - Wildlife-Tracking & Outdoor-Abenteuer-App',
      description: 'Entdecke Wildtiere, erkunde die Natur und beobachte Tiere mit unserer KI-gestützten Outdoor-Begleiter-App'
    },
    fr: {
      name: 'Wildscope - Application de Suivi de la Faune et d\'Aventure en Plein Air',
      description: 'Découvrez la faune, explorez la nature et suivez les animaux avec notre application de compagnon extérieur alimentée par l\'IA'
    },
    it: {
      name: 'Wildscope - App di Tracciamento della Fauna Selvatica e Avventura all\'Aperto',
      description: 'Scopri la fauna selvatica, esplora la natura e monitora gli animali con la nostra app di compagno outdoor alimentata dall\'IA'
    },
    es: {
      name: 'Wildscope - Aplicación de Seguimiento de Vida Silvestre y Aventuras al Aire Libre',
      description: 'Descubre la vida silvestre, explora la naturaleza y rastrea animales con nuestra aplicación de compañero al aire libre potenciada por IA'
    },
    pt: {
      name: 'Wildscope - Aplicativo de Rastreamento de Vida Selvagem e Aventura ao Ar Livre',
      description: 'Descubra a vida selvagem, explore a natureza e rastreie animais com nosso aplicativo de companheiro ao ar livre com tecnologia de IA'
    },
    ja: {
      name: 'Wildscope - 野生動物追跡＆アウトドアアドベンチャーアプリ',
      description: '私たちのAI搭載アウトドアコンパニオンアプリで野生動物を発見し、自然を探索し、動物を追跡しましょう'
    }
  };
  
  const t = translations[locale as keyof typeof translations] || translations.en;
  
  const data = {
    name: t.name,
    description: t.description,
    url: baseUrl,
    inLanguage: locale,
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
  
  return <JsonLd type="WebSite" data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }));
  
  return (
    <JsonLd
      type="BreadcrumbList"
      data={{
        itemListElement,
      }}
    />
  );
}

export function FAQJsonLd() {
  const params = useParams();
  const locale = params.locale as string;
  
  const faqData = {
    en: [
      {
        question: "Do I need internet to use Wildscope?",
        answer: "Only for loading new areas and using advanced features like AI species identification and community sharing. Once an area is downloaded, most features work offline."
      },
      {
        question: "How is it different from iNaturalist or Seek?",
        answer: "Wildscope is designed not just for identifying species, but for immersive exploration — online and offline, casual or adventurous. It's built for everyone, not just scientists."
      },
      {
        question: "What kind of places does Wildscope cover?",
        answer: "Forests, parks, trails, coastlines, deserts — and even urban green spaces. Anywhere nature exists, Wildscope helps you connect with it."
      }
    ],
    de: [
      {
        question: "Benötige ich Internet, um Wildscope zu nutzen?",
        answer: "Nur zum Laden neuer Gebiete und für erweiterte Funktionen wie KI-Artenerkennung und Community-Sharing. Sobald ein Gebiet heruntergeladen ist, funktionieren die meisten Funktionen offline."
      },
      {
        question: "Wie unterscheidet es sich von iNaturalist oder Seek?",
        answer: "Wildscope ist nicht nur für die Identifizierung von Arten konzipiert, sondern für immersive Erkundung – online und offline, für Gelegenheitsnutzer oder Abenteurer. Es ist für jedermann entwickelt, nicht nur für Wissenschaftler."
      },
      {
        question: "Welche Orte deckt Wildscope ab?",
        answer: "Wälder, Parks, Wanderwege, Küsten, Wüsten – und sogar städtische Grünflächen. Überall, wo Natur existiert, hilft Ihnen Wildscope, sich mit ihr zu verbinden."
      }
    ]
  };

  const faqs = faqData[locale as keyof typeof faqData] || faqData.en;
  
  return (
    <JsonLd
      type="FAQPage"
      data={{
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }}
    />
  );
}

export function ReviewJsonLd() {
  const params = useParams();
  const locale = params.locale as string;
  
  const reviewData = {
    en: [
      {
        author: "Sara T., Teacher",
        reviewBody: "I used Wildscope to explore national parks on my trip, then kept using it in my own neighborhood — it makes everyday nature feel special.",
        ratingValue: 5
      },
      {
        author: "Jakob M., Photographer",
        reviewBody: "This is like Google Earth meets a field guide. I love browsing the world from home.",
        ratingValue: 5
      }
    ],
    de: [
      {
        author: "Sara T., Lehrerin",
        reviewBody: "Ich habe Wildscope genutzt, um Nationalparks auf meiner Reise zu erkunden, und nutze es jetzt in meiner eigenen Nachbarschaft — es macht die alltägliche Natur zu etwas Besonderem.",
        ratingValue: 5
      },
      {
        author: "Jakob M., Fotograf",
        reviewBody: "Das ist wie Google Earth trifft auf einen Naturführer. Ich liebe es, die Welt von zu Hause aus zu erkunden.",
        ratingValue: 5
      }
    ]
  };

  const reviews = reviewData[locale as keyof typeof reviewData] || reviewData.en;
  
  return (
    <JsonLd
      type="Product"
      data={{
        name: 'Wildscope',
        description: 'AI-powered wildlife identification and outdoor adventure app',
        image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com'}/images/logo.png`,
        brand: {
          '@type': 'Brand',
          name: 'Wildscope'
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: reviews.length.toString()
        },
        review: reviews.map(review => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: review.author
          },
          reviewBody: review.reviewBody,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.ratingValue.toString()
          }
        }))
      }}
    />
  );
}

export function ArticleJsonLd() {
  const params = useParams();
  const locale = params.locale as string;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  const translations = {
    en: {
      headline: "The Ultimate Wildlife Identification & Nature Exploration App",
      description: "Learn how Wildscope's AI-powered features help you identify plants, track animals, and discover wildlife in your outdoor adventures.",
      articleBody: "Wildscope transforms how you connect with nature. Whether you're hiking mountain trails, exploring local parks, or discovering wildlife from home, our advanced AI technology helps you identify plants, track animals, and learn about ecosystems in meaningful ways. From casual nature walks to remote wilderness expeditions, Wildscope combines powerful AI identification technology, comprehensive offline exploration tools, and a global community of nature enthusiasts to enhance your outdoor adventures."
    },
    de: {
      headline: "Die ultimative App zur Wildtierbestimmung & Naturerkundung",
      description: "Erfahren Sie, wie Wildscopes KI-gestützte Funktionen Ihnen helfen, Pflanzen zu identifizieren, Tiere zu beobachten und Wildtiere bei Ihren Outdoor-Abenteuern zu entdecken.",
      articleBody: "Wildscope verändert, wie Sie sich mit der Natur verbinden. Ob Sie auf Bergpfaden wandern, lokale Parks erkunden oder Wildtiere von zu Hause aus entdecken – unsere fortschrittliche KI-Technologie hilft Ihnen, Pflanzen zu identifizieren, Tiere zu beobachten und Ökosysteme auf bedeutungsvolle Weise kennenzulernen. Von gemütlichen Naturwanderungen bis hin zu abgelegenen Wildnisexpeditionen kombiniert Wildscope leistungsstarke KI-Identifikationstechnologie, umfassende Offline-Erkundungswerkzeuge und eine globale Gemeinschaft von Naturbegeisterten, um Ihre Outdoor-Abenteuer zu bereichern."
    }
  };
  
  const t = translations[locale as keyof typeof translations] || translations.en;
  
  const data = {
    headline: t.headline,
    description: t.description,
    articleBody: t.articleBody,
    image: [
      `${baseUrl}/images/og-image.png`,
      `${baseUrl}/images/darklite_${locale}.png`
    ],
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Wildscope Team"
    },
    publisher: {
      "@type": "Organization",
      name: "Wildscope",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/${locale}`
    }
  };
  
  return <JsonLd type="Article" data={data} />;
} 