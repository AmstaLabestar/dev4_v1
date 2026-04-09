import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import dev4Img from "../assets/Hamza.jpg";
import { stats } from "../data/portfolio";

const Home = () => {
  return (
    <section
      id="home"
      className="grid gap-10 pb-16 pt-10 md:min-h-[86vh] md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 md:pb-24 md:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Developpeur full-stack & mobile
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Je conçois des applications rapides, utiles et prêtes pour la production.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
            J&apos;aide des clients et des equipes a transformer une idee en produit deploye:
            interface, backend, dockerisation, CI/CD, configuration Nginx, DNS et mise en
            ligne sur VPS.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#contact"
            className="btn btn-primary h-12 rounded-full border-0 px-6 text-sm font-semibold text-white shadow-none"
          >
            <Mail className="h-4 w-4" />
            Demarrer une discussion
          </a>
          <a
            href="#projets"
            className="btn surface-panel h-12 rounded-full border-0 px-6 text-sm font-semibold text-base-content shadow-none"
          >
            Voir les projets
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/CV_Hamza_BIKIENGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn h-12 rounded-full border border-slate-900/10 bg-transparent px-6 text-sm font-semibold text-base-content shadow-none"
          >
            <Download className="h-4 w-4" />
            Voir le CV
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="surface-panel rounded-[1.75rem] p-5">
              <p className="text-3xl font-bold text-slate-950">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto w-full max-w-md"
      >
        <div className="surface-panel relative overflow-hidden rounded-[2rem] p-3">
          <div className="absolute right-5 top-5 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
            production
          </div>
          <img
            src={dev4Img}
            alt="Portrait de Hamza"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
            loading="eager"
          />
          <div className="absolute bottom-7 left-7 rounded-[1.5rem] bg-white/92 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Focus</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              UI/UX mobile-first, delivery et deploiement
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
