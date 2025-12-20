"use client";
import { TabsContentProps } from "@/types/navbar";
import { useTabs } from "./TabsProvider";

// TabsContent component to render content based on the active tab
export const TabsContent = ({ value, children }: TabsContentProps) => {
  const { activeTab } = useTabs();

  return activeTab === value ? <div key={value}>{children}</div> : null;
};
