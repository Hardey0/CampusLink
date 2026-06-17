import { useTheme } from "../../context/themeContext/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const base =
    "px-4 py-2 rounded-lg border border-border transition text-sm font-medium";

  const getClass = (mode) =>
    theme === mode
      ? "bg-primary text-black" // active
      : "bg-bg-secondary text-text hover:bg-primary/60"; // inactive

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`${base} ${getClass("light")}`}
      >
        ☀️ Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`${base} ${getClass("dark")}`}
      >
        🌙 Dark
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`${base} ${getClass("system")}`}
      >
        💻 System
      </button>
    </div>
  );
};

export default ThemeToggle;