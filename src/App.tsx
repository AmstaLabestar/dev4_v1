import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MobileDock from "./components/MobileDock";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";

type ThemeMode = "light" | "dark";

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("portfolio-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const App = () => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="app-shell min-h-screen bg-transparent">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu
      </a>
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-4 md:px-6 lg:px-8 lg:pb-12">
        <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
        <main id="content">
          <Home />
          <Experiences />
          <Projets />
          <Expertise />
          <Contact />
        </main>
        <Footer />
      </div>
      <a
        href="#home"
        className="desktop-scrolltop surface-panel fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full text-base-content transition hover:-translate-y-1 hover:text-primary lg:inline-flex"
        aria-label="Remonter en haut"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
      <MobileDock theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
    </div>
  );
};

export default App;
