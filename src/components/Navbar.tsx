import { Menu } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#experiences", label: "Experience" },
  { href: "#projets", label: "Projets" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50">
      <div className="navbar surface-panel rounded-full px-4 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Logo Dev4" className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-base-content/45">Portfolio</p>
            <p className="text-sm font-semibold text-base-content">Hamza Bikienga</p>
          </div>
        </a>

        <nav className="ml-auto hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-base-content/70 transition hover:bg-base-200 hover:text-base-content"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/CV_Hamza_BIKIENGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary ml-2 rounded-full border-0 px-5 text-sm text-white shadow-none"
          >
            CV
          </a>
        </nav>

        <a
          href="/CV_Hamza_BIKIENGA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost ml-auto rounded-full px-4 text-sm lg:hidden"
          aria-label="Voir le CV"
        >
          <Menu className="h-5 w-5" />
          CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;
