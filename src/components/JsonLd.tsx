'use client';

import { useParams } from 'next/navigation';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage' | 'Product' | 'Review';
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
      description: 'Wildscope offers exciting outdoor adventures and wildlife experiences around the world.',
    },
    de: {
      name: 'Wildscope',
      description: 'Wildscope bietet spannende Outdoor-Abenteuer und Naturerlebnisse weltweit an.',
    },
    fr: {
      name: 'Wildscope',
      description: 'Wildscope propose des aventures en plein air passionnantes et des expériences de la faune dans le monde entier.',
    },
    it: {
      name: 'Wildscope',
      description: 'Wildscope offre emozionanti avventure all\'aria aperta ed esperienze di fauna selvatica in tutto il mondo.',
    },
    es: {
      name: 'Wildscope',
      description: 'Wildscope ofrece emocionantes aventuras al aire libre y experiencias con la vida silvestre en todo el mundo.',
    },
    pt: {
      name: 'Wildscope',
      description: 'Wildscope oferece aventuras ao ar livre emocionantes e experiências com a vida selvagem em todo o mundo.',
    },
    ja: {
      name: 'Wildscope',
      description: 'Wildscopeは、世界中でのエキサイティングなアウトドアアドベンチャーと野生動物体験を提供します。',
    }
  };
  
  const t = translations[locale as keyof typeof translations] || translations.en;
  
  const data = {
    name: t.name,
    description: t.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com'}/images/logo.png`,
    sameAs: [
      'https://facebook.com/wildscope',
      'https://instagram.com/wildscope',
      'https://twitter.com/wildscope'
    ]
  };
  
  return <JsonLd type="Organization" data={data} />;
}

export function WebsiteJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  const data = {
    name: 'Wildscope',
    url: baseUrl,
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