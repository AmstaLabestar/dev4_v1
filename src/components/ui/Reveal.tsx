import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Decalage en millisecondes, pour echelonner une liste d'elements. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Apparition unique a l'entree dans le viewport, en CSS pur.
 * Remplace framer-motion (~120 Ko) par un IntersectionObserver et une keyframe.
 *
 * Si l'utilisateur a demande a reduire les animations, le contenu est rendu
 * visible immediatement : aucun observateur n'est meme installe.
 */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Reveal = ({ children, delay = 0, as: Tag = "div", className = "" }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (visible) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Seuil a 0 : un seul pixel visible suffit a declencher l'apparition.
      // Avec un seuil plus eleve, un element dont seul un liseré depasse en haut
      // de l'ecran - ce qui arrive apres un saut d'ancre - restait invisible.
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`${visible ? "animate-reveal" : "opacity-0"} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
