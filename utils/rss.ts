import seoConfig from '@/config/seo';

export default function generateRSS() {
  const rssItems = [
    {
      title: 'Медичний огляд моряків - професійні послуги',
      description: 'Повний спектр медичних послуг для моряків відповідно до міжнародних стандартів MLC 2006',
      link: `${seoConfig.baseUrl}/#about`,
      pubDate: new Date('2025-05-29').toUTCString(),
    },
    {
      title: 'Сертифікація ISO 9001:2015',
      description: 'Наш медичний центр сертифікований відповідно до стандарту ISO 9001:2015',
      link: `${seoConfig.baseUrl}/#certificates`,
      pubDate: new Date('2025-05-29').toUTCString(),
    },
    {
      title: 'Досвідчена команда лікарів',
      description: 'Наші спеціалісти мають багаторічний досвід у морській медицині',
      link: `${seoConfig.baseUrl}/#team`,
      pubDate: new Date('2025-05-29').toUTCString(),
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${seoConfig.siteName}</title>
    <description>${seoConfig.descriptions.main}</description>
    <link>${seoConfig.baseUrl}</link>
    <language>uk-UA</language>
    <managingEditor>${seoConfig.contact.email} (${seoConfig.siteName})</managingEditor>
    <webMaster>${seoConfig.contact.email} (${seoConfig.siteName})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${seoConfig.baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${seoConfig.baseUrl}/images/logo.jpeg</url>
      <title>${seoConfig.siteName}</title>
      <link>${seoConfig.baseUrl}</link>
    </image>
    ${rssItems
      .map(
        (item) => `
    <item>
      <title>${item.title}</title>
      <description>${item.description}</description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return rss;
}
