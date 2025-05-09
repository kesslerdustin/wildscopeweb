import {unstable_setRequestLocale} from 'next-intl/server';
import WildscopeHome from '@/app/components/WildscopeHome';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/JsonLd';

type Props = {
  params: {locale: string};
};

// Server Component to handle the locale setting
export default function HomePage({params: {locale}}: Props) {
  // Server-side function to set the locale
  unstable_setRequestLocale(locale);
  
  // Render the client component with the locale
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <WildscopeHome locale={locale} />
    </>
  );
} 