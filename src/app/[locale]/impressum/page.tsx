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
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Dustin Keßler<br />
            Kurt Schumacher Straße 93<br />
            46539 Dinslaken<br />
            Deutschland
          </p>
          
          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:duselkay@gmail.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">duselkay@gmail.com</a>
          </p>
          
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Dustin Keßler<br />
            Kurt Schumacher Straße 93<br />
            46539 Dinslaken
          </p>
          
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 