import { useLanguage } from "../../hooks/useLanguage";

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="shell flex flex-col gap-2 text-sm text-fg-subtle md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {content.hero.name}. {content.footer.rights}
        </p>
        <p className="font-mono text-xs">{content.footer.builtWith}</p>
      </div>
    </footer>
  );
};

export default Footer;
