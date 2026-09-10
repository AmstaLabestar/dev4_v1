import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Locale } from "../types/portfolio";
import {
  LOCALE_STORAGE_KEY,
  LanguageContext,
  contentByLocale,
  type LanguageContextValue,
} from "./language-context";

/**
 * Langue initiale : choix explicite de l'utilisateur en priorite, sinon la
 * langue du navigateur, sinon le francais.
 */
const readInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "fr";

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
  } catch {
    // Stockage indisponible (navigation privee, cookies bloques) : on ignore.
  }

  return window.navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    // `lang` doit suivre la langue affichee : lecteurs d'ecran et moteurs de
    // recherche s'appuient dessus.
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Persistance optionnelle : l'echec ne doit pas casser la bascule.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, content: contentByLocale[locale], setLocale }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
