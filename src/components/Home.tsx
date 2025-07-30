
import { motion } from "framer-motion";
// import your image file below, for example:
import dev4Img from "../assets/Hamza.jpg";
import { Mail } from "lucide-react";

const Home = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      
      <motion.div 
        className='flex flex-col'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          bonjour, <br /> je suis 
          <span className="text-primary"> Dev4</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          étudiant en génie logiciel passionné par le développement web et l’IA.<br />
      Je conçois des solutions modernes avec React, Django, et Node.js,<br /> et je m’intéresse à l’automatisation, l’analyse de données et l’accessibilité.
        </p>
        <a className="btn btn-primary hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out md:w-fit">
          <Mail className='w-5 h-5 mr-2' />
          Contactez-moi 
        </a>
<a
  href="/CV_Hamza_BIKIENGA.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline btn-primary mt-3 md:w-fit hover:scale-105 transition"
>
  📄 Voir mon CV
</a>


      </motion.div>

      <motion.div
        className="md:ml-10 mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={dev4Img}
          alt="dev4"
          className='w-72 md:w-96 object-cover border-8 border-primary shadow-xl'
          style={{
            borderRadius: '0px 200px 200px 0px',
          }}
        />
      </motion.div>

    </div>
  )
}

export default Home;



