import { useMemo } from "react";
import { FileText } from "lucide-react";
import { site } from "../../content/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useLanguage } from "../../hooks/useLanguage";
import type { Theme } from "../../hooks/useTheme";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

/**
 * Sur desktop, le header porte la navigation complete.
 * Sur mobile, il se reduit au nom, au CV et au theme : la navigation entre
 * sections est assuree par la barre basse (voir MobileNav).
 */
const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  const { locale, content } = useLanguage();

  const ids = useMemo(() => content.nav.items.map((item) => item.id), [content.nav.items]);
  const active = useActiveSection(ids);

  const themeLabels =
    locale === "fr"
      ? { toLight: "Activer le thème clair", toDark: "Activer le thème sombre" }
      : { toLight: "Switch to light theme", toDark: "Switch to dark theme" };

  return (
    // Fond opaque plutot qu'un flou translucide : moins de repaint au defilement
    // et un contraste de texte qui ne depend pas du contenu qui passe dessous.
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="shell flex h-16 items-center gap-4">
        <a href="#top" className="font-mono text-sm font-medium text-fg">
          {content.hero.name}
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label={content.nav.primary}>
          {content.nav.items.map((item) => {
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-sm px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-sm border border-border bg-surface px-3 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            {content.nav.cv}
          </a>

          {/* Langue et theme restent accessibles depuis la feuille du menu mobile. */}
          <div className="hidden lg:block">
            <LanguageToggle />
          </div>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} labels={themeLabels} />
        </div>
      </div>
    </header>
  );
};

export default Header;
