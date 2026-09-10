import { useContext } from "react";
import { LanguageContext } from "../i18n/language-context";

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage doit etre utilise a l'interieur de <LanguageProvider>.");
  }

  return context;
};
