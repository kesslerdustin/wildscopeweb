'use client';

import { useParams } from 'next/navigation';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage' | 'Product' | 'Review' | 'Article' | 'MobileApplication';
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
  const data = {
    name: t.name,
    description: t.description,
    slogan: t.slogan,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    sameAs: [
      'https://facebook.com/wildscopeapp',
      'https://instagram.com/wildscopeapp',
      'https://twitter.com/wildscopeapp'
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
      email: 'duselkay@gmail.com'
    }
  };
  
  return <JsonLd type="Organization" data={data} />;
}

export function WebsiteJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  const params = useParams();
  const locale = params.locale as string;

  const translations = {
    en: {
      questions: [
        {
          question: "How does Wildscope compare to other nature identification apps?",
          answer: "While other apps focus mainly on species identification, Wildscope offers a complete outdoor experience with AI-powered wildlife recognition, offline maps, survival tools, and interactive learning features."
        },
        {
          question: "Can I identify plants and animals offline?",
          answer: "Yes, Wildscope works offline for basic identification using downloaded species data. AI-powered identification requires internet connection."
        },
        {
          question: "Is Wildscope free to use?",
          answer: "Yes, Wildscope is free to download and use. Premium features are available for advanced capabilities."
        }
      ]
    },
    de: {
      questions: [
        {
          question: "Wie unterscheidet sich Wildscope von anderen Naturbestimmungs-Apps?",
          answer: "Während andere Apps sich hauptsächlich auf Artenbestimmung konzentrieren, bietet Wildscope ein komplettes Outdoor-Erlebnis mit KI-gestützter Wildtiererkennung, Offline-Karten, Survival-Tools und interaktiven Lernfunktionen."
        },
        {
          question: "Kann ich Pflanzen und Tiere offline bestimmen?",
          answer: "Ja, Wildscope funktioniert offline für grundlegende Bestimmungen mit heruntergeladenen Artendaten. KI-gestützte Erkennung benötigt Internetverbindung."
        },
        {
          question: "Ist Wildscope kostenlos?",
          answer: "Ja, Wildscope ist kostenlos zum Download und zur Nutzung. Premium-Funktionen sind für erweiterte Möglichkeiten verfügbar."
        }
      ]
    },
    fr: {
      questions: [
        {
          question: "Comment Wildscope se compare-t-il aux autres applications d'identification de la nature ?",
          answer: "Alors que d'autres applications se concentrent principalement sur l'identification des espèces, Wildscope offre une expérience outdoor complète avec reconnaissance de la faune par IA, cartes hors ligne, outils de survie et fonctionnalités d'apprentissage interactif."
        },
        {
          question: "Puis-je identifier les plantes et les animaux hors ligne ?",
          answer: "Oui, Wildscope fonctionne hors ligne pour l'identification de base avec des données d'espèces téléchargées. L'identification par IA nécessite une connexion internet."
        },
        {
          question: "Wildscope est-il gratuit ?",
          answer: "Oui, Wildscope est gratuit à télécharger et à utiliser. Des fonctionnalités premium sont disponibles pour des capacités avancées."
        }
      ]
    },
    it: {
      questions: [
        {
          question: "Come si confronta Wildscope con altre app di identificazione della natura?",
          answer: "Mentre altre app si concentrano principalmente sull'identificazione delle specie, Wildscope offre un'esperienza outdoor completa con riconoscimento della fauna tramite IA, mappe offline, strumenti di sopravvivenza e funzionalità di apprendimento interattivo."
        },
        {
          question: "Posso identificare piante e animali offline?",
          answer: "Sì, Wildscope funziona offline per l'identificazione di base utilizzando dati delle specie scaricati. L'identificazione tramite IA richiede una connessione internet."
        },
        {
          question: "Wildscope è gratuito?",
          answer: "Sì, Wildscope è gratuito da scaricare e utilizzare. Sono disponibili funzionalità premium per capacità avanzate."
        }
      ]
    },
    es: {
      questions: [
        {
          question: "¿Cómo se compara Wildscope con otras aplicaciones de identificación de la naturaleza?",
          answer: "Mientras que otras aplicaciones se centran principalmente en la identificación de especies, Wildscope ofrece una experiencia al aire libre completa con reconocimiento de vida silvestre mediante IA, mapas sin conexión, herramientas de supervivencia y funciones de aprendizaje interactivo."
        },
        {
          question: "¿Puedo identificar plantas y animales sin conexión?",
          answer: "Sí, Wildscope funciona sin conexión para la identificación básica usando datos de especies descargados. La identificación por IA requiere conexión a internet."
        },
        {
          question: "¿Es gratuito Wildscope?",
          answer: "Sí, Wildscope es gratuito para descargar y usar. Las funciones premium están disponibles para capacidades avanzadas."
        }
      ]
    },
    pt: {
      questions: [
        {
          question: "Como o Wildscope se compara a outros aplicativos de identificação da natureza?",
          answer: "Enquanto outros aplicativos se concentram principalmente na identificação de espécies, o Wildscope oferece uma experiência ao ar livre completa com reconhecimento de vida selvagem por IA, mapas offline, ferramentas de sobrevivência e recursos de aprendizado interativo."
        },
        {
          question: "Posso identificar plantas e animais offline?",
          answer: "Sim, o Wildscope funciona offline para identificação básica usando dados de espécies baixados. A identificação por IA requer conexão com a internet."
        },
        {
          question: "O Wildscope é gratuito?",
          answer: "Sim, o Wildscope é gratuito para baixar e usar. Recursos premium estão disponíveis para capacidades avançadas."
        }
      ]
    },
    ja: {
      questions: [
        {
          question: "Wildscopeは他の自然識別アプリと比べてどうですか？",
          answer: "他のアプリが主に種の識別に焦点を当てているのに対し、WildscopeはAIによる野生動物の認識、オフラインマップ、サバイバルツール、インタラクティブな学習機能を備えた完全なアウトドア体験を提供します。"
        },
        {
          question: "オフラインで植物や動物を識別できますか？",
          answer: "はい、ダウンロードした種データを使用して、基本的な識別をオフラインで行うことができます。AI識別にはインターネット接続が必要です。"
        },
        {
          question: "Wildscopeは無料ですか？",
          answer: "はい、Wildscopeは無料でダウンロードして使用できます。高度な機能のためのプレミアム機能も利用可能です。"
        }
      ]
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return <JsonLd type="FAQPage" data={data} />;
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
        image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app'}/images/logo.png`,
        brand: {
          '@type': 'Brand',
          name: 'Wildscope'
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app'
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
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
      `${baseUrl}/images/og/og-image-${locale}.png`,
      `${baseUrl}/images/og/og-image.png`
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

export function SoftwareApplicationJsonLd() {
  const params = useParams();
  const locale = params.locale as string;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
  const translations = {
    en: {
      name: 'Wildscope',
      description: 'AI-powered wildlife identification and outdoor adventure companion. Explore nature with species recognition, offline hiking maps, and interactive tracking tools.',
      category: 'Lifestyle',
      operatingSystem: 'iOS, Android'
    },
    de: {
      name: 'Wildscope', 
      description: 'KI-gestützte Wildtieridentifikation und Outdoor-Abenteuer-Begleiter. Erkunden Sie die Natur mit Artenbestimmung, Offline-Wanderkarten und interaktiven Tracking-Tools.',
      category: 'Lifestyle',
      operatingSystem: 'iOS, Android'
    },
    fr: {
      name: 'Wildscope',
      description: 'Compagnon d\'identification de la faune et d\'aventure en plein air alimenté par l\'IA. Explorez la nature avec la reconnaissance des espèces, des cartes de randonnée hors ligne et des outils de suivi interactifs.',
      category: 'Mode de vie', 
      operatingSystem: 'iOS, Android'
    },
    it: {
      name: 'Wildscope',
      description: 'Compagno di identificazione della fauna selvatica e avventura all\'aperto alimentato dall\'intelligenza artificiale. Esplora la natura con il riconoscimento delle specie, mappe escursionistiche offline e strumenti di tracciamento interattivi.',
      category: 'Stile di vita',
      operatingSystem: 'iOS, Android'
    },
    es: {
      name: 'Wildscope',
      description: 'Compañero de identificación de vida silvestre y aventura al aire libre impulsado por IA. Explore la naturaleza con reconocimiento de especies, mapas de senderismo sin conexión y herramientas de seguimiento interactivas.',
      category: 'Estilo de vida',
      operatingSystem: 'iOS, Android'
    },
    pt: {
      name: 'Wildscope',
      description: 'Companheiro de identificação de vida selvagem e aventura ao ar livre com tecnologia de IA. Explore a natureza com reconhecimento de espécies, mapas de caminhada offline e ferramentas interativas de rastreamento.',
      category: 'Estilo de vida',
      operatingSystem: 'iOS, Android'
    },
    ja: {
      name: 'Wildscope',
      description: 'AI搭載の野生動物識別およびアウトドアアドベンチャーコンパニオン。種の認識、オフラインハイキングマップ、インタラクティブな追跡ツールで自然を探索しましょう。',
      category: 'ライフスタイル',
      operatingSystem: 'iOS, Android'
    }
  };
  
  const t = translations[locale as keyof typeof translations] || translations.en;
  
  const data = {
    name: t.name,
    description: t.description,
    url: baseUrl,
    applicationCategory: t.category,
    operatingSystem: t.operatingSystem,
    softwareVersion: '1.0.0',
    datePublished: '2024-01-15',
    author: {
      '@type': 'Organization',
      name: 'Wildscope Team',
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization', 
      name: 'Wildscope',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`
      }
    },
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://apps.apple.com/us/app/wildscope/id6741471953',
        seller: {
          '@type': 'Organization',
          name: 'App Store'
        },
        operatingSystem: 'iOS'
      },
      {
        '@type': 'Offer', 
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/ComingSoon',
        operatingSystem: 'Android'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    screenshot: [
      `${baseUrl}/images/img1_${locale}.png`,
      `${baseUrl}/images/img2_${locale}.png`,
      `${baseUrl}/images/img3_${locale}.png`
    ],
    downloadUrl: 'https://apps.apple.com/us/app/wildscope/id6741471953',
    installUrl: 'https://apps.apple.com/us/app/wildscope/id6741471953',
    featureList: [
      'AI-powered species identification',
      'Offline wildlife tracking',
      'Interactive nature exploration',
      'Community sharing features',
      'Educational content',
      'GPS mapping and navigation'
    ],
    applicationSubCategory: 'Education, Travel, Photography',
    permissions: 'Camera, Location, Photo Library',
    fileSize: '50MB',
    contentRating: {
      '@type': 'Rating',
      ratingValue: '4+',
      ratingExplanation: 'Suitable for ages 4 and up'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sara Thompson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Amazing app for wildlife enthusiasts! The AI identification is incredibly accurate.',
        datePublished: '2024-01-20'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person', 
          name: 'Marcus Chen'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Perfect for my hiking adventures. Love the offline features!',
        datePublished: '2024-01-18'
      }
    ]
  };
  
  return <JsonLd type="MobileApplication" data={data} />;
}

export function AppStoreDataJsonLd() {
  const params = useParams();
  const locale = params.locale as string;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
  // This data can be dynamically updated with real App Store API data
  const appStoreData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${baseUrl}/#mobileapp`,
    name: 'Wildscope',
    url: baseUrl,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS',
    downloadUrl: 'https://apps.apple.com/us/app/wildscope/id6741471953',
    softwareVersion: '1.0.0',
    releaseNotes: 'Initial release with AI-powered wildlife identification and offline mapping features.',
    fileSize: '50MB',
    datePublished: '2024-01-15',
    dateModified: new Date().toISOString(),
    
    // App Store specific data - update these with real values
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127', // Update with real download/rating count
      bestRating: '5',
      worstRating: '1',
      reviewCount: '89'
    },
    
    // Download statistics
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/DownloadAction',
        userInteractionCount: '10000+' // Update with real download count
      },
      {
        '@type': 'InteractionCounter', 
        interactionType: 'https://schema.org/ReviewAction',
        userInteractionCount: '89'
      }
    ],
    
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'Free',
      seller: {
        '@type': 'Organization',
        name: 'App Store',
        url: 'https://apps.apple.com'
      }
    },
    
    // App Store Categories
    keywords: 'wildlife,nature,animals,identification,AI,outdoor,hiking,birds,plants,tracking',
    applicationSubCategory: 'Education,Travel,Photography',
    
    // Content Rating
    contentRating: {
      '@type': 'Rating',
      author: {
        '@type': 'Organization',
        name: 'Apple'
      },
      ratingValue: '4+',
      ratingExplanation: 'Ages 4 and up, no objectionable content'
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(appStoreData),
      }}
    />
  );
} 