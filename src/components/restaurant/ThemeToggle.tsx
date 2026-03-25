import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gold/20"
      title={isLight ? "Dark mode" : "Light mode"}
    >
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{ opacity: isLight ? 1 : 0, transform: isLight ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0)" }}
      >
        <Sun size={20} className="text-gold" />
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{ opacity: isLight ? 0 : 1, transform: isLight ? "rotate(-90deg) scale(0)" : "rotate(0deg) scale(1)" }}
      >
        <Moon size={20} className="text-gold" />
      </span>
    </button>
  );
};

export default ThemeToggle;
