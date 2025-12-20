"use client";
import React from "react";
import { useAboutTabs } from "./AboutTabsProvider";
import { TabsContentProps } from "@/types/navbar";

// TabsContent component to render content based on the active tab
export const AboutTabsContent = ({ value, children }: TabsContentProps) => {
  const { activeAboutTab } = useAboutTabs();

  return activeAboutTab === value ? <div>{children}</div> : null;
};
