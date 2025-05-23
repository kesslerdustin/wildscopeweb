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
    ],
    fr: [
      {
        question: "Ai-je besoin d'Internet pour utiliser Wildscope?",
        answer: "Seulement pour charger de nouvelles zones et utiliser des fonctionnalités avancées comme l'identification des espèces par IA et le partage communautaire. Une fois qu'une zone est téléchargée, la plupart des fonctionnalités fonctionnent hors ligne."
      },
      {
        question: "En quoi est-ce différent d'iNaturalist ou de Seek?",
        answer: "Wildscope est conçu non seulement pour identifier les espèces, mais pour une exploration immersive - en ligne et hors ligne, occasionnelle ou aventureuse. Il est conçu pour tout le monde, pas seulement pour les scientifiques."
      },
      {
        question: "Quels types d'endroits Wildscope couvre-t-il?",
        answer: "Forêts, parcs, sentiers, côtes, déserts — et même espaces verts urbains. Partout où la nature existe, Wildscope vous aide à vous connecter avec elle."
      }
    ],
    it: [
      {
        question: "Ho bisogno di internet per utilizzare Wildscope?",
        answer: "Solo per caricare nuove aree e utilizzare funzionalità avanzate come l'identificazione delle specie con AI e la condivisione con la community. Una volta scaricata un'area, la maggior parte delle funzionalità funziona offline."
      },
      {
        question: "In cosa differisce da iNaturalist o Seek?",
        answer: "Wildscope è progettato non solo per identificare le specie, ma per un'esplorazione immersiva - online e offline, casual o avventurosa. È costruito per tutti, non solo per gli scienziati."
      },
      {
        question: "Che tipo di luoghi copre Wildscope?",
        answer: "Foreste, parchi, sentieri, coste, deserti - e persino spazi verdi urbani. Ovunque esista la natura, Wildscope ti aiuta a connetterti con essa."
      }
    ],
    es: [
      {
        question: "¿Necesito internet para usar Wildscope?",
        answer: "Solo para cargar nuevas áreas y usar funciones avanzadas como identificación de especies por IA y compartir con la comunidad. Una vez que se descarga un área, la mayoría de las funciones funcionan sin conexión."
      },
      {
        question: "¿En qué se diferencia de iNaturalist o Seek?",
        answer: "Wildscope está diseñado no solo para identificar especies, sino para una exploración inmersiva, en línea y fuera de línea, casual o aventurera. Está construido para todos, no solo para científicos."
      },
      {
        question: "¿Qué tipo de lugares cubre Wildscope?",
        answer: "Bosques, parques, senderos, costas, desiertos, e incluso espacios verdes urbanos. Dondequiera que exista la naturaleza, Wildscope te ayuda a conectarte con ella."
      }
    ],
    pt: [
      {
        question: "Preciso de internet para usar o Wildscope?",
        answer: "Apenas para carregar novas áreas e usar recursos avançados como identificação de espécies por IA e compartilhamento com a comunidade. Depois que uma área é baixada, a maioria dos recursos funciona offline."
      },
      {
        question: "Como é diferente do iNaturalist ou Seek?",
        answer: "O Wildscope foi projetado não apenas para identificar espécies, mas para exploração imersiva — online e offline, casual ou aventureira. É feito para todos, não apenas para cientistas."
      },
      {
        question: "Que tipo de lugares o Wildscope cobre?",
        answer: "Florestas, parques, trilhas, costas, desertos — e até espaços verdes urbanos. Onde quer que a natureza exista, o Wildscope ajuda você a se conectar com ela."
      }
    ],
    ja: [
      {
        question: "Wildscopeを使用するのにインターネットが必要ですか？",
        answer: "新しいエリアをロードし、AI種識別やコミュニティ共有などの高度な機能を使用する場合のみ必要です。エリアがダウンロードされると、ほとんどの機能はオフラインで動作します。"
      },
      {
        question: "iNaturalistやSeekとはどう違いますか？",
        answer: "Wildscopeは種の識別だけでなく、オンラインとオフライン、カジュアルまたは冒険的な没入型の探索のために設計されています。科学者だけでなく、誰もが使えるように作られています。"
      },
      {
        question: "Wildscopeはどのような場所をカバーしていますか？",
        answer: "森林、公園、トレイル、海岸、砂漠—そして都市の緑地でさえも。自然が存在するどこでも、Wildscopeはあなたがそれとつながるのを助けます。"
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