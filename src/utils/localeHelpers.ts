interface TermsPathMap {
  [key: string]: string;
}

/**
 * Maps locales to the correct terms page path for each language.
 * This is used to route different language users to the correct terms page.
 */
const termsPathMap: TermsPathMap = {
  en: 'terms',
  de: 'nutzungsbedingungen',
  es: 'terminos-de-uso',
  fr: 'conditions-d-utilisation',
  it: 'termini-di-utilizzo',
  ja: 'riyou-kiyaku',
  pt: 'termos-de-uso'
};

/**
 * Returns the correct path for the Terms of Use page based on the user's locale.
 */
export function getTermsPathForLocale(locale: string): string {
  return termsPathMap[locale] || 'terms'; // Fallback to English path if locale not found
}

/**
 * Returns the correct path for any provided page type and locale.
 * For future expansion to handle other page types with different paths per locale.
 */
export function getPathForLocale(pageType: string, locale: string): string {
  switch (pageType) {
    case 'terms':
      return getTermsPathForLocale(locale);
    // Add other page types as needed
    default:
      return pageType;
  }
} 