import { useState, useEffect } from "react";
import { ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }) => {
 // Get system preference
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Get initial theme from localStorage or system
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "system";

    // Check localStorage first
    const saved = localStorage.getItem("campusAppTheme");
    return saved || "system";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme
  useEffect(() => {
    let isDark = false;

    // Determine if dark mode should be applied
    if (theme === "dark") isDark = true;
    else if (theme === "light") isDark = false;
    else isDark = getSystemTheme(); // system

    // Toggle dark class on root
    document.documentElement.classList.toggle("dark", isDark);

    localStorage.setItem("campusAppTheme", theme);
  }, [theme]);

  // Listen to system changes (only if using system)
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    // If user is following system, update theme on system change
    const handleChange = (e) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    // Listen to system changes
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};