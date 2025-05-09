import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

type Props = {
  params: {locale: string};
};

export default function ImpressumPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('ImpressumPage');
  const tNav = useTranslations('Navigation');

  // Generate metadata dynamically based on locale
  // export async function generateMetadata({params: {locale}}: Props) {
  //   const tMeta = await getTranslations({locale, namespace: 'Navigation'});
  //   return {
  //     title: tMeta('impressum')
  //   };
  // }
  // Metadata will be handled in a more generic way or per-page if needed. 
  // For now, the global title from RootLayout will be used, or you can add static metadata here.

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
        <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2>{t('section1_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('address') }} />
          
          <h2>{t('contact_title')}</h2>
          <p>
            {t('contact_email')} <a href="mailto:duselkay@gmail.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">duselkay@gmail.com</a>
          </p>
          
          <h2>{t('responsibility_title')}</h2>
          <p>
            Dustin Keßler<br />
            Kurt Schumacher Straße 93<br />
            46539 Dinslaken
          </p>
          
          <h2>{t('disclaimer_title')}</h2>
          <p>
            {t('disclaimer_text')}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 