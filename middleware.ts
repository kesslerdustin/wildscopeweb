import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  // Debug information (you can remove this in production)
  const acceptLanguage = request.headers.get('accept-language');
  const userAgent = request.headers.get('user-agent');
  const cfIpCountry = request.headers.get('cf-ipcountry'); // Cloudflare country header
  const cfRegion = request.headers.get('cf-region'); // Cloudflare region header
  
  console.log('🔍 Locale Detection Debug:', {
    url: request.url,
    acceptLanguage,
    cfIpCountry,
    cfRegion,
    userAgent: userAgent?.substring(0, 100) + '...'
  });

  // Create the next-intl middleware with enhanced detection
  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: 'as-needed',
    localeDetection: true,
    alternateLinks: true,
  });

  // Let next-intl handle the routing
  const response = handleI18nRouting(request);
  
  // Add debug headers (remove in production)
  response.headers.set('x-detected-accept-language', acceptLanguage || 'none');
  response.headers.set('x-cf-country', cfIpCountry || 'unknown');
  
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 