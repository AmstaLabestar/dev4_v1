import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";

const App = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-4 md:px-6 lg:px-8">
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
    </div>
  );
};

export default App;
