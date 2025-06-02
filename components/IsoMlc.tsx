"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function IsoMlc() {
  const { t } = useLanguage();
  
  const isoCards = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.92 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: t('isoMlc.cards.iso.title'),
      description: t('isoMlc.cards.iso.description'),
      badges: t('isoMlc.cards.iso.badges') as string[]
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: t('isoMlc.cards.mlc.title'),
      description: t('isoMlc.cards.mlc.description'),
      badges: t('isoMlc.cards.mlc.badges') as string[]
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      title: t('isoMlc.cards.protocols.title'),
      description: t('isoMlc.cards.protocols.description'),
      badges: t('isoMlc.cards.protocols.badges') as string[]
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: t('isoMlc.cards.training.title'),
      description: t('isoMlc.cards.training.description'),
      badges: t('isoMlc.cards.training.badges') as string[]
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white relative overflow-hidden">
      {/* Large decorative square figures */}
      <div className="absolute top-16 left-6 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-2/3 right-10 w-28 h-28 bg-gradient-to-bl from-indigo-200/25 to-blue-300/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-20 left-12 w-24 h-24 bg-gradient-to-tr from-blue-300/25 to-indigo-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-1/3 right-4 w-36 h-36 bg-gradient-to-tl from-indigo-200/20 to-blue-200/30 rounded-2xl rotate-45"></div>
      <div className="absolute top-1/2 left-2 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-32 right-16 w-26 h-26 bg-gradient-to-bl from-indigo-200/25 to-blue-200/25 rounded-2xl rotate-45"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-100/40 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('isoMlc.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('isoMlc.description')}
          </p>
        </div>

        {/* ISO Cards in 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {isoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 min-h-80 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top border that appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              {/* Icon */}
              <div className="w-18 h-18 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-lg">
                {card.icon}
              </div>

              {/* Content */}
              <div className="flex-1 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                {card.badges.map((badge, badgeIndex) => (
                  <span
                    key={badgeIndex}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-indigo-200/20 to-transparent rounded-full translate-x-12 translate-y-12"></div>
          <div className="text-center relative z-0">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              {t('isoMlc.qualityStandards.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {t('isoMlc.qualityStandards.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
