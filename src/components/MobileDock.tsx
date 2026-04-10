import { BriefcaseBusiness, Home, Layers3, Mail, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Accueil", icon: Home },
  { href: "#experiences", label: "Parcours", icon: BriefcaseBusiness },
  { href: "#projets", label: "Projets", icon: Layers3 },
  { href: "#expertise", label: "Forces", icon: Sparkles },
  { href: "#contact", label: "Contact", icon: Mail },
];

type MobileDockProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const MobileDock = ({ theme, onToggleTheme }: MobileDockProps) => {
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 rounded-full px-2 py-2 shadow-2xl backdrop-blur lg:hidden ${
        isDark
          ? "border border-white/12 bg-slate-950/92 text-white shadow-slate-950/20"
          : "border border-sky-200/70 bg-sky-100/70 text-sky-600 shadow-sky-300/20"
      }`}
      aria-label="Navigation mobile"
    >
      <ul className="grid grid-cols-6 gap-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`flex flex-col items-center gap-1 rounded-full px-2 py-2 text-[11px] font-medium transition ${
                  isDark
                    ? "text-white/75 hover:bg-white/10 hover:text-white"
                    : "text-sky-600 hover:bg-sky-100/80 hover:text-sky-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </a>
            </li>
          );
        })}
        <li className="flex items-center justify-center">
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
            className={
              isDark
                ? "h-10 w-10 border-white/10 bg-white/5 text-sky-300 hover:bg-white/10"
                : "h-10 w-10 border-sky-200/60 bg-white/70 text-sky-700 hover:bg-white"
            }
          />
        </li>
      </ul>
    </nav>
  );
};

export default MobileDock;
