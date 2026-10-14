import type { Metadata } from 'next';
import './globals.css';
import { AccessibilityProvider } from '@/components/AccessibilityProvider';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Engineering blog by a DeafBlind software engineer sharing posts on accessibility, Python, testing, and assistive technology.',
  keywords: [
    'DeafBlind software engineer',
    'Accessibility',
    'Python',
    'Braille display',
    'Screen reader',
    'pytest',
    'Flask',
  ],
  openGraph: {
    title: 'Portfolio',
    description:
      'Engineering blog by a DeafBlind software engineer sharing posts on accessibility, Python, testing, and assistive technology.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio',
    description:
      'Engineering blog by a DeafBlind software engineer sharing posts on accessibility, Python, testing, and assistive technology.',
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
        </AccessibilityProvider>
      </body>
    </html>
  );
}
