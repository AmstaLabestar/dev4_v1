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
      <div className="navbar rounded-full border border-base-300 bg-base-100/90 px-4 shadow-sm backdrop-blur md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Logo Dev4" className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-base-content/50">Portfolio</p>
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
            className="btn btn-primary ml-2 rounded-full px-5 text-sm text-white"
          >
            CV
          </a>
        </nav>

        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-circle" aria-label="Ouvrir le menu">
            <Menu className="h-5 w-5" />
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-60 rounded-3xl border border-base-300 bg-base-100 p-3 shadow-xl"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li className="mt-2">
              <a href="/CV_Hamza_BIKIENGA.pdf" target="_blank" rel="noopener noreferrer">
                Voir le CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
