'use client';

import Head from 'next/head';
import seoConfig from '@/config/seo';

interface SEOComponentProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  jsonLd?: object;
}

export default function SEOComponent({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  jsonLd,
}: SEOComponentProps) {
  const seoTitle = title || seoConfig.titles.main;
  const seoDescription = description || seoConfig.descriptions.main;
  const seoKeywords = keywords?.join(', ') || seoConfig.keywords.join(', ');
  const seoImage = image || `${seoConfig.baseUrl}/images/logo.jpeg`;
  const seoUrl = url || seoConfig.baseUrl;

  return (
    <Head>
      {/* Основные мета-теги */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoConfig.meta.author} />
      <meta name="robots" content={seoConfig.meta.robots} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={seoConfig.siteNameEn} />
      <meta property="og:locale" content="uk_UA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Дополнительные мета-теги */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Медицинские мета-теги */}
      <meta name="medical-specialty" content="Морська медицина" />
      <meta name="service-area" content="Одеса, Україна" />
      <meta name="established" content="2008" />
      
      {/* Контактная информация */}
      <meta name="contact:phone" content={seoConfig.contact.phones[0]} />
      <meta name="contact:email" content={seoConfig.contact.email} />
      <meta name="contact:address" content={`${seoConfig.contact.address.city}, ${seoConfig.contact.address.country}`} />

      {/* JSON-LD структурированные данные */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
