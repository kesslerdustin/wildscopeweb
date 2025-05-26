import React from 'react';

const baseUrl = 'https://www.wildscope.app';

export const ArticleJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Wildscope - Wildlife Tracking & Outdoor Adventure App',
        description: 'Discover wildlife with AI-powered species identification, offline maps, and interactive tracking tools.',
        image: [`${baseUrl}/images/og/og-image.png`],
        datePublished: '2024-01-01T00:00:00Z',
        dateModified: new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: 'Wildscope',
          url: baseUrl
        }
      })
    }}
  />
);

export const SoftwareApplicationJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Wildscope',
        applicationCategory: 'LifestyleApplication, UtilitiesApplication',
        operatingSystem: 'iOS, Android',
        offers: [
          {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            price: '4.99',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1250',
          reviewCount: '450',
          bestRating: '5',
          worstRating: '1'
        },
        downloadUrl: [
          'https://apps.apple.com/us/app/wildscope/id6741471953',
          'https://play.google.com/store/apps/details?id=com.wildscope.app'
        ]
      })
    }}
  />
);

export const FAQJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Wildscope?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Wildscope is an AI-powered wildlife tracking and outdoor adventure app that helps you identify species, navigate offline maps, and learn about nature through interactive features.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does Wildscope work offline?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Wildscope works offline. You can download maps and species data for offline use, making it perfect for remote outdoor adventures.'
            }
          },
          {
            '@type': 'Question',
            name: 'What species can Wildscope identify?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Wildscope can identify a wide range of wildlife including mammals, birds, reptiles, amphibians, insects, and plants using advanced AI technology.'
            }
          }
        ]
      })
    }}
  />
);

export const OrganizationJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Wildscope',
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        sameAs: [
          'https://www.instagram.com/wildscope.app',
          'https://twitter.com/wildscope_app',
          'https://www.facebook.com/wildscope'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'contact@wildscope.app',
          contactType: 'customer service'
        }
      })
    }}
  />
);

export const WebsiteJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Wildscope',
        url: baseUrl,
        description: 'AI-powered wildlife tracking and outdoor adventure app with species identification, offline maps, and interactive features.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    }}
  />
);

export const AppStoreDataJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: 'Wildscope',
        operatingSystem: ['iOS', 'Android'],
        applicationCategory: 'LifestyleApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1250'
        },
        downloadUrl: [
          'https://apps.apple.com/us/app/wildscope/id6741471953',
          'https://play.google.com/store/apps/details?id=com.wildscope.app'
        ]
      })
    }}
  />
); 