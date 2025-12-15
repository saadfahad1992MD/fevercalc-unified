import { useState, useEffect, useCallback } from 'react';
import { getTranslation, Translation } from '@/translations';

export function useLanguage(defaultLang: string, availableLanguages: string[]) {
  const [language, setLanguage] = useState<string>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('fevercalc-language');
    if (stored && availableLanguages.includes(stored)) {
      return stored;
    }
    return defaultLang;
  });

  const [translations, setTranslations] = useState<Translation>(() => 
    getTranslation(language)
  );

  useEffect(() => {
    setTranslations(getTranslation(language));
    localStorage.setItem('fevercalc-language', language);
    
    // Update document direction for RTL languages
    document.documentElement.dir = ['ar', 'he', 'fa'].includes(language) ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    const currentIndex = availableLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    setLanguage(availableLanguages[nextIndex]);
  }, [language, availableLanguages]);

  const switchToLanguage = useCallback((lang: string) => {
    if (availableLanguages.includes(lang)) {
      setLanguage(lang);
    }
  }, [availableLanguages]);

  return {
    language,
    translations,
    toggleLanguage,
    switchToLanguage,
    isRTL: ['ar', 'he', 'fa'].includes(language),
  };
}
