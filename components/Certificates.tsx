'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Certificates() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);
  const certificates = [
    {
      id: 1,
      title: t('certificates.items.iso.title') as string,
      image: '/images/certificates/ISO 9001_1.jpg',
      badge: t('certificates.items.iso.badge') as string,
      description: t('certificates.items.iso.description') as string,
      details: [
        { label: t('certificates.items.iso.details.scope') as string, value: t('certificates.items.iso.details.scopeValue') as string },
        { label: t('certificates.items.iso.details.status') as string, value: t('certificates.items.iso.details.statusValue') as string, isActive: true },
        { label: t('certificates.items.iso.details.audit') as string, value: t('certificates.items.iso.details.auditValue') as string }
      ]
    },
    {
      id: 2,
      title: t('certificates.items.mlc.title') as string,
      image: '/images/certificates/ATTESTATION OF COMPIANCE.jpg',
      badge: t('certificates.items.mlc.badge') as string,
      description: t('certificates.items.mlc.description') as string,
      details: [
        { label: t('certificates.items.mlc.details.issuedBy') as string, value: t('certificates.items.mlc.details.issuedByValue') as string },
        { label: t('certificates.items.mlc.details.recognition') as string, value: t('certificates.items.mlc.details.recognitionValue') as string, isActive: true },
        { label: t('certificates.items.mlc.details.compliance') as string, value: t('certificates.items.mlc.details.complianceValue') as string }
      ]
    },
    {
      id: 3,
      title: t('certificates.items.license.title') as string,
      image: '/images/certificates/a664f8b4-fa1e-4251-b173-5edfad71309b.JPG',
      badge: t('certificates.items.license.badge') as string,
      description: t('certificates.items.license.description') as string,
      details: [
        { label: t('certificates.items.license.details.authority') as string, value: t('certificates.items.license.details.authorityValue') as string },
        { label: t('certificates.items.license.details.type') as string, value: t('certificates.items.license.details.typeValue') as string },
        { label: t('certificates.items.license.details.term') as string, value: t('certificates.items.license.details.termValue') as string, isActive: true }
      ]
    },
    {
      id: 4,
      title: t('certificates.items.professional.title') as string,
      image: '/images/certificates/e6059881-3aba-47cd-974b-2aa7bf08a8e7.jpg',
      badge: t('certificates.items.professional.badge') as string,
      description: t('certificates.items.professional.description') as string,
      details: [
        { label: t('certificates.items.professional.details.sphere') as string, value: t('certificates.items.professional.details.sphereValue') as string },
        { label: t('certificates.items.professional.details.qualification') as string, value: t('certificates.items.professional.details.qualificationValue') as string, isActive: true },
        { label: t('certificates.items.professional.details.updates') as string, value: t('certificates.items.professional.details.updatesValue') as string }
      ]
    }
  ];

  const achievements = [
    { number: '15+', text: t('certificates.achievements.items.years') as string },
    { number: '50+', text: t('certificates.achievements.items.countries') as string },
    { number: '10K+', text: t('certificates.achievements.items.certificates') as string },
    { number: '100%', text: t('certificates.achievements.items.compliance') as string }
  ];

  const openModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Large decorative square figures - adding more */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-1/4 right-6 w-28 h-28 bg-gradient-to-bl from-indigo-200/25 to-gray-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-32 left-8 w-36 h-36 bg-gradient-to-tr from-blue-200/25 to-indigo-300/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-16 right-12 w-24 h-24 bg-gradient-to-tl from-gray-200/30 to-blue-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute top-2/3 left-4 w-20 h-20 bg-gradient-to-br from-indigo-200/30 to-blue-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-12 right-2 w-30 h-30 bg-gradient-to-bl from-blue-300/25 to-indigo-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute top-1/2 right-20 w-26 h-26 bg-gradient-to-tr from-gray-200/25 to-blue-200/30 rounded-2xl rotate-45"></div>
      
      {/* Geometric decorative elements */}
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-tl from-gray-200/30 to-blue-200/30 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-100/25 to-transparent rounded-lg rotate-12"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side additional elements */}
        <div className="absolute top-32 left-6 w-12 h-12 border-2 border-blue-300/30 transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-52 left-2 w-8 h-8 bg-blue-200/20 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-3/4 left-12 w-10 h-10 border border-indigo-200/35 transform rotate-45 animate-float-medium" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-40 left-8 w-9 h-9 bg-indigo-100/25 rounded-full animate-pulse-strong" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute bottom-20 left-4 w-11 h-11 border-2 border-blue-400/25 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '3.6s' }}></div>
        <div className="absolute top-1/5 left-16 w-7 h-7 bg-blue-300/20 rounded-full animate-pulse-gentle" style={{ animationDelay: '4.1s' }}></div>
        
        {/* Right side additional elements */}
        <div className="absolute top-40 right-6 w-13 h-13 border-2 border-indigo-300/25 transform rotate-45 animate-float-medium" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-60 right-12 w-8 h-8 bg-blue-100/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-2/3 right-16 w-10 h-10 border border-blue-200/30 transform rotate-45 animate-float-slow" style={{ animationDelay: '4.2s' }}></div>
        <div className="absolute bottom-28 right-4 w-12 h-12 border-2 border-indigo-400/30 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-48 right-8 w-7 h-7 bg-blue-200/25 rounded-full animate-pulse-strong" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute top-1/6 right-20 w-9 h-9 border border-indigo-300/25 transform rotate-45 animate-float-fast" style={{ animationDelay: '3.9s' }}></div>
        
        {/* Center area scattered elements */}
        <div className="absolute top-1/3 left-2/3 w-8 h-8 border border-gray-300/25 transform rotate-45 animate-pulse-gentle" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute top-1/5 left-1/2 w-10 h-10 bg-indigo-200/20 rounded-full animate-float-medium" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-11 h-11 border-2 border-blue-300/30 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-1/3 right-2/3 w-7 h-7 bg-blue-400/25 rounded-full animate-pulse-strong" style={{ animationDelay: '2.9s' }}></div>
        <div className="absolute top-4/5 right-1/2 w-9 h-9 border border-indigo-200/30 transform rotate-45 animate-float-slow" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-2/5 left-3/4 w-8 h-8 bg-gray-200/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.4s' }}></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/8 left-1/3 w-6 h-6 border border-blue-300/25 transform rotate-45 animate-float-fast" style={{ animationDelay: '3.2s' }}></div>
        <div className="absolute top-7/8 right-1/4 w-8 h-8 bg-indigo-100/20 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-1/6 left-3/4 w-10 h-10 border-2 border-gray-300/30 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '2.6s' }}></div>
        
        {/* Large background elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 border border-blue-100/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-52 h-52 border border-indigo-100/10 rounded-full animate-rotate-slow" style={{ animationDelay: '30s' }}></div>
        <div className="absolute top-1/4 -right-32 w-44 h-44 border border-gray-100/10 rounded-full animate-rotate-slow" style={{ animationDelay: '20s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('certificates.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('certificates.description')}
          </p>
        </div>        {/* Certificates Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-blue-600 group cursor-pointer"
              onClick={() => openModal(cert.image, cert.title)}
              title={t('certificates.modal.clickToView') as string}
            >
              <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {cert.badge}
                  </span>
                </div>
                {/* Overlay with view icon */}
                <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="space-y-3">
                  {cert.details.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">
                        {detail.label}:
                      </span>
                      <span className={`text-sm font-medium ${
                        detail.isActive ? 'text-green-600' : 'text-gray-700'
                      }`}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
            {t('certificates.achievements.title')}
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600 leading-snug">
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('certificates.achievements.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Modal for image viewing */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[150] p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 flex items-center space-x-2"
              aria-label={t('certificates.modal.close') as string}
            >
              <span className="text-sm hidden sm:block">{t('certificates.modal.escHint')}</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            {/* Image container */}
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt={selectedTitle}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
              </div>
              
              {/* Image title */}
              <div className="p-4 bg-gray-50 border-t">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {selectedTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
