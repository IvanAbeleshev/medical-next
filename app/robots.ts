import { MetadataRoute } from 'next'
import seoConfig from '@/config/seo'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = seoConfig.baseUrl
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/404',
          '/*error*',
          '/*Error*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'Yandex',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
