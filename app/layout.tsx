import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from "next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechPoint | Acessórios",
  description: "Encontre os melhores eletrônicos, gadgets e acessórios na TechPoint. Qualidade, inovação e tecnologia em um só lugar.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
