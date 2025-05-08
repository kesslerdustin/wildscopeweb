import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

type Props = {
  params: {locale: string};
};

export default function KontaktPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('ContactPage');

  // Metadata can be added here similarly if needed

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('title')}</h1>
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">{t('content_placeholder')}</p>
          {/* Placeholder for a contact form or contact details */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('form_name')}</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('form_email')}</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('form_message')}</label>
              <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="Your message..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                {t('form_submit')}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
} 