"use client";

import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';


export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"></div>
      
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
            {t('about.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-15 items-center max-w-5xl mx-auto">          {/* Text Content */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              {t('about.subtitle')}
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-xl text-gray-700">
                {t('about.description')}
              </p>
              
              <p className="text-xl text-gray-700">
                {t('about.certificates')}
              </p>
              
              <div className="text-lg text-gray-700">
                <p className="font-semibold mb-3">{t('about.flagCertificates')}</p>
                <ul className="space-y-2 text-base pl-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('about.countries.singapore')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('about.countries.marshall')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('about.countries.belize')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{t('about.countries.palau')}</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg italic text-gray-600">
                {t('about.licenseText')}
              </p>
            </div>

            {/* Statistics */}
            <div className="flex gap-8 mt-10 flex-wrap">
              <div className="text-center flex-1 min-w-24">
                <div className="text-4xl font-bold text-blue-600 leading-none">15+</div>
                <div className="text-sm text-gray-600 mt-1">{t('about.stats.experience')}</div>
              </div>
              <div className="text-center flex-1 min-w-24">
                <div className="text-4xl font-bold text-blue-600 leading-none">10000+</div>
                <div className="text-sm text-gray-600 mt-1">{t('about.stats.served')}</div>
              </div>
              <div className="text-center flex-1 min-w-24">
                <div className="text-4xl font-bold text-blue-600 leading-none">100%</div>
                <div className="text-sm text-gray-600 mt-1">{t('about.stats.licensed')}</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-[20px] shadow-lg border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="relative w-full h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/about.jpeg"
                      alt={t('about.imageAlt') as string}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Text overlay */}
                    <div className="absolute inset-0 flex items-end justify-start rounded-lg">
                      <div className="bg-white/70 backdrop-blur-sm rounded-tr-xl rounded-bl-lg px-6 py-4 m-4">
                        <h4 
                          className="text-blue-700 text-xl font-bold leading-tight"
                          dangerouslySetInnerHTML={{ __html: t('about.imageText') }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Belgian certification section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/belgium-coat-of-arms.png"
                    alt={t('about.belgianCertification.altText') as string}
                    width={60}
                    height={60}
                    className="rounded-sm shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {t('about.belgianCertification.title')}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {t('about.belgianCertification.description')}
                  </p>
                  
                  {/* PDF Document Link */}
                  <div className="mt-4">
                    <a 
                      href="/Список_визнаних_іноземних_лікарів_Бельгійською_морською_адміністрацією.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200 text-sm border border-blue-200 hover:border-blue-300"
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="text-blue-600"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                      {t('about.belgianCertification.pdfLink')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
