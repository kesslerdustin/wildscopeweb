import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { getPathForLocale } from '@/utils/localeHelpers';
import FormattedContent from '@/components/FormattedContent';

type Props = {
  params: {locale: string};
};

export default function TermsPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('TermsPage');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
        <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600 mb-6">{t('updated')}</p>
          
          <h2>{t('general_title')}</h2>
          <p>
            {t('general_text')}
          </p>
          
          <h2>{t('features_title')}</h2>
          <p>
            {t('features_text')}
          </p>
          
          <h2>{t('account_title')}</h2>
          <p>
            {t('account_text1')}
          </p>
          <h3 className="text-lg font-semibold">{t('prohibited_subtitle')}</h3>
          <p>
            {t('prohibited_text')}
          </p>
          
          <h2>{t('data_title')}</h2>
          <p>
            {t('data_text')}
          </p>
          
          <h2>{t('premium_title')}</h2>
          <p>
            {t('premium_text')}
          </p>
          
          <h2>{t('disclaimer_title')}</h2>
          <h3 className="text-lg font-semibold">{t('disclaimer_subtitle')}</h3>
          <p>
            {t('disclaimer_text')}
          </p>
          
          <h2>{t('content_title')}</h2>
          <h3 className="text-lg font-semibold">{t('uploads_subtitle')}</h3>
          <p>
            {t('uploads_text')}
          </p>
          <h3 className="text-lg font-semibold">{t('app_content_subtitle')}</h3>
          <p>
            {t('app_content_text')}
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">{t('youtube_integration_title')}</h2>
          <FormattedContent content={t('youtube_integration_text')} />
          
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-700 dark:text-gray-200">{t('youtube_acceptable_use_title')}</h3>
          <FormattedContent content={t('youtube_acceptable_use_text')} />
          
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-700 dark:text-gray-200">{t('youtube_api_limitations_title')}</h3>
          <FormattedContent content={t('youtube_api_limitations_text')} />
          
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-700 dark:text-gray-200">{t('youtube_user_responsibilities_title')}</h3>
          <FormattedContent content={t('youtube_user_responsibilities_text')} />
          
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-700 dark:text-gray-200">{t('youtube_disclaimer_title')}</h3>
          <FormattedContent content={t('youtube_disclaimer_text')} />
          
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-700 dark:text-gray-200">{t('youtube_data_processing_title')}</h3>
          <FormattedContent content={t('youtube_data_processing_text')} />
          
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-700 dark:text-gray-200">{t('youtube_compliance_title')}</h3>
          <FormattedContent content={t('youtube_compliance_text')} />
          
          <h2>{t('changes_title')}</h2>
          <p>
            {t('changes_text')}
          </p>
          
          <p className="mt-8 text-sm text-gray-600">
            {t('contact_info')}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 