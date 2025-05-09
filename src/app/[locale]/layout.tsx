import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { locales } from '../../../i18n';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildscope.com';
  
  // Define title and description by locale
  const titles = {
    en: 'Wildscope - Discover Your Next Adventure',
    de: 'Wildscope - Entdecke Dein nächstes Abenteuer',
    fr: 'Wildscope - Découvrez Votre Prochaine Aventure',
    it: 'Wildscope - Scopri La Tua Prossima Avventura',
    es: 'Wildscope - Descubre Tu Próxima Aventura',
    pt: 'Wildscope - Descubra Sua Próxima Aventura',
    ja: 'Wildscope - 次の冒険を発見しよう'
  };

  const descriptions = {
    en: 'Wildscope offers exciting outdoor adventures and wildlife experiences around the world.',
    de: 'Wildscope bietet spannende Outdoor-Abenteuer und Naturerlebnisse weltweit an.',
    fr: 'Wildscope propose des aventures en plein air passionnantes et des expériences de la faune dans le monde entier.',
    it: 'Wildscope offre emozionanti avventure all\'aria aperta ed esperienze di fauna selvatica in tutto il mondo.',
    es: 'Wildscope ofrece emocionantes aventuras al aire libre y experiencias con la vida silvestre en todo el mundo.',
    pt: 'Wildscope oferece aventuras ao ar livre emocionantes e experiências com a vida selvagem em todo o mundo.',
    ja: 'Wildscopeは、世界中でのエキサイティングなアウトドアアドベンチャーと野生動物体験を提供します。'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(
        locales.map(loc => [loc, `${baseUrl}/${loc}`])
      )
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      url: `${baseUrl}/${locale}`,
      siteName: 'Wildscope',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
} 