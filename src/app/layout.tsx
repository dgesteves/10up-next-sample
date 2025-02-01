import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Space_Mono, Work_Sans } from 'next/font/google';
import { Navigation } from '@/components';
import '@/ui/globals.css';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: '--font-space-mono',
  subsets: ['latin'],
});

// This metadata will be overridden by the metadata in each page.
export const metadata: Metadata = {
  title: '10up Next.js Sample',
  description:
    'A sample Next.js project for 10up. Built with TypeScript, ESLint, Prettier, Next.js, Jest, Playwright and more.',
};

// On a real project, we should have a route group for private routes and another for public routes.
// But since we don't have authentication set up, all routes will be public just for demonstration purposes.
// And navigation will be available on all pages.
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${spaceMono.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
