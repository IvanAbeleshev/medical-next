// Дополнительные утилиты для SEO
import seoConfig from './seo';

export const generateMetaTags = (
  page: keyof typeof seoConfig.titles,
  customDescription?: string
) => {
  const title = seoConfig.titles[page];
  const description = customDescription || seoConfig.descriptions[page as keyof typeof seoConfig.descriptions] || seoConfig.descriptions.main;
  
  return {
    title,
    description,
    keywords: seoConfig.keywords.join(', '),
    openGraph: {
      title,
      description,
      url: seoConfig.baseUrl,
      siteName: seoConfig.siteNameEn,
      locale: 'uk_UA',
      type: 'website',
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
      title,
      description,
      images: [`${seoConfig.baseUrl}/images/logo.jpeg`],
    },
  };
};

export const generateBreadcrumbJsonLd = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateFAQJsonLd = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generatePersonJsonLd = (person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    image: person.image ? `${seoConfig.baseUrl}${person.image}` : undefined,
    worksFor: {
      '@type': 'MedicalOrganization',
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
    },
  };
};

export const medicalCenterFAQs = [
  {
    question: 'Які документи потрібні для медичного огляду моряка?',
    answer: 'Для медичного огляду потрібні: паспорт, моряцька книжка, попередній медичний сертифікат (якщо є), та результати попередніх обстежень.',
  },
  {
    question: 'Скільки часу займає медичний огляд?',
    answer: 'Повний медичний огляд зазвичай займає 1-2 дні, залежно від типу сертифікату та необхідних обстежень.',
  },
  {
    question: 'Чи визнаються ваші сертифікати міжнародно?',
    answer: 'Так, наші медичні сертифікати відповідають міжнародним стандартам MLC 2006 та визнаються у всьому світі.',
  },
  {
    question: 'Які сертифікати ви видаєте?',
    answer: 'Ми видаємо всі види медичних сертифікатів для моряків: STCW Medical Certificate, ENG1, та інші відповідно до вимог країн прапора.',
  },
  {
    question: 'Чи потрібно записуватися на прийом заздалегідь?',
    answer: 'Рекомендуємо попередньо зателефонувати або написати для узгодження зручного часу візиту.',
  },
];

export default {
  generateMetaTags,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generatePersonJsonLd,
  medicalCenterFAQs,
};
