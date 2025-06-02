import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import seoConfig from "@/config/seo";
import IOSOptimizer from "@/components/IOSOptimizer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: seoConfig.titles.main,
  description: seoConfig.descriptions.main,
  keywords: seoConfig.keywords.join(", "),
  authors: [{ name: seoConfig.meta.author }],
  creator: seoConfig.meta.author,
  publisher: seoConfig.meta.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: seoConfig.siteName
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
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
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    title: seoConfig.siteName,
    description: seoConfig.descriptions.main,
    siteName: seoConfig.siteNameEn,
    url: seoConfig.baseUrl,
    images: [
      {
        url: `${seoConfig.baseUrl}/images/logo.jpeg`,
        width: 1200,
        height: 630,
        alt: `Логотип ${seoConfig.siteName}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.siteName,
    description: seoConfig.descriptions.main,
    images: [`${seoConfig.baseUrl}/images/logo.jpeg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: seoConfig.siteName,
    alternateName: seoConfig.siteNameEn,
    description: seoConfig.descriptions.main,
    url: seoConfig.baseUrl,
    logo: `${seoConfig.baseUrl}/images/logo.jpeg`,
    image: `${seoConfig.baseUrl}/images/logo.jpeg`,
    telephone: seoConfig.contact.phones,
    email: seoConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seoConfig.contact.address.city,
      addressCountry: 'UA',
      addressRegion: seoConfig.contact.address.region,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.contact.coordinates.latitude,
      longitude: seoConfig.contact.coordinates.longitude,
    },
    foundingDate: '2008',
    medicalSpecialty: 'Морська медицина',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Медичний огляд моряків',
        description: 'Професійний медичний огляд для моряків відповідно до міжнародних стандартів',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Сертифікація ISO 9001:2015',
        description: 'Сертифіковані послуги відповідно до стандарту ISO 9001:2015',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'MLC 2006',
        description: 'Медичні послуги відповідно до Конвенції про працю в морському судноплавстві',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Ліцензія Міністерства Охорони Здоров\'я України',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'MLC 2006',
      },
    ],
    openingHours: `Mo-Fr ${seoConfig.workingHours.weekdays}`,
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: seoConfig.contact.address.country,
    },
    sameAs: Object.values(seoConfig.social).filter(Boolean),
  };

  return (
    <html lang="uk">
      <head>
        <link rel="canonical" href={seoConfig.baseUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SSMC" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <IOSOptimizer />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
