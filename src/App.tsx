
import Experiences from "./components/Experiences"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projets from "./components/Projets"



const App = () => {
  return (
    
      <div className="p-5 md:px-[15%]">
        <Navbar/>
        <Home/>
      
        <Experiences />
        <Projets />
        <Footer />
        <a
  href="#"
  className="fixed bottom-6 right-6 z-50 btn btn-primary btn-circle text-white shadow-lg hover:scale-110 transition"
  aria-label="Retour en haut"
>
  ↑
</a>

      </div>
  )
}

export default App
