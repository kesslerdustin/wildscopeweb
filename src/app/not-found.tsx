import Link from 'next/link';
import { defaultLocale } from '../../i18n';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6">The page you are looking for doesn't exist or has been moved.</p>
      <Link 
        href={`/${defaultLocale}`} 
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
} 