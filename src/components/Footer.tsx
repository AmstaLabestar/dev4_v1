const Footer = () => {
  return (
    <footer className="border-t border-base-300 py-8">
      <div className="flex flex-col gap-2 text-center text-sm text-base-content/60 md:flex-row md:items-center md:justify-between md:text-left">
        <p>Hamza Bikienga | Developpeur full-stack & mobile</p>
        <p>© {new Date().getFullYear()} Dev4. Portfolio concu pour montrer un profil plus mature et orienté production.</p>
      </div>
    </footer>
  );
};

export default Footer;
