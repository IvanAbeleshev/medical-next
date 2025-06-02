'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'uk' | 'en';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation type
interface Translations {
  [key: string]: string | string[] | Translations;
}

// Import translations
import ukTranslations from '../locales/uk.json';
import enTranslations from '../locales/en.json';

const translations: Record<Language, Translations> = {
  uk: ukTranslations,
  en: enTranslations,
};

// Helper function to get nested translation
const getNestedTranslation = (obj: Translations, path: string): string | string[] => {
  const keys = path.split('.');
  let current: any = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return path; // Return key if translation not found
    }
  }
  
  // Return the value if it's a string or array, otherwise return the path
  if (typeof current === 'string' || Array.isArray(current)) {
    return current;
  }
  
  return path;
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('uk');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'uk' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Update document language
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string | string[] => {
    return getNestedTranslation(translations[language], key);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const value = {
    language,
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
