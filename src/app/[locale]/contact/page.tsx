import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function ContactPage({params: {locale}}: Props) {
  // Server-side function to set the locale
  unstable_setRequestLocale(locale);
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">This is the contact page. Content will be added here.</p>
    </div>
  );
} 