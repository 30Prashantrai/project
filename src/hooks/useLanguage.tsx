import React, { createContext, useContext, ReactNode } from 'react';
import { LanguageContext as LanguageContextType } from '../types';

// Default/fallback language context value (for safety)
const defaultLanguageContext: LanguageContextType = {
  t: (key: string) => key,  // dummy translation function
  language: 'en',
};

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // You can add state or i18n logic here, for now simple static

  const languageContextValue: LanguageContextType = {
    t: (key: string) => {
      const translations: Record<string, string> = {
        'location.title': 'Location',
        'location.address': 'Address',
        'location.phone': 'Phone',
        'location.email': 'Email',
        'location.customAddress': 'Custom Address',
        'location.updateMap': 'Update Map',
        // add more translation keys here as needed
      };
      return translations[key] || key;
    },
    language: 'en',
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
