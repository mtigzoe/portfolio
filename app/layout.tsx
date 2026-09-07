import type { Metadata } from 'next';
import './globals.css';
import { AccessibilityProvider } from '@/components/AccessibilityProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Miriam Lozneanu – Software Engineer',
    template: '%s | Miriam Lozneanu',
  },
  description:
    'Personal website and engineering blog of Miriam Lozneanu, DeafBlind software engineer sharing posts on accessibility, Python, testing, and assistive technology.',
  keywords: [
    'Miriam Lozneanu',
    'DeafBlind software engineer',
    'Accessibility',
    'Python',
    'Braille display',
    'Screen reader',
    'pytest',
    'Flask',
  ],
  authors: [{ name: 'Miriam Lozneanu', url: 'https://miriamsoftwareengineer.code.blog/' }],
  creator: 'Miriam Lozneanu',
  openGraph: {
    title: 'Miriam Lozneanu – Software Engineer',
    description:
      'Personal website and engineering blog of Miriam Lozneanu, DeafBlind software engineer sharing posts on accessibility, Python, testing, and assistive technology.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Miriam Lozneanu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miriam Lozneanu – Software Engineer',
    description:
      'Personal website and engineering blog of Miriam Lozneanu, DeafBlind software engineer sharing posts on accessibility, Python, testing, and assistive technology.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <AccessibilityProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
