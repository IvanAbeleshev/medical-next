'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Cooperation() {
  const { t } = useLanguage();
  return (
    <section id="cooperation" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Large decorative square figures */}
      <div className="absolute top-16 left-8 w-28 h-28 bg-gradient-to-br from-blue-200/25 to-indigo-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute top-40 right-12 w-32 h-32 bg-gradient-to-bl from-gray-200/20 to-blue-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-blue-300/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-32 right-8 w-36 h-36 bg-gradient-to-tl from-blue-200/20 to-gray-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute top-1/2 left-4 w-20 h-20 bg-gradient-to-br from-blue-300/25 to-indigo-100/30 rounded-2xl rotate-45"></div>
      <div className="absolute top-2/3 right-4 w-28 h-28 bg-gradient-to-bl from-gray-300/20 to-blue-200/25 rounded-2xl rotate-45"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side decorative elements */}
        <div className="absolute top-16 left-8 w-12 h-12 border-2 border-blue-300/30 transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-32 left-4 w-8 h-8 bg-blue-200/20 rounded-full animate-pulse-gentle"></div>
        <div className="absolute top-1/3 left-12 w-10 h-10 border border-gray-300/40 transform rotate-45 animate-float-medium" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-6 w-6 h-6 bg-blue-100/30 rounded-full animate-pulse-strong" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-10 w-14 h-14 border-2 border-blue-400/25 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 left-4 w-7 h-7 bg-gray-200/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 left-16 w-9 h-9 border border-blue-300/35 transform rotate-45 animate-float-fast" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 left-2 w-5 h-5 bg-blue-200/30 rounded-full animate-pulse-strong" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Right side decorative elements */}
        <div className="absolute top-20 right-10 w-11 h-11 border-2 border-blue-300/25 transform rotate-45 animate-float-medium" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-40 right-6 w-7 h-7 bg-gray-200/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 right-12 w-13 h-13 border-2 border-blue-400/30 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-2/3 right-4 w-6 h-6 bg-blue-300/25 rounded-full animate-pulse-strong" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute bottom-1/4 right-14 w-10 h-10 border border-gray-300/35 transform rotate-45 animate-float-slow" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-32 right-6 w-8 h-8 bg-blue-100/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-16 right-10 w-12 h-12 border-2 border-blue-200/30 transform rotate-45 animate-float-fast" style={{ animationDelay: '3.7s' }}></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 border border-gray-300/30 transform rotate-45 animate-pulse-gentle" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-1/5 left-2/3 w-9 h-9 bg-blue-200/20 rounded-full animate-float-medium" style={{ animationDelay: '3.2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-11 h-11 border-2 border-blue-300/25 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-6 h-6 bg-gray-200/30 rounded-full animate-pulse-strong" style={{ animationDelay: '2.9s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-10 h-10 border border-blue-400/30 transform rotate-45 animate-float-slow" style={{ animationDelay: '4.3s' }}></div>
        <div className="absolute top-1/6 right-1/4 w-7 h-7 bg-blue-300/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Large background elements */}
        <div className="absolute -top-16 -left-20 w-32 h-32 border border-blue-100/15 rounded-full animate-rotate-slow"></div>
        <div className="absolute -bottom-16 -right-20 w-40 h-40 border border-gray-100/15 rounded-full animate-rotate-slow" style={{ animationDelay: '20s' }}></div>
        <div className="absolute top-1/3 -right-24 w-36 h-36 border border-blue-200/10 rounded-full animate-rotate-slow" style={{ animationDelay: '10s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('cooperation.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                {t('cooperation.subtitle')}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('cooperation.partners.shipowners.title')}</h4>
                  <p className="text-gray-600 text-center">{t('cooperation.partners.shipowners.description')}</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('cooperation.partners.manning.title')}</h4>
                  <p className="text-gray-600 text-center">{t('cooperation.partners.manning.description')}</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.294a2 2 0 01-1.255 1.857l-7.99 3.2a2 2 0 01-1.51 0l-7.99-3.2A2 2 0 013 14.294V8a2 2 0 012-2V6z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('cooperation.partners.agents.title')}</h4>
                  <p className="text-gray-600 text-center">{t('cooperation.partners.agents.description')}</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <p className="text-lg text-gray-700 font-medium">
                  {t('cooperation.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
