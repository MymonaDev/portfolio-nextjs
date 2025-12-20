"use client";
import { TabsContentProps } from "@/types/navbar";
import { useSkillsTabs } from "./SkillsTabsProvider";

// TabsContent component to render content based on the active tab
export const SkillsTabsContent = ({ value, children }: TabsContentProps) => {
  const { activeSkillsTab } = useSkillsTabs();

  return activeSkillsTab === value ? <div key={value}>{children}</div> : null;
};
