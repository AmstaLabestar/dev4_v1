import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MobileDock from "./components/MobileDock";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";

const App = () => {
  return (
    <div className="app-shell min-h-screen bg-transparent">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-4 md:px-6 lg:px-8 lg:pb-12">
        <Navbar />
        <main>
          <Home />
          <Experiences />
          <Projets />
          <Expertise />
          <Contact />
        </main>
        <Footer />
      </div>
      <MobileDock />
    </div>
  );
};

export default App;
