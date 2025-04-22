"use client";

import { createContext, ReactNode, useContext, useState } from 'react';
import { getTranslation } from '../utils/i18n';

type Locale = 'pt-BR' | 'en-US' | 'es-ES';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: ReturnType<typeof getTranslation>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('pt-BR');

  const value = {
    locale,
    setLocale,
    translations: getTranslation(locale),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};