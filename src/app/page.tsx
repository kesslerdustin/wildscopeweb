import { redirect } from 'next/navigation';
import { defaultLocale } from '../../i18n';

export default function Home() {
  // Using redirect is safe here as this is not a root layout
  redirect(`/${defaultLocale}`);
} 