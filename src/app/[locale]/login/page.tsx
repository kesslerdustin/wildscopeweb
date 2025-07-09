import {unstable_setRequestLocale} from 'next-intl/server';
import { Metadata } from 'next';
import LoginForm from './LoginForm';

type Props = {
  params: {locale: string};
};

// Generate metadata for the login page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wildscope.app';

  return {
    metadataBase: new URL(baseUrl),
    title: 'Login | Wildscope',
    description: 'Sign in to your Wildscope account to access personalized wildlife tracking, saved discoveries, and outdoor adventure features.',
    openGraph: {
      title: 'Login | Wildscope',
      description: 'Sign in to your Wildscope account to access personalized wildlife tracking, saved discoveries, and outdoor adventure features.',
      url: `${baseUrl}/${locale}/login`,
      siteName: 'Wildscope',
      type: 'website'
    },
    robots: {
      index: false, // Login pages typically shouldn't be indexed
      follow: true
    }
  };
}

// Server Component for the login page
export default function LoginPage({params: {locale}}: Props) {
  // Server-side function to set the locale
  unstable_setRequestLocale(locale);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 font-display">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Welcome back to Wildscope
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
} 