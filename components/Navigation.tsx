'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { lockScroll, isIOS, createScrollDebouncer } from '@/utils/ios-utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navigation() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const unlockScrollRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    // Дебаунс для скролла для лучшей производительности на iOS
    const optimizedHandleScroll = createScrollDebouncer(() => {
      setIsScrolled(window.scrollY > 50);
    }, 16);

    window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', optimizedHandleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Блокировка скролла при открытом мобильном меню - оптимизировано для iOS
  useEffect(() => {
    if (isMenuOpen) {
      unlockScrollRef.current = lockScroll();
    } else {
      if (unlockScrollRef.current) {
        unlockScrollRef.current();
        unlockScrollRef.current = null;
      }
    }

    return () => {
      if (unlockScrollRef.current) {
        unlockScrollRef.current();
        unlockScrollRef.current = null;
      }
    };
  }, [isMenuOpen]);
  const menuItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#team', label: t('nav.team') },
    { href: '#certificates', label: t('nav.certificates') },
    { href: '#cooperation', label: t('nav.cooperation') },
    { href: '#contacts', label: t('nav.contacts'), special: false },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Сначала закрываем меню
    setIsMenuOpen(false);
    setIsAnimating(true);
    
    // Небольшая задержка для завершения анимации закрытия меню
    setTimeout(() => {
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
      setIsAnimating(false);
    }, 300);
  };

  const toggleMenu = () => {
    if (isAnimating) return; // Предотвращаем повторные клики во время анимации
    
    setIsAnimating(true);
    setIsMenuOpen(!isMenuOpen);
    
    // Сбрасываем флаг анимации после завершения
    const duration = isIOS() ? 400 : 300; // Больше времени для iOS
    setTimeout(() => {
      setIsAnimating(false);
    }, duration);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-1"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Логотип Медичного центру"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="ml-2 text-left">
              <div className="text-base font-bold text-gray-800 leading-tight">
                {t('hero.title')}
              </div>
              <div className="text-base font-bold text-gray-800">
                {t('hero.subtitle')}
              </div>
            </div>
          </button>          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`font-medium px-3 py-2 rounded-full transition-all duration-200 hover:transform hover:-translate-y-0.5 whitespace-nowrap ${
                    item.special 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <LanguageSelector compact={true} />
          </div>

          {/* Mobile controls - Language selector and menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Language Selector for Mobile */}
            <LanguageSelector compact={true} />
            
            {/* Mobile menu button - оптимизировано для iOS */}
            <button
              className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 mobile-menu-button"
              onClick={toggleMenu}
              disabled={isAnimating}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              style={{ transform: 'translate3d(0, 0, 0)' }} // Аппаратное ускорение
            >
              <div className="relative w-6 h-5" style={{ transform: 'translate3d(0, 0, 0)' }}>
                <span 
                  className={`absolute block w-6 h-0.5 bg-gray-700 hamburger-line ${
                    isMenuOpen ? 'rotate-45 top-2' : 'top-0'
                  }`}
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                />
                <span 
                  className={`absolute block w-6 h-0.5 bg-gray-700 hamburger-line top-2 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                />
                <span 
                  className={`absolute block w-6 h-0.5 bg-gray-700 hamburger-line ${
                    isMenuOpen ? '-rotate-45 top-2' : 'top-4'
                  }`}
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - оптимизировано для iOS */}
        <div className={`md:hidden absolute top-full left-0 right-0 mobile-menu-container transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-2'
        }`}>
          <div className="mobile-menu-backdrop bg-white/98 border-t border-gray-200 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`font-medium px-4 py-3 rounded-xl mobile-menu-item transform transition-all duration-200 ${
                      isMenuOpen 
                        ? `translate-x-0 opacity-100` 
                        : 'translate-x-4 opacity-0'
                    } ${
                      item.special
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-100'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: 'translate3d(0, 0, 0)' // Принудительное использование аппаратного ускорения
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
