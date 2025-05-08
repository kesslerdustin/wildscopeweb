import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: i18n routing is handled by next-intl
  // We define locales and defaultLocale here for next-intl to use
  // but Next.js's own i18n routing is not used directly.
};

export default withNextIntl(nextConfig); 