import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import enaissanceImg from "../assets/images/enaissance.png";
import tookosImg from "../assets/images/tookos.png";
import todoImg from "../assets/images/todo.png";


const allProjects = [
  {
    title: "eNaissance",
    image: enaissanceImg,
    demo: "https://demo-enaissance.example.com",
    github: "https://github.com/AmstaLabestar/E-naissance.git",
    category: "Web",
  },
  {
    title: "E-commerce",
    image: tookosImg,
    demo: "https://demo-ecommerce.example.com",
    github: "https://github.com/AmstaLabestar/tookos.git",
    category: "Web",
  },
  {
    title: "TodoList",
    image: todoImg,
    demo: "https://demo-todolist.example.com",
    github: "https://github.com/AmstaLabestar/todoWithComponents.git",
    category: "Web",
  },
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
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes <span className="text-primary">Projets</span>
        </motion.h2>

        {/* Filtres */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
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

        {/* Liste des projets */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="card shadow-xl border border-base-300 overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-[1.03]"
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
                  loading="lazy"
                />
              </figure>

              <div className="card-body bg-base-100">
                <h4 className="card-title text-xl">{project.title}</h4>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary text-white hover:scale-105 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-ghost text-xl hover:text-gray-600 transition"
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
