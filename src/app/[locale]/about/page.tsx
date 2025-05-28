import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import type { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';
  
  const metaTitles = {
    en: 'About Wildscope: The Leading AI Wildlife Identification App',
    de: 'Über Wildscope: Die führende KI-Wildlife-Identifikations-App',
    fr: 'À propos de Wildscope: L\'application leader d\'identification de la faune par IA',
    it: 'Chi è Wildscope: L\'app leader per l\'identificazione della fauna con IA',
    es: 'Acerca de Wildscope: La aplicación líder de identificación de vida silvestre con IA',
    pt: 'Sobre Wildscope: O aplicativo líder de identificação de vida selvagem com IA',
    ja: 'Wildscopeについて：AI野生動物識別アプリのリーダー'
  };

  const metaDescriptions = {
    en: 'Learn about Wildscope, the innovative AI-powered wildlife identification and survival app. Discover our mission to connect people with nature through technology.',
    de: 'Erfahren Sie mehr über Wildscope, die innovative KI-gestützte Wildlife-Identifikations- und Überlebens-App. Entdecken Sie unsere Mission, Menschen durch Technologie mit der Natur zu verbinden.',
    fr: 'Découvrez Wildscope, l\'application innovante d\'identification de la faune et de survie alimentée par l\'IA. Découvrez notre mission de connecter les gens à la nature grâce à la technologie.',
    it: 'Scopri Wildscope, l\'innovativa app di identificazione della fauna e sopravvivenza alimentata dall\'IA. Scopri la nostra missione di connettere le persone con la natura attraverso la tecnologia.',
    es: 'Conoce Wildscope, la innovadora aplicación de identificación de vida silvestre y supervivencia impulsada por IA. Descubre nuestra misión de conectar a las personas con la naturaleza a través de la tecnología.',
    pt: 'Conheça Wildscope, o inovador aplicativo de identificação de vida selvagem e sobrevivência alimentado por IA. Descubra nossa missão de conectar pessoas com a natureza através da tecnologia.',
    ja: 'AI搭載の革新的な野生動物識別・サバイバルアプリ、Wildscopeについて学びましょう。テクノロジーを通じて人々を自然とつなぐ私たちの使命を発見してください。'
  };

  return {
    title: metaTitles[locale as keyof typeof metaTitles] || metaTitles.en,
    description: metaDescriptions[locale as keyof typeof metaDescriptions] || metaDescriptions.en,
    alternates: {
      canonical: `${baseUrl}/${locale === 'en' ? '' : locale + '/'}about`,
    },
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('AboutPage');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
            About Wildscope
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">
              The Future of Wildlife Identification
            </h2>
            <p className="text-lg mb-6">
              Wildscope represents a breakthrough in AI-powered nature exploration technology. 
              Our mission is to democratize wildlife knowledge and make nature accessible to everyone, 
              from curious beginners to seasoned naturalists and outdoor survival enthusiasts.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">
              What Makes Wildscope Different
            </h2>
            <p className="mb-4">
              Unlike traditional field guides or basic identification apps, Wildscope combines:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Advanced AI species recognition technology</li>
              <li>Comprehensive offline survival tools and maps</li>
              <li>Interactive text-based adventure learning</li>
              <li>GPS navigation and compass functionality</li>
              <li>Global community of nature enthusiasts</li>
              <li>Evidence-based conservation education</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">
              Our Technology
            </h2>
            <p className="mb-6">
              Wildscope's AI engine has been trained on millions of wildlife images and survival scenarios, 
              enabling accurate species identification even in challenging field conditions. Our offline-first 
              approach ensures you can explore nature confidently, regardless of connectivity.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">
              Join the Wildscope Community
            </h2>
            <p className="mb-6">
              Whether you're planning your next hiking adventure, teaching children about nature, 
              or pursuing professional wildlife research, Wildscope provides the tools and knowledge 
              you need to explore the natural world safely and responsibly.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-300">
                Download Wildscope Today
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400">
                Join over 50,000 nature enthusiasts who trust Wildscope for their outdoor adventures. 
                Available on iOS App Store and coming soon to Google Play Store.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 