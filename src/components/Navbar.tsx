import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <img src={logo} alt="logo" className="w-20 h-20"/>
        Dev <span className="text-primary">4</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="btn btn-sm btn-ghost hover:text-primary">Acueil</a>
        </li>
                <li>
          <a href="#home" className="btn btn-sm btn-ghost  hover:text-primary">A propos</a>
        </li>
                <li>
          <a href="#experiences" className="btn btn-sm btn-ghost  hover:text-primary">Mes expériences</a>
        </li>
                <li>
          <a href="#projets" className="btn btn-sm btn-ghost  hover:text-primary">Mes projet</a>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
