import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/components/providers/AppProvider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DeeDeep - Управление долгами с голосовым распознаванием',
  description: 'Управляйте долгами с помощью голосового распознавания. Просто, быстро и безопасно. Скачайте DeeDeep для iOS.',
  keywords: 'долги, финансы, голосовое распознавание, iOS приложение, управление долгами',
  authors: [{ name: 'DeeDeep Team' }],
  creator: 'DeeDeep',
  publisher: 'DeeDeep',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deedeep.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DeeDeep - Управление долгами с голосовым распознаванием',
    description: 'Управляйте долгами с помощью голосового распознавания. Просто, быстро и безопасно.',
    url: 'https://deedeep.app',
    siteName: 'DeeDeep',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeeDeep - Управление долгами',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeeDeep - Управление долгами с голосовым распознаванием',
    description: 'Управляйте долгами с помощью голосового распознавания. Просто, быстро и безопасно.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DeeDeep" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
