import { create } from "zustand";

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
  initializeTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "light",
  initializeTheme: () => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("zenuiTheme") as
        | "light"
        | "dark"
        | null;
      if (storedTheme) {
        set({ theme: storedTheme });
      } else {
        // Check system preference
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        const initialTheme = prefersDark ? "dark" : "light";
        set({ theme: initialTheme });
        localStorage.setItem("zenuiTheme", initialTheme);
      }
    }
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("zenuiTheme", newTheme);
      }
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
export { useThemeStore };
