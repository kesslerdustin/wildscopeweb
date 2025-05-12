import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

type Props = {
  params: {locale: string};
};

export default function RiyouKiyakuPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('TermsPage');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
        <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2>{t('introduction_title')}</h2>
          <p>
            {t('introduction_text')}
          </p>
          
          <h2>{t('acceptance_title')}</h2>
          <p>
            {t('acceptance_text')}
          </p>
          
          <h2>{t('modification_title')}</h2>
          <p>
            {t('modification_text')}
          </p>
          
          <h2>{t('service_description_title')}</h2>
          <p>
            {t('service_description_text')}
          </p>
          
          <h2>{t('user_conduct_title')}</h2>
          <p>
            {t('user_conduct_text')}
          </p>
          
          <h2>{t('user_content_title')}</h2>
          <p>
            {t('user_content_text')}
          </p>
          
          <h2>{t('intellectual_property_title')}</h2>
          <p>
            {t('intellectual_property_text')}
          </p>
          
          <h2>{t('disclaimer_title')}</h2>
          <p>
            {t('disclaimer_text')}
          </p>
          
          <h2>{t('limitation_liability_title')}</h2>
          <p>
            {t('limitation_liability_text')}
          </p>
          
          <h2>{t('governing_law_title')}</h2>
          <p>
            {t('governing_law_text')}
          </p>
          
          <h2>{t('contact_title')}</h2>
          <p>
            {t('contact_text')}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 