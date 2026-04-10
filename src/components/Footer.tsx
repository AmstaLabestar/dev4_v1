const Footer = () => {
  return (
    <footer className="py-8">
      <div className="surface-panel flex flex-col gap-2 rounded-[1.75rem] px-5 py-5 text-center text-sm text-base-content/60 md:flex-row md:items-center md:justify-between md:text-left">
        <p>Hamza Bikienga, Software Engineer</p>
        <p>© {new Date().getFullYear()} Dev4. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
