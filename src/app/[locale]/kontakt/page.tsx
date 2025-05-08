import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ContactContent from './ContactContent';

type Props = {
  params: {locale: string};
};

export default function KontaktPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
} 