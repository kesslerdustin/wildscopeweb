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
          <p className="text-sm text-gray-600 mb-6">{t('last_updated')}</p>
          
          <h3>{t('data_collection_title')}</h3>
          <p>{t('data_collection_intro')}</p>
          
          <h4>{t('location_data_title')}</h4>
          <p dangerouslySetInnerHTML={{ __html: t('location_data_info') }} />
          
          <h4>{t('firebase_title')}</h4>
          <p dangerouslySetInnerHTML={{ __html: t('firebase_info') }} />
          
          <h4>{t('analytics_title')}</h4>
          <p dangerouslySetInnerHTML={{ __html: t('analytics_info') }} />
          
          <h4>{t('account_data_title')}</h4>
          <p dangerouslySetInnerHTML={{ __html: t('account_data_info') }} />
          
          <h4>{t('uploads_title')}</h4>
          <p dangerouslySetInnerHTML={{ __html: t('uploads_info') }} />
          
          <h4>{t('external_content_title')}</h4>
          <p dangerouslySetInnerHTML={{ __html: t('external_content_info') }} />
          
          <h3>{t('data_processing_title')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('data_processing_info') }} />
          
          <h3>{t('data_storage_title')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('data_storage_info') }} />
          
          <h3>{t('data_access_title')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('data_access_info') }} />
          
          <h3>{t('gdpr_rights_title')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('gdpr_rights_info') }} />
          
          <h2>{t('responsible_party_title')}</h2>
          <p>
            {t('responsible_party_info')}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 