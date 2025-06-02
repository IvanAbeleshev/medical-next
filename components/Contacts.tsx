'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Contacts() {
  const { t } = useLanguage();
  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Large decorative square figures */}
      <div className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-1/3 right-10 w-28 h-28 bg-gradient-to-bl from-slate-200/25 to-blue-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-24 left-6 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-slate-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-40 right-8 w-36 h-36 bg-gradient-to-tl from-blue-200/25 to-indigo-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-2/3 left-2 w-20 h-20 bg-gradient-to-br from-slate-300/25 to-blue-200/30 rounded-2xl rotate-45"></div>
      <div className="absolute top-16 right-4 w-26 h-26 bg-gradient-to-bl from-indigo-300/20 to-slate-200/25 rounded-2xl rotate-45"></div>
      
      {/* Wave-like decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-100/30 to-transparent rounded-full translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full -translate-x-32 translate-y-32"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side decorative elements */}
        <div className="absolute top-20 left-8 w-13 h-13 border-2 border-blue-300/30 transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-44 left-4 w-9 h-9 bg-indigo-200/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-1/2 left-6 w-11 h-11 border border-slate-300/35 transform rotate-45 animate-float-medium" style={{ animationDelay: '2.7s' }}></div>
        <div className="absolute top-2/3 left-12 w-8 h-8 bg-blue-200/20 rounded-full animate-pulse-strong" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute bottom-1/3 left-10 w-12 h-12 border-2 border-indigo-400/25 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '3.8s' }}></div>
        <div className="absolute bottom-24 left-4 w-7 h-7 bg-slate-200/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '4.4s' }}></div>
        <div className="absolute bottom-16 left-14 w-10 h-10 border border-blue-300/30 transform rotate-45 animate-float-fast" style={{ animationDelay: '1.6s' }}></div>
        
        {/* Right side decorative elements */}
        <div className="absolute top-28 right-12 w-12 h-12 border-2 border-indigo-300/25 transform rotate-45 animate-float-medium" style={{ animationDelay: '3.1s' }}></div>
        <div className="absolute top-52 right-6 w-8 h-8 bg-slate-200/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '4.2s' }}></div>
        <div className="absolute top-2/3 right-8 w-10 h-10 border border-blue-300/30 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-3/4 right-14 w-7 h-7 bg-indigo-200/25 rounded-full animate-pulse-strong" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute bottom-20 right-10 w-13 h-13 border-2 border-slate-400/30 transform rotate-45 animate-float-slow" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-40 right-6 w-9 h-9 bg-blue-300/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '3.7s' }}></div>
        <div className="absolute bottom-12 right-16 w-11 h-11 border border-indigo-300/25 transform rotate-45 animate-float-fast" style={{ animationDelay: '4.9s' }}></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/4 left-1/3 w-9 h-9 border border-blue-200/25 transform rotate-45 animate-pulse-gentle" style={{ animationDelay: '3.8s' }}></div>
        <div className="absolute top-1/5 left-2/3 w-11 h-11 bg-slate-200/20 rounded-full animate-float-medium" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 border-2 border-indigo-300/30 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-10 h-10 bg-blue-400/25 rounded-full animate-pulse-strong" style={{ animationDelay: '2.7s' }}></div>
        <div className="absolute top-3/4 left-2/3 w-12 h-12 border border-indigo-200/30 transform rotate-45 animate-float-slow" style={{ animationDelay: '2.9s' }}></div>
        <div className="absolute top-1/6 right-1/4 w-7 h-7 bg-slate-300/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '4.6s' }}></div>
        <div className="absolute bottom-3/4 left-3/4 w-9 h-9 border border-blue-300/25 transform rotate-45 animate-float-fast" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-5/6 right-2/3 w-8 h-8 bg-indigo-300/20 rounded-full animate-pulse-gentle" style={{ animationDelay: '3.3s' }}></div>
        
        {/* Large background elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 border border-blue-100/12 rounded-full animate-rotate-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 border border-indigo-100/12 rounded-full animate-rotate-slow" style={{ animationDelay: '35s' }}></div>
        <div className="absolute top-1/3 -left-32 w-44 h-44 border border-slate-100/10 rounded-full animate-rotate-slow" style={{ animationDelay: '25s' }}></div>
        <div className="absolute bottom-1/4 -right-28 w-38 h-38 border border-blue-200/10 rounded-full animate-rotate-slow" style={{ animationDelay: '18s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('contacts.title')}
          </h2>
        </div>

        {/* Desktop layout: side by side, Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-blue-50 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.92 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t('contacts.centerName')}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">{t('contacts.info.address.label')}</span>
                  <p className="text-gray-600">{t('contacts.info.address.value')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">{t('contacts.info.phones.label')}</span>
                  <p className="text-gray-600">{t('contacts.info.phones.value')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">{t('contacts.info.email.label')}</span>
                  <p className="text-gray-600">
                    <a href={`mailto:${t('contacts.info.email.value')}`} className="text-blue-600 hover:underline">
                      {t('contacts.info.email.value')}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">{t('contacts.info.hours.label')}</span>
                  <p className="text-gray-600">
                    {t('contacts.info.hours.value')}<br/>
                    <small className="text-gray-500">{t('contacts.info.hours.break')}</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-sm text-blue-700 italic">
                {t('contacts.info.license')}
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{t('contacts.map.title')}</h3>
                <p className="text-gray-600 text-sm">{t('contacts.map.address')}</p>
              </div>
            </div>
            
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=uk&amp;q=%D0%B2%D1%83%D0%BB.%20%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%2033,%20%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0+(Shipping%20Safety%20Medical%20Centre)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shipping Safety Medical Centre Location"
              ></iframe>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>{t('contacts.map.conveniences.location')}</p>
              <p>{t('contacts.map.conveniences.transport')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
