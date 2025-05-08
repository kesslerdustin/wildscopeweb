import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Automatically redirect to a locale prefix if the path is missing one (e.g. /about -> /en/about)
  localePrefix: 'always',

  // If true, the middleware will try to infer the locale from the `Accept-Language` header.
  // If false, it will always use the `defaultLocale` unless a locale is explicitly provided in the path.
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 