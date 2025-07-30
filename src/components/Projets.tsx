// // import Experiences from "./components/Experiences"
// // import Home from "./components/Home"
// // import Navbar from "./components/Navbar"
// // import Projets from "./components/Projets"


// // const App = () => {
// //   return (
    
// //       <div className="p-5 md:px-[15%]">
// //         <Navbar/>
// //         <Home/>
// //       <Experiences />
// //       <Projets />
// //       </div>
// //   )
// // }

// // export default App
// // Projets.jsx
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "eNaissance",
//     image: "/images/enaissance.png", // chemin vers ton image (public/images/enaissance.png)
//     demo: "https://demo-enaissance.example.com",
//     github: "https://github.com/toncompte/enaissance"
//   },
//   {
//     title: "E-commerce",
//     image: "/images/ecommerce.png",
//     demo: "https://demo-ecommerce.example.com",
//     github: "https://github.com/toncompte/ecommerce"
//   },
//   {
//     title: "TodoList",
//     image: "/images/todolist.png",
//     demo: "https://demo-todolist.example.com",
//     github: "https://github.com/toncompte/todolist"
//   },
// ];

// const Projets = () => {
//   return (
//     <section className="py-20 bg-base-100" id="projets">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Mes <span className="text-primary">Projets</span>
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               className="card shadow-xl border border-base-300 overflow-hidden"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <figure className="h-48 md:h-56 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover hover:scale-110 transition duration-500"
//                 />
//               </figure>

//               <div className="card-body bg-base-100">
//                 <h4 className="card-title text-xl">{project.title}</h4>
//                 <div className="flex justify-between mt-4">
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-sm btn-primary text-white hover:scale-105 transition"
//                   >
//                     Demo
//                   </a>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-sm btn-ghost text-xl"
//                   >
//                     <FaGithub />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projets;
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const allProjects = [
  {
    title: "eNaissance",
    image: "/src/assets/enaissance.png",
    demo: "https://demo-enaissance.example.com",
    github: "https://github.com/AmstaLabestar/E-naissance.git",
    category: "Web"
  },
  {
    title: "E-commerce",
    image: "/src/assets/tookos.png",
    demo: "https://demo-ecommerce.example.com",
    github: "https://github.com/AmstaLabestar/tookos.git",
    category: "Web"
  },
  {
    title: "TodoList",
    image: "/src/assets/todo.png",
    demo: "https://demo-todolist.example.com",
    github: "https://github.com/AmstaLabestar/todoWithComponents.git",
    category: "Web"
  },
//   {
//     title: "IA Churn Predictor",
//     image: "/images/ia.png",
//     demo: "https://demo-ia.example.com",
//     github: "https://github.com/toncompte/ia-churn",
//     category: "IA"
//   },
];

const categories = ["Tous", "Web", "Mobile", "IA"];

const Projets = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-base-100" id="projets">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes <span className="text-primary">Projets</span>
        </motion.h2>

        {/* Filtres */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${
                activeCategory === cat ? "btn-primary text-white" : "btn-ghost"
              } transition duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projets filtrés */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="card shadow-xl border border-base-300 overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <figure className="h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </figure>

              <div className="card-body bg-base-100">
                <h4 className="card-title text-xl">{project.title}</h4>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary text-white"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-ghost text-xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;
