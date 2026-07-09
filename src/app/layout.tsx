'use client';

import React from 'react';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI-Driven Product Development Life Cycle Platform" />
        <title>AI-PDLC Platform</title>
      </head>
      <body>
        <Header />
        <main className="min-h-screen mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
