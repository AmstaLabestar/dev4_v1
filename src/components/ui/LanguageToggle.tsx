import { useLanguage } from "../../hooks/useLanguage";
import { locales } from "../../i18n/language-context";

/**
 * Bascule FR/EN. Rendue comme un groupe de boutons radio implicite :
 * l'etat courant est annonce par `aria-pressed`, pas seulement par la couleur.
 */
const LanguageToggle = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex h-11 items-center rounded-sm border border-border bg-surface p-1"
      role="group"
      aria-label={locale === "fr" ? "Choix de la langue" : "Language selection"}
    >
      {locales.map((value) => {
        const active = value === locale;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            aria-pressed={active}
            lang={value}
            className={`h-9 rounded-sm px-3 font-mono text-2xs uppercase transition-colors ${
              active
                ? "bg-surface-2 text-fg"
                : "text-fg-subtle hover:text-fg"
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
