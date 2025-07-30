// // Footer.jsx
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-base-200 py-10 mt-20">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
//         {/* Texte gauche */}
//         <div className="text-center md:text-left">
//           <h4 className="text-lg font-semibold">Kabore Daoda</h4>
//           <p className="text-sm text-gray-500">© {new Date().getFullYear()} Tous droits réservés</p>
//         </div>

//         {/* Liens sociaux */}
//         <div className="flex gap-6 text-2xl">
//           <a
//             href="https://github.com/toncompte"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-primary transition"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://linkedin.com/in/tonprofil"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-primary transition"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="mailto:tonemail@example.com"
//             className="hover:text-primary transition"
//           >
//             <FaEnvelope />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        {/* Liens sociaux centrés */}
        <div className="flex justify-center gap-8 text-2xl">
          <a
            href="https://github.com/AmstaLabestar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-bikienga-7b3b152aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:labestar04@gmail.com"
            className="hover:text-primary transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Nom et copyright */}
        <div className="text-sm opacity-70">
          © {new Date().getFullYear()} <span className="font-semibold">Dev4</span> — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
