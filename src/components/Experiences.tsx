// // import { motion } from "framer-motion";
// // import { FaReact, FaNodeJs, FaPython, FaBootstrap, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
// // import { SiTailwindcss, SiDjango, SiJavascript } from "react-icons/si";

// // const techs = [
// //   { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
// //   { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
// //   { icon: <SiDjango className="text-green-800" />, name: "Django" },
// //   { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
// //   { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
// //   { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
// //   { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
// //   { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
// //   { icon: <FaPython className="text-blue-400" />, name: "Python" },
// // ];

// // const projects = [
// //   {
// //     title: "eNaissance",
// //     demo: "https://demo-enaissance.example.com", // remplace par ton vrai lien
// //     github: "https://github.com/toncompte/enaissance"
// //   },
// //   {
// //     title: "E-commerce",
// //     demo: "https://demo-ecommerce.example.com",
// //     github: "https://github.com/toncompte/ecommerce"
// //   },
// //   {
// //     title: "TodoList",
// //     demo: "https://demo-todolist.example.com",
// //     github: "https://github.com/toncompte/todolist"
// //   },
// // ];

// // const Experiences = () => {
// //   return (
// //     <div className="py-20 bg-base-100" id="experiences">
// //       <div className="max-w-5xl mx-auto px-4">
// //         <motion.h2
// //           className="text-4xl font-bold text-center mb-12"
// //           initial={{ opacity: 0, y: -40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           Mes <span className="text-primary">Expériences</span>
// //         </motion.h2>

// //         <motion.div
// //           className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mb-16"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //         >
// //           {techs.map((tech, i) => (
// //             <div key={i} className="tooltip tooltip-top" data-tip={tech.name}>
// //               <div className="text-4xl md:text-5xl hover:scale-110 transition duration-300">
// //                 {tech.icon}
// //               </div>
// //             </div>
// //           ))}
// //         </motion.div>

// //         <motion.h3
// //           className="text-2xl font-semibold text-center mb-8"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.1 }}
// //           viewport={{ once: true }}
// //         >
// //           Mes <span className="text-primary">Projets</span>
// //         </motion.h3>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {projects.map((project, i) => (
// //             <motion.div
// //               key={i}
// //               className="card shadow-md border border-base-300"
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: i * 0.1 }}
// //               viewport={{ once: true }}
// //             >
// //               <div className="card-body">
// //                 <h4 className="card-title">{project.title}</h4>
// //                 <div className="flex justify-between mt-4">
// //                   <a href={project.demo} target="_blank" className="btn btn-sm btn-ghost hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
// //                     Demo
// //                   </a>
// //                   <a href={project.github} target="_blank" className="btn btn-sm btn-ghost text-xl">
// //                     <FaGithub />
// //                   </a>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Experiences;
// // Experiences.jsx
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { SiTailwindcss, SiDjango, SiJavascript } from "react-icons/si";

// const techs = [
//   { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
//   { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
//   { icon: <SiDjango className="text-green-800" />, name: "Django" },
//   { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
//   { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
//   { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
//   { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
//   { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
//   { icon: <FaPython className="text-blue-400" />, name: "Python" },
// ];

// const Experiences = () => {
//   return (
//     <section className="py-20 bg-base-100" id="experiences">
//       <div className="max-w-5xl mx-auto px-4">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Mes <span className="text-primary">Expériences</span>
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {techs.map((tech, i) => (
//             <div key={i} className="tooltip tooltip-top" data-tip={tech.name}>
//               <div className="text-4xl md:text-5xl hover:scale-110 transition duration-300">
//                 {tech.icon}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experiences;
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiJavascript } from "react-icons/si";
import experienceImg from "../assets/hamza1.jpg";

const techs = [
  { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiDjango className="text-green-800" />, name: "Django" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
  { icon: <FaPython className="text-blue-400" />, name: "Python" },
];

const Experiences = () => {
  return (
    <section  className="py-20 bg-base-100" id="experiences">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes <span className="text-primary">Expériences</span>
        </motion.h2>

        {/* Layout image + stacks */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          
          {/* Image */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
            style={{
            borderRadius: "113px 51px 200px 200px",
          }}
              src={experienceImg}
              alt="Expérience"
              className="w-full h-auto rounded-3xl shadow-x  md:w-96 object-cover border-8 border-primary shadow-xll"
            />
          </motion.div>

          {/* Stack list */}
          <motion.div
            className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center md:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {techs.map((tech, i) => (
              <div key={i} className="tooltip tooltip-top" data-tip={tech.name}>
                <div className="text-4xl md:text-5xl hover:scale-110 transition duration-300">
                  {tech.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
