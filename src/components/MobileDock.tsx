import { BriefcaseBusiness, Home, Layers3, Mail, Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Accueil", icon: Home },
  { href: "#experiences", label: "Parcours", icon: BriefcaseBusiness },
  { href: "#projets", label: "Projets", icon: Layers3 },
  { href: "#expertise", label: "Forces", icon: Sparkles },
  { href: "#contact", label: "Contact", icon: Mail },
];

const MobileDock = () => {
  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-full border border-white/60 bg-slate-950/92 px-2 py-2 text-white shadow-2xl shadow-slate-950/20 backdrop-blur lg:hidden"
      aria-label="Navigation mobile"
    >
      <ul className="grid grid-cols-5 gap-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex flex-col items-center gap-1 rounded-full px-2 py-2 text-[11px] font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileDock;
