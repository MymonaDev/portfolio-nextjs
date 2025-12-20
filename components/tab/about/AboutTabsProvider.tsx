"use client"
import { AboutTabsContextType, AboutTabsProviderProps} from '@/types/navbar';
import React, { createContext, useContext, useState } from 'react';



// Create a context to manage tabs state
const AboutTabsContext = createContext<AboutTabsContextType | undefined>(undefined);

// TabsProvider component to provide context to its children
export const AboutTabsProvider = ({ defaultValue, children }:AboutTabsProviderProps) => {
  const [activeAboutTab, setActiveAboutTab] = useState(defaultValue);

  const AboutTabValue = {
    activeAboutTab,
    setActiveAboutTab,
  };

  return (
    <AboutTabsContext.Provider value={AboutTabValue}>
      {children}
    </AboutTabsContext.Provider>
  );
};

// Hook to use the tabs context
export const useAboutTabs = () => {
  const context = useContext(AboutTabsContext);
  if (!context) {
    throw new Error('useAboutTabs must be used within a AboutTabsProvider');
  }
  return context;
};
