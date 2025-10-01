import type { Metadata } from 'next';
import './globals.css';
import AppWrapper from './AppWrapper';

export const metadata: Metadata = {
  title: 'PortfolioPro - Muralidharan',
  description: 'A professional portfolio website showcasing the projects and skills of Muralidharan, a passionate developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}