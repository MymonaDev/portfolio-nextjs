"use client";

import { useThemeStore } from "@/store/themeStore";

const AnimatedDarkBg = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className="fixed bottom-0 right-0 z-[-1] w-[300vmax] h-[300vmax] rounded-full bg-darkBgColor"
      style={{
        transform: `translate(50%, 50%) scale(${theme === "dark" ? 1 : 0})`,
        transition: "transform 1100ms ease-in-out",
      }}
    />
  );
};

export default AnimatedDarkBg;
