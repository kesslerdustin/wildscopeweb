import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import FormattedContent from '@/components/FormattedContent';

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
        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <FormattedContent content={t('content')} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 