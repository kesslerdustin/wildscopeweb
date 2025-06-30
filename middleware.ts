import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Helper function to check if the request is from a crawler
function isCrawler(userAgent: string | null) {
  if (!userAgent) return false;
  return /bot|crawler|spider|crawling/i.test(userAgent);
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent');
  
  // If it's a crawler and requesting the root path, serve the default locale without redirect
  if (isCrawler(userAgent) && request.nextUrl.pathname === '/') {
    return;
  }

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localeDetection: true,
    localePrefix: 'as-needed',
  });

  return handleI18nRouting(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en|fr|it|es|pt|ja)/:path*',
    
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
}; 