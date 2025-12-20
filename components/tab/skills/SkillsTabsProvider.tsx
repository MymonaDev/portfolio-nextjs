"use client"
import { SkillsTabsContextType, SkillsTabsProviderProps } from '@/types/navbar';
import React, { createContext, useContext, useState } from 'react';



// Create a context to manage tabs state
const SkillsTabsContext = createContext<SkillsTabsContextType | undefined>(undefined);

// TabsProvider component to provide context to its children
export const SkillsTabsProvider = ({ defaultValue, children }:SkillsTabsProviderProps) => {
  const [activeSkillsTab, setActiveSkillsTab] = useState(defaultValue);

  const SkillsTabValue = {
    activeSkillsTab,
    setActiveSkillsTab,
  };

  return (
    <SkillsTabsContext.Provider value={SkillsTabValue}>
      {children}
    </SkillsTabsContext.Provider>
  );
};

// Hook to use the tabs context
export const useSkillsTabs = () => {
  const context = useContext(SkillsTabsContext);
  if (!context) {
    throw new Error('useSkillsTabs must be used within a SkillsTabsProvider');
  }
  return context;
};
