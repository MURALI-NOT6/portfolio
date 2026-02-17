import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import OpenReplay from '../components/OpenReplay';

// Create font instances
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muralidharan | Creative Frontend Developer & UI/UX Specialist',
  description: 'Portfolio of Muralidharan, a creative Frontend Developer specializing in React, Next.js, and immersive web experiences with a focus on cyberpunk aesthetics and seamless animations.',
  keywords: ['Muralidharan', 'Frontend Developer', 'React Developer', 'Next.js', 'Cyberpunk Portfolio', 'Web Animation', 'UI/UX Design', 'Creative Developer'],
  authors: [{ name: 'Muralidharan' }],
  creator: 'Muralidharan',
  publisher: 'Muralidharan',
  robots: 'index, follow',
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/assets/image/fav.png',
    shortcut: '/assets/image/fav.png',
    apple: '/assets/image/fav.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muralidharan.dev', // Placeholder URL
    title: 'Muralidharan | Creative Frontend Developer',
    description: 'Explore the digital frontier with Muralidharan\'s cutting-edge projects and skills.',
    siteName: 'Muralidharan Portfolio',
    images: [
      {
        url: '/assets/image/banner-bg.png',
        width: 1200,
        height: 630,
        alt: 'Muralidharan Portfolio Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muralidharan | Creative Frontend Developer',
    description: 'Cyberpunk-themed portfolio showcasing React, Next.js, and automation expertise.',
    images: ['/assets/image/banner-bg.png'],
    creator: '@muralidharan', // Placeholder handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OpenReplay />
        {children}
      </body>
    </html>
  );
}
