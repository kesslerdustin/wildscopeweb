import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

type Props = {
  params: {locale: string};
};

export default function DatenschutzPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('PrivacyPage');

  // Metadata can be added here similarly if needed
  // export async function generateMetadata({params: {locale}}: Props) {
  //   const tMeta = await getTranslations({locale, namespace: 'Navigation'});
  //   return {
  //     title: tMeta('privacy')
  //   };
  // }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
        <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p>{t('content_placeholder')}</p>
          {/* Add actual Datenschutz content here later */}
        </div>
      </main>
      <Footer />
    </div>
  );
} 