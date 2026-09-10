import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MobileNav from "./components/layout/MobileNav";
import SeoHead from "./components/SeoHead";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Method from "./components/sections/Method";
import Profile from "./components/sections/Profile";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { content } = useLanguage();

  return (
    <>
      <SeoHead />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-accent-fg"
      >
        {content.nav.skipToContent}
      </a>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Reserve la hauteur de la barre basse mobile sous le contenu. */}
      <div className="page-bottom-space">
        <main id="main">
          <Hero />
          <Profile />
          <Skills />
          <Experience />
          <Projects />
          <Method />
          <Contact />
        </main>

        <Footer />
      </div>

      <MobileNav theme={theme} onToggleTheme={toggleTheme} />
    </>
  );
};

export default App;
