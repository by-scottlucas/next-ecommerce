import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Toaster } from '@/components/ui/sonner';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';

import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';


import type { Metadata } from 'next';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TechPoint | Acessórios e Gadgets',
  description:
    'Descubra os melhores acessórios, eletrônicos e gadgets na TechPoint. Produtos de qualidade com inovação e tecnologia em um só lugar.',
  keywords: [
    'acessórios',
    'eletrônicos',
    'gadgets',
    'tecnologia',
    'TechPoint',
    'loja online',
  ],
  authors: [{ name: 'TechPoint', url: 'https://techpoint.com' }],
  creator: 'TechPoint',
  publisher: 'TechPoint',
  metadataBase: new URL('https://techpoint.com'),
  openGraph: {
    title: 'TechPoint | Acessórios e Gadgets',
    description:
      'Explore a TechPoint: sua loja de confiança para acessórios e tecnologia de ponta.',
    url: 'https://techpoint.com',
    siteName: 'TechPoint',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechPoint | Acessórios',
    description: 'Loja online com os melhores gadgets e acessórios tecnológicos.',
    creator: '@techpointoficial',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://techpoint.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
