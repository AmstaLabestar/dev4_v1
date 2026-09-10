import { useEffect, useMemo, useState } from "react";
import {
  Braces,
  BriefcaseBusiness,
  FileText,
  Layers,
  Mail,
  Menu,
  User,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { site } from "../../content/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useLanguage } from "../../hooks/useLanguage";
import type { Theme } from "../../hooks/useTheme";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

/**
 * L'icone appartient a la presentation, pas au contenu : elle est resolue ici
 * par identifiant de section, et non stockee dans les fichiers de traduction.
 */
const icons: Record<string, LucideIcon> = {
  profil: User,
  competences: Braces,
  experience: BriefcaseBusiness,
  projets: Layers,
  methode: Workflow,
  contact: Mail,
};

/**
 * Les quatre onglets de la barre basse. Le reste des sections est accessible
 * par l'onglet « Menu » : au-dela de cinq cellules, les libelles deviennent
 * illisibles et les cibles tactiles passent sous le seuil des 44px.
 *
 * Ces quatre-la repondent aux questions qu'un recruteur se pose en premier :
 * ce qu'il sait faire, ou il l'a fait, ce qu'il a construit, comment le joindre.
 */
const tabIds = ["competences", "experience", "projets", "contact"];

type MobileNavProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const MobileNav = ({ theme, onToggleTheme }: MobileNavProps) => {
  const { locale, content } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const ids = useMemo(() => content.nav.items.map((item) => item.id), [content.nav.items]);
  const active = useActiveSection(ids);

  const tabs = useMemo(
    () =>
      tabIds
        .map((id) => content.nav.items.find((item) => item.id === id))
        .filter((item): item is { id: string; label: string } => item !== undefined),
    [content.nav.items],
  );

  // Menu ouvert : la page derriere ne doit pas defiler.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const themeLabels =
    locale === "fr"
      ? { toLight: "Activer le thème clair", toDark: "Activer le thème sombre" }
      : { toLight: "Switch to light theme", toDark: "Switch to dark theme" };

  const menuLabel = "Menu";
  const menuHoldsActive = active !== "" && !tabIds.includes(active);

  return (
    <>
      {/*
        Barre de navigation basse, visible uniquement sous le point de rupture
        desktop. `pb-safe` reserve la place de l'indicateur d'accueil iOS.
      */}
      <nav
        aria-label={content.nav.primary}
        className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg lg:hidden"
      >
        <ul className="grid grid-cols-5">
          {tabs.map((tab) => {
            const Icon = icons[tab.id] ?? Layers;
            const isActive = active === tab.id;

            return (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  aria-current={isActive ? "true" : undefined}
                  // 56px de haut : confortablement au-dessus du minimum de 44px.
                  className={`flex h-14 flex-col items-center justify-center gap-1 px-1 transition-colors ${
                    isActive ? "text-accent" : "text-fg-subtle"
                  }`}
                >
                  <Icon
                    className="h-[18px] w-[18px] shrink-0"
                    strokeWidth={isActive ? 2.25 : 1.75}
                    aria-hidden="true"
                  />
                  <span className="w-full truncate text-center text-[10px] font-medium leading-none">
                    {tab.label}
                  </span>
                </a>
              </li>
            );
          })}

          <li>
            {/*
              Profil et Methode n'ont pas d'onglet dedie : quand l'une d'elles
              est a l'ecran, c'est « Menu » qui porte l'etat actif, pour que la
              barre ne paraisse jamais deconnectee de la position reelle.
            */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`flex h-14 w-full flex-col items-center justify-center gap-1 px-1 transition-colors ${
                menuHoldsActive ? "text-accent" : "text-fg-subtle"
              }`}
            >
              <Menu
                className="h-[18px] w-[18px] shrink-0"
                strokeWidth={menuHoldsActive ? 2.25 : 1.75}
                aria-hidden="true"
              />
              <span className="text-[10px] font-medium leading-none">{menuLabel}</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Feuille plein ecran : toutes les sections, le CV et les reglages. */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={content.nav.primary}
          className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden"
        >
          <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-border">
            <span className="font-mono text-sm text-fg">{content.hero.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={content.nav.menuClose}
              autoFocus
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface text-fg-muted"
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          </div>

          <div className="shell flex-1 overflow-y-auto py-4">
            <ul>
              {content.nav.items.map((item) => {
                const Icon = icons[item.id] ?? Layers;

                return (
                  <li key={item.id} className="border-b border-border">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-[56px] items-center gap-3 text-base text-fg"
                    >
                      <Icon className="h-[18px] w-[18px] text-fg-subtle" aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                );
              })}

              <li className="border-b border-border">
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[56px] items-center gap-3 text-base text-fg"
                >
                  <FileText className="h-[18px] w-[18px] text-fg-subtle" aria-hidden="true" />
                  {content.nav.cv}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle theme={theme} onToggle={onToggleTheme} labels={themeLabels} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;
