import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  /**
   * `solid` sert aux etiquettes de statut, `outline` aux technologies.
   * L'accent n'est jamais utilise decorativement.
   */
  variant?: "outline" | "solid" | "accent";
};

const styles = {
  outline: "border-border bg-surface text-fg-muted",
  solid: "border-border-strong bg-surface-2 text-fg",
  accent: "border-accent/30 bg-accent-soft text-accent",
} as const;

const Tag = ({ children, variant = "outline" }: TagProps) => (
  <span
    className={`inline-flex items-center rounded-sm border px-2 py-1 font-mono text-2xs uppercase ${styles[variant]}`}
  >
    {children}
  </span>
);

export default Tag;
