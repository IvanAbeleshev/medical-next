'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

// Custom ChevronDown SVG component
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19 9l-7 7-7-7" 
    />
  </svg>
);

interface LanguageSelectorProps {
  compact?: boolean;
}

export default function LanguageSelector({ compact = false }: LanguageSelectorProps) {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center transition-all duration-150 ${
          compact 
            ? 'p-2 rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-sm bg-white' 
            : 'space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 bg-white'
        }`}
        aria-label="Select language"
      >
        <span className={`${compact ? 'text-xl' : 'text-lg'}`}>{currentLanguage?.flag}</span>
        {!compact && (
          <>
            <span className="text-sm font-medium text-gray-700">
              {currentLanguage?.name}
            </span>
            <ChevronDownIcon 
              className={`w-4 h-4 text-gray-500 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </>
        )}
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${
          compact ? 'right-0 w-32' : 'left-0 w-full'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code as 'uk' | 'en');
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                language === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
