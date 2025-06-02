'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Large decorative square figures */}
      <div className="absolute top-16 left-8 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-indigo-200/10 rounded-2xl rotate-45"></div>
      <div className="absolute top-1/3 right-10 w-28 h-28 bg-gradient-to-bl from-slate-200/15 to-blue-200/10 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-24 left-6 w-24 h-24 bg-gradient-to-tr from-indigo-200/15 to-slate-200/10 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-40 right-8 w-36 h-36 bg-gradient-to-tl from-blue-200/10 to-indigo-200/15 rounded-2xl rotate-45"></div>
      <div className="absolute top-2/3 left-2 w-20 h-20 bg-gradient-to-br from-slate-300/10 to-blue-200/15 rounded-2xl rotate-45"></div>
      <div className="absolute top-20 right-4 w-26 h-26 bg-gradient-to-bl from-indigo-300/10 to-slate-200/15 rounded-2xl rotate-45"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Shipping Safety Medical Centre
            </h3>
            <p className="text-lg text-gray-300 mb-2">
              {t('footer.company.title')}
            </p>
            <p className="text-blue-400 mb-6 italic text-sm opacity-70">
              {t('contacts.info.license')}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.company.description')}
            </p>
          </div>          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">{t('footer.contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 mt-1 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-gray-300 text-sm">
                  {t('contacts.info.address.value')}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-gray-300 text-sm">
                  {t('contacts.info.phones.value')}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:mmsafety@ukr.net" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  mmsafety@ukr.net
                </a>
              </div>
            </div>
          </div>          {/* Working Hours & Certificates */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">{t('footer.schedule.title')}</h4>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-gray-400 text-sm opacity-90">{t('footer.schedule.weekdays')}</span>
                <span className="text-blue-400 text-sm font-semibold">{t('footer.schedule.weekdaysTime')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-gray-400 text-sm opacity-90">{t('footer.schedule.break')}</span>
                <span className="text-blue-400 text-sm font-semibold">{t('footer.schedule.breakTime')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-gray-400 text-sm opacity-90">{t('footer.schedule.weekend')}</span>
                <span className="text-blue-400 text-sm font-semibold">{t('footer.schedule.weekendTime')}</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4 text-blue-400">{t('footer.certificates.title')}</h4>
            <div className="space-y-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-2 rounded-3xl text-sm font-semibold text-center shadow-lg shadow-blue-600/30">
                ISO 9001:2015
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-2 rounded-3xl text-sm font-semibold text-center shadow-lg shadow-blue-600/30">
                MLC 2006
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-2 rounded-3xl text-sm font-semibold text-center shadow-lg shadow-blue-600/30">
                Ліцензія МОЗ
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic opacity-80">
              15+ {t('common.years')} {t('common.experience')}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </div>
            
            <div className="flex space-x-6">
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('nav.about')}
              </a>
              <a
                href="#team"
                onClick={(e) => handleSmoothScroll(e, '#team')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('nav.team')}
              </a>
              <a
                href="#certificates"
                onClick={(e) => handleSmoothScroll(e, '#certificates')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('nav.certificates')}
              </a>
              <a
                href="#contacts"
                onClick={(e) => handleSmoothScroll(e, '#contacts')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('nav.contacts')}
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              {t('isoMlc.qualityStandards.description')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
