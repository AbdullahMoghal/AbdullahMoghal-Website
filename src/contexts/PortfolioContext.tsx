import React, { createContext, useContext, useState, ReactNode } from 'react';

type PortfolioMode = 'normal' | 'design';

interface PortfolioContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PortfolioMode>('normal');

  const toggleMode = () => {
    setMode(prev => prev === 'normal' ? 'design' : 'normal');
  };

  return (
    <PortfolioContext.Provider value={{ mode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

