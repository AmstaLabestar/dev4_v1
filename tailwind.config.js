/** @type {import('tailwindcss').Config} */

// Toutes les couleurs proviennent de tokens CSS definis dans src/index.css.
// Aucune couleur en dur ne doit etre ecrite dans les composants : cela garantit
// que les themes clair et sombre restent a parite stricte.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        border: token("border"),
        "border-strong": token("border-strong"),
        fg: token("fg"),
        "fg-muted": token("fg-muted"),
        "fg-subtle": token("fg-subtle"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
        "accent-soft": token("accent-soft"),
        positive: token("positive"),
        caution: token("caution"),
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Echelle typographique stricte, en rem, avec interlignage explicite.
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.875rem" }],
        xl: ["1.375rem", { lineHeight: "1.875rem", letterSpacing: "-0.01em" }],
        "2xl": ["1.75rem", { lineHeight: "2.25rem", letterSpacing: "-0.02em" }],
        "3xl": ["2.25rem", { lineHeight: "2.625rem", letterSpacing: "-0.025em" }],
        "4xl": ["3rem", { lineHeight: "3.25rem", letterSpacing: "-0.03em" }],
        "5xl": ["3.75rem", { lineHeight: "4rem", letterSpacing: "-0.035em" }],
      },
      borderRadius: {
        // Systeme a trois valeurs uniquement.
        sm: "6px",
        DEFAULT: "10px",
        md: "10px",
        lg: "16px",
      },
      maxWidth: {
        prose: "68ch",
        shell: "1120px",
      },
      keyframes: {
        reveal: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        reveal: "reveal 320ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
