import { TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";

export interface CursorProps extends TargetAndTransition {
  left: number;
  width: number;
  opacity: number;
}

export interface sectionRefsType {
  [key: string]: {
    offsetLeft: number;
    offsetWidth: number;
  };
}

// export interface TabsBtnProps {
//   value: string; // assuming `value` is a string, you can change this if it's another type
//   children: React.ReactNode; // for any React content
//   setMenu: (value: string) => void; // assuming `setMenu` accepts a string value
// }

export interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
export interface AboutTabsContextType {
  activeAboutTab: string;
  setActiveAboutTab: (value: string) => void;
}
export interface SkillsTabsContextType {
  activeSkillsTab: string;
  setActiveSkillsTab: (value: string) => void;
}

export interface TabsProviderProps {
  defaultValue: string; // Ensure it's the expected type (string, number, etc.)
  children: ReactNode; // React children
}
export interface AboutTabsProviderProps {
  defaultValue: string; // Ensure it's the expected type (string, number, etc.)
  children: ReactNode; // React children
}
export interface SkillsTabsProviderProps {
  defaultValue: string; // Ensure it's the expected type (string, number, etc.)
  children: ReactNode; // React children
}
export interface TabsContentProps {
  value: string; // Ensure it's the expected type (string, number, etc.)
  children: ReactNode; // React children
}
