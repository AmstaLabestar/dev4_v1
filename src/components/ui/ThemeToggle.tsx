import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  labels: { toLight: string; toDark: string };
};

const ThemeToggle = ({ theme, onToggle, labels }: ThemeToggleProps) => {
  const isDark = theme === "dark";
  const label = isDark ? labels.toLight : labels.toDark;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      // 44px minimum : cible tactile accessible.
      className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
};

export default ThemeToggle;
