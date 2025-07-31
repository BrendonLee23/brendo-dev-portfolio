import React, { createContext, useContext, useState, ReactNode } from 'react';
import { portfolioData } from '@/data/portfolio';

type Language = 'pt' | 'en';
type PortfolioData = typeof portfolioData.pt;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const data = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};