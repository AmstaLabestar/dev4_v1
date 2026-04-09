import { Moon, SunMedium } from "lucide-react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Activer le theme clair" : "Activer le theme sombre"}
      title={isDark ? "Theme clair" : "Theme sombre"}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
        isDark
          ? "border-sky-200/15 bg-slate-900/88 text-sky-300 hover:bg-slate-800"
          : "border-sky-200/70 bg-white/90 text-sky-700 hover:border-sky-300 hover:bg-sky-50"
      }`}
    >
      {isDark ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
