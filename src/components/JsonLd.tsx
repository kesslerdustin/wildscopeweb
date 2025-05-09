'use client';

import { useParams } from 'next/navigation';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'BreadcrumbList';
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