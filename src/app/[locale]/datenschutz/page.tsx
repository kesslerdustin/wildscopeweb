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
          <h2>{t('overview_title')}</h2>
          <h3>{t('general_info_title')}</h3>
          <p>
            {t('general_info_text')}
          </p>
          
          <h3>{t('data_collection_title')}</h3>
          <p><strong>{t('responsible_question')}</strong></p>
          <p>
            {t('responsible_answer')}
          </p>
          
          <h3>{t('how_we_collect_title')}</h3>
          <p>
            {t('how_we_collect_text1')}
          </p>
          <p>
            {t('how_we_collect_text2')}
          </p>
          
          <h3>{t('data_usage_title')}</h3>
          <p>
            {t('data_usage_text')}
          </p>
          
          <h3>{t('your_rights_title')}</h3>
          <p>
            {t('your_rights_text')}
          </p>
          
          <h2>{t('general_info_mandatory_title')}</h2>
          <h3>{t('data_protection_title')}</h3>
          <p>
            {t('data_protection_text1')}
          </p>
          <p>
            {t('data_protection_text2')}
          </p>
          
          <h3>{t('responsible_party_title')}</h3>
          <p>
            {t('responsible_party_text')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('responsible_party_address') }} />
          <p dangerouslySetInnerHTML={{ __html: t('responsible_party_email') }} />
          <p>
            {t('responsible_party_definition')}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 