import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

type Props = {
  params: {locale: string};
};

export default function NutzungsbedingungenPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('TermsPage');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
        <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2>{t('overview_title')}</h2>
          <p className="text-sm text-gray-600 mb-6">{t('last_updated')}</p>
          
          <h2>{t('general_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('general_info') }} />
          
          <h2>{t('features_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('features_info') }} />
          
          <h2>{t('account_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('account_info') }} />
          
          <h2>{t('data_management_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('data_management_info') }} />
          
          <h2>{t('premium_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('premium_info') }} />
          
          <h2>{t('disclaimer_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('disclaimer_info') }} />
          
          <h2>{t('content_rights_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('content_rights_info') }} />
          
          <h2>{t('changes_title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('changes_info') }} />
          
          <p className="mt-8 text-sm text-gray-600">
            {t('contact_info')}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 