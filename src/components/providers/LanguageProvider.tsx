import React, { useState, ReactNode } from 'react';
import { LanguageContext } from '../../hooks/useLanguage'; // This should be the actual context import
import { Language, LanguageContextType } from '../../types'; // Ensure these types are properly defined
import { translations, languages } from '../../utils/translations'; // Ensure translations structure is correct

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]); // Default language (English)

  // Function to toggle between languages (assuming you have just 2 languages)
  const toggleLanguage = () => {
    setLanguage((prev) => (prev.code === 'en' ? languages[1] : languages[0]));
  };

  // Translation function
  const t = (key: string): string => {
    // Check translations, and if not found, return the key itself as fallback
    return translations[key]?.[language.code] || key;
  };

  // Language context value that is provided to the rest of the app
  const contextValue: LanguageContextType = {
    language,
    translations,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
