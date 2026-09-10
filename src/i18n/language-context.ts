import { createContext } from "react";
import type { Locale, SiteContent } from "../types/portfolio";
import { en } from "../content/en";
import { fr } from "../content/fr";

export const contentByLocale: Record<Locale, SiteContent> = { fr, en };

export const locales: Locale[] = ["fr", "en"];

export type LanguageContextValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LOCALE_STORAGE_KEY = "portfolio-locale";
