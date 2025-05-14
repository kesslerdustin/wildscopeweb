import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: i18n routing is handled by next-intl
  // We define locales and defaultLocale here for next-intl to use
  // but Next.js's own i18n routing is not used directly.
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app'
  },
  images: {
    domains: ['wildscope.com', 'www.wildscope.app'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true, // If you're using SVG images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  poweredByHeader: false, // Remove the X-Powered-By header for security
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ]
    }
  ]
};

export default withNextIntl(nextConfig); 